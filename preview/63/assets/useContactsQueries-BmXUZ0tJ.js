import{p as a,t as o,g as s}from"./useSnackbar-8h4qsJ3q.js";import{q as r,s as u,v as i,w as n,x as y}from"./index-DIjJlU8B.js";const p=async()=>{const t=await n("SELECT * FROM contacts ORDER BY contact_name"),c=o(await n("SELECT * FROM companies"),"companyId");return t.map(e=>({...e,company:c.get(e.companyId)}))},m=async t=>await y("contacts",{contactId:t}),C=async t=>await r("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"])),w=async t=>await u("contacts",a(t,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"]),a(t,["contactId"])),q=async({contactId:t})=>await i("contacts",{contactId:t}),E=()=>s({queryKey:["contacts"],queryFn:p}),I=t=>s({queryKey:["contact",t],queryFn:()=>m(t),enabled:!!t});export{I as a,w as b,C as c,q as d,E as u};
