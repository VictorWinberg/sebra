import{u as d,j as e,F as c,a as n,C as i,L as r,O as m}from"./index-8MMrl1Jf.js";import{T as p,a as u}from"./Tabs-DpcHpKks.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new a.Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="4f2e8538-0588-4f08-8350-38d0371a6eaa",a._sentryDebugIdIdentifier="sentry-dbid-4f2e8538-0588-4f08-8350-38d0371a6eaa")}catch{}})();const l=[{id:"home",title:"Hem",url:"/home"},{id:"assignments",title:"Uppdrag",url:"/home/assignments"},{id:"contacts",title:"Kontakter",url:"/home/contacts"},{id:"companies",title:"Bolag",url:"/home/companies"},{id:"leads",title:"Leads",url:"/home/leads"}],h=()=>{const{pathname:a}=d(),s=l.findLastIndex(t=>a.startsWith(t.url));return e.jsxs(c,{children:[e.jsx(p,{variant:"scrollable",value:s,sx:{minHeight:0},TabIndicatorProps:{sx:{display:"none"}},children:l.map((t,o)=>e.jsx(u,{component:"div",sx:{p:0,m:0,mr:1,minHeight:0,minWidth:0,fontWeight:400},disableRipple:!0,label:e.jsxs(e.Fragment,{children:[e.jsx(n,{in:o===s,timeout:300,children:e.jsx(i,{component:r,label:t.title,to:t.url,color:"primary",variant:"filled",sx:{px:1,"&:hover":{backgroundColor:"primary.main"}},clickable:!0})}),e.jsx(n,{in:o!==s,timeout:300,children:e.jsx(i,{component:r,label:t.title,to:t.url,color:"primary",variant:"outlined",sx:{px:1,position:"absolute",top:0,left:0},style:{boxShadow:"none"},clickable:!0})})]})},t.id))}),e.jsx(m,{})]})};export{h as default};
//# sourceMappingURL=HomeWrapper-DsdBAWFx.js.map
