import{j as a,g as m,L as i,h as c,f as d}from"./index-Cvw3wisO.js";import{D as l,d as u}from"./DataTable-BaHqq9z9.js";import{F as p}from"./FlexGrow-BrxNk0Kf.js";import{S as g}from"./SebraDialog-DEdw4aEp.js";import{a as f,b as D,e as x,D as j}from"./DocumentForm-DAXBgHXD.js";import{f as C,t as h}from"./date-BBO4oRSY.js";import"./useSnackbar-BI1N9Jr5.js";import"./MoreHoriz-ya-3STFd.js";import"./index.esm-BPmSvAkZ.js";import"./Tooltip-zDRHAwNy.js";import"./useQueryParam-BDpf-YJB.js";const k=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:o,row:t})=>a.jsx(m,{component:i,to:`/documents/${t.original.documentId}`,children:o.getValue()})},{accessorKey:"content.type",accessorFn:o=>{var t;return(t=o.content)==null?void 0:t.type},header:"Filtyp"},{accessorKey:"content.lastModified",accessorFn:o=>{var t;return c((t=o.content)==null?void 0:t.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:o})=>C(h(o.getValue()))}],K=()=>{const{data:o=[],isLoading:t}=f(),{mutate:n}=D(),{mutate:s}=x();if(!t)return a.jsx(p,{children:a.jsx(l,{data:o,columns:k,getRowId:e=>`${e.documentId}`,state:{isLoading:t},onCreate:e=>n(e),onUpdate:e=>n(e),onDelete:e=>s(e),renderTopToolbarCustomActions:({table:e})=>a.jsx(d,{onClick:()=>e.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(u,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:e,table:r})=>a.jsx(g,{table:r,row:e,titles:{creating:"Lägg till dokument",editing:"Redigera dokument"},FormComponent:j})})})};export{K as default};
