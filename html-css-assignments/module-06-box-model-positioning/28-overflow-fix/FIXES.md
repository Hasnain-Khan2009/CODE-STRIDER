# Assignment 28 — Overflow Fixes

Open `broken.html`, shrink the window and watch the horizontal scrollbar. Then open `fixed.html`. Both use the same HTML; only the CSS differs.

| # | Problem in `broken.css` | Why it overflows | Fix in `fixed.css` |
|---|-------------------------|------------------|--------------------|
| 1 | No `box-sizing` reset | `width` excludes padding and border, so `.sidebar` is really 350px, not 300px | `*{box-sizing:border-box}` |
| 2 | `.top{width:100vw}` plus padding | `100vw` includes the scrollbar and padding is added on top | Remove the width; block elements fill their parent automatically |
| 3 | `.container{width:1100px; overflow:hidden}` | Fixed width ignores small screens; `overflow:hidden` hides the problem instead of fixing it | `max-width:1100px` + flexible flex layout |
| 4 | `.sidebar` and `.content` floated with fixed pixel widths (300 + 800) | They cannot fit side by side on narrow screens | `display:flex; flex-wrap:wrap` with `flex-basis` values so they wrap |
| 5 | `margin-left:-20px` on `.content` | Negative margin drags content outside its container | Removed; spacing handled with `gap` |
| 6 | Long unbroken URL | A single word wider than its box cannot wrap | `overflow-wrap:anywhere` |
| 7 | `img{width:1200px}` | Image is wider than every container | `max-width:100%; height:auto` |
| 8 | `pre{white-space:pre}` with no overflow rule | Long code line runs out of the box | `white-space:pre-wrap` + `overflow-x:auto` |
| 9 | `table{width:900px}` with `nowrap` cells | Fixed width wider than the card | `width:100%` and the card scrolls horizontally with `overflow-x:auto` |

**Rule of thumb:** never use `overflow:hidden` to hide an overflow bug — find the element that is too wide (DevTools → hover elements, or add `* {outline:1px solid red}` temporarily).
