# Assignment 43 — Where I used Grid and where I used Flexbox

I recreated a simple café landing page. The rule I followed: **Grid for the 2-D structure of a section (rows *and* columns); Flexbox for a single row or column of items inside a component.**

| Part of the page | Tool | Why |
|------------------|------|-----|
| Header: logo, links, button | Flexbox | One row; `margin-left:auto` pushes links to the right |
| Hero (text + illustration) | Grid | Two columns that must stay aligned, collapses to one column on mobile |
| Hero buttons | Flexbox | A wrapping row of items with a gap |
| Menu (6 dishes) | Grid | Even three-column grid of equal cards |
| Dish name and price | Flexbox | `justify-content:space-between` puts name left and price right |
| Story (image + text) | Grid | Two unequal columns (`1fr 1.3fr`) |
| Facts row | Flexbox | Items sit in a row and wrap naturally |
| Visit section (address + hours) | Grid | Two equal columns |
| Opening-hours rows | Flexbox | Day on the left, time on the right |
| Footer | Flexbox | Copyright on the left, links on the right |

**If your teacher gave a specific reference image:** keep this file structure, change the content and colours to match it, and update the table above.
