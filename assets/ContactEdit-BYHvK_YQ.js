import{i as h,k as j,r as m,j as a,B as I,S as k,f as n,l as v,T as S,m as L}from"./index-DfCR3GxP.js";import{A as T}from"./AssignmentTable-CIdEdnUD.js";import{u as y}from"./useAssignmentsQueries-DMta_BJZ.js";import{u as A,I as B}from"./useInteractionsQueries-CrJJqRVd.js";import{C as D}from"./ContentTabs-TnThNg5E.js";import{a as F}from"./DataTable-BY_Z_qkv.js";import{F as w}from"./FlexGrow-DODSQes3.js";import{f as E}from"./date-DTZMJohd.js";import{u as H,a as M,b as N,C as P}from"./useContactsMutations-BfvIAZVn.js";import{a as R}from"./useContactsQueries-C6LudskF.js";import"./useSnackbar-B8REVr8N.js";import"./MoreHoriz-fH0G-uLH.js";import"./index.esm-DK0lv1HP.js";import"./Tooltip-BT2hWGEw.js";import"./useAssignmentsMutations-UgQFVnIs.js";import"./useCompaniesQueries-CLIKqU9o.js";import"./useQueryParam-Dq3kROpH.js";const ot=()=>{const r=h(),s=j(),{data:t,isLoading:l}=R(r.id==="new"?void 0:Number(r.id)),{mutate:d}=H(),{mutate:p}=M(),{mutate:u}=N(),{data:i=[],isLoading:g}=y(),x=m.useMemo(()=>i.filter(o=>o.responsibleContacts.some(e=>e.contactId===(t==null?void 0:t.contactId))||o.externalContactId===(t==null?void 0:t.contactId)),[i,t]),{data:c=[],isLoading:f}=A(),C=m.useMemo(()=>c.filter(o=>o.contacts.some(e=>e.contactId===(t==null?void 0:t.contactId))),[c,t]),b=o=>{t?p(o):d(o,{onSuccess:e=>s(`/home/contacts/${e.contactId}`)})};if(!l)return a.jsx(P,{formProps:{values:t},onSubmit:b,renderTopContent:()=>a.jsxs(I,{sx:{position:"relative",mt:1,mb:3},children:[a.jsxs(k,{spacing:2,direction:"row",sx:{position:"absolute",right:0},children:[t&&a.jsx(F,{onClick:()=>u(t,{onSuccess:()=>s("..")}),children:o=>a.jsx(n,{variant:"outlined",color:"error",...v(o),children:"Ta bort"})}),a.jsx(n,{variant:"outlined",color:"primary",onClick:()=>s(-1),children:"Avbryt"}),a.jsx(n,{type:"submit",variant:"contained",color:"primary",children:"Spara"})]}),a.jsx(S,{variant:"h4",color:"primary",children:t?"Redigera kontakt":"Lägg till kontakt"})]}),renderBottomContent:()=>t&&a.jsx(w,{sx:{mt:1,minHeight:`calc(100vh - ${L}px - 1rem)`},children:a.jsx(D,{tabs:[{id:"interactions",label:"Interaktioner",content:a.jsx(B,{interactions:C,isLoading:f,defaultValues:{contacts:[t],interactionDate:E()}})},{id:"seeking",label:"Söker",content:a.jsx(a.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:a.jsx(T,{assignments:x,isLoading:g})}]})})})};export{ot as default};
