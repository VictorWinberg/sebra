import{p as a,e as n}from"./useSnackbar-BCO__OmT.js";import{n as s,o as r,p as t,q as o,aj as i}from"./index-jNbj5-Yn.js";const u=async()=>await o("SELECT * FROM companies ORDER BY company_name"),c=async e=>await i("companies",{companyId:e}),p=async e=>await s("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"])),d=async e=>await r("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"]),a(e,["companyId"])),C=async({companyId:e})=>await t("companies",{companyId:e}),w=()=>n({queryKey:["companies"],queryFn:u}),b=e=>n({queryKey:["company",e],queryFn:()=>c(e),enabled:!!e});export{b as a,d as b,p as c,C as d,w as u};
