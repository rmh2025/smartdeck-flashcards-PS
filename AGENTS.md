# Project contributor guidance

Before making a decision that depends on learning research, accessibility standards, competitor behavior, browser capabilities, data storage, or GitHub workflows:

1. Read `README.md`, [`docs/README.md`](docs/README.md), and the relevant section of [`docs/REFERENCE_LIBRARY.md`](docs/REFERENCE_LIBRARY.md).
2. Reopen the linked primary or official source when its current requirements or support matter; do not rely on an old summary.
3. Distinguish peer-reviewed findings, standards, platform documentation, and competitor product examples. Do not present one category as evidence for another.
4. If a recommendation is a design judgment rather than a source-backed conclusion, say so plainly. Do not invent a source or overstate what it proves.
5. Add durable new sources to the reference library with their purpose, scope, limitations, and date checked.
6. For competitive analysis, label public vendor claims as claims, include the snapshot date, and do not infer market share, customer preference, or effectiveness without suitable evidence.
7. Before changing a visible control or workflow, consult the UI control map in `docs/reports/PRODUCT_AND_MARKET_BASELINE.md` and the class crosswalk in `docs/reports/QUALITY_BASELINE.md`. Keep the control's user task, rubric item, rationale, evidence strength, and acceptance check traceable.
8. Do not infer a competitor's internal design motive from its interface or help page. If public user reviews are sampled, record the platform, date range, query, inclusion method, and limits; treat them as anecdotal, not representative.
9. Record the data flow, validation, privacy, and security limits for changed features. A new backend, AI service, account system, sync, or document-conversion service requires a separate privacy/threat-model decision before implementation.

Keep the app browser-only and single-file unless the user asks to change that constraint. Do not put credentials, private API keys, or sensitive user data in the app.
