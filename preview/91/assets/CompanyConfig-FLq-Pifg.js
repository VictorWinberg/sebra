import{j as s,g as t,L as r,h as o}from"./index-C68uxFow.js";import{f as d,t as n}from"./date-BAyLRcM8.js";const l=[{accessorKey:"companyName",header:"Företagsnamn",Cell:({cell:e,row:a})=>s.jsx(t,{component:r,to:`/dashboard/companies/${a.original.companyId}`,children:e.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorKey:"updatedAt",accessorFn:e=>o.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>d(n(e.getValue()))}];export{l as c};
