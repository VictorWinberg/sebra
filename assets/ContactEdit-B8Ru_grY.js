import{l as C,g as h,r as d,j as s,B as I,T as y,F as j,m as v}from"./index-FssDv7LW.js";import{A as D}from"./AssignmentTable-CXXw2nDO.js";import{u as L}from"./useAssignmentsQueries-cBAqmJor.js";import{u as w,I as k}from"./useInteractionsQueries-Bi1Er666.js";import{C as T}from"./ContentTabs-B-DN5VR_.js";import{F as A}from"./SebraForm-CHd36EfM.js";import{f as F}from"./date-BhJCHOTD.js";import{u as B,a as E,b as S,C as _}from"./useContactsMutations-BYiec10P.js";import{a as H}from"./useContactsQueries-B7hTPA4C.js";import"./DataTable-BHmh57m2.js";import"./useQueryParam-BFPdhiEV.js";import"./Tooltip-CRgNR65U.js";import"./SebraDialog-ItKfkUVs.js";import"./useAssignmentsMutations-Cwvh-2Ix.js";import"./index.esm-CuAyuT5m.js";import"./useCompaniesQueries-CiA-WbpT.js";import"./Tabs-HVe84a-j.js";import"./MoreHoriz-B1DyK4sx.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="bd4c43bd-45d6-47f7-a4f0-1a7e33fdbc6e",e._sentryDebugIdIdentifier="sentry-dbid-bd4c43bd-45d6-47f7-a4f0-1a7e33fdbc6e")}catch{}})();const tt=()=>{const e=C(),a=h(),{data:t,isLoading:m}=H(e.id==="new"?void 0:e.id),{mutate:c}=B(),{mutate:l}=E(),{mutate:p}=S(),{data:i=[],isLoading:u}=L(),f=d.useMemo(()=>i.filter(o=>o.responsibleContacts.some(n=>n.id===(t==null?void 0:t.id))||o.externalContactId===(t==null?void 0:t.id)),[i,t]),{data:r=[],isLoading:g}=w(),b=d.useMemo(()=>r.filter(o=>o.contacts.some(n=>n.id===(t==null?void 0:t.id))),[r,t]),x=o=>{t?l(o):c(o,{onSuccess:n=>a(`/home/contacts/${n.id}`)})};if(!m)return s.jsx(_,{formProps:{values:t},onSubmit:x,renderTopContent:()=>s.jsxs(I,{sx:{position:"relative",mt:1,mb:3},children:[s.jsx(y,{variant:"h4",color:"primary",children:t?"Redigera kontakt":"Lägg till kontakt"}),s.jsx(A,{sx:{position:"absolute",top:0,right:0},onDelete:t?()=>p(t,{onSuccess:()=>a("..")}):void 0,onCancel:()=>a(-1)})]}),renderBottomContent:()=>t&&s.jsx(j,{sx:{mt:1,minHeight:`calc(100vh - ${v}px - 1rem)`},children:s.jsx(T,{tabs:[{id:"interactions",label:"Interaktioner",content:s.jsx(k,{interactions:b,isLoading:g,defaultValues:{contacts:[t],interactionDate:F()}})},{id:"assignments",label:"Uppdrag",content:s.jsx(D,{assignments:f,isLoading:u})}]})})})};export{tt as default};
//# sourceMappingURL=ContactEdit-B8Ru_grY.js.map