import{r as p,j as s,i as D,L as x,k as b,l as h,g as C,B as j,T as y,F as I,m as L}from"./index-B5Wn1pV6.js";import{D as R}from"./DataTable-CHC-0lOI.js";import{S as A}from"./SebraDialog-DMHdke9R.js";import{f as g,t as v}from"./date-CTTbm3Z8.js";import{t as F,i as S,F as T}from"./useSnackbar-DKcC1YFu.js";import{u as k,a as E,b as M,c as w,d as B,D as V}from"./DocumentForm-8jqdFKo9.js";import{u as $,I as K}from"./useInteractionsQueries-BnoE_d8J.js";import{C as N}from"./ContentTabs-ixOlLe5c.js";import{u as H,a as P,b as U,A as G}from"./useAssignmentsMutations-bNKWUxIP.js";import{a as q}from"./useAssignmentsQueries-CLWaiOM8.js";import"./useQueryParam-B9tnBKyX.js";import"./Tooltip-BOs_SEaO.js";import"./MoreHoriz-1-Hni6Yv.js";import"./index.esm-DVlgypon.js";import"./Tabs-CVL9e8Ya.js";import"./useContactsQueries-D3qhIykf.js";import"./useCompaniesQueries-Bc9ksEnf.js";const z=({defaultValues:i})=>{const{data:o=[],isLoading:n}=k(i),{data:r=[],isLoading:d}=E(),u=p.useMemo(()=>{const e=F(r,"documentId");return o.map(t=>e.get(t.documentId)).filter(t=>!!t)},[r,o]),{mutate:c}=M(),{mutate:m}=w(),{mutate:l}=B();return s.jsx(R,{data:u,getRowId:e=>e.documentId,state:{isLoading:d||n},columns:[{accessorKey:"documentName",header:"Dokumentnamn",Cell:({cell:e,row:t})=>s.jsx(D,{component:x,to:`/documents/${t.original.documentId}`,children:e.getValue()})},{accessorKey:"content.type",accessorFn:e=>{var t;return(t=e.content)==null?void 0:t.type},header:"Filtyp",enableEditing:!1},{accessorKey:"content.lastModified",accessorFn:e=>{var t;return b((t=e.content)==null?void 0:t.lastModified)},header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>g(v(e.getValue()))}],renderEditRowDialogContent:({row:e,table:t})=>s.jsx(A,{table:t,row:e,titles:{creating:"Nytt dokument",editing:"Redigera dokument"},FormComponent:V}),onCreate:e=>c(e,{onSuccess:t=>m({...i,documentId:t})}),onUpdate:e=>c(e),onDelete:e=>l(e)})},me=()=>{const i=h(),o=C(),{data:n,isLoading:r}=q(i.id==="new"?void 0:i.id),{mutate:d}=H(),{mutate:u}=P(),{mutate:c}=U(),{data:m=[],isLoading:l}=$(),e=p.useMemo(()=>m.filter(a=>S(a.contacts,(n==null?void 0:n.responsibleContacts)||[],"id").length>0),[m,n]),t=a=>{n?u(a):d(a,{onSuccess:f=>o(`/home/assignments/${f.id}`)})};if(!r)return s.jsx(G,{formProps:{values:n},onSubmit:t,renderTopContent:()=>s.jsxs(j,{sx:{position:"relative",mt:1,mb:3},children:[s.jsx(y,{variant:"h4",color:"primary",children:n?"Redigera uppdrag":"Lägg till uppdrag"}),s.jsx(T,{sx:{position:"absolute",top:0,right:0},onDelete:n?()=>c(n,{onSuccess:()=>o("..")}):void 0,onCancel:()=>o(-1)})]}),renderBottomContent:()=>n&&s.jsx(I,{sx:{mt:1,minHeight:`calc(100vh - ${L}px - 1rem)`},children:s.jsx(N,{tabs:[{id:"interactions",label:"Interaktioner",content:s.jsx(K,{interactions:e,isLoading:l,defaultValues:{contacts:[...n.responsibleContacts,n.externalContact].filter(a=>!!a),interactionDate:g()}})},{id:"documents",label:"Dokument",content:s.jsx(z,{defaultValues:{entityId:n.id,entityType:"assignment"}})}]})})})};export{me as default};