import{r as A,j as e,G as n,k as i,l as m}from"./index-UKMdKbaF.js";import{u as F,C as j}from"./index.esm-CaXX-YLt.js";import{u as I}from"./useContactsQueries-CdC4HwLS.js";import{F as S,s as C}from"./FlexGrow-CtMQi788.js";import{A as c,u as d,a as p}from"./useSnackbar-DDux-5WX.js";import{c as k,b as q,d as w}from"./useAssignmentsQueries-zO5kHu48.js";const G=({onSubmit:r=()=>{},onChange:s,formProps:h,children:b,...y})=>{const{data:l=[]}=I(),{register:o,control:x,handleSubmit:f,watch:v}=F(h),g=v();return A.useEffect(()=>{s==null||s(g)},[s,g]),e.jsx(S,{...y,children:e.jsxs("form",{onSubmit:f(r),style:{...C},children:[e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...o("assignmentName")})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(j,{name:"responsiblePersonId",control:x,render:({field:a})=>e.jsx(c,{options:l,getOptionKey:t=>t.contactId,getOptionLabel:t=>t.contactName,value:l.find(t=>t.contactId===a.value)||null,onChange:(t,u)=>a.onChange(u?u.contactId:void 0),renderInput:t=>e.jsx(i,{...t,label:"Ansvarig",variant:"outlined",fullWidth:!0})})})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(j,{name:"externalContactPersonId",control:x,render:({field:a})=>e.jsx(c,{options:l,getOptionKey:t=>t.contactId,getOptionLabel:t=>t.contactName,value:l.find(t=>t.contactId===a.value)||null,onChange:(t,u)=>a.onChange(u?u.contactId:void 0),renderInput:t=>e.jsx(i,{...t,label:"Extern",variant:"outlined",fullWidth:!0})})})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(c,{multiple:!0,options:[],renderInput:a=>e.jsx(i,{...a,label:"Fastigheter",type:"text",...o("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Status",margin:"none",type:"text",...o("status")})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...o("type")})}),e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(i,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...o("fee")})})]}),b]})})},N=()=>{const r=m(),{showSnackbar:s}=d();return p({mutationFn:k,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag skapat!")}})},T=()=>{const r=m(),{showSnackbar:s}=d();return p({mutationFn:q,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag uppdaterat!")}})},L=()=>{const r=m(),{showSnackbar:s}=d();return p({mutationFn:w,onSuccess:()=>{r.invalidateQueries({queryKey:["assignments"]}),s("Uppdrag borttaget!")}})};export{G as A,T as a,L as b,N as u};
