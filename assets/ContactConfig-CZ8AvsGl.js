import{j as t,g as o,L as s,h as n}from"./index-DfCR3GxP.js";import{f as c,t as r}from"./date-DTZMJohd.js";const m=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:a})=>t.jsx(o,{component:s,to:`/home/contacts/${a.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email",Cell:({cell:e})=>t.jsx(o,{href:`mailto:${e.getValue()}`,children:e.getValue()})},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorKey:"updatedAt",accessorFn:e=>n.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>c(r(e.getValue()))}];export{m as c};