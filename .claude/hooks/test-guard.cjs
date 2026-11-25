#!/usr/bin/env node
// test-guard.cjs - checks the guardrail without Claude.
// Run it from the project root:  node .claude/hooks/test-guard.cjs
// It sends sample tool calls to guard.cjs and checks each one is blocked (exit 2) or allowed (exit 0).

'use strict';
const path = require('path');
const { spawnSync } = require('child_process');

const GUARD = path.join(__dirname, 'guard.cjs');
const ROOT = 'C:\\Users\\ahmed\\git\\ai-boardroom\\';
const read = (p) => ({ tool_name: 'Read', tool_input: { file_path: ROOT + p } });
const edit = (p) => ({ tool_name: 'Edit', tool_input: { file_path: ROOT + p, old_string: 'a', new_string: 'b' } });
const bash = (c) => ({ tool_name: 'Bash', tool_input: { command: c } });
const ps = (c) => ({ tool_name: 'PowerShell', tool_input: { command: c } });

const MUST_BLOCK = [
  ['Read .env', read('.env')],
  ['Read .env.local', read('.env.local')],
  ['Edit .env', edit('.env')],
  ['Read a key file', read('certs\\server.pem')],
  ['Read the secrets folder', read('secrets\\db.txt')],
  ['Grep inside .env', { tool_name: 'Grep', tool_input: { pattern: 'KEY', path: ROOT + '.env' } }],
  ['cat .env (Bash)', bash('cat .env')],
  ['Get-Content .env (PowerShell)', ps('Get-Content .env | Select-String KEY')],
  ['type .env (cmd)', bash('cmd /c type .env')],
  ['copy .env.example over .env', bash('cp .env.example .env')],
  ['rm -rf', bash('rm -rf node_modules')],
  ['rm -r -f', bash('cd frontend && rm -r -f dist')],
  ['Remove-Item -Recurse', ps('Remove-Item -Recurse -Force target')],
  ['Remove-Item, -Recurse last', ps('Remove-Item -Path _bmad -Force -Recurse')],
  ['rm -r (PowerShell alias)', ps('rm -r _bmad-output')],
  ['rmdir /s', bash('cmd /c rmdir /s /q build')],
  ['git push --force', bash('git push --force origin main')],
  ['git push -f', bash('git push -f')],
  ['git push --force-with-lease', bash('git push --force-with-lease')],
  ['git reset --hard', bash('git reset --hard HEAD~1')],
  ['git clean -fd', bash('git clean -fd')],
  ['DROP DATABASE', bash('psql -c "DROP DATABASE tallmast"')],
  ['flyway clean', ps('.\\mvnw.cmd flyway:clean')],
  ['unreadable input (fails closed)', 'this is not JSON'],
];

const MUST_ALLOW = [
  ['Read CLAUDE.md', read('CLAUDE.md')],
  ['Read .env.example', read('.env.example')],
  ['Read the company context', read('docs\\company-context.md')],
  ['Edit Java code', edit('src\\main\\java\\App.java')],
  ['git status', bash('git status')],
  ['git push', bash('git push origin main')],
  ['git push -u', bash('git push -u origin feature-x')],
  ['git rm -r --cached', bash('git rm -r --cached target')],
  ['git clean -n (dry run)', bash('git clean -n')],
  ['delete one file (rm -f)', bash('rm -f build.log')],
  ['delete one file (Remove-Item)', ps('Remove-Item build.log')],
  ['list files recursively', ps('Get-ChildItem -Recurse src')],
  ['process.env in code', bash('node -e "console.log(process.env.HOME)"')],
  ['the word environment', bash('grep -ri environment docs')],
  ['npm test', bash('npm test')],
  ['mvnw test', ps('.\\mvnw.cmd -q test')],
];

function run(input) {
  const r = spawnSync(process.execPath, [GUARD], {
    input: typeof input === 'string' ? input : JSON.stringify(input),
    encoding: 'utf8',
  });
  return r.status;
}

let failed = 0;
for (const [name, input] of MUST_BLOCK) {
  const code = run(input);
  const ok = code === 2;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  blocked  ${name}${ok ? '' : `  (exit ${code}, expected 2)`}`);
}
for (const [name, input] of MUST_ALLOW) {
  const code = run(input);
  const ok = code === 0;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  allowed  ${name}${ok ? '' : `  (exit ${code}, expected 0)`}`);
}
const total = MUST_BLOCK.length + MUST_ALLOW.length;
console.log(`\n${total - failed} of ${total} checks passed.`);
process.exitCode = failed ? 1 : 0;
