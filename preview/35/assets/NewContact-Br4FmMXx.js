import{g as h,j as t,T as j,B as g,G as e,h as r,S as b,f as o,L as y}from"./index-Ds6bCney.js";import{u as k,C as f}from"./index.esm-2XEipy5g.js";import{C}from"./ContentTabs-dsqZgpMh.js";import{u as S}from"./useCompaniesQueries-BmtNvspY.js";import{u as v}from"./useContactsMutations-BE5BOXH9.js";import{A as l}from"./Autocomplete-DatvNdm8.js";import"./useSnackbar-CCgugzdp.js";import"./companiesApi-DmTXd180.js";import"./contactsApi-BgW7hkc_.js";const O=()=>{const{data:m=[]}=S(),{mutate:c}=v(),x=h(),{register:a,control:u,handleSubmit:p}=k(),d=s=>{c(s,{onSuccess:()=>{x("..")}})};return t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",color:"primary",children:"Lägg till kontakt"}),t.jsx(g,{sx:{my:1}}),t.jsxs("form",{onSubmit:p(d),children:[t.jsxs(e,{container:!0,spacing:3,children:[t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(r,{fullWidth:!0,label:"Förnamn",type:"text",margin:"none",...a("firstName")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(r,{fullWidth:!0,label:"Efternamn",type:"text",margin:"none",...a("lastName")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(r,{fullWidth:!0,label:"Email",type:"text",margin:"none",...a("email")})}),t.jsx(e,{item:!0,xs:12,sm:6,children:t.jsx(r,{fullWidth:!0,label:"Telefonnummer",type:"text",margin:"none",...a("phone")})}),t.jsx(e,{item:!0,xs:12,children:t.jsx(f,{name:"companyId",control:u,render:({field:s})=>t.jsx(l,{options:m,getOptionKey:n=>n.companyId,getOptionLabel:n=>n.companyName,onChange:(n,i)=>s.onChange(i?i.companyId:void 0),renderInput:n=>t.jsx(r,{...n,label:"Bolag",variant:"outlined",fullWidth:!0})})})}),t.jsx(e,{item:!0,xs:12,children:t.jsx(l,{multiple:!0,options:I,renderInput:s=>t.jsx(r,{...s,label:"Utskick",name:"dispatch",type:"text"}),limitTags:2,disableCloseOnSelect:!0})}),t.jsx(e,{item:!0,xs:12,children:t.jsx(C,{tabs:[{label:"Interaktioner",content:t.jsx(t.Fragment,{children:"Interaktioner..."})},{label:"Söker",content:t.jsx(t.Fragment,{children:"Söker..."})}]})})]}),t.jsxs(b,{spacing:2,direction:"row",sx:{mt:3},children:[t.jsx(o,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"}),t.jsx(o,{component:y,size:"large",variant:"outlined",color:"primary",to:"..",children:"Avbryt"})]})]})]})},I=[{label:"Utskick Syd"},{label:"Utskick Väst"},{label:"Utskick Norr"},{label:"Utskick Öst"}];export{O as default};
