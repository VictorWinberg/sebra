import{j as t,f as d,L as n,g as r}from"./index-CnofuuMk.js";import{D as g,a as p,b as u,c as x,M as h}from"./DataTable-BW0Ybe4e.js";import{F as f}from"./FlexGrow-BsIE1EFg.js";import{u as A,a as j,b as C,A as b}from"./useAssignmentsMutations-DKF5mQ-5.js";import{u as D}from"./useAssignmentsQueries-tjKB_HFH.js";import{A as y}from"./Add-D9I22vIB.js";import"./MoreHoriz-C3CqHNbU.js";import"./VisibilityOff-DwJmS1gM.js";import"./Tooltip-DdqpjyQV.js";import"./useSnackbar--0T07_v2.js";import"./index.esm-C1umqZbi.js";import"./useContactsQueries-DAhilb0p.js";const E=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.responsiblePerson)==null?void 0:a.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/contacts/${a.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.externalContactPerson)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/contacts/${a.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorFn:e=>new Date(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>e.getValue().toLocaleDateString("sv-SE")}],N=()=>{const{data:e=[],isLoading:a}=D(),{mutate:o}=A(),{mutate:i}=j(),{mutate:l}=C();return t.jsx(f,{children:t.jsx(g,{data:e,columns:E,getRowId:s=>`${s.assignmentId}`,state:{isLoading:a},onCreate:s=>o(s),onUpdate:s=>i(s),onDelete:s=>l(s),renderTopToolbarCustomActions:()=>t.jsx(d,{component:n,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(y,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:s,table:c})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),t.jsx(u,{children:t.jsx(b,{sx:{mt:1},formProps:{values:s.original},onChange:m=>{s._valuesCache=m}})}),t.jsx(x,{children:t.jsx(h,{row:s,table:c,variant:"text"})})]})})})};export{N as default};
