import{j as t,g as o,L as s,h as c}from"./index-Cvw3wisO.js";import{f as n,t as r}from"./date-BBO4oRSY.js";const m=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:a})=>t.jsx(o,{component:s,to:`/home/contacts/${a.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email",Cell:({cell:e})=>t.jsx(o,{href:`mailto:${e.getValue()}`,children:e.getValue()})},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"companyName",accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorKey:"updatedAt",accessorFn:e=>c.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>n(r(e.getValue()))}];export{m as c};