import{s as m,r as i,j as r,D as b}from"./index-B4iwOTaG.js";import{T as x,f as P}from"./useSnackbar-D4nO6t3o.js";const f={parse:e=>e,serialize:e=>e},h=(e,t,l)=>{const[a,c]=m();return[i.useMemo(()=>{const s=a.get(e);return s!==null?t.parse(s):l??null},[e,t,l,a]),s=>{if(s!==null){const n=t.serialize(s);a.set(e,n)}else a.delete(e);c(a)}]},T=e=>{var o;const[t,l]=i.useState(e.tabs),[a,c]=h("tab",f,e.tabs[0].id);i.useEffect(()=>{l(s=>s.map(n=>e.tabs.find(u=>u.id===n.id)||n))},[e.tabs]);const d=(s,n)=>{c(n)};return r.jsxs(r.Fragment,{children:[r.jsx(x,{value:a,onChange:d,variant:"scrollable",children:t.map(s=>r.jsx(P,{value:s.id,label:r.jsxs("span",{children:[s.label,!1]}),...j(s.id)},s.id))}),r.jsx(b,{}),(o=t.find(s=>s.id===a))==null?void 0:o.content]})},j=e=>({id:`content-tab-${e}`,"aria-controls":`content-tabpanel-${e}`,tabIndex:0});export{T as C};
