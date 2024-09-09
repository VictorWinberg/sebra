import{j as e,G as a,x as o,t as i,w as c}from"./index-Dl4XAGHA.js";import{u as b,C as x}from"./index.esm-CNmaJeLN.js";import{u as h}from"./useCompaniesQueries-D5QFk1VV.js";import{S as g,A as k,u as l}from"./SebraForm-Buo_nVLS.js";import{c as C,b as j,d as S}from"./useContactsQueries-BSwGKqDL.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="51a5f5ba-3b4e-4f62-8c4f-c4e9f9596da4",t._sentryDebugIdIdentifier="sentry-dbid-51a5f5ba-3b4e-4f62-8c4f-c4e9f9596da4")}catch{}})();const F=({formProps:t,...n})=>{const{data:u=[]}=h(),{register:s,control:p,handleSubmit:f,formState:{errors:y}}=b(t);return e.jsx(g,{...n,handleSubmit:f,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(o,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...s("contactName",{required:!0}),error:!!y.contactName})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Email",type:"text",margin:"none",...s("email")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...s("phone")})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(x,{name:"companyId",control:p,render:({field:d})=>e.jsx(k,{options:u,getOptionKey:r=>r.companyId,getOptionLabel:r=>r.companyName,value:u.find(r=>r.companyId===d.value)||null,onChange:(r,m)=>d.onChange(m?m.companyId:void 0),renderInput:r=>e.jsx(o,{...r,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(o,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...s("jobTitle")})})]})})},K=()=>{const t=i(),{showSnackbar:n}=c();return l({mutationFn:C,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),n("Kontakt skapat!")},onError:()=>{n("Ett fel uppstod när kontakten skulle skapas.","error")}})},D=()=>{const t=i(),{showSnackbar:n}=c();return l({mutationFn:j,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),n("Kontakt uppdaterat!")},onError:()=>{n("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},W=()=>{const t=i(),{showSnackbar:n}=c();return l({mutationFn:S,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),n("Kontakt borttaget!")},onError:()=>{n("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{F as C,D as a,W as b,K as u};
//# sourceMappingURL=useContactsMutations-DaJq3ZWi.js.map