# Assignment 23 — Font pairing and colour palette

## Font pairing
| Role | Font | Fallback | Why |
|------|------|----------|-----|
| Headings | **Lora** (serif, 600/700) | Georgia, serif | A calm, readable serif gives the resume a professional voice |
| Body | **Source Sans 3** (sans-serif, 400/600) | system-ui, Arial | Clean humanist sans stays legible at small sizes |

The two faces contrast clearly (serif vs. sans), which is what makes a pairing work. Fonts load from Google Fonts; if offline, the fallback stack is used.

## Palette
| Name | Hex | Used for |
|------|-----|----------|
| Ink | `#1f2937` | Body text |
| Teal | `#0f766e` | Header band, section headings, links |
| Mint | `#ccfbf1` | Skill chips and entry rules |
| Amber | `#b45309` | Link hover accent |
| Desk | `#e7efee` | Page background behind the "paper" |

**Contrast:** white on teal ≈ 5.5:1 and amber on white ≈ 5:1, both above the 4.5:1 WCAG AA minimum for body text.
