import{j as a,l as d,F as m,p as u}from"./index-Bpl57a60.js";import{D as l,d as c}from"./DataTable-B0qKfcnc.js";import{S as p}from"./SebraDialog-DbrwZhP6.js";import{e as f,a as g,b as D,f as b,D as y}from"./DocumentForm-CY0BxUQw.js";import{R as x}from"./RouterLink-zMftiNO1.js";import{f as j,t as w}from"./date-C7zl3WnH.js";import{L as C}from"./Link-BQhPNLYb.js";import"./useQueryParam-CBFit2nS.js";import"./Tooltip-C4nryBZn.js";import"./createStyled-C1gi7E7v.js";import"./index.esm-Dazxvdp2.js";import"./MoreHoriz-BAG-kxDo.js";import"./FormControlLabel-Ck4pZL5A.js";import"./Tabs-BA2ydbop.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="64ea0776-c662-420d-9ad2-90cb2cab8f92",e._sentryDebugIdIdentifier="sentry-dbid-64ea0776-c662-420d-9ad2-90cb2cab8f92")}catch{}})();const k=[{accessorKey:"alt",header:"Dokumentnamn",Cell:({cell:e,row:o})=>a.jsx(C,{component:x,to:`/documents/${o.original.id}`,children:e.getValue()})},{accessorKey:"mimeType",header:"Filtyp",enableEditing:!1},{accessorKey:"updatedAt",accessorFn:e=>d(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>j(w(e.getValue()))}],$=()=>{const{data:e=[],isLoading:o}=f(),{mutate:n}=g(),{mutate:s}=D(),{mutate:r}=b();if(!o)return a.jsx(m,{children:a.jsx(l,{data:e,columns:k,getRowId:t=>`${t.id}`,state:{isLoading:o},onCreate:t=>n(t),onUpdate:t=>s(t),onDelete:t=>r(t),renderTopToolbarCustomActions:({table:t})=>a.jsx(u,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:a.jsx(c,{}),sx:{textTransform:"none"},children:"Lägg till dokument"}),renderEditRowDialogContent:({row:t,table:i})=>a.jsx(p,{table:i,row:t,titles:{creating:"Lägg till dokument",editing:"Redigera dokument"},FormComponent:y})})})};export{$ as default};
//# sourceMappingURL=DocumentsPage-Cqo6SjYD.js.map
