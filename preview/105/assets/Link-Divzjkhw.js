import{au as B,at as I,bz as m,aP as $,K as j,T as w,aI as h,as as i,r as x,aJ as M,aq as P,aA as z,aB as N,j as U,av as E,ax as W}from"./index-8MMrl1Jf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="66b992a0-d11b-4eea-94b7-928bea7e9702",e._sentryDebugIdIdentifier="sentry-dbid-66b992a0-d11b-4eea-94b7-928bea7e9702")}catch{}})();function H(e){return I("MuiLink",e)}const q=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},J=e=>g[e]||e,K=({theme:e,ownerState:o})=>{const n=J(o.color),s=m(e,`palette.${n}`,!1)||o.color,r=m(e,`palette.${n}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:$(s,.4)},O=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],G=e=>{const{classes:o,component:n,focusVisible:s,underline:r}=e,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return W(t,H,o)},Q=j(w,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>i({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&i({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:K({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(o,n){const s=M({props:o,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:k="always",variant:p="inherit",sx:l}=s,D=P(s,O),{isFocusVisibleRef:b,onBlur:v,onFocus:V,ref:F}=z(),[L,f]=x.useState(!1),R=N(n,F),T=a=>{v(a),b.current===!1&&f(!1),u&&u(a)},_=a=>{V(a),b.current===!0&&f(!0),d&&d(a)},y=i({},s,{color:t,component:c,focusVisible:L,underline:k,variant:p}),A=G(y);return U.jsx(Q,i({color:t,className:E(A.root,r),classes:C,component:c,onBlur:T,onFocus:_,ref:R,ownerState:y,variant:p,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},D))});export{X as L};
//# sourceMappingURL=Link-Divzjkhw.js.map
