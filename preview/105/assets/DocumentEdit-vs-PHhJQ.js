import{r as y,j as e,G as h,_ as B,$ as K,a0 as U,I as A,k as P,g as V,w as x,B as q,T as G,F as O,L as D,a1 as W}from"./index-D7kQbbEZ.js";import{u as S}from"./useAssignmentsQueries-B49G77Zg.js";import{u as w}from"./useCompaniesQueries-B3W6x3dC.js";import{u as k}from"./useContactsQueries-DGABxKnR.js";import{C as Y}from"./ContentTabs-DN0ODHvo.js";import{D as z}from"./DataTable-3fdw4fww.js";import{S as H}from"./SebraDialog-508iuI1H.js";import{S as J,A as Q,F as X}from"./SebraForm-DAu2_dch.js";import{g as Z,a as ee,b as te,f as ne,u as ae,c as se,h as oe,d as re,D as ie}from"./DocumentForm-BZxypTDb.js";import{u as ce,C as L}from"./index.esm-CGQV46hS.js";import{M as R}from"./MoreHoriz-Dt3k2OOr.js";import{L as j}from"./Link--OJSL6bo.js";import"./useQueryParam-B0MThAFP.js";import"./Tabs-Cue285iL.js";import"./Tooltip-DedFywXv.js";import"./FormControlLabel-DQm8oA29.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new s.Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="b79d7333-6e11-47f0-858a-b4ac9e12eca6",s._sentryDebugIdIdentifier="sentry-dbid-b79d7333-6e11-47f0-858a-b4ac9e12eca6")}catch{}})();const me=[{label:"Bolag",value:"company"},{label:"Kontakt",value:"contact"},{label:"Uppdrag",value:"assignment"}],ue=({formProps:s,...i})=>{const{data:o=[]}=k(),{data:m=[]}=S(),{data:u=[]}=w(),{control:d,handleSubmit:b,watch:l,formState:{errors:p}}=ce(s),c=l(),f=y.useMemo(()=>{switch(c.entityType){case"company":return u.map(n=>({id:n.id,label:n.companyName}));case"contact":return o.map(n=>({id:n.id,label:n.contactName}));case"assignment":return m.map(n=>({id:n.id,label:n.assignmentName}));default:return[]}},[c.entityType,u,o,m]);return e.jsx(J,{...i,handleSubmit:b,children:e.jsxs(h,{container:!0,spacing:2,children:[e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(B,{fullWidth:!0,variant:"outlined",error:!!p.entityType,children:[e.jsx(K,{children:"Typ"}),e.jsx(L,{control:d,name:"entityType",defaultValue:"",rules:{required:!0},render:({field:n})=>e.jsxs(U,{label:"Typ",...n,children:[e.jsx(R,{value:"",disabled:!0,children:"Välj typ"}),me.map(a=>e.jsx(R,{value:a.value,children:a.label},a.value))]})})]})}),e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsx(L,{name:"entityId",control:d,rules:{required:!0},render:({field:n})=>e.jsx(Q,{options:f,getOptionKey:a=>a.id,getOptionLabel:a=>a.label,value:f.find(a=>a.id===n.value)||null,onChange:(a,g)=>n.onChange(g?g.id:void 0),renderInput:a=>e.jsx(A,{...a,label:"Länk",variant:"outlined",fullWidth:!0})})})})]})})},Se=()=>{const s=P(),i=V(),{data:o,isLoading:m}=Z(s.id==="new"?void 0:s.id),{mutate:u}=ee(),{mutate:d}=te(),{mutate:b}=ne(),{data:l=[]}=w(),{data:p=[]}=k(),{data:c=[]}=S(),{data:f=[],isLoading:n}=ae(s.id!=="new"?{document:{equals:s.id}}:void 0),{mutate:a}=se(),{mutate:g}=oe(),{mutate:F}=re(),I=y.useMemo(()=>x(l,"id"),[l]),M=y.useMemo(()=>x(p,"id"),[p]),$=y.useMemo(()=>x(c,"id"),[c]),E=t=>{o?d({...t,id:o.id}):u(t,{onSuccess:r=>i(`/documents/${r.doc.id}`)})};if(m)return;const N=t=>{switch(t){case"company":return"Bolag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},_=(t,r)=>{var v,T,C;switch(t){case"company":return e.jsx(j,{component:D,to:`/home/companies/${r}`,children:(v=I.get(r))==null?void 0:v.companyName});case"contact":return e.jsx(j,{component:D,to:`/home/contacts/${r}`,children:(T=M.get(r))==null?void 0:T.contactName});case"assignment":return e.jsx(j,{component:D,to:{pathname:`/home/assignments/${r}`,search:`${W({tab:"documents"})}`},children:(C=$.get(r))==null?void 0:C.assignmentName});default:return null}};return e.jsx(ie,{formProps:{defaultValues:{...o}},onSubmit:E,renderTopContent:()=>e.jsxs(q,{sx:{position:"relative",mt:1,mb:3},children:[e.jsx(G,{variant:"h4",color:"primary",children:o?"Redigera dokument":"Lägg till dokument"}),e.jsx(X,{sx:{position:"absolute",top:0,right:0},onDelete:o?()=>b(o,{onSuccess:()=>i("..")}):void 0,onCancel:()=>i(-1)})]}),renderBottomContent:()=>o&&e.jsx(O,{children:e.jsx(Y,{tabs:[{id:"references",label:"Referenser",content:e.jsx(z,{data:f,getRowId:t=>`${t.document}-${t.entityType}-${t.entityId}`,state:{isLoading:n},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:t})=>N(t.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:t})=>_(t.original.entityType,t.original.entityId)}],renderEditRowDialogContent:({row:t,table:r})=>e.jsx(H,{table:r,row:t,titles:{creating:"Ny referens",editing:"Redigera referens"},FormComponent:ue,defaultValues:{document:o}}),onCreate:t=>a(t),onUpdate:t=>g(t),onDelete:t=>F(t)})}]})})})};export{Se as default};
//# sourceMappingURL=DocumentEdit-vs-PHhJQ.js.map