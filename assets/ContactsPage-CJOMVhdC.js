import{q as r,j as e,B as o,f as s,L as i}from"./index-1svpJYwy.js";import{A as l,D as m}from"./DataTable-BgwH75AZ.js";import{u as d}from"./useQuery-DftO3RFX.js";import"./Autocomplete-Id9QKEys.js";import"./IconButton-CF1nXYwE.js";import"./Skeleton-DaHZZztk.js";import"./FormControlLabel-uYdXwa5a.js";import"./Tooltip-zDVOeUeN.js";import"./utils-km2FGkQ4.js";const c=async()=>await r(`
    SELECT * FROM contacts
    LEFT JOIN companies USING (company_id)
`),u=()=>d({queryKey:["contacts"],queryFn:c}),p=[{field:"name",headerName:"Namn",valueGetter:(a,t)=>`${t.firstName||""} ${t.lastName||""}`.trim()},{field:"companyName",headerName:"Bolag",editable:!0},{field:"email",headerName:"Email",editable:!0},{field:"phone",headerName:"Telefonnummer",editable:!0},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],A=()=>{const{data:a=[],isLoading:t}=u();return e.jsxs(o,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(o,{children:e.jsx(s,{component:i,to:"new",variant:"outlined",size:"small",startIcon:e.jsx(l,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"})}),e.jsx(m,{rows:a,columns:p,getRowId:n=>n.contactId,loading:t,autosizeOnMount:!0,autosizeOptions:{expand:!0},onRowClick:console.log,showActions:!0})]})};export{A as default};