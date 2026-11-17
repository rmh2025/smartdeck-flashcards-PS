# Product, Market, and UI Research Baseline

**Snapshot date:** 2026-11-17
**Evidence type:** Public-source competitive desk scan plus the project owner's stated design preferences.
**Confidence:** High for what the reviewed pages currently say; low for market demand, market size, and comparative usability.

## Executive summary

SmartDeck currently combines browser-local flashcards, four complete interface themes, visible user-selected backgrounds, browser speech, self-rated quiz rounds, JSON portability, and a material-to-draft-card builder. The defensible positioning hypothesis is:

> **A low-setup, customizable personal study space for practicing recall and reviewing progress, with optional speech and transparent self-rating.**

This is a product hypothesis, not proof that SmartDeck is better than competitors or that a specific population prefers it. We have not conducted customer interviews, a survey, a controlled competitor usability study, market sizing, pricing analysis, or longitudinal learning research.

The competitor scan found established products emphasizing scheduling, content libraries, pasted/file-based import, AI-assisted study creation, multiple study modes, and progress features. Owner feedback identified two gaps in the prior strategy: calling accent-only color changes “themes,” and burying bulk material conversion behind a manual one-card editor. Those were real product gaps, not just discoverability issues. SmartDeck now offers materially different visual presets and a visible material-to-card workflow. Its local, heuristic drafts are not equivalent to competitor AI generation; this difference and the browser's page-access limits must remain clear. The changes are based on one owner's expressed needs, not validated market demand.

## Competitive snapshot

The scan uses public product pages and help articles opened on 2026-11-16 and targeted competitor material-import pages rechecked on 2026-11-17. Competitor descriptions below are publisher-described features, not independent product tests. Pricing, accessibility conformance, card quality, and actual user outcomes were not compared.

