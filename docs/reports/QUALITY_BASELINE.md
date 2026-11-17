# SmartDeck Quality and Operations Baseline

**Baseline date:** 2026-11-17
**Scope:** Current local `main` worktree, the browser-loaded app, and recorded manual/browser test runs.
**Interpretation:** “Pass” means the named check passed in the stated environment. It does not imply full cross-browser coverage, WCAG conformance, or market validation.

## At-a-glance

| Area | Current baseline | Status |
|---|---|---|
| App delivery | One self-contained `index.html`; no framework, build step, or runtime service. | Pass for the class's no-build browser requirement. |
| Source organization | 136,483 bytes, 2,611 lines, one inline style block, one inline script. Searchable section markers identify major responsibilities. | Documented; still a large single file by design. |
| Saved data | `localStorage` key `smartdeck.state.v1`; per-browser/device decks, study data, voice choices, appearance palette, and custom background; JSON deck import/export. | Functional in tested browser; no cloud sync or automatic backup. |
| Market research | Dated static desk-research report, source library, and research-to-operations traceability table. | Findings map to controls and checks; no live feed, scraper, or autonomous update process. |
| Automated test infrastructure | The app has no package manifest or runtime/build dependency. Final regression used the shared browser with test storage isolated and restored; no app-specific test runner is committed. | Manual/browser regression passed; a persistent automated suite remains a future improvement compatible with the one-file runtime. |
| Release state | Pre-release: the local checkout includes commit `990e7a0` and the appearance/source-discovery follow-up. The earlier push attempt was blocked because GitHub credentials were unavailable to this session; no live deployment is verified. | Push and Pages deployment are separate gates; report release complete only after authentication, remote verification, a successful Pages run, and a live URL check. |

## Operational baseline register

| ID | Operational area | Current observed baseline | Evidence/status | Baseline target or next gate |
|---|---|---|---|---|
| OP-01 | Launch/runtime | Open `index.html` in a modern browser. App logic has no backend, package install, build, account, or required API key. | Source and browser load checked. | Keep the no-build launch path working; test in supported browsers before adding platform APIs. |
| OP-02 | Data and recovery | State is stored under `smartdeck.state.v1`; decks, review state, progression, voice preferences, appearance palette, and custom background are local. Existing state without a palette defaults to obsidian. JSON export/import is the portability path. Browser storage can be cleared; there is no cloud restore. | State normalization, persistence, import/export were exercised; palette migration passed the final follow-up regression. | Verify reload and valid export/import after each state-schema change; warn before destructive actions. |
| OP-03 | Core study workflow | Deck/card CRUD, search, flip, navigation, shuffle, four ratings, due study, learned/review piles, repeat, redo, and pile reshuffle are implemented. | Prior broad manual/browser regression passed these flows. | Maintain an acceptance checklist; any changed flow must be re-tested end-to-end. |
| OP-04 | Scheduling and rewards | Simple rating intervals and due-date filtering; self-rated quiz. At least 70% earns a round; 3 consecutive wins earn a tournament; all cards learned earns a subject award. | Boundary, loss-reset, tournament, completion, redo/persistence cases passed in previous test runs. | Keep thresholds described as game rules, not validated learning or mastery measures. |
| OP-05 | Speech | Browser/OS `SpeechSynthesis`; reader and character voices are user-selectable; prompt and completion speech can be stopped. No microphone transcription. | Actual speech start/stop, question/answer side, voice persistence, host rotation, and quiz completion speech passed in this browser session. | Keep visible text equivalent; gracefully disable or explain unavailable voices; retest in other browsers/devices. |
| OP-06 | Source workflow | User-initiated external search; source form provides a selectable Copilot prompt and a JSON import path; user reviews and pastes permitted material or imports reviewed JSON with source URLs. The app does not scrape pages or contact an AI service. | Source-note creation/search, URL validation, JSON import, keyboard-opened help, prompt selection, and visible import action were checked. | Keep source attribution and user review; don't imply web results have been verified by the app. |
| OP-07 | Accessibility | Labels and discernible names, visible focus, keyboard flip/quiz paths, dialog close/focus return, live status regions, and reduced-motion CSS are present. | Current DOM check: 0 duplicate IDs and 0 unnamed controls. Keyboard, dialog, and live-announcement paths passed earlier integration tests. | WCAG 2.2 AA is a review target only; full screen-reader, zoom/reflow, and independent assistive-technology testing remain open. |
| OP-08 | Color contrast | Seven earlier representative foreground/background token pairs exceeded 4.5:1. A follow-up computed foreground contrast for the primary-button text against all three accent stops in each of the four palettes; minimum was 6.17:1. | All sampled palette/button pairs exceed 4.5:1. | Not a complete audit: gradients between stops, imagery, hover/focus/disabled states, small text, and every component were not sampled. Recheck uploaded backgrounds. |
| OP-09 | Responsive UI | At 320×568, 390×844, and 1280×800: no horizontal overflow; rendered DOM had no duplicate IDs or unnamed controls. | Current browser check passed all three viewport widths. Earlier layout checks also passed these widths. | Recheck after layout changes; include zoom and mobile assistive-technology testing. |
| OP-10 | Backgrounds and visual settings | Four accent palettes plus PNG/JPEG/WebP background upload/reset with size and pixel limits; palette and image are stored locally, and a dark overlay remains over photos. | Earlier file-input/reset tests passed; this follow-up verified all palette choices, reload persistence, legacy-state fallback, contrast, photo coexistence, and that photo reset preserves the palette. | Check error handling and text legibility across actual images and browsers; palette choices are curated, not automatically derived from the image. |
| OP-11 | Privacy and external services | No SmartDeck server or analytics. Source search intentionally opens Google; clicked card-source links navigate externally. | Source and interaction design reviewed. | Explain that a search topic is sent to Google; do not describe the app as completely network-free or as syncing data. |
| OP-12 | Performance and reliability | HTML size is recorded above; no controlled load-time, long-session, storage-quota, or device-performance benchmark exists. | Not measured. | Record browser/device, cache state, sample count, and measured values before setting performance thresholds. |
| OP-13 | Market intelligence | Competitive and design research is a dated manual report; no automated market ingestion or app-side market-report UI exists. | Current implementation and docs reviewed. | Refresh manually before positioning decisions; collect primary user evidence before treating a preference as market demand. |
| OP-14 | Build, tests, and release | No committed app test suite; a Pages-only CI/CD workflow and the appearance/source-discovery follow-up are present in the local checkout. | The earlier push was blocked because this session had no available GitHub credentials. Publication is not verified. | Commit any reviewed local changes, sign in to GitHub through the user's preferred local workflow, then verify remote contents and the live site before calling the release complete. |
| OP-15 | Static hosting | `index.html` is self-contained and a GitHub Actions Pages workflow stages only that file for publication. | Workflow is committed locally but not pushed; the earlier Pages API check returned 404 and no workflow run is available yet. | After authenticated push, verify the workflow run, Pages configuration, and actual served URL; do not infer availability from the expected URL alone. |
| OP-16 | Research-to-operations | Product, learning, accessibility, and market findings are mapped to UI decisions, components, checks, and update triggers in the market report. | Static, dated research with traceability; no analytics, scraper, or autonomous market feed. | Refresh public competitor evidence quarterly or before a positioning decision; use voluntary usability data before treating a segment or preference as validated. |

