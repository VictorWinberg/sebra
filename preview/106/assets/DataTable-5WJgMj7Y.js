import{a0 as E,a1 as D,j as e,r as M,I as R,B as T,K as c,M as F}from"./index-L1L35c__.js";import{c as P,f as k,g as A,d as z}from"./useSnackbar-DZ6xs5-N.js";import{u as C,F as I,S as q}from"./useQueryParam-ehg0XFZT.js";import{T as j}from"./Tooltip-DsDj3qVP.js";var m={},$=D;Object.defineProperty(m,"__esModule",{value:!0});var b=m.default=void 0,B=$(E()),p=e;b=m.default=(0,B.default)((0,p.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var x={},G=D;Object.defineProperty(x,"__esModule",{value:!0});var S=x.default=void 0,H=G(E()),O=e;S=x.default=(0,H.default)((0,O.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const N=({editDisplayMode:l="row",state:d,...t})=>{const[r,o]=C("filters",I,[]),[g,w]=C("search",q,""),[f,u]=M.useState(l),y={editDisplayMode:f,setEditDisplayMode:u},_=P({editDisplayMode:f,initialState:{showGlobalFilter:!!g},state:{columnFilters:r,globalFilter:g,...d},onColumnFiltersChange:o,onGlobalFilterChange:w,onCreatingRowSave:async({row:i,values:s,table:n})=>{var a;await((a=t.onCreate)==null?void 0:a.call(t,{...i.original,...s})),n.setCreatingRow(null),u(l)},onEditingRowSave:async({row:i,values:s,table:n})=>{var a;await((a=t.onUpdate)==null?void 0:a.call(t,{...i.original,...s},i.original)),n.setEditingRow(null),u(l)},displayColumnDefOptions:{"mrt-row-actions":{minSize:120,size:120,maxSize:120,grow:!1}},muiTablePaperProps:{sx:{...R,mx:-1,boxShadow:0}},muiTableContainerProps:{sx:{...R,height:"300px"}},positionActionsColumn:"last",renderRowActions:K(t,y),renderTopToolbarCustomActions:V(),muiTableBodyCellProps:({row:i,column:s,table:n})=>({onDoubleClick:()=>{u("row"),n.setEditingRow(n.getState().editingRow===i?null:i),queueMicrotask(()=>{const a=n.refs.editInputRefs.current[s.id];a==null||a.focus()})},onKeyDown:a=>{var h,v;a.key==="Escape"&&n.setEditingRow(null),a.key==="Enter"&&((v=(h=n.options).onEditingRowSave)==null||v.call(h,{exitEditingMode:()=>n.setEditingRow(null),row:i,table:n,values:i==null?void 0:i._valuesCache}))}}),...t});return e.jsx(k,{table:_})},K=(l,d)=>({row:t,table:r})=>e.jsxs(T,{sx:{display:"flex",gap:"1rem"},children:[e.jsx(j,{title:"Edit",children:e.jsx(c,{onClick:()=>[r.setEditingRow(t),d.setEditDisplayMode("modal")],children:e.jsx(A,{})})}),e.jsx(z,{id:t.id,onClick:()=>{var o;(o=l.onDelete)==null||o.call(l,t.original),r.setEditingRow(null)},children:o=>e.jsx(j,{title:"Delete",children:e.jsx(c,{color:"error",...F(o),children:e.jsx(S,{})})})})]}),V=()=>({table:l})=>e.jsx(c,{onClick:()=>{l.setCreatingRow(!0)},children:e.jsx(b,{})});export{N as D,b as d};
