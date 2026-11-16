# Validation — November 16, 2026

## Completed

- `node test-models.cjs`: passed finance identities, flat-volume known-value check, scenario ordering, breakeven edge cases, moving-average history checks, capacity reconciliation, demand adjustment independence, and KPI aggregation.
- `node --check assets/app.js`: passed.
- Browser: loaded the locally served full site with styles, SVG charts, populated tables, and correct base-case values.
- Browser: Downside preset changed annual revenue and profit.
- Browser: selecting Precision assemblies updated demand metrics.
- Browser: Full year selection updated KPI totals.
- Browser: raising variable cost above price produced negative operating profit and “No finite level” breakeven.
- Browser: finance reset restored the base case.
- Browser: right-arrow keyboard navigation selected the next project tab.
- Browser: forecast CSV download event completed.
- Packaged source contains locally bundled assets with relative paths, no credentials, private job records, personal contact details, or unrelated personal content.

## Limits and follow-up

- Browser visual inspection was desktop-size. Responsive CSS includes 950px and 700px breakpoints; a physical mobile device and screen reader were not tested.
- Demand CSV generation uses the same download utility as the verified forecast export, but was not separately opened in Excel during QA.
- No GitHub repository changes were made and no new public deployment was performed. Check Pages deployment after upload.
- No third-party integration, persistence, complete three-statement model, or production forecasting accuracy is claimed.
