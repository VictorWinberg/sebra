import{j as e,B as p,p as g}from"./index-DBs5yGxI.js";import{e as b,f as y}from"./RouterLink-Bgu2GkQb.js";import{C as j}from"./createStyled-DpjlTWLm.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="c66f42d4-8588-49be-8f45-831d152e9964",i._sentryDebugIdIdentifier="sentry-dbid-c66f42d4-8588-49be-8f45-831d152e9964")}catch{}})();function D(i,n){const{getState:s,options:{onCreatingRowCancel:r,onCreatingRowSave:d,onEditingRowCancel:o,onEditingRowSave:t},setCreatingRow:a,setEditingRow:l}=i,{creatingRow:c,editingRow:u,isSaving:h}=s(),f=(c==null?void 0:c.id)===n.id,m=(u==null?void 0:u.id)===n.id;return{creatingRow:c,isSaving:h,handleCancel:()=>{f?(r==null||r({row:n,table:i}),a(null)):m&&(o==null||o({row:n,table:i}),l(null))},handleSubmit:x=>{f?d==null||d({exitCreatingMode:()=>a(null),row:n,table:i,values:x}):m&&(t==null||t({exitEditingMode:()=>l(null),row:n,table:i,values:x}))}}}const _=({table:i,row:n,titles:s,FormComponent:r,defaultValues:d})=>{const{creatingRow:o,isSaving:t,handleCancel:a,handleSubmit:l}=D(i,n);return e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",color:"primary",children:o?s.creating:s.editing}),e.jsx(y,{children:e.jsx(r,{sx:{mt:1},formProps:{values:{...d,...n.original}},onSubmit:l,renderBottomContent:()=>e.jsxs(p,{sx:{mt:3,ml:"auto"},children:[e.jsx(g,{onClick:a,sx:{minWidth:"100px"},children:"Avbryt"}),e.jsxs(g,{disabled:t,type:"submit",sx:{minWidth:"100px"},variant:"contained",children:[t&&e.jsx(j,{color:"inherit",size:18}),"Spara"]})]})})})]})};export{_ as S};
//# sourceMappingURL=SebraDialog-DTvfzknc.js.map