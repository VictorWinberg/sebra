import{j as t,g as n,L as s,U as r,h as o}from"./index-Bd6xTruv.js";import{f as i,t as c}from"./date-D5hx8rTT.js";const d=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:`/home/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.responsiblePerson)==null?void 0:a.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:{pathname:`/home/contacts/${a.original.responsiblePersonId}`,search:`${r({tab:"assignments"})}`},children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.externalContactPerson)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:{pathname:`/home/contacts/${a.original.externalContactPersonId}`,search:`${r({tab:"assignments"})}`},children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolag",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:{pathname:`/home/companies/${a.original.companyId}`,search:`${r({tab:"assignments"})}`},children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorKey:"updatedAt",accessorFn:e=>o.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>i(c(e.getValue()))}];export{d as a};