import{j as s,f as g}from"./index-CCoyQ5Fl.js";import{D as l,a as p,b as d,M as u}from"./useSnackbar-DtZAqGvd.js";import{D as c,d as x}from"./DataTable-Bs2bmu0K.js";import{F as A}from"./FlexGrow-C7TTiM9g.js";import{u as f,a as j,b as C,A as h}from"./useAssignmentsMutations-DmbYmdE4.js";import{a as D}from"./AssignmentConfig-DVchClOx.js";import{u as R}from"./useAssignmentsQueries-CjitgZPD.js";import"./MoreHoriz-B24txcgq.js";import"./index.esm-DNhKaJpn.js";import"./Tooltip-DD5YKbpU.js";import"./useQueryParam-C_rbOO5m.js";import"./useCompaniesQueries-BP6wd0J5.js";import"./useContactsQueries-BVCqg1FD.js";import"./date-DaqtDYn8.js";const y=()=>{const{data:a=[],isLoading:n}=R(),{mutate:o}=f(),{mutate:r}=j(),{mutate:i}=C();return s.jsx(A,{children:s.jsx(c,{data:a,columns:D,getRowId:t=>`${t.assignmentId}`,state:{isLoading:n},onCreate:t=>o(t),onUpdate:t=>r(t),onDelete:t=>i(t),renderTopToolbarCustomActions:({table:t})=>s.jsx(g,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:s.jsx(x,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:t,table:e})=>s.jsxs(s.Fragment,{children:[s.jsx(l,{variant:"h4",color:"primary",children:e.getState().creatingRow?"Lägg till uppdrag":"Redigera uppdrag"}),s.jsx(p,{children:s.jsx(h,{sx:{mt:1},formProps:{values:t.original},onChange:m=>{t._valuesCache=m}})}),s.jsx(d,{children:s.jsx(u,{row:t,table:e,variant:"text"})})]})})})};export{y as default};