import{j as e,f as m}from"./index-DyjmdRSC.js";import{D as p,d as g}from"./DataTable-ClRgWCj0.js";import{F as l}from"./FlexGrow-DM6v9KXX.js";import{S as u}from"./SebraDialog-BePZJB7R.js";import{u as d,a as c,b as f,A as x}from"./useAssignmentsMutations-DlC8p0NS.js";import{a as A}from"./AssignmentConfig-eQb7TdBW.js";import{u as C}from"./useAssignmentsQueries-CRD4cmFv.js";import"./useSnackbar-BAxIYe6h.js";import"./MoreHoriz-DCo1d8Tz.js";import"./index.esm-CwNn21lM.js";import"./Tooltip-Cb2aPBE0.js";import"./useQueryParam-CIvS_JgY.js";import"./useCompaniesQueries-CKTQVe94.js";import"./useContactsQueries-DP1-8nuh.js";import"./date-B17jE2Ke.js";const z=()=>{const{data:s=[],isLoading:o}=C(),{mutate:n}=d(),{mutate:a}=c(),{mutate:r}=f();return e.jsx(l,{children:e.jsx(p,{data:s,columns:A,getRowId:t=>`${t.assignmentId}`,state:{isLoading:o},onCreate:t=>n(t),onUpdate:t=>a(t),onDelete:t=>r(t),renderTopToolbarCustomActions:({table:t})=>e.jsx(m,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:e.jsx(g,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({table:t,row:i})=>e.jsx(u,{FormComponent:x,table:t,row:i,titles:{creating:"Lägg till uppdrag",editing:"Redigera uppdrag"}})})})};export{z as default};
