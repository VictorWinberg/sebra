import{j as t,g as n,L as s,b as g,d as u,C as p,A as x,x as h}from"./index-BrEZVVZU.js";import{D as A,a as j,b as C,M as y}from"./useSnackbar-CHVXOGIw.js";import{D as b}from"./DataTable-BTpUrcky.js";import{u as f,a as D,b as v,A as E}from"./useAssignmentsMutations-DHrnwjK_.js";const R=({assignments:i,isLoading:o,defaultValues:r})=>{const{mutate:l}=f(),{mutate:c}=D(),{mutate:m}=v();return t.jsx(b,{data:i,getRowId:e=>`${e.assignmentId}`,state:{isLoading:o},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:`/home/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorKey:"responsibleContacts",header:"Ansvariga",enableEditing:!1,Cell:({cell:e})=>t.jsx(g,{disablePadding:!0,children:e.getValue().map(a=>t.jsx(u,{sx:{py:.25},disableGutters:!0,children:t.jsx(p,{component:s,variant:"outlined",avatar:t.jsx(x,{...h(a.contactName)}),label:a.contactName,to:`/home/contacts/${a.contactId}`,clickable:!0,size:"small"})},a.contactId))})},{accessorFn:e=>{var a;return(a=e.externalContact)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:`/home/contacts/${a.original.externalContactId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolag",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(n,{component:s,to:`/home/companies/${a.original.companyId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],renderEditRowDialogContent:({row:e,table:a})=>t.jsxs(t.Fragment,{children:[t.jsx(A,{variant:"h4",color:"primary",children:a.getState().creatingRow?"Ny referens":"Redigera referens"}),t.jsx(j,{children:t.jsx(E,{sx:{mt:1},formProps:{defaultValues:{...r,...e.original}},onChange:d=>{e._valuesCache=d}})}),t.jsx(C,{children:t.jsx(y,{row:e,table:a,variant:"text"})})]}),onCreate:e=>l(e),onUpdate:e=>c(e),onDelete:e=>m(e)})};export{R as A};
