import{j as e,f as l,L as s,g as c,i as d}from"./index-4PX0GDns.js";import{D as u,a as p,b as g,M as x}from"./useSnackbar-FSlAWeyv.js";import{D}from"./DataTable-4ALA-uk9.js";import{F as f}from"./FlexGrow-DAzKFTpd.js";import{f as j,t as h}from"./date-BYZ3X9q4.js";import{u as C,a as T,e as v,D as y}from"./DocumentForm-CjAG4Zok.js";import{A as F}from"./Add-C10UJd_O.js";import"./MoreHoriz-Bdq9Cw3w.js";import"./index.esm-C8xDLONX.js";import"./Tooltip-DombpkJ0.js";const L=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:o,row:a})=>e.jsx(c,{component:s,to:`/documents/${a.original.documentId}`,children:o.getValue()})},{accessorKey:"content.type",header:"Filtyp"},{accessorFn:o=>d(o.content.lastModified),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:o})=>j(h(o.getValue()))}],B=()=>{const{data:o=[],isLoading:a}=C(),{mutate:n}=T(),{mutate:r}=v();if(!a)return e.jsx(f,{children:e.jsx(D,{data:o,columns:L,getRowId:t=>`${t.documentId}`,state:{isLoading:a},onCreate:t=>n(t),onUpdate:t=>n(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>e.jsx(l,{component:s,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(F,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:i})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(p,{children:e.jsx(y,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(g,{children:e.jsx(x,{row:t,table:i,variant:"text"})})]})})})};export{B as default};
