import{c as I,a as j,r as c,j as o,B as v,T as w,F as D,t as L}from"./index-D5HSxLJv.js";import{A as k}from"./AssignmentTable-DmxUP2BQ.js";import{u as T}from"./useAssignmentsQueries-BAyplcJ1.js";import{u as A,I as F}from"./useInteractionsQueries-0RmK9BuX.js";import{C as B}from"./ContentTabs-BuOgUJkI.js";import{F as E}from"./RouterLink-Cm85W6HA.js";import{f as S}from"./date-q-6tpqH0.js";import{u as _,a as $,b as H,C as M}from"./useContactsMutations-Dxvamaw0.js";import{a as P}from"./useContactsQueries-C98tMmR-.js";import"./DataTable-D8I0w8R9.js";import"./useQueryParam-CG8lorE9.js";import"./Tooltip-BvkcuRG1.js";import"./SebraDialog-Gverw9xY.js";import"./createStyled-qqlkl0KQ.js";import"./useAssignmentsMutations-Dpah5EqK.js";import"./index.esm-BCRtL592.js";import"./useCompaniesQueries-CaroGw57.js";import"./Link-DaiCtSnD.js";import"./Tabs-DE-ZlQie.js";import"./MoreHoriz-B1yEgnm8.js";import"./FormControlLabel-DYpKF7ST.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0c07be9a-10bc-4aaa-944d-0828d0c692f6",e._sentryDebugIdIdentifier="sentry-dbid-0c07be9a-10bc-4aaa-944d-0828d0c692f6")}catch{}})();const it=()=>{const{id:e,workspace:n}=I(),i=j(),{data:t,isLoading:p}=P(e==="new"?void 0:e),{mutate:l}=_(),{mutate:u}=$(),{mutate:f}=H(),{data:m=[],isLoading:g}=T(),b=c.useMemo(()=>m.filter(a=>{var s,r;return((s=a.responsibleContacts)==null?void 0:s.some(y=>y.id===(t==null?void 0:t.id)))||((r=a.externalContact)==null?void 0:r.id)===(t==null?void 0:t.id)}),[m,t]),{data:d=[],isLoading:x}=A(),C=c.useMemo(()=>d.filter(a=>{var s;return(s=a.contacts)==null?void 0:s.some(r=>r.id===(t==null?void 0:t.id))}),[d,t]),h=a=>{t?u({...a,id:t.id}):l(a,{onSuccess:({createContact:s})=>i(`/${n}/home/contacts/${(s==null?void 0:s.id)||""}`)})};if(!p)return o.jsx(M,{formProps:{values:t},onSubmit:h,renderTopContent:()=>o.jsxs(v,{sx:{position:"relative",mt:1,mb:3},children:[o.jsx(w,{variant:"h4",color:"primary",children:t?"Redigera kontakt":"Lägg till kontakt"}),o.jsx(E,{sx:{position:"absolute",top:0,right:0},onDelete:t?()=>f(t,{onSuccess:()=>i("..")}):void 0,onCancel:()=>i(-1)})]}),renderBottomContent:()=>t&&o.jsx(D,{sx:{mt:1,minHeight:`calc(100vh - ${L}px - 1rem)`},children:o.jsx(B,{tabs:[{id:"interactions",label:"Interaktioner",content:o.jsx(F,{interactions:C,isLoading:x,defaultValues:{contacts:[t],interactionDate:S()}})},{id:"assignments",label:"Uppdrag",content:o.jsx(k,{assignments:b,isLoading:g})}]})})})};export{it as default};
//# sourceMappingURL=ContactEdit-RYc2HZMq.js.map
