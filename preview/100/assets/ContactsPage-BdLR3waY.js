import{j as o,f as m}from"./index-Cvw3wisO.js";import{D as c,d as l}from"./DataTable-BaHqq9z9.js";import{F as p}from"./FlexGrow-BrxNk0Kf.js";import{S as u}from"./SebraDialog-DEdw4aEp.js";import{u as d,a as C,b as g,C as f}from"./useContactsMutations-DgcpgWaG.js";import{c as x}from"./ContactConfig-Dz0b4CeG.js";import{u as j}from"./useContactsQueries-ZbRfS0Tr.js";import"./useSnackbar-BI1N9Jr5.js";import"./MoreHoriz-ya-3STFd.js";import"./index.esm-BPmSvAkZ.js";import"./Tooltip-zDRHAwNy.js";import"./useQueryParam-BDpf-YJB.js";import"./useCompaniesQueries-C7bD1CZ_.js";import"./date-BBO4oRSY.js";const z=()=>{const{data:a=[],isLoading:e}=j(),{mutate:n}=d(),{mutate:r}=C(),{mutate:s}=g();return o.jsx(p,{children:o.jsx(c,{data:a,columns:x,getRowId:t=>`${t.contactId}`,state:{isLoading:e},onCreate:t=>n(t),onUpdate:t=>r(t),onDelete:t=>s(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(m,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:i})=>o.jsx(u,{table:i,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:f})})})};export{z as default};
