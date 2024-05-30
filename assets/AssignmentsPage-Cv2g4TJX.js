import{q as r,j as e,B as s,f as i,L as o}from"./index-7zkMYh96.js";import{A as m,D as l}from"./DataTable-B56id-x0.js";import{u}from"./useQuery-CD-55HbE.js";import"./Autocomplete-CoIBaqQ5.js";import"./IconButton-tpYYir_0.js";import"./Skeleton-CjD_dCHi.js";import"./FormControlLabel-ntUp_Buk.js";import"./Tooltip-DNAfwDcy.js";const d=async()=>await r(`
    SELECT * FROM assignments
    LEFT JOIN contacts USING (contact_id)
    LEFT JOIN companies USING (company_id)
    `),c=()=>u({queryKey:["assignments"],queryFn:d}),p=[{field:"assignmentName",headerName:"Uppdragsnamn",editable:!0},{field:"companyName",headerName:"Bolag",editable:!0},{field:"email",headerName:"Email",editable:!0},{field:"responsible",headerName:"Ansvarig",sortable:!1,valueGetter:(t,a)=>`${a.assignmentName||""}`},{field:"status",headerName:"Status",sortable:!1,editable:!0},{field:"fee",headerName:"Arvode",type:"number",editable:!0,renderCell:({value:t})=>Number(t).toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}],E=()=>{const{data:t=[],isLoading:a}=c();return e.jsxs(s,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(s,{children:e.jsx(i,{component:o,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(m,{}),sx:{textTransform:"none"},children:"Lägg till uppdrag"})}),e.jsx(l,{rows:t,columns:p,getRowId:n=>n.assignmentId,loading:a,autosizeOnMount:!0,autosizeOptions:{expand:!0},onRowClick:console.log,showActions:!0})]})};export{E as default};
