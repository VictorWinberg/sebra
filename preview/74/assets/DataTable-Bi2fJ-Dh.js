import{K as b,j as e,$ as y,a0 as T,a1 as w,F as M,I as _,T as k,a2 as S,f,a3 as C,a4 as R,r as z,B as A,J as c,m as I}from"./index-gWUaAgeO.js";import{f as P,i as $,j as q}from"./useSnackbar-C55C3fTn.js";import{s as j}from"./FlexGrow-BeeM3SMg.js";import{T as m}from"./Tooltip-DIpi4xCG.js";const B=b(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),H=({children:a,...t})=>e.jsx(y,{variant:"popover",popupId:`delete-popup-${t.id}`,children:r=>e.jsxs(e.Fragment,{children:[a(r),e.jsx(T,{...w(r),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e.jsxs(M,{children:[e.jsx(_,{children:e.jsx(k,{variant:"body1",children:"Är du säker på att du vill ta bort?"})}),e.jsxs(S,{children:[e.jsx(f,{fullWidth:!0,onClick:r.close,color:"inherit",variant:"outlined",children:"Avbryt"}),e.jsx(f,{startIcon:e.jsx(B,{}),fullWidth:!0,onClick:l=>{var s;return[(s=t.onClick)==null?void 0:s.call(t,l),r.close()]},color:"error",variant:"contained",children:"Ta bort"})]})]})})]})});var u={},O=R;Object.defineProperty(u,"__esModule",{value:!0});var D=u.default=void 0,F=O(C()),V=e;D=u.default=(0,F.default)((0,V.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var h={},K=R;Object.defineProperty(h,"__esModule",{value:!0});var E=h.default=void 0,W=K(C()),p=e;E=h.default=(0,W.default)((0,p.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const X=({editDisplayMode:a="row",...t})=>{const[r,l]=z.useState(a),s={editDisplayMode:r,setEditDisplayMode:l},x=P({onCreatingRowSave:async({row:n,values:d,table:o})=>{var i;await((i=t.onCreate)==null?void 0:i.call(t,{...n.original,...d})),o.setCreatingRow(null),l(a)},onEditingRowSave:async({row:n,values:d,table:o})=>{var i;await((i=t.onUpdate)==null?void 0:i.call(t,{...n.original,...d},n.original)),o.setEditingRow(null),l(a)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...j,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...j,height:"300px"}},positionActionsColumn:"last",renderRowActions:J(t,s),renderTopToolbarCustomActions:L(),muiTableBodyCellProps:({row:n,column:d,table:o})=>({onDoubleClick:()=>{l("row"),o.setEditingRow(o.getState().editingRow===n?null:n),queueMicrotask(()=>{const i=o.refs.editInputRefs.current[d.id];i==null||i.focus()})},onKeyDown:i=>{var v,g;i.key==="Escape"&&o.setEditingRow(null),i.key==="Enter"&&((g=(v=o.options).onEditingRowSave)==null||g.call(v,{exitEditingMode:()=>o.setEditingRow(null),row:n,table:o,values:n==null?void 0:n._valuesCache}))}}),...t});return x.getState().isLoading?null:e.jsx($,{table:x})},J=(a,t)=>({row:r,table:l})=>e.jsxs(A,{sx:{display:"flex",gap:"1rem"},children:[e.jsx(m,{title:"Edit",children:e.jsx(c,{onClick:()=>[l.setEditingRow(r),t.setEditDisplayMode("modal")],children:e.jsx(q,{})})}),e.jsx(H,{id:r.id,onClick:()=>{var s;(s=a.onDelete)==null||s.call(a,r.original),l.setEditingRow(null)},children:s=>e.jsx(m,{title:"Delete",children:e.jsx(c,{color:"error",...I(s),children:e.jsx(E,{})})})})]}),L=()=>({table:a})=>e.jsx(c,{onClick:()=>{a.setCreatingRow(!0)},children:e.jsx(D,{})});export{X as D,H as a};
