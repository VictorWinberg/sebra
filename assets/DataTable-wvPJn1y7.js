import{_ as E,$ as D,j as e,r as T,B as F,I as c,J as M}from"./index-BaA4xHd0.js";import{c as P,f as k,g as A,d as z}from"./useSnackbar-CWgHN-mw.js";import{u as R,F as I,S as $}from"./useQueryParam-Cjdc1IHz.js";import{s as C}from"./FlexGrow-DvQudQL7.js";import{T as j}from"./Tooltip-AVJLbA2L.js";var m={},q=D;Object.defineProperty(m,"__esModule",{value:!0});var b=m.default=void 0,p=q(E()),B=e;b=m.default=(0,p.default)((0,B.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var x={},G=D;Object.defineProperty(x,"__esModule",{value:!0});var S=x.default=void 0,H=G(E()),O=e;S=x.default=(0,H.default)((0,O.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const W=({editDisplayMode:l="row",state:d,...t})=>{const[r,o]=R("filters",I,[]),[g,w]=R("search",$,""),[f,u]=T.useState(l),y={editDisplayMode:f,setEditDisplayMode:u},_=P({editDisplayMode:f,initialState:{showGlobalFilter:!!g},state:{columnFilters:r,globalFilter:g,...d},onColumnFiltersChange:o,onGlobalFilterChange:w,onCreatingRowSave:async({row:a,values:s,table:n})=>{var i;await((i=t.onCreate)==null?void 0:i.call(t,{...a.original,...s})),n.setCreatingRow(null),u(l)},onEditingRowSave:async({row:a,values:s,table:n})=>{var i;await((i=t.onUpdate)==null?void 0:i.call(t,{...a.original,...s},a.original)),n.setEditingRow(null),u(l)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...C,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...C,height:"300px"}},positionActionsColumn:"last",renderRowActions:V(t,y),renderTopToolbarCustomActions:J(),muiTableBodyCellProps:({row:a,column:s,table:n})=>({onDoubleClick:()=>{u("row"),n.setEditingRow(n.getState().editingRow===a?null:a),queueMicrotask(()=>{const i=n.refs.editInputRefs.current[s.id];i==null||i.focus()})},onKeyDown:i=>{var h,v;i.key==="Escape"&&n.setEditingRow(null),i.key==="Enter"&&((v=(h=n.options).onEditingRowSave)==null||v.call(h,{exitEditingMode:()=>n.setEditingRow(null),row:a,table:n,values:a==null?void 0:a._valuesCache}))}}),...t});return e.jsx(k,{table:_})},V=(l,d)=>({row:t,table:r})=>e.jsxs(F,{sx:{display:"flex",gap:"1rem"},children:[e.jsx(j,{title:"Edit",children:e.jsx(c,{onClick:()=>[r.setEditingRow(t),d.setEditDisplayMode("modal")],children:e.jsx(A,{})})}),e.jsx(z,{id:t.id,onClick:()=>{var o;(o=l.onDelete)==null||o.call(l,t.original),r.setEditingRow(null)},children:o=>e.jsx(j,{title:"Delete",children:e.jsx(c,{color:"error",...M(o),children:e.jsx(S,{})})})})]}),J=()=>({table:l})=>e.jsx(c,{onClick:()=>{l.setCreatingRow(!0)},children:e.jsx(b,{})});export{W as D,b as d};
