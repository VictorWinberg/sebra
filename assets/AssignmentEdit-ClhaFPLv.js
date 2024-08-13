import{r as h,j as t,g as D,L as j,h as b,i as y,k as I,B as C,S as v,f as p,l as L,T}from"./index-CrsItGNb.js";import{t as A,D as R,a as k,b as S,M as F}from"./useSnackbar-Bi9CGwI5.js";import{D as E,a as M}from"./DataTable-DM_ryVCp.js";import{f as x,t as B}from"./date-TrUW26PT.js";import{u as P,a as V,b as $,c as N,D as w,d as U}from"./DocumentForm-B0YKCAZD.js";import{u as _,I as G}from"./useInteractionsQueries-BjGZjOBQ.js";import{C as K}from"./ContentTabs-fGxNcqXs.js";import{F as q}from"./FlexGrow-BMot7ywk.js";import{u as z,a as H,b as J,A as O}from"./useAssignmentsMutations-XvA_e-RO.js";import{a as Q}from"./useAssignmentsQueries-ERgm0P45.js";import"./MoreHoriz-BKr7J65Q.js";import"./index.esm-DrRyMUXG.js";import"./Tooltip-BSJFdB2q.js";import"./useQueryParam-yBg21OeV.js";import"./useContactsQueries-DK_yCSyW.js";import"./useCompaniesQueries-BdARXKKN.js";const W=({documentReferences:o,isLoading:i,defaultValues:s})=>{const{data:r=[],isLoading:m}=P(),d=h.useMemo(()=>{const e=A(r,"documentId");return o.map(n=>({...n,...e.get(n.documentId)}))},[r,o]),{mutate:c}=V(),{mutate:l}=$(),{mutate:u}=N();return t.jsx(E,{data:d,getRowId:e=>`${e.documentId}-${e.entityType}-${e.entityId}`,state:{isLoading:m||i},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:e,row:n})=>t.jsx(D,{component:j,to:`/documents/${n.original.documentId}`,children:e.getValue()})},{accessorFn:e=>{var n;return(n=e.content)==null?void 0:n.type},header:"Filtyp",enableEditing:!1},{accessorFn:e=>{var n;return b((n=e.content)==null?void 0:n.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>x(B(e.getValue()))}],renderEditRowDialogContent:({row:e,table:n})=>t.jsxs(t.Fragment,{children:[t.jsx(R,{variant:"h4",color:"primary",children:n.getState().creatingRow?"Nytt dokument":"Redigera dokument"}),t.jsx(k,{children:t.jsx(w,{sx:{mt:1},enableExistingDocuments:!!n.getState().creatingRow,formProps:{defaultValues:{...s,...e.original}},onChange:g=>{e._valuesCache=g}})}),t.jsx(S,{children:t.jsx(F,{row:e,table:n,variant:"text"})})]}),onCreate:e=>c(e,{onSuccess:n=>l({...e,documentId:n})}),onUpdate:e=>c(e),onDelete:e=>u(e)})},ge=()=>{const o=y(),i=I(),{data:s,isLoading:r}=Q(o.id==="new"?void 0:Number(o.id)),{mutate:m}=z(),{mutate:d}=H(),{mutate:c}=J(),{data:l=[],isLoading:u}=U({entityType:"assignment",entityId:s==null?void 0:s.assignmentId}),{data:e=[],isLoading:n}=_(s?{contactId:s.responsiblePersonId}:void 0),g=a=>{s?d(a):m(a,{onSuccess:f=>i(`/home/assignments/${f.assignmentId}`)})};if(!r)return t.jsx(O,{formProps:{values:s},onSubmit:g,renderTopContent:()=>t.jsxs(C,{sx:{position:"relative",mt:1,mb:3},children:[t.jsxs(v,{spacing:2,direction:"row",sx:{position:"absolute",right:0},children:[s&&t.jsx(M,{onClick:()=>c(s,{onSuccess:()=>i("..")}),children:a=>t.jsx(p,{variant:"outlined",color:"error",...L(a),children:"Ta bort"})}),t.jsx(p,{variant:"outlined",color:"primary",onClick:()=>i(-1),children:"Avbryt"}),t.jsx(p,{type:"submit",variant:"contained",color:"primary",children:"Spara"})]}),t.jsx(T,{variant:"h4",color:"primary",children:s?"Redigera uppdrag":"Lägg till uppdrag"})]}),renderBottomContent:()=>s&&t.jsx(q,{sx:{mt:1},children:t.jsx(K,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(G,{interactions:e,isLoading:n,defaultValues:{contacts:[s.responsiblePerson,s.externalContactPerson].filter(a=>!!a),interactionDate:x()}})},{id:"documents",label:"Dokument",content:t.jsx(W,{documentReferences:l,isLoading:u,defaultValues:{entityId:s.assignmentId,entityType:"assignment"}})},{id:"stakeholders",label:"Intressenter",content:t.jsx(t.Fragment,{children:"Intressenter..."})},{id:"modules",label:"Moduler",content:t.jsx(t.Fragment,{children:"Moduler..."})}]})})})};export{ge as default};
