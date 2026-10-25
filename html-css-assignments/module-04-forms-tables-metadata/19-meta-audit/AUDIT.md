# Assignment 19 — Meta-tag Audit of Every HTML File

## Tags every page must have
| Tag | Purpose | Required? |
|-----|---------|-----------|
| `<!DOCTYPE html>` | Turns on standards mode | Yes |
| `<html lang="en">` | Language for screen readers, translation, hyphenation | Yes |
| `<meta charset="UTF-8">` | Correct characters (₹, é, …); must be in the first 1024 bytes | Yes |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes pages mobile-friendly | Yes |
| `<title>` | Browser tab, bookmarks and search results | Yes |
| `<meta name="description" content="…">` | Snippet shown by search engines | Yes |
| `<meta name="author" content="…">` | Page author | Recommended |
| `<meta name="theme-color" content="#0f766e">` | Colours the mobile browser bar | Recommended |

## How the audit was done
1. Wrote `audit-meta.js` (Node.js, no installs needed). It scans every `.html` file in the repository and checks the tags above with regular expressions.
2. Ran it from the repository root:
   ```bash
   node module-04-forms-tables-metadata/19-meta-audit/audit-meta.js
   ```
3. Added the missing tags to any file reported, then re-ran until it printed no problems.

## Result
```text
Checked 51 files — 51 pass, 0 need fixes.
```

## Files intentionally excluded
| File | Reason |
|------|--------|
| `module-02-…/09-debug-buggy-html/buggy.html` | It is the *broken* file to debug — its bugs (including missing meta tags) are listed in `BUGS.md`; the corrected `fixed.html` is audited |
| `module-03-…/14-semantic-refactor/before.html` | Deliberately weak "before" version of the semantic-refactor assignment |
| `module-09-…/42-responsive-audit/before/` | Deliberately non-responsive page (no viewport tag) used for the responsiveness audit |

## Before / after example
```html
<!-- before -->
<head>
  <title>Aarav Sharma — Intro</title>
</head>

<!-- after -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Personal introduction page of Aarav Sharma, a BCA (AI) first-semester student.">
  <meta name="author" content="Aarav Sharma">
  <meta name="theme-color" content="#0f766e">
  <title>Aarav Sharma — Intro</title>
</head>
```
