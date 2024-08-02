import{r as S,j as t,G as n,w as a,t as i}from"./index-4PX0GDns.js";import{u as E,C as g}from"./index.esm-C8xDLONX.js";import{u as F}from"./useCompaniesQueries-YLUawmXV.js";import{F as q,s as K}from"./FlexGrow-DAzKFTpd.js";import{A as x,u,c}from"./useSnackbar-FSlAWeyv.js";import{c as v,b as w,d as I}from"./useContactsQueries-ctazbvQT.js";const O=({onSubmit:r=()=>{},onChange:e,formProps:k,children:y,...b})=>{const{data:m=[]}=F(),{register:o,control:f,handleSubmit:j,watch:h,formState:{errors:C}}=E(k),p=h();return S.useEffect(()=>{e==null||e(p)},[e,p]),t.jsx(q,{...b,children:t.jsxs("form",{onSubmit:j(r),style:{...K},children:[t.jsxs(n,{container:!0,spacing:2,children:[t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(a,{fullWidth:!0,label:"Namn",type:"text",margin:"none",...o("contactName",{required:!0}),error:!!C.contactName})}),t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(a,{fullWidth:!0,label:"Email",type:"text",margin:"none",...o("email")})}),t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(a,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...o("phone")})}),t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(g,{name:"companyId",control:f,render:({field:l})=>t.jsx(x,{options:m,getOptionKey:s=>s.companyId,getOptionLabel:s=>s.companyName,value:m.find(s=>s.companyId===l.value)||null,onChange:(s,d)=>l.onChange(d?d.companyId:void 0),renderInput:s=>t.jsx(a,{...s,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(a,{fullWidth:!0,label:"Befattning",type:"text",margin:"none",...o("jobTitle")})}),t.jsx(n,{item:!0,xs:12,sm:6,children:t.jsx(x,{multiple:!0,options:U,renderInput:l=>t.jsx(a,{...l,label:"Utskick",name:"dispatch",type:"text"}),limitTags:2,disableCloseOnSelect:!0})})]}),y]})})},U=[{label:"Utskick Syd"},{label:"Utskick Väst"},{label:"Utskick Norr"},{label:"Utskick Öst"}],A=()=>{const r=i(),{showSnackbar:e}=u();return c({mutationFn:v,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt skapat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle skapas.","error")}})},B=()=>{const r=i(),{showSnackbar:e}=u();return c({mutationFn:w,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt uppdaterat!")},onError:()=>{e("Ett fel uppstod när kontakten skulle uppdateras.","error")}})},L=()=>{const r=i(),{showSnackbar:e}=u();return c({mutationFn:I,onSuccess:()=>{r.invalidateQueries({queryKey:["contacts"]}),e("Kontakt borttaget!")},onError:()=>{e("Ett fel uppstod när kontakten skulle tas bort.","error")}})};export{O as C,B as a,L as b,A as u};