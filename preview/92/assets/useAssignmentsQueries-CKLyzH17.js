import{p as o,t as a,e as c}from"./useSnackbar-BO7AuKFX.js";import{m as y,n as p,o as g,q as t,ai as d}from"./index-Cb92esh7.js";const l=async()=>{const s=await t("SELECT * FROM assignments ORDER BY assignment_name"),e=a(await t("SELECT * FROM contacts"),"contactId"),n=a(await t("SELECT * FROM companies"),"companyId");return s.map(i(e,n))},I=async s=>{const e=await d("assignments",{assignmentId:s}),n=a(await t("SELECT * FROM contacts"),"contactId"),r=a(await t("SELECT * FROM companies"),"companyId");return i(n,r)(e)},F=async s=>await y("assignments",o(s,["assignmentName","responsiblePersonId","externalContactPersonId","companyId","relevantFiles","fee","type","status"])),f=async s=>await p("assignments",o(s,["assignmentName","responsiblePersonId","externalContactPersonId","companyId","relevantFiles","fee","type","status"]),o(s,["assignmentId"])),w=async({assignmentId:s})=>await g("assignments",{assignmentId:s});function i(s,e){return n=>{const r=s.get(n.responsiblePersonId),m=s.get(n.externalContactPersonId),u=e.get(n.companyId);return{...n,responsiblePerson:r,externalContactPerson:m,company:u}}}const E=async()=>(await t("SELECT DISTINCT status FROM assignments")).map(({status:e})=>e).filter(Boolean),A=()=>c({queryKey:["assignments"],queryFn:l}),q=s=>c({queryKey:["assignment",s],queryFn:()=>I(s),enabled:!!s}),O=()=>c({queryKey:["assignmentStatuses"],queryFn:E});export{q as a,O as b,F as c,f as d,w as e,A as u};
