import{a as c,c as u,j as a,F as l,p}from"./index-ssZ8y-DW.js";import{D as f,d as g}from"./DataTable-8lp5Srbt.js";import{S as C}from"./SebraDialog-Cz2uBcyd.js";import{u as b,a as x,b as w,C as D}from"./useContactsMutations-RExeqN2d.js";import{c as k}from"./ContactConfig-B7uMnQ9o.js";import{u as y}from"./useContactsQueries-rxEBOB2l.js";import"./RouterLink-6jjoqzes.js";import"./MoreHoriz-6dRdcBb3.js";import"./index.esm-B2xxYIYd.js";import"./Tooltip-CUHKe2kn.js";import"./createStyled-BS9Uhuqz.js";import"./FormControlLabel-DgC0nCnz.js";import"./Tabs-DY23K9N6.js";import"./useQueryParam-DN9JKz9J.js";import"./useCompaniesQueries-CffwAjJr.js";import"./date-xfI2nk5D.js";import"./Link-BeLhl1AT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="478ab063-df89-43ce-8d86-0031de7e14cf",e._sentryDebugIdIdentifier="sentry-dbid-478ab063-df89-43ce-8d86-0031de7e14cf")}catch{}})();const G=()=>{const e=c(),{workspace:s}=u(),{data:n=[],isLoading:r}=y(),{mutate:i}=b(),{mutate:d}=x(),{mutate:m}=w();return a.jsx(l,{children:a.jsx(f,{data:n,columns:k,getRowId:t=>`${t.id}`,state:{isLoading:r},onCreate:t=>i(t,{onSuccess:({createContact:o})=>e(`/${s}/home/contacts/${(o==null?void 0:o.id)||""}`)}),onUpdate:t=>d(t),onDelete:t=>m(t),renderTopToolbarCustomActions:({table:t})=>a.jsx(p,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:o})=>a.jsx(C,{table:o,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:D})})})};export{G as default};
//# sourceMappingURL=ContactsPage-BfvqE_V4.js.map