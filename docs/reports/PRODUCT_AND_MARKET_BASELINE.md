# Product, Market, and UI Research Baseline

**Snapshot date:** 2026-11-16
**Evidence type:** Public-source competitive desk scan plus the project owner's stated design preferences.
**Confidence:** High for what the reviewed pages currently say; low for market demand, market size, and comparative usability.

## Executive summary

SmartDeck currently combines browser-local flashcards, a tactile study interface, user-selected backgrounds, browser speech, self-rated quiz rounds, and JSON portability. The defensible positioning hypothesis is:

> **A low-setup, customizable personal study space for practicing recall and reviewing progress, with optional speech and transparent self-rating.**

This is a product hypothesis, not proof that SmartDeck is better than competitors or that a specific population prefers it. We have not conducted customer interviews, a survey, a controlled competitor usability study, market sizing, pricing analysis, or longitudinal learning research.

The competitor scan found established products emphasizing scheduling, content libraries, AI-assisted study creation, multiple study modes, and progress features. SmartDeck's plausible distinction is a small, editable, browser-local experience with accessibility-minded interaction and no built-in AI or account service. That may appeal to some learners, but needs user validation; local storage also means there is no built-in cross-device sync or recovery.

## Competitive snapshot

The scan uses public product pages and help articles opened on 2026-11-16. Competitor descriptions below are publisher-described features, not independent product tests. Pricing, accessibility conformance, and actual user outcomes were not compared.

