import{J as Q,K as y,M as F,N as R,Q as E,R as K,U as I,V as b,W as g,X as f,Y as x,Z as D,$ as j,a0 as k,j as n,G as l,a1 as C,y as S,r as M,C as T,a2 as $,a3 as A,a4 as G,a5 as N,a6 as O}from"./index-BU-FP4uR.js";import{D as _}from"./useAppPath-qy8gizDI.js";import{S as V,D as U,A as W,R as P}from"./RouterLink-B_NtoHrg.js";import{S as z}from"./SebraDialog-DEyvBjfC.js";import{f as L,t as J}from"./date-CFV8O6eG.js";import{u as X,C as w}from"./index.esm-DHtDeTp6.js";import{u as Y}from"./useContactsQueries-C4Tj9WT4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7cf4a98c-d763-4714-9c3a-fec44883aea0",t._sentryDebugIdIdentifier="sentry-dbid-7cf4a98c-d763-4714-9c3a-fec44883aea0")}catch{}})();const Z=async()=>{const[t,e,r]=await Promise.all([I("SELECT * FROM interactions"),I("SELECT * FROM contacts"),I("SELECT * FROM companies")]),d=t.map(c=>({...c,contacts:[]})),u=b(d,"id"),m=b(e,"id"),a=b(r,"id");return(await I("SELECT * FROM interaction_contacts")).forEach(c=>{const p=u.get(c.interactionId),s=m.get(c.contactId),h=a.get((s==null?void 0:s.company)||"");!p||!s||(p.contacts=p.contacts||[]).push({...s,company:h})}),{Interactions:{docs:Array.from(u.values())}}},B=async t=>{const e=await Q("interactions",y({...t,interactionId:F()},["id","interactionType","interactionDate","notes"]));return await v({id:e.id,contacts:t.contacts}),{createInteraction:e}},H=async t=>{const e=await R("interactions",y(t,["interactionType","interactionDate","notes"]),y(t,["id"]));return await et(t),{updateInteraction:e}},tt=async({id:t})=>(await q({id:t}),await E("interactions",{id:t}),{deleteInteraction:{id:t}}),v=async t=>{await K("interaction_contacts",(t.contacts||[]).map(({id:e})=>({interactionId:t.id,contactId:e})))},et=async t=>{await q(t),await v(t)},q=async({id:t})=>{await E("interaction_contacts",{interactionId:t})},nt=()=>g(f(`
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
    `))(),at=t=>g(f(`
      mutation CreateInteraction($data: mutationInteractionInput!) {
        createInteraction(data: $data) {
          id
        }
      }
    `))({data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),rt=t=>g(f(`
      mutation UpdateInteraction($id: String!, $data: mutationInteractionUpdateInput!) {
        updateInteraction(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:y({...t,contacts:(t.contacts||[]).map(e=>e.id)},["interactionType","interactionDate","notes","contacts"])}),it=t=>g(f(`
      mutation DeleteInteraction($id: String!) {
        deleteInteraction(id: $id) {
          id
        }
      }
    `))({id:t.id}),ot=()=>{const t=x(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?B:at,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion sparat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle sparas.","error")}})},st=()=>{const t=x(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?H:rt,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion uppdaterat!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle uppdateras.","error")}})},ct=()=>{const t=x(),e=D(),{showSnackbar:r}=j();return k({mutationFn:t?tt:it,onSuccess:()=>{e.invalidateQueries({queryKey:["interactions"]}),r("Interaktion borttaget!")},onError:()=>{r("Ett fel uppstod när interaktionen skulle tas bort.","error")}})},dt=({formProps:t,...e})=>{const{data:r=[]}=Y(),{control:d,handleSubmit:u,register:m,formState:{errors:a}}=X(t);return n.jsx(V,{...e,handleSubmit:u,children:n.jsxs(l,{container:!0,spacing:2,children:[n.jsx(l,{item:!0,xs:12,sm:6,children:n.jsxs(l,{container:!0,spacing:2,children:[n.jsx(l,{item:!0,xs:12,children:n.jsx(C,{fullWidth:!0,label:"Typ av interaktion",type:"text",margin:"none",...m("interactionType",{required:!0}),error:!!a.interactionType})}),n.jsx(l,{item:!0,xs:12,children:n.jsx(C,{multiline:!0,fullWidth:!0,minRows:4,label:"Noteringar",type:"text",margin:"none",...m("notes"),error:!!a.notes})})]})}),n.jsx(l,{item:!0,xs:12,sm:6,children:n.jsxs(l,{container:!0,spacing:2,children:[n.jsx(l,{item:!0,xs:12,children:n.jsx(w,{control:d,name:"interactionDate",rules:{required:!0},render:({field:i})=>n.jsx(U,{label:"Interaktionsdatum",value:S(i.value),inputRef:i.ref,onChange:o=>i.onChange(L(o))})})}),n.jsx(l,{item:!0,xs:12,children:n.jsx(w,{name:"contacts",control:d,render:({field:i})=>n.jsx(W,{multiple:!0,disableCloseOnSelect:!0,id:"multiple-contacts",options:r,getOptionKey:o=>o.id,getOptionLabel:o=>o.contactName,isOptionEqualToValue:(o,c)=>o.id===c.id,value:i.value||[],onChange:(o,c)=>i.onChange(c),renderInput:o=>n.jsx(C,{...o,label:"Kontakter",variant:"outlined",fullWidth:!0,error:!!a.contacts}),renderTags:(o,c)=>{const p=new Set;return o.filter(s=>p.has(s.id)?!1:(p.add(s.id),!0)).map((s,h)=>M.createElement(T,{...c({index:h}),key:s.id,label:s.contactName}))}})})})]})})]})})},ft=({interactions:t,isLoading:e,defaultValues:r})=>{const{mutate:d}=ot(),{mutate:u}=st(),{mutate:m}=ct();return n.jsx(_,{data:t,getRowId:a=>a.id,state:{isLoading:e},columns:[{accessorKey:"interactionType",header:"Typ",filterVariant:"multi-select"},{accessorKey:"contacts",header:"Kontakter",minSize:150,enableEditing:!1,Cell:({cell:a})=>n.jsx($,{disablePadding:!0,children:[...new Map(a.getValue().map(i=>[i.id,i])).values()].map(i=>n.jsx(A,{sx:{py:.25},disableGutters:!0,children:n.jsx(T,{component:P,variant:"outlined",avatar:n.jsx(G,{...N(i.contactName)}),label:i.contactName,to:`/home/contacts/${i.id}`,clickable:!0,size:"small"})},i.id))})},{accessorKey:"notes",header:"Noteringar"},{accessorKey:"interactionDate",accessorFn:a=>S(a.interactionDate),header:"Interaktionsdatum",filterVariant:"date-range",enableEditing:!1,Cell:({cell:a})=>L(J(a.getValue()))}],renderEditRowDialogContent:({row:a,table:i})=>n.jsx(z,{table:i,row:a,titles:{creating:"Ny interaktion",editing:"Redigera interaktion"},FormComponent:dt,defaultValues:r}),onCreate:a=>d(a),onUpdate:a=>u(a),onDelete:a=>m(a)})},xt=()=>{const e=x()?Z:nt;return O({queryKey:["interactions"],queryFn:()=>e(),select:r=>{var d,u;return((u=(d=r.Interactions)==null?void 0:d.docs)==null?void 0:u.filter(m=>!!m))||[]}})};export{ft as I,xt as u};
//# sourceMappingURL=useInteractionsQueries-DlujWWVA.js.map
