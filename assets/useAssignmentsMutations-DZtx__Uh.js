import{r as k,j as t,G as r,w as i,t as g}from"./index-Bd6xTruv.js";import{u as F,C as c}from"./index.esm-BJZkzNMk.js";import{u as q}from"./useCompaniesQueries-DHFwAocb.js";import{u as K}from"./useContactsQueries-BES7-iDj.js";import{F as W,s as w}from"./FlexGrow-ErFmPyPr.js";import{b as O,c as C,d as N,e as U}from"./useAssignmentsQueries-BVl8YA9L.js";import{A as m,u as f,c as j}from"./useSnackbar-DAvCiuvm.js";const R=({onSubmit:o=()=>{},onChange:s,formProps:v,renderTopContent:p,renderBottomContent:d,...I})=>{const{data:h=[]}=O(),{data:u=[]}=K(),{data:y=[]}=q(),{register:x,control:l,handleSubmit:S,watch:A,formState:{errors:E}}=F(v),b=A();return k.useEffect(()=>{s==null||s(b)},[s,b]),t.jsx(W,{...I,children:t.jsxs("form",{onSubmit:S(o),style:{...w},children:[p==null?void 0:p(),t.jsxs(r,{container:!0,spacing:2,children:[t.jsx(r,{item:!0,xs:12,children:t.jsx(i,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...x("assignmentName",{required:!0}),error:!!E.assignmentName})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(c,{name:"status",control:l,render:({field:n})=>t.jsx(m,{freeSolo:!0,options:h,value:h.find(e=>e===n.value)||null,onChange:(e,a)=>n.onChange(a??""),renderInput:e=>t.jsx(i,{...e,label:"Status",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...x("type")})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(i,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...x("fee"),InputProps:{endAdornment:"SEK"}})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(c,{name:"responsiblePersonId",control:l,render:({field:n})=>t.jsx(m,{options:u,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,value:u.find(e=>e.contactId===n.value)||null,onChange:(e,a)=>n.onChange(a?a.contactId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Ansvarig",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(c,{name:"externalContactPersonId",control:l,render:({field:n})=>t.jsx(m,{options:u,getOptionKey:e=>e.contactId,getOptionLabel:e=>e.contactName,value:u.find(e=>e.contactId===n.value)||null,onChange:(e,a)=>n.onChange(a?a.contactId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Extern",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:4,children:t.jsx(c,{name:"companyId",control:l,render:({field:n})=>t.jsx(m,{options:y,getOptionKey:e=>e.companyId,getOptionLabel:e=>e.companyName,value:y.find(e=>e.companyId===n.value)||null,onChange:(e,a)=>n.onChange(a?a.companyId:void 0),renderInput:e=>t.jsx(i,{...e,label:"Bolag",variant:"outlined",fullWidth:!0})})})})]}),d==null?void 0:d()]})})},z=()=>{const o=g(),{showSnackbar:s}=f();return j({mutationFn:C,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag skapat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle skapas.","error")}})},H=()=>{const o=g(),{showSnackbar:s}=f();return j({mutationFn:N,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag uppdaterat!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle uppdateras.","error")}})},J=()=>{const o=g(),{showSnackbar:s}=f();return j({mutationFn:U,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag borttaget!")},onError:()=>{s("Ett fel uppstod när uppgiften skulle tas bort.","error")}})};export{R as A,H as a,J as b,z as u};