import{r as o,j as s,D as m}from"./index-L1L35c__.js";import{u as x,S as u}from"./useQueryParam-ehg0XFZT.js";import{T as f,a as j}from"./Tabs-BtPJqpS7.js";const C=e=>{var i;const[n,l]=o.useState(e.tabs),[r,c]=x("tab",u,e.tabs[0].id);o.useEffect(()=>{l(a=>a.map(t=>e.tabs.find(b=>b.id===t.id)||t))},[e.tabs]);const d=(a,t)=>{c(t)};return s.jsxs(s.Fragment,{children:[s.jsx(f,{value:r,onChange:d,variant:"scrollable",children:n.map(a=>s.jsx(j,{value:a.id,label:s.jsxs("span",{children:[a.label,!1]}),...h(a.id)},a.id))}),s.jsx(m,{}),(i=n.find(a=>a.id===r))==null?void 0:i.content]})},h=e=>({id:`content-tab-${e}`,"aria-controls":`content-tabpanel-${e}`,tabIndex:0});export{C};
