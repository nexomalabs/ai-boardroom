#!/usr/bin/env node
// guard.cjs - the project guardrail (a Claude Code PreToolUse hook).
//
// Claude Code runs this script before every tool call listed in .claude/settings.json.
// It receives the planned call as JSON on stdin, for example:
//   {"tool_name":"Read","tool_input":{"file_path":"C:\\Users\\ahmed\\git\\ai-boardroom\\.env"}}
//
// Exit 0 = allow. The normal permission prompts still apply.
// Exit 2 = block. Claude sees the message printed to stderr and has to change approach.
//
// Test it without Claude:  node .claude/hooks/test-guard.cjs
// Keep this file plain ASCII: the message shows up in Git Bash and PowerShell.

'use strict';

// .env.example and friends hold no secrets, so they stay readable.
const SAFE_ENV = /^\.env\.(example|sample|template)$/;

// Files Claude must never read or write (Read, Write, Edit, Grep).
function secretFileReason(filePath) {
  if (!filePath) return null;
  const full = String(filePath).replace(/\\/g, '/').toLowerCase();
  const name = full.split('/').pop();
  if (/^\.env(\..+)?$/.test(name) && !SAFE_ENV.test(name)) return 'it is a .env file, and .env files hold secrets';
  if (/\.(pem|key|p12|pfx|jks)$/.test(name)) return 'it is a key or certificate file';
  if (/^id_(rsa|ed25519|ecdsa)/.test(name)) return 'it is an SSH key';
  if (/(^|\/)secrets\//.test(full)) return 'it is in the secrets folder';
  return null;
}

// The same files, named inside a shell command (cat .env, Get-Content .env, type .env ...).
function secretInText(text) {
  if (!text) return null;
  const s = String(text);
  // ".env" as its own name: not process.env, not .environment, not .env.example
  for (const m of s.matchAll(/(?:^|[^\w.-])(\.env(?:\.[\w-]+)*)(?![\w-])/gi)) {
    if (!SAFE_ENV.test(m[1].toLowerCase())) return 'the command touches a .env file, and .env files hold secrets';
  }
  if (/[\w-]\.(pem|p12|pfx|jks)(?![\w-])/i.test(s)) return 'the command touches a key or certificate file';
  if (/\bid_(rsa|ed25519|ecdsa)\b/i.test(s)) return 'the command touches an SSH key';
  if (/(^|[\s"'\/\\])secrets[\/\\]/i.test(s)) return 'the command touches the secrets folder';
  return null;
}

// Commands Claude must never run. Bash, PowerShell and cmd spellings, because on Windows
// Claude often runs its commands through PowerShell.
const DANGEROUS_COMMANDS = [
  { why: 'it deletes a folder and everything in it (rm -r / rm -rf)',
    test: /(?<![\w.-])(?<!git\s+)rm\s+(?:[^;&|\n]*\s)?(?:-[a-z]*r[a-z]*|--recursive)(?=\s|$)/i },
  { why: 'it deletes a folder and everything in it (Remove-Item -Recurse)',
    test: /(?<![\w-])(?<!git\s+)(remove-item|ri|rm|rmdir|rd|del|erase)\s+(?:[^;&|\n]*\s)?-r(?:ec\w*)?(?![\w-])/i },
  { why: 'it deletes a folder and everything in it (rd /s, del /s)',
    test: /(?<![\w-])(rd|rmdir|del|erase)\s[^;&|\n]*\/s(?![\w-])/i },
  { why: 'it force-pushes and can overwrite history on GitHub (git push --force)',
    test: /\bgit\s[^;&|\n]*\bpush\b[^;&|\n]*(\s--force\b|\s-[a-z]*f[a-z]*(?![\w-])|\s\+[\w\/.-]+)/i },
  { why: 'it throws away uncommitted work (git reset --hard)',
    test: /\bgit\s[^;&|\n]*\breset\b[^;&|\n]*\s--hard\b/i },
  { why: 'it deletes untracked files (git clean -f)',
    test: /\bgit\s[^;&|\n]*\bclean\b[^;&|\n]*(\s-[a-z]*f|\s--force\b)/i },
  { why: 'it wipes a database (DROP DATABASE / DROP SCHEMA)',
    test: /\bdrop\s+(database|schema)\b/i },
  { why: 'it wipes the database schema (flyway clean)',
    test: /\bflyway\b[^;&|\n]*\bclean\b|\bflywayclean\b/i },
];

function dangerousCommand(cmd) {
  const hit = DANGEROUS_COMMANDS.find((rule) => rule.test.test(cmd));
  return hit ? hit.why : null;
}

// Returns the reason to block, or null to allow.
function check(call) {
  const tool = call.tool_name || '';
  const input = call.tool_input || {};
  if (['Read', 'Write', 'Edit', 'MultiEdit', 'NotebookEdit'].includes(tool)) {
    return secretFileReason(input.file_path || input.notebook_path);
  }
  if (tool === 'Grep') return secretFileReason(input.path) || secretInText(input.glob);
  if (tool === 'Bash' || tool === 'PowerShell') {
    const cmd = String(input.command || '');
    return secretInText(cmd) || dangerousCommand(cmd);
  }
  return null;
}

function block(message) {
  process.stderr.write(message + '\n');
  process.exitCode = 2;
}

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { raw += chunk; });
process.stdin.on('end', () => {
  let call;
  try {
    call = JSON.parse(raw.replace(/^﻿/, '')); // Windows PowerShell adds a BOM when you pipe a test call in
  } catch {
    // Fail closed: a guard that cannot read the call must not wave it through.
    block('Blocked by the project guardrail: it could not read this tool call, so it blocked it to be safe. ' +
          'Tell the user that .claude/hooks/guard.cjs may be broken.');
    return;
  }
  const reason = check(call);
  if (reason) {
    block(`Blocked by the project guardrail (.claude/hooks/guard.cjs): ${reason}.\n` +
          'This is a project rule, not an error. Do not try another way to do the same thing. ' +
          'Tell the user what you wanted to do and why. If it is really needed, the user will do it.');
  }
});
