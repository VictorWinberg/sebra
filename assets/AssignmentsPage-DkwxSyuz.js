import{j as a,f as g,L as n,g as r,h as o,i as u,t as p}from"./index-B4iwOTaG.js";import{D as h,a as x,b as f,c as A,M as j}from"./useSnackbar-D4nO6t3o.js";import{F as b}from"./FlexGrow-BDpc5qe1.js";import{u as C,a as D,b as y,A as E}from"./useAssignmentsMutations-DSaKVI6r.js";import{u as F}from"./useAssignmentsQueries-DvEi871z.js";import{A as V}from"./Add-Ce07Y-05.js";import"./MoreHoriz-BE7FBhZw.js";import"./index.esm-8wuYRmW0.js";import"./Tooltip-B7N1wTwP.js";import"./useContactsQueries-CSn0JCgA.js";const v=[{accessorKey:"assignmentName",header:"Uppdragsnamn",Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:`/dashboard/assignments/${t.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.responsiblePerson)==null?void 0:t.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:{pathname:`/dashboard/contacts/${t.original.responsiblePersonId}`,search:`${o({tab:"assignments"})}`},children:e.getValue()})},{accessorFn:e=>{var t;return(t=e.externalContactPerson)==null?void 0:t.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:t})=>a.jsx(r,{component:n,to:{pathname:`/dashboard/contacts/${t.original.externalContactPersonId}`,search:`${o({tab:"assignments"})}`},children:e.getValue()})},{accessorKey:"type",header:"Typ",filterVariant:"multi-select"},{accessorKey:"status",header:"Status",filterVariant:"multi-select"},{accessorKey:"fee",header:"Arvode",filterVariant:"range-slider",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})},{accessorFn:e=>u.utc(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>p(e.getValue()).format("YYYY-MM-DD HH:mm")}],N=()=>{const{data:e=[],isLoading:t}=F(),{mutate:i}=C(),{mutate:l}=D(),{mutate:c}=y();return a.jsx(b,{children:a.jsx(h,{data:e,columns:v,getRowId:s=>`${s.assignmentId}`,state:{isLoading:t},onCreate:s=>i(s),onUpdate:s=>l(s),onDelete:s=>c(s),renderTopToolbarCustomActions:()=>a.jsx(g,{component:n,to:"new",variant:"outlined",size:"small",startIcon:a.jsx(V,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"}),renderEditRowDialogContent:({row:s,table:m})=>a.jsxs(a.Fragment,{children:[a.jsx(x,{variant:"h4",color:"primary",children:"Redigera uppdrag"}),a.jsx(f,{children:a.jsx(E,{sx:{mt:1},formProps:{values:s.original},onChange:d=>{s._valuesCache=d}})}),a.jsx(A,{children:a.jsx(j,{row:s,table:m,variant:"text"})})]})})})};export{N as default};
