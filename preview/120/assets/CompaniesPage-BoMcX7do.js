import{a as p,c as l,j as a,F as u,p as c}from"./index-D5HSxLJv.js";import{D as g}from"./DataTable-D8I0w8R9.js";import{S as b}from"./SebraDialog-Gverw9xY.js";import{u as f,a as C,b as y,C as x}from"./useCompaniesMutations-B8L9LfjM.js";import{c as w}from"./CompanyConfig-D1ssFc7Y.js";import{u as D}from"./useCompaniesQueries-CaroGw57.js";import{A as j}from"./Add-Dl8BgY_t.js";import"./RouterLink-Cm85W6HA.js";import"./MoreHoriz-B1yEgnm8.js";import"./index.esm-BCRtL592.js";import"./Tooltip-BvkcuRG1.js";import"./createStyled-qqlkl0KQ.js";import"./FormControlLabel-DYpKF7ST.js";import"./Tabs-DE-ZlQie.js";import"./useQueryParam-CG8lorE9.js";import"./date-q-6tpqH0.js";import"./Link-DaiCtSnD.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="5cab8b30-d408-4cc5-95b6-3e36a0ee675a",o._sentryDebugIdIdentifier="sentry-dbid-5cab8b30-d408-4cc5-95b6-3e36a0ee675a")}catch{}})();const G=()=>{const o=p(),{workspace:s}=l(),{data:n=[],isLoading:r}=D(),{mutate:i}=f(),{mutate:m}=C(),{mutate:d}=y();return a.jsx(u,{children:a.jsx(g,{data:n,columns:w,getRowId:e=>`${e.id}`,state:{isLoading:r},onCreate:e=>i(e,{onSuccess:({createCompany:t})=>o(`/${s}/home/companies/${(t==null?void 0:t.id)||""}`)}),onUpdate:e=>m(e),onDelete:e=>d(e),renderTopToolbarCustomActions:({table:e})=>a.jsx(c,{onClick:()=>e.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(j,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:e,table:t})=>a.jsx(b,{table:t,row:e,titles:{creating:"Lägg till bolag",editing:"Redigera bolag"},FormComponent:x})})})};export{G as default};
//# sourceMappingURL=CompaniesPage-BoMcX7do.js.map
