import{i as b,k as j,j as t,T as C,B as r,S as h,f as n,l as I}from"./index-_FwCeTeu.js";import{A as k}from"./AssignmentTable-z2JR34G2.js";import{u as v}from"./useAssignmentsQueries-Df9Eo1Tl.js";import{u as y,I as S}from"./useInteractionsQueries-DjviVdR6.js";import{C as L}from"./ContentTabs-BQiA7ALY.js";import{a as T}from"./DataTable-DldLoeRy.js";import{F}from"./FlexGrow-Bwm87unR.js";import{f as A}from"./date-BpXrROqC.js";import{u as D,a as P,b as w,C as z}from"./useContactsMutations-PVzDWjR2.js";import{a as B}from"./useContactsQueries-Fpm1KDTO.js";import"./useSnackbar-_bOhQBdU.js";import"./MoreHoriz-hTC6DMvV.js";import"./index.esm-DWPQP-6d.js";import"./Tooltip-DZfKSXwx.js";import"./useAssignmentsMutations-D7h6o7dN.js";import"./useQueryParam-Ct9_0DVF.js";import"./useCompaniesQueries-Dv0FhxLO.js";const Z=()=>{const e=b(),o=j(),{data:a,isLoading:i}=B(e.id==="new"?void 0:Number(e.id)),{mutate:c}=D(),{mutate:m}=P(),{mutate:d}=w(),{data:l=[],isLoading:p}=v(),{data:u=[],isLoading:g}=y(a?{contactId:a.contactId}:void 0),x=s=>{a?m(s):c(s,{onSuccess:f=>o(`/dashboard/contacts/${f.contactId}`)})};if(!i)return t.jsxs(t.Fragment,{children:[t.jsx(C,{variant:"h4",color:"primary",children:a?"Redigera kontakt":"Lägg till kontakt"}),t.jsx(r,{sx:{my:1}}),t.jsxs(z,{formProps:{values:a},onSubmit:x,children:[t.jsx(r,{sx:{my:1}}),a&&t.jsx(F,{children:t.jsx(L,{tabs:[{id:"interactions",label:"Interaktioner",content:t.jsx(S,{interactions:u,isLoading:g,defaultValues:{contacts:[a],interactionDate:A()}})},{id:"seeking",label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})},{id:"assignments",label:"Uppdrag",content:t.jsx(k,{assignments:l.filter(s=>s.externalContactPersonId===a.contactId||s.responsiblePersonId===a.contactId),isLoading:p})}]})}),t.jsxs(h,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[a&&t.jsx(T,{onClick:()=>d(a,{onSuccess:()=>o("..")}),children:s=>t.jsx(n,{size:"large",variant:"outlined",color:"error",...I(s),children:"Ta bort"})}),t.jsx(n,{size:"large",variant:"outlined",color:"primary",onClick:()=>o(-1),children:"Avbryt"}),t.jsx(n,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{Z as default};
