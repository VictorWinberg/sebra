import{j as t,l as n}from"./index-CgpUjrG9.js";import{R as r}from"./RouterLink-DTBKzUyY.js";import{f as s,t as c}from"./date-DiMgja7A.js";import{L as o}from"./Link-Chevvt64.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="80554ce6-d452-46a3-819d-aa9efd1c3392",e._sentryDebugIdIdentifier="sentry-dbid-80554ce6-d452-46a3-819d-aa9efd1c3392")}catch{}})();const u=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:a})=>t.jsx(o,{component:r,to:`/home/contacts/${a.original.id}`,children:e.getValue()})},{accessorKey:"email",header:"Email",Cell:({cell:e})=>t.jsx(o,{href:`mailto:${e.getValue()}`,children:e.getValue()})},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"companyName",accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorKey:"updatedAt",accessorFn:e=>n.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>s(c(e.getValue()))}];export{u as c};
//# sourceMappingURL=ContactConfig-9kHyExB6.js.map
