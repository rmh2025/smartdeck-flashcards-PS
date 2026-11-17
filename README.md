Part 6: QA & Polish
Accessibility: labels on inputs; buttons have discernible text; visible focus styles.
Empty states: “No decks yet” / “No cards found” messages.
Error handling: invalid inputs, empty deck name, etc.
Basic theming: CSS variables; prefers dark mode.
Prompts to try:

Add accessible empty-state components with icons and instructions. Audit the app for a11y and fix issues (aria, roles, focus).

AI inconsistency watch:

Color contrast below WCAG AA; adjust variables.
Missing aria-live for dynamic updates (optional).
Minimal Data Model (for reference)
AppState:
decks: Array<{ id: string, name: string, createdAt: number }>
cardsByDeckId: Record<string, Array<{ id: string, front: string, back: string, updatedAt: number }>>
activeDeckId: string | null
ui: { isModalOpen: boolean; activeCardIndex: number }
Tip: Keep rendering logic in small functions; avoid global event chaos.

Rubric
This lab will be graded on a complete/incomplete basis. A compelte lab consists of a code package, working or not, that attempts to meet the requirements of the given task, as well as a reflection.

Reflection (required)
In 5 bullets, include:

Where AI saved time.
At least one AI bug you identified and how you fixed it.
A code snippet you refactored for clarity.
One accessibility improvement you added.
What prompt changes improved AI output.
# SmartDeck

**Smarter deck. Smarter you.** SmartDeck is a browser-based flashcard study app designed to help people practice recall and see their review progress. The app code is intentionally kept in one file: `index.html` contains the page structure (HTML), styling and animation (CSS), and interactions (JavaScript). It uses no frameworks, packages, or build tools.

## Run it

Open `index.html` in a browser. Your decks are saved in that browser on this device using `localStorage`; clearing browser data can remove them.

## What it does

- Create, rename, and delete decks.
- Create, edit, and delete cards with a prompt and answer.
- Flip cards, move forward and back, shuffle the deck, and search card text.
- Rate cards Again, Hard, Good, or Easy. Again/Hard go to the review pile; Good/Easy go to the learned pile.
- Repeat a card later, redo a study session, and reshuffle either pile.
- Track learned and review piles, a Good/Easy streak, and simple Again/Hard/Good/Easy review intervals; start a session with cards that are due.
- Read questions and answers aloud with browser-provided voices, or play a self-rated spoken-host quiz with three rotating characters. Completing a quiz with at least 70% earns a round win; three consecutive wins earn a tournament victory.
- Earn a subject completion award by rating every card in a deck as learned. Per-deck quiz records, win streaks, tournament wins, and subject awards are saved in LocalStorage and included in JSON exports.
- Paste source notes with a topic; SmartDeck splits them into editable cards and can keep a source URL with each card.
- Search the web, academic/government sources, PubMed, or MDN for a topic. Search opens browser results; review and choose sources yourself.
- Import and export a deck as JSON.
- Save decks, study progress, and the last active deck in the browser.
- Study in a full-height tabletop arena with a tactile flip card, quick rating controls, and collapsible deck, audio, and appearance drawers.
- Open **Appearance** in the top bar to choose one of four saved accent palettes or upload/reset a PNG, JPEG, or WebP background image (up to 1.5 MB). A dark overlay remains over photos for text readability; palettes are curated choices, not automatic image-color detection. Settings stay in local browser storage.
- Adapt the play area to small screens, support keyboard navigation, show focus indicators, and honor reduced-motion preferences.

SmartDeck does not scrape web pages or send pasted material to an AI service. Browser-only apps cannot reliably read arbitrary sites because of cross-origin restrictions, and a private AI API key must not be put in a public HTML file. You choose a source, paste material you may use, and can edit the resulting starter cards. The source form includes a selectable Copilot prompt for researching a topic and returning cited SmartDeck JSON; review the sources, then use **Deck tools → Import JSON**. For competitor research, ask for a dated comparison of public claims with official URLs and limitations—summarize rather than copying or scraping competitor content. JSON import/export also lets you bring in cards drafted with an AI assistant.

Speech is optional and uses voices installed in the browser or operating system; available voices differ by device. The quiz does not automatically judge free-form answers: you reveal the model answer and rate yourself, so valid paraphrases are not incorrectly marked wrong.

## Reference library

For future product, learning, accessibility, browser API, storage, and publishing questions, start at the [project documentation index](docs/README.md). It links to the [central reference library](docs/REFERENCE_LIBRARY.md) and current project reports. The library separates research evidence, accessibility standards, platform documentation, and competitor examples, and records the scope and limitations of each source. Contributors and coding assistants should check it before making source-dependent decisions; external references should be rechecked when current behavior matters.

## Development workflow

For the reusable human/AI process, project SWOT, acceptance checklist, and release gates, see the [process review and workflow](docs/reports/PROCESS_REVIEW_AND_WORKFLOW.md). The [contributor guidance](AGENTS.md) explains how future contributors and coding assistants should use the source library and preserve the app's single-file constraint. The [quality baseline](docs/reports/QUALITY_BASELINE.md) records dated test evidence and known gaps.

