import{j as e,G as r,w as a,t as o}from"./index-DyjmdRSC.js";import{u as p}from"./index.esm-CwNn21lM.js";import{S as c,u as i,a as u}from"./useSnackbar-BAxIYe6h.js";import{c as d,b as x,d as y}from"./useCompaniesQueries-CKTQVe94.js";const f=({formProps:s,...t})=>{const{register:n,handleSubmit:l,formState:{errors:m}}=p(s);return e.jsx(c,{...t,handleSubmit:l,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{fullWidth:!0,label:"Bolagsnamn",type:"text",margin:"none",...n("companyName",{required:!0}),error:!!m.companyName})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Address",type:"text",margin:"none",...n("address")})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Industri",type:"text",margin:"none",...n("industry")})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Website",type:"text",margin:"none",...n("website")})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Telefon",type:"text",margin:"none",...n("phone")})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Email",type:"text",margin:"none",...n("email")})}),e.jsx(r,{item:!0,xs:12,sm:4,children:e.jsx(a,{fullWidth:!0,label:"Org.nr",type:"text",margin:"none",...n("organizationNumber")})})]})})},C=()=>{const s=o(),{showSnackbar:t}=i();return u({mutationFn:d,onSuccess:()=>{s.invalidateQueries({queryKey:["companies"]}),t("Bolag skapat!")},onError:()=>{t("Ett fel uppstod när bolaget skulle skapas.","error")}})},S=()=>{const s=o(),{showSnackbar:t}=i();return u({mutationFn:x,onSuccess:()=>{s.invalidateQueries({queryKey:["companies"]}),t("Bolag uppdaterat!")},onError:()=>{t("Ett fel uppstod när bolaget skulle uppdateras.","error")}})},k=()=>{const s=o(),{showSnackbar:t}=i();return u({mutationFn:y,onSuccess:()=>{s.invalidateQueries({queryKey:["companies"]}),t("Bolag borttaget!")},onError:()=>{t("Ett fel uppstod när bolaget skulle tas bort.","error")}})};export{f as C,S as a,k as b,C as u};
