import{a as c,c as u,j as a,F as l,p}from"./index-Wz3Ywbj5.js";import{D as f,d as g}from"./DataTable-Di5JIvIf.js";import{S as C}from"./SebraDialog-BBU3YGz0.js";import{u as b,a as x,b as w,C as D}from"./useContactsMutations-D4jL5q7s.js";import{c as k}from"./ContactConfig-BlTKqB2V.js";import{u as y}from"./useContactsQueries-D5WnVdse.js";import"./RouterLink-BseUmFNE.js";import"./MoreHoriz-C32XwXmh.js";import"./index.esm-_iGQBVP7.js";import"./Tooltip--He67NIp.js";import"./createStyled-CKX6XILu.js";import"./FormControlLabel-cg8IhE3Y.js";import"./Tabs-iXjsQtoR.js";import"./useQueryParam-DYoKtSME.js";import"./useCompaniesQueries-CvPfiiuR.js";import"./date-wXVMu8CQ.js";import"./Link-BKpCVJ4r.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="478ab063-df89-43ce-8d86-0031de7e14cf",e._sentryDebugIdIdentifier="sentry-dbid-478ab063-df89-43ce-8d86-0031de7e14cf")}catch{}})();const G=()=>{const e=c(),{workspace:s}=u(),{data:n=[],isLoading:r}=y(),{mutate:i}=b(),{mutate:d}=x(),{mutate:m}=w();return a.jsx(l,{children:a.jsx(f,{data:n,columns:k,getRowId:t=>`${t.id}`,state:{isLoading:r},onCreate:t=>i(t,{onSuccess:({createContact:o})=>e(`/${s}/home/contacts/${(o==null?void 0:o.id)||""}`)}),onUpdate:t=>d(t),onDelete:t=>m(t),renderTopToolbarCustomActions:({table:t})=>a.jsx(p,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:o})=>a.jsx(C,{table:o,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:D})})})};export{G as default};
//# sourceMappingURL=ContactsPage-BLfxEQxp.js.map
