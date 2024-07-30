import{r as q,j as t,G as i,n as F,i as O,C as $,q as T,p as G,v as H,s as J,t as U,w as X,o as C,k as Y,l as Z,T as tt,B as w,b as et,d as nt,L as E,A as at,x as rt,g as D,S as st,f as L,m as ot}from"./index-qKtrV0mz.js";import{d as it,A as ct,t as K,p as I,u as j,c as b,e as lt,D as N,a as P,b as A,M}from"./useSnackbar-BR6trEu1.js";import{u as dt}from"./useAssignmentsQueries-CPhwSwWo.js";import{u as ut,C as Q}from"./index.esm-DgEwvW9Q.js";import{u as mt,a as pt}from"./useContactsQueries-DQQXNQfB.js";import{F as z,s as xt}from"./FlexGrow-DqGyOJPY.js";import{f as R,t as gt}from"./date-BXnDE4F6.js";import{C as yt}from"./ContentTabs-DiY7PpnI.js";import{D as V,a as ht}from"./DataTable-CwmzEswp.js";import{u as It,a as Ct,b as jt}from"./useContactsMutations-B_dw3Z8G.js";import{C as bt}from"./ContactForm-D1AF8QLB.js";import"./MoreHoriz-Cxn0_NxL.js";import"./Tooltip-BX20npmk.js";import"./useCompaniesQueries-Dg97BjZE.js";const _=({onSubmit:n=()=>{},onChange:a,formProps:s,children:m,...x})=>{const{data:g=[]}=mt(),{control:y,handleSubmit:c,watch:p,register:d,formState:{errors:h}}=ut(s),k=p();return q.useEffect(()=>{a==null||a(k)},[a,k]),t.jsx(z,{...x,children:t.jsxs("form",{onSubmit:c(n),style:{...xt},children:[t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,sm:6,children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(F,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...d("interactionType",{required:!0}),error:!!h.interactionType})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(F,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...d("notes"),error:!!h.notes})})]})}),t.jsx(i,{item:!0,xs:12,sm:6,children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(Q,{control:y,name:"interactionDate",rules:{required:!0},render:({field:l})=>t.jsx(it,{label:"Interaktionsdatum",value:O(l.value),inputRef:l.ref,onChange:o=>l.onChange(R(o))})})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(Q,{name:"contacts",control:y,render:({field:l})=>t.jsx(ct,{multiple:!0,id:"multiple-contacts",options:g,getOptionKey:o=>o.contactId,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,u)=>o.contactId===u.contactId,value:l.value,onChange:(o,u)=>l.onChange(u),renderInput:o=>t.jsx(F,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!h.contacts}),renderTags:(o,u)=>o.map((f,v)=>q.createElement($,{...u({index:v}),key:f.contactId,label:f.contactName}))})})})]})})]}),m]})})},kt=async n=>{const s=(await T(`SELECT * FROM interactions
     WHERE interaction_id IN (
       SELECT interaction_id FROM interaction_contacts
       WHERE contact_id = :contactId)`,n)).map(c=>({...c,contacts:[]})),m=K(s,"interactionId"),x=await T("SELECT * FROM contacts"),g=K(x,"contactId");return(await T("SELECT * FROM interaction_contacts")).forEach(c=>{const p=m.get(c.interactionId),d=g.get(c.contactId);!p||!d||p.contacts.push(d)}),Array.from(m.values())},ft=async n=>await G("interactions",I({...n,interactionId:H()},["interactionId","interactionType","interactionDate","notes"])),Et=async n=>await J("interactions",I(n,["interactionType","interactionDate","notes"]),I(n,["interactionId"])),vt=async n=>await U("interactions",I(n,["interactionId"])),W=async n=>await X("interaction_contacts",n.contacts.map(({contactId:a})=>({interactionId:n.interactionId,contactId:a}))),St=async n=>{await B(n),await W(n)},B=async n=>{await U("interaction_contacts",I(n,["interactionId","contactId"]))},Ft=()=>{const n=C(),{showSnackbar:a}=j();return b({mutationFn:ft,onSuccess:()=>{n.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},Tt=()=>{const n=C(),{showSnackbar:a}=j();return b({mutationFn:Et,onSuccess:()=>{n.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},Dt=()=>{const n=C(),{showSnackbar:a}=j();return b({mutationFn:s=>Promise.all([vt(s),B(s)]),onSuccess:()=>{n.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},Lt=()=>{const n=C(),{showSnackbar:a}=j();return b({mutationFn:W,onSuccess:()=>{n.invalidateQueries({queryKey:["interactions"]}),a("Interaktion skapad!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle skapas.","error")}})},Rt=()=>{const n=C(),{showSnackbar:a}=j();return b({mutationFn:St,onSuccess:()=>{n.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterad!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},qt=n=>lt({queryKey:["interactions",n],queryFn:()=>kt(n),enabled:n&&Object.keys(n).length>0}),Bt=()=>{const n=Y(),a=Z(),{data:s,isLoading:m}=pt(n.id==="new"?void 0:Number(n.id)),{mutate:x}=It(),{mutate:g}=Ct(),{mutate:y}=jt(),{data:c=[],isLoading:p}=dt(),{data:d=[],isLoading:h}=qt(s?{contactId:s.contactId}:void 0),{mutate:k}=Ft(),{mutate:l}=Tt(),{mutate:o}=Dt(),{mutate:u}=Lt(),{mutate:f}=Rt(),v=e=>{s?g(e):x(e,{onSuccess:r=>a(`/dashboard/contact/${r.contactId}`)})};if(!m)return t.jsxs(t.Fragment,{children:[t.jsx(tt,{variant:"h4",color:"primary",children:s?"Redigera kontakt":"Lägg till kontakt"}),t.jsx(w,{sx:{my:1}}),t.jsxs(bt,{formProps:{values:s},onSubmit:v,children:[t.jsx(w,{sx:{my:1}}),s&&t.jsx(z,{children:t.jsx(yt,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(V,{data:d,getRowId:e=>e.interactionId,state:{isLoading:h},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:e})=>t.jsx(et,{disablePadding:!0,children:e.getValue().map(r=>t.jsx(nt,{sx:{py:.5},disableGutters:!0,children:t.jsx($,{component:E,variant:"outlined",avatar:t.jsx(at,{...rt(r.contactName)}),label:r.contactName,to:`/dashboard/contacts/${r.contactId}`,clickable:!0,size:"small"})},r.contactId))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:e=>O(e.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>R(gt(e.getValue()))}],renderCreateRowDialogContent:({row:e,table:r})=>t.jsxs(t.Fragment,{children:[t.jsx(N,{variant:"h4",color:"primary",children:"Ny interaktion"}),t.jsx(P,{children:t.jsx(_,{sx:{mt:1},formProps:{defaultValues:{contacts:[s],interactionDate:R()}},onChange:S=>{e._valuesCache=S}})}),t.jsx(A,{children:t.jsx(M,{row:e,table:r,variant:"text"})})]}),renderEditRowDialogContent:({row:e,table:r})=>t.jsxs(t.Fragment,{children:[t.jsx(N,{variant:"h4",color:"primary",children:"Redigera interaktion"}),t.jsx(P,{children:t.jsx(_,{sx:{mt:1},formProps:{defaultValues:e.original},onChange:S=>{e._valuesCache=S}})}),t.jsx(A,{children:t.jsx(M,{row:e,table:r,variant:"text"})})]}),onCreate:e=>[k(e,{onSuccess:({interactionId:r})=>{u({...e,interactionId:r})}})],onUpdate:e=>[l(e),f(e)],onDelete:e=>[o(e)]})},{id:"seeking",label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:t.jsx(V,{data:c.filter(e=>e.externalContactPersonId===s.contactId||e.responsiblePersonId===s.contactId),getRowId:e=>`${e.assignmentId}`,state:{isLoading:p},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:r})=>t.jsx(D,{component:E,to:`/dashboard/assignments/${r.original.assignmentId}`,children:e.getValue()})},{accessorFn:e=>{var r;return(r=e.responsiblePerson)==null?void 0:r.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:e,row:r})=>t.jsx(D,{component:E,to:`/dashboard/contacts/${r.original.responsiblePersonId}`,children:e.getValue()})},{accessorFn:e=>{var r;return(r=e.externalContactPerson)==null?void 0:r.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:r})=>t.jsx(D,{component:E,to:`/dashboard/contacts/${r.original.externalContactPersonId}`,children:e.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>e.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})}]})}),t.jsxs(st,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&t.jsx(ht,{onClick:()=>y(s,{onSuccess:()=>a("..")}),children:e=>t.jsx(L,{size:"large",variant:"outlined",color:"error",...ot(e),children:"Ta bort"})}),t.jsx(L,{size:"large",variant:"outlined",color:"primary",onClick:()=>a(-1),children:"Avbryt"}),t.jsx(L,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{Bt as default};
