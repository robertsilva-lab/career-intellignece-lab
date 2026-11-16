# Data, model logic, and professional claims

## Data boundaries

Meridian Works is a fictional manufacturer. All financial values, product demand, conversion standards, budgets, and outcomes are synthetic examples created for this portfolio. They are not Collins Aerospace results, Robert Silva's historical accomplishments, or investment projections.

The three projects use independent datasets. The finance forecast is an aggregate driver model; the demand panel contains two separate illustrative families; the KPI dashboard uses fixed illustrative actual and budget records. They are not a reconciled enterprise planning system.

## Financial forecast

Inputs: monthly unit growth −3% to 5%, price $20–$300, variable cost $0–$300, and fixed monthly operating costs $0–$1,000,000. These bounds are UI demonstration limits, not business estimates.

- January units = 5,000; month t units = 5,000 × (1 + growth/100)^t, with January t = 0.
- Revenue = units × selling price.
- Variable cost = units × variable cost per unit.
- Operating profit = revenue − variable cost − fixed operating cost.
- Annual margin = total operating profit / total revenue.
- Breakeven = ceiling(fixed operating cost / contribution per unit), if contribution is positive.
- Zero contribution with zero fixed cost breaks even at zero units. Other nonpositive-contribution cases have no finite volume that produces positive operating profit after fixed costs.
- Base: 1% monthly growth, $120 price, $72 variable unit cost, $150,000 monthly fixed cost.
- Upside: 2%, $126, $70, $155,000.
- Downside: −1%, $114, $78, $150,000.

Base January: $600,000 revenue, $360,000 variable cost, $90,000 profit, 3,125-unit breakeven. At flat volume for all 12 months, annual profit is $1,080,000. No tax, financing, depreciation, capex, working capital, price elasticity, or capacity constraint is modeled. This is operating scenario modeling, not full P&L ownership or a three-statement model.

## Demand

Synthetic actual units are explicit arrays in `assets/models.js`. Core takes 0.6 hours/unit; precision takes 1.2. Forecasts use the arithmetic mean of the preceding 3 or 6 actual months, without future data. First 3/6 months have no forecast. The comparable evaluation period is July–December for either window.

- WAPE = Σ absolute(forecast − actual) / Σ actual.
- Bias = Σ(forecast − actual) / Σ actual. Positive means overforecasting.
- Next January = latest actual window average × (1 + adjustment/100).
- Required hours = next January units × standard hours/unit.
- Capacity gap = available hours − required hours; negative means shortfall.

Capacity applies only to the selected family. There is no shared-resource allocation, inventory optimization, labor headcount recommendation, overtime-cost model, seasonality adjustment, or automatic forecast selection.

## KPI dashboard

`assets/models.js` defines 12 illustrative actual revenue values and variable-cost ratios. Actual fixed monthly costs start at $151,000 and increase $400 per month. Budget revenue starts at $600,000 and grows 1% monthly; budget variable costs are 60% of revenue and fixed costs are $150,000/month.

Revenue and profit: positive actual-minus-budget variance is favorable. Costs: negative is favorable. Margin is calculated from summed period dollars and its variance is reported in percentage points, not percent change. This avoids averaging monthly percentages incorrectly.

## Professional copy provenance

Professional descriptions use the user-confirmed role chronology and experience supplied in the Job Search project:

- Senior Demand Planner, Commercial SIOP: December 2024–October 2026.
- FP&A Analyst, Mission Systems (Government): July 2023–December 2024.
- Credit & Collections Analyst: May 2023–July 2023 (not an internship).
- Internal Audit Intern: May 2022–May 2023.
- Supplied résumé facts: 33 aircraft planning configurations over tenure; Excel reporting reduced from roughly one week to 2–3 business days; three testing labs and two AOP submissions.
- Confirmed analytical example: actual production versus AOP and labor-hour adjustment modeling for a lab missing production targets. The site omits the uncertain lab designation and does not claim verified savings, layoffs, implementation results, or full P&L ownership.

No new academic credentials, proficiency levels, contact details, client endorsements, headcount outcomes, savings figures, certifications, or employment status claims were invented. The source résumé was not altered. This task used the supplied confirmed context; it did not retrieve a fresh copy of the connected résumé or experience document.
