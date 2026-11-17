# SmartDeck project documentation

This folder keeps evidence, operating baselines, and development decisions discoverable for both people and coding assistants. The reports are dated snapshots, not live dashboards.

## Current documents

| Document | Purpose | Status |
|---|---|---|
| [`REFERENCE_LIBRARY.md`](REFERENCE_LIBRARY.md) | Source index for learning research, accessibility guidance, browser APIs, competitors, storage, and GitHub workflow. | Sources refreshed 2026-11-17; last successful Lychee 0.24.2 scan was 2026-11-16. Lychee is not installed for rerunning the link check, so newly added links remain unverified by Lychee. |
| [`reports/PRODUCT_AND_MARKET_BASELINE.md`](reports/PRODUCT_AND_MARKET_BASELINE.md) | Competitive gaps, differentiating strategy, transparent goal/competitive/security scorecard, target-market hypotheses, UI-control map, and research gaps. | Snapshot 2026-11-17; no competitor review sample, market sizing, or representative user validation. |
| [`reports/QUALITY_BASELINE.md`](reports/QUALITY_BASELINE.md) | Current feature, testing, accessibility, runtime, privacy/security, scorecard, and release baselines. | Updated 2026-11-17 with the scorecard, point-in-time host-header observation, and local CSP validation status. |
| [`reports/PROCESS_REVIEW_AND_WORKFLOW.md`](reports/PROCESS_REVIEW_AND_WORKFLOW.md) | Conversation-based SWOT and a repeatable, human/AI project workflow with evidence, UI rationale, and security gates. | Updated 2026-11-17; revise after future project cycles and user research. |

## How to keep the reports useful

- Each report must say what is observed, what is a hypothesis, what is not measured, and when its information was checked.
- Record test environment, steps, result, and known limitations; do not turn an old conversational summary into a current test result.
- For recurring Markdown/HTML link checks, use Lychee as an optional developer/CI tool: offline mode for local references and online mode for public links. It is not part of SmartDeck's runtime. Treat host blocks such as HTTP 403 as inconclusive and verify those pages separately.
- The [GitHub Pages workflow](../.github/workflows/pages.yml) publishes only `index.html` from `main`; the documentation and assistant guidance are not copied into the app site.
- Update competitor snapshots only from dated, linked sources. Do not describe a static document as autonomous market monitoring.
- Treat product scores as scoped self-assessments with visible criteria and exclusions; do not convert them into market rankings, validated demand, learning outcomes, or security certifications.
- Treat [`../index.html`](../index.html) as the current runtime implementation and [`../README.md`](../README.md) as the user-facing feature and setup guide. If they disagree, investigate and correct the source of truth rather than silently choosing one.
