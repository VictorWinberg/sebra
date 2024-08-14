import{i as R,k as E,r,j as t,T as F,B as y,S as I,f as c,l as w,g as i,L as m}from"./index-YiW1SVvL.js";import{u as N}from"./useAssignmentsQueries-DouJPN5u.js";import{u as z}from"./useCompaniesQueries-BWM99dW2.js";import{u as B}from"./useContactsQueries-Ch6MQ3h0.js";import{C as K}from"./ContentTabs-D21CbHus.js";import{t as d,D as A,d as P}from"./useSnackbar-Cy_aK-Ek.js";import{F as G}from"./FlexGrow-CiD6N9pi.js";import{f as U,b as V,e as q,a as H,d as J,D as O}from"./useDocumentsMutations-B5_fKI8O.js";import"./MoreHoriz-BLL1WSyd.js";import"./index.esm-BoixCPhM.js";import"./Tooltip-DIavm8s0.js";const oe=()=>{const s=R(),o=E(),{data:a,isLoading:h}=U(s.id==="new"?void 0:s.id),{mutate:j}=V(),{mutate:D}=q(),{data:u=[]}=z(),{data:l=[]}=B(),{data:p=[]}=N(),{data:b=[],isLoading:T}=H(s.id==="new"?void 0:{documentId:s.id}),{mutate:k}=J(),v=r.useMemo(()=>d(u,"companyId"),[u]),L=r.useMemo(()=>d(l,"contactId"),[l]),C=r.useMemo(()=>d(p,"assignmentId"),[p]),S=e=>{j(e,{onSuccess:n=>o(`/documents/${n}`)})};if(h)return;const $=e=>{switch(e){case"company":return"Företag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},M=(e,n)=>{var g,f,x;switch(e){case"company":return t.jsx(i,{component:m,to:`/dashboard/companies/${n}`,children:(g=v.get(n))==null?void 0:g.companyName});case"contact":return t.jsx(i,{component:m,to:`/dashboard/contacts/${n}`,children:(f=L.get(n))==null?void 0:f.contactName});case"assignment":return t.jsx(i,{component:m,to:`/dashboard/assignments/${n}`,children:(x=C.get(n))==null?void 0:x.assignmentName});default:return null}};return t.jsxs(t.Fragment,{children:[t.jsx(F,{variant:"h4",color:"primary",children:a?"Redigera dokument":"Lägg till dokument"}),t.jsx(y,{sx:{my:1}}),t.jsxs(O,{formProps:{defaultValues:a},onSubmit:S,children:[t.jsx(y,{sx:{my:1}}),a&&t.jsx(G,{children:t.jsx(K,{tabs:[{label:"Referenser",content:t.jsx(A,{data:b,getRowId:e=>`${e.documentId}-${e.entityType}-${e.entityId}`,state:{isLoading:T},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:e})=>$(e.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:e})=>M(e.original.entityType,e.original.entityId)}],onDelete:e=>k(e)})}]})}),t.jsxs(I,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[a&&t.jsx(P,{onClick:()=>D(a,{onSuccess:()=>o("..")}),children:e=>t.jsx(c,{size:"large",variant:"outlined",color:"error",...w(e),children:"Ta bort"})}),t.jsx(c,{size:"large",variant:"outlined",color:"primary",onClick:()=>o(-1),children:"Avbryt"}),t.jsx(c,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{oe as default};