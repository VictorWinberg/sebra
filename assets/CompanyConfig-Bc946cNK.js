import{j as s,g as r,L as t,h as o}from"./index-CrsItGNb.js";import{f as n,t as c}from"./date-TrUW26PT.js";const m=[{accessorKey:"companyName",header:"Bolagsnamn",Cell:({cell:e,row:a})=>s.jsx(r,{component:t,to:`/home/companies/${a.original.companyId}`,children:e.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorKey:"organizationNumber",header:"Org.nr"},{accessorKey:"updatedAt",accessorFn:e=>o.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>n(c(e.getValue()))}];export{m as c};
