import{j as t,U as g,V as u,C as p,W as f,X as b}from"./index-CgpUjrG9.js";import{D as y}from"./DataTable-BaJPfGfe.js";import{R as o}from"./RouterLink-DTBKzUyY.js";import{S as h}from"./SebraDialog-C-5ItgT9.js";import{u as x,a as A,b as C,A as D}from"./useAssignmentsMutations-Begucttx.js";import{L as r}from"./Link-Chevvt64.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new s.Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="212f3660-a42f-46be-8c1b-ca1a4a5e8fd2",s._sentryDebugIdIdentifier="sentry-dbid-212f3660-a42f-46be-8c1b-ca1a4a5e8fd2")}catch{}})();const F=({assignments:s,isLoading:i,defaultValues:l})=>{const{mutate:c}=x(),{mutate:d}=A(),{mutate:m}=C();return t.jsx(y,{data:s,getRowId:e=>`${e.id}`,state:{isLoading:i},columns:[{accessorKey:"assignmentName",header:"Uppdrag",Cell:({cell:e,row:a})=>t.jsx(r,{component:o,to:`/home/assignments/${a.original.id}`,children:e.getValue()})},{accessorKey:"responsibleContacts",header:"Ansvariga",enableEditing:!1,Cell:({cell:e})=>t.jsx(g,{disablePadding:!0,children:e.getValue().map(a=>t.jsx(u,{sx:{py:.25},disableGutters:!0,children:t.jsx(p,{component:o,variant:"outlined",avatar:t.jsx(f,{...b(a.contactName)}),label:a.contactName,to:`/home/contacts/${a.id}`,clickable:!0,size:"small"})},a.id))})},{accessorFn:e=>{var a;return(a=e.externalContact)==null?void 0:a.contactName},header:"Extern",enableEditing:!1,Cell:({cell:e,row:a})=>{var n;return t.jsx(r,{component:o,to:`/home/contacts/${(n=a.original.externalContact)==null?void 0:n.id}`,children:e.getValue()})}},{accessorFn:e=>{var a;return(a=e.company)==null?void 0:a.companyName},header:"Bolag",enableEditing:!1,Cell:({cell:e,row:a})=>{var n;return t.jsx(r,{component:o,to:`/home/companies/${(n=a.original.company)==null?void 0:n.id}`,children:e.getValue()})}},{accessorKey:"status",header:"Status"},{accessorKey:"fee",header:"Arvode",Cell:({cell:e})=>{var a;return(a=e.getValue())==null?void 0:a.toLocaleString("sv-SE",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0})}}],renderEditRowDialogContent:({row:e,table:a})=>t.jsx(h,{table:a,row:e,titles:{creating:"Lägg till uppdrag",editing:"Redigera uppdrag"},FormComponent:D,defaultValues:l}),onCreate:e=>c(e),onUpdate:e=>d(e),onDelete:e=>m(e)})};export{F as A};
//# sourceMappingURL=AssignmentTable-BiNzaAwh.js.map
