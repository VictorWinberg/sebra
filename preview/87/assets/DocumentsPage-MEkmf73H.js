import{j as e,g as l,L as s,h as c,f as d}from"./index-DMusdSGo.js";import{D as u,a as p,b as g,M as x}from"./useSnackbar-DG0jVQLI.js";import{D,d as f}from"./DataTable-D_iph9cT.js";import{F as h}from"./FlexGrow-JVqsbzqm.js";import{u as j,a as C,e as T,D as v}from"./DocumentForm-CrVrncCZ.js";import{f as y,t as F}from"./date-DVhx8D_t.js";import"./MoreHoriz-B9cmCAlx.js";import"./index.esm-BtgLAIRf.js";import"./Tooltip-D0GhOfaB.js";import"./useQueryParam-CJjyunjj.js";const L=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:o,row:a})=>e.jsx(l,{component:s,to:`/documents/${a.original.documentId}`,children:o.getValue()})},{accessorKey:"content.type",header:"Filtyp"},{accessorFn:o=>c(o.content.lastModified),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:o})=>y(F(o.getValue()))}],w=()=>{const{data:o=[],isLoading:a}=j(),{mutate:n}=C(),{mutate:r}=T();if(!a)return e.jsx(h,{children:e.jsx(D,{data:o,columns:L,getRowId:t=>`${t.documentId}`,state:{isLoading:a},onCreate:t=>n(t),onUpdate:t=>n(t),onDelete:t=>r(t),renderTopToolbarCustomActions:()=>e.jsx(d,{component:s,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(f,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:i})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(p,{children:e.jsx(v,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:m=>{t._valuesCache=m}})}),e.jsx(g,{children:e.jsx(x,{row:t,table:i,variant:"text"})})]})})})};export{w as default};
