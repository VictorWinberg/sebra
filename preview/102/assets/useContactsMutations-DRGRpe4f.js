import{j as t,G as a,t as o,s as u}from"./index-DFA1-aob.js";import{u as h,C as k}from"./index.esm-FWDVyD6a.js";import{u as C}from"./useCompaniesQueries-B4_0YUS1.js";import{S as b,A as j,u as i,a as l}from"./useSnackbar-CCfpnRuD.js";import{c as f,b as g,d as S}from"./useContactsQueries-rcfqKxji.js";const I=({formProps:r,...e})=>{const{data:c=[]}=C(),{register:s,control:d,handleSubmit:x,formState:{errors:y}}=h(r);return t.jsx(b,{...e,handleSubmit:x,children:t.jsxs(a,{container:!0,spacing:2,children:[t.jsx(a,{item:!0,xs:12,children:t.jsx(o,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...s("contactName",{required:!0}),error:!!y.contactName})}),t.jsx(a,{item:!0,xs:12,sm:6,children:t.jsx(o,{fullWidth:!0,label:"Email",type:"text",margin:"none",...s("email")})}),t.jsx(a,{item:!0,xs:12,sm:6,children:t.jsx(o,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...s("phone")})}),t.jsx(a,{item:!0,xs:12,sm:6,children:t.jsx(k,{name:"companyId",control:d,render:({field:m})=>t.jsx(j,{options:c,getOptionKey:n=>n.companyId,getOptionLabel:n=>n.companyName,value:c.find(n=>n.companyId===m.value)||null,onChange:(n,p)=>m.onChange(p?p.companyId:void 0),renderInput:n=>t.jsx(o,{...n,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),t.jsx(a,{item:!0,xs:12,sm:6,children:t.jsx(o,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...s("jobTitle")})})]})})},W=()=>{const r=u(),{showSnackbar:e}=i();return l({mutationFn:f,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt skapat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle skapas.","error")}})},N=()=>{const r=u(),{showSnackbar:e}=i();return l({mutationFn:g,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt uppdaterat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},Q=()=>{const r=u(),{showSnackbar:e}=i();return l({mutationFn:S,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt borttaget!")},onError:()=>{e("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{I as C,N as a,Q as b,W as u};
