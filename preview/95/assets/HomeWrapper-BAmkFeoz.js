import{u as n,a as c,j as t,G as r,P as d,B as u,C as m,L as p,O as h}from"./index-jNbj5-Yn.js";import{F as x}from"./FlexGrow-DaKG00bv.js";const a={id:"home",title:"Hem",url:"/home"},l=[{id:"assignments",title:"Uppdrag",url:"/home/assignments"},{id:"contacts",title:"Kontakter",url:"/home/contacts"},{id:"companies",title:"Bolag",url:"/home/companies"},{id:"seeking",title:"Söker",url:"/home/seeking"},{id:"reports",title:"Rapport",url:"/home/reports"},{id:"leads",title:"Leads",url:"/home/leads"}],b=()=>{const{pathname:s}=n(),o=c(),i=l.find(e=>s.startsWith(e.url))||a;return t.jsxs(x,{children:[t.jsx(r,{container:!0,alignItems:"flex-start",justifyContent:"space-between",children:t.jsx(r,{item:!0,sm:"auto",children:t.jsx(d,{style:{width:"100%",maxWidth:"calc(100vw - 52px)",overflowX:"hidden"},children:t.jsx(u,{sx:{display:"flex",gap:2},children:l.map(e=>t.jsx(m,{component:p,label:e.title,to:e.url===i.url?a.url:e.url,color:"primary",variant:s.startsWith(e.url)?"filled":"outlined",sx:{borderColor:o.palette.grey[200],px:1,mb:1},clickable:!0},e.id))})})})}),t.jsx(h,{})]})};export{b as default};
