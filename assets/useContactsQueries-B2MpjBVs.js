import{u as t}from"./useQuery-CHZUFmVn.js";import{q as o}from"./index-B_sJm1-I.js";const r=async()=>await o(`
    SELECT * FROM contacts
    LEFT JOIN companies USING (company_id)
`),c=()=>t({queryKey:["contacts"],queryFn:r});export{c as u};
