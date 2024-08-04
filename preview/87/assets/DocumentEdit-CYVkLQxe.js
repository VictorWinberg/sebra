import{r as p,j as e,G as D,K as G,M as O,N as q,t as W,i as Y,k as Q,T as H,B as F,S as J,f as T,l as X,g as C,L as R,Q as Z}from"./index-DMusdSGo.js";import{A as ee,t as I,D as L,a as M,b as E,M as N}from"./useSnackbar-DG0jVQLI.js";import{u as K}from"./useAssignmentsQueries-n_T9Qe2a.js";import{u as P}from"./useCompaniesQueries-Drzli76B.js";import{u as V}from"./useContactsQueries-B8cQKt49.js";import{C as te}from"./ContentTabs-DcZHfSPH.js";import{D as ae,a as ne}from"./DataTable-D_iph9cT.js";import{F as _,s as se}from"./FlexGrow-JVqsbzqm.js";import{f as re,a as oe,e as ce,d as ie,b as le,g as me,c as de,D as ue}from"./DocumentForm-CrVrncCZ.js";import{u as pe,C as $}from"./index.esm-BtgLAIRf.js";import{M as w}from"./MoreHoriz-B9cmCAlx.js";import"./Tooltip-D0GhOfaB.js";import"./useQueryParam-CJjyunjj.js";const xe=[{label:"Företag",value:"company"},{label:"Kontakt",value:"contact"},{label:"Uppdrag",value:"assignment"}],A=({onSubmit:c=()=>{},onChange:r,formProps:o,children:f,...j})=>{const{data:x=[]}=V(),{data:m=[]}=K(),{data:d=[]}=P(),{control:u,handleSubmit:y,watch:b,formState:{errors:v}}=pe(o),i=b();p.useEffect(()=>{r==null||r(i)},[r,i]);const g=p.useMemo(()=>{switch(i.entityType){case"company":return d.map(a=>({id:a.companyId,label:a.companyName}));case"contact":return x.map(a=>({id:a.contactId,label:a.contactName}));case"assignment":return m.map(a=>({id:a.assignmentId,label:a.assignmentName}));default:return[]}},[i.entityType,d,x,m]);return e.jsx(_,{...j,children:e.jsxs("form",{onSubmit:y(c),style:{...se},children:[e.jsxs(D,{container:!0,spacing:2,children:[e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsxs(G,{fullWidth:!0,variant:"outlined",error:!!v.entityType,children:[e.jsx(O,{children:"Typ"}),e.jsx($,{control:u,name:"entityType",defaultValue:"",rules:{required:!0},render:({field:a})=>e.jsxs(q,{label:"Typ",...a,children:[e.jsx(w,{value:"",disabled:!0,children:"Välj typ"}),xe.map(n=>e.jsx(w,{value:n.value,children:n.label},n.value))]})})]})}),e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx($,{name:"entityId",control:u,rules:{required:!0},render:({field:a})=>e.jsx(ee,{options:g,getOptionKey:n=>n.id,getOptionLabel:n=>n.label,value:g.find(n=>n.id===a.value)||null,onChange:(n,h)=>a.onChange(h?h.id:void 0),renderInput:n=>e.jsx(W,{...n,label:"Länk",variant:"outlined",fullWidth:!0})})})})]}),f]})})},ke=()=>{const c=Y(),r=Q(),{data:o,isLoading:f}=re(c.id==="new"?void 0:c.id),{mutate:j}=oe(),{mutate:x}=ce(),{data:m=[]}=P(),{data:d=[]}=V(),{data:u=[]}=K(),{data:y=[],isLoading:b}=ie(c.id!=="new"?{documentId:c.id}:void 0),{mutate:v}=le(),{mutate:i}=me(),{mutate:g}=de(),a=p.useMemo(()=>I(m,"companyId"),[m]),n=p.useMemo(()=>I(d,"contactId"),[d]),h=p.useMemo(()=>I(u,"assignmentId"),[u]),B=t=>{j(t,{onSuccess:s=>r(`/documents/${s}`)})};if(f)return;const U=t=>{switch(t){case"company":return"Företag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},z=(t,s)=>{var l,S,k;switch(t){case"company":return e.jsx(C,{component:R,to:`/dashboard/companies/${s}`,children:(l=a.get(s))==null?void 0:l.companyName});case"contact":return e.jsx(C,{component:R,to:`/dashboard/contacts/${s}`,children:(S=n.get(s))==null?void 0:S.contactName});case"assignment":return e.jsx(C,{component:R,to:{pathname:`/dashboard/assignments/${s}`,search:`${Z({tab:"documents"})}`},children:(k=h.get(s))==null?void 0:k.assignmentName});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(H,{variant:"h4",color:"primary",children:o?"Redigera dokument":"Lägg till dokument"}),e.jsx(F,{sx:{my:1}}),e.jsxs(ue,{formProps:{defaultValues:o},onSubmit:B,children:[e.jsx(F,{sx:{my:1}}),o&&e.jsx(_,{children:e.jsx(te,{tabs:[{id:"references",label:"Referenser",content:e.jsx(ae,{data:y,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:b},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:t})=>U(t.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:t})=>z(t.original.entityType,t.original.entityId)}],renderCreateRowDialogContent:({row:t,table:s})=>e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:"Ny referens"}),e.jsx(M,{children:e.jsx(A,{sx:{mt:1},formProps:{defaultValues:{documentId:o.documentId}},onChange:l=>{t._valuesCache=l}})}),e.jsx(E,{children:e.jsx(N,{row:t,table:s,variant:"text"})})]}),renderEditRowDialogContent:({row:t,table:s})=>e.jsxs(e.Fragment,{children:[e.jsx(L,{variant:"h4",color:"primary",children:"Redigera referens"}),e.jsx(M,{children:e.jsx(A,{sx:{mt:1},formProps:{defaultValues:t.original},onChange:l=>{t._valuesCache=l}})}),e.jsx(E,{children:e.jsx(N,{row:t,table:s,variant:"text"})})]}),onCreate:t=>v(t),onUpdate:(t,s)=>i({row:t,where:s}),onDelete:t=>g(t)})}]})}),e.jsxs(J,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[o&&e.jsx(ne,{onClick:()=>x(o,{onSuccess:()=>r("..")}),children:t=>e.jsx(T,{size:"large",variant:"outlined",color:"error",...X(t),children:"Ta bort"})}),e.jsx(T,{size:"large",variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Avbryt"}),e.jsx(T,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{ke as default};
