import{j as t,f as l}from"./index-Cb92esh7.js";import{D as p,a as c,b as d,M as u}from"./useSnackbar-BO7AuKFX.js";import{D as C}from"./DataTable-DFMlW2_u.js";import{F as x}from"./FlexGrow-DDYQqbDr.js";import{u as g,a as f,b as j,C as y}from"./useCompaniesMutations-BLuYq4Z4.js";import{c as h}from"./CompanyConfig-Bgtk4zTr.js";import{u as D}from"./useCompaniesQueries-wbvMxk55.js";import{A as b}from"./Add-CB-0ezXD.js";import"./MoreHoriz-DeyYpqij.js";import"./index.esm-CeMCaMQX.js";import"./Tooltip-CURAw7_K.js";import"./useQueryParam-DfTgo7W8.js";import"./date-lWOLOvqo.js";const _=()=>{const{data:a=[],isLoading:e}=D(),{mutate:s}=g(),{mutate:n}=f(),{mutate:r}=j();return t.jsx(x,{children:t.jsx(C,{data:a,columns:h,getRowId:o=>`${o.companyId}`,state:{isLoading:e},onCreate:o=>s(o),onUpdate:o=>n(o),onDelete:o=>r(o),renderTopToolbarCustomActions:({table:o})=>t.jsx(l,{onClick:()=>o.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:t.jsx(b,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:o,table:i})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"h4",color:"primary",children:"Redigera bolag"}),t.jsx(c,{children:t.jsx(y,{sx:{mt:1},formProps:{values:o.original},onChange:m=>{o._valuesCache=m}})}),t.jsx(d,{children:t.jsx(u,{row:o,table:i,variant:"text"})})]})})})};export{_ as default};
