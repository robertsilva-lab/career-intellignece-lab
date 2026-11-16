/* Pure model functions shared by the browser and automated checks. All data synthetic. */
(function(root){
'use strict';
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const presets={base:{growth:1,price:120,cost:72,fixed:150000},upside:{growth:2,price:126,cost:70,fixed:155000},downside:{growth:-1,price:114,cost:78,fixed:150000}};
function forecast(a){return months.map((month,i)=>{const units=5000*Math.pow(1+a.growth/100,i),revenue=units*a.price,variable=units*a.cost;return{month,units,revenue,variable,profit:revenue-variable-a.fixed};});}
function totals(rows){return rows.reduce((s,r)=>({revenue:s.revenue+r.revenue,variable:s.variable+r.variable,profit:s.profit+r.profit,units:s.units+(r.units||0)}),{revenue:0,variable:0,profit:0,units:0});}
function breakeven(a){return a.price>a.cost?Math.ceil(a.fixed/(a.price-a.cost)):a.fixed===0&&a.price===a.cost?0:null;}
const products={core:{actual:[3900,4100,4200,4050,4400,4600,4500,4750,4900,5100,5000,5300],hours:.6},precision:{actual:[1550,1620,1580,1750,1810,1780,1900,1850,2000,2100,2050,2250],hours:1.2}};
function demand(key,window,uplift,capacity){const {actual,hours}=products[key];const rows=actual.map((units,i)=>{const predicted=i>=window?actual.slice(i-window,i).reduce((a,b)=>a+b,0)/window:null;return{month:months[i],units,predicted,error:predicted===null?null:predicted-units};});const evalRows=rows.slice(6),den=evalRows.reduce((s,r)=>s+r.units,0),wape=evalRows.reduce((s,r)=>s+Math.abs(r.error),0)/den,bias=evalRows.reduce((s,r)=>s+r.error,0)/den;const next=actual.slice(-window).reduce((s,n)=>s+n,0)/window*(1+uplift/100),required=next*hours;return{rows,wape,bias,next,required,gap:capacity-required};}
const actualRevenue=[570000,585000,603000,610000,632000,640000,655000,660000,680000,690000,708000,726000];
const actualRates=[.61,.60,.60,.59,.60,.60,.61,.61,.62,.63,.63,.64];
const dashboard=months.map((month,i)=>({month,actual:{revenue:actualRevenue[i],variable:actualRevenue[i]*actualRates[i],fixed:151000+i*400},budget:{revenue:600000*Math.pow(1.01,i),variable:360000*Math.pow(1.01,i),fixed:150000}}));
function kpi(period){let start=period==='year'?0:(Number(period[1])-1)*3,end=period==='year'?12:start+3;const rows=dashboard.slice(start,end);const sum=side=>{const t=rows.reduce((s,r)=>({revenue:s.revenue+r[side].revenue,variable:s.variable+r[side].variable,fixed:s.fixed+r[side].fixed}),{revenue:0,variable:0,fixed:0});return{...t,profit:t.revenue-t.variable-t.fixed,margin:(t.revenue-t.variable-t.fixed)/t.revenue};};return{rows,actual:sum('actual'),budget:sum('budget')};}
root.Lab={months,presets,forecast,totals,breakeven,products,demand,kpi};
if(typeof module!=='undefined')module.exports=root.Lab;
})(typeof window!=='undefined'?window:globalThis);
