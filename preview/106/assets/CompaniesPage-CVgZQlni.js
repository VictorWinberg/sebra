import{g as p,j as t,F as l,h as u}from"./index-B5Wn1pV6.js";import{D as d}from"./DataTable-CHC-0lOI.js";import{S as c}from"./SebraDialog-DMHdke9R.js";import{u as g,a as C,b as x,C as f}from"./useCompaniesMutations-B1oLkbW6.js";import{c as y}from"./CompanyConfig-F1YHgULV.js";import{u as b}from"./useCompaniesQueries-Bc9ksEnf.js";import{A as j}from"./Add-DOL9kkke.js";import"./useSnackbar-DKcC1YFu.js";import"./MoreHoriz-1-Hni6Yv.js";import"./index.esm-DVlgypon.js";import"./Tooltip-BOs_SEaO.js";import"./Tabs-CVL9e8Ya.js";import"./useQueryParam-B9tnBKyX.js";import"./date-CTTbm3Z8.js";const k=()=>{const e=p(),{data:s=[],isLoading:n}=b(),{mutate:r}=g(),{mutate:m}=C(),{mutate:i}=x();return t.jsx(l,{children:t.jsx(d,{data:s,columns:y,getRowId:o=>`${o.id}`,state:{isLoading:n},onCreate:o=>r(o,{onSuccess:a=>e(`/home/companies/${a.id}`)}),onUpdate:o=>m(o),onDelete:o=>i(o),renderTopToolbarCustomActions:({table:o})=>t.jsx(u,{onClick:()=>o.setCreatingRow(!0),variant:"outlined",size:"small",startIcon:t.jsx(j,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:o,table:a})=>t.jsx(c,{table:a,row:o,titles:{creating:"Lägg till bolag",editing:"Redigera bolag"},FormComponent:f})})})};export{k as default};
