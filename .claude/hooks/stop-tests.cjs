#!/usr/bin/env node
// stop-tests.cjs - the test gate (a Claude Code Stop hook).
//
// Claude Code runs this script every time Claude finishes a reply.
// If the code changed since the last green run, it runs the test suite:
//   tests pass -> exit 0: Claude stops normally.
//   tests fail -> exit 2: Claude may not stop yet. It gets the failing output and keeps working.
//
// It stays quiet until the project has code. It switches itself on when it finds a Maven or
// Gradle wrapper (mvnw / gradlew) in the project root or in backend/.
// When only documents changed (_bmad-output/, _bmad/, docs/, .claude/, *.md), it skips the tests.

'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

// '' = find the test command by itself. 'off' = never run tests.
// Or write your own, for example '.\\mvnw.cmd -q test && npm --prefix frontend test'.
// On Windows it runs in cmd.exe, from the project root.
const TEST_COMMAND = '';

// After this many failed runs in one turn, Claude must report to you instead of retrying.
const MAX_TRIES = 3;

const NOT_CODE = [/^_bmad-output\//, /^_bmad\//, /^docs\//, /^\.claude\//, /\.md$/i];
const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const STATE_FILE = path.join(ROOT, '.claude', 'hooks', '.state', 'stop-tests.json');

function findTestCommand() {
  if (TEST_COMMAND === 'off') return null;
  if (TEST_COMMAND) return { cmd: TEST_COMMAND, cwd: ROOT };
  const win = process.platform === 'win32';
  for (const dir of ['.', 'backend']) {
    const cwd = path.join(ROOT, dir);
    // Write .\ in front: cmd.exe started from Node doesn't look in the current folder by itself.
    if (fs.existsSync(path.join(cwd, win ? 'mvnw.cmd' : 'mvnw'))) {
      return { cmd: win ? '.\\mvnw.cmd -q test' : './mvnw -q test', cwd };
    }
    if (fs.existsSync(path.join(cwd, win ? 'gradlew.bat' : 'gradlew'))) {
      return { cmd: win ? '.\\gradlew.bat test -q' : './gradlew test -q', cwd };
    }
  }
  return null;
}

function git(args, input) {
  const r = spawnSync('git', args, { cwd: ROOT, input, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return r.status === 0 ? r.stdout : '';
}

const isCode = (p) => !NOT_CODE.some((re) => re.test(p));

// A hash of every code file as it is on disk right now, using Git's own file hashes, so the
// same code gives the same answer before and after a commit. Document changes leave it the
// same, so writing a PRD never triggers a test run.
function fingerprint() {
  const files = new Map(); // path -> Git hash
  for (const entry of git(['ls-tree', '-r', '-z', 'HEAD']).split('\0')) {
    const tab = entry.indexOf('\t');
    if (tab > 0 && isCode(entry.slice(tab + 1))) files.set(entry.slice(tab + 1), entry.slice(0, tab).split(' ')[2]);
  }
  const entries = git(['status', '--porcelain', '-z', '--untracked-files=all']).split('\0');
  const changed = new Set();
  for (let i = 0; i < entries.length; i++) {
    if (!entries[i]) continue;
    changed.add(entries[i].slice(3));
    if (/[RC]/.test(entries[i].slice(0, 2))) changed.add(entries[++i]); // a rename lists the old path next
  }
  const onDisk = [];
  for (const p of changed) {
    if (!p || !isCode(p)) continue;
    let isFile = false;
    try { isFile = fs.statSync(path.join(ROOT, p)).isFile(); } catch {}
    if (isFile) onDisk.push(p); else files.delete(p); // deleted files drop out
  }
  if (onDisk.length) {
    const hashes = git(['hash-object', '--stdin-paths'], onDisk.join('\n') + '\n').trim().split(/\r?\n/);
    onDisk.forEach((p, i) => files.set(p, hashes[i] || 'unknown'));
  }
  const h = crypto.createHash('sha256');
  for (const p of [...files.keys()].sort()) h.update(`${p}:${files.get(p)}\n`);
  return h.digest('hex');
}

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return {}; }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function main(raw) {
  let input = {};
  try { input = JSON.parse(raw.replace(/^﻿/, '') || '{}'); } catch {}

  const test = findTestCommand();
  if (!test) return 0; // no code yet, or switched off

  const state = loadState();
  const fp = fingerprint();
  if (fp === state.green) return 0; // nothing changed since the last green run
  if (!input.stop_hook_active) state.tries = 0; // a new message from you starts a new count
  if (fp === state.failed && state.tries >= MAX_TRIES) return 0; // Claude was told to report, and changed nothing since

  const r = spawnSync(test.cmd, { cwd: test.cwd, shell: true, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.status === 0) {
    saveState({ green: fp, tries: 0 });
    return 0;
  }

  state.tries = (state.tries || 0) + 1;
  state.failed = fp;
  saveState(state);
  const output = [r.error && String(r.error), r.stdout, r.stderr].filter(Boolean).join('\n')
    .trim().split(/\r?\n/).slice(-60).join('\n');
  const lead = state.tries >= MAX_TRIES
    ? `The tests still fail after ${state.tries} tries. Stop changing code. Tell the user which tests fail and what you think the cause is.`
    : 'The tests fail, so this work is not done yet. Fix the failing tests, then finish.';
  process.stderr.write(`Test gate (.claude/hooks/stop-tests.cjs): ${lead}\n` +
    'If the failure comes from the environment (for example, Docker is not running), do not change code: tell the user.\n' +
    `Command: ${test.cmd}\n--- last lines of the test output ---\n${output}\n`);
  return 2;
}

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { raw += chunk; });
process.stdin.on('end', () => { process.exitCode = main(raw); });
