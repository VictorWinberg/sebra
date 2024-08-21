import{n as v,v as q,o as D,p as j,q as F,s as p,t as I,j as n,G as s,w as y,h as k,r as R,C as f,b as K,d as L,L as Q,A as M,x as N}from"./index-DyjmdRSC.js";import{D as O}from"./DataTable-ClRgWCj0.js";import{S as A}from"./SebraDialog-BePZJB7R.js";import{f as w,t as V}from"./date-B17jE2Ke.js";import{p as m,t as C,u as x,a as h,S as _,D as G,A as W,b as z}from"./useSnackbar-BAxIYe6h.js";import{u as P,C as b}from"./index.esm-CwNn21lM.js";import{u as U}from"./useContactsQueries-DP1-8nuh.js";const $=async()=>{const a=(await p("SELECT * FROM interactions")).map(e=>({...e,contacts:[]})),i=C(a,"interactionId"),c=await p("SELECT * FROM contacts"),u=C(c,"contactId");return(await p("SELECT * FROM interaction_contacts")).forEach(e=>{const r=i.get(e.interactionId),o=u.get(e.contactId);!r||!o||r.contacts.push(o)}),Array.from(i.values())},B=async t=>{const a=await v("interactions",m({...t,interactionId:q()},["interactionId","interactionType","interactionDate","notes"]));await E({interactionId:a.interactionId,contacts:t.contacts})},H=async t=>{await D("interactions",m(t,["interactionType","interactionDate","notes"]),m(t,["interactionId"])),await X(t)},J=async t=>{await S(t),await j("interactions",m(t,["interactionId"]))},E=async t=>{await F("interaction_contacts",t.contacts.map(({contactId:a})=>({interactionId:t.interactionId,contactId:a})))},X=async t=>{await S(t),await E(t)},S=async t=>{await j("interaction_contacts",m(t,["interactionId"]))},Y=()=>{const t=I(),{showSnackbar:a}=x();return h({mutationFn:B,onSuccess:()=>{t.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},Z=()=>{const t=I(),{showSnackbar:a}=x();return h({mutationFn:H,onSuccess:()=>{t.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},tt=()=>{const t=I(),{showSnackbar:a}=x();return h({mutationFn:J,onSuccess:()=>{t.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},et=({formProps:t,...a})=>{const{data:i=[]}=U(),{control:c,handleSubmit:u,register:l,formState:{errors:e}}=P(t);return n.jsx(_,{...a,handleSubmit:u,children:n.jsxs(s,{container:!0,spacing:2,children:[n.jsx(s,{item:!0,xs:12,sm:6,children:n.jsxs(s,{container:!0,spacing:2,children:[n.jsx(s,{item:!0,xs:12,children:n.jsx(y,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!e.interactionType})}),n.jsx(s,{item:!0,xs:12,children:n.jsx(y,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!e.notes})})]})}),n.jsx(s,{item:!0,xs:12,sm:6,children:n.jsxs(s,{container:!0,spacing:2,children:[n.jsx(s,{item:!0,xs:12,children:n.jsx(b,{control:c,name:"interactionDate",rules:{required:!0},render:({field:r})=>n.jsx(G,{label:"Interaktionsdatum",value:k(r.value),inputRef:r.ref,onChange:o=>r.onChange(w(o))})})}),n.jsx(s,{item:!0,xs:12,children:n.jsx(b,{name:"contacts",control:c,render:({field:r})=>n.jsx(W,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:i,getOptionKey:o=>o.contactId,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,d)=>o.contactId===d.contactId,value:r.value||[],onChange:(o,d)=>r.onChange(d),renderInput:o=>n.jsx(y,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!e.contacts}),renderTags:(o,d)=>o.map((g,T)=>R.createElement(f,{...d({index:T}),key:g.contactId,label:g.contactName}))})})})]})})]})})},ut=({interactions:t,isLoading:a,defaultValues:i})=>{const{mutate:c}=Y(),{mutate:u}=Z(),{mutate:l}=tt();return n.jsx(O,{data:t,getRowId:e=>e.interactionId,state:{isLoading:a},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:e})=>n.jsx(K,{disablePadding:!0,children:e.getValue().map(r=>n.jsx(L,{sx:{py:.25},disableGutters:!0,children:n.jsx(f,{component:Q,variant:"outlined",avatar:n.jsx(M,{...N(r.contactName)}),label:r.contactName,to:`/home/contacts/${r.contactId}`,clickable:!0,size:"small"})},r.contactId))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:e=>k(e.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>w(V(e.getValue()))}],renderEditRowDialogContent:({row:e,table:r})=>n.jsx(A,{table:r,row:e,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:et,defaultValues:i}),onCreate:e=>c(e),onUpdate:e=>u(e),onDelete:e=>l(e)})},lt=()=>z({queryKey:["interactions"],queryFn:()=>$()});export{ut as I,lt as u};