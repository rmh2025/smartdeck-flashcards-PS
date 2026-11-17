# SmartDeck Quality and Operations Baseline

**Baseline date:** 2026-11-16
**Scope:** Current local `main` worktree, the browser-loaded app, and recorded manual/browser test runs.
**Interpretation:** “Pass” means the named check passed in the stated environment. It does not imply full cross-browser coverage, WCAG conformance, or market validation.

## At-a-glance

| Area | Current baseline | Status |
|---|---|---|
| App delivery | One self-contained `index.html`; no framework, build step, or runtime service. | Pass for the class's no-build browser requirement. |
| Source organization | 131,168 bytes, 2,531 lines, 67 named functions, one inline style block, one inline script. Searchable section markers now identify major responsibilities. | Documented; still a large single file by design. |
| Saved data | `localStorage` key `smartdeck.state.v1`; per-browser/device data; JSON deck import/export. | Functional in tested browser; no cloud sync or automatic backup. |
| Market research | Dated static desk-research report and central source library. | Implemented as documentation; no live feed, scraper, or autonomous update process. |
| Automated test infrastructure | The app has no package manifest or runtime/build dependency. Final regression used the shared browser with test storage isolated and restored; no app-specific test runner is committed. | Manual/browser regression passed; a persistent automated suite remains a future improvement compatible with the one-file runtime. |
| Release state | Pre-release: local `main` tracks `origin/main` and was two commits ahead, with the reviewed app/docs changes uncommitted. A GitHub Pages workflow now publishes only `index.html`. | Push and Pages deployment are separate gates; report release complete only after the remote commit and live URL are verified. |

## Operational baseline register

| ID | Operational area | Current observed baseline | Evidence/status | Baseline target or next gate |
|---|---|---|---|---|
| OP-01 | Launch/runtime | Open `index.html` in a modern browser. App logic has no backend, package install, build, account, or required API key. | Source and browser load checked. | Keep the no-build launch path working; test in supported browsers before adding platform APIs. |
| OP-02 | Data and recovery | State is stored under `smartdeck.state.v1`; decks, review state, progression, voice preferences, and custom background are local. JSON export/import is the portability path. Browser storage can be cleared; there is no cloud restore. | State normalization, persistence, import/export were exercised in prior browser tests. | Verify reload and valid export/import after each state-schema change; warn before destructive actions. |
| OP-03 | Core study workflow | Deck/card CRUD, search, flip, navigation, shuffle, four ratings, due study, learned/review piles, repeat, redo, and pile reshuffle are implemented. | Prior broad manual/browser regression passed these flows. | Maintain an acceptance checklist; any changed flow must be re-tested end-to-end. |
| OP-04 | Scheduling and rewards | Simple rating intervals and due-date filtering; self-rated quiz. At least 70% earns a round; 3 consecutive wins earn a tournament; all cards learned earns a subject award. | Boundary, loss-reset, tournament, completion, redo/persistence cases passed in previous test runs. | Keep thresholds described as game rules, not validated learning or mastery measures. |
| OP-05 | Speech | Browser/OS `SpeechSynthesis`; reader and character voices are user-selectable; prompt and completion speech can be stopped. No microphone transcription. | Actual speech start/stop, question/answer side, voice persistence, host rotation, and quiz completion speech passed in this browser session. | Keep visible text equivalent; gracefully disable or explain unavailable voices; retest in other browsers/devices. |
| OP-06 | Source workflow | User-initiated external search; user reviews and pastes permitted material; text is chunked into editable starter cards with optional source URL. The app does not scrape pages. | Source-note creation/search and URL validation were exercised in prior workflow tests. | Keep source attribution and user review; don't imply web results have been verified by the app. |
| OP-07 | Accessibility | Labels and discernible names, visible focus, keyboard flip/quiz paths, dialog close/focus return, live status regions, and reduced-motion CSS are present. | Current DOM check: 0 duplicate IDs and 0 unnamed controls. Keyboard, dialog, and live-announcement paths passed earlier integration tests. | WCAG 2.2 AA is a review target only; full screen-reader, zoom/reflow, and independent assistive-technology testing remain open. |
| OP-08 | Color contrast | Seven representative foreground/background token pairs were calculated: 16.81:1, 8.23:1, 7.14:1, 6.87:1, 6.68:1, 6.17:1, and 10.95:1. | All sampled solid-color pairs exceed 4.5:1. | Not a complete audit: gradients, imagery, hover/focus/disabled states, small text, and every component were not sampled. Recheck uploaded backgrounds. |
| OP-09 | Responsive UI | At 320×568, 390×844, and 1280×800: no horizontal overflow; rendered DOM had no duplicate IDs or unnamed controls. | Current browser check passed all three viewport widths. Earlier layout checks also passed these widths. | Recheck after layout changes; include zoom and mobile assistive-technology testing. |
| OP-10 | Backgrounds and visual settings | PNG/JPEG/WebP background upload/reset with size limits; stored locally with a dark overlay. | Earlier file-input and reset tests passed; the app retains a default theme. | Check error handling and text legibility across actual images and browsers. |
| OP-11 | Privacy and external services | No SmartDeck server or analytics. Source search intentionally opens Google; clicked card-source links navigate externally. | Source and interaction design reviewed. | Explain that a search topic is sent to Google; do not describe the app as completely network-free or as syncing data. |
| OP-12 | Performance and reliability | HTML size is recorded above; no controlled load-time, long-session, storage-quota, or device-performance benchmark exists. | Not measured. | Record browser/device, cache state, sample count, and measured values before setting performance thresholds. |
| OP-13 | Market intelligence | Competitive and design research is a dated manual report; no automated market ingestion or app-side market-report UI exists. | Current implementation and docs reviewed. | Refresh manually before positioning decisions; collect primary user evidence before treating a preference as market demand. |
| OP-14 | Build, tests, and release | No committed app test suite; a Pages-only CI/CD workflow is being added. Pre-release branch was two commits ahead of `origin/main`, with local app/docs changes. | Git status checked 2026-11-16. Publication is not yet verified. | Keep app checks separate from deployment; verify test results, remote contents, and the live site before calling the release complete. |
| OP-15 | Static hosting | `index.html` is self-contained and a GitHub Actions Pages workflow stages only that file for publication. | Workflow added; Pages API was not enabled before release preparation (404). Deployment remains pending until pushed and the Actions run succeeds. | Verify the workflow run, repository Pages settings, and actual served URL; do not infer availability from the expected URL alone. |