## Verification record

These are session-level checks, not a committed automated suite. The latest outcomes were consolidated here on 2026-11-17.

| Test ID | Check | Result | Limits |
|---|---|---|---|
| QA-01 | JavaScript syntax validation and whitespace/diff check | Passed 2026-11-17: Node parsed the inline script and `git diff --check` reported no whitespace errors. | The app remains one HTML file with inline JavaScript. |
| QA-02 | Browser load and responsive widths 320×568, 390×844, 1280×800 | Passed in the final browser regression; no horizontal overflow. | One browser environment; not a compatibility matrix. |
| QA-03 | Rendered control names and DOM IDs | Passed in the follow-up scan: 0 unnamed interactive controls and 0 duplicate IDs after adding the appearance and source-workflow controls. | Automated DOM heuristic, not a screen-reader/name computation audit. |
| QA-04 | Sampled text/surface contrast tokens | Passed for seven sampled pairs (minimum 6.17:1). | Token pairs only; gradients and custom images require separate checks. |
| QA-05 | Voice settings, TTS, stop, selected voice, persistence, host rotation, auto-speak, and result speech | Passed with three available voices; this final run confirmed speech start/stop and selected-voice persistence across reload. | Other systems may expose different voices or no speech service. |
| QA-06 | Spoken quiz focus and announcements | Passed: blank answer validation, keyboard lock-in, focus to reveal/rating, live result, completion focus, dialog Escape, and focus return. | No full screen-reader session was performed. |
| QA-07 | Quiz threshold, loss reset, three-win tournament, subject award, keyboard lock-in, and persistence | Passed in the final regression: 7/10 earns a 70% round, three consecutive wins earn a tournament, 6/10 resets the streak, all learned cards earn the subject award, and records persist after reload. | Quiz answers and rewards are self-rated product rules; the app does not objectively grade free-form answers. |
| QA-08 | Deck/card create, rename, delete, search, four ratings, piles, due study, repeat/redo, shuffle, and empty states | Passed in the final browser regression. | No persistent executable UI-test suite is committed. |
| QA-09 | Source search, notes/card creation and attribution, JSON import/export, invalid JSON handling, and progression export | Passed in the final browser regression; export content and progression fields were inspected. | The source search opens Google results; users review sources themselves. |
| QA-10 | Background upload, size validation, saved image, and reset | Passed: the visible UI accepted a valid PNG, retained the selected palette, restored both after reload, and reset only the photo. Earlier valid upload/save/reset and oversized-file rejection checks also passed. | Full image-format/device matrix and storage-quota exhaustion are not tested. |
| QA-11 | Full WCAG conformance, actual screen readers, zoom/reflow, performance, cross-browser behavior, security review, and market demand | Not established. | These are explicitly open, not assumed to pass. |
| QA-12 | Documentation links with Lychee 0.24.2 and anchor-fragment checking | Last successful scan on 2026-11-16: offline found 52 links (34 unique), checked 17, excluded 35, and reported 0 errors. Online checked all 52 and reported 0 errors and 2 redirects. A rerun on 2026-11-17 was blocked because Lychee is not installed in the current environment. | The dated successful scan is evidence for that revision only; rerun after installing Lychee before release. |
| QA-13 | Class checklist recorded in `README.md` | The single-file browser package, CSS-variable dark theme, labels/focus, empty states, invalid-input feedback, small rendering helpers, and five-part reflection draft were reviewed. | The reflection still needs the owner's final review. The README contains the available assignment excerpt, not a separate complete handout; verify any additional class criteria against the original rubric before submission. |
| QA-14 | GitHub Pages publication | Workflow stages only `index.html`, with no app build dependencies. | Not yet verified live; require a successful Actions deployment and browser check of the final URL. |
| QA-15 | Appearance customization and saved state | Passed targeted checks: all four palettes applied and persisted; reload and legacy-state fallback worked; primary-button text contrast was at least 6.17:1 on sampled stops; no horizontal overflow at 320, 390, or 1280px; PNG upload, reload, and photo reset preserved the selected palette. | Existing LocalStorage and viewport were restored. Image-format/device matrix and all-component contrast remain untested. |
| QA-16 | Research-to-deck guidance | Passed 6 browser assertions: source action and dialog are discoverable; help opens by keyboard; prompt is selectable with Ctrl+C feedback; no-scrape/source-review limits are clear; JSON import is visible as the completion step. | Browser app does not browse, scrape, or verify sources; users review research and JSON before import. |

