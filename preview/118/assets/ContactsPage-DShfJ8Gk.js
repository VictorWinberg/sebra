import{a as c,c as u,j as a,F as l,p}from"./index-CgpUjrG9.js";import{D as f,d as g}from"./DataTable-BaJPfGfe.js";import{S as C}from"./SebraDialog-C-5ItgT9.js";import{u as b,a as x,b as w,C as D}from"./useContactsMutations-DoCYnIhD.js";import{c as k}from"./ContactConfig-9kHyExB6.js";import{u as y}from"./useContactsQueries-LLFOzWRX.js";import"./RouterLink-DTBKzUyY.js";import"./MoreHoriz-DLdrNQtj.js";import"./index.esm-3Qlq-x1q.js";import"./Tooltip-B7ZbBfpl.js";import"./createStyled-Dj9RVE0-.js";import"./FormControlLabel-CEKOOVTG.js";import"./Tabs-CTVvfy_B.js";import"./useQueryParam-Db1k-I8W.js";import"./useCompaniesQueries-CR4A-X1W.js";import"./date-DiMgja7A.js";import"./Link-Chevvt64.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="478ab063-df89-43ce-8d86-0031de7e14cf",e._sentryDebugIdIdentifier="sentry-dbid-478ab063-df89-43ce-8d86-0031de7e14cf")}catch{}})();const G=()=>{const e=c(),{workspace:s}=u(),{data:n=[],isLoading:r}=y(),{mutate:i}=b(),{mutate:d}=x(),{mutate:m}=w();return a.jsx(l,{children:a.jsx(f,{data:n,columns:k,getRowId:t=>`${t.id}`,state:{isLoading:r},onCreate:t=>i(t,{onSuccess:({createContact:o})=>e(`/${s}/home/contacts/${(o==null?void 0:o.id)||""}`)}),onUpdate:t=>d(t),onDelete:t=>m(t),renderTopToolbarCustomActions:({table:t})=>a.jsx(p,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:o})=>a.jsx(C,{table:o,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:D})})})};export{G as default};
//# sourceMappingURL=ContactsPage-DShfJ8Gk.js.map
