import{w as G,a5 as C,e as j,j as e,G as t,a6 as p,I as d,x as r,F as x,T as i,a7 as g,a8 as w,a9 as b,aa as c,ab as L,ac as v,ad as y,ae as z}from"./index-C73kWwr6.js";import{G as M,F as R,c as H,a as f,I as $,d as q,b as T,e as O,C as U,A as V,f as _,g as Q}from"./AuthFooter-BUGR0rmc.js";const J=({...o})=>{const n=G(),I=C(n.breakpoints.down("md")),[k,S]=j.useState(!0),A=async()=>{console.error("Login")},[l,F]=j.useState(!1),P=()=>{F(!l)},B=s=>{s.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(p,{children:e.jsxs(d,{disableElevation:!0,fullWidth:!0,onClick:A,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[e.jsx(r,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:M,alt:"google",width:16,height:16,style:{marginRight:I?8:16}})}),"Sign in with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(r,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(d,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${n.palette.grey[100]} !important`,color:`${n.palette.grey[900]}!important`,fontWeight:500,borderRadius:"12px"},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(r,{sx:{mb:2},children:e.jsx(i,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),e.jsx(R,{initialValues:{email:"",password:"",submit:null},validationSchema:H().shape({email:f().email("Must be a valid email").max(255).required("Email is required"),password:f().max(255).required("Password is required")}),onSubmit:console.log,children:({errors:s,handleBlur:m,handleChange:u,handleSubmit:D,isSubmitting:E,touched:a,values:h})=>e.jsxs("form",{noValidate:!0,onSubmit:D,...o,children:[e.jsxs(g,{fullWidth:!0,error:!!(a.email&&s.email),sx:{...n.typography.customInput},children:[e.jsx(w,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(b,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:m,onChange:u,label:"Email Address / Username",inputProps:{}}),a.email&&s.email&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(g,{fullWidth:!0,error:!!(a.password&&s.password),sx:{...n.typography.customInput},children:[e.jsx(w,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(b,{id:"outlined-adornment-password-login",type:l?"text":"password",value:h.password,name:"password",onBlur:m,onChange:u,endAdornment:e.jsx(L,{position:"end",children:e.jsx($,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:B,edge:"end",size:"large",children:l?e.jsx(q,{}):e.jsx(T,{})})}),label:"Password",inputProps:{}}),a.password&&s.password&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(O,{control:e.jsx(U,{checked:k,onChange:W=>S(W.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(i,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),s.submit&&e.jsx(r,{sx:{mt:3},children:e.jsx(c,{error:!0,children:s.submit})}),e.jsx(r,{sx:{mt:2},children:e.jsx(p,{children:e.jsx(d,{disableElevation:!0,disabled:E,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})})]})},X=()=>{const o=C(n=>n.breakpoints.down("md"));return e.jsx(V,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(_,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(y,{to:"#","aria-label":"logo",children:e.jsx(z,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(v,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(i,{color:"secondary.main",gutterBottom:!0,variant:o?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(i,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(J,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(x,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(i,{component:y,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(Q,{})})]})})};export{X as default};