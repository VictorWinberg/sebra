import{j as a,g as n,L as r}from"./index-C68uxFow.js";import{D as o,a as i,b as l,M as c}from"./useSnackbar-IbPMwxUD.js";import{D as j}from"./DataTable-CB_g2NCl.js";import{u as C,a as A,b as D,A as m}from"./useAssignmentsMutations-DBpORL4t.js";const E=({assignments:d,isLoading:g,defaultValues:u})=>{const{mutate:x}=C(),{mutate:h}=A(),{mutate:p}=D();return a.jsx(j,{data:d,getRowId:e=>`${e.assignmentId}`,state:{isLoading:g},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:t})=>a.jsx(n,{component:r,to:`/dashboard/assignments/${t.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.responsiblePerson)==null?void 0:t.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(n,{component:r,to:`/dashboard/contacts/${t.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.externalContactPerson)==null?void 0:t.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(n,{component:r,to:`/dashboard/contacts/${t.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],renderCreateRowDialogContent:({row:e,table:t})=>a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"h4",color:"primary",children:"Nytt uppdrag"}),a.jsx(i,{children:a.jsx(m,{sx:{mt:1},formProps:{defaultValues:u},onChange:s=>{e._valuesCache=s}})}),a.jsx(l,{children:a.jsx(c,{row:e,table:t,variant:"text"})})]}),renderEditRowDialogContent:({row:e,table:t})=>a.jsxs(a.Fragment,{children:[a.jsx(o,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),a.jsx(i,{children:a.jsx(m,{sx:{mt:1},formProps:{defaultValues:e.original},onChange:s=>{e._valuesCache=s}})}),a.jsx(l,{children:a.jsx(c,{row:e,table:t,variant:"text"})})]}),onCreate:e=>x(e),onUpdate:e=>h(e),onDelete:e=>p(e)})};export{E as A};
