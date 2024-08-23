import{r as x,j as e,G as y,M as B,N as K,S as A,t as P,i as U,k as V,B as G,T as O,g as b,L as j,Q as q}from"./index-DFA1-aob.js";import{u as R}from"./useAssignmentsQueries-g1VYE8zM.js";import{u as L}from"./useCompaniesQueries-B4_0YUS1.js";import{u as F}from"./useContactsQueries-rcfqKxji.js";import{C as W}from"./ContentTabs-CXVeSNbl.js";import{D as Y}from"./DataTable-DKOnhi1J.js";import{F as _}from"./FlexGrow-CWXYGkRy.js";import{S as Q}from"./SebraDialog-BA8LCyr1.js";import{S as z,A as H,t as D,F as J}from"./useSnackbar-CCfpnRuD.js";import{f as X,b as Z,e as ee,u as te,c as ne,g as ae,d as se,D as oe}from"./DocumentForm-BzInurTG.js";import{u as re,C as I}from"./index.esm-FWDVyD6a.js";import{M as S}from"./MoreHoriz-Cfj3PZ_4.js";import"./useQueryParam-ZH59eNdE.js";import"./Tooltip-Sh9O8kPd.js";const ce=[{label:"Bolag",value:"company"},{label:"Kontakt",value:"contact"},{label:"Uppdrag",value:"assignment"}],ie=({formProps:r,...c})=>{const{data:o=[]}=F(),{data:i=[]}=R(),{data:m=[]}=L(),{control:u,handleSubmit:l,watch:d,formState:{errors:p}}=re(r),g=d(),f=x.useMemo(()=>{switch(g.entityType){case"company":return m.map(n=>({id:n.companyId,label:n.companyName}));case"contact":return o.map(n=>({id:n.contactId,label:n.contactName}));case"assignment":return i.map(n=>({id:n.assignmentId,label:n.assignmentName}));default:return[]}},[g.entityType,m,o,i]);return e.jsx(z,{...c,handleSubmit:l,children:e.jsxs(y,{container:!0,spacing:2,children:[e.jsx(y,{item:!0,xs:12,sm:6,children:e.jsxs(B,{fullWidth:!0,variant:"outlined",error:!!p.entityType,children:[e.jsx(K,{children:"Typ"}),e.jsx(I,{control:u,name:"entityType",defaultValue:"",rules:{required:!0},render:({field:n})=>e.jsxs(A,{label:"Typ",...n,children:[e.jsx(S,{value:"",disabled:!0,children:"Välj typ"}),ce.map(a=>e.jsx(S,{value:a.value,children:a.label},a.value))]})})]})}),e.jsx(y,{item:!0,xs:12,sm:6,children:e.jsx(I,{name:"entityId",control:u,rules:{required:!0},render:({field:n})=>e.jsx(H,{options:f,getOptionKey:a=>a.id,getOptionLabel:a=>a.label,value:f.find(a=>a.id===n.value)||null,onChange:(a,h)=>n.onChange(h?h.id:void 0),renderInput:a=>e.jsx(P,{...a,label:"Länk",variant:"outlined",fullWidth:!0})})})})]})})},ve=()=>{const r=U(),c=V(),{data:o,isLoading:i}=X(r.id==="new"?void 0:r.id),{mutate:m}=Z(),{mutate:u}=ee(),{data:l=[]}=L(),{data:d=[]}=F(),{data:p=[]}=R(),{data:g=[],isLoading:f}=te(r.id!=="new"?{documentId:r.id}:void 0),{mutate:n}=ne(),{mutate:a}=ae(),{mutate:h}=se(),M=x.useMemo(()=>D(l,"companyId"),[l]),k=x.useMemo(()=>D(d,"contactId"),[d]),N=x.useMemo(()=>D(p,"assignmentId"),[p]),$=t=>{m(t,{onSuccess:s=>c(`/documents/${s}`)})};if(i)return;const E=t=>{switch(t){case"company":return"Bolag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},w=(t,s)=>{var T,v,C;switch(t){case"company":return e.jsx(b,{component:j,to:`/home/companies/${s}`,children:(T=M.get(s))==null?void 0:T.companyName});case"contact":return e.jsx(b,{component:j,to:`/home/contacts/${s}`,children:(v=k.get(s))==null?void 0:v.contactName});case"assignment":return e.jsx(b,{component:j,to:{pathname:`/home/assignments/${s}`,search:`${q({tab:"documents"})}`},children:(C=N.get(s))==null?void 0:C.assignmentName});default:return null}};return e.jsx(oe,{formProps:{defaultValues:o},onSubmit:$,renderTopContent:()=>e.jsxs(G,{sx:{position:"relative",mt:1,mb:3},children:[e.jsx(O,{variant:"h4",color:"primary",children:o?"Redigera dokument":"Lägg till dokument"}),e.jsx(J,{sx:{position:"absolute",top:0,right:0},onDelete:o?()=>u(o,{onSuccess:()=>c("..")}):void 0,onCancel:()=>c(-1)})]}),renderBottomContent:()=>o&&e.jsx(_,{children:e.jsx(W,{tabs:[{id:"references",label:"Referenser",content:e.jsx(Y,{data:g,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:f},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:t})=>E(t.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:t})=>w(t.original.entityType,t.original.entityId)}],renderEditRowDialogContent:({row:t,table:s})=>e.jsx(Q,{table:s,row:t,titles:{creating:"Ny referens",editing:"Redigera referens"},FormComponent:ie,defaultValues:{documentId:o.documentId}}),onCreate:t=>n(t),onUpdate:(t,s)=>a({row:t,where:s}),onDelete:t=>h(t)})}]})})})};export{ve as default};
