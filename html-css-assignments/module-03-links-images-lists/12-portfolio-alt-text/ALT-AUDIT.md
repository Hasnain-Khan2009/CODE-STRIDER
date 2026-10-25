# Assignment 12 — Alt-text Audit

Rule used: *alt describes what the image shows and why it matters on this page.* Avoid "image of…" and filenames like `img1.png`.

| Image file | `alt` text | Why it is good |
|------------|-----------|----------------|
| `avatar.svg` | Illustrated avatar of Aarav Sharma, a student with a teal background | Identifies the person and the kind of image |
| `project1.svg` | Quiz app home screen showing a bar graphic of five score columns | Describes the visible content |
| `project2.svg` | Weather widget mock-up with a sun above layered hills | Describes the scene, not the filename |
| `project3.svg` | Recipe finder mock-up showing five round ingredient icons | Describes content and context |

**Result:** 4 / 4 images have a meaningful `alt` (0 empty, 0 missing).
**Also done:** explicit `width` and `height` (prevents layout shift) and `<figure>`/`<figcaption>` for captions.
