import{f as L,au as f,a as w,r as c,av as C,aw as D,j as e,a3 as x,a4 as h,ax as g,ay as u,ak as B,a0 as P,B as p,p as y,G as s,az as F,S as W,T as j,a1 as _}from"./index-CgpUjrG9.js";import{d as z,A as b,a as M,b as T,c as H}from"./AuthWrapper-CtfARhMe.js";import{u as q,d as G}from"./index.esm-3Qlq-x1q.js";import"./Link-Chevvt64.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="f3e61e01-9a39-4cc0-9bc1-8b0bce72c491",t._sentryDebugIdIdentifier="sentry-dbid-f3e61e01-9a39-4cc0-9bc1-8b0bce72c491")}catch{}})();const O=()=>{const t=L();f(t.breakpoints.down("md"));const n=w();c.useState(!0);const{register:a,formState:{errors:r},handleSubmit:v,setError:i}=q(),{mutate:I}=C(),[o,m]=D();c.useEffect(()=>{o.get("code")==="403"&&(o.delete("code"),i("root",{message:"Åtkomst nekad"}),m(o))},[o,m,i]);const[d,S]=c.useState(!1),k=()=>{S(!d)},E=l=>{l.preventDefault()},A=async l=>{I(l,{onSuccess:()=>n(o.get("redirect")||"/"),onError:()=>i("password",{message:"Ogiltig e-postadress eller lösenord"})})};return e.jsxs(e.Fragment,{children:[!1,e.jsxs("form",{noValidate:!0,onSubmit:v(A),children:[e.jsxs(x,{fullWidth:!0,error:!!r.email,sx:{...t.typography.customInput},children:[e.jsx(h,{htmlFor:"outlined-adornment-email-login",children:"E-postadress / Användarnamn"}),e.jsx(g,{id:"outlined-adornment-email-login",type:"email",label:"E-postadress / Användarnamn",inputProps:{},...a("email",{required:"Email krävs",pattern:{value:/^\S+@\S+$/i,message:"Måste vara en giltig E-postadress"},maxLength:{value:255,message:"E-postadressen är för lång"}})}),r.email&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email.message})]}),e.jsxs(x,{fullWidth:!0,error:!!r.password,sx:{...t.typography.customInput},children:[e.jsx(h,{htmlFor:"outlined-adornment-password-login",children:"Lösenord"}),e.jsx(g,{id:"outlined-adornment-password-login",type:d?"text":"password",...a("password",{required:"Lösenord krävs"}),endAdornment:e.jsx(B,{position:"end",children:e.jsx(P,{"aria-label":"toggle password visibility",onClick:k,onMouseDown:E,edge:"end",size:"large",children:d?e.jsx(z,{}):e.jsx(G,{})})}),label:"Lösenord",inputProps:{}}),r.password&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password.message})]}),!1,r.root&&e.jsx(p,{sx:{mt:1},children:e.jsx(u,{error:!0,children:r.root.message})}),e.jsx(p,{sx:{mt:2},children:e.jsx(b,{children:e.jsx(y,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Logga in"})})})]})]})},U=()=>{const t=w(),n=f(a=>a.breakpoints.down("md"));return e.jsx(M,{children:e.jsxs(s,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(s,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(T,{children:e.jsxs(s,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(s,{item:!0,children:e.jsx(F,{})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(s,{item:!0,children:e.jsxs(W,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(j,{color:"primary.main",gutterBottom:!0,variant:n?"h3":"h2",children:"Hej, välkommen tillbaka"}),e.jsx(j,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Logga in för att fortsätta"})]})})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(O,{})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(_,{})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(b,{children:e.jsx(y,{disableElevation:!0,fullWidth:!0,size:"large",variant:"outlined",sx:{textTransform:"none"},onClick:()=>{t("/demo")},children:"Prova vår demo"})})})]})})})})}),e.jsx(s,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(H,{})})]})})};export{U as default};
//# sourceMappingURL=Login-DOK2XKpQ.js.map
