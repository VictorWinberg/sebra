import{r as f,j as s,l as b,c as y,a as x,q as h,B as C,T as j,F as I,t as R}from"./index-CRQtTFeB.js";import{D as v}from"./DataTable-D-wkhD9T.js";import{R as T,F as A}from"./RouterLink-CfTkR45v.js";import{S as L}from"./SebraDialog-BUUlSUNI.js";import{f as g,t as k}from"./date-CxeWqSFK.js";import{u as w,a as F,b as S,c as E,d as B,D as V}from"./DocumentForm-CegM6jOf.js";import{L as _}from"./Link-CIpQKzf4.js";import{u as $,I as q}from"./useInteractionsQueries-BIVbhqhg.js";import{C as K}from"./ContentTabs-BiR89ers.js";import{u as U,a as H,b as M,A as N}from"./useAssignmentsMutations-AX9YLcDs.js";import{a as P}from"./useAssignmentsQueries-Bz7jVUWg.js";import"./useQueryParam-BXXp9-zJ.js";import"./Tooltip-Bt20xkBH.js";import"./MoreHoriz-BJRxIa9e.js";import"./index.esm-CyFsOf7j.js";import"./createStyled-BlBvDNY1.js";import"./FormControlLabel-dvIrrBuo.js";import"./Tabs-B9aX1ZeO.js";import"./useContactsQueries-DQDJT1zt.js";import"./useCompaniesQueries-BKpFOc0v.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="fadc709d-f344-4f3a-904a-fef603c80003",n._sentryDebugIdIdentifier="sentry-dbid-fadc709d-f344-4f3a-904a-fef603c80003")}catch{}})();const G=({defaultValues:n,where:i})=>{const{data:o=[],isLoading:t}=w(i),m=f.useMemo(()=>o.map(e=>e.document),[o]),{mutate:u}=F(),{mutate:l}=S(),{mutate:c}=E(),{mutate:d}=B();if(!t)return s.jsx(v,{data:m,getRowId:e=>e.id,state:{isLoading:t},columns:[{accessorKey:"alt",header:"Dokumentnamn",Cell:({cell:e,row:a})=>s.jsx(_,{component:T,to:`/documents/${a.original.id}`,children:e.getValue()})},{accessorKey:"mimeType",header:"Filtyp",enableEditing:!1},{accessorKey:"updatedAt",accessorFn:e=>b(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>g(k(e.getValue()))}],renderEditRowDialogContent:({row:e,table:a})=>s.jsx(L,{table:a,row:e,titles:{creating:"Nytt dokument",editing:"Redigera dokument"},FormComponent:V}),onCreate:e=>{e.upload?u(e,{onSuccess:a=>c({...n,document:a.doc})}):c({...n,document:e})},onUpdate:e=>l(e),onDelete:e=>d(o.find(a=>a.document.id===e.id))})},le=()=>{const{id:n,workspace:i}=y(),o=x(),{data:t,isLoading:m}=P(n==="new"?void 0:n),{mutate:u}=U(),{mutate:l}=H(),{mutate:c}=M(),{data:d=[],isLoading:e}=$(),a=f.useMemo(()=>d.filter(r=>h(r.contacts||[],(t==null?void 0:t.responsibleContacts)||[],"id").length>0),[d,t]),D=r=>{t?l({...r,id:t.id}):u(r,{onSuccess:({createAssignment:p})=>o(`/${i}/home/assignments/${(p==null?void 0:p.id)||""}`)})};if(!m)return s.jsx(N,{formProps:{values:t},onSubmit:D,renderTopContent:()=>s.jsxs(C,{sx:{position:"relative",mt:1,mb:3},children:[s.jsx(j,{variant:"h4",color:"primary",children:t?"Redigera uppdrag":"Lägg till uppdrag"}),s.jsx(A,{sx:{position:"absolute",top:0,right:0},onDelete:t?()=>c(t,{onSuccess:()=>o("..")}):void 0,onCancel:()=>o(-1)})]}),renderBottomContent:()=>t&&s.jsx(I,{sx:{mt:1,minHeight:`calc(100vh - ${R}px - 1rem)`},children:s.jsx(K,{tabs:[{id:"interactions",label:"Interaktioner",content:s.jsx(q,{interactions:a,isLoading:e,defaultValues:{contacts:[...t.responsibleContacts||[],t.externalContact].filter(r=>!!r),interactionDate:g()}})},{id:"documents",label:"Dokument",content:s.jsx(G,{defaultValues:{entityId:t.id,entityType:"assignment"},where:{entityId:{equals:t.id},entityType:{equals:"assignment"}}})}]})})})};export{le as default};
//# sourceMappingURL=AssignmentEdit-BbaMS16A.js.map