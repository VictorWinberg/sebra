import{K as F,j as e,_ as M,$ as P,a0 as z,F as A,I,T as $,a1 as q,f as C,a2 as y,a3 as E,r as B,B as H,J as u,l as O}from"./index-BrEZVVZU.js";import{f as G,j as V,k as p}from"./useSnackbar-CHVXOGIw.js";import{u as R,F as K,S as W}from"./useQueryParam-Da5TSr2V.js";import{s as b}from"./FlexGrow-D9SxHobT.js";import{T as D}from"./Tooltip-XeHI6cq4.js";const J=F(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),L=({children:i,...r})=>e.jsx(M,{variant:"popover",popupId:`delete-popup-${r.id}`,children:t=>e.jsxs(e.Fragment,{children:[i(t),e.jsx(P,{...z(t),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e.jsxs(A,{children:[e.jsx(I,{children:e.jsx($,{variant:"body1",children:"Är du säker på att du vill ta bort?"})}),e.jsxs(q,{children:[e.jsx(C,{fullWidth:!0,onClick:t.close,color:"inherit",variant:"outlined",children:"Avbryt"}),e.jsx(C,{startIcon:e.jsx(J,{}),fullWidth:!0,onClick:s=>{var o;return[(o=r.onClick)==null?void 0:o.call(r,s),t.close()]},color:"error",variant:"contained",children:"Ta bort"})]})]})})]})});var h={},Q=E;Object.defineProperty(h,"__esModule",{value:!0});var S=h.default=void 0,U=Q(y()),N=e;S=h.default=(0,U.default)((0,N.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var x={},X=E;Object.defineProperty(x,"__esModule",{value:!0});var T=x.default=void 0,Y=X(y()),Z=e;T=x.default=(0,Y.default)((0,Z.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const re=({editDisplayMode:i="row",state:r,...t})=>{const[s,o]=R("filters",K,[]),[v,w]=R("search",W,""),[g,c]=B.useState(i),_={editDisplayMode:g,setEditDisplayMode:c},m=G({editDisplayMode:g,initialState:{showGlobalFilter:!!v},state:{columnFilters:s,globalFilter:v,...r},onColumnFiltersChange:o,onGlobalFilterChange:w,onCreatingRowSave:async({row:n,values:d,table:l})=>{var a;await((a=t.onCreate)==null?void 0:a.call(t,{...n.original,...d})),l.setCreatingRow(null),c(i)},onEditingRowSave:async({row:n,values:d,table:l})=>{var a;await((a=t.onUpdate)==null?void 0:a.call(t,{...n.original,...d},n.original)),l.setEditingRow(null),c(i)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...b,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...b,height:"300px"}},positionActionsColumn:"last",renderRowActions:ee(t,_),renderTopToolbarCustomActions:te(),muiTableBodyCellProps:({row:n,column:d,table:l})=>({onDoubleClick:()=>{c("row"),l.setEditingRow(l.getState().editingRow===n?null:n),queueMicrotask(()=>{const a=l.refs.editInputRefs.current[d.id];a==null||a.focus()})},onKeyDown:a=>{var f,j;a.key==="Escape"&&l.setEditingRow(null),a.key==="Enter"&&((j=(f=l.options).onEditingRowSave)==null||j.call(f,{exitEditingMode:()=>l.setEditingRow(null),row:n,table:l,values:n==null?void 0:n._valuesCache}))}}),...t}),{isLoading:k}=m.getState();return k?null:e.jsx(V,{table:m})},ee=(i,r)=>({row:t,table:s})=>e.jsxs(H,{sx:{display:"flex",gap:"1rem"},children:[e.jsx(D,{title:"Edit",children:e.jsx(u,{onClick:()=>[s.setEditingRow(t),r.setEditDisplayMode("modal")],children:e.jsx(p,{})})}),e.jsx(L,{id:t.id,onClick:()=>{var o;(o=i.onDelete)==null||o.call(i,t.original),s.setEditingRow(null)},children:o=>e.jsx(D,{title:"Delete",children:e.jsx(u,{color:"error",...O(o),children:e.jsx(T,{})})})})]}),te=()=>({table:i})=>e.jsx(u,{onClick:()=>{i.setCreatingRow(!0)},children:e.jsx(S,{})});export{re as D,L as a,S as d};
