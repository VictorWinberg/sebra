import{ai as l,a as z,ad as I,r as u,j as e,G as r,ae as y,f as h,B as i,D as j,T as a,w,M as m,N as C,af as v,ag as g,a5 as B,J as G,L as p,ah as T,S as $}from"./index-BrEZVVZU.js";import{G as q,d as H,A as _,a as O,b as J}from"./social-google-C-6a2iDU.js";import{u as Q,d as U,F as V,a as Z}from"./index.esm-B5qF0tzH.js";const K=t=>new RegExp(/[0-9]/).test(t),X=t=>new RegExp(/[a-z]/).test(t)&&new RegExp(/[A-Z]/).test(t),Y=t=>new RegExp(/[!#@$%^&*)(+=._-]/).test(t),S=t=>t<2?{label:"Poor",color:l.errorMain}:t<3?{label:"Weak",color:l.warningDark}:t<4?{label:"Normal",color:l.orangeMain}:t<5?{label:"Good",color:l.successMain}:t<6?{label:"Strong",color:l.successDark}:{label:"Poor",color:l.errorMain},ee=t=>{let s=0;return t.length>0&&(s+=1),t.length>7&&(s+=1),K(t)&&(s+=1),Y(t)&&(s+=1),X(t)&&(s+=1),s},te=()=>{const t=z(),s=I(t.breakpoints.down("md")),[x,k]=u.useState(!1),[A,R]=u.useState(!0),{register:d,formState:{errors:n},handleSubmit:E}=Q(),[f,F]=u.useState(0),[o,M]=u.useState(S(f)),P=async()=>{console.error("Register")},L=()=>{k(!x)},W=c=>{c.preventDefault()},D=c=>{const{value:N}=c.target,b=ee(N);F(b),M(S(b))};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(y,{children:e.jsxs(h,{variant:"outlined",fullWidth:!0,onClick:P,size:"large",sx:{color:"grey.700",backgroundColor:t.palette.grey[50],borderColor:t.palette.grey[100]},children:[e.jsx(i,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:q,alt:"google",width:16,height:16,style:{marginRight:s?8:16}})}),"Sign up with Google"]})})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(i,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(h,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${t.palette.grey[100]} !important`,color:`${t.palette.grey[900]}!important`,fontWeight:500,borderRadius:"6px"},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(r,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(i,{sx:{mb:2},children:e.jsx(a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),e.jsxs("form",{noValidate:!0,onSubmit:E(console.log),children:[e.jsxs(r,{container:!0,spacing:s?0:2,children:[e.jsx(r,{item:!0,xs:12,sm:6,children:e.jsx(w,{fullWidth:!0,label:"First Name",margin:"normal",type:"text",sx:{...t.typography.customInput},...d("firstName",{maxLength:{value:255,message:"First Name is too long"}})})}),e.jsx(r,{item:!0,xs:12,sm:6,children:e.jsx(w,{fullWidth:!0,label:"Last Name",margin:"normal",type:"text",sx:{...t.typography.customInput},...d("lastName",{maxLength:{value:255,message:"Last Name is too long"}})})})]}),e.jsxs(m,{fullWidth:!0,error:!!n.email,sx:{...t.typography.customInput},children:[e.jsx(C,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),e.jsx(v,{id:"outlined-adornment-email-register",type:"email",inputProps:{},...d("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Must be a valid email address"},maxLength:{value:255,message:"Email address is too long"}})}),n.email&&e.jsx(g,{error:!0,id:"standard-weight-helper-text--register",children:n.email.message})]}),e.jsxs(m,{fullWidth:!0,error:!!n.password,sx:{...t.typography.customInput},children:[e.jsx(C,{htmlFor:"outlined-adornment-password-register",children:"Password"}),e.jsx(v,{id:"outlined-adornment-password-register",type:x?"text":"password",label:"Password",...d("password",{required:"Password is required",onChange:D}),endAdornment:e.jsx(B,{position:"end",children:e.jsx(G,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:W,edge:"end",size:"large",children:x?e.jsx(H,{}):e.jsx(U,{})})}),inputProps:{}}),n.password&&e.jsx(g,{error:!0,id:"standard-weight-helper-text-password-register",children:n.password.message})]}),f!==0&&e.jsx(m,{fullWidth:!0,children:e.jsx(i,{sx:{mb:2},children:e.jsxs(r,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(r,{item:!0,children:e.jsx(i,{style:{backgroundColor:o==null?void 0:o.color},sx:{width:85,height:8,borderRadius:"7px"}})}),e.jsx(r,{item:!0,children:e.jsx(a,{variant:"subtitle1",fontSize:"0.75rem",children:o==null?void 0:o.label})})]})})}),e.jsx(r,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(r,{item:!0,children:e.jsx(V,{control:e.jsx(Z,{checked:A,onChange:c=>R(c.target.checked),name:"checked",color:"primary"}),label:e.jsxs(a,{variant:"subtitle1",children:["Agree with  ",e.jsx(a,{variant:"subtitle1",component:p,to:"#",children:"Terms & Condition."})]})})})}),n.root&&e.jsx(i,{sx:{mt:3},children:e.jsx(g,{error:!0,children:n.root.message})}),e.jsx(i,{sx:{mt:2},children:e.jsx(y,{children:e.jsx(h,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign up"})})})]})]})},ie=()=>{const t=I(s=>s.breakpoints.down("md"));return e.jsx(_,{children:e.jsxs(r,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(r,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(O,{children:e.jsxs(r,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(r,{item:!0,sx:{mb:3},children:e.jsx(p,{to:"#","aria-label":"theme logo",children:e.jsx(T,{})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(r,{item:!0,children:e.jsxs($,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(a,{color:"primary.main",gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),e.jsx(a,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(te,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(j,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(a,{component:p,to:"/pages/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(r,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(J,{})})]})})};export{ie as default};
