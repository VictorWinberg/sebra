import{j as s,f as c,L as l}from"./index-BXBLyoLi.js";import{D as g,a as u,b as d,c as p,M as x}from"./DataTable-ixnOJ36z.js";import{F as A}from"./FlexGrow-5p6LsdDk.js";import{f as h,u as y,a as f,b as j,A as D}from"./useAssignmentsMutations-CRg-ZW2T.js";import{u as C}from"./Autocomplete-DzWT55fa.js";import{A as K}from"./Add-YPBcNP0Z.js";import"./MoreHoriz-Bi2JfIYg.js";import"./VisibilityOff-Lqoh0zLj.js";import"./Tooltip-CAgJatVG.js";import"./useSnackbar-DS5EE-lN.js";import"./index.esm-D_bu7O5J.js";import"./useContactsQueries-DK6NcWqa.js";import"./contactsApi-DlKDKdVz.js";const b=()=>C({queryKey:["assignments"],queryFn:h}),v=[{accessorKey:"assignmentName",header:"Uppdragsnamn"},{accessorKey:"responsibleCompanyName",header:"Bolag"},{accessorKey:"responsiblePersonEmail",header:"Email"},{accessorKey:"responsiblePersonName",header:"Ansvarig"},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:t})=>t.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],M=()=>{const{data:t=[],isLoading:n}=b(),{mutate:a}=y(),{mutate:r}=f(),{mutate:o}=j();return s.jsx(A,{children:s.jsx(g,{data:t,columns:v,getRowId:e=>`${e.assignmentId}`,state:{isLoading:n},onCreate:e=>a(e),onUpdate:e=>r(e),onDelete:e=>o(e),renderTopToolbarCustomActions:()=>s.jsx(c,{component:l,to:"new",variant:"outlined",size:"small",startIcon:s.jsx(K,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:e,table:i})=>s.jsxs(s.Fragment,{children:[s.jsx(u,{sx:{textAlign:"center"},children:"Redigera uppdrag"}),s.jsx(d,{children:s.jsx(D,{sx:{mt:1},formProps:{values:e.original},onChange:m=>{e._valuesCache=m}})}),s.jsx(p,{children:s.jsx(x,{row:e,table:i,variant:"text"})})]})})})};export{M as default};
