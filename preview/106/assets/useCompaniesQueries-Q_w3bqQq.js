import{p as a,b as n}from"./useSnackbar-DZ6xs5-N.js";import{n as s,o as r,p as t,s as o,ai as i}from"./index-L1L35c__.js";const u=async()=>await o("SELECT * FROM companies ORDER BY company_name"),c=async e=>await i("companies",{id:e}),p=async e=>await s("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"])),d=async e=>await r("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"]),a(e,["id"])),C=async({id:e})=>await t("companies",{id:e}),b=()=>n({queryKey:["companies"],queryFn:u}),w=e=>n({queryKey:["company",e],queryFn:()=>c(e),enabled:!!e});export{w as a,d as b,p as c,C as d,b as u};
