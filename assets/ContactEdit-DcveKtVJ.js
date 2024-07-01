import{i as h,k as b,j as a,T as C,B as c,g as n,L as o,S as j,f as l}from"./index-BD7MpHq_.js";import{C as f}from"./ContentTabs-CfyiaMhG.js";import{F as k}from"./FlexGrow-BJyNi9i9.js";import{u as y,a as I}from"./useContactsMutations-CO6wHUWF.js";import{a as S}from"./useContactsQueries-D2KV1Jcq.js";import{C as v}from"./ContactForm-BYk33W8j.js";import{D as F}from"./DataTable-Bc0BIP-8.js";import{u as L}from"./useAssignmentsQueries-CwSEIzjb.js";import"./useSnackbar-Ck29ETFC.js";import"./object-CoqZKnvh.js";import"./index.esm-CILOGyyi.js";import"./useCompaniesQueries-BcXv4vP7.js";import"./Autocomplete-Dx1H6lqQ.js";import"./MoreHoriz-BoBBlvpX.js";import"./VisibilityOff-BrTjNyNI.js";import"./Tooltip-CKjnARdY.js";const H=()=>{const r=h(),i=b(),{data:s,isLoading:m}=S(r.id==="new"?void 0:Number(r.id)),{mutate:d}=y(),{mutate:p}=I(),{data:g=[],isLoading:u}=L(),x=t=>{s?p(t):d(t,{onSuccess:e=>i(`/dashboard/contact/${e.contactId}`)})};if(!m)return a.jsxs(a.Fragment,{children:[a.jsx(C,{variant:"h4",color:"primary",children:s?"Redigera kontakt":"Lägg till kontakt"}),a.jsx(c,{sx:{my:1}}),a.jsxs(v,{formProps:{values:s},onSubmit:x,children:[a.jsx(c,{sx:{my:1}}),s&&a.jsx(k,{children:a.jsx(f,{tabs:[{label:"Interaktioner",content:a.jsx(a.Fragment,{children:"Interaktioner..."})},{label:"Söker",content:a.jsx(a.Fragment,{children:"Söker..."})},{label:"Uppdrag",content:a.jsx(F,{data:g.filter(t=>t.externalContactPersonId===s.contactId||t.responsiblePersonId===s.contactId),getRowId:t=>`${t.assignmentId}`,state:{isLoading:u},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/assignments/${e.original.assignmentId}`,children:t.getValue()})},{accessorFn:t=>{var e;return(e=t.responsiblePerson)==null?void 0:e.contactName},header:"Ansvarig",enableEditing:!1,Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/contacts/${e.original.responsiblePersonId}`,children:t.getValue()})},{accessorFn:t=>{var e;return(e=t.externalContactPerson)==null?void 0:e.contactName},header:"Extern",enableEditing:!1,Cell:({cell:t,row:e})=>a.jsx(n,{component:o,to:`/dashboard/contacts/${e.original.externalContactPersonId}`,children:t.getValue()})},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:t})=>t.getValue().toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}]})}],selected:2})}),a.jsxs(j,{spacing:2,direction:"row",sx:{mt:3},children:[a.jsx(l,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),a.jsx(l,{size:"large",variant:"outlined",color:"primary",onClick:()=>i(-1),children:"Tillbaka"})]})]})]})};export{H as default};
