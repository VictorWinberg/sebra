import{j as r,l as s}from"./index-ssZ8y-DW.js";import{R as t}from"./RouterLink-6jjoqzes.js";import{f as d,t as o}from"./date-xfI2nk5D.js";import{L as n}from"./Link-BeLhl1AT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="e8f6ab61-1cda-4b35-addd-621299e8884a",e._sentryDebugIdIdentifier="sentry-dbid-e8f6ab61-1cda-4b35-addd-621299e8884a")}catch{}})();const u=[{accessorKey:"companyName",header:"Bolagsnamn",Cell:({cell:e,row:a})=>r.jsx(n,{component:t,to:`/home/companies/${a.original.id}`,children:e.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorKey:"organizationNumber",header:"Org.nr"},{accessorKey:"updatedAt",accessorFn:e=>s.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>d(o(e.getValue()))}];export{u as c};
//# sourceMappingURL=CompanyConfig-jnu5ySlf.js.map