import{i as f,k as C,j as t,B as b,S as h,f as e,l as j,T as I,m as k}from"./index-C3w-D241.js";import{A as v}from"./AssignmentTable-ChQTIG5T.js";import{u as S}from"./useAssignmentsQueries-DUCrci32.js";import{u as L,I as T}from"./useInteractionsQueries-QualbVEX.js";import{C as y}from"./ContentTabs-CBU9knVN.js";import{a as A}from"./DataTable-CoS4zaii.js";import{F as B}from"./FlexGrow-B7AoKTxw.js";import{f as D}from"./date-v8z5NJyE.js";import{u as F,a as P,b as w,C as E}from"./useContactsMutations-C-sWpftH.js";import{a as H}from"./useContactsQueries-BycgPh1E.js";import"./useSnackbar-CLdcM7Qy.js";import"./MoreHoriz-B6-XEhen.js";import"./index.esm-Dsuu6Kq2.js";import"./Tooltip-BKXv5mR2.js";import"./useAssignmentsMutations-BC5GScCv.js";import"./useCompaniesQueries-Bh35nIms.js";import"./useQueryParam-DlSDXajw.js";const _=()=>{const s=f(),n=C(),{data:a,isLoading:r}=H(s.id==="new"?void 0:Number(s.id)),{mutate:i}=F(),{mutate:c}=P(),{mutate:m}=w(),{data:d=[],isLoading:l}=S(),{data:p=[],isLoading:u}=L(a?{contactId:a.contactId}:void 0),g=o=>{a?c(o):i(o,{onSuccess:x=>n(`/home/contacts/${x.contactId}`)})};if(!r)return t.jsx(E,{formProps:{values:a},onSubmit:g,renderTopContent:()=>t.jsxs(b,{sx:{position:"relative",mt:1,mb:3},children:[t.jsxs(h,{spacing:2,direction:"row",sx:{position:"absolute",right:0},children:[a&&t.jsx(A,{onClick:()=>m(a,{onSuccess:()=>n("..")}),children:o=>t.jsx(e,{variant:"outlined",color:"error",...j(o),children:"Ta bort"})}),t.jsx(e,{variant:"outlined",color:"primary",onClick:()=>n(-1),children:"Avbryt"}),t.jsx(e,{type:"submit",variant:"contained",color:"primary",children:"Spara"})]}),t.jsx(I,{variant:"h4",color:"primary",children:a?"Redigera kontakt":"Lägg till kontakt"})]}),renderBottomContent:()=>a&&t.jsx(B,{sx:{mt:1,minHeight:`calc(100vh - ${k}px - 1rem)`},children:t.jsx(y,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(T,{interactions:p,isLoading:u,defaultValues:{contacts:[a],interactionDate:D()}})},{id:"seeking",label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:t.jsx(v,{assignments:d.filter(o=>o.externalContactPersonId===a.contactId||o.responsiblePersonId===a.contactId),isLoading:l})}]})})})};export{_ as default};
