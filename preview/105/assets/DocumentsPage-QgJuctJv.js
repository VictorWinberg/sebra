import{j as n,L as d,i,F as c,h as m}from"./index-8MMrl1Jf.js";import{D as l,d as u}from"./DataTable-B5rnFp63.js";import{S as f}from"./SebraDialog-C8iubU71.js";import{a as p,b as g,e as D,D as y}from"./DocumentForm-s54ba3XB.js";import{f as b,t as x}from"./date-B4NEKxLR.js";import{L as j}from"./Link-Divzjkhw.js";import"./SebraForm-BJUg38Rw.js";import"./MoreHoriz-BzmcflgI.js";import"./index.esm-qNI6yR3U.js";import"./Tooltip-C5_8lGvr.js";import"./Tabs-DpcHpKks.js";import"./useQueryParam-DGTIKbTS.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1ef839a0-cd2c-45d4-af51-ac59b74d0d23",e._sentryDebugIdIdentifier="sentry-dbid-1ef839a0-cd2c-45d4-af51-ac59b74d0d23")}catch{}})();const w=[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:e,row:t})=>n.jsx(j,{component:d,to:`/documents/${t.original.documentId}`,children:e.getValue()})},{accessorKey:"content.type",accessorFn:e=>{var t;return(t=e.content)==null?void 0:t.type},header:"Filtyp"},{accessorKey:"content.lastModified",accessorFn:e=>{var t;return i((t=e.content)==null?void 0:t.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>b(x(e.getValue()))}],K=()=>{const{data:e=[],isLoading:t}=p(),{mutate:a}=g(),{mutate:s}=D();if(!t)return n.jsx(c,{children:n.jsx(l,{data:e,columns:w,getRowId:o=>`${o.documentId}`,state:{isLoading:t},onCreate:o=>a(o),onUpdate:o=>a(o),onDelete:o=>s(o),renderTopToolbarCustomActions:({table:o})=>n.jsx(m,{onClick:()=>o.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:n.jsx(u,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:o,table:r})=>n.jsx(f,{table:r,row:o,titles:{creating:"Lägg till dokument",editing:"Redigera dokument"},FormComponent:y})})})};export{K as default};
//# sourceMappingURL=DocumentsPage-QgJuctJv.js.map
