import{j as t,g as s,L as n,b as c,d as o,Q as r,h as i}from"./index-Cvw3wisO.js";import{f as l,t as m}from"./date-BBO4oRSY.js";const p=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:a})=>t.jsx(s,{component:n,to:`/home/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorKey:"responsibleContacts",header:"Ansvariga",enableEditing:!1,Cell:({cell:e})=>t.jsx(c,{disablePadding:!0,children:e.getValue().map(a=>t.jsx(o,{sx:{py:.25},disableGutters:!0,children:t.jsx(s,{component:n,to:`/home/contacts/${a.contactId}`,children:a.contactName})},a.contactId))})},{accessorKey:"externalContact.contactName",accessorFn:e=>{var a;return(a=e.externalContact)==null?void 0:a.contactName},header:"Extern kontakt",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(s,{component:n,to:{pathname:`/home/contacts/${a.original.externalContactId}`,search:`${r({tab:"assignments"})}`},children:e.getValue()})},{accessorKey:"company.companyName",accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolag",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(s,{component:n,to:{pathname:`/home/companies/${a.original.companyId}`,search:`${r({tab:"assignments"})}`},children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorKey:"updatedAt",accessorFn:e=>i.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>l(m(e.getValue()))}];export{p as a};
