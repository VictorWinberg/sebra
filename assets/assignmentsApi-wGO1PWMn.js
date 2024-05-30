import{l as a,q as n}from"./index-1svpJYwy.js";const e=async()=>await n(`
    SELECT * FROM assignments
    LEFT JOIN contacts USING (contact_id)
    LEFT JOIN companies USING (company_id)
    `),c=async s=>{await a("assignments",s)};export{c,e as f};
