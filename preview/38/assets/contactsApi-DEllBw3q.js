import{i as e,k as c,l as n,q as o}from"./index-uSPFklPD.js";import{p as t}from"./useSnackbar-Dr7LAzah.js";const r=async()=>await o(`
    SELECT
      contacts.*,
      c.company_name AS company_name
    FROM contacts
    LEFT JOIN companies c USING (company_id)
`),m=async a=>{await e("contacts",t(a,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"]))},p=async a=>{await c("contacts",t(a,["contactName","email","phone","jobTitle","companyId","position","address","notes","lastInteractionDate"]),t(a,["contactId"]))},d=async({contactId:a})=>{await n("contacts",{contactId:a})};export{m as c,d,r as f,p as u};
