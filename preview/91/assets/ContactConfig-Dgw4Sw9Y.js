import{j as t,g as s,L as o,h as r}from"./index-C68uxFow.js";import{f as n,t as c}from"./date-BAyLRcM8.js";const d=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:a})=>t.jsx(s,{component:o,to:`/dashboard/contacts/${a.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email",Cell:({cell:e})=>t.jsx(s,{href:`mailto:${e.getValue()}`,children:e.getValue()})},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Företagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorKey:"updatedAt",accessorFn:e=>r.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>n(c(e.getValue()))}];export{d as c};
