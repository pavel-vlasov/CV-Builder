# Raw template → integrated template: playbook

Checklist for turning a new designer-delivered raw HTML file (like `leadex_cv_template-1.html` or `leadex_cv_template_new_banner_v5.html`) into a selectable app template (`<id>.source.html` + `<id>.template.js`). Written from the `leadex-banner` integration (2026-07-09) — follow this instead of re-deriving the approach from scratch.

## 1. Recognize a "raw" file

Signs a delivered `.html` file is a raw designer mockup, not yet integrated:
- `contenteditable="true"` on text elements
- Hardcoded example content at a **fixed count** (exactly N skills/projects/experience items/etc., not data-driven)
- `{{TOKEN}}` placeholders may already be present, but mixed in with hardcoded example text
- Not referenced anywhere in `index.html`, no entry in `resources/template/manifest.js`
- File size wildly larger than the rendered content justifies → almost always an oversized embedded `data:image` base64 blob

Confirm before editing: `grep -c contenteditable`, check for `<!--CVB:` markers (raw files have none), check file size vs. line count (huge size + few lines = embedded base64).

## 2. Audit checklist — find these before touching anything

Run through every one of these on the raw file. Don't assume any are absent just because the last integration didn't have one.

1. **Oversized embedded images.** Extract every `data:image/...;base64,...` blob, check native pixel dimensions (`System.Drawing` `Bitmap.Width/Height` in PowerShell) against the actual on-screen CSS display size (aspect-ratio box / width / max-width). Oversized by 2x+ is common (designer exports at full source resolution).
2. **`{{TOKEN}}` glued to leftover example prose in the same text node.** e.g. `{{PROFESSIONAL_SUMMARY}} Example: I design, implement...`. Naive token substitution leaves the example sentence sitting right after real data. Check every single token occurrence individually — this is often inconsistent within one file (some tokens clean, some glued, no pattern).
3. **Fixed-cardinality sections** — skills tag list, industries, certifications, education, languages, projects, tech panels, experience — all hardcoded to some small N with no repeat structure. Compare against `test-data/cv-extensive.json` array lengths to size the mismatch.
4. **Certifications must NOT hardcode specific badge/logo images.** If you see hardcoded hotlinked cert badge PNGs (e.g. real MuleSoft/AWS/Salesforce badge images), or any other per-cert icon/logo markup, that's wrong — all 3 current templates render certifications as plain title-only chips (`{{TITLE}}`, no icon/logo of any kind). Strip any icon/logo imagery down to just the title text; don't preserve or reintroduce it.
5. **Industries** should use `{{MEDIA}}` (→ always the initials-letter fallback div, never an `<img>`) / `{{TITLE}}` — industries carry no icon URL field at all anymore, so there's no `onerror` path to wire up.
6. **Language names hardcoded** (e.g. literal "English"/"Russian" text with only level tokenized) instead of a full `{{LINE}}` token.
7. **Accumulated CSS "patch" blocks.** If the file has been iterated on (look for comment headers like "v3", "v4", "corrected variant", "proportion update"), there may be multiple sequential blocks re-overriding the same selectors via `!important`. Only the last one's *overridden* properties are still visible — but an earlier block may hold properties (background image, structural layout, an entire unrelated selector like the footer) that no later block touches. **Never delete a whole block on the assumption it's fully superseded — diff property-by-property first.** It's normal to find 3-4+ blocks stacked (e.g. `corrected variant 01` → `v3` → `v4` → `v7 sharpness fix`), each with its own `@media` sub-blocks. If the cascade already resolves correctly — verify with `getComputedStyle` on the final element, see 5.10 — and merging would be a pure readability refactor with zero behavior change, it's fine to leave the blocks stacked and spend the time on the functional fixes instead. Hand-collapsing hundreds of lines of `!important` cascades for no visible benefit is where integrations most often introduce an accidental regression.
8. **Dead CSS from a previous design iteration** — selectors for elements that no longer exist in the body (e.g. an old header layout's classes after a redesign). Grep the selector's class name against the actual `<body>` markup before removing; a class can look dead but still be silently relied on for a shared property another live selector doesn't redeclare.
9. **Fully hardcoded sections with zero tokens.** Some fixed-cardinality sections (point 3) carry no `{{TOKEN}}` at all — plain hardcoded text, e.g. a "Technical expertise" panel with static bullet copy, or a skills list of literal `<li>MuleSoft</li>`. Grepping for `{{` will not surface these; you have to read every section's actual content, not just scan for placeholders.
10. **Decorative hardcoded content with no backing data field** — e.g. small per-card tag chips (`<span>MuleSoft</span><span>Payments</span>`) glued onto a project or experience card with no corresponding field anywhere in the CV data schema. Don't invent a fake token for these — drop the element, unless the closest already-integrated sibling template (see 3.4) wires the same element to a real field.

## 3. Fix, in this order

1. **Images first.** Extract base64 → files (Node: regex out `data:image/(\w+);base64,(...)`, `Buffer.from(..., 'base64')` → write). Inspect real dimensions (PowerShell `System.Drawing.Bitmap`). Resize with `Graphics.DrawImage` + `InterpolationMode.HighQualityBicubic` at the real display size (×2 for retina headroom is enough, not ×5+). Photographic/no-alpha content → JPEG (check `PixelFormat` — `Format24bppRgb` = no alpha = safe for JPEG; `Format32bppArgb` = has alpha = keep PNG). Re-embed via regex substitution on the original file text — never hand-paste a multi-MB base64 string through a tool call, always script it (Node `fs.readFileSync(...).toString('base64')` → string-replace).
2. **Strip glued example text** — reduce every token+example pair down to just the token.
3. **CSS cleanup** — merge patch blocks property-by-property into one rule per selector (later block wins per-property, earlier block's untouched properties survive); remove confirmed-dead selectors; leave anything you're not 100% sure about rather than guessing.
4. **Add CVB markers**, one section at a time, using the exact syntax already in an existing integrated `<id>.source.html` as the reference (grep it for `CVB:section <name>` before inventing your own shape). Don't default to the first template you find — if the raw file is a visual variant of an *already-integrated* design family (same class names: `tag-list`, `industry-grid`/`industry-card`, `badge-wall`/`badge-card`, `two-col`/`panel`, `timeline`/`item`, etc.), diff its class names against every existing `*.source.html` first and use whichever one actually shares that structure (e.g. `leadex-ops-dashboard.source.html`, not an unrelated one). Its markup is usually copy-paste identical modulo CSS, which turns the whole marker pass mechanical instead of inventive:

   | Data field | Wrapper | Unit tokens |
   |---|---|---|
   | `skills` | `section`+`repeat` | `{{LABEL}}` |
   | `industries` | `section`+`repeat` | `{{MEDIA}}` `{{TITLE}}` + nested `section industryDesc` → `{{DESCRIPTION}}` |
   | `certifications` | `section`+`repeat` | `{{TITLE}}` |
   | `education` | `section`+`repeat` | `{{LINE}}` |
   | `languages` | `section`+`repeat` | `{{LINE}}` |
   | `professionalSummary` | `section` only (scalar) | `{{PROFESSIONAL_SUMMARY}}` |
   | `projects` | `section`+`repeat` | `{{NAME}}` + nested `section projectDesc` → `{{DESCRIPTION}}` |
   | `techPanels` | `section`+`repeat`, nested `repeat techBullets` | `{{TITLE}}` (panel) / `{{TEXT}}` (bullet) |
   | `experience` | `section`+`repeat`, nested `repeat achievements` | `{{POSITION}}` `{{DATE_FROM}}` `{{DATE_TO}}` + nested `section experienceCompany` → `{{COMPANY_LINE}}` / achievements `{{TEXT}}` |

   Hero/footer scalar fields (name, role, email, phone, city, metrics numbers, footer tagline/note) can stay plain `{{TOKEN}}`s with no section wrapper if the design always shows them unconditionally — only wrap in `<!--CVB:section-->` if the field should visually disappear entirely when empty.

5. Do all HTML edits as a single scripted pass (Node, string-replace with an assert-exactly-one-match helper) rather than many manual `Edit` calls — raw files are large enough that a mis-scoped `Edit` `old_string` is easy to get subtly wrong, and a script lets you re-run from scratch if one step is off.

## 4. Wire it in

1. `resources/template/<id>.source.html` = the fixed, marker-ized file. If the raw file is a variant of an already-integrated design (see 3.4) — e.g. a filename like `..._v7_sharp_header.html` that's structurally the same family as an existing template — pick `<id>` as a descriptive name reflecting the design (e.g. `leadex-market-analytics`), not an unrelated name, so the manifest stays scannable as a family.
2. `resources/template/<id>.template.js` — generate by reading the source html and `JSON.stringify`-ing it into a `SOURCE` constant (never hand-write the embedded HTML). `render(data, ctx)` mirrors an existing integrated template (e.g. `leadex-ops-dashboard.template.js`) function-for-function: one `expandSection`+`expandRepeat` call per array field (same field names as the table above), ending in one flat `fillTokens()` call for the remaining scalars. Copy that template's certifications logic verbatim (plain `{{TITLE}}` chip, no icon/logo markup at all) and its industries logic verbatim (`{{MEDIA}}` → always the initials-letter fallback div, never an icon library or URL, + `{{TITLE}}`) — don't reinvent either. After writing the file, run `node --check <id>.template.js` before moving on — a syntax error here fails silently until the browser actually tries to load the template.
3. Add `{ id, file, name }` to `templateManifest` in `resources/template/manifest.js`.
4. Add `resources/template/<id>.template.js` to `PRECACHE_URLS` in `sw.js`. Check the comment at the top of `sw.js` first — if it documents a network-first strategy (this project does), adding a precache URL does **not** need a `CACHE_NAME` version bump; only bump it if that comment says otherwise.
5. Leave the original raw file untouched at the repo root, same as `leadex_cv_template-1.html` — it's the reference copy, not something to edit in place.

## 5. Test (use the `Claude_Preview` MCP tools against the `cv-builder-static` server, not the raw file directly)

1. Load `index.html` (not the raw template file — test through the real app so you're exercising `mergeCVData`/the fill engine, not guessing).
2. Select the new template: `byId('templateSelect').value = '<id>'; state.activeTemplateId = '<id>';`
3. Load stress-test data the same way the real Import button does, without needing a native file picker:
   ```js
   const parsed = await (await fetch('/test-data/cv-extensive.json')).json();
   state.data = mergeCVData(parsed);
   onDataChanged();
   setActiveTab('preview');
   measurePreviewHeight();
   ```
4. **Count check** — query the iframe's `contentDocument` directly and compare against the JSON's array lengths (skills/industries/certifications/education/languages/projects/techPanels/experience + achievements-per-item). Counts must match exactly; if they don't, a marker is missing or a fallback path is being hit.
5. **Leftover-artifact check**: `doc.body.innerHTML.match(/\{\{[A-Z0-9_]+\}\}/g)` must be empty, and must not contain `"Example:"` — either means a glued-text or missing-token spot survived.
6. **Certification chip check**: every certification unit should render as a plain text chip (`{{TITLE}}` only) — never an `<img>`, `<svg>`, or any icon/logo markup. Confirms certifications stay title-only, matching all 3 current templates, with no icon/logo slipping back in.
7. **Responsive breakpoint check** without needing a real resize: temporarily set `iframe.style.transform='none'; iframe.style.width='<breakpoint-px>'` and read `getComputedStyle()` on the key selectors inside `iframe.contentDocument`, then restore — the app's own zoom/scale logic decouples the outer browser viewport from the iframe's layout width, so `preview_resize` alone won't trigger the template's `@media` breakpoints.
8. **Regression check**: switch back to every *other* existing template id and re-run the count + leftover-token checks — confirms shared-file edits (`manifest.js`, `sw.js`) didn't break anything already working.
9. Check `preview_console_logs` (must be empty/clean) and `preview_network` with `filter: 'failed'` (expect no failed requests at all — certifications and industries no longer reference any external icon URL, so there's nothing left that's *expected* to 404; any failure here is a real regression, not a graceful fallback case).
10. **CSS patch-cascade sanity check** (only relevant if 2.7 applied and you left stacked patch blocks unmerged): pick 2-3 properties you expect the *last* block to control (e.g. `aspect-ratio`, `background-size`) and 1-2 you expect an *earlier* block to still control because nothing later touches it (e.g. `background-image`, `isolation`), then read them with `getComputedStyle()` inside `iframe.contentDocument` and confirm each resolved to the value you predicted from reading the source top-to-bottom. This is the actual proof the cascade does what you think — a screenshot alone can't tell "right value, right reason" apart from "right value, only because two blocks happen to agree."

## 6. Known gotchas

- **`preview_screenshot` can hang/time out for reasons unrelated to your change** (seen hanging even on a freshly reloaded, unmodified `index.html`). If it times out, don't assume your change broke rendering — fall back to `preview_eval`/`preview_inspect`/DOM queries for verification; they're more reliable and usually sufficient anyway.
- **`preview_click` on a tab/button can silently no-op** (reports success but the app's `onclick` handler doesn't visibly run). If state doesn't change after a click, call the underlying function directly via `preview_eval` (e.g. `setActiveTab('preview')`) instead of fighting the click simulation.
- **iframe height measurement**: this app already guards against the classic vh/scrollHeight feedback loop (collapses `iframe.style.height` to `0px` before measuring, see `measurePreviewHeight()` in `index.html`) — a template using `min-height: 100vh` is fine as-is, don't add your own workaround.
- **`Read` tool cannot load a file with one giant single-line base64 blob** even with `offset`/`limit` scoped away from that line, if the requested line range still happens to include it — split reads to land strictly before/after the blob's line number.
- Large multi-step text edits on a huge raw HTML file are safer as one Node script (read whole file, sequential string-replaces with an assert-exactly-one-match guard, write once) than a long chain of `Edit` calls.
- **`preview_start`'s reported port can be wrong.** If the port configured in `launch.json` is already taken (e.g. by another session's server in the same folder), the underlying process (`npx serve`) silently picks its own fallback port and logs it (`Accepting connections at http://localhost:XXXXX`), but the port `preview_start`/`preview_list` *report* can point at a proxy that refuses every connection (`ERR_CONNECTION_REFUSED`). If navigation fails, check `preview_logs` for the process's own "Accepting connections" line and `preview_eval`-navigate straight there (`window.location.href = 'http://localhost:<real-port>/...'`) — the rest of the `preview_*` tools keep working against the page fine once it's loaded on that port.
- **Inline `node -e "..."` through the Bash tool mangles Windows paths.** Backslash-heavy absolute paths (especially with spaces, like this repo's own folder) get corrupted across the Bash→cmd escaping layers — string concatenation silently drops path separators and you get a confusing `ENOENT` on a mangled path. Always `Write` the script to a `.js` file first, then run `node <path>`; never pass a multi-line or path-heavy script as an inline `-e` string.
- **PowerShell `-ExecutionPolicy Bypass` gets auto-denied** by the safety classifier as a "disarms a security control" action, even for a script you just wrote yourself in the scratchpad. Just invoke the script directly — `& "C:\path\to\script.ps1"` — without the bypass flag; it runs fine without it in this environment.
