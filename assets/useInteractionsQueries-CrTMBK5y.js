import{J as Q,K as y,M as F,N as R,Q as w,R as K,U as I,V as f,W as g,X as x,Y as b,Z as C,$ as D,a0 as j,j as n,G as u,a1 as h,y as E,r as M,C as T,a2 as $,a3 as A,a4 as G,a5 as N,a6 as O}from"./index-CorYgUFq.js";import{D as _}from"./useAppPath-BqPsKRQB.js";import{S as V,D as U,A as W,R as P}from"./RouterLink-C87W2i7h.js";import{S as z}from"./SebraDialog-B9Cabu9p.js";import{f as S,t as J}from"./date-C8o2QFJe.js";import{u as X,C as k}from"./index.esm-gJ4NRtab.js";import{u as Y}from"./useContactsQueries-CFufTRBr.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ee0ad65a-7cdc-40b5-9522-4610c725a023",t._sentryDebugIdIdentifier="sentry-dbid-ee0ad65a-7cdc-40b5-9522-4610c725a023")}catch{}})();const Z=async()=>{const[t,e,r]=await Promise.all([I("SELECT * FROM interactions"),I("SELECT * FROM contacts"),I("SELECT * FROM companies")]),c=t.map(s=>({...s,contacts:[]})),d=f(c,"id"),l=f(e,"id"),a=f(r,"id");return(await I("SELECT * FROM interaction_contacts")).forEach(s=>{const p=d.get(s.interactionId),m=l.get(s.contactId),q=a.get((m==null?void 0:m.company)||"");!p||!m||(p.contacts=p.contacts||[]).push({...m,company:q})}),{Interactions:{docs:Array.from(d.values())}}},B=async t=>{const e=await Q("interactions",y({...t,interactionId:F()},["id","interactionType","interactionDate","notes"]));return await L({id:e.id,contacts:t.contacts}),{createInteraction:e}},H=async t=>{const e=await R("interactions",y(t,["interactionType","interactionDate","notes"]),y(t,["id"]));return await et(t),{updateInteraction:e}},tt=async({id:t})=>(await v({id:t}),await w("interactions",{id:t}),{deleteInteraction:{id:t}}),L=async t=>{await K("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},et=async t=>{await v(t),await L(t)},v=async({id:t})=>{await w("interaction_contacts",{interactionId:t})},nt=()=>g(x(`
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
    `))(),at=t=>g(x(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),rt=t=>g(x(`
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
    `))({id:t.id}),it=()=>{const t=b(),e=C(),{showSnackbar:r}=D();return j({mutationFn:t?B:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion sparat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle sparas.","error")}})},st=()=>{const t=b(),e=C(),{showSnackbar:r}=D();return j({mutationFn:t?H:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion uppdaterat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},ct=()=>{const t=b(),e=C(),{showSnackbar:r}=D();return j({mutationFn:t?tt:ot,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion borttaget!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},dt=({formProps:t,...e})=>{const{data:r=[]}=Y(),{control:c,handleSubmit:d,register:l,formState:{errors:a}}=X(t);return n.jsx(V,{...e,handleSubmit:d,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!a.interactionType})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!a.notes})})]})}),n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{control:c,name:"interactionDate",rules:{required:!0},render:({field:o})=>n.jsx(U,{label:"Interaktionsdatum",value:E(o.value),inputRef:o.ref,onChange:i=>o.onChange(S(i))})})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{name:"contacts",control:c,render:({field:o})=>n.jsx(W,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:r,getOptionKey:i=>i.id,getOptionLabel:i=>i.contactName,isOptionEqualToValue:(i,s)=>i.id===s.id,value:o.value||[],onChange:(i,s)=>o.onChange(s),renderInput:i=>n.jsx(h,{...i,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!a.contacts}),renderTags:(i,s)=>i.map((p,m)=>M.createElement(T,{...s({index:m}),key:p.id,label:p.contactName}))})})})]})})]})})},xt=({interactions:t,isLoading:e,defaultValues:r})=>{const{mutate:c}=it(),{mutate:d}=st(),{mutate:l}=ct();return n.jsx(_,{data:t,getRowId:a=>a.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:a})=>n.jsx($,{disablePadding:!0,children:a.getValue().map(o=>n.jsx(A,{sx:{py:.25},disableGutters:!0,children:n.jsx(T,{component:P,variant:"outlined",avatar:n.jsx(G,{...N(o.contactName)}),label:o.contactName,to:`/home/contacts/${o.id}`,clickable:!0,size:"small"})},o.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorKey:"interactionDate",accessorFn:a=>E(a.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>S(J(a.getValue()))}],renderEditRowDialogContent:({row:a,table:o})=>n.jsx(z,{table:o,row:a,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:dt,defaultValues:r}),onCreate:a=>c(a),onUpdate:a=>d(a),onDelete:a=>l(a)})},bt=()=>{const e=b()?Z:nt;return O({queryKey:["interactions"],queryFn:()=>e(),select:r=>{var c,d;return((d=(c=r.Interactions)==null?void 0:c.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{xt as I,bt as u};
//# sourceMappingURL=useInteractionsQueries-CrTMBK5y.js.map
