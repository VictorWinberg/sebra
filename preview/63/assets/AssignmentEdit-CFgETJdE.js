import{i as R,k,r as T,j as e,T as L,B as l,g as M,L as S,h as E,t as $,S as V,f as r,l as B}from"./index-DIjJlU8B.js";import{t as N,D as P,a as u,b as g,c as p,M as x,d as Y}from"./useSnackbar-8h4qsJ3q.js";import{u as z,a as _,b as H,c as U,d as G,D as h}from"./useDocumentsMutations-CH_Ylf1a.js";import{C as K}from"./ContentTabs-BKhOSRb-.js";import{F as q}from"./FlexGrow-D1UPVIt9.js";import{u as w,a as J,b as O,A as Q}from"./useAssignmentsMutations-VX3EJnbJ.js";import{a as W}from"./useAssignmentsQueries-C8xpH4Es.js";import"./MoreHoriz-CzMjGzXO.js";import"./index.esm-DL0Ar7-j.js";import"./Tooltip-BrI89ati.js";import"./useContactsQueries-BmXUZ0tJ.js";const me=()=>{const i=R(),a=k(),{data:s,isLoading:j}=W(i.id==="new"?void 0:Number(i.id)),{mutate:f}=w(),{mutate:y}=J(),{mutate:D}=O(),{data:c=[],isLoading:b}=z(),{data:m=[],isLoading:C}=_({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),v=T.useMemo(()=>{const t=N(c,"documentId");return m.map(n=>({...n,...t.get(n.documentId)}))},[c,m]),{mutate:d}=H(),{mutate:I}=U(),{mutate:A}=G(),F=t=>{s?y(t):f(t,{onSuccess:n=>a(`/dashboard/assignments/${n.assignmentId}`)})};if(!j)return e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"}),e.jsx(l,{sx:{my:1}}),e.jsxs(Q,{formProps:{values:s},onSubmit:F,children:[e.jsx(l,{sx:{my:1}}),s&&e.jsx(q,{children:e.jsx(K,{tabs:[{label:"Interaktioner",content:e.jsx(e.Fragment,{children:"Interaktioner..."})},{label:"Dokument",content:e.jsx(P,{data:v,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b||C},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:t,row:n})=>e.jsx(M,{component:S,to:`/documents/${n.original.documentId}`,children:t.getValue()})},{accessorFn:t=>{var n;return(n=t.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:t=>{var n;return E((n=t.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>$(t.getValue()).format("YYYY-MM-DD HH:mm")}],renderCreateRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Nytt dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},formProps:{defaultValues:{entityType:"assignment",entityId:s.assignmentId}},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:n})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera dokument"}),e.jsx(g,{children:e.jsx(h,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:o=>{t._valuesCache=o}})}),e.jsx(p,{children:e.jsx(x,{row:t,table:n,variant:"text"})})]}),onCreate:t=>d(t,{onSuccess:n=>I({...t,documentId:n})}),onUpdate:t=>d(t),onDelete:t=>A(t)})},{label:"Intressenter",content:e.jsx(e.Fragment,{children:"Intressenter..."})},{label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}],selected:1})}),e.jsxs(V,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(Y,{onClick:()=>D(s,{onSuccess:()=>a("..")}),children:t=>e.jsx(r,{size:"large",variant:"outlined",color:"error",...B(t),children:"Ta bort"})}),e.jsx(r,{size:"large",variant:"outlined",color:"primary",onClick:()=>a(-1),children:"Avbryt"}),e.jsx(r,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{me as default};
