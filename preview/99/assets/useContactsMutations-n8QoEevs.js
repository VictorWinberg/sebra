import{r as S,j as t,G as r,w as n,t as l}from"./index-D-ocvujd.js";import{u as F,C as g}from"./index.esm-DNzt2WsN.js";import{u as q}from"./useCompaniesQueries-BR5bPGwy.js";import{F as K,s as v}from"./FlexGrow-RtNkhMTn.js";import{A as w,u as c,c as m}from"./useSnackbar-FKi4dRLH.js";import{c as C,b as I,d as W}from"./useContactsQueries-nScrN7e5.js";const L=({onSubmit:a=()=>{},onChange:e,formProps:y,renderTopContent:u,renderBottomContent:i,...j})=>{const{data:p=[]}=q(),{register:o,control:k,handleSubmit:b,watch:h,formState:{errors:E}}=F(y),x=h();return S.useEffect(()=>{e==null||e(x)},[e,x]),t.jsx(K,{...j,children:t.jsxs("form",{onSubmit:b(a),style:{...v},children:[u==null?void 0:u(),t.jsxs(r,{container:!0,spacing:2,children:[t.jsx(r,{item:!0,xs:12,children:t.jsx(n,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...o("contactName",{required:!0}),error:!!E.contactName})}),t.jsx(r,{item:!0,xs:12,sm:6,children:t.jsx(n,{fullWidth:!0,label:"Email",type:"text",margin:"none",...o("email")})}),t.jsx(r,{item:!0,xs:12,sm:6,children:t.jsx(n,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...o("phone")})}),t.jsx(r,{item:!0,xs:12,sm:6,children:t.jsx(g,{name:"companyId",control:k,render:({field:d})=>t.jsx(w,{options:p,getOptionKey:s=>s.companyId,getOptionLabel:s=>s.companyName,value:p.find(s=>s.companyId===d.value)||null,onChange:(s,f)=>d.onChange(f?f.companyId:void 0),renderInput:s=>t.jsx(n,{...s,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),t.jsx(r,{item:!0,xs:12,sm:6,children:t.jsx(n,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...o("jobTitle")})})]}),i==null?void 0:i()]})})},M=()=>{const a=l(),{showSnackbar:e}=c();return m({mutationFn:C,onSuccess:()=>{a.invalidateQueries({queryKey:["contacts"]}),e("Kontakt skapat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle skapas.","error")}})},R=()=>{const a=l(),{showSnackbar:e}=c();return m({mutationFn:I,onSuccess:()=>{a.invalidateQueries({queryKey:["contacts"]}),e("Kontakt uppdaterat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},U=()=>{const a=l(),{showSnackbar:e}=c();return m({mutationFn:W,onSuccess:()=>{a.invalidateQueries({queryKey:["contacts"]}),e("Kontakt borttaget!")},onError:()=>{e("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{L as C,R as a,U as b,M as u};
