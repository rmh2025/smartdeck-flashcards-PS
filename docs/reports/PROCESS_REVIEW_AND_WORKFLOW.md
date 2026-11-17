# Project Process Review and Reusable Workflow

**Review date:** 2026-11-16
**Evidence:** The SmartDeck conversation recorded in this session, project checkpoints, the current files, and browser/test summaries.
**Purpose:** Improve how the human/AI team aligns, builds, verifies, documents, and releases future work. This is a process review, not an evaluation of the project owner's skill.

## What happened in this project

The work began with the class constraint: a browser-based flashcard app using plain HTML, CSS, and JavaScript with no build tools. It grew through deck/card management, persistence, search, source-note creation, JSON portability, review scheduling, custom appearance, speech, accessibility, a tabletop interface, and self-rated progression rewards. The owner repeatedly emphasized learning the process, keeping assignment requirements central, supporting accessibility, and testing all workflows. A source library and this report set were added after identifying that research and testing evidence needed a central home.

The conversational record also shows early confusion about which text belongs in the editor versus the terminal, the active working folder, and what stage of the build was underway. Later, the owner said that clear outcome-based prompts and restating the shared section/goal helped. That is a useful process finding: AI output quality depends on shared state and acceptance criteria, not only on writing more code.

## SWOT

| Category | Evidence-based observation | Response in this project / next action |
|---|---|---|
| **Strengths** | The owner brought clear product values: accessible interaction, optional speech, customizable appearance, understandable progress, and a real class rubric. They supplied concrete UI outcomes and asked for tests rather than accepting a first draft. | Keep the owner's goal and assignment constraints visible in every work brief. Explain technical terms and connect each feature to the UI and requirement it serves. |
| **Strengths** | The app has no build/runtime dependency, preserves data locally, supports import/export, and has been exercised through end-to-end browser workflows. | Preserve the simple launch path; keep test data isolated and restore real user state after tests. |
| **Weaknesses** | Early editor/terminal and workspace confusion consumed effort; several messages were needed to recover shared context. | Start every coding session with workspace, file, current phase, exact next action, and whether the user should type in the editor or terminal. Use one command/action at a time for a learner who requests step-by-step guidance. |
| **Weaknesses** | Requirements expanded substantially after implementation began. There was no durable backlog, decision log, requirement-to-test trace, or report index at the start. | Use the phased workflow and change record below; label additions as current scope, next phase, or deferred. |
| **Weaknesses** | The app is a 2,500+ line single-file application with no committed automated test runner. Manual test history was stored in session summaries rather than reproducible project artifacts. | Section markers and a quality baseline now make it easier to navigate. Add a minimal repeatable test suite when compatible with the assignment; do not make a risky monolith rewrite just for appearances. |
| **Weaknesses** | Early competitor and learning references were scattered. Some previous summaries became stale (for example, listing voice checks as pending after those checks had been completed). | Use dated reports and the repository's current status as the source of truth; treat conversation summaries/checkpoints as history, not current test evidence. |
| **Opportunities** | A careful first-hand usability study can identify which parts are genuinely easier for students, beginners, and people using different access methods. | Run voluntary, formative user sessions and task comparisons; record barriers without collecting diagnoses or unnecessary personal data. |
| **Opportunities** | A repeatable acceptance matrix, accessibility review, and small browser automation suite would reduce regression effort. | Convert the QA baseline into executable tests incrementally, starting with persistence, ratings, quiz boundaries, and dialog/keyboard behavior. |
| **Opportunities** | The current local-data design can be made clearer and safer through export reminders and documented recovery limits; sync could be considered later if users require it. | Do not add a backend until a validated user need, privacy model, and maintenance owner exist. |
| **Threats** | Feature expansion could create a crowded product that is harder to use or maintain, especially while staying in one file. | Require each feature to solve a user task, have acceptance criteria, and justify maintenance cost. Defer unsupported ideas. |
| **Threats** | Browser storage may be cleared; speech voices and behavior vary by device; competitor pages and access tiers change. | Explain limitations, keep visible text and JSON exports, test graceful degradation, and date-stamp external research. |
| **Threats** | Self-ratings, streaks, and game rewards can be mistaken for objective mastery or proven retention improvement. | Keep labels and reports explicit that quiz scores are self-rated milestones; do not market the app as scientifically superior. |
| **Threats** | Local tests can pass while a remote branch is stale, credentials are missing, or uncommitted changes are omitted. | Separate “tested locally,” “committed,” and “verified on GitHub” states in release reporting. Never claim a push succeeded without checking the remote. |

## Process changes made in this review

- Added a dated competitor and UI/accessibility baseline, with vendor claims separated from research evidence.
- Added a quality/operations register that shows pass, partial, not measured, and not tested statuses rather than implying universal success.
- Added source and report indexes plus instructions for coding assistants to consult them.
- Added searchable CSS and JavaScript section markers to the single-file app and updated the README's code map.
- Ran Lychee 0.24.2 from a checksum-verified temporary download: offline local links and online links both passed after correcting an outdated Anki URL. Lychee remains optional and is not an app dependency or committed CI requirement.
- Added a GitHub Pages workflow that publishes only the self-contained `index.html`; remote deployment must still be verified independently.
- Kept market monitoring out of the running app. A static, dated desk scan is available now; continuous market collection would need a data source, server or service, privacy review, refresh policy, and a maintainer.
- Recorded that the current target market is a hypothesis; no market-size or user-preference claims were fabricated.

