import{j as t,f as d,L as n,g as r,h as g,t as u}from"./index-DIjJlU8B.js";import{D as p,a as x,b as h,c as f,M as A}from"./useSnackbar-8h4qsJ3q.js";import{F as j}from"./FlexGrow-D1UPVIt9.js";import{u as C,a as b,b as D,A as y}from"./useAssignmentsMutations-VX3EJnbJ.js";import{u as E}from"./useAssignmentsQueries-C8xpH4Es.js";import{A as F}from"./Add-Cf2Udwio.js";import"./MoreHoriz-CzMjGzXO.js";import"./index.esm-DL0Ar7-j.js";import"./Tooltip-BrI89ati.js";import"./useContactsQueries-BmXUZ0tJ.js";const V=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/assignments/${a.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.responsiblePerson)==null?void 0:a.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/contacts/${a.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var a;return(a=e.externalContactPerson)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>t.jsx(r,{component:n,to:`/dashboard/contacts/${a.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorFn:e=>g.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>u(e.getValue()).format("YYYY-MM-DD HH:mm")}],Y=()=>{const{data:e=[],isLoading:a}=E(),{mutate:o}=C(),{mutate:i}=b(),{mutate:l}=D();return t.jsx(j,{children:t.jsx(p,{data:e,columns:V,getRowId:s=>`${s.assignmentId}`,state:{isLoading:a},onCreate:s=>o(s),onUpdate:s=>i(s),onDelete:s=>l(s),renderTopToolbarCustomActions:()=>t.jsx(d,{component:n,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(F,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:s,table:c})=>t.jsxs(t.Fragment,{children:[t.jsx(x,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),t.jsx(h,{children:t.jsx(y,{sx:{mt:1},formProps:{values:s.original},onChange:m=>{s._valuesCache=m}})}),t.jsx(f,{children:t.jsx(A,{row:s,table:c,variant:"text"})})]})})})};export{Y as default};
