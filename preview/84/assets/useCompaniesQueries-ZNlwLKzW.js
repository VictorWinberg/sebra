import{p as a,e as n}from"./useSnackbar-CTOAlpHt.js";import{m as s,n as r,o as t,q as o,ai as c}from"./index-BHGARURO.js";const y=async()=>await o("SELECT * FROM companies ORDER BY company_name"),m=async e=>await c("companies",{companyId:e}),p=async e=>await s("companies",a(e,["companyName","address","industry","phone","email","website"])),d=async e=>await r("companies",a(e,["companyName","address","industry","phone","email","website"]),a(e,["companyId"])),C=async({companyId:e})=>await t("companies",{companyId:e}),w=()=>n({queryKey:["companies"],queryFn:y}),l=e=>n({queryKey:["company",e],queryFn:()=>m(e),enabled:!!e});export{l as a,d as b,p as c,C as d,w as u};
