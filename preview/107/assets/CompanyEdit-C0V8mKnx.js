import{j as a,h as y,L as C,k as b,l as h,r as x,B as I,T as j,F as D,m as L}from"./index-Dl4XAGHA.js";import{A as k}from"./AssignmentTable-CumkCJr0.js";import{u as v}from"./useAssignmentsQueries-DGTiaBcs.js";import{D as w}from"./DataTable-KrIayMax.js";import{S as T}from"./SebraDialog-DuIQz_h4.js";import{u as F,a as E,b as S,C as A}from"./useContactsMutations-DaJq3ZWi.js";import{u as K}from"./useContactsQueries-BSwGKqDL.js";import{C as R}from"./ContentTabs-C3K3dZpX.js";import{F as $}from"./SebraForm-Buo_nVLS.js";import{u as B,a as N,b as U,C as _}from"./useCompaniesMutations-BBSaPpbV.js";import{a as V}from"./useCompaniesQueries-D5QFk1VV.js";import"./useAssignmentsMutations-Cr10V4cH.js";import"./index.esm-CNmaJeLN.js";import"./useQueryParam-OOHpWbWx.js";import"./Tooltip-BgxD-eQP.js";import"./Tabs-BnkWJ6vk.js";import"./MoreHoriz-DDxmLduF.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new o.Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="11320083-df80-407e-a19a-d837053cfdc4",o._sentryDebugIdIdentifier="sentry-dbid-11320083-df80-407e-a19a-d837053cfdc4")}catch{}})();const H=({contacts:o,isLoading:n,defaultValues:t})=>{const{mutate:i}=F(),{mutate:m}=E(),{mutate:c}=S();return a.jsx(w,{data:o,getRowId:e=>`${e.contactId}`,state:{isLoading:n},columns:[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:r})=>a.jsx(y,{component:C,to:`/home/contacts/${r.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"phone",header:"Telefonnummer"}],renderEditRowDialogContent:({row:e,table:r})=>a.jsx(T,{table:r,row:e,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:A,defaultValues:t}),onCreate:e=>i(e),onUpdate:e=>m(e),onDelete:e=>c(e)})},st=()=>{const o=b(),n=h(),{data:t,isLoading:i}=V(o.id==="new"?void 0:Number(o.id)),{mutate:m}=B(),{mutate:c}=N(),{mutate:e}=U(),{data:r=[],isLoading:l}=K(),{data:d=[],isLoading:p}=v(),u=x.useMemo(()=>d.filter(s=>s.companyId===(t==null?void 0:t.companyId)),[d,t]),g=s=>{t?c(s):m(s,{onSuccess:f=>n(`/home/companies/${f.companyId}`)})};if(!i)return a.jsx(a.Fragment,{children:a.jsx(_,{formProps:{values:t},onSubmit:g,renderTopContent:()=>a.jsxs(I,{sx:{position:"relative",mt:1,mb:3},children:[a.jsx(j,{variant:"h4",color:"primary",children:t?"Redigera bolag":"Lägg till bolag"}),a.jsx($,{sx:{position:"absolute",top:0,right:0},onDelete:t?()=>e(t,{onSuccess:()=>n("..")}):void 0,onCancel:()=>n(-1)})]}),renderBottomContent:()=>t&&a.jsx(D,{sx:{mt:1,minHeight:`calc(100vh - ${L}px - 1rem)`},children:a.jsx(R,{tabs:[{id:"contacts",label:"Kontakter",content:a.jsx(H,{contacts:r.filter(s=>s.companyId===t.companyId),isLoading:l,defaultValues:{companyId:t.companyId}})},{id:"assignments",label:"Uppdrag",content:a.jsx(k,{assignments:u,isLoading:p,defaultValues:{companyId:t.companyId}})}]})})})})};export{st as default};
//# sourceMappingURL=CompanyEdit-C0V8mKnx.js.map
