import{j as e,B as p,h as m}from"./index-D7kQbbEZ.js";import{e as b,f as y,C as j}from"./SebraForm-DAu2_dch.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="60017a09-b59e-419f-8f3a-aaf3e796c71c",n._sentryDebugIdIdentifier="sentry-dbid-60017a09-b59e-419f-8f3a-aaf3e796c71c")}catch{}})();function D(n,i){const{getState:s,options:{onCreatingRowCancel:a,onCreatingRowSave:r,onEditingRowCancel:o,onEditingRowSave:t},setCreatingRow:d,setEditingRow:l}=n,{creatingRow:c,editingRow:f,isSaving:h}=s(),g=(c==null?void 0:c.id)===i.id,x=(f==null?void 0:f.id)===i.id;return{creatingRow:c,isSaving:h,handleCancel:()=>{g?(a==null||a({row:i,table:n}),d(null)):x&&(o==null||o({row:i,table:n}),l(null))},handleSubmit:u=>{console.log("values",u),g?r==null||r({exitCreatingMode:()=>d(null),row:i,table:n,values:u}):x&&(t==null||t({exitEditingMode:()=>l(null),row:i,table:n,values:u}))}}}const B=({table:n,row:i,titles:s,FormComponent:a,defaultValues:r})=>{const{creatingRow:o,isSaving:t,handleCancel:d,handleSubmit:l}=D(n,i);return e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",color:"primary",children:o?s.creating:s.editing}),e.jsx(y,{children:e.jsx(a,{sx:{mt:1},formProps:{values:{...r,...i.original}},onSubmit:l,renderBottomContent:()=>e.jsxs(p,{sx:{mt:3,ml:"auto"},children:[e.jsx(m,{onClick:d,sx:{minWidth:"100px"},children:"Avbryt"}),e.jsxs(m,{disabled:t,type:"submit",sx:{minWidth:"100px"},variant:"contained",children:[t&&e.jsx(j,{color:"inherit",size:18}),"Spara"]})]})})})]})};export{B as S};
//# sourceMappingURL=SebraDialog-508iuI1H.js.map