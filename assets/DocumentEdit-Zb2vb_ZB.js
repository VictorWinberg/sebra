import{i as M,k as E,r,j as e,T as F,B as f,S as I,f as c,l as R,g as i,L as m}from"./index-CxbkoOcU.js";import{u as w}from"./useAssignmentsQueries-BtVQgoTI.js";import{u as N}from"./useCompaniesQueries-D02-t5SP.js";import{u as z}from"./useContactsQueries-CgamqKth.js";import{C as B}from"./ContentTabs-zmVDaPtI.js";import{t as d,D as K,d as A}from"./useSnackbar-BFGzjn0G.js";import{F as P}from"./FlexGrow-Rmd1RqJK.js";import{f as G,b as U,e as V,a as q,D as H}from"./useDocumentsMutations-BTWZRHjl.js";import"./MoreHoriz-D43BOWch.js";import"./index.esm-lUn0xbJi.js";import"./Tooltip-BEQusx9g.js";const se=()=>{const n=M(),o=E(),{data:s,isLoading:h}=G(n.id==="new"?void 0:n.id),{mutate:j}=U(),{mutate:b}=V(),{data:D=[],isLoading:T}=q(n.id==="new"?void 0:{documentId:n.id}),{data:u=[]}=N(),{data:l=[]}=z(),{data:p=[]}=w(),k=r.useMemo(()=>d(u,"companyId"),[u]),v=r.useMemo(()=>d(l,"contactId"),[l]),L=r.useMemo(()=>d(p,"assignmentId"),[p]),C=t=>{j(t,{onSuccess:a=>o(`/documents/${a}`)})};if(h)return;const S=t=>{switch(t){case"company":return"Företag";case"contact":return"Kontakt";case"assignment":return"Uppdrag";default:return null}},$=(t,a)=>{var g,x,y;switch(t){case"company":return e.jsx(i,{component:m,to:`/dashboard/companies/${a}`,children:(g=k.get(a))==null?void 0:g.companyName});case"contact":return e.jsx(i,{component:m,to:`/dashboard/contacts/${a}`,children:(x=v.get(a))==null?void 0:x.contactName});case"assignment":return e.jsx(i,{component:m,to:`/dashboard/assignments/${a}`,children:(y=L.get(a))==null?void 0:y.assignmentName});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(F,{variant:"h4",color:"primary",children:s?"Redigera dokument":"Lägg till dokument"}),e.jsx(f,{sx:{my:1}}),e.jsxs(H,{formProps:{defaultValues:s},onSubmit:C,children:[e.jsx(f,{sx:{my:1}}),s&&e.jsx(P,{children:e.jsx(B,{tabs:[{label:"Referenser",content:e.jsx(K,{data:D,getRowId:t=>`${t.documentId}-${t.entityType}-${t.entityId}`,state:{isLoading:T},columns:[{accessorKey:"entityType",header:"Typ",enableEditing:!1,Cell:({row:t})=>S(t.original.entityType)},{accessorKey:"entityId",header:"Länk",enableEditing:!1,Cell:({row:t})=>$(t.original.entityType,t.original.entityId)}]})}]})}),e.jsxs(I,{spacing:2,direction:"row",sx:{mt:3,ml:"auto"},children:[s&&e.jsx(A,{onClick:()=>b(s,{onSuccess:()=>o("..")}),children:t=>e.jsx(c,{size:"large",variant:"outlined",color:"error",...R(t),children:"Ta bort"})}),e.jsx(c,{size:"large",variant:"outlined",color:"primary",onClick:()=>o(-1),children:"Avbryt"}),e.jsx(c,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})]})]})};export{se as default};
