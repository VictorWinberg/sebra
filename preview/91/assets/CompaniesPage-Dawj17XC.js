import{j as t,f as p,L as l}from"./index-C68uxFow.js";import{D as c,a as d,b as u,M as x}from"./useSnackbar-IbPMwxUD.js";import{D as C}from"./DataTable-CB_g2NCl.js";import{F as g}from"./FlexGrow-BjAwpfp0.js";import{u as f,a as j,b as y,C as h}from"./useCompaniesMutations-CUwqEu3z.js";import{c as D}from"./CompanyConfig-FLq-Pifg.js";import{u as b}from"./useCompaniesQueries-CeXfCsBH.js";import{A as T}from"./Add-Cx8eRpoL.js";import"./MoreHoriz-CE7Hhhk3.js";import"./index.esm-GmGmR4-9.js";import"./Tooltip-nwNLAkuZ.js";import"./useQueryParam-C7EfKUfH.js";import"./date-BAyLRcM8.js";const k=()=>{const{data:a=[],isLoading:e}=b(),{mutate:s}=f(),{mutate:n}=j(),{mutate:r}=y();return t.jsx(g,{children:t.jsx(C,{data:a,columns:D,getRowId:o=>`${o.companyId}`,state:{isLoading:e},onCreate:o=>s(o),onUpdate:o=>n(o),onDelete:o=>r(o),renderTopToolbarCustomActions:()=>t.jsx(p,{component:l,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(T,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:o,table:m})=>t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"h4",color:"primary",children:"Redigera bolag"}),t.jsx(d,{children:t.jsx(h,{sx:{mt:1},formProps:{values:o.original},onChange:i=>{o._valuesCache=i}})}),t.jsx(u,{children:t.jsx(x,{row:o,table:m,variant:"text"})})]})})})};export{k as default};
