import{r as y,j as e,G as s,k as n,l as o}from"./index-CsU6O8Fl.js";import{u as f}from"./index.esm-DJuEhnr5.js";import{F as b,s as h}from"./FlexGrow-woqmNeHj.js";import{u as i,a as u}from"./useSnackbar-BCSexqIW.js";import{c as j,b as F,d as g}from"./useCompaniesQueries-DSCVMV7T.js";const W=({onSubmit:r=()=>{},onChange:t,formProps:m,children:c,...p})=>{const{register:a,handleSubmit:d,watch:x}=f(m),l=x();return y.useEffect(()=>{t==null||t(l)},[t,l]),e.jsx(b,{...p,children:e.jsxs("form",{onSubmit:d(r),style:{...h},children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Bolagsnamn",type:"text",margin:"none",...a("companyName")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Address",type:"text",margin:"none",...a("address")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Industri",type:"text",margin:"none",...a("industry")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Website",type:"text",margin:"none",...a("website")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Telefon",type:"text",margin:"none",...a("phone")})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(n,{fullWidth:!0,label:"Email",type:"text",margin:"none",...a("email")})})]}),c]})})},q=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:j,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag skapat!")},onError:()=>{t("Ett fel uppstod när företaget skulle skapas.","error")}})},Q=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:F,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag uppdaterat!")},onError:()=>{t("Ett fel uppstod när företaget skulle uppdateras.","error")}})},v=()=>{const r=o(),{showSnackbar:t}=i();return u({mutationFn:g,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),t("Företag borttaget!")},onError:()=>{t("Ett fel uppstod när företaget skulle tas bort.","error")}})};export{W as C,Q as a,v as b,q as u};
