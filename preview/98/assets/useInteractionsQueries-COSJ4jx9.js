import{n as L,v as Q,o as A,p as S,q as N,s as I,t as j,r as w,j as t,G as i,w as h,h as D,C as F,b as O,d as V,L as _,A as G,x as P}from"./index-BrEZVVZU.js";import{p,t as v,u as g,c as f,d as W,A as z,D as U,a as $,b as H,M as J,e as X}from"./useSnackbar-CHVXOGIw.js";import{D as Y}from"./DataTable-BTpUrcky.js";import{f as T,t as Z}from"./date-CqOSA2HE.js";import{u as B,C}from"./index.esm-B5qF0tzH.js";import{u as tt}from"./useContactsQueries-pnr1N6mB.js";import{F as et,s as at}from"./FlexGrow-D9SxHobT.js";const nt=async()=>{const n=(await I("SELECT * FROM interactions")).map(a=>({...a,contacts:[]})),u=v(n,"interactionId"),o=await I("SELECT * FROM contacts"),c=v(o,"contactId");return(await I("SELECT * FROM interaction_contacts")).forEach(a=>{const r=u.get(a.interactionId),l=c.get(a.contactId);!r||!l||r.contacts.push(l)}),Array.from(u.values())},rt=async e=>{const n=await L("interactions",p({...e,interactionId:Q()},["interactionId","interactionType","interactionDate","notes"]));await q({interactionId:n.interactionId,contacts:e.contacts})},st=async e=>{await A("interactions",p(e,["interactionType","interactionDate","notes"]),p(e,["interactionId"])),await ot(e)},it=async e=>{await R(e),await S("interactions",p(e,["interactionId"]))},q=async e=>{await N("interaction_contacts",e.contacts.map(({contactId:n})=>({interactionId:e.interactionId,contactId:n})))},ot=async e=>{await R(e),await q(e)},R=async e=>{await S("interaction_contacts",p(e,["interactionId"]))},ct=()=>{const e=j(),{showSnackbar:n}=g();return f({mutationFn:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),n("Interaktion sparat!")},onError:()=>{n("Ett fel uppstod när interaktionen skulle sparas.","error")}})},ut=()=>{const e=j(),{showSnackbar:n}=g();return f({mutationFn:st,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),n("Interaktion uppdaterat!")},onError:()=>{n("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},lt=()=>{const e=j(),{showSnackbar:n}=g();return f({mutationFn:it,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),n("Interaktion borttaget!")},onError:()=>{n("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},dt=({onSubmit:e=()=>{},onChange:n,formProps:u,renderTopContent:o,renderBottomContent:c,...x})=>{const{data:a=[]}=tt(),{control:r,handleSubmit:l,watch:K,register:k,formState:{errors:y}}=B(u),b=K();return w.useEffect(()=>{n==null||n(b)},[n,b]),t.jsx(et,{...x,children:t.jsxs("form",{onSubmit:l(e),style:{...at},children:[o==null?void 0:o(),t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,sm:6,children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(h,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...k("interactionType",{required:!0}),error:!!y.interactionType})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(h,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...k("notes"),error:!!y.notes})})]})}),t.jsx(i,{item:!0,xs:12,sm:6,children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(C,{control:r,name:"interactionDate",rules:{required:!0},render:({field:d})=>t.jsx(W,{label:"Interaktionsdatum",value:D(d.value),inputRef:d.ref,onChange:s=>d.onChange(T(s))})})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(C,{name:"contacts",control:r,render:({field:d})=>t.jsx(z,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:a,getOptionKey:s=>s.contactId,getOptionLabel:s=>s.contactName,isOptionEqualToValue:(s,m)=>s.contactId===m.contactId,value:d.value,onChange:(s,m)=>d.onChange(m),renderInput:s=>t.jsx(h,{...s,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!y.contacts}),renderTags:(s,m)=>s.map((E,M)=>w.createElement(F,{...m({index:M}),key:E.contactId,label:E.contactName}))})})})]})})]}),c==null?void 0:c()]})})},gt=({interactions:e,isLoading:n,defaultValues:u})=>{const{mutate:o}=ct(),{mutate:c}=ut(),{mutate:x}=lt();return t.jsx(Y,{data:e,getRowId:a=>a.interactionId,state:{isLoading:n},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:a})=>t.jsx(O,{disablePadding:!0,children:a.getValue().map(r=>t.jsx(V,{sx:{py:.25},disableGutters:!0,children:t.jsx(F,{component:_,variant:"outlined",avatar:t.jsx(G,{...P(r.contactName)}),label:r.contactName,to:`/home/contacts/${r.contactId}`,clickable:!0,size:"small"})},r.contactId))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:a=>D(a.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>T(Z(a.getValue()))}],renderEditRowDialogContent:({row:a,table:r})=>t.jsxs(t.Fragment,{children:[t.jsx(U,{variant:"h4",color:"primary",children:r.getState().creatingRow?"Ny interaktion":"Redigera interaktion"}),t.jsx($,{children:t.jsx(dt,{sx:{mt:1},formProps:{defaultValues:{...u,...a.original}},onChange:l=>{a._valuesCache=l}})}),t.jsx(H,{children:t.jsx(J,{row:a,table:r,variant:"text"})})]}),onCreate:a=>o(a),onUpdate:a=>c(a),onDelete:a=>x(a)})},ft=()=>X({queryKey:["interactions"],queryFn:()=>nt()});export{gt as I,ft as u};
