import{j as t,f as i}from"./index-Cvw3wisO.js";import{D as p}from"./DataTable-BaHqq9z9.js";import{F as l}from"./FlexGrow-BrxNk0Kf.js";import{S as d}from"./SebraDialog-DEdw4aEp.js";import{u,a as C,b as c,C as g}from"./useCompaniesMutations-DALKz8NM.js";import{c as f}from"./CompanyConfig-DzUGSy-L.js";import{u as x}from"./useCompaniesQueries-C7bD1CZ_.js";import{A as y}from"./Add-54DmusaH.js";import"./useSnackbar-BI1N9Jr5.js";import"./MoreHoriz-ya-3STFd.js";import"./index.esm-BPmSvAkZ.js";import"./Tooltip-zDRHAwNy.js";import"./useQueryParam-BDpf-YJB.js";import"./date-BBO4oRSY.js";const k=()=>{const{data:a=[],isLoading:e}=x(),{mutate:r}=u(),{mutate:m}=C(),{mutate:n}=c();return t.jsx(l,{children:t.jsx(p,{data:a,columns:f,getRowId:o=>`${o.companyId}`,state:{isLoading:e},onCreate:o=>r(o),onUpdate:o=>m(o),onDelete:o=>n(o),renderTopToolbarCustomActions:({table:o})=>t.jsx(i,{onClick:()=>o.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:t.jsx(y,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:o,table:s})=>t.jsx(d,{table:s,row:o,titles:{creating:"Lägg till bolag",editing:"Redigera bolag"},FormComponent:g})})})};export{k as default};
