import{j as t,B as a,f as i,L as m}from"./index-OuEt6EZx.js";import{A as d,D as l}from"./DataTable-DaxU2we6.js";import{u}from"./useContactsQueries-xsvHuMzh.js";import{u as p,a as c}from"./useContactsMutations-C4fCnzo8.js";import"./Autocomplete-V3T55gLW.js";import"./IconButton-o7UhLWiW.js";import"./Skeleton-BMVoYtl0.js";import"./FormControlLabel-CkN3Fu5X.js";import"./Tooltip-D1pIfEHg.js";import"./useQuery-BGtXHysN.js";import"./object-CoMARnot.js";import"./contactsApi-CQ45DIfF.js";const f=[{field:"firstName",headerName:"Förnamn",editable:!0},{field:"lastName",headerName:"Efternamn",editable:!0},{field:"companyName",headerName:"Bolag"},{field:"email",headerName:"Email",editable:!0},{field:"phone",headerName:"Telefonnummer",editable:!0},{field:"updatedAt",headerName:"Senast uppdaterad",headerAlign:"right",align:"right"}],R=()=>{const{data:o=[],isLoading:r}=u(),{mutate:n}=p(),{mutate:s}=c();return t.jsxs(a,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[t.jsx(a,{children:t.jsx(i,{component:m,to:"new",variant:"outlined",size:"small",startIcon:t.jsx(d,{}),sx:{textTransform:"none"},children:"Lägg till kontakt"})}),t.jsx(l,{rows:o,columns:f,getRowId:e=>e.contactId,loading:r,autosizeOnMount:!0,autosizeOptions:{expand:!0},processRowUpdate:e=>(n(e),e),processRowDelete:e=>{s(Number(e))},showActions:!0})]})};export{R as default};
