import{b as i}from"./useSnackbar-B5niWldy.js";import{n as p,o as y,p as l,q as r,s as d}from"./index-DwCExEwI.js";import{p as o,t as c}from"./object-CDPGC_UC.js";const g=async()=>{const e=await r("SELECT * FROM assignments ORDER BY assignment_name"),n=c(await r("SELECT * FROM contacts"),"contactId"),s=c(await r("SELECT * FROM companies"),"companyId");return e.map(C(n,s))},P=async e=>await d("assignments",{assignmentId:e}),A=async e=>await p("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"])),w=async e=>await y("assignments",o(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),o(e,["assignmentId"])),x=async({assignmentId:e})=>await l("assignments",{assignmentId:e});function C(e,n){return s=>{const t=e.get(s.responsiblePersonId),m=t&&n.get(t.companyId),a=e.get(s.externalContactPersonId),u=a&&n.get(a.companyId);return{...s,responsiblePerson:t&&{...t,company:m},externalContactPerson:a&&{...a,company:u}}}}const E=()=>i({queryKey:["assignments"],queryFn:g}),F=e=>i({queryKey:["assignment",e],queryFn:()=>P(e),enabled:!!e});export{F as a,w as b,A as c,x as d,E as u};