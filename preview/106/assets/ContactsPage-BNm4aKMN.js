import{g as c,j as o,F as l,h as u}from"./index-B5Wn1pV6.js";import{D as p,d}from"./DataTable-CHC-0lOI.js";import{S as C}from"./SebraDialog-DMHdke9R.js";import{u as g,a as x,b as f,C as j}from"./useContactsMutations-DWwD5Kct.js";import{c as k}from"./ContactConfig-DwLkZR6X.js";import{u as D}from"./useContactsQueries-D3qhIykf.js";import"./useSnackbar-DKcC1YFu.js";import"./MoreHoriz-1-Hni6Yv.js";import"./index.esm-DVlgypon.js";import"./Tooltip-BOs_SEaO.js";import"./Tabs-CVL9e8Ya.js";import"./useQueryParam-B9tnBKyX.js";import"./useCompaniesQueries-Bc9ksEnf.js";import"./date-CTTbm3Z8.js";const A=()=>{const e=c(),{data:n=[],isLoading:s}=D(),{mutate:r}=g(),{mutate:i}=x(),{mutate:m}=f();return o.jsx(l,{children:o.jsx(p,{data:n,columns:k,getRowId:t=>`${t.id}`,state:{isLoading:s},onCreate:t=>r(t,{onSuccess:a=>e(`/home/contacts/${a.id}`)}),onUpdate:t=>i(t),onDelete:t=>m(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(u,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(d,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:a})=>o.jsx(C,{table:a,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:j})})})};export{A as default};
