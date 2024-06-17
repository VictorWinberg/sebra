import{i as e,k as s,l as n,q as c}from"./index-DKPB9hdP.js";import{p as t}from"./useSnackbar-BTjqhMXh.js";const i=async()=>await c(`
    SELECT
      contacts.*,
      c.company_name AS company_name
    FROM contacts
    LEFT JOIN companies c USING (company_id)
`),m=async a=>{await e("contacts",t(a,["firstName","lastName","email","phone","companyId","position","address","notes","lastInteractionDate"]))},p=async a=>{await s("contacts",t(a,["firstName","lastName","email","phone","companyId","position","address","notes","lastInteractionDate"]),t(a,["contactId"]))},d=async a=>{await n("contacts",{contactId:a})};export{m as c,d,i as f,p as u};
