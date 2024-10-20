import{m as q,v as Q,n as F,o as w,p as A,q as g,s as m,t as y,w as I,x as b,y as f,z as h,j as n,G as c,A as x,i as D,r as R,C as E,d as K,e as G,L as $,E as M,H as N,I as _}from"./index-DW1vZ186.js";import{D as O}from"./DataTable-DTvTvD7u.js";import{S as V}from"./SebraDialog-DdYmLY6k.js";import{f as T,t as U}from"./date-Bew8zK8R.js";import{u as z,C as j}from"./index.esm-wXhxn-Kg.js";import{u as W}from"./useContactsQueries-B5gd8XyY.js";import{p,t as k,S as P,D as H,A as B}from"./SebraForm-D0LgTLxT.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2b80c418-3855-4fb7-9eaa-883d468d4a66",t._sentryDebugIdIdentifier="sentry-dbid-2b80c418-3855-4fb7-9eaa-883d468d4a66")}catch{}})();const J=async()=>{const e=(await g("SELECT * FROM interactions")).map(i=>({...i,contacts:[]})),a=k(e,"id"),s=await g("SELECT * FROM contacts"),d=k(s,"id");return(await g("SELECT * FROM interaction_contacts")).forEach(i=>{const o=a.get(i.interactionId),u=d.get(i.contactId);!o||!u||(o.contacts=o.contacts||[]).push(u)}),{Interactions:{docs:Array.from(a.values())}}},X=async t=>{const e=await q("interactions",p({...t,interactionId:Q()},["id","interactionType","interactionDate","notes"]));return await S({id:e.id,contacts:t.contacts}),{createInteraction:e}},Y=async t=>{const e=await F("interactions",p(t,["interactionType","interactionDate","notes"]),p(t,["id"]));return await tt(t),{updateInteraction:e}},Z=async({id:t})=>(await L({id:t}),await w("interactions",{id:t}),{deleteInteraction:{id:t}}),S=async t=>{await A("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},tt=async t=>{await L(t),await S(t)},L=async({id:t})=>{await w("interaction_contacts",{interactionId:t})},et=()=>m(y(`
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
    `))({id:t.id}),it=()=>{const{data:t}=I(),e=b(),{showSnackbar:a}=f();return h({mutationFn:t?nt:X,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},ot=()=>{const{data:t}=I(),e=b(),{showSnackbar:a}=f();return h({mutationFn:t?at:Y,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},st=()=>{const{data:t}=I(),e=b(),{showSnackbar:a}=f();return h({mutationFn:t?rt:Z,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},ct=({formProps:t,...e})=>{const{data:a=[]}=W(),{control:s,handleSubmit:d,register:l,formState:{errors:r}}=z(t);return n.jsx(P,{...e,handleSubmit:d,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(x,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!r.interactionType})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(x,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!r.notes})})]})}),n.jsx(c,{item:!0,xs:12,sm:6,children:n.jsxs(c,{container:!0,spacing:2,children:[n.jsx(c,{item:!0,xs:12,children:n.jsx(j,{control:s,name:"interactionDate",rules:{required:!0},render:({field:i})=>n.jsx(H,{label:"Interaktionsdatum",value:D(i.value),inputRef:i.ref,onChange:o=>i.onChange(T(o))})})}),n.jsx(c,{item:!0,xs:12,children:n.jsx(j,{name:"contacts",control:s,render:({field:i})=>n.jsx(B,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:a,getOptionKey:o=>o.id,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,u)=>o.id===u.id,value:i.value||[],onChange:(o,u)=>i.onChange(u),renderInput:o=>n.jsx(x,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!r.contacts}),renderTags:(o,u)=>o.map((C,v)=>R.createElement(E,{...u({index:v}),key:C.id,label:C.contactName}))})})})]})})]})})},gt=({interactions:t,isLoading:e,defaultValues:a})=>{const{mutate:s}=it(),{mutate:d}=ot(),{mutate:l}=st();return n.jsx(O,{data:t,getRowId:r=>r.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:r})=>n.jsx(K,{disablePadding:!0,children:r.getValue().map(i=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(E,{component:$,variant:"outlined",avatar:n.jsx(M,{...N(i.contactName)}),label:i.contactName,to:`/home/contacts/${i.id}`,clickable:!0,size:"small"})},i.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:r=>D(r.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:r})=>T(U(r.getValue()))}],renderEditRowDialogContent:({row:r,table:i})=>n.jsx(V,{table:i,row:r,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:ct,defaultValues:a}),onCreate:r=>s(r),onUpdate:r=>d(r),onDelete:r=>l(r)})},xt=()=>{const{data:t}=I(),e=t?et:J;return _({queryKey:["interactions"],queryFn:()=>e(),select:a=>{var s,d;return((d=(s=a.Interactions)==null?void 0:s.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{gt as I,xt as u};
//# sourceMappingURL=useInteractionsQueries-B8T16TZA.js.map
