import{j as t,i as n,L as s,k as o}from"./index-FssDv7LW.js";import{f as r,t as c}from"./date-BhJCHOTD.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5e6708f6-4695-4e8b-a2a9-72ce4aad57f5",e._sentryDebugIdIdentifier="sentry-dbid-5e6708f6-4695-4e8b-a2a9-72ce4aad57f5")}catch{}})();const f=[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:`/home/contacts/${a.original.id}`,children:e.getValue()})},{accessorKey:"email",header:"Email",Cell:({cell:e})=>t.jsx(n,{href:`mailto:${e.getValue()}`,children:e.getValue()})},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"companyName",accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolagsnamn",filterVariant:"multi-select",enableEditing:!1},{accessorKey:"phone",header:"Telefonnummer"},{accessorKey:"updatedAt",accessorFn:e=>o.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>r(c(e.getValue()))}];export{f as c};
//# sourceMappingURL=ContactConfig-Pnd2jbfW.js.map