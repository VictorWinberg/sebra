import{r as f,j as e,G as t,t as i,s as n}from"./index-Cb92esh7.js";import{u as j}from"./index.esm-CeMCaMQX.js";import{F as h,s as g}from"./FlexGrow-DDYQqbDr.js";import{u as o,c as m}from"./useSnackbar-BO7AuKFX.js";import{c as E,b as S,d as k}from"./useCompaniesQueries-wbvMxk55.js";const v=({onSubmit:r=()=>{},onChange:s,formProps:p,renderTopContent:l,renderBottomContent:u,...x})=>{const{register:a,handleSubmit:d,watch:y,formState:{errors:b}}=j(p),c=y();return f.useEffect(()=>{s==null||s(c)},[s,c]),e.jsx(h,{...x,children:e.jsxs("form",{onSubmit:d(r),style:{...g},children:[l==null?void 0:l(),e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(i,{fullWidth:!0,label:"Bolagsnamn",type:"text",margin:"none",...a("companyName",{required:!0}),error:!!b.companyName})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Address",type:"text",margin:"none",...a("address")})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Industri",type:"text",margin:"none",...a("industry")})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Website",type:"text",margin:"none",...a("website")})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Telefon",type:"text",margin:"none",...a("phone")})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Email",type:"text",margin:"none",...a("email")})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Org.nr",type:"text",margin:"none",...a("organizationNumber")})})]}),u==null?void 0:u()]})})},G=()=>{const r=n(),{showSnackbar:s}=o();return m({mutationFn:E,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),s("Bolag skapat!")},onError:()=>{s("Ett fel uppstod när bolaget skulle skapas.","error")}})},K=()=>{const r=n(),{showSnackbar:s}=o();return m({mutationFn:S,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),s("Bolag uppdaterat!")},onError:()=>{s("Ett fel uppstod när bolaget skulle uppdateras.","error")}})},N=()=>{const r=n(),{showSnackbar:s}=o();return m({mutationFn:k,onSuccess:()=>{r.invalidateQueries({queryKey:["companies"]}),s("Bolag borttaget!")},onError:()=>{s("Ett fel uppstod när bolaget skulle tas bort.","error")}})};export{v as C,K as a,N as b,G as u};
