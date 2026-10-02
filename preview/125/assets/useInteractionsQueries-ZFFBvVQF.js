import{K as F,M as y,N as R,Q as K,R as E,U as M,V as I,W as b,X as g,Y as x,Z as f,$ as D,a0 as j,a1 as k,j as n,G as u,a2 as h,y as T,r as $,C as S,J as C,a3 as A,a4 as G,a5 as N,a6 as O,a7 as _}from"./index-CUwKYY9V.js";import{D as V}from"./useAppPath-Cmrgruy3.js";import{S as U,D as W,A as P,R as z}from"./RouterLink-Das3N9fX.js";import{S as B}from"./SebraDialog-D3IhxAfS.js";import{f as L,t as J}from"./date-B40PYk-F.js";import{u as X,C as w}from"./index.esm-BwAsD9j_.js";import{u as Y}from"./useContactsQueries-D8Z7RQzf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7d982c96-3f8a-4dc2-9a6d-9bad8a9171d4",t._sentryDebugIdIdentifier="sentry-dbid-7d982c96-3f8a-4dc2-9a6d-9bad8a9171d4")}catch{}})();const Z=async()=>{const[t,e,r]=await Promise.all([I("SELECT * FROM interactions"),I("SELECT * FROM contacts"),I("SELECT * FROM companies")]),c=t.map(s=>({...s,contacts:[]})),d=b(c,"id"),l=b(e,"id"),a=b(r,"id");return(await I("SELECT * FROM interaction_contacts")).forEach(s=>{const p=d.get(s.interactionId),m=l.get(s.contactId),Q=a.get((m==null?void 0:m.company)||"");!p||!m||(p.contacts=p.contacts||[]).push({...m,company:Q})}),{Interactions:{docs:Array.from(d.values())}}},H=async t=>{const e=await F("interactions",y({...t,interactionId:R()},["id","interactionType","interactionDate","notes"]));return await q({id:e.id,contacts:t.contacts}),{createInteraction:e}},tt=async t=>{const e=await K("interactions",y(t,["interactionType","interactionDate","notes"]),y(t,["id"]));return await nt(t),{updateInteraction:e}},et=async({id:t})=>(await v({id:t}),await E("interactions",{id:t}),{deleteInteraction:{id:t}}),q=async t=>{await M("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},nt=async t=>{await v(t),await q(t)},v=async({id:t})=>{await E("interaction_contacts",{interactionId:t})},at=()=>g(x(`
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
    `))(),rt=t=>g(x(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),it=t=>g(x(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),ot=t=>g(x(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),st=()=>{const t=f(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?H:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion sparat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle sparas.","error")}})},ct=()=>{const t=f(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?tt:it,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion uppdaterat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},dt=()=>{const t=f(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?et:ot,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion borttaget!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},ut=({formProps:t,...e})=>{const{data:r=[]}=Y(),{control:c,handleSubmit:d,register:l,formState:{errors:a}}=X(t);return n.jsx(U,{...e,handleSubmit:d,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!a.interactionType})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!a.notes})})]})}),n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(w,{control:c,name:"interactionDate",rules:{required:!0},render:({field:i})=>n.jsx(W,{label:"Interaktionsdatum",value:T(i.value),inputRef:i.ref,onChange:o=>i.onChange(L(o))})})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(w,{name:"contacts",control:c,render:({field:i})=>n.jsx(P,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:r,getOptionKey:o=>o.id,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,s)=>o.id===s.id,value:C(i.value||[],"id"),onChange:(o,s)=>i.onChange(C(s,"id")),renderInput:o=>n.jsx(h,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!a.contacts}),renderTags:(o,s)=>o.map((p,m)=>$.createElement(S,{...s({index:m}),key:p.id,label:p.contactName}))})})})]})})]})})},ft=({interactions:t,isLoading:e,defaultValues:r})=>{const{mutate:c}=st(),{mutate:d}=ct(),{mutate:l}=dt();return n.jsx(V,{data:t,getRowId:a=>a.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:a})=>n.jsx(A,{disablePadding:!0,children:C(a.getValue(),"id").map(i=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(S,{component:z,variant:"outlined",avatar:n.jsx(N,{...O(i.contactName)}),label:i.contactName,to:`/home/contacts/${i.id}`,clickable:!0,size:"small"})},i.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorKey:"interactionDate",accessorFn:a=>T(a.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>L(J(a.getValue()))}],renderEditRowDialogContent:({row:a,table:i})=>n.jsx(B,{table:i,row:a,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:ut,defaultValues:r}),onCreate:a=>c(a),onUpdate:a=>d(a),onDelete:a=>l(a)})},bt=()=>{const e=f()?Z:at;return _({queryKey:["interactions"],queryFn:()=>e(),select:r=>{var c,d;return((d=(c=r.Interactions)==null?void 0:c.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{ft as I,bt as u};
//# sourceMappingURL=useInteractionsQueries-ZFFBvVQF.js.map
