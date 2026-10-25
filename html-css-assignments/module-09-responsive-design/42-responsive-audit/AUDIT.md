# Assignment 42 — Responsiveness Audit

**Project audited:** TrailMart store page (product cards, size-guide table, newsletter form). It combines pieces from the earlier table, card and form assignments.

## How I audited
1. Opened `before/index.html` and switched DevTools to device mode at 375px.
2. Looked for a horizontal scrollbar, text that is too small, overlapping boxes and tiny tap targets.
3. Ran Lighthouse (Mobile) → Accessibility/Best Practices checks.
4. Fixed each issue in `after/style.css` and re-tested at 320, 375, 768 and 1280px.

## Issues and fixes
| # | Issue (in `before/`) | Why it breaks on small screens | Fix (in `after/`) |
|---|----------------------|--------------------------------|--------------------|
| 1 | No `<meta name="viewport">` | Phones render a ~980px desktop page and shrink it | Added `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| 2 | `body{min-width:1024px}` | Forces a horizontal scrollbar below 1024px | Removed; layout is fluid |
| 3 | `.header`, `.products`, `.footer` use `width:1000px` | Fixed pixel widths ignore the screen | Removed widths; elements fill their container |
| 4 | Product cards `float:left; width:300px` | Three cards need 960px | CSS Grid with `repeat(auto-fit, minmax(min(100%,220px),1fr))` |
| 5 | Hero `height:600px`, `padding:120px 80px`, `h1{font-size:64px}` | Text overflows and wastes the whole phone screen | `clamp()` for padding and font size, no fixed height |
| 6 | Size table `width:800px` with `white-space:nowrap` | Table is wider than the viewport | Wrapped in `.table-wrap{overflow-x:auto}` (keyboard-focusable region) |
| 7 | `.banner{width:900px}` | Image is wider than the screen | `max-width:100%; height:auto` |
| 8 | `.wide-input{width:600px}` | Input pushes the page wider | `width:100%; max-width:480px` |
| 9 | Nav links `font-size:12px; padding:2px 4px` | Tap targets far below the 44×44px guideline | Padding and `min-height:44px` |
| 10 | Body `font-size:14px; line-height:1.2` | Small, cramped text | `font-size:1rem; line-height:1.6` |
| 11 | Nav `display:inline-block` with fixed margins | Links overflow instead of wrapping | `display:flex; flex-wrap:wrap; gap` |

## Result
No horizontal scrolling at 320px and all interactive elements are at least 44px tall.