| Product | Publicly described emphasis | What SmartDeck should learn or verify |
|---|---|---|
| [Anki](https://apps.ankiweb.net/) | Official product pages describe scheduled reviews, AnkiWeb synchronization, media, layout/review customization, add-ons, and public deck sharing. | Strong reference for scheduling and portability. SmartDeck has only simple local intervals and no sync; don't imply feature parity or comparable retention results. |
| [Quizlet](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet) | Current Help Center lists eight study approaches, including flashcards, progressively harder Learn, practice tests, study guides, activities, and AI-powered tools; some activities or use levels are subscription-limited. Separate help pages document answer streaks. | A reference for approachable study modes and progress presentation. Its streaks and vendor descriptions are product examples, not proof that SmartDeck's 70%/three-win rules improve learning. |
| [Brainscape](https://www.brainscape.com/) | Markets AI-assisted flashcard creation/discovery, spaced repetition, progress metrics, and a library of publisher-described certified decks. | Signals competition around content discovery and automated creation. Its marketing and certification statements were not independently tested; SmartDeck does not currently generate cards with an AI service. |
| [Knowt](https://knowt.com/) | Markets flashcards, Learn mode, AI-assisted PDF/lecture notes and card creation, voice tutoring, and exam-preparation tools. | Signals an integrated AI/voice direction. These are publisher claims; usage figures, outcomes, feature availability, and pricing were not independently verified. |
| **SmartDeck (current)** | One HTML file; deck/card editing; browser-local persistence; JSON import/export; simple review intervals; optional installed-device text-to-speech; self-rated quiz/rewards; four saved accent palettes and custom background; source-note cards; a Copilot-assisted, user-reviewed JSON path. | Preserve no-build simplicity and explicit user control. The product has no cloud sync, automatic page extraction, in-app AI service, competitor feed, or validated mastery scoring. |

### Competitive conclusions

- The category is feature-rich; merely adding streaks or voice is not a defensible advantage.
- The clearest testable distinction is **simple, customizable, and local-first study**, not “the best flashcard app.”
- Avoid comparing learning effectiveness from feature lists. Competitor marketing is not outcome evidence.
- Static public pages do not establish market share, accessibility quality, customer satisfaction, or underserved demand.
- No price comparison was made. Do not publish pricing claims from this snapshot.

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
| Color and atmosphere | The project owner asked for black/deep navy with metallic contrast, later also proposing warm amber/obsidian tabletop styling. The app now offers four saved accent palettes plus a custom background image and persistent dark overlay. | Keep a clear **Appearance** entry point; let users choose a curated palette and photo while preserving a readable dark surface. Palette selection is manual, not automatic image-color detection. | Test each palette's text contrast, persistence, keyboard access, and photo readability; ask users which options help rather than assuming one preference. |
| Display choice | CAST UDL 3.0 includes support for customizing information display (Consideration 1.1). | Background customization is useful, but a user-uploaded image must not make text hard to read; retain a reliable overlay and a reset. | Test contrast and readability with varied images, zoom, and display settings. |
| Multiple ways to perceive | CAST UDL Consideration 1.2 and the owner's explicit request for both readable text and optional voice. | Keep all prompts and answers visible as text; speech is optional and uses installed voices. | Test with people who use screen readers, captions/text-first workflows, and different speech preferences. |
| Keyboard, focus, and dialogs | WCAG 2.2 and WAI dialog guidance. | Keep keyboard-operable controls, visible focus, understandable labels, predictable dialog close/return behavior. | Manual assistive-technology testing is still needed; no conformance claim is made. |
| Cognitive accessibility | W3C's cognitive/learning accessibility note and CAST's choice/clarity principles. | Prefer plain language, consistent actions, explicit feedback, and understandable scoring. Do not use a game award as a statement of mastery. | Co-design and usability sessions are required; needs vary among individuals. |
| Motion and animation | WCAG guidance and the user's request for tactile game-like feedback. | Preserve `prefers-reduced-motion` and make meaning available without animation. | Verify reduced motion in a real browser/device setting and check for motion-related discomfort. |
| Progress and rewards | Learning research supports retrieval and distributed practice broadly; it does not validate SmartDeck's selected thresholds. | Explain that quiz results are self-rated milestones. Continue due-review scheduling after rewards. | Measure usability and motivation separately from actual retained learning. |

## Research-to-operations traceability

This table makes the research and user preferences actionable without turning a dated desk scan into a live data feed. Each row points to a component, a repeatable check, and the place where a future change is made.

| Research or user signal | Product/operational decision | Working component or asset | How to check and change it |
|---|---|---|---|
| The owner prefers a tactile dark tabletop and wants personal visual control. | Keep the default dark arena, but provide visible appearance controls and explicit palette choices. Do not assume every learner wants dark or amber. | Top-bar **Appearance** dialog; four persisted accent palettes; optional photo background with a dark readability overlay. | QA theme selection at mobile/desktop widths, reload to check persistence, calculate contrast for every palette, and test photos. Add/remove palette IDs in `index.html` only with matching migration, label, and tests. |
| WCAG and UDL call for accessible operation and flexible ways to perceive information. | Keep visible card text, keyboard access, optional speech, focus indication, and reduced-motion behavior; avoid making color or animation the sole signal. | Semantic controls, speech settings, reduced-motion CSS, accessible empty/error states. | Run keyboard and dialog checks after UI changes; record screen-reader and WCAG conformance gaps honestly in the quality baseline. |
| Retrieval and distributed-practice research supports broad study practices, not SmartDeck's exact scoring thresholds. | Keep due-card review and transparent rating intervals; describe quiz streaks as self-rated game rewards, never as proof of mastery. | Rating controls, due-study action, review/learned piles, documented 70%/three-win rules. | Verify rating, due date, and reward boundaries in regression tests; change thresholds only through an explicit product decision and update code, README, and QA evidence together. |
| Competitor sites describe feature patterns, but their public claims are not independent efficacy evidence. | Maintain dated, source-linked desk research; do not scrape or copy competitor text or imply superiority. | Product/market report and central reference library. | Refresh before major positioning decisions (or quarterly), note the observation date and limits, and add an operational decision only when it maps to a user need and a test. |
| Learners may need reliable sources and usable cards, while arbitrary pages cannot be fetched from this local browser app. | Let the user choose sources, preserve URLs, and provide an AI-assisted JSON workflow without embedding an API key or automatic site scraper. | Source-search launcher, source URL fields, editable note cards, in-form Copilot prompt, JSON import/export. | Test URL validation, source attribution, and JSON import; the user reviews source quality. Improve extraction only after a concrete accessibility/quality need and a safe sourcing model are defined. |
| Browser-local storage is simple but can be cleared and does not sync. | Keep local-first behavior explicit and provide JSON portability instead of claiming backup or sync. | `localStorage`, JSON deck export/import, documentation of limitations. | Test save/reload/import/export; add sync only after validating demand, privacy, security, and maintenance requirements. |
| The target market and underserved needs have not been validated. | Treat students and independent learners as hypotheses; avoid persona, market-size, or accessibility-demand claims. | Dated research plan and task-based usability protocol. | Collect voluntary task-completion and barrier observations, define measures before sessions, and revise the hypothesis/report based on evidence. |

## Research plan before making market claims

1. Confirm with the project owner which geography, learner age range, and educational context matter. This scan intentionally makes no market-size estimate.
2. Conduct a small formative interview/usability round with voluntary participants who represent intended use and different access methods. Ask about study tasks and barriers; do not require diagnoses or collect unnecessary sensitive data.
3. Give participants the same tasks in SmartDeck and selected competitors (make/import a deck, study due material, locate progress, adjust speech/display, export or recover work). Record task completion, friction, and accessibility blockers; do not treat a small sample as statistically representative.
4. Ask about current alternatives and why participants choose them before choosing a product differentiator.
5. If claiming learning outcomes, design a separate, appropriately reviewed longitudinal study; engagement, streaks, quiz self-ratings, and task success are not substitutes for retention measures.
6. Refresh this public-feature scan before a major positioning decision or at least quarterly. Record source URLs, date, exact observed claim, and unknowns. This is a manual review process, not an in-app market monitor.

## Sources

The source registry and limitations are in [`../REFERENCE_LIBRARY.md`](../REFERENCE_LIBRARY.md). Competitor pages checked for this snapshot include Anki, Quizlet, Brainscape, and Knowt official pages. Accessibility principles reference WCAG 2.2, WAI cognitive-accessibility/dialog guidance, and CAST UDL Guidelines 3.0.
