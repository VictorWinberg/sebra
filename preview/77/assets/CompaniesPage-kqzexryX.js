import{j as e,f as l,L as s,g as c,i as p}from"./index-qKtrV0mz.js";import{D as u,a as g,b as x,M as C}from"./useSnackbar-BR6trEu1.js";import{D as f}from"./DataTable-CwmzEswp.js";import{F as y}from"./FlexGrow-DqGyOJPY.js";import{f as h,t as j}from"./date-BXnDE4F6.js";import{u as b,a as D,b as A,C as T}from"./useCompaniesMutations-D1sgCHiD.js";import{u as F}from"./useCompaniesQueries-Dg97BjZE.js";import{A as L}from"./Add-RdK4b6GV.js";import"./MoreHoriz-Cxn0_NxL.js";import"./index.esm-DgEwvW9Q.js";import"./Tooltip-BX20npmk.js";const v=[{accessorKey:"companyName",header:"Företagsnamn",Cell:({cell:t,row:o})=>e.jsx(c,{component:s,to:`/dashboard/companies/${o.original.companyId}`,children:t.getValue()})},{accessorKey:"address",header:"Address"},{accessorKey:"industry",header:"Industri",filterVariant:"multi-select"},{accessorKey:"website",header:"Website"},{accessorFn:t=>p.utc(t.updatedAt),header:"Senast uppdaterad",filterVariant:"date-range",enableEditing:!1,Cell:({cell:t})=>h(j(t.getValue()))}],U=()=>{const{data:t=[],isLoading:o}=F(),{mutate:r}=b(),{mutate:n}=D(),{mutate:i}=A();return e.jsx(y,{children:e.jsx(f,{data:t,columns:v,getRowId:a=>`${a.companyId}`,state:{isLoading:o},onCreate:a=>r(a),onUpdate:a=>n(a),onDelete:a=>i(a),renderTopToolbarCustomActions:()=>e.jsx(l,{component:s,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(L,{}),sx:{textTransform:"none"},children:"Lägg till bolag"}),renderEditRowDialogContent:({row:a,table:m})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"h4",color:"primary",children:"Redigera bolag"}),e.jsx(g,{children:e.jsx(T,{sx:{mt:1},formProps:{values:a.original},onChange:d=>{a._valuesCache=d}})}),e.jsx(x,{children:e.jsx(C,{row:a,table:m,variant:"text"})})]})})})};export{U as default};
