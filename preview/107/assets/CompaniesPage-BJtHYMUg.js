import{j as o,F as m,g as d}from"./index-Dl4XAGHA.js";import{D as p}from"./DataTable-KrIayMax.js";import{S as l}from"./SebraDialog-DuIQz_h4.js";import{u as f,a as u,b as g,C as c}from"./useCompaniesMutations-BBSaPpbV.js";import{c as y}from"./CompanyConfig-C94J4UKi.js";import{u as C}from"./useCompaniesQueries-D5QFk1VV.js";import{A as b}from"./Add-DcIoj45B.js";import"./SebraForm-Buo_nVLS.js";import"./MoreHoriz-DDxmLduF.js";import"./index.esm-CNmaJeLN.js";import"./Tooltip-BgxD-eQP.js";import"./Tabs-BnkWJ6vk.js";import"./useQueryParam-OOHpWbWx.js";import"./date-5MLBmrxt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="d7502825-d2ea-4ff2-897a-8b90f832743f",e._sentryDebugIdIdentifier="sentry-dbid-d7502825-d2ea-4ff2-897a-8b90f832743f")}catch{}})();const v=()=>{const{data:e=[],isLoading:a}=C(),{mutate:n}=f(),{mutate:r}=u(),{mutate:s}=g();return o.jsx(m,{children:o.jsx(p,{data:e,columns:y,getRowId:t=>`${t.companyId}`,state:{isLoading:a},onCreate:t=>n(t),onUpdate:t=>r(t),onDelete:t=>s(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(d,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(b,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:t,table:i})=>o.jsx(l,{table:i,row:t,titles:{creating:"Lägg till bolag",editing:"Redigera bolag"},FormComponent:c})})})};export{v as default};
//# sourceMappingURL=CompaniesPage-BJtHYMUg.js.map
