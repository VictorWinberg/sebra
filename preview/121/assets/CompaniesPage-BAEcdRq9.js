import{a as p,c as l,j as a,F as u,p as c}from"./index-Wz3Ywbj5.js";import{D as g}from"./DataTable-Di5JIvIf.js";import{S as b}from"./SebraDialog-BBU3YGz0.js";import{u as f,a as C,b as y,C as x}from"./useCompaniesMutations-z6fAovSX.js";import{c as w}from"./CompanyConfig-uJ7O8hce.js";import{u as D}from"./useCompaniesQueries-CvPfiiuR.js";import{A as j}from"./Add-CYCGZR-A.js";import"./RouterLink-BseUmFNE.js";import"./MoreHoriz-C32XwXmh.js";import"./index.esm-_iGQBVP7.js";import"./Tooltip--He67NIp.js";import"./createStyled-CKX6XILu.js";import"./FormControlLabel-cg8IhE3Y.js";import"./Tabs-iXjsQtoR.js";import"./useQueryParam-DYoKtSME.js";import"./date-wXVMu8CQ.js";import"./Link-BKpCVJ4r.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new o.Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="5cab8b30-d408-4cc5-95b6-3e36a0ee675a",o._sentryDebugIdIdentifier="sentry-dbid-5cab8b30-d408-4cc5-95b6-3e36a0ee675a")}catch{}})();const G=()=>{const o=p(),{workspace:s}=l(),{data:n=[],isLoading:r}=D(),{mutate:i}=f(),{mutate:m}=C(),{mutate:d}=y();return a.jsx(u,{children:a.jsx(g,{data:n,columns:w,getRowId:e=>`${e.id}`,state:{isLoading:r},onCreate:e=>i(e,{onSuccess:({createCompany:t})=>o(`/${s}/home/companies/${(t==null?void 0:t.id)||""}`)}),onUpdate:e=>m(e),onDelete:e=>d(e),renderTopToolbarCustomActions:({table:e})=>a.jsx(c,{onClick:()=>e.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(j,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:e,table:t})=>a.jsx(b,{table:t,row:e,titles:{creating:"Lägg till bolag",editing:"Redigera bolag"},FormComponent:x})})})};export{G as default};
//# sourceMappingURL=CompaniesPage-BAEcdRq9.js.map
