import{az as a,f as M,au as w,r as u,j as e,G as r,Q as j,a3 as x,a4 as f,aw as b,ax as h,ak as W,a0 as B,B as m,T as o,L as v,p as N,ay as R,S as _,a1 as z}from"./index-7FIy1zDU.js";import{d as T,A as q,a as G,b as H,c as $}from"./AuthWrapper-BH4ZPBej.js";import{u as Q,d as O}from"./index.esm-D_XmXi7e.js";import{F as U,C as V}from"./FormControlLabel-Czx2BUCM.js";import"./Link-CphrlDwH.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="bea7c405-a5de-49a5-9ff6-9376c8470dd5",t._sentryDebugIdIdentifier="sentry-dbid-bea7c405-a5de-49a5-9ff6-9376c8470dd5")}catch{}})();const Z=t=>new RegExp(/[0-9]/).test(t),J=t=>new RegExp(/[a-z]/).test(t)&&new RegExp(/[A-Z]/).test(t),K=t=>new RegExp(/[!#@$%^&*)(+=._-]/).test(t),y=t=>t<2?{label:"Poor",color:a.errorMain}:t<3?{label:"Weak",color:a.warningDark}:t<4?{label:"Normal",color:a.orangeMain}:t<5?{label:"Good",color:a.successMain}:t<6?{label:"Strong",color:a.successDark}:{label:"Poor",color:a.errorMain},X=t=>{let s=0;return t.length>0&&(s+=1),t.length>7&&(s+=1),Z(t)&&(s+=1),K(t)&&(s+=1),J(t)&&(s+=1),s},Y=()=>{const t=M(),s=w(t.breakpoints.down("md")),[d,I]=u.useState(!1),[S,C]=u.useState(!0),{register:c,formState:{errors:n},handleSubmit:k}=Q(),[g,A]=u.useState(0),[i,D]=u.useState(y(g)),E=()=>{I(!d)},F=l=>{l.preventDefault()},P=l=>{const{value:L}=l.target,p=X(L);A(p),D(y(p))};return e.jsxs(e.Fragment,{children:[!1,e.jsxs("form",{noValidate:!0,onSubmit:k(console.log),children:[e.jsxs(r,{container:!0,spacing:s?0:2,children:[e.jsx(r,{item:!0,xs:12,sm:6,children:e.jsx(j,{fullWidth:!0,label:"First Name",margin:"normal",type:"text",sx:{...t.typography.customInput},...c("firstName",{maxLength:{value:255,message:"First Name is too long"}})})}),e.jsx(r,{item:!0,xs:12,sm:6,children:e.jsx(j,{fullWidth:!0,label:"Last Name",margin:"normal",type:"text",sx:{...t.typography.customInput},...c("lastName",{maxLength:{value:255,message:"Last Name is too long"}})})})]}),e.jsxs(x,{fullWidth:!0,error:!!n.email,sx:{...t.typography.customInput},children:[e.jsx(f,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),e.jsx(b,{id:"outlined-adornment-email-register",type:"email",inputProps:{},...c("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Must be a valid email address"},maxLength:{value:255,message:"Email address is too long"}})}),n.email&&e.jsx(h,{error:!0,id:"standard-weight-helper-text--register",children:n.email.message})]}),e.jsxs(x,{fullWidth:!0,error:!!n.password,sx:{...t.typography.customInput},children:[e.jsx(f,{htmlFor:"outlined-adornment-password-register",children:"Password"}),e.jsx(b,{id:"outlined-adornment-password-register",type:d?"text":"password",label:"Password",...c("password",{required:"Password is required",onChange:P}),endAdornment:e.jsx(W,{position:"end",children:e.jsx(B,{"aria-label":"toggle password visibility",onClick:E,onMouseDown:F,edge:"end",size:"large",children:d?e.jsx(T,{}):e.jsx(O,{})})}),inputProps:{}}),n.password&&e.jsx(h,{error:!0,id:"standard-weight-helper-text-password-register",children:n.password.message})]}),g!==0&&e.jsx(x,{fullWidth:!0,children:e.jsx(m,{sx:{mb:2},children:e.jsxs(r,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(r,{item:!0,children:e.jsx(m,{style:{backgroundColor:i==null?void 0:i.color},sx:{width:85,height:8,borderRadius:"7px"}})}),e.jsx(r,{item:!0,children:e.jsx(o,{variant:"subtitle1",fontSize:"0.75rem",children:i==null?void 0:i.label})})]})})}),e.jsx(r,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(r,{item:!0,children:e.jsx(U,{control:e.jsx(V,{checked:S,onChange:l=>C(l.target.checked),name:"checked",color:"primary"}),label:e.jsxs(o,{variant:"subtitle1",children:["Agree with  ",e.jsx(o,{variant:"subtitle1",component:v,to:"#",children:"Terms & Condition."})]})})})}),n.root&&e.jsx(m,{sx:{mt:3},children:e.jsx(h,{error:!0,children:n.root.message})}),e.jsx(m,{sx:{mt:2},children:e.jsx(q,{children:e.jsx(N,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign up"})})})]})]})},ie=()=>{const t=w(s=>s.breakpoints.down("md"));return e.jsx(G,{children:e.jsxs(r,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(r,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(H,{children:e.jsxs(r,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(r,{item:!0,children:e.jsx(R,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(r,{item:!0,children:e.jsxs(_,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(o,{color:"primary.main",gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),e.jsx(o,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(Y,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(z,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(o,{component:v,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(r,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx($,{})})]})})};export{ie as default};
//# sourceMappingURL=Register-Dw-f3p9i.js.map
