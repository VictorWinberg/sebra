import{j as e,f as d,L as n,g as c,h as u,t as p}from"./index-BD7MpHq_.js";import{D as g,a as x,b as f,c as h,M as j}from"./DataTable-Bc0BIP-8.js";import{u as D,a as F,b as C,c as v,D as T}from"./DocumentForm-B6uAsihy.js";import{F as y}from"./FlexGrow-BJyNi9i9.js";import{A as L}from"./Add-CJzpuGHC.js";import"./MoreHoriz-BoBBlvpX.js";import"./VisibilityOff-BrTjNyNI.js";import"./Tooltip-CKjnARdY.js";import"./Autocomplete-Dx1H6lqQ.js";import"./useSnackbar-Ck29ETFC.js";import"./index.esm-CILOGyyi.js";const b=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:a,row:o})=>e.jsx(c,{component:n,to:`/documents/${o.original.documentId}`,children:a.getValue()})},{accessorKey:"content.type",header:"Filtyp"},{accessorFn:a=>u(a.content.lastModified),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>p(a.getValue()).format("YYYY-MM-DD HH:mm")}],H=()=>{const{data:a=[],isLoading:o}=D(),{mutate:s}=F(),{mutate:i}=C(),{mutate:r}=v();if(!o)return e.jsx(y,{children:e.jsx(g,{data:a,columns:b,getRowId:t=>`${t.documentId}`,state:{isLoading:o},onCreate:t=>s(t),onUpdate:t=>i(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>e.jsx(d,{component:n,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(L,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:l})=>e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(f,{children:e.jsx(T,{sx:{mt:1},formProps:{values:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(h,{children:e.jsx(j,{row:t,table:l,variant:"text"})})]})})})};export{H as default};