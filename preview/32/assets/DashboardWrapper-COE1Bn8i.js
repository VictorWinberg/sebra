import{u as n,a as c,j as t,B as l,G as a,T as u,P as h,C as p,L as x,O as b}from"./index-COuMXqaD.js";const i={id:"dashboard",title:"Dashboard",url:"/dashboard"},o=[{id:"assignments",title:"Uppdrag",url:"/dashboard/assignments"},{id:"contacts",title:"Kontakter",url:"/dashboard/contacts"},{id:"companies",title:"Bolag",url:"/dashboard/companies"},{id:"seeking",title:"Söker",url:"/dashboard/seeking"},{id:"reports",title:"Rapport",url:"/dashboard/reports"},{id:"leads",title:"Leads",url:"/dashboard/leads"}],f=()=>{const{pathname:s}=n(),d=c(),r=o.find(e=>s.startsWith(e.url))||i;return t.jsxs(l,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[t.jsxs(a,{container:!0,alignItems:"flex-start",justifyContent:"space-between",children:[t.jsx(a,{item:!0,sm:"auto",children:t.jsx(u,{variant:"h3",lineHeight:1.5,gutterBottom:!0,children:r.title})}),t.jsx(a,{item:!0,sm:"auto",children:t.jsx(h,{style:{width:"100%",maxWidth:"calc(100vw - 52px)",overflowX:"hidden"},children:t.jsx(l,{sx:{display:"flex",gap:2},children:o.map(e=>t.jsx(p,{component:x,label:e.title,to:e.url===r.url?i.url:e.url,color:"primary",variant:s.startsWith(e.url)?"filled":"outlined",sx:{borderColor:d.palette.grey[200],px:1,mb:1},clickable:!0},e.id))})})})]}),t.jsx(b,{})]})};export{f as default};
