import{b as c,c as m,j as e,F as p,d as i,C as r,L as l,O as u}from"./index-CgpUjrG9.js";import{T as b,a as f}from"./Tabs-CTVvfy_B.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="835a85f0-9506-4940-a8bc-5f6259b68485",t._sentryDebugIdIdentifier="sentry-dbid-835a85f0-9506-4940-a8bc-5f6259b68485")}catch{}})();const d=[{id:"home",title:"Hem",url:"/home"},{id:"assignments",title:"Uppdrag",url:"/home/assignments"},{id:"contacts",title:"Kontakter",url:"/home/contacts"},{id:"companies",title:"Bolag",url:"/home/companies"},{id:"leads",title:"Leads",url:"/home/leads"}],g=()=>{const{pathname:t}=c(),{workspace:a}=m(),o=d.findLastIndex(s=>t.startsWith(`/${a}${s.url}`));return e.jsxs(p,{children:[e.jsx(b,{variant:"scrollable",value:o,sx:{minHeight:0},TabIndicatorProps:{sx:{display:"none"}},children:d.map((s,n)=>e.jsx(f,{component:"div",sx:{p:0,m:0,mr:1,minHeight:0,minWidth:0,fontWeight:400},disableRipple:!0,label:e.jsxs(e.Fragment,{children:[e.jsx(i,{in:n===o,timeout:300,children:e.jsx(r,{component:l,label:s.title,to:`/${a}${s.url}`,color:"primary",variant:"filled",sx:{px:1,"&:hover":{backgroundColor:"primary.main"}},clickable:!0})}),e.jsx(i,{in:n!==o,timeout:300,children:e.jsx(r,{component:l,label:s.title,to:`/${a}${s.url}`,color:"primary",variant:"outlined",sx:{px:1,position:"absolute",top:0,left:0},style:{boxShadow:"none"},clickable:!0})})]})},s.id))}),e.jsx(u,{})]})};export{g as default};
//# sourceMappingURL=HomeWrapper-B3vV-W8W.js.map
