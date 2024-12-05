import{r as f,j as s,L as b,h as D,o as y,m as x,p as h,B as C,T as j,F as I,q as v}from"./index-CQXllPov.js";import{D as L}from"./DataTable-C1UAZP9X.js";import{S as R}from"./SebraDialog-j9DxFqgF.js";import{f as g,t as T}from"./date-oavHzzO-.js";import{u as A,a as F,b as S,c as k,d as w,D as E}from"./DocumentForm-BA02bBC2.js";import{L as B}from"./Link-BQQg2dM6.js";import{u as V,I as _}from"./useInteractionsQueries-BP6yjYQp.js";import{C as $}from"./ContentTabs-D6S-RK6N.js";import{F as q}from"./SebraForm-BPJeAP95.js";import{u as K,a as U,b as H,A as M}from"./useAssignmentsMutations-BZPGowSc.js";import{a as N}from"./useAssignmentsQueries-LgMqi5il.js";import"./useQueryParam-D0EZVmQI.js";import"./Tooltip-S3pwjewZ.js";import"./createStyled-CIsPyFlF.js";import"./index.esm-zU6ujzlG.js";import"./useContactsQueries-C59xtDNc.js";import"./Tabs-C2Ut9fXO.js";import"./MoreHoriz-Yh2HtFJq.js";import"./FormControlLabel-a_E77a3c.js";import"./useCompaniesQueries-Bjb0g2s6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="b1f14b54-27ae-453f-ada8-fc2892d1a03f",n._sentryDebugIdIdentifier="sentry-dbid-b1f14b54-27ae-453f-ada8-fc2892d1a03f")}catch{}})();const P=({defaultValues:n,where:o})=>{const{data:t=[],isLoading:m}=A(o),d=f.useMemo(()=>t.map(e=>e.document),[t]),{mutate:c}=F(),{mutate:u}=S(),{mutate:r}=k(),{mutate:l}=w();if(!m)return s.jsx(L,{data:d,getRowId:e=>e.id,state:{isLoading:m},columns:[{accessorKey:"alt",header:"Dokumentnamn",Cell:({cell:e,row:a})=>s.jsx(B,{component:b,to:`/documents/${a.original.id}`,children:e.getValue()})},{accessorKey:"mimeType",header:"Filtyp",enableEditing:!1},{accessorKey:"updatedAt",accessorFn:e=>D(e.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:e})=>g(T(e.getValue()))}],renderEditRowDialogContent:({row:e,table:a})=>s.jsx(R,{table:a,row:e,titles:{creating:"Nytt dokument",editing:"Redigera dokument"},FormComponent:E}),onCreate:e=>{e.upload?c(e,{onSuccess:a=>r({...n,document:a.doc})}):r({...n,document:e})},onUpdate:e=>u(e),onDelete:e=>l(t.find(a=>a.document.id===e.id))})},ue=()=>{const n=y(),o=x(),{data:t,isLoading:m}=N(n.id==="new"?void 0:n.id),{mutate:d}=K(),{mutate:c}=U(),{mutate:u}=H(),{data:r=[],isLoading:l}=V(),e=f.useMemo(()=>r.filter(i=>h(i.contacts||[],(t==null?void 0:t.responsibleContacts)||[],"id").length>0),[r,t]),a=i=>{t?c({...i,id:t.id}):d(i,{onSuccess:({createAssignment:p})=>o(`/home/assignments/${(p==null?void 0:p.id)||""}`)})};if(!m)return s.jsx(M,{formProps:{values:t},onSubmit:a,renderTopContent:()=>s.jsxs(C,{sx:{position:"relative",mt:1,mb:3},children:[s.jsx(j,{variant:"h4",color:"primary",children:t?"Redigera uppdrag":"Lägg till uppdrag"}),s.jsx(q,{sx:{position:"absolute",top:0,right:0},onDelete:t?()=>u(t,{onSuccess:()=>o("..")}):void 0,onCancel:()=>o(-1)})]}),renderBottomContent:()=>t&&s.jsx(I,{sx:{mt:1,minHeight:`calc(100vh - ${v}px - 1rem)`},children:s.jsx($,{tabs:[{id:"interactions",label:"Interaktioner",content:s.jsx(_,{interactions:e,isLoading:l,defaultValues:{contacts:[...t.responsibleContacts||[],t.externalContact].filter(i=>!!i),interactionDate:g()}})},{id:"documents",label:"Dokument",content:s.jsx(P,{defaultValues:{entityId:t.id,entityType:"assignment"},where:{entityId:{equals:t.id},entityType:{equals:"assignment"}}})}]})})})};export{ue as default};
//# sourceMappingURL=AssignmentEdit-3R8HlAkN.js.map
