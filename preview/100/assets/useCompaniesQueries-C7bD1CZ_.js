import{p as a,b as n}from"./useSnackbar-BI1N9Jr5.js";import{m as s,n as r,o as t,q as o,ag as i}from"./index-Cvw3wisO.js";const m=async()=>await o("SELECT * FROM companies ORDER BY company_name"),u=async e=>await i("companies",{companyId:e}),p=async e=>await s("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"])),d=async e=>await r("companies",a(e,["companyName","address","industry","phone","email","website","organizationNumber"]),a(e,["companyId"])),C=async({companyId:e})=>await t("companies",{companyId:e}),b=()=>n({queryKey:["companies"],queryFn:m}),w=e=>n({queryKey:["company",e],queryFn:()=>u(e),enabled:!!e});export{w as a,d as b,p as c,C as d,b as u};