import{j as t,g as h,L as y,i as j,k as b,r as f,B as k,S as I,f as p,l as v,T,m as L}from"./index-BrEZVVZU.js";import{A as D}from"./AssignmentTable-CKDJ47H-.js";import{u as S}from"./useAssignmentsQueries-D2drvRIb.js";import{D as F,a as A,b as K,M as R}from"./useSnackbar-CHVXOGIw.js";import{D as E,a as B}from"./DataTable-BTpUrcky.js";import{u as $,a as w,b as N,C as U}from"./useContactsMutations-BWkdPH7-.js";import{u as M}from"./useContactsQueries-pnr1N6mB.js";import{C as P}from"./ContentTabs-JVYxGBJ1.js";import{F as V}from"./FlexGrow-D9SxHobT.js";import{u as H,a as Y,b as _,C as G}from"./useCompaniesMutations-b592-iH_.js";import{a as J}from"./useCompaniesQueries-BlKio5QR.js";import"./useAssignmentsMutations-DHrnwjK_.js";import"./index.esm-B5qF0tzH.js";import"./MoreHoriz-Blyu0kPe.js";import"./Tooltip-XeHI6cq4.js";import"./useQueryParam-Da5TSr2V.js";const q=({contacts:i,isLoading:r,defaultValues:a})=>{const{mutate:c}=$(),{mutate:m}=w(),{mutate:l}=N();return t.jsx(E,{data:i,getRowId:e=>`${e.contactId}`,state:{isLoading:r},columns:[{accessorKey:"contactName",header:"Namn",Cell:({cell:e,row:s})=>t.jsx(h,{component:y,to:`/home/contacts/${s.original.contactId}`,children:e.getValue()})},{accessorKey:"email",header:"Email"},{accessorKey:"jobTitle",header:"Jobbtitel"},{accessorKey:"phone",header:"Telefonnummer"}],renderEditRowDialogContent:({row:e,table:s})=>t.jsxs(t.Fragment,{children:[t.jsx(F,{variant:"h4",color:"primary",children:s.getState().creatingRow?"Lägg till kontakt":"Redigera kontakt"}),t.jsx(A,{children:t.jsx(U,{sx:{mt:1},formProps:{defaultValues:{...a,...e.original}},onChange:d=>{e._valuesCache=d}})}),t.jsx(K,{children:t.jsx(R,{row:e,table:s,variant:"text"})})]}),onCreate:e=>c(e),onUpdate:e=>m(e),onDelete:e=>l(e)})},lt=()=>{const i=j(),r=b(),{data:a,isLoading:c}=J(i.id==="new"?void 0:Number(i.id)),{mutate:m}=H(),{mutate:l}=Y(),{mutate:e}=_(),{data:s=[],isLoading:d}=M(),{data:g=[],isLoading:u}=S(),C=f.useMemo(()=>g.filter(n=>{var o;return((o=n.externalContact)==null?void 0:o.companyId)===(a==null?void 0:a.companyId)}),[g,a]),x=n=>{a?l(n):m(n,{onSuccess:o=>r(`/home/companies/${o.companyId}`)})};if(!c)return t.jsx(t.Fragment,{children:t.jsx(G,{formProps:{values:a},onSubmit:x,renderTopContent:()=>t.jsxs(k,{sx:{position:"relative",mt:1,mb:3},children:[t.jsxs(I,{spacing:2,direction:"row",sx:{position:"absolute",right:0},children:[a&&t.jsx(B,{onClick:()=>e(a,{onSuccess:()=>r("..")}),children:n=>t.jsx(p,{variant:"outlined",color:"error",...v(n),children:"Ta bort"})}),t.jsx(p,{variant:"outlined",color:"primary",onClick:()=>r(-1),children:"Avbryt"}),t.jsx(p,{type:"submit",variant:"contained",color:"primary",children:"Spara"})]}),t.jsx(T,{variant:"h4",color:"primary",children:a?"Redigera bolag":"Lägg till bolag"})]}),renderBottomContent:()=>a&&t.jsx(V,{sx:{mt:1,minHeight:`calc(100vh - ${L}px - 1rem)`},children:t.jsx(P,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(t.Fragment,{children:"Interaktioner..."})},{id:"contacts",label:"Kontakter",content:t.jsx(q,{contacts:s.filter(n=>n.companyId===a.companyId),isLoading:d,defaultValues:{companyId:a.companyId}})},{id:"seeking",label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:t.jsx(D,{assignments:C.filter(n=>{var o;return((o=n.externalContact)==null?void 0:o.companyId)===a.companyId}),isLoading:u})},{id:"kyc",label:"KYC",content:t.jsx(t.Fragment,{children:"KYC..."})}]})})})})};export{lt as default};
