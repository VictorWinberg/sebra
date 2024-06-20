import{g as j,j as e,T as b,B as l,G as a,h as r,S as y,f as m,L as f}from"./index-Ds6bCney.js";import{u as F,C as B}from"./index.esm-2XEipy5g.js";import{u as S}from"./useContactsQueries-DDh3IK3H.js";import{C as v}from"./ContentTabs-dsqZgpMh.js";import{D as A}from"./DataTable-DKiSLnyd.js";import{s as I,F as k}from"./FlexGrow--ixssjS5.js";import{u as C}from"./useAssignmentsMutations-QSssf1uo.js";import{A as c}from"./Autocomplete-DatvNdm8.js";import"./contactsApi-BgW7hkc_.js";import"./useSnackbar-CCgugzdp.js";import"./MoreHoriz-DfdEr7KX.js";import"./VisibilityOff-x-Av0rUM.js";import"./Tooltip-DAwWny8k.js";const P=()=>{const{data:o=[],isLoading:d}=S(),{mutate:u}=C(),x=j(),{register:n,control:p,handleSubmit:g}=F(),h=t=>{u(t,{onSuccess:()=>{x("..")}})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",color:"primary",children:"Lägg till uppdrag"}),e.jsx(l,{sx:{my:1}}),e.jsxs("form",{onSubmit:g(h),style:{...I},children:[e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...n("assignmentName")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(B,{name:"responsiblePersonId",control:p,render:({field:t})=>e.jsx(c,{options:o,getOptionKey:s=>s.contactId,getOptionLabel:s=>`${s.firstName} ${s.lastName}`,onChange:(s,i)=>t.onChange(i?i.contactId:void 0),renderInput:s=>e.jsx(r,{...s,label:"Uppdragsgivare",variant:"outlined",fullWidth:!0})})})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{multiple:!0,options:N,renderInput:t=>e.jsx(r,{...t,label:"Fastigheter",type:"text",...n("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Status",margin:"none",type:"text",...n("status")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...n("type")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(r,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...n("fee")})})]}),e.jsx(l,{sx:{my:1}}),e.jsx(k,{children:e.jsx(v,{tabs:[{label:"Interaktioner",content:e.jsx(e.Fragment,{children:"Interaktioner..."})},{label:"Dokument",content:e.jsx(e.Fragment,{children:"Dokument..."})},{label:"Intressenter",content:e.jsx(A,{data:o,getRowId:t=>`${t.contactId}`,state:{isLoading:d},columns:[{accessorKey:"firstName",header:"Förnamn"},{accessorKey:"lastName",header:"Efternamn"},{accessorKey:"companyName",header:"Bolag"}]})},{label:"Moduler",content:e.jsx(e.Fragment,{children:"Moduler..."})}],selected:2})}),e.jsxs(y,{spacing:2,direction:"row",sx:{mt:3},children:[e.jsx(m,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),e.jsx(m,{component:f,size:"large",variant:"outlined",color:"primary",to:"..",children:"Avbryt"})]})]})]})},N=[{label:"Företaget"},{label:"BRF Sjöstadshöjden"},{label:"Bil & Bostad AB"},{label:"Hemfosa Fastigheter AB"},{label:"Svenska Bostäder"},{label:"Wallenstam AB"},{label:"Skanska"},{label:"JM AB"}];export{P as default};
