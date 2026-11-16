# Career Intelligence Lab — Robert Silva

A buildless, responsive portfolio for the existing `robertsilva-lab/career-intelligence-lab` GitHub Pages repository. Open `index.html` directly in a current desktop browser, or use VS Code Live Server. No Node installation, package install, API keys, database, paid tools, or build step is needed to run or deploy the website.

## Included and working

- Driver-based, 12-month FP&A operating forecast with base/upside/downside presets and custom assumptions.
- Revenue, contribution-driven operating profit, monthly breakeven, base-case comparison, monthly chart/table, and CSV export.
- Two synthetic product families, 3/6-month moving-average forecasts, matched July–December WAPE/bias backtests, demand adjustment, and production-hour capacity gap.
- Independent synthetic actual-versus-budget dashboard with quarter/full-year selection, operating profit, operating margin, variance assessments, and management readout.
- Corrected professional role chronology, supplied experience examples, methodology explanations, accessible keyboard-operated tabs, semantic tables, visible focus styles, mobile layout rules, and reduced-motion support.

All calculations run in the visitor's browser. Values reset when the page reloads. No cookies, analytics, accounts, private records, contact forms, or remote data integrations are included. This is a portfolio demonstration, not a production finance platform. The operating forecast is not a complete three-statement financial model. Demand and KPI datasets are independent demonstrations; changes in one project do not flow into the others.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Public portfolio and accessible project interface |
| `assets/styles.css` | Responsive visual design |
| `assets/models.js` | Synthetic datasets and pure calculation functions |
| `assets/app.js` | UI updates, SVG charts, CSV exports, keyboard tabs |
| `assets/favicon.svg` | Locally bundled site icon |
| `.nojekyll` | Serve static files without Jekyll processing |
| `DEPLOYMENT.md` | Step-by-step Windows / VS Code / GitHub instructions |
| `MODEL_NOTES.md` | Formula definitions and data/experience provenance |
| `test-models.cjs` | Optional automated calculation checks; requires Node |
| `QA.md` | Completed validation and remaining verification limits |

Every asset path is relative, so the site works at the GitHub Pages repository subpath. There are no CDN, font, image, or script dependencies. Only the source-repository links leave the site.

## Editing

Edit public copy in `index.html`. Change colors and breakpoints in `assets/styles.css`. Synthetic source data and formulas are in `assets/models.js`; browser behavior is in `assets/app.js`. Keep methodology text synchronized with formula changes. Do not insert any employer datasets, confidential files, credentials, application history, private contact information, or unrelated personal records into this public repository.

## Optional checks

From the project folder, if Node is already installed:

```powershell
node test-models.cjs
node --check assets/app.js
```

Do not install Node just to publish this site. See `DEPLOYMENT.md` for the normal no-build workflow.
