import{w as Q,x as y,y as F,z as K,A as w,D as M,E as I,H as b,I as g,J as f,K as x,b as C,M as D,N as j,j as n,G as u,Q as h,m as E,r as R,C as T,U as A,V as G,L as N,W as $,X as O,Y as _}from"./index-CWQ8eE0T.js";import{D as V}from"./DataTable-DThZ1LoY.js";import{S as U}from"./SebraDialog-D2z048bb.js";import{f as S,t as W}from"./date-C0Nof1Fi.js";import{u as z,C as k}from"./index.esm-BRVawrCB.js";import{u as P}from"./useContactsQueries-DcDi3qVL.js";import{S as H,D as J,A as X}from"./SebraForm-CDQ2HkDB.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fcdc58af-2425-4843-9b6d-23e3dc16ba55",t._sentryDebugIdIdentifier="sentry-dbid-fcdc58af-2425-4843-9b6d-23e3dc16ba55")}catch{}})();const Y=async()=>{const[t,e,a]=await Promise.all([I("SELECT * FROM interactions"),I("SELECT * FROM contacts"),I("SELECT * FROM companies")]),c=t.map(s=>({...s,contacts:[]})),d=b(c,"id"),l=b(e,"id"),r=b(a,"id");return(await I("SELECT * FROM interaction_contacts")).forEach(s=>{const p=d.get(s.interactionId),m=l.get(s.contactId),q=r.get((m==null?void 0:m.company)||"");!p||!m||(p.contacts=p.contacts||[]).push({...m,company:q})}),{Interactions:{docs:Array.from(d.values())}}},B=async t=>{const e=await Q("interactions",y({...t,interactionId:F()},["id","interactionType","interactionDate","notes"]));return await L({id:e.id,contacts:t.contacts}),{createInteraction:e}},Z=async t=>{const e=await K("interactions",y(t,["interactionType","interactionDate","notes"]),y(t,["id"]));return await et(t),{updateInteraction:e}},tt=async({id:t})=>(await v({id:t}),await w("interactions",{id:t}),{deleteInteraction:{id:t}}),L=async t=>{await M("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},et=async t=>{await v(t),await L(t)},v=async({id:t})=>{await w("interaction_contacts",{interactionId:t})},nt=()=>g(f(`
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
    `))(),at=t=>{var e;return g(f(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:y({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},rt=t=>{var e;return g(f(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:y({...t,contacts:(e=t.contacts)==null?void 0:e.map(a=>a.id)},["interactionType","interactionDate","notes","contacts"])})},ot=t=>g(f(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),it=()=>{const t=x(),e=C(),{showSnackbar:a}=D();return j({mutationFn:t?B:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion sparat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle sparas.","error")}})},st=()=>{const t=x(),e=C(),{showSnackbar:a}=D();return j({mutationFn:t?Z:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion uppdaterat!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},ct=()=>{const t=x(),e=C(),{showSnackbar:a}=D();return j({mutationFn:t?tt:ot,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),a("Interaktion borttaget!")},onError:()=>{a("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},dt=({formProps:t,...e})=>{const{data:a=[]}=P(),{control:c,handleSubmit:d,register:l,formState:{errors:r}}=z(t);return n.jsx(H,{...e,handleSubmit:d,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...l("interactionType",{required:!0}),error:!!r.interactionType})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(h,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...l("notes"),error:!!r.notes})})]})}),n.jsx(u,{item:!0,xs:12,sm:6,children:n.jsxs(u,{container:!0,spacing:2,children:[n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{control:c,name:"interactionDate",rules:{required:!0},render:({field:o})=>n.jsx(J,{label:"Interaktionsdatum",value:E(o.value),inputRef:o.ref,onChange:i=>o.onChange(S(i))})})}),n.jsx(u,{item:!0,xs:12,children:n.jsx(k,{name:"contacts",control:c,render:({field:o})=>n.jsx(X,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:a,getOptionKey:i=>i.id,getOptionLabel:i=>i.contactName,isOptionEqualToValue:(i,s)=>i.id===s.id,value:o.value||[],onChange:(i,s)=>o.onChange(s),renderInput:i=>n.jsx(h,{...i,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!r.contacts}),renderTags:(i,s)=>i.map((p,m)=>R.createElement(T,{...s({index:m}),key:p.id,label:p.contactName}))})})})]})})]})})},ft=({interactions:t,isLoading:e,defaultValues:a})=>{const{mutate:c}=it(),{mutate:d}=st(),{mutate:l}=ct();return n.jsx(V,{data:t,getRowId:r=>r.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:r})=>n.jsx(A,{disablePadding:!0,children:r.getValue().map(o=>n.jsx(G,{sx:{py:.25},disableGutters:!0,children:n.jsx(T,{component:N,variant:"outlined",avatar:n.jsx($,{...O(o.contactName)}),label:o.contactName,to:`/home/contacts/${o.id}`,clickable:!0,size:"small"})},o.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorFn:r=>E(r.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:r})=>S(W(r.getValue()))}],renderEditRowDialogContent:({row:r,table:o})=>n.jsx(U,{table:o,row:r,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:dt,defaultValues:a}),onCreate:r=>c(r),onUpdate:r=>d(r),onDelete:r=>l(r)})},xt=()=>{const e=x()?Y:nt;return _({queryKey:["interactions"],queryFn:()=>e(),select:a=>{var c,d;return((d=(c=a.Interactions)==null?void 0:c.docs)==null?void 0:d.filter(l=>!!l))||[]}})};export{ft as I,xt as u};
//# sourceMappingURL=useInteractionsQueries-C_AsXgyU.js.map
