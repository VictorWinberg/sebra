import{r as S,j as t,G as r,w as i,C as q,t as g}from"./index-D-ocvujd.js";import{u as O,C as l}from"./index.esm-DNzt2WsN.js";import{u as K}from"./useCompaniesQueries-BR5bPGwy.js";import{u as W}from"./useContactsQueries-nScrN7e5.js";import{F as w,s as N}from"./FlexGrow-RtNkhMTn.js";import{b as U,c as Q,d as _,e as G}from"./useAssignmentsQueries-CG64215t.js";import{A as c,u as j,c as f}from"./useSnackbar-FKi4dRLH.js";const z=({onSubmit:o=()=>{},onChange:s,formProps:k,renderTopContent:m,renderBottomContent:p,...A})=>{const{data:h=[]}=U(),{data:d=[]}=W(),{data:b=[]}=K(),{register:x,control:u,handleSubmit:E,watch:C,formState:{errors:y}}=O(k),v=C();return S.useEffect(()=>{s==null||s(v)},[s,v]),t.jsx(w,{...A,children:t.jsxs("form",{onSubmit:E(o),style:{...N},children:[m==null?void 0:m(),t.jsxs(r,{container:!0,spacing:2,children:[t.jsx(r,{item:!0,xs:12,children:t.jsx(i,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...x("assignmentName",{required:!0}),error:!!y.assignmentName})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"status",control:u,render:({field:a})=>t.jsx(c,{freeSolo:!0,options:h,value:h.find(e=>e===a.value)||null,onChange:(e,n)=>a.onChange(n??""),renderInput:e=>t.jsx(i,{...e,label:"Status",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...x("type")})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...x("fee"),InputProps:{endAdornment:"SEK"}})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"responsibleContacts",control:u,render:({field:a})=>t.jsx(c,{multiple:!0,limitTags:2,disableCloseOnSelect:!0,id:"multiple-contacts",options:d,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,isOptionEqualToValue:(e,n)=>e.contactId===n.contactId,value:a.value||[],onChange:(e,n)=>a.onChange(n),renderInput:e=>t.jsx(i,{...e,label:"Ansvariga kontakter",variant:"outlined",fullWidth:!0,error:!!y.responsibleContacts}),renderTags:(e,n)=>e.map((I,F)=>S.createElement(q,{...n({index:F}),key:I.contactId,label:I.contactName}))})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"externalContactId",control:u,render:({field:a})=>t.jsx(c,{options:d,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,value:d.find(e=>e.contactId===a.value)||null,onChange:(e,n)=>a.onChange(n?n.contactId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Extern kontakt",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"companyId",control:u,render:({field:a})=>t.jsx(c,{options:b,getOptionKey:e=>e.companyId,getOptionLabel:e=>e.companyName,value:b.find(e=>e.companyId===a.value)||null,onChange:(e,n)=>a.onChange(n?n.companyId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Bolag",variant:"outlined",fullWidth:!0})})})})]}),p==null?void 0:p()]})})},H=()=>{const o=g(),{showSnackbar:s}=j();return f({mutationFn:Q,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag skapat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle skapas.","error")}})},J=()=>{const o=g(),{showSnackbar:s}=j();return f({mutationFn:_,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag uppdaterat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle uppdateras.","error")}})},X=()=>{const o=g(),{showSnackbar:s}=j();return f({mutationFn:G,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag borttaget!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle tas bort.","error")}})};export{z as A,J as a,X as b,H as u};