## Lessons from final verification

- Keep the exact assignment handout with the project. The README currently preserves the QA checklist and complete/incomplete reflection rubric, but it may not contain every requirement from the original handout; do not claim a full rubric audit without comparing that source.
- Isolate and restore browser storage during UI testing. The final regression used temporary test data and restored the existing browser state afterward.
- Make test expectations match the feature contract, not an assumption. For example, the material-to-card feature combines short adjacent paragraphs into one chunk; a test should validate chunking rules rather than assume one card per paragraph.
- Distinguish application failures from test-harness failures. On a failed assertion, record the exact UI state and reproduce the behavior manually before changing product code.
- Plan release hosting with the initial requirements. GitHub Pages needs a successful workflow and a live-site check; a pushed commit or an expected URL alone is not proof that the app is published.
- After testing, update every dated status claim together (QA matrix, report index, process notes, and release state) so old “not run” statements do not contradict newer evidence.

## Reusable human/AI development workflow

| Phase | Human + AI actions | Required artifact | Exit check |
|---|---|---|---|
| **0. Align and set up** | Confirm user outcome, audience, rubric, constraints, urgency, workspace, branch, and whether the user wants explanation, a plan, or implementation. Explain editor vs terminal. | Short task brief with in-scope/out-of-scope items and workspace state. | Both agree what is being changed, where, and why. |
| **1. Inspect and baseline** | Read the user-facing docs, relevant code, current git status, existing tests, data model, and prior decisions. Back up or isolate real user data before testing. | Current-state/operations row with date, evidence, and unknowns. | Existing behavior and dirty work are known; no user changes are overwritten. |
| **2. Research and classify evidence** | Classify each claim as peer-reviewed evidence, a standard, official platform documentation, competitor marketing, user preference, or design judgment. Reopen current sources when version matters. | Source entry with URL, date, scope, limitations, and the decision it informs. | No unsupported claim is presented as fact; unresolved evidence gaps are named. |
| **3. Design and define acceptance** | Select the smallest useful implementation. Map each requirement to visible behavior, data changes, accessibility, error handling, and tests. Ask when a choice materially changes user experience or architecture. | Feature brief and acceptance checklist. | A tester can tell objectively when the change works and what is deliberately deferred. |
| **4. Implement a vertical slice** | Make surgical changes following project patterns; preserve existing behavior and the assignment constraints. Add a focused test for new/fixed behavior and update directly related docs. | Code diff, source links where relevant, and updated feature map. | The feature works end to end; no silent failure or success-shaped fallback. |
| **5. Verify and record** | Run syntax/static checks, the smallest relevant tests, then connected workflow tests. Include keyboard, responsive, speech, persistence, and reduced-motion checks when affected. Record the environment and restore test data. | Dated test record with test IDs, result, evidence, and gaps. | All critical acceptance checks pass, or remaining failures are explicitly blocked/not tested. |
| **6. Review and learn** | Compare the diff with scope, inspect errors and accessibility, recheck source claims, and record a short retrospective. | Review notes and updated SWOT/work item if a recurring process issue was found. | No unrelated edits; known risks and follow-up work are owned. |
| **7. Release and communicate** | Confirm branch/remote, inspect status and diff, verify tests, obtain human approval, commit and push only as authorized, then check the remote. | Release note with tested/committed/pushed states separated. | Remote content is verified; user receives clear next steps and limitations. |

### Standard feature/change record

Copy this structure into a task or issue when useful; small changes can use a shorter version.

```text
ID / title:
User problem and expected outcome:
Assignment/product constraints:
Audience and assumptions:
Evidence or source (URL, date, scope, limitation):
Acceptance criteria:
Files/behaviors affected:
Risks and accessibility considerations:
Tests (environment, steps, result):
Known gaps / not tested:
Status: proposed | in progress | tested | blocked | released
Human approval / release decision:
```

### Standard operational baseline record

For each operational part (feature, data, accessibility, performance, research, release), record:

```text
Baseline ID:
Observed value or behavior:
Measurement definition:
Environment and date:
Evidence / test ID:
Confidence: high | medium | low
Target or next decision:
Known limitations:
Owner for the next update:
```

Do not invent a numeric baseline when no measurement exists. Mark it **not measured**, define a repeatable measurement, and only then choose a target. A small usability sample is formative, not statistically representative; a contrast-token check is not a full WCAG audit; a feature list is not proof of market demand.

For recurring documentation-link checks, prefer [Lychee](https://github.com/lycheeverse/lychee) over a home-grown Markdown regex. Use its offline/local checking for repository references and online checking for public URLs; keep it outside the browser app's runtime dependencies.

## Recommended next decisions

1. Confirm the intended geography and learner segment before any market-size or pricing research.
2. Run formative task sessions with students/independent learners and people who use different access methods; validate the problems before adding features.
3. Decide whether cross-device backup/sync is needed; local-only storage is the main portability limitation.
4. Add a small executable regression suite without changing the app's no-build runtime.
5. Schedule a manual competitor/source refresh before major strategy decisions; keep the report date and evidence quality visible.
