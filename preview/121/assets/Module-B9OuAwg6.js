import{j as a,p as f,r as m,B as p,T as d}from"./index-Wz3Ywbj5.js";import{u as i,F as y,S as u}from"./useQueryParam-DYoKtSME.js";import{u as g,c as C}from"./RouterLink-BseUmFNE.js";import{A as F,u as T}from"./useAssignmentsMutations-BvrelSV7.js";import{a as x}from"./AssignmentConfig-Eoa8p981.js";import{u as k}from"./useAssignmentsQueries-D1XaOkxN.js";import{C as M,u as j}from"./useCompaniesMutations-z6fAovSX.js";import{c as h}from"./CompanyConfig-uJ7O8hce.js";import{u as D}from"./useCompaniesQueries-CvPfiiuR.js";import{C as _,u as w}from"./useContactsMutations-D4jL5q7s.js";import{c as B}from"./ContactConfig-BlTKqB2V.js";import{u as P}from"./useContactsQueries-D5WnVdse.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e072e507-0813-4ef0-9ee4-27436dedb744",e._sentryDebugIdIdentifier="sentry-dbid-e072e507-0813-4ef0-9ee4-27436dedb744")}catch{}})();const S=({selectedModule:e})=>{const{FormComponent:o,createMutation:r,props:s}=e,{mutate:n}=r();return a.jsx(o,{onSubmit:n,...s,renderBottomContent:()=>a.jsx(f,{size:"large",type:"submit",variant:"contained",color:"primary",sx:{mt:2},children:"Skapa"})})},v=({selectedModule:e})=>{const{useData:o,props:r}=e,[s,n]=i("filters",y,[]),[t,l]=i("search",u,""),{data:c=[]}=o(),b=g({data:c,initialState:{showGlobalFilter:!!t},state:{columnFilters:s,globalFilter:t},enableColumnFilters:!1,enableColumnResizing:!1,enableDensityToggle:!1,enableEditing:!1,enableRowActions:!1,enableTopToolbar:!1,onColumnFiltersChange:n,onGlobalFilterChange:l,...r});return a.jsx(C,{table:b})},E=[{key:"companyForm",label:"Formulär - Bolag",title:"Nytt bolag",type:"form",FormComponent:M,createMutation:j,props:{}},{key:"assignmentForm",label:"Formulär - Uppdrag",title:"Nytt uppdrag",type:"form",FormComponent:F,createMutation:T,props:{}},{key:"contactForm",label:"Formulär - Kontaktperson",title:"Ny kontaktperson",type:"form",FormComponent:_,createMutation:w,props:{}},{key:"companiesTable",label:"Tabell - Bolag",title:"Bolag",type:"table",useData:D,props:{columns:h},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"assignmentsTable",label:"Tabell - Uppdrag",title:"Uppdrag",type:"table",useData:k,props:{columns:x},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"contactsTable",label:"Tabell - Kontaktperson",title:"Kontakter",type:"table",useData:P,props:{columns:B},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}}],I=e=>{const[o,r]=i("title",u,""),[s,n]=i("module",u,""),t=m.useMemo(()=>E.find(l=>l.key===s),[s]);return m.useEffect(()=>{var l;e.selectedModule!==void 0&&n(((l=e.selectedModule)==null?void 0:l.key)??"")},[e.selectedModule,n]),m.useEffect(()=>{e.title!==void 0&&r(e.title??"")},[e.title,r]),a.jsxs(p,{sx:{my:1},children:[a.jsx(d,{variant:"h4",color:"primary",children:o}),a.jsx(p,{sx:{my:1}}),(t==null?void 0:t.type)==="table"&&a.jsx(v,{selectedModule:t}),(t==null?void 0:t.type)==="form"&&a.jsx(S,{selectedModule:t})]})},J=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as M,J as a,E as m};
//# sourceMappingURL=Module-B9OuAwg6.js.map
