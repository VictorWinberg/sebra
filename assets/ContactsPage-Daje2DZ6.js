import{j as o,f as m}from"./index-BL1e2KlY.js";import{D as c,d as l}from"./DataTable-DVJgmJ5T.js";import{F as p}from"./FlexGrow-Dg5b9XDE.js";import{S as u}from"./SebraDialog-B78GFirD.js";import{u as d,a as C,b as g,C as f}from"./useContactsMutations-DuP7qMXT.js";import{c as x}from"./ContactConfig-BE9gBu-O.js";import{u as j}from"./useContactsQueries-Bs1lhRji.js";import"./useSnackbar-BDp2hnMN.js";import"./MoreHoriz-DiGy_mT8.js";import"./index.esm-9-f3ubhn.js";import"./Tooltip-CnuzcUnQ.js";import"./useQueryParam-BQvW-pWR.js";import"./useCompaniesQueries-DZiIFdEt.js";import"./date-B0M1n4ue.js";const z=()=>{const{data:a=[],isLoading:e}=j(),{mutate:n}=d(),{mutate:r}=C(),{mutate:s}=g();return o.jsx(p,{children:o.jsx(c,{data:a,columns:x,getRowId:t=>`${t.contactId}`,state:{isLoading:e},onCreate:t=>n(t),onUpdate:t=>r(t),onDelete:t=>s(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(m,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:i})=>o.jsx(u,{table:i,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:f})})})};export{z as default};
