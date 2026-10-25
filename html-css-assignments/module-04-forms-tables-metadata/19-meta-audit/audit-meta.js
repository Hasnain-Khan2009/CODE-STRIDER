#!/usr/bin/env node
/**
 * Assignment 19 — meta-tag audit.
 * Usage (from anywhere):  node module-04-forms-tables-metadata/19-meta-audit/audit-meta.js
 * Scans every .html file in the repository and reports missing meta tags.
 * Intentional exceptions: buggy.html (Assignment 09), before.html (14) and any "before/" folder (42).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', 'before']);
const SKIP_FILES = new Set(['buggy.html', 'before.html']);

const CHECKS = [
  ['doctype',     /<!DOCTYPE html>/i,                                           true],
  ['lang',        /<html[^>]*\slang="[a-z-]+"/i,                                true],
  ['charset',     /<meta\s+charset="utf-8"\s*>/i,                               true],
  ['viewport',    /<meta\s+name="viewport"\s+content="[^"]*width=device-width/i, true],
  ['title',       /<title>\s*\S[^<]*<\/title>/i,                                true],
  ['description', /<meta\s+name="description"\s+content="[^"]{20,}"/i,          true],
  ['author',      /<meta\s+name="author"\s+content="[^"]+"/i,                   false],
  ['theme-color', /<meta\s+name="theme-color"\s+content="#[0-9a-f]{3,8}"/i,     false],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(path.join(dir, e.name), out); }
    else if (e.name.endsWith('.html') && !SKIP_FILES.has(e.name)) out.push(path.join(dir, e.name));
  }
  return out;
}

const files = walk(ROOT).sort();
let failed = 0;
const rows = [];
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const missing = CHECKS.filter(([, re]) => !re.test(html)).map(([n, , req]) => (req ? n : n + ' (recommended)'));
  const missingRequired = CHECKS.filter(([, re, req]) => req && !re.test(html));
  if (missingRequired.length) failed++;
  rows.push([path.relative(ROOT, f), missing.length ? missing.join(', ') : 'OK']);
}
const width = Math.max(...rows.map(r => r[0].length));
for (const [f, m] of rows) console.log(f.padEnd(width) + '  ' + m);
console.log(`\nChecked ${files.length} files — ${files.length - failed} pass, ${failed} need fixes.`);
process.exit(failed ? 1 : 0);
