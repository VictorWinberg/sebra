import{j as e,f as l,L as s,g as c,i as d,t as u}from"./index-B4iwOTaG.js";import{D as p,a as g,b as x,c as D,M as f}from"./useSnackbar-D4nO6t3o.js";import{F as j}from"./FlexGrow-BDpc5qe1.js";import{u as h,b as C,e as T,D as v}from"./useDocumentsMutations-OmGNnDrM.js";import{A as y}from"./Add-Ce07Y-05.js";import"./MoreHoriz-BE7FBhZw.js";import"./index.esm-8wuYRmW0.js";import"./Tooltip-B7N1wTwP.js";const F=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:o,row:a})=>e.jsx(c,{component:s,to:`/documents/${a.original.documentId}`,children:o.getValue()})},{accessorKey:"content.type",header:"Filtyp"},{accessorFn:o=>d(o.content.lastModified),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:o})=>u(o.getValue()).format("YYYY-MM-DD HH:mm")}],V=()=>{const{data:o=[],isLoading:a}=h(),{mutate:n}=C(),{mutate:r}=T();if(!a)return e.jsx(j,{children:e.jsx(p,{data:o,columns:F,getRowId:t=>`${t.documentId}`,state:{isLoading:a},onCreate:t=>n(t),onUpdate:t=>n(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>e.jsx(l,{component:s,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(y,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:i})=>e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(x,{children:e.jsx(v,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(D,{children:e.jsx(f,{row:t,table:i,variant:"text"})})]})})})};export{V as default};