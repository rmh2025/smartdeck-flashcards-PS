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
- Read questions and answers aloud with browser-provided voices, or play a separate spoken-host quiz with three rotating characters and an optional score.
- Paste source notes with a topic; SmartDeck splits them into editable cards and can keep a source URL with each card.
- Search the web, academic/government sources, PubMed, or MDN for a topic. Search opens browser results; review and choose sources yourself.
- Import and export a deck as JSON.
- Save decks, study progress, and the last active deck in the browser.
- Study in a full-height tabletop arena with a tactile flip card, quick rating controls, and collapsible deck, audio, and appearance drawers.
- Use the default obsidian-and-brass tabletop or pick a PNG, JPEG, or WebP background image (up to 1.5 MB). Images stay in local browser storage and can be reset at any time.
- Adapt the play area to small screens, support keyboard navigation, show focus indicators, and honor reduced-motion preferences.

SmartDeck does not scrape web pages or send pasted material to an AI service. Browser-only apps cannot reliably read arbitrary sites because of cross-origin restrictions, and a private AI API key must not be put in a public HTML file. You choose a source, paste material you may use, and can edit the resulting cards. JSON import/export also lets you bring in cards drafted with an AI assistant.

Speech is optional and uses voices installed in the browser or operating system; available voices differ by device. The quiz does not automatically judge free-form answers: you reveal the model answer and rate yourself, so valid paraphrases are not incorrectly marked wrong.

## Topic and source workflow

1. Choose a deck and select **From material**.
2. Enter a topic and use **Search sources** to open general web, academic/government, PubMed, or MDN results. Review a result and copy its URL.
3. Paste your permitted notes or source excerpt and the URL. SmartDeck splits the text into chunks of about 700 characters and creates editable prompt/answer cards. The prompt is a starter, not an AI-generated question, so improve it before studying.
4. For richer question-and-answer cards, ask Copilot Chat to turn each source chunk into JSON cards, then use **Import JSON**. The accepted format is:

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

1. The semantic HTML near the beginning defines the header, deck navigation, study area, dialogs, and footer.
2. The `<style>` block contains the tabletop colors, viewport layout, responsive rules, focus states, and card/rating animations.
3. The `<script>` block defines the deck/card data, local storage, source-note chunking, JSON import/export, rendering, and event handlers.

The JavaScript rendering is split into small jobs (`renderDecks`, `renderStage`, and `renderCardList`) so a deck change, study card, and card list are easier to inspect separately.

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
