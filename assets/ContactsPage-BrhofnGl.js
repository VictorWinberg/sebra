import{j as o,f as c,L as l}from"./index-_FwCeTeu.js";import{D as d,a as p,b as u,M as x}from"./useSnackbar-_bOhQBdU.js";import{D as C,d as g}from"./DataTable-DldLoeRy.js";import{F as f}from"./FlexGrow-Bwm87unR.js";import{u as j,a as h,b as D,C as T}from"./useContactsMutations-PVzDWjR2.js";import{c as k}from"./ContactConfig-CZ3OjKL2.js";import{u as v}from"./useContactsQueries-Fpm1KDTO.js";import"./MoreHoriz-hTC6DMvV.js";import"./index.esm-DWPQP-6d.js";import"./Tooltip-DZfKSXwx.js";import"./useQueryParam-Ct9_0DVF.js";import"./useCompaniesQueries-Dv0FhxLO.js";import"./date-BpXrROqC.js";const y=()=>{const{data:a=[],isLoading:e}=v(),{mutate:n}=j(),{mutate:s}=h(),{mutate:r}=D();return o.jsx(f,{children:o.jsx(C,{data:a,columns:k,getRowId:t=>`${t.contactId}`,state:{isLoading:e},onCreate:t=>n(t),onUpdate:t=>s(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>o.jsx(c,{component:l,to:"new",variant:"outlined",size:"small",startIcon:o.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:i})=>o.jsxs(o.Fragment,{children:[o.jsx(d,{variant:"h4",color:"primary",children:"Redigera kontakt"}),o.jsx(p,{children:o.jsx(T,{sx:{mt:1},formProps:{values:t.original},onChange:m=>{t._valuesCache=m}})}),o.jsx(u,{children:o.jsx(x,{row:t,table:i,variant:"text"})})]})})})};export{y as default};