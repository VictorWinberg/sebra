import{r as b,j as t,D as f}from"./index-D7kQbbEZ.js";import{u,S as m}from"./useQueryParam-B0MThAFP.js";import{T as y,a as x}from"./Tabs-Cue285iL.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="0be97d21-acf3-4da6-b07a-98c3ebe2bb6c",e._sentryDebugIdIdentifier="sentry-dbid-0be97d21-acf3-4da6-b07a-98c3ebe2bb6c")}catch{}})();const v=e=>{var i;const[s,d]=b.useState(e.tabs),[r,o]=u("tab",m,e.tabs[0].id);b.useEffect(()=>{d(a=>a.map(n=>e.tabs.find(l=>l.id===n.id)||n))},[e.tabs]);const c=(a,n)=>{o(n)};return t.jsxs(t.Fragment,{children:[t.jsx(y,{value:r,onChange:c,variant:"scrollable",children:s.map(a=>t.jsx(x,{value:a.id,label:t.jsxs("span",{children:[a.label,!1]}),...g(a.id)},a.id))}),t.jsx(f,{}),(i=s.find(a=>a.id===r))==null?void 0:i.content]})},g=e=>({id:`content-tab-${e}`,"aria-controls":`content-tabpanel-${e}`,tabIndex:0});export{v as C};
//# sourceMappingURL=ContentTabs-DN0ODHvo.js.map