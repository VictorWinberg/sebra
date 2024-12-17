import{j as e,G as o,Q as s,J as c,K as l,M as d,N as m}from"./index-Wz3Ywbj5.js";import{u as b,C}from"./index.esm-_iGQBVP7.js";import{u as g}from"./useCompaniesQueries-CvPfiiuR.js";import{S as h,A as k}from"./RouterLink-BseUmFNE.js";import{c as j,b as S,d as D,e as E,f as q,g as v}from"./useContactsQueries-D5WnVdse.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="3626c03f-05fc-4715-8d6c-3dd6a9ce4658",t._sentryDebugIdIdentifier="sentry-dbid-3626c03f-05fc-4715-8d6c-3dd6a9ce4658")}catch{}})();const L=({formProps:t,...r})=>{const{data:n=[]}=g(),{register:i,control:x,handleSubmit:y,formState:{errors:p}}=b(t);return e.jsx(h,{...r,handleSubmit:y,children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(s,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...i("contactName",{required:!0}),error:!!p.contactName})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(s,{fullWidth:!0,label:"Email",type:"email",margin:"none",...i("email",{required:!0}),error:!!p.email})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(s,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...i("phone")})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(C,{name:"company",control:x,render:({field:f})=>e.jsx(k,{options:n,getOptionKey:a=>a.id,getOptionLabel:a=>a.companyName,value:n.find(a=>{var u;return a.id===((u=f.value)==null?void 0:u.id)})||null,onChange:(a,u)=>f.onChange(u??void 0),renderInput:a=>e.jsx(s,{...a,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(s,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...i("jobTitle")})})]})})},G=()=>{const t=c(),r=l(),{showSnackbar:n}=d();return m({mutationFn:t?j:S,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),n("Kontakt skapat!")},onError:()=>{n("Ett fel uppstod när kontakten skulle skapas.","error")}})},N=()=>{const t=c(),r=l(),{showSnackbar:n}=d();return m({mutationFn:t?D:E,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),n("Kontakt uppdaterat!")},onError:()=>{n("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},W=()=>{const t=c(),r=l(),{showSnackbar:n}=d();return m({mutationFn:t?q:v,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),n("Kontakt borttaget!")},onError:()=>{n("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{L as C,N as a,W as b,G as u};
//# sourceMappingURL=useContactsMutations-D4jL5q7s.js.map