| Product | Publicly described emphasis | What SmartDeck should learn or verify |
|---|---|---|
| [Anki](https://apps.ankiweb.net/) | Official product pages describe scheduled reviews, AnkiWeb synchronization, media, layout/review customization, add-ons, and public deck sharing. | Strong reference for scheduling and portability. SmartDeck has only simple local intervals and no sync; don't imply feature parity or comparable retention results. |
| [Quizlet](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet) | Help Center describes flashcard sets, progressive Learn, tests, study guides, activities, and AI-powered tools. Its import guide accepts pasted term-definition rows using selected separators and also points to AI study guides/Smart Assist for unorganized notes. Some functions have eligibility or plan limits. | A reference for lowering friction between existing notes and sets. SmartDeck now supports local paste/file drafts and CORS-permitted page loading, but does not match Quizlet's AI generation or account-based feature set. Streaks are product examples, not evidence that SmartDeck's reward rules improve learning. |
| [Brainscape](https://www.brainscape.com/) | Markets AI-assisted flashcard creation/discovery, spaced repetition, progress metrics, and a library of publisher-described certified decks. | Signals competition around content discovery and automated creation. Its marketing and certification statements were not independently tested; SmartDeck does not currently generate cards with an AI service. |
| [Knowt](https://knowt.com/ai-flashcard-maker) | Official AI Flashcard Maker page advertises pasting notes or uploading up to 30 files, including PDF, image, video, PowerPoint, and audio, to generate cards and other study activities. | This is an important source-to-study workflow benchmark. These are vendor claims, not an independent quality or learning-outcome evaluation; upload processing and privacy differ from SmartDeck's local-only text builder. |
| **SmartDeck (current)** | One HTML file; browser-local persistence; four full visual systems (type, shape, spacing, layout, and colors); custom background; material links/text/Markdown/HTML files; local term-definition, Q/A, heading, and prose draft generation with editable preview; JSON import/export; optional speech and self-rated rewards. | Preserve the no-build, source-review, user-control approach. Direct URL loading is limited to HTTPS text/HTML pages whose servers permit browser CORS, with no login credentials or proxy. PDFs, full-site crawling, unrestricted book extraction, remote AI, cloud sync, and validated mastery scoring are not implemented. |

### Competitive conclusions

- The category is feature-rich; merely adding streaks or voice is not a defensible advantage.
- The clearest testable distinction is **simple, customizable, and local-first study**, not “the best flashcard app.”
- Avoid comparing learning effectiveness from feature lists. Competitor marketing is not outcome evidence.
- Static public pages do not establish market share, accessibility quality, customer satisfaction, or underserved demand.
- No price comparison was made. Do not publish pricing claims from this snapshot.
- Source-to-set friction is a core competitive workflow, not a minor utility. The prior review underweighted this because it documented the Copilot JSON path instead of comparing the shortest paste/import journey.

## What SmartDeck is missing and how to compete

This is a capability comparison, not a ranking of product quality. It is based on the official competitor pages linked above and in the [reference library](../REFERENCE_LIBRARY.md), checked 2026-11-17. Availability can vary by plan, account, platform, or product changes.

| Capability | Competitor evidence | SmartDeck today | Gap and consequence |
|---|---|---|---|
| Broad content import and AI-assisted creation | Knowt advertises multiple media/file inputs and generated study materials; Quizlet documents paste import and AI study-guide tools. | Local heuristic generation from pasted notes, text/Markdown/HTML files, and direct HTTPS text/HTML only when CORS permits. | **Major gap:** no PDF, image, audio, video, slide, authenticated page, full-book extraction, or in-app AI. Large or protected sources require user-selected supported text, not an attempted bypass. |
| Study modes and adaptive scheduling | Quizlet documents Learn, Test, activities, and study guides; Anki documents scheduled reviews and configurable study workflows. | Flashcard review, self-rated Again/Hard/Good/Easy intervals, due cards, quiz rounds, and game rewards. | **Major gap:** fewer modes and a simpler schedule; current rewards and self-ratings do not prove mastery or learning effectiveness. |
| Shared libraries and collaboration | Anki describes public deck sharing; Quizlet documents sets and sharing. | Personal decks stored in one browser profile; no public library, class spaces, or collaborative editing. | **Major gap:** no discovery or group workflow. Adding sharing would introduce moderation, rights, privacy, and account/security requirements. |
| Sync, device continuity, and recovery | Anki documents AnkiWeb synchronization; Quizlet documents web and mobile study experiences. | Browser `localStorage` and manual JSON deck portability. | **Major gap:** no automatic backup, sync, account, or native mobile app. Browser data can be cleared; exported JSON is a manual recovery path, not sync. |
| Media-rich cards and accessibility assurance | Competitor pages document some media/study options; public feature pages do not establish WCAG conformance. | Text-first cards, optional browser speech, four complete themes, background choice, keyboard support, and reduced-motion styling. | **Partial strength and open gap:** personalization is implemented, but media-rich cards and independent assistive-technology/WCAG verification are absent. Do not claim accessibility superiority. |

### Practical way to outperform the category

Do not try to match every competitor feature or claim that SmartDeck is already better. Test a narrower promise: **a fast, understandable, user-controlled path from permitted study notes to editable cards and a first review, with local storage and clear limits.**

1. Run the same short tasks and same source material in SmartDeck and selected competitors. Record task completion, elapsed time, abandoned attempts, source-access failures, and how many generated cards learners keep or materially edit.
2. Observe intended learners using keyboard, speech, zoom, and their chosen display settings. Report barriers and task success, not just preference votes or a checklist.
3. Keep the low-friction paste/file route and transparent source attribution. Improve import formats only after deciding how to handle privacy, copyright, security, and local-versus-server processing.
4. Preserve local-first data control and make recovery limits visible. Consider sync or collaboration only after demand and the resulting account, backup, access-control, and operational obligations are understood.
5. Set numeric performance and accessibility targets from a documented pilot baseline; until then, completion time, draft usefulness, and market preference are **not measured**.

Competitor pages describe features; they do not disclose the companies' internal design psychology. Competitor reviews also have not been sampled, so no review-derived user needs or pain-point prevalence is claimed. See the [research plan](#research-plan-before-making-market-claims) before using review or user-study evidence.

## Final scorecard (2026-11-17)

Scores below answer different questions and must not be collapsed into a claim about market rank, learning efficacy, or certification.

### Goal attainment: **4.0 / 5**

Method: unweighted mean across the eight project goals below. `5` = completed and verified against the stated goal; `4` = substantially complete with bounded follow-up; `3` = partial; lower scores indicate larger omissions. Scores are an evidence-based project self-assessment, not an external grade.

| Project goal | Score | Evidence and remaining limit |
|---|---:|---|
| Publish a working, click-to-run app | 5 | GitHub Pages deployment succeeded and the live app was opened; see the release record in the quality baseline. |
| Provide truly distinct, changeable themes | 5 | Four full visual systems were implemented and exercised; preferences are based on owner feedback, not target-user validation. |
| Reduce bulk material-to-card friction | 3 | Paste, supported local files, and CORS-permitted text/HTML links produce editable drafts. No PDFs, complete-book extraction, arbitrary web scraping, or in-app AI. |
| Explain important UI controls and decisions | 4 | A control-by-control purpose/evidence/check map exists. Competitor motivations and broader user preferences remain unvalidated. |
| Provide competitor and target-market analysis | 3 | Official feature documentation was compared and gaps are stated. No review sample, interviews, representative market study, or outcome comparison was completed. |
| Build in and report security/privacy considerations | 3 | Client-side safeguards and data-flow limits are documented, and the hash-pinned-script CSP meta policy was verified live, including blocking an injected unapproved inline script. No independent review or penetration test exists. |
| Test functional behavior and report results | 4 | Broad manual/browser regression and release smoke checks are recorded; no persistent automated test suite or cross-browser/AT matrix exists. |
| Create reusable project references and workflow | 5 | Centralized sources, dated baselines, traceability, and a repeatable development/release workflow are documented. |

**Not scored:** complete class-rubric compliance, because the original complete handout was not located; only the README excerpt was available. **Schedule adherence / “how soon”: not measurable**, because no agreed start date, deadline, or milestone durations were recorded. The feature work is published, but elapsed-time or on-time claims would be invented.

### Competitive capability coverage: **2.0 / 5**

Method: unweighted mean of six dimensions (`0` absent, `1` minimal, `2` basic, `3` substantial, `4` broad/mature, `5` independently benchmarked as leading). This scores the current scope against the documented category capabilities, not relative market success.

| Dimension | Score | Basis |
|---|---:|---|
| Create/import breadth | 2 | Useful paste, text-file, and limited URL workflow; much narrower than advertised PDF/media/AI import. |
| Study modes/scheduling | 2 | Flashcards, basic intervals, and quiz rewards; fewer modes and less mature scheduling than reviewed products. |
| Shared content/collaboration | 1 | No public library, class, or collaboration features. |
| Cross-device continuity/recovery | 1 | Manual JSON export/import only; no automatic sync or cloud backup. |
| Customization and accessible operation | 3 | Four full themes and some keyboard/speech/reduced-motion support; no independent accessibility audit and media support is limited. |
| Local data control and transparency | 3 | No account/server/analytics; data remains in browser storage with JSON portability, but storage is not encrypted or synced and searches leave for Google. |

This score is not a market-share forecast, competitive win rate, validated user-preference score, or claim that competitors outperform on every task. Exact feature availability and usability still require hands-on, same-task comparison.

### Security maturity: **2.0 / 5**

Method: `0` no controls evidenced; `1` ad hoc; `2` baseline mitigations documented but no independent assurance; `3` repeatable security checks and defense in depth; `4` independent review and verified protections; `5` ongoing, externally assessed security operations. SmartDeck currently fits level 2: meaningful controls exist, but assurance is limited.

Strengths observed in code: no app backend, account, or analytics; card strings are escaped; imported card fields are validated; remote HTML is parsed inertly; user-triggered fetches omit credentials and have type/size/time bounds; JSON imports have a 10 MB limit; explicit local-storage and source-access limits are documented.

Gaps: browser `localStorage` is not encrypted or synced; no independent code review, penetration test, automated malicious-input suite, or complete threat model is recorded. The checked GitHub Pages response had HSTS but no CSP **HTTP response header**. The deployed page carries a CSP meta policy that allows only the SHA-256-pinned inline script, blocks plugins and base-URL changes, and limits resource types. A live browser check on 2026-11-17 confirmed normal app loading and blocked an injected unapproved inline script. Inline styles remain allowed for dynamic theme/background styling, and `connect-src https:` remains broad because users may fetch permitted source pages; a meta policy also cannot enforce `frame-ancestors`. A client-side local/IP hostname check is not a network boundary. These header findings are point-in-time observations, not a guarantee of future host configuration.

Next security gates: review the threat model and data flows; retain and run the script-hash check whenever `index.html` changes; expand malformed/oversized import and safe-rendering tests; repeat the deployed CSP smoke check after releases; then request an independent review before making a security-strength claim. Do not weaken the policy merely to silence a failure or display a CSP directive.

### Owner feedback and strategy correction

The owner clarified that a **theme** must change the whole presentation—typography, button and card geometry, spacing, placement, and color—not merely accent colors. They also described direct paste-to-set creation as a basic competitor expectation and rejected being forced through the single-card cue/answer editor for bulk study material. The old four accent palettes and buried source form did not meet those requirements.

The response is four clearly named, changeable styles (Tech Glass as default; Sunday Sauce, Paper Studio, and Arcade Signal), a more visible photo background, and a material builder surfaced from the deck stack. It creates local draft cues/cards from pasted text, term/definition rows, simple Q/A lines, and permitted text/HTML files; users preview and edit before adding. A URL may load only if it is HTTPS, small enough for the app, readable text/HTML, and the website's CORS policy allows this browser to read it. This is a useful static-app improvement, **not** a promise to scrape every lesson or book. A reliable authenticated/PDF/full-book workflow would need a separate service and privacy/access/copyright design decision.

This correction is driven by the owner's stated product direction. It does not validate that four themes are sufficient, that local heuristic cards are high quality, or that SmartDeck matches Quizlet Smart Assist or Knowt's AI creator. The next comparison should measure task friction and draft usefulness rather than compare marketing feature lists.

## Target-market hypotheses

These are research hypotheses derived from the app's purpose and the project owner's priorities—not validated personas or market segments.

### Initial primary hypothesis

Students and independent learners who want to make a small personal deck, start practicing without a complex setup, and see what they have reviewed. The current one-file browser app is a prototype for this need, not a proven solution for all student levels or subjects.

### Access-priority hypotheses

Some learners encounter barriers when a study tool requires only one way to perceive content, one way to operate controls, constant motion, or a fixed visual presentation. WCAG, W3C cognitive-accessibility guidance, and CAST UDL are useful design references for offering keyboard operation, clear language, visible focus, reduced motion, multiple ways to perceive information, and display choices. They do **not** tell us how many learners need each option or prove that SmartDeck currently meets every need.

### Privacy, cost, and connectivity hypotheses

Some learners may value a tool that starts without an account or paid AI service. SmartDeck's current data stays in browser storage, but that is not cloud backup: browser data can be cleared, and it does not sync across devices. The app's source-search action opens Google, so a search topic is sent to that provider when the user chooses the action. These trade-offs must be explained rather than advertised as complete privacy or offline resilience.

### Not established as current target markets

Classroom collaboration, teacher dashboards, shared decks, institutions, exam-prep services, and AI tutoring are not supported as end-to-end workflows today. Treat them as possible future directions, not current product capabilities.

## UI preferences and design decisions

| Design topic | Evidence or preference | Current implication | Validation still needed |
|---|---|---|---|
| Full visual themes | The owner explicitly rejected accent-only changes and specified that themes include type, shapes, control styling, spacing, placement, and color. The owner asked that brown not be the default and suggested a tech-glass and Italian-food direction. | Default to Tech Glass; offer Sunday Sauce, Paper Studio, and Arcade Signal as real visual systems. Let photos show through instead of burying them under opaque brown surfaces. | Check sampled contrast, theme persistence, selected-state announcement, photo visibility, and reflow at mobile/desktop widths. Treat these four choices as a first iteration, not proven preferences. |
| Display choice | CAST UDL 3.0 includes support for customizing information display (Consideration 1.1). | Background customization is useful, but a user-uploaded image must not make text hard to read; retain a reliable overlay and a reset. | Test contrast and readability with varied images, zoom, and display settings. |
| Multiple ways to perceive | CAST UDL Consideration 1.2 and the owner's explicit request for both readable text and optional voice. | Keep all prompts and answers visible as text; speech is optional and uses installed voices. | Test with people who use screen readers, captions/text-first workflows, and different speech preferences. |
| Keyboard, focus, and dialogs | WCAG 2.2 and WAI dialog guidance. | Keep keyboard-operable controls, visible focus, understandable labels, predictable dialog close/return behavior. | Manual assistive-technology testing is still needed; no conformance claim is made. |
| Cognitive accessibility | W3C's cognitive/learning accessibility note and CAST's choice/clarity principles. | Prefer plain language, consistent actions, explicit feedback, and understandable scoring. Do not use a game award as a statement of mastery. | Co-design and usability sessions are required; needs vary among individuals. |
| Motion and animation | WCAG guidance and the user's request for tactile game-like feedback. | Preserve `prefers-reduced-motion` and make meaning available without animation. | Verify reduced motion in a real browser/device setting and check for motion-related discomfort. |
| Progress and rewards | Learning research supports retrieval and distributed practice broadly; it does not validate SmartDeck's selected thresholds. | Explain that quiz results are self-rated milestones. Continue due-review scheduling after rewards. | Measure usability and motivation separately from actual retained learning. |

## UI control map: what it does, why it is there, and what to question

Use this map when a button, toggle, or workflow below the study screen feels confusing. It links the visible control to its user job, evidence, design rationale, and a repeatable check. Paths name the labels currently shown in SmartDeck; if the UI changes, update this map and the acceptance checks together.

| UI location and controls | User job / requirement | Evidence and market pattern | Why SmartDeck chose this pattern; confidence | Check when something feels off |
|---|---|---|---|---|
| **Study card** — flip/tap card, Space/Enter, previous/next arrows, progress indicator | Practice retrieval while knowing where you are in the deck; operate without a pointer. | Retrieval practice has broad support in the cited systematic review; WAI/WCAG guidance informs keyboard operation. Anki and Quizlet document card/review workflows, but their public pages do not reveal internal design intent. | Keep one focused prompt visible and make navigation explicit. Evidence supports the study principle and keyboard access, not this exact card geometry or a SmartDeck learning outcome. **Confidence: principle-backed; layout is a design hypothesis.** | Test flip, answer visibility, keyboard navigation, focus, progress accuracy, and small-screen reflow. Ask learners whether they can tell what to do next without instruction. |
| **Rating row beneath the card** — Again, Hard, Good, Easy | Record confidence/difficulty and move cards into visible Review or Learned piles. | Anki describes scheduled reviews; Quizlet documents progress and targeted-study groups. The learning review supports retrieval/distributed practice broadly, not SmartDeck's four labels, intervals, or mastery meaning. | Show the outcome beneath each label so users can predict where the card goes. Keep ratings self-reported rather than claiming the app can grade knowledge. **Confidence: familiar category pattern; exact labels/intervals are product choices.** | Verify each rating updates the intended pile, due schedule, streak, and announcement; check the user understands that Learned is a self-rating, not proof of mastery. |
| **Rails beside the card** — Previous/Next, Review/Learned counts, Repeat count | Move around the deck and see review state without opening another page. | Competitor products expose navigation/progress in different ways; official documentation establishes the feature patterns but not why a particular company chose its placement. Accessibility guidance favors clear status and operation. | Keep navigation and pile status adjacent to the card for quick orientation. **Confidence: usability rationale only; compare placement with task testing.** | Test empty/full piles, boundaries, repeat behavior, labels announced to assistive technology, and whether the controls compete visually with the prompt. |
| **Deck Stack below the study area** — open the card list, **Build from text or link**, optional **One card** | Inspect the current set and create multiple cards without being forced through one-card-at-a-time entry. | Quizlet documents paste import; Knowt advertises paste/upload generation. These are publisher-described workflows, not independent evidence of quality or user preference. | Put the bulk builder beside the deck content and preserve single-card entry as an alternate path. This directly addresses the owner's reported friction. **Confidence: owner-validated need; broader demand remains untested.** | Time a new learner completing paste → preview/edit → add. Confirm source attribution, permission confirmation, draft count/quality, and that editing one card is still easy. Compare the same task and material in selected competitors. |
| **Header: Appearance** — four complete themes and background upload/reset | Change more than accent color: typography, shapes, controls, spacing, layout, and colors; keep a chosen photo visible. | Owner's explicit preference; CAST UDL supports options to customize presentation. Neither source establishes that these four styles fit a market segment. | Provide four intentionally different presets, a neutral tech default, visible background treatment, and a reset. **Confidence: requirement-backed by owner; palette preference is not market-validated.** | Test selection/persistence, legacy migration, contrast, photo visibility, focus/selected state, and reflow for every theme. Ask users which theme helps or hinders the task, not only which they like. |
| **Header: Audio** — installed voice selection, read aloud, stop speech, spoken quiz options | Choose optional speech and stop it reliably without losing visible text or keyboard access. | Browser speech APIs are device-dependent; WCAG/UDL support multiple ways to perceive and operate content. Public competitor pages are not proof that SmartDeck's speech setup is preferable. | Keep speech optional, preserve on-screen text, use installed voices, and expose a stop action. **Confidence: platform/accessibility rationale; learner benefit and voice quality need user testing.** | Test no-voice and multiple-voice devices, selection persistence, correct question/answer side, stop action, focus, captions/equivalent text, and reduced-motion behavior. |
| **Header: Deck tools / New deck** — create, rename/delete, import/export JSON, quiz, new card, search, repeat/redo/shuffle, progression | Find set-level actions and move or recover work without crowding the study card. | Anki's public documentation emphasizes customization, scheduling, and deck portability; Quizlet documents multiple study modes and progress tools. These describe product scope, not competitor decision psychology. | Separate frequent recall controls from less frequent management actions; keep JSON portability because browser storage is local. **Confidence: architecture and recovery rationale; placement needs task-based validation.** | Give learners a short “find and do” task for each action. Check destructive-action confirmation, invalid import feedback, export contents, keyboard paths, and recovery after reload. |
| **Progress panel / quiz rewards** — subject completion, 70% round, three-win tournament | Understand progress and get feedback/motivation while practicing. | Quizlet documents answer streaks and progress groups; these are product examples. Learning research does not validate SmartDeck's thresholds or show that badges improve retention. | Make the rules visible and explicitly self-rated; preserve due reviews after an award. **Confidence: transparent game rules, not learning or motivation evidence.** | Test boundary values, loss reset, persistence, screen-reader announcements, and whether users interpret awards as practice milestones rather than objective mastery. |
| **Material source search / optional Copilot JSON path** — source search, copy prompt, import reviewed JSON | Find sources or get richer sourced drafts when the local heuristic is not enough. | Official competitor pages describe AI creation; MDN explains why browser CORS blocks many links. These claims do not establish comparative quality. | Keep source discovery user-initiated and AI external/optional; do not send study notes to SmartDeck servers or bypass source controls. **Confidence: product/privacy constraint; actual source success and user value need testing.** | Check search-provider disclosure, source attribution, malformed JSON errors, CORS/size failures, permission, and the difference between local drafts and external AI output. |

### Evidence and “competitor psychology” guardrails

- Public product pages and help articles let us report **what a competitor documents**, not why its internal team chose a layout. Do not state internal motives unless that company has published a source explaining them.
- Learning studies inform hypotheses about retrieval and spacing; they do not prove this UI placement, theme set, streak, or reward threshold will improve SmartDeck outcomes.
- The owner's direct feedback is strong evidence for this project's requirement, but not a representative sample of students or other target users.
- **Competitor user reviews have not yet been sampled or coded.** Do not invent review themes or say that users broadly want a feature. Before using reviews, record platform, date, query, sample size, inclusion method, rating distribution, recurring themes, and selection bias. Summarize themes rather than copying identifiable review text; public reviews are anecdotal, not representative market research.
- To evaluate whether a control is “weird,” observe a learner doing a defined task, note where they hesitate or make an error, and compare the result against the homework checklist, accessibility requirements, and competitor task flow. A visual resemblance alone is not validation.

## Research-to-operations traceability

This table makes the research and user preferences actionable without turning a dated desk scan into a live data feed. Each row points to a component, a repeatable check, and the place where a future change is made.

| Research or user signal | Product/operational decision | Working component or asset | How to check and change it |
|---|---|---|---|
| The owner clarified that a theme includes typography, controls, shape, spacing, layout, and color, and rejected brown as the default. | Provide four visibly different full themes, default to Tech Glass, and make custom photos more visible. | **Appearance** theme gallery; Tech Glass, Sunday Sauce, Paper Studio, and Arcade Signal; translucent surfaces and saved photo background. | QA each theme at mobile/desktop widths, reload for persistence, sample text/button contrast, verify legacy theme migration, and test custom photos. Update palette IDs, migration, labels, and tests together. |
| WCAG and UDL call for accessible operation and flexible ways to perceive information. | Keep visible card text, keyboard access, optional speech, focus indication, and reduced-motion behavior; avoid making color or animation the sole signal. | Semantic controls, speech settings, reduced-motion CSS, accessible empty/error states. | Run keyboard and dialog checks after UI changes; record screen-reader and WCAG conformance gaps honestly in the quality baseline. |
| Retrieval and distributed-practice research supports broad study practices, not SmartDeck's exact scoring thresholds. | Keep due-card review and transparent rating intervals; describe quiz streaks as self-rated game rewards, never as proof of mastery. | Rating controls, due-study action, review/learned piles, documented 70%/three-win rules. | Verify rating, due date, and reward boundaries in regression tests; change thresholds only through an explicit product decision and update code, README, and QA evidence together. |
| Quizlet documents paste import and AI study-guide/Smart Assist paths; Knowt markets paste/upload-to-card generation. These are product claims, not efficacy evidence. | Make the shortest paste-to-editable-set workflow a core acceptance criterion; keep SmartDeck's privacy and capability differences explicit. | Deck-stack **Build from text or link** flow, local parser, editable preview, source attribution, and optional Copilot/JSON workflow. | Task-test paste, file, CORS-allowed link, CORS-blocked link, preview/edit, and add-to-deck. Compare against competitors with the same material; measure completion time and card usefulness, not just feature presence. |
| A static browser page cannot read arbitrary external pages or protected files; permission alone does not override CORS. | Attempt one user-initiated HTTPS request only when the page permits reading; offer paste/file alternatives and never use a proxy or login credentials. | Direct text/HTML fetch guard, CORS explanation, file picker, source URL on generated cards. | Test allowed and blocked links, oversized/unsupported input, and attribution. A full book/PDF/authenticated-source feature requires separate consent, privacy, infrastructure, and rights review. |
| Browser-local storage is simple but can be cleared and does not sync. | Keep local-first behavior explicit and provide JSON portability instead of claiming backup or sync. | `localStorage`, JSON deck export/import, documentation of limitations. | Test save/reload/import/export; add sync only after validating demand, privacy, security, and maintenance requirements. |
| The target market and underserved needs have not been validated. | Treat students and independent learners as hypotheses; avoid persona, market-size, or accessibility-demand claims. | Dated research plan and task-based usability protocol. | Collect voluntary task-completion and barrier observations, define measures before sessions, and revise the hypothesis/report based on evidence. |

## Security, privacy, and operations baseline

SmartDeck is a browser-only prototype with no application server, account system, or analytics. Decks and progress live in the browser's `localStorage`; that data is not encrypted by SmartDeck, can be cleared with browser data, and does not sync. The optional source search opens Google with the selected topic. Direct material loading is a user-triggered browser request, omits login credentials, and depends on HTTPS/text limits and the source server's CORS policy; it is not a proxy or a way around access controls. The app rejects literal local/IP hostnames and checks the final redirect URL, but this client-side hostname check is **not** a network security boundary or a DNS/IP validation guarantee. Material processing and heuristic draft generation happen in the page.

Static code inspection found that user/card strings are HTML-escaped before template rendering, imported card fields are validated, remote HTML is parsed in a detached DOM with active-content elements removed, and fetched/file material is bounded by the documented response and file limits. JSON imports are capped at 10 MB before reading and 1,000 cards after parsing. The checked GitHub Pages response returned HSTS but no CSP HTTP header; the app now carries a meta CSP with a SHA-256-pinned inline script. Its inline style allowance supports the current dynamic theme/background design, and the HTTPS connection allowance is needed for user-requested source loading; neither is a claim of a fully restrictive policy. These are point-in-time observations and implementation controls, not proof of exploit resistance. The repository has no recorded independent security review, penetration test, cross-browser threat assessment, or malicious-content test suite. Keep security checks in each feature's acceptance criteria: validate type/size/URL; use safe text rendering; avoid secrets and unnecessary transmission; show failures; review import boundaries; and confirm browser permissions before access. If a future backend, AI API, sync, authentication, or document-conversion service is proposed, pause for a separate privacy/data-flow and threat-model decision before implementation.

## Research plan before making market claims

1. Confirm with the project owner which geography, learner age range, and educational context matter. This scan intentionally makes no market-size estimate.
2. Conduct a small formative interview/usability round with voluntary participants who represent intended use and different access methods. Include making a set by pasting text, importing a term-definition file, attempting a source link, editing draft quality, choosing a theme, and making the background visible. Ask about study tasks and barriers; do not require diagnoses or collect unnecessary sensitive data.
3. Give participants the same tasks in SmartDeck and selected competitors (make/import a deck, study due material, locate progress, adjust speech/display, export or recover work). Record task completion, friction, and accessibility blockers; do not treat a small sample as statistically representative.
4. Ask about current alternatives and why participants choose them before choosing a product differentiator.
5. If claiming learning outcomes, design a separate, appropriately reviewed longitudinal study; engagement, streaks, quiz self-ratings, and task success are not substitutes for retention measures.
6. Refresh this public-feature scan before a major positioning decision or at least quarterly. Record source URLs, date, exact observed claim, and unknowns. Add competitor review sampling only after defining the platform, date range, inclusion rules, and coding process; keep it separate from feature documentation and market sizing. This is a manual review process, not an in-app market monitor.

## Sources

The source registry and limitations are in [`../REFERENCE_LIBRARY.md`](../REFERENCE_LIBRARY.md). Competitor pages checked for this snapshot include Anki, Quizlet, Brainscape, and Knowt official pages. Accessibility principles reference WCAG 2.2, WAI cognitive-accessibility/dialog guidance, and CAST UDL Guidelines 3.0.
