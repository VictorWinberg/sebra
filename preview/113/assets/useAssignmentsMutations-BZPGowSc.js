import{r as v,j as t,G as i,N as u,C as k,I as g,J as x,K as b,M as f}from"./index-CQXllPov.js";import{u as E,C as d}from"./index.esm-zU6ujzlG.js";import{u as I}from"./useCompaniesQueries-Bjb0g2s6.js";import{u as w}from"./useContactsQueries-C59xtDNc.js";import{S as L,A as m}from"./SebraForm-BPJeAP95.js";import{u as q,c as D,b as K,d as N,e as O,f as _,g as F}from"./useAssignmentsQueries-LgMqi5il.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new s.Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="c796ee57-0a81-4ab1-8bc2-e370246c92d8",s._sentryDebugIdIdentifier="sentry-dbid-c796ee57-0a81-4ab1-8bc2-e370246c92d8")}catch{}})();const B=({formProps:s,...o})=>{const{data:r=[]}=q(),{data:c=[]}=w(),{data:h=[]}=I(),{register:p,control:l,formState:{errors:y},handleSubmit:A}=E(s),j=v.useMemo(()=>[...new Set(r.map(a=>a.status))],[r]);return t.jsx(L,{...o,handleSubmit:A,children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(u,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...p("assignmentName",{required:!0}),error:!!y.assignmentName})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"status",control:l,render:({field:a})=>t.jsx(m,{freeSolo:!0,options:j,value:j.find(e=>e===a.value)||null,onChange:(e,n)=>a.onChange(n??""),renderInput:e=>t.jsx(u,{...e,label:"Status",variant:"outlined",fullWidth:!0})})})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(u,{fullWidth:!0,label:"Typ",margin:"none",type:"text",...p("type")})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(u,{fullWidth:!0,label:"Arvode",margin:"none",type:"number",...p("fee",{valueAsNumber:!0}),InputProps:{endAdornment:"SEK"}})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"responsibleContacts",control:l,render:({field:a})=>t.jsx(m,{multiple:!0,limitTags:2,disableCloseOnSelect:!0,id:"multiple-contacts",options:c,getOptionKey:e=>e.id,getOptionLabel:e=>e.contactName,isOptionEqualToValue:(e,n)=>e.id===n.id,value:a.value||[],onChange:(e,n)=>a.onChange(n),renderInput:e=>t.jsx(u,{...e,label:"Ansvariga kontakter",variant:"outlined",fullWidth:!0,error:!!y.responsibleContacts}),renderTags:(e,n)=>e.map((C,S)=>v.createElement(k,{...n({index:S}),key:C.id,label:C.contactName}))})})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"externalContact",control:l,render:({field:a})=>t.jsx(m,{options:c,getOptionKey:e=>e.id,getOptionLabel:e=>e.contactName,value:c.find(e=>{var n;return e.id===((n=a.value)==null?void 0:n.id)})||null,onChange:(e,n)=>a.onChange(n??void 0),renderInput:e=>t.jsx(u,{...e,label:"Extern kontakt",variant:"outlined",fullWidth:!0})})})}),t.jsx(i,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"company",control:l,render:({field:a})=>t.jsx(m,{options:h,getOptionKey:e=>e.id,getOptionLabel:e=>e.companyName,value:h.find(e=>{var n;return e.id===((n=a.value)==null?void 0:n.id)})||null,onChange:(e,n)=>a.onChange(n??void 0),renderInput:e=>t.jsx(u,{...e,label:"Bolag",variant:"outlined",fullWidth:!0})})})})]})})},J=()=>{const[{isDemo:s}]=g(),o=x(),{showSnackbar:r}=b();return f({mutationFn:s?D:K,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),r("Uppdrag skapat!")},onError:()=>{r("Ett fel uppstod när uppgiften skulle skapas.","error")}})},P=()=>{const[{isDemo:s}]=g(),o=x(),{showSnackbar:r}=b();return f({mutationFn:s?N:O,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),r("Uppdrag uppdaterat!")},onError:()=>{r("Ett fel uppstod när uppgiften skulle uppdateras.","error")}})},R=()=>{const[{isDemo:s}]=g(),o=x(),{showSnackbar:r}=b();return f({mutationFn:s?_:F,onSuccess:()=>{o.invalidateQueries({queryKey:["assignments"]}),r("Uppdrag borttaget!")},onError:()=>{r("Ett fel uppstod när uppgiften skulle tas bort.","error")}})};export{B as A,P as a,R as b,J as u};
//# sourceMappingURL=useAssignmentsMutations-BZPGowSc.js.map
