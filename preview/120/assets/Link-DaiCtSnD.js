import{aM as B,aL as I,bO as m,b0 as M,s as $,T as j,aX as g,aO as a,r as h,h as w,aN as N,bK as P,b3 as U,j as z,g as E,aQ as O}from"./index-D5HSxLJv.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="404b1028-543d-4014-8444-37284365d0ef",e._sentryDebugIdIdentifier="sentry-dbid-404b1028-543d-4014-8444-37284365d0ef")}catch{}})();function W(e){return I("MuiLink",e)}const H=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=e=>x[e]||e,Q=({theme:e,ownerState:o})=>{const n=K(o.color),s=m(e,`palette.${n}`,!1)||o.color,r=m(e,`palette.${n}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:M(s,.4)},X=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],q=e=>{const{classes:o,component:n,focusVisible:s,underline:r}=e,t={root:["root",`underline${g(r)}`,n==="button"&&"button",s&&"focusVisible"]};return O(t,W,o)},G=$(j,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${g(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:Q({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${H.focusVisible}`]:{outline:"auto"}})),S=h.forwardRef(function(o,n){const s=w({props:o,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:k="always",variant:p="inherit",sx:l}=s,D=N(s,X),{isFocusVisibleRef:f,onBlur:L,onFocus:V,ref:v}=P(),[F,b]=h.useState(!1),R=U(n,v),T=i=>{L(i),f.current===!1&&b(!1),u&&u(i)},_=i=>{V(i),f.current===!0&&b(!0),d&&d(i)},y=a({},s,{color:t,component:c,focusVisible:F,underline:k,variant:p}),A=q(y);return z.jsx(G,a({color:t,className:E(A.root,r),classes:C,component:c,onBlur:T,onFocus:_,ref:R,ownerState:y,variant:p,sx:[...Object.keys(x).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},D))});export{S as L};
//# sourceMappingURL=Link-DaiCtSnD.js.map