## Class-requirements crosswalk

The only assignment checklist located in the project is the excerpt in `README.md`. This crosswalk reports against that excerpt, not an unavailable full handout.

| Requirement recorded in README | Implementation and evidence | Status and limits |
|---|---|---|
| Accessible input labels, discernible button names, and visible focus | Final DOM scan found no unnamed controls; keyboard flip, quiz controls, dialog Escape, and focus return were exercised. | Meets the checked behaviors. A screen-reader session and full WCAG audit remain unverified. |
| Empty states for no decks and no matching cards | Empty messages exist for no decks, empty decks, and zero search results; the final browser regression exercised empty states. | Passed in the tested browser. |
| Error handling for invalid inputs and empty deck names | Form validation, invalid JSON import feedback, and oversized background-image rejection were exercised. | Passed for tested cases; storage quota failures and exhaustive malformed inputs were not tested. |
| Basic theming with CSS variables and a dark appearance | Theme tokens are defined as CSS custom properties, and `color-scheme: dark` plus the obsidian/brass palette provide a consistent dark-first interface. | Implemented as a dark-first app; it does not offer a separate light theme or switch themes based on the operating system. |
| Keep rendering logic in small functions | `render()` delegates to `renderDecks()`, `renderStage()`, `renderCardList()`, and `renderStats()`. | Implemented; the one-file assignment constraint is preserved. |
| Minimal data model shown for reference | Deck/card CRUD, browser persistence, and JSON portability are implemented. The README labels its sample schema “for reference.” | Functional data behavior is tested; exact schema matching is not claimed or treated as a rubric requirement. |
| Five-bullet reflection | Five required topics are present in the README reflection section. | Draft exists, but the owner must review and personalize it before submission. |
| Complete/incomplete rubric: code package attempts the assigned task and includes reflection | The app runs in a browser and the listed workflows were tested; the reflection draft is present. | Meets the requirements found in the README excerpt. Confirm any additional requirements against the original handout. |

## Release gate

Before calling a future update “ready”:

1. Recheck the relevant feature acceptance criteria and app syntax.
2. Run the affected browser workflows plus the core smoke set; preserve and restore user data during tests.
3. Check keyboard operation, names/labels, focus, reduced motion, and responsive overflow for affected UI.
4. Record any unmet tests as **not tested** or **blocked**, not as passes.
5. Review `git diff`, confirm no unrelated or private data, then ask for approval before publishing. Report GitHub as updated only after verifying the remote.
