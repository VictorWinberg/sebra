import{t as q,v as p,w as Q,x as F,y as k,z as A,A as b,D as j,E as m,H as y,I,J as x,K as f,M as h,j as n,G as c,N as g,h as w,r as K,C as E,Q as R,U as G,L as M,V as N,W as $,X as _}from"./index-ButF0YW6.js";import{D as O}from"./DataTable-C_49FF9k.js";import{S as V}from"./SebraDialog-Buzm4fpC.js";import{f as S,t as U}from"./date-DBRUH43z.js";import{u as W,C as D}from"./index.esm-D6qgp2qs.js";import{u as z}from"./useContactsQueries-TngrMUPD.js";import{S as P,D as H,A as J}from"./SebraForm-D7kP7LFU.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1b815abc-987a-4d05-995b-e670bb3bf6c2",t._sentryDebugIdIdentifier="sentry-dbid-1b815abc-987a-4d05-995b-e670bb3bf6c2")}catch{}})();const X=async()=>{const e=(await b("SELECT * FROM interactions")).map(i=>({...i,contacts:[]})),a=j(e,"id"),s=await b("SELECT * FROM contacts"),d=j(s,"id");return(await b("SELECT * FROM interaction_contacts")).forEach(i=>{const o=a.get(i.interactionId),u=d.get(i.contactId);!o||!u||(o.contacts=o.contacts||[]).push(u)}),{Interactions:{docs:Array.from(a.values())}}},B=async t=>{const e=await q("interactions",p({...t,interactionId:Q()},["id","interactionType","interactionDate","notes"]));return await T({id:e.id,contacts:t.contacts}),{createInteraction:e}},Y=async t=>{const e=await F("interactions",p(t,["interactionType","interactionDate","notes"]),p(t,["id"]));return await tt(t),{updateInteraction:e}},Z=async({id:t})=>(await L({id:t}),await k("interactions",{id:t}),{deleteInteraction:{id:t}}),T=async t=>{await A("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},tt=async t=>{await L(t),await T(t)},L=async({id:t})=>{await k("interaction_contacts",{interactionId:t})},et=()=>m(y(`
      query GetInteractions {
        Interactions(sort: "interactionDate:desc") {
          docs {
            id
            interactionType
            interactionDate
            notes
            createdAt
            updatedAt

            contacts {
              id
              contactName
              email
              phone
              jobTitle
              address
              createdAt
              updatedAt
            }
          }
        }
      }
    `))(),nt=t=>{var e;return m(y(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:p({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},at=t=>{var e;return m(y(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:p({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},rt=t=>m(y(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),it=()=>{const[{isDemo:t}]=I(),e=x(),{showSnackbar:a}=f();return h({mutationFn:t?B:nt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},ot=()=>{const[{isDemo:t}]=I(),e=x(),{showSnackbar:a}=f();return h({mutationFn:t?Y:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},st=()=>{const[{isDemo:t}]=I(),e=x(),{showSnackbar:a}=f();return h({mutationFn:t?Z:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},ct=({formProps:t,...e})=>{const{data:a=[]}=z(),{control:s,handleSubmit:d,register:l,formState:{errors:r}}=W(t);return n.jsx(P,{...e,handleSubmit:d,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(g,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!r.interactionType})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(g,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!r.notes})})]})}),n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(D,{control:s,name:"interactionDate",rules:{required:!0},render:({field:i})=>n.jsx(H,{label:"Interaktionsdatum",value:w(i.value),inputRef:i.ref,onChange:o=>i.onChange(S(o))})})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(D,{name:"contacts",control:s,render:({field:i})=>n.jsx(J,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:a,getOptionKey:o=>o.id,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,u)=>o.id===u.id,value:i.value||[],onChange:(o,u)=>i.onChange(u),renderInput:o=>n.jsx(g,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!r.contacts}),renderTags:(o,u)=>o.map((C,v)=>K.createElement(E,{...u({index:v}),key:C.id,label:C.contactName}))})})})]})})]})})},bt=({interactions:t,isLoading:e,defaultValues:a})=>{const{mutate:s}=it(),{mutate:d}=ot(),{mutate:l}=st();return n.jsx(O,{data:t,getRowId:r=>r.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:r})=>n.jsx(R,{disablePadding:!0,children:r.getValue().map(i=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(E,{component:M,variant:"outlined",avatar:n.jsx(N,{...$(i.contactName)}),label:i.contactName,to:`/home/contacts/${i.id}`,clickable:!0,size:"small"})},i.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:r=>w(r.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:r})=>S(U(r.getValue()))}],renderEditRowDialogContent:({row:r,table:i})=>n.jsx(V,{table:i,row:r,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:ct,defaultValues:a}),onCreate:r=>s(r),onUpdate:r=>d(r),onDelete:r=>l(r)})},gt=()=>{const[{isDemo:t}]=I(),e=t?X:et;return _({queryKey:["interactions"],queryFn:()=>e(),select:a=>{var s,d;return((d=(s=a.Interactions)==null?void 0:s.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{bt as I,gt as u};
//# sourceMappingURL=useInteractionsQueries-Dr8uolii.js.map
