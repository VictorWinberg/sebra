import{j as o,f as m}from"./index-Ck7X9mQB.js";import{D as l,a as d,b as u,M as p}from"./useSnackbar-DP4Y4pMD.js";import{D as C,d as g}from"./DataTable-DNvItwIO.js";import{F as x}from"./FlexGrow-Buvikwpb.js";import{u as f,a as j,b as h,C as D}from"./useContactsMutations-BCeD-D89.js";import{c as k}from"./ContactConfig-B8OOdf0Z.js";import{u as R}from"./useContactsQueries-C16oE9uJ.js";import"./MoreHoriz-CM4b9kbz.js";import"./index.esm-CymWYf1D.js";import"./Tooltip-DOAe3_K6.js";import"./useQueryParam-CFpfVf_a.js";import"./useCompaniesQueries-9cNhdPpr.js";import"./date-BEBTfK6e.js";const U=()=>{const{data:e=[],isLoading:n}=R(),{mutate:s}=f(),{mutate:r}=j(),{mutate:i}=h();return o.jsx(x,{children:o.jsx(C,{data:e,columns:k,getRowId:t=>`${t.contactId}`,state:{isLoading:n},onCreate:t=>s(t),onUpdate:t=>r(t),onDelete:t=>i(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(m,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:a})=>o.jsxs(o.Fragment,{children:[o.jsx(l,{variant:"h4",color:"primary",children:a.getState().creatingRow?"Lägg till kontakt":"Redigera kontakt"}),o.jsx(d,{children:o.jsx(D,{sx:{mt:1},formProps:{values:t.original},onChange:c=>{t._valuesCache=c}})}),o.jsx(u,{children:o.jsx(p,{row:t,table:a,variant:"text"})})]})})})};export{U as default};
