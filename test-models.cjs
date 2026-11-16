const assert=require('node:assert/strict');
const L=require('./assets/models.js');
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);
const flat=L.forecast({growth:0,price:120,cost:72,fixed:150000});
assert.equal(flat.length,12);near(flat[0].revenue,600000);near(flat[0].profit,90000);near(L.totals(flat).profit,1080000);
assert.equal(L.breakeven(L.presets.base),3125);assert.equal(L.breakeven({price:70,cost:72,fixed:100}),null);assert.equal(L.breakeven({price:72,cost:72,fixed:0}),0);
assert.ok(L.totals(L.forecast(L.presets.upside)).profit>L.totals(L.forecast(L.presets.base)).profit);
assert.ok(L.totals(L.forecast(L.presets.downside)).profit<L.totals(L.forecast(L.presets.base)).profit);
for(const key of Object.keys(L.products))for(const w of [3,6]){let d=L.demand(key,w,0,3000);assert.equal(d.rows[0].predicted,null);near(d.rows[w].predicted,L.products[key].actual.slice(0,w).reduce((a,b)=>a+b)/w);near(d.required+d.gap,3000);near(L.demand(key,w,30,3000).next,d.next*1.3);near(L.demand(key,w,30,0).wape,d.wape);assert.ok(Number.isFinite(d.wape));}
let d=L.demand('core',3,0,3000);near(d.next,(5100+5000+5300)/3);near(d.rows[6].predicted,(4050+4400+4600)/3);assert.ok(d.gap<0);
for(const p of ['q1','q2','q3','q4','year']){let k=L.kpi(p);for(const side of ['actual','budget']){near(k[side].profit,k[side].revenue-k[side].variable-k[side].fixed);near(k[side].margin,k[side].profit/k[side].revenue);}}
near(['q1','q2','q3','q4'].reduce((s,p)=>s+L.kpi(p).actual.profit,0),L.kpi('year').actual.profit);
console.log('PASS: finance identities, scenario ordering, breakeven edge cases, no-lookahead forecasts, capacity reconciliation, KPI aggregation.');
