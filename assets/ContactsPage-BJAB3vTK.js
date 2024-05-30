import{q as r,j as e,B as o,f as s,L as i}from"./index-7zkMYh96.js";import{A as l,D as m}from"./DataTable-B56id-x0.js";import{u as d}from"./useQuery-CD-55HbE.js";import"./Autocomplete-CoIBaqQ5.js";import"./IconButton-tpYYir_0.js";import"./Skeleton-CjD_dCHi.js";import"./FormControlLabel-ntUp_Buk.js";import"./Tooltip-DNAfwDcy.js";const c=async()=>await r(`
    SELECT * FROM contacts
    LEFT JOIN companies USING (company_id)
`),u=()=>d({queryKey:["contacts"],queryFn:c}),p=[{field:"name",headerName:"Namn",valueGetter:(a,t)=>`${t.firstName||""} ${t.lastName||""}`.trim()},{field:"companyName",headerName:"Bolag",editable:!0},{field:"email",headerName:"Email",editable:!0},{field:"phone",headerName:"Telefonnummer",editable:!0},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],L=()=>{const{data:a=[],isLoading:t}=u();return e.jsxs(o,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(o,{children:e.jsx(s,{component:i,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"})}),e.jsx(m,{rows:a,columns:p,getRowId:n=>n.contactId,loading:t,autosizeOnMount:!0,autosizeOptions:{expand:!0},onRowClick:console.log,showActions:!0})]})};export{L as default};
