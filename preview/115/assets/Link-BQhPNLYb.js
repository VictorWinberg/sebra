import{aL as A,aK as B,bN as m,a$ as I,s as M,T as N,aW as g,aN as i,r as h,h as j,aM as w,bJ as P,b2 as U,j as W,g as z,aP as E}from"./index-Bpl57a60.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ccbafe24-0a0f-4e79-953b-ecd802db2201",e._sentryDebugIdIdentifier="sentry-dbid-ccbafe24-0a0f-4e79-953b-ecd802db2201")}catch{}})();function H(e){return B("MuiLink",e)}const J=A("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=e=>x[e]||e,O=({theme:e,ownerState:o})=>{const n=K(o.color),s=m(e,`palette.${n}`,!1)||o.color,r=m(e,`palette.${n}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:I(s,.4)},q=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],G=e=>{const{classes:o,component:n,focusVisible:s,underline:r}=e,t={root:["root",`underline${g(r)}`,n==="button"&&"button",s&&"focusVisible"]};return E(t,H,o)},Q=M(N,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${g(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>i({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&i({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:O({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${J.focusVisible}`]:{outline:"auto"}})),X=h.forwardRef(function(o,n){const s=j({props:o,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:k="always",variant:f="inherit",sx:l}=s,D=w(s,q),{isFocusVisibleRef:p,onBlur:L,onFocus:V,ref:v}=P(),[F,b]=h.useState(!1),R=U(n,v),T=a=>{L(a),p.current===!1&&b(!1),u&&u(a)},_=a=>{V(a),p.current===!0&&b(!0),d&&d(a)},y=i({},s,{color:t,component:c,focusVisible:F,underline:k,variant:f}),$=G(y);return W.jsx(Q,i({color:t,className:z($.root,r),classes:C,component:c,onBlur:T,onFocus:_,ref:R,ownerState:y,variant:f,sx:[...Object.keys(x).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},D))});export{X as L};
//# sourceMappingURL=Link-BQhPNLYb.js.map
