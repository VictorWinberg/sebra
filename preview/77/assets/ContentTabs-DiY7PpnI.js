import{U as m,r as i,j as r,D as b}from"./index-qKtrV0mz.js";import{T as x,h as P}from"./useSnackbar-BR6trEu1.js";const h={parse:e=>e,serialize:e=>e},f=(e,t,l)=>{const[s,c]=m();return[i.useMemo(()=>{const a=s.get(e);return a!==null?t.parse(a):l??null},[e,t,l,s]),a=>{if(a!==null){const n=t.serialize(a);s.set(e,n)}else s.delete(e);c(s)}]},T=e=>{var o;const[t,l]=i.useState(e.tabs),[s,c]=f("tab",h,e.tabs[0].id);i.useEffect(()=>{l(a=>a.map(n=>e.tabs.find(u=>u.id===n.id)||n))},[e.tabs]);const d=(a,n)=>{c(n)};return r.jsxs(r.Fragment,{children:[r.jsx(x,{value:s,onChange:d,variant:"scrollable",children:t.map(a=>r.jsx(P,{value:a.id,label:r.jsxs("span",{children:[a.label,!1]}),...j(a.id)},a.id))}),r.jsx(b,{}),(o=t.find(a=>a.id===s))==null?void 0:o.content]})},j=e=>({id:`content-tab-${e}`,"aria-controls":`content-tabpanel-${e}`,tabIndex:0});export{T as C};