## Progression rules and evidence

The quiz uses a transparent game rule: a completed, self-rated quiz at 70% or higher wins a round, and three consecutive round wins earn a tournament victory. A subject completion award is earned when every card in that deck is in the Learned pile. These are practice milestones, not research-validated mastery thresholds or objective grading; the app continues to track due reviews after an award.

The patterns are informed by product conventions and learning research, without claiming that streaks alone improve retention. Quizlet documents progressive study rounds, answer streaks, and mastery groups ([Learn](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet), [Answer Streaks](https://help.quizlet.com/hc/en-us/articles/40011154960653-Studying-with-Answer-Streaks), [Progress](https://help.quizlet.com/hc/en-us/articles/360048803491-Using-Progress-for-targeted-studying)). A 2024 systematic review (published online in 2023) supports retrieval and distributed practice in health-professions education, while noting varied methods and outcomes ([Trumble et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC11078833/)). A 2025 meta-analysis found a positive pooled effect for game-thinking in nursing education, but does not isolate streaks as a cause ([Nylén-Eriksen et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC11776282/)).

## Topic and source workflow

1. Choose a deck and select **From material**.
2. Enter a topic and use **Search sources** to open general web, academic/government, PubMed, or MDN results. Review a result and copy its URL. The search opens a results page; it does not fetch or verify the source.
3. Paste your permitted notes or source excerpt and the URL. SmartDeck splits the text into chunks of about 700 characters and creates editable prompt/answer cards. The prompt is a starter, not an AI-generated question, so improve it before studying.
4. For richer question-and-answer cards, open **Use Copilot Chat to make a source-backed deck** in the source form, select the example prompt, press Ctrl+C, and paste it into Copilot Chat with your topic and learner level. Review the sources and card content, then copy the returned JSON, close the form, and choose **Deck tools → Import JSON**. The accepted format is:

   ```json
   {
     "format": "smartdeck-deck",
     "version": 1,
     "name": "Photosynthesis",
     "cards": [
       {
         "front": "What does photosynthesis convert?",
         "back": "Light energy into chemical energy stored in sugars.",
         "sourceUrl": "https://example.edu/source"
       }
     ]
   }
   ```

This keeps the submitted app one-file and browser-only while making any source selection reviewable; it does not claim that a website or database has been independently verified.

## How the file is organized

1. The semantic HTML defines the app shell, study workspace, live status messages, and accessible dialogs.
2. The `<style>` block is grouped by theme, app shell, study arena, ratings/progression, card drawer, dialogs, responsive layout, and reduced-motion behavior.
3. The `<script>` block has searchable section comments for state/normalization, speech, backgrounds, rendering, editing, study/progression, source notes, JSON import/export, and startup/event binding.

The assignment keeps the runtime in one HTML file, so these section markers are navigation aids rather than separate modules. Rendering is split into smaller jobs (`renderDecks`, `renderStage`, and `renderCardList`) so deck navigation, the study card, and the card list can be inspected separately.

## Reflection draft — review and personalize before submitting

- **Where AI saved time:** In my opinion, AI did about 75% of the coding work. I acted as a teammate by guiding it back to the assignment, the teacher’s priorities, and the extra features I thought mattered. I was surprised by how much programming goes into one app and how much I still have to learn about how each part connects.
- **Bugs we found during testing:** I did not notice a broken feature while using the app. Final testing found that Escape did not close a dialog in the browser, and expanded voice settings could make the mobile layout overflow. We added explicit Escape handling and kept the voice panel within the viewport, then checked focus return and the 390px layout. Our other challenge was keeping track of which section we were discussing; restating the phase and expected outcome helped us stay aligned.
- **A clarity improvement:** We split rendering by page area instead of putting the deck list, study card, and card list in one large function:

  ```js
  function render() {
    applyBackground();
    renderDecks();
    renderStage();
    renderCardList();
    renderStats();
  }
  ```

- **An accessibility improvement:** We added optional read-aloud controls with selectable installed voices and a spoken quiz with different hosts, alongside visible text, labels, keyboard focus, and reduced-motion support. This gives people different ways to take in the material instead of relying only on reading.
- **What improved my prompts:** Direct, outcome-based specifications helped. Explaining the desired result from different perspectives, while keeping the teacher’s requirements and the single-file browser limit in view, helped the AI stay focused.

I am still learning how the code sections relate to each other. Starting by understanding the assignment’s constraints helped me see how those boundaries can guide a design, rather than treating them as an afterthought.

I love that copilot and vs code have a way to  test I never really was able to lock down testing parameters and manage the security and the completed build so this was way eye opening. Having the ability to create a framework or to make a future plan based on the successes and failured found in this one as defined by your own processes and goals etc with the ai is absolutely beneficial. and a centralized documetn home for your reports to live in so it know where to go so you're not getting so many interruptions when it doens't know what to do. Structuring things and keeping things clean and understanding everything is tough though.
