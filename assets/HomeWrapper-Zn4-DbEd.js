import{u as m,j as t,F as c,a as o,C as i,L as l,O as d}from"./index-Bu3rOK7V.js";import{T as p,a as u}from"./Tabs-BKFvS1DG.js";const n=[{id:"home",title:"Hem",url:"/home"},{id:"assignments",title:"Uppdrag",url:"/home/assignments"},{id:"contacts",title:"Kontakter",url:"/home/contacts"},{id:"companies",title:"Bolag",url:"/home/companies"},{id:"leads",title:"Leads",url:"/home/leads"}],b=()=>{const{pathname:r}=m(),a=n.findLastIndex(e=>r.startsWith(e.url));return t.jsxs(c,{children:[t.jsx(p,{variant:"scrollable",value:a,sx:{minHeight:0},TabIndicatorProps:{sx:{display:"none"}},children:n.map((e,s)=>t.jsx(u,{component:"div",sx:{p:0,m:0,mr:1,minHeight:0,minWidth:0,fontWeight:400},disableRipple:!0,label:t.jsxs(t.Fragment,{children:[t.jsx(o,{in:s===a,timeout:300,children:t.jsx(i,{component:l,label:e.title,to:e.url,color:"primary",variant:"filled",sx:{px:1,"&:hover":{backgroundColor:"primary.main"}},clickable:!0})}),t.jsx(o,{in:s!==a,timeout:300,children:t.jsx(i,{component:l,label:e.title,to:e.url,color:"primary",variant:"outlined",sx:{px:1,position:"absolute",top:0,left:0},style:{boxShadow:"none"},clickable:!0})})]})},e.id))}),t.jsx(d,{})]})};export{b as default};