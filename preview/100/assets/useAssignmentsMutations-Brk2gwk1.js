import{j as t,G as r,t as i,r as v,C as I,s as d}from"./index-Cvw3wisO.js";import{u as S,C as l}from"./index.esm-BPmSvAkZ.js";import{u as k}from"./useCompaniesQueries-C7bD1CZ_.js";import{u as A}from"./useContactsQueries-ZbRfS0Tr.js";import{S as E,A as m,u as g,a as x}from"./useSnackbar-BI1N9Jr5.js";import{b as q,c as O,d as F,e as K}from"./useAssignmentsQueries-DEOrMn8B.js";const w=({formProps:o,...a})=>{const{data:h=[]}=q(),{data:c=[]}=A(),{data:j=[]}=k(),{register:p,control:u,formState:{errors:b},handleSubmit:C}=S(o);return t.jsx(E,{...a,handleSubmit:C,children:t.jsxs(r,{container:!0,spacing:2,children:[t.jsx(r,{item:!0,xs:12,children:t.jsx(i,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...p("assignmentName",{required:!0}),error:!!b.assignmentName})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"status",control:u,render:({field:s})=>t.jsx(m,{freeSolo:!0,options:h,value:h.find(e=>e===s.value)||null,onChange:(e,n)=>s.onChange(n??""),renderInput:e=>t.jsx(i,{...e,label:"Status",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...p("type")})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...p("fee"),InputProps:{endAdornment:"SEK"}})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"responsibleContacts",control:u,render:({field:s})=>t.jsx(m,{multiple:!0,limitTags:2,disableCloseOnSelect:!0,id:"multiple-contacts",options:c,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,isOptionEqualToValue:(e,n)=>e.contactId===n.contactId,value:s.value||[],onChange:(e,n)=>s.onChange(n),renderInput:e=>t.jsx(i,{...e,label:"Ansvariga kontakter",variant:"outlined",fullWidth:!0,error:!!b.responsibleContacts}),renderTags:(e,n)=>e.map((y,f)=>v.createElement(I,{...n({index:f}),key:y.contactId,label:y.contactName}))})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"externalContactId",control:u,render:({field:s})=>t.jsx(m,{options:c,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,value:c.find(e=>e.contactId===s.value)||null,onChange:(e,n)=>s.onChange(n?n.contactId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Extern kontakt",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(l,{name:"companyId",control:u,render:({field:s})=>t.jsx(m,{options:j,getOptionKey:e=>e.companyId,getOptionLabel:e=>e.companyName,value:j.find(e=>e.companyId===s.value)||null,onChange:(e,n)=>s.onChange(n?n.companyId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Bolag",variant:"outlined",fullWidth:!0})})})})]})})},L=()=>{const o=d(),{showSnackbar:a}=g();return x({mutationFn:O,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),a("Uppdrag skapat!")},onError:()=>{a("Ett fel uppstod när uppgiften skulle skapas.","error")}})},G=()=>{const o=d(),{showSnackbar:a}=g();return x({mutationFn:F,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),a("Uppdrag uppdaterat!")},onError:()=>{a("Ett fel uppstod när uppgiften skulle uppdateras.","error")}})},B=()=>{const o=d(),{showSnackbar:a}=g();return x({mutationFn:K,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),a("Uppdrag borttaget!")},onError:()=>{a("Ett fel uppstod när uppgiften skulle tas bort.","error")}})};export{w as A,G as a,B as b,L as u};
