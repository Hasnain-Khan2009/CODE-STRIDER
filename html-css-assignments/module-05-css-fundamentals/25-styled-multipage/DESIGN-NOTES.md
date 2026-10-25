# Assignment 25 — Design Notes (short note on design choices)

**Goal:** a calm, trustworthy look for a student web-lab site that stays readable on long forms.

1. **Colour.** One brand colour (teal `#0f766e`) plus a mint tint for large surfaces and a single amber accent used only for keyboard-focus rings. White text on teal measures about 5.5:1, above the WCAG AA minimum.
2. **Typography.** The system font stack (`system-ui`, Segoe UI, Roboto) loads instantly and looks native on every device. Headings are bold with tight line-height (1.25); body text has generous line-height (1.65) for readability.
3. **Layout.** Content is limited to a 960px centred column so lines stay short. The header and cards use Flexbox; the form fieldsets stack vertically because forms are easiest to scan in one column.
4. **Consistency.** All four pages share one stylesheet and CSS variables (`--teal`, `--radius`, …), so a single change updates the whole site. The current page is highlighted in the navigation via `aria-current="page"`.
5. **Accessibility.** Visible focus outlines, real `<label>`s, table captions and header cells, and sufficient colour contrast.
6. **What comes next.** This version is desktop-first; responsive breakpoints are added in Assignment 41.
