import{j as o,f as m}from"./index-DFA1-aob.js";import{D as c,d as l}from"./DataTable-DKOnhi1J.js";import{F as p}from"./FlexGrow-CWXYGkRy.js";import{S as u}from"./SebraDialog-BA8LCyr1.js";import{u as d,a as C,b as g,C as f}from"./useContactsMutations-DRGRpe4f.js";import{c as x}from"./ContactConfig-DOYY0R5S.js";import{u as j}from"./useContactsQueries-rcfqKxji.js";import"./useSnackbar-CCfpnRuD.js";import"./MoreHoriz-Cfj3PZ_4.js";import"./index.esm-FWDVyD6a.js";import"./Tooltip-Sh9O8kPd.js";import"./useQueryParam-ZH59eNdE.js";import"./useCompaniesQueries-B4_0YUS1.js";import"./date-BDFtmjFv.js";const z=()=>{const{data:a=[],isLoading:e}=j(),{mutate:n}=d(),{mutate:r}=C(),{mutate:s}=g();return o.jsx(p,{children:o.jsx(c,{data:a,columns:x,getRowId:t=>`${t.contactId}`,state:{isLoading:e},onCreate:t=>n(t),onUpdate:t=>r(t),onDelete:t=>s(t),renderTopToolbarCustomActions:({table:t})=>o.jsx(m,{onClick:()=>t.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:o.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"}),renderEditRowDialogContent:({row:t,table:i})=>o.jsx(u,{table:i,row:t,titles:{creating:"Lägg till kontakt",editing:"Redigera kontakt"},FormComponent:f})})})};export{z as default};