## Verification record

These are session-level checks, not a committed automated suite. The latest outcomes were consolidated here on 2026-11-16.

| Test ID | Check | Result | Limits |
|---|---|---|---|
| QA-01 | JavaScript syntax validation and whitespace/diff check | Passed 2026-11-16 using `node --check` on the extracted inline script and `git diff --check`. | The app remains one HTML file with inline JavaScript. |
| QA-02 | Browser load and responsive widths 320×568, 390×844, 1280×800 | Passed in the final browser regression; no horizontal overflow. | One browser environment; not a compatibility matrix. |
| QA-03 | Rendered control names and DOM IDs | Passed: 0 unnamed controls and 0 duplicate IDs in the final heuristic scan. | Automated DOM heuristic, not a screen-reader/name computation audit. |
| QA-04 | Sampled text/surface contrast tokens | Passed for seven sampled pairs (minimum 6.17:1). | Token pairs only; gradients and custom images require separate checks. |
| QA-05 | Voice settings, TTS, stop, selected voice, persistence, host rotation, auto-speak, and result speech | Passed with three available voices; this final run confirmed speech start/stop and selected-voice persistence across reload. | Other systems may expose different voices or no speech service. |
| QA-06 | Spoken quiz focus and announcements | Passed: blank answer validation, keyboard lock-in, focus to reveal/rating, live result, completion focus, dialog Escape, and focus return. | No full screen-reader session was performed. |
| QA-07 | Quiz threshold, loss reset, three-win tournament, subject award, keyboard lock-in, and persistence | Passed in the final regression: 7/10 earns a 70% round, three consecutive wins earn a tournament, 6/10 resets the streak, all learned cards earn the subject award, and records persist after reload. | Quiz answers and rewards are self-rated product rules; the app does not objectively grade free-form answers. |
| QA-08 | Deck/card create, rename, delete, search, four ratings, piles, due study, repeat/redo, shuffle, and empty states | Passed in the final browser regression. | No persistent executable UI-test suite is committed. |
| QA-09 | Source search, notes/card creation and attribution, JSON import/export, invalid JSON handling, and progression export | Passed in the final browser regression; export content and progression fields were inspected. | The source search opens Google results; users review sources themselves. |
| QA-10 | Background upload, size validation, saved image, and reset | Passed with a valid small PNG and an oversized-file rejection; state was restored after the test. | Full image-format/device matrix and storage-quota exhaustion are not tested. |
| QA-11 | Full WCAG conformance, actual screen readers, zoom/reflow, performance, cross-browser behavior, security review, and market demand | Not established. | These are explicitly open, not assumed to pass. |
| QA-12 | Documentation links with Lychee 0.24.2 and anchor-fragment checking | Final run after documentation updates: offline found 52 links (34 unique), checked 17, excluded 35, and reported 0 errors (exit 0). Online found 52 links (34 unique), checked all 52, and reported 0 errors and 2 redirects (exit 0). Lychee was checksum-verified from the official release and removed after use. | Both checks passed; redirects were followed. Recheck external links periodically. |
| QA-13 | Class checklist recorded in `README.md` | The single-file browser package, CSS-variable dark theme, labels/focus, empty states, invalid-input feedback, small rendering helpers, and five-part reflection draft were reviewed. | The reflection still needs the owner's final review. The README contains the available assignment excerpt, not a separate complete handout; verify any additional class criteria against the original rubric before submission. |
| QA-14 | GitHub Pages publication | Workflow stages only `index.html`, with no app build dependencies. | Not yet verified live; require a successful Actions deployment and browser check of the final URL. |

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
