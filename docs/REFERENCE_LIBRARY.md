# SmartDeck Reference Library

This is the project's central index of documents to consult when making product, learning, accessibility, browser-platform, data-storage, or publishing decisions. It links to the original sources rather than copying them into the repository.

**Link check:** Most project references were last opened on 2026-11-16. Competitor import/creation/study pages, Anki import/sync documentation, and browser security guidance were rechecked on 2026-11-17. External pages can change; recheck current behavior before relying on version-specific guidance.

## How to use this library

1. Identify what kind of question you are answering: learning outcomes, accessibility requirements, browser behavior, product conventions, or repository workflow.
2. Prefer primary research for claims about learning outcomes, standards for conformance requirements, and official platform documentation for API behavior.
3. Treat competitor help pages as examples of product behavior, not independent evidence that a feature improves learning.
4. State each source's scope and limitations. SmartDeck's scoring thresholds, streaks, tournament rules, and awards are product choices, not validated measures of mastery.
5. When a lasting project decision relies on a new source, add it here with a short explanation and the date checked.

## Learning research

| Document | Use it for | Scope and limitations |
|---|---|---|
| Trumble, E., Lodge, J., Mandrusiak, A., & Forbes, R. (2024; published online 2023). [Systematic review of distributed practice and retrieval practice in health professions education](https://pmc.ncbi.nlm.nih.gov/articles/PMC11078833/). *Advances in Health Sciences Education, 29*(2), 689–714. [DOI](https://doi.org/10.1007/s10459-023-10274-3). | Evidence about retrieval practice and spacing in health-professions education. | The review reports heterogeneous interventions, comparison groups, and outcomes. It supports the broad study practices, not SmartDeck's game rules or any particular score threshold. |
| Nylén-Eriksen, M., et al. (2025). [Game-thinking; utilizing serious games and gamification in nursing education – a systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11776282/). *BMC Medical Education, 25*, 140. [DOI](https://doi.org/10.1186/s12909-024-06531-7). | Broad evidence about game-based and gamified approaches in nursing education. | Findings concern nursing education and combined approaches; they do not isolate streaks or validate SmartDeck's tournament and reward rules. |

## Product examples—not learning-efficacy evidence

| Document | Use it for | Scope and limitations |
|---|---|---|
| Anki: [official product site](https://apps.ankiweb.net/) and [manual background](https://docs.ankiweb.net/manual/background.md) | Publicly described flashcards, scheduling, synchronization, media, and customization. | Product and documentation claims are not a comparative usability study or independent proof of learning outcomes. |
| Anki Manual: [Importing](https://docs.ankiweb.net/importing/intro.html) and [Syncing with AnkiWeb](https://docs.ankiweb.net/syncing.html) | Documents import of text and Anki/Mnemosyne package formats and syncing a collection across devices with AnkiWeb. | Official documentation, not a usability or security assessment; setup, format details, and conflict behavior matter. Checked 2026-11-17. |
| Quizlet Help Center: [Studying on Quizlet](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet) | Examples of flashcards, Learn's progressively harder/personalized sequence, Test, activities, study guides, sets with images/audio, sharing, and web/mobile access. | Vendor documentation describes Quizlet's product and plan/eligibility limits; it is not independent research or proof of its internal design rationale. Checked 2026-11-17. |
| Quizlet Help Center: [Creating sets by importing content](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Documents direct paste import for term-definition rows using separators and rows, and points to AI study guides/Smart Assist for unstructured notes. | Official product workflow, not independent evidence of question quality or learning outcomes; AI availability may vary by platform, age, region, account, and plan. Checked 2026-11-17. |
| Quizlet Help Center: [Studying with Answer Streaks](https://help.quizlet.com/hc/en-us/articles/40011154960653-Studying-with-Answer-Streaks) | Example of how another study product presents consecutive-answer streaks. | Documents Quizlet's implementation, not a causal finding that streaks improve retention. |
| Quizlet Help Center: [Using Progress for targeted studying](https://help.quizlet.com/hc/en-us/articles/360048803491-Using-Progress-for-targeted-studying) | Example of grouping study content by progress and using those groups to target review. | Product behavior and availability may change; do not treat its progress labels as validated mastery measurements. |
| Brainscape: [official product site](https://www.brainscape.com/) and [subject library](https://www.brainscape.com/subjects) | Publicly described AI-assisted card creation/discovery, spaced repetition, and subject-organized decks. | Marketing claims and feature availability are not independently verified; review current pages before making a comparison. |
| Knowt: [AI Flashcard Maker](https://knowt.com/ai-flashcard-maker) | Official page invites pasted notes or up to 30 uploads and lists PDF, image, video, PowerPoint, and audio; it advertises generated flashcards and other activities. | Vendor claims only; no independent quality, speed, usage, privacy, access-tier, or learning-outcome evaluation. Checked 2026-11-17. |

## Accessibility and interaction design

| Document | Use it for | Scope and limitations |
|---|---|---|
| W3C: [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) | Normative accessibility success criteria; use Level AA as the project's review target. | A citation or automated check alone does not establish conformance. Test the actual interface with keyboard, zoom, contrast checks, and assistive technology where available. |
| W3C WAI: [ARIA Authoring Practices Guide—Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | Focus entry and containment, keyboard behavior, Escape, and focus restoration for modal dialogs. | Authoring guidance and examples; use native HTML semantics where appropriate and test real browser behavior. |
| W3C WAI: [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) | Design considerations for cognitive and learning accessibility. | A W3C Working Group Note, not a WCAG conformance standard or a claim that one design works for every person. |
| CAST: [Universal Design for Learning Guidelines 3.0](https://udlguidelines.cast.org/) | Options for learner choice, customizing presentation, and perceiving information in different ways. | A design framework; its guidance does not demonstrate market demand or guarantee a learning outcome. |
| MDN: [`<dialog>` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) | Native modal/non-modal dialog behavior and browser API details. | Confirm any feature-specific compatibility requirements for the browsers SmartDeck supports. |
| MDN: [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) | Respecting a user's request to reduce non-essential movement and animation. | Reduce or remove motion that may cause discomfort; do not rely on animation alone to communicate state. |

## Browser APIs and local data

| Document | Use it for | Scope and limitations |
|---|---|---|
| MDN: [`SpeechSynthesis`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) | Speaking text, stopping speech, and enumerating available voices. | Voices are supplied by the browser or device and vary. Keep equivalent visible text and graceful behavior when speech is unavailable. |
| MDN: [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) | `localStorage` and `sessionStorage` behavior, persistence, and origin boundaries. | Browser storage is local to the origin/device, may be cleared or unavailable, and is synchronous. Do not imply cloud sync or use it for secrets. |
| MDN: [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) | Why browser `fetch()` can read another origin only when the source server permits it. | Permission to study a source does not grant browser JavaScript cross-origin access. A static app cannot bypass CORS, authentication, or access controls; checked 2026-11-17. |
| MDN: [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) | Browser policy controls that can reduce XSS and other content-loading risks; notes limits of meta-delivered CSP. | CSP is defense in depth, not a replacement for safe rendering; a policy must fit inline scripts/styles and actual resource needs. Checked 2026-11-17. |
| OWASP: [Cross-Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Context-sensitive output encoding, safe DOM APIs, and validation rules. | General guidance; every sink needs review. Escaping and validation alone do not prove absence of XSS. Checked 2026-11-17. |
| OWASP: [HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html) | Browser storage and cross-origin communication risks. | LocalStorage is not a secure vault; do not store secrets or assume local data has authentication/authorization protection. Checked 2026-11-17. |
| MDN: [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Origin-scoped browser persistence and compatibility behavior. | Data persists across sessions but can be unavailable or cleared; `file:` URL behavior is undefined across browsers. Checked 2026-11-17. |

## Git and publishing

| Document | Use it for | Scope and limitations |
|---|---|---|
| Git: [`git push`](https://git-scm.com/docs/git-push) | The exact behavior and options for publishing local refs to a remote. | Check branch and remote configuration before pushing; avoid force-push unless explicitly needed and understood. |
| GitHub Docs: [About remote repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories) | GitHub remote URLs and how local repositories connect to GitHub. | Authentication and repository permissions are separate requirements. |
| GitHub Docs: [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) | Publishing a static site from a GitHub Actions artifact. | Requires GitHub Pages/Actions configuration and repository permissions; a successful push is not proof of a successful deployment. |

## Documentation quality tools

| Document | Use it for | Scope and limitations |
|---|---|---|
| Lychee: [official repository and usage](https://github.com/lycheeverse/lychee) | Repeatable checks of Markdown/HTML links, including local documentation paths and optional online URL reachability. | Use as an optional developer/CI tool, never as an app dependency. External hosts may block automated requests or change pages; investigate failures rather than silently deleting useful references. |

## Project sources of truth

- [`README.md`](../README.md) records intended features, setup, data format, and documented product rules.
- [`index.html`](../index.html) is the implemented application and the source of truth for current runtime behavior.
- If documentation and implementation disagree, report the discrepancy and determine which should change; do not silently assume either is correct.
