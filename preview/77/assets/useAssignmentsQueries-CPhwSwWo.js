import{p as o,t as c,e as i}from"./useSnackbar-BR6trEu1.js";import{p,s as y,t as l,q as r,V as g}from"./index-qKtrV0mz.js";const d=async()=>{const e=await r("SELECT * FROM assignments ORDER BY assignment_name"),n=c(await r("SELECT * FROM contacts"),"contactId"),s=c(await r("SELECT * FROM companies"),"companyId");return e.map(C(n,s))},P=async e=>await g("assignments",{assignmentId:e}),f=async e=>await p("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"])),A=async e=>await y("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),o(e,["assignmentId"])),w=async({assignmentId:e})=>await l("assignments",{assignmentId:e});function C(e,n){return s=>{const t=e.get(s.responsiblePersonId),m=t&&n.get(t.companyId),a=e.get(s.externalContactPersonId),u=a&&n.get(a.companyId);return{...s,responsiblePerson:t&&{...t,company:m},externalContactPerson:a&&{...a,company:u}}}}const x=()=>i({queryKey:["assignments"],queryFn:d}),E=e=>i({queryKey:["assignment",e],queryFn:()=>P(e),enabled:!!e});export{E as a,A as b,f as c,w as d,x as u};
