# SmartDeck project documentation

This folder keeps evidence, operating baselines, and development decisions discoverable for both people and coding assistants. The reports are dated snapshots, not live dashboards.

## Current documents

| Document | Purpose | Status |
|---|---|---|
| [`REFERENCE_LIBRARY.md`](REFERENCE_LIBRARY.md) | Source index for learning research, accessibility guidance, browser APIs, competitors, storage, and GitHub workflow. | Last successful Lychee 0.24.2 offline and online scan was 2026-11-16; 52 links checked. Lychee is not installed in the current environment for a rerun. |
| [`reports/PRODUCT_AND_MARKET_BASELINE.md`](reports/PRODUCT_AND_MARKET_BASELINE.md) | Competitive desk scan, target-market hypotheses, UI-control rationale map, evidence limits, and research gaps. | Snapshot 2026-11-17; no competitor review sample, market sizing, or representative user validation. |
| [`reports/QUALITY_BASELINE.md`](reports/QUALITY_BASELINE.md) | Current feature, testing, accessibility, runtime, privacy/security, and release baselines. | Updated 2026-11-17 for themes, material builder, UI evidence map, and security/privacy limits; redesign changes are not yet published. |
| [`reports/PROCESS_REVIEW_AND_WORKFLOW.md`](reports/PROCESS_REVIEW_AND_WORKFLOW.md) | Conversation-based SWOT and a repeatable, human/AI project workflow with evidence, UI rationale, and security gates. | Updated 2026-11-17; revise after future project cycles and user research. |

## How to keep the reports useful

- Each report must say what is observed, what is a hypothesis, what is not measured, and when its information was checked.
- Record test environment, steps, result, and known limitations; do not turn an old conversational summary into a current test result.
- For recurring Markdown/HTML link checks, use Lychee as an optional developer/CI tool: offline mode for local references and online mode for public links. It is not part of SmartDeck's runtime. Treat host blocks such as HTTP 403 as inconclusive and verify those pages separately.
- The [GitHub Pages workflow](../.github/workflows/pages.yml) publishes only `index.html` from `main`; the documentation and assistant guidance are not copied into the app site.
- Update competitor snapshots only from dated, linked sources. Do not describe a static document as autonomous market monitoring.
- Treat [`../index.html`](../index.html) as the current runtime implementation and [`../README.md`](../README.md) as the user-facing feature and setup guide. If they disagree, investigate and correct the source of truth rather than silently choosing one.
