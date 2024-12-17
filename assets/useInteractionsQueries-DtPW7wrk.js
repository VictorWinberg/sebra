import{v as Q,w as y,x as F,y as R,z as w,A as K,D as I,E as x,H as g,I as b,J as f,K as D,M as C,N as j,j as n,G as u,Q as h,l as E,r as M,C as T,U as A,V as G,W as N,X as $,Y as O}from"./index-iZtWqYgx.js";import{D as _}from"./DataTable-xVWFB7wF.js";import{S as V,D as U,A as W,R as z}from"./RouterLink-3MrNFPeg.js";import{S as P}from"./SebraDialog-BuJGbSEg.js";import{f as S,t as H}from"./date-CUJGtOyG.js";import{u as J,C as k}from"./index.esm-C5WroAR9.js";import{u as X}from"./useContactsQueries-DDueEPJ9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="337e81bc-2d9e-4366-98fd-6728bcabaf41",t._sentryDebugIdIdentifier="sentry-dbid-337e81bc-2d9e-4366-98fd-6728bcabaf41")}catch{}})();const Y=async()=>{const[t,e,r]=await Promise.all([I("SELECT * FROM interactions"),I("SELECT * FROM contacts"),I("SELECT * FROM companies")]),c=t.map(s=>({...s,contacts:[]})),d=x(c,"id"),l=x(e,"id"),a=x(r,"id");return(await I("SELECT * FROM interaction_contacts")).forEach(s=>{const p=d.get(s.interactionId),m=l.get(s.contactId),q=a.get((m==null?void 0:m.company)||"");!p||!m||(p.contacts=p.contacts||[]).push({...m,company:q})}),{Interactions:{docs:Array.from(d.values())}}},B=async t=>{const e=await Q("interactions",y({...t,interactionId:F()},["id","interactionType","interactionDate","notes"]));return await L({id:e.id,contacts:t.contacts}),{createInteraction:e}},Z=async t=>{const e=await R("interactions",y(t,["interactionType","interactionDate","notes"]),y(t,["id"]));return await et(t),{updateInteraction:e}},tt=async({id:t})=>(await v({id:t}),await w("interactions",{id:t}),{deleteInteraction:{id:t}}),L=async t=>{await K("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},et=async t=>{await v(t),await L(t)},v=async({id:t})=>{await w("interaction_contacts",{interactionId:t})},nt=()=>g(b(`
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
    `))(),at=t=>g(b(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),rt=t=>g(b(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),ot=t=>g(b(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),it=()=>{const t=f(),e=D(),{showSnackbar:r}=C();return j({mutationFn:t?B:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion sparat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle sparas.","error")}})},st=()=>{const t=f(),e=D(),{showSnackbar:r}=C();return j({mutationFn:t?Z:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion uppdaterat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},ct=()=>{const t=f(),e=D(),{showSnackbar:r}=C();return j({mutationFn:t?tt:ot,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion borttaget!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},dt=({formProps:t,...e})=>{const{data:r=[]}=X(),{control:c,handleSubmit:d,register:l,formState:{errors:a}}=J(t);return n.jsx(V,{...e,handleSubmit:d,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!a.interactionType})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!a.notes})})]})}),n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{control:c,name:"interactionDate",rules:{required:!0},render:({field:o})=>n.jsx(U,{label:"Interaktionsdatum",value:E(o.value),inputRef:o.ref,onChange:i=>o.onChange(S(i))})})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{name:"contacts",control:c,render:({field:o})=>n.jsx(W,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:r,getOptionKey:i=>i.id,getOptionLabel:i=>i.contactName,isOptionEqualToValue:(i,s)=>i.id===s.id,value:o.value||[],onChange:(i,s)=>o.onChange(s),renderInput:i=>n.jsx(h,{...i,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!a.contacts}),renderTags:(i,s)=>i.map((p,m)=>M.createElement(T,{...s({index:m}),key:p.id,label:p.contactName}))})})})]})})]})})},bt=({interactions:t,isLoading:e,defaultValues:r})=>{const{mutate:c}=it(),{mutate:d}=st(),{mutate:l}=ct();return n.jsx(_,{data:t,getRowId:a=>a.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:a})=>n.jsx(A,{disablePadding:!0,children:a.getValue().map(o=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(T,{component:z,variant:"outlined",avatar:n.jsx(N,{...$(o.contactName)}),label:o.contactName,to:`/home/contacts/${o.id}`,clickable:!0,size:"small"})},o.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorKey:"interactionDate",accessorFn:a=>E(a.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>S(H(a.getValue()))}],renderEditRowDialogContent:({row:a,table:o})=>n.jsx(P,{table:o,row:a,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:dt,defaultValues:r}),onCreate:a=>c(a),onUpdate:a=>d(a),onDelete:a=>l(a)})},ft=()=>{const e=f()?Y:nt;return O({queryKey:["interactions"],queryFn:()=>e(),select:r=>{var c,d;return((d=(c=r.Interactions)==null?void 0:c.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{bt as I,ft as u};
//# sourceMappingURL=useInteractionsQueries-DtPW7wrk.js.map
