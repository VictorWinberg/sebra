import{r as o,j as s,D as c}from"./index-Ab0S3KPw.js";import{u,S as m}from"./useQueryParam-D6b-Itm4.js";import{T as y,a as x}from"./Tabs-D4Wsyrfu.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="d522d50b-09fa-4f22-b352-2e0609f2b2d8",e._sentryDebugIdIdentifier="sentry-dbid-d522d50b-09fa-4f22-b352-2e0609f2b2d8")}catch{}})();const v=e=>{var i;const[a,d]=o.useState(e.tabs),[r,b]=u("tab",m,e.tabs[0].id);o.useEffect(()=>{d(t=>t.map(n=>e.tabs.find(f=>f.id===n.id)||n))},[e.tabs]);const l=(t,n)=>{b(n)};return s.jsxs(s.Fragment,{children:[s.jsx(y,{value:r,onChange:l,variant:"scrollable",children:a.map(t=>s.jsx(x,{value:t.id,label:s.jsxs("span",{children:[t.label,!1]}),...g(t.id)},t.id))}),s.jsx(c,{}),(i=a.find(t=>t.id===r))==null?void 0:i.content]})},g=e=>({id:`content-tab-${e}`,"aria-controls":`content-tabpanel-${e}`,tabIndex:0});export{v as C};
//# sourceMappingURL=ContentTabs-CljxWgFG.js.map