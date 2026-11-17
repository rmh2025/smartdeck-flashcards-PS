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
| [Anki](https://apps.ankiweb.net/) | Scheduled flashcard reviews, synchronization through AnkiWeb, media, customization, and add-ons. Its manual describes active recall and spaced repetition. | Strong reference for scheduling and portability. SmartDeck has only simple local intervals and no sync; don't imply feature parity or comparable retention results. |
| [Quizlet](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet) | Flashcards, progressively harder Learn practice, tests, games, and progress features; separate help pages document answer streaks. Some activities or access levels have limits. | A reference for approachable study modes and progress presentation. Its streaks are a product example, not proof that SmartDeck's 70%/three-win rules improve learning. |
| [Brainscape](https://www.brainscape.com/) | Markets AI-assisted finding/creating flashcards, spaced repetition, subject-organized decks, and study metrics. | Signals competition around content discovery and automated creation. Its marketing statements were not independently tested; SmartDeck does not currently generate cards with an AI service. |
| [Knowt](https://knowt.com/) | Markets free flashcards and Learn mode alongside AI-generated notes/study materials, lecture tools, voice tutoring/podcasts, and exam prep. | Signals an integrated AI/voice direction. Claims, usage figures, feature availability, and pricing were not verified beyond the public landing page. |
| **SmartDeck (current)** | One HTML file; deck/card editing; browser-local persistence; JSON import/export; simple review intervals; optional installed-device text-to-speech; self-rated quiz/rewards; custom background; source-note starter cards. | Preserve no-build simplicity and explicit user control. The product has no cloud sync, microphone transcription, automatic content generation, competitor feed, or validated mastery scoring. |

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
| Color and atmosphere | The project owner asked for black/deep navy with metallic contrast, later also proposing warm amber/obsidian tabletop styling. The current CSS uses an obsidian-and-brass palette. | Keep the strong dark tabletop identity and customizable background; do not claim that all learners prefer dark or warm themes. | Ask users which theme they prefer; test contrast on every important state and on uploaded backgrounds. |
| Display choice | CAST UDL 3.0 includes support for customizing information display (Consideration 1.1). | Background customization is useful, but a user-uploaded image must not make text hard to read; retain a reliable overlay and a reset. | Test contrast and readability with varied images, zoom, and display settings. |
| Multiple ways to perceive | CAST UDL Consideration 1.2 and the owner's explicit request for both readable text and optional voice. | Keep all prompts and answers visible as text; speech is optional and uses installed voices. | Test with people who use screen readers, captions/text-first workflows, and different speech preferences. |
| Keyboard, focus, and dialogs | WCAG 2.2 and WAI dialog guidance. | Keep keyboard-operable controls, visible focus, understandable labels, predictable dialog close/return behavior. | Manual assistive-technology testing is still needed; no conformance claim is made. |
| Cognitive accessibility | W3C's cognitive/learning accessibility note and CAST's choice/clarity principles. | Prefer plain language, consistent actions, explicit feedback, and understandable scoring. Do not use a game award as a statement of mastery. | Co-design and usability sessions are required; needs vary among individuals. |
| Motion and animation | WCAG guidance and the user's request for tactile game-like feedback. | Preserve `prefers-reduced-motion` and make meaning available without animation. | Verify reduced motion in a real browser/device setting and check for motion-related discomfort. |
| Progress and rewards | Learning research supports retrieval and distributed practice broadly; it does not validate SmartDeck's selected thresholds. | Explain that quiz results are self-rated milestones. Continue due-review scheduling after rewards. | Measure usability and motivation separately from actual retained learning. |

## Research plan before making market claims

1. Confirm with the project owner which geography, learner age range, and educational context matter. This scan intentionally makes no market-size estimate.
2. Conduct a small formative interview/usability round with voluntary participants who represent intended use and different access methods. Ask about study tasks and barriers; do not require diagnoses or collect unnecessary sensitive data.
3. Give participants the same tasks in SmartDeck and selected competitors (make/import a deck, study due material, locate progress, adjust speech/display, export or recover work). Record task completion, friction, and accessibility blockers; do not treat a small sample as statistically representative.
4. Ask about current alternatives and why participants choose them before choosing a product differentiator.
5. If claiming learning outcomes, design a separate, appropriately reviewed longitudinal study; engagement, streaks, quiz self-ratings, and task success are not substitutes for retention measures.
6. Refresh this public-feature scan before a major positioning decision or at least quarterly. Record source URLs, date, exact observed claim, and unknowns. This is a manual review process, not an in-app market monitor.

## Sources

The source registry and limitations are in [`../REFERENCE_LIBRARY.md`](../REFERENCE_LIBRARY.md). Competitor pages checked for this snapshot include Anki, Quizlet, Brainscape, and Knowt official pages. Accessibility principles reference WCAG 2.2, WAI cognitive-accessibility/dialog guidance, and CAST UDL Guidelines 3.0.
