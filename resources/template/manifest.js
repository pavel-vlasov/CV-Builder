/* CV Builder — template manifest.
 * Lists every template file the app should load. Browsers can't list a
 * folder's contents from client-side JS, so this file is the index.
 *
 * To add a template:
 *   1. Drop a new <id>.template.js file next to this one (see
 *      leadex.template.js for the expected shape — it must self-register
 *      into window.CVB.templates.<id> via an IIFE).
 *   2. Add one entry below.
 *
 * Loaded as a classic <script src> (not fetch()) so this works under
 * file:// with no local server — do not convert this to JSON/fetch.
 *
 * Also add the new file to PRECACHE_URLS in sw.js so it's available offline.
 */
window.CVB = window.CVB || { templates: {} };
window.CVB.templateManifest = [
  { id: 'leadex-ops-dashboard', file: 'leadex-ops-dashboard.template.js', name: 'Leadex — Ops Dashboard' },
  { id: 'leadex-market-analytics', file: 'leadex-market-analytics.template.js', name: 'Leadex — Market Analytics' },
  { id: 'leadex-cloud-native', file: 'leadex-cloud-native.template.js', name: 'Leadex — Cloud Native' },
  { id: 'minimalist-editorial', file: 'minimalist-editorial.template.js', name: 'Minimalist — Editorial' },
  { id: 'leadex-american-notebook', file: 'leadex-american-notebook.template.js', name: 'Leadex — American Notebook' },
  { id: 'leadex-integration-partner', file: 'leadex-integration-partner.template.js', name: 'Leadex — Integration Partner' },
  { id: 'leadex-vintage-comic', file: 'leadex-vintage-comic.template.js', name: 'Leadex — Vintage Comic' },
  { id: 'leadex-paper-resume', file: 'leadex-paper-resume.template.js', name: 'Leadex — Paper Resume' },
  { id: 'leadex-minimal-editorial', file: 'leadex-minimal-editorial.template.js', name: 'Minimal Editorial Resume' }
];
