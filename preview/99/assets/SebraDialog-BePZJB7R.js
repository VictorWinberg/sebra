import{j as n,B as j,f as g}from"./index-DyjmdRSC.js";import{g as f,h as S,C}from"./useSnackbar-BAxIYe6h.js";function b(s,i){const{getState:l,options:{onCreatingRowCancel:e,onCreatingRowSave:r,onEditingRowCancel:a,onEditingRowSave:t},setCreatingRow:o,setEditingRow:d}=s,{creatingRow:c,editingRow:x,isSaving:p}=l(),m=(c==null?void 0:c.id)===i.id,h=(x==null?void 0:x.id)===i.id;return{creatingRow:c,isSaving:p,handleCancel:()=>{m?(e==null||e({row:i,table:s}),o(null)):h&&(a==null||a({row:i,table:s}),d(null))},handleSubmit:u=>{m?r==null||r({exitCreatingMode:()=>o(null),row:i,table:s,values:u}):h&&(t==null||t({exitEditingMode:()=>d(null),row:i,table:s,values:u}))}}}const A=({table:s,row:i,titles:l,FormComponent:e,defaultValues:r})=>{const{creatingRow:a,isSaving:t,handleCancel:o,handleSubmit:d}=b(s,i);return n.jsxs(n.Fragment,{children:[n.jsx(f,{variant:"h4",color:"primary",children:a?l.creating:l.editing}),n.jsx(S,{children:n.jsx(e,{sx:{mt:1},formProps:{values:{...r,...i.original}},onSubmit:d,renderBottomContent:()=>n.jsxs(j,{sx:{mt:3,ml:"auto"},children:[n.jsx(g,{onClick:o,sx:{minWidth:"100px"},children:"Avbryt"}),n.jsxs(g,{disabled:t,type:"submit",sx:{minWidth:"100px"},variant:"contained",children:[t&&n.jsx(C,{color:"inherit",size:18}),"Spara"]})]})})})]})};export{A as S};
