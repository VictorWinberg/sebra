import{j as s,f as l,L as g}from"./index-_FwCeTeu.js";import{D as p,a as d,b as u,M as c}from"./useSnackbar-_bOhQBdU.js";import{D as x,d as A}from"./DataTable-DldLoeRy.js";import{F as f}from"./FlexGrow-Bwm87unR.js";import{u as j,a as h,b as D,A as C}from"./useAssignmentsMutations-D7h6o7dN.js";import{u as T}from"./useAssignmentsQueries-Df9Eo1Tl.js";import{a as v}from"./AssignmentConfig-CUCMRyQM.js";import"./MoreHoriz-hTC6DMvV.js";import"./index.esm-DWPQP-6d.js";import"./Tooltip-DZfKSXwx.js";import"./useQueryParam-Ct9_0DVF.js";import"./useContactsQueries-Fpm1KDTO.js";import"./date-BpXrROqC.js";const y=()=>{const{data:e=[],isLoading:n}=T(),{mutate:a}=j(),{mutate:o}=h(),{mutate:i}=D();return s.jsx(f,{children:s.jsx(x,{data:e,columns:v,getRowId:t=>`${t.assignmentId}`,state:{isLoading:n},onCreate:t=>a(t),onUpdate:t=>o(t),onDelete:t=>i(t),renderTopToolbarCustomActions:()=>s.jsx(l,{component:g,to:"new",variant:"outlined",size:"small",startIcon:s.jsx(A,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:t,table:r})=>s.jsxs(s.Fragment,{children:[s.jsx(p,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),s.jsx(d,{children:s.jsx(C,{sx:{mt:1},formProps:{values:t.original},onChange:m=>{t._valuesCache=m}})}),s.jsx(u,{children:s.jsx(c,{row:t,table:r,variant:"text"})})]})})})};export{y as default};
