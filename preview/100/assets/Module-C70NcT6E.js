import{j as o,f,r as i,B as p,T as y}from"./index-Cvw3wisO.js";import{u as m,F as g,S as u}from"./useQueryParam-BDpf-YJB.js";import{c as C,g as F}from"./useSnackbar-BI1N9Jr5.js";import{A as d,u as T}from"./useAssignmentsMutations-Brk2gwk1.js";import{a as x}from"./AssignmentConfig-D5adjOSD.js";import{u as k}from"./useAssignmentsQueries-DEOrMn8B.js";import{C as M,u as j}from"./useCompaniesMutations-DALKz8NM.js";import{c as h}from"./CompanyConfig-DzUGSy-L.js";import{u as B}from"./useCompaniesQueries-C7bD1CZ_.js";import{C as P,u as S}from"./useContactsMutations-DgcpgWaG.js";import{c as D}from"./ContactConfig-Dz0b4CeG.js";import{u as v}from"./useContactsQueries-ZbRfS0Tr.js";const A=({selectedModule:t})=>{const{FormComponent:n,createMutation:a,props:r}=t,{mutate:l}=a();return o.jsx(n,{onSubmit:l,...r,renderBottomContent:()=>o.jsx(f,{size:"large",type:"submit",variant:"contained",color:"primary",sx:{mt:2},children:"Skapa"})})},E=({selectedModule:t})=>{const{useData:n,props:a}=t,[r,l]=m("filters",g,[]),[e,s]=m("search",u,""),{data:c=[]}=n(),b=C({data:c,initialState:{showGlobalFilter:!!e},state:{columnFilters:r,globalFilter:e},enableColumnFilters:!1,enableColumnResizing:!1,enableDensityToggle:!1,enableEditing:!1,enableRowActions:!1,enableTopToolbar:!1,onColumnFiltersChange:l,onGlobalFilterChange:s,...a});return o.jsx(F,{table:b})},R=[{key:"companyForm",label:"Formulär - Bolag",title:"Nytt bolag",type:"form",FormComponent:M,createMutation:j,props:{}},{key:"assignmentForm",label:"Formulär - Uppdrag",title:"Nytt uppdrag",type:"form",FormComponent:d,createMutation:T,props:{}},{key:"contactForm",label:"Formulär - Kontaktperson",title:"Ny kontaktperson",type:"form",FormComponent:P,createMutation:S,props:{}},{key:"companiesTable",label:"Tabell - Bolag",title:"Bolag",type:"table",useData:B,props:{columns:h},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"assignmentsTable",label:"Tabell - Uppdrag",title:"Uppdrag",type:"table",useData:k,props:{columns:x},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}},{key:"contactsTable",label:"Tabell - Kontaktperson",title:"Kontakter",type:"table",useData:v,props:{columns:D},configProps:{enableTopToolbar:!0,enableColumnFilters:!0}}],_=t=>{const[n,a]=m("title",u,""),[r,l]=m("module",u,""),e=i.useMemo(()=>R.find(s=>s.key===r),[r]);return i.useEffect(()=>{var s;t.selectedModule!==void 0&&l(((s=t.selectedModule)==null?void 0:s.key)??"")},[t.selectedModule,l]),i.useEffect(()=>{t.title!==void 0&&a(t.title??"")},[t.title,a]),o.jsxs(p,{sx:{my:1},children:[o.jsx(y,{variant:"h4",color:"primary",children:n}),o.jsx(p,{sx:{my:1}}),(e==null?void 0:e.type)==="table"&&o.jsx(E,{selectedModule:e}),(e==null?void 0:e.type)==="form"&&o.jsx(A,{selectedModule:e})]})},J=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as M,J as a,R as m};
