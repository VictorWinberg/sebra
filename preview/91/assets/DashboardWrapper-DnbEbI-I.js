import{u as i,a as n,j as a,G as r,P as c,B as u,C as p,L as h,O as b}from"./index-C68uxFow.js";import{F as x}from"./FlexGrow-BjAwpfp0.js";const e={id:"dashboard",title:"Dashboard",url:"/dashboard"},l=[{id:"assignments",title:"Uppdrag",url:"/dashboard/assignments"},{id:"contacts",title:"Kontakter",url:"/dashboard/contacts"},{id:"companies",title:"Bolag",url:"/dashboard/companies"},{id:"seeking",title:"Söker",url:"/dashboard/seeking"},{id:"reports",title:"Rapport",url:"/dashboard/reports"},{id:"leads",title:"Leads",url:"/dashboard/leads"}],j=()=>{const{pathname:s}=i(),o=n(),d=l.find(t=>s.startsWith(t.url))||e;return a.jsxs(x,{children:[a.jsx(r,{container:!0,alignItems:"flex-start",justifyContent:"space-between",children:a.jsx(r,{item:!0,sm:"auto",children:a.jsx(c,{style:{width:"100%",maxWidth:"calc(100vw - 52px)",overflowX:"hidden"},children:a.jsx(u,{sx:{display:"flex",gap:2},children:l.map(t=>a.jsx(p,{component:h,label:t.title,to:t.url===d.url?e.url:t.url,color:"primary",variant:s.startsWith(t.url)?"filled":"outlined",sx:{borderColor:o.palette.grey[200],px:1,mb:1},clickable:!0},t.id))})})})}),a.jsx(b,{})]})};export{j as default};
