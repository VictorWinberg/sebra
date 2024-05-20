import{h as F,g as j,i as T,ay as H,az as X,_ as n,aA as w,y as f,aB as I,aC as O,r as u,l as P,m as A,aD as _,V as D,z as W,j as x,n as $,o as G,F as L,a2 as K,H as B}from"./index-1e8VaL1k.js";function q(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function J(t){return parseFloat(t)}function Q(t){return j("MuiMenuItem",t)}const p=F("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Z=(t,e)=>{const{ownerState:a}=t;return[e.root,a.dense&&e.dense,a.divider&&e.divider,!a.disableGutters&&e.gutters]},tt=t=>{const{disabled:e,dense:a,divider:s,disableGutters:o,selected:r,classes:i}=t,l=G({root:["root",a&&"dense",e&&"disabled",!o&&"gutters",s&&"divider",r&&"selected"]},Q,i);return n({},i,l)},et=T(H,{shouldForwardProp:t=>X(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Z})(({theme:t,ownerState:e})=>n({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${p.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:f(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${p.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:f(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${p.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${p.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${w.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${w.root} svg`]:{fontSize:"1.25rem"}}))),dt=u.forwardRef(function(e,a){const s=P({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:r="li",dense:i=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:v,role:m="menuitem",tabIndex:c,className:g}=s,h=A(s,Y),k=u.useContext(_),R=u.useMemo(()=>({dense:i||k.dense||!1,disableGutters:l}),[k.dense,i,l]),C=u.useRef(null);D(()=>{o&&C.current&&C.current.focus()},[o]);const z=n({},s,{dense:R.dense,divider:d,disableGutters:l}),y=tt(s),E=W(C,a);let M;return s.disabled||(M=c!==void 0?c:-1),x.jsx(_.Provider,{value:R,children:x.jsx(et,n({ref:E,role:m,tabIndex:M,component:r,focusVisibleClassName:$(y.focusVisible,v),className:$(y.root,g)},h,{ownerState:z,classes:y}))})});function at(t){return j("MuiSkeleton",t)}F("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const st=["animation","className","component","height","style","variant","width"];let b=t=>t,S,N,U,V;const ot=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:r,height:i}=t;return G({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]},at,e)},it=L(S||(S=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),nt=L(N||(N=b`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),rt=T("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=q(t.shape.borderRadius)||"px",s=J(t.shape.borderRadius);return n({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:K(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&B(U||(U=b`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),it),({ownerState:t,theme:e})=>t.animation==="wave"&&B(V||(V=b`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),nt,(e.vars||e).palette.action.hover)),ct=u.forwardRef(function(e,a){const s=P({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:i="span",height:d,style:l,variant:v="text",width:m}=s,c=A(s,st),g=n({},s,{animation:o,component:i,variant:v,hasChildren:!!c.children}),h=ot(g);return x.jsx(rt,n({as:i,ref:a,className:$(h.root,r),ownerState:g},c,{style:n({width:m,height:d},l)}))});export{dt as M,ct as S};
