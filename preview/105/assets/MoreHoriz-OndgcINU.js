import{au as V,at as T,K as F,ag as K,aY as W,as as n,br as M,aP as g,bs as O,bt as j,r as p,aJ as L,aq as A,bu as S,aC as J,aB as Y,j as f,av as $,ax as E,aT as q,b8 as Q,aU as D,a5 as z,a6 as G}from"./index-DW1vZ186.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c7398496-b5d7-4fb8-9ae9-ac6fb1462729",e._sentryDebugIdIdentifier="sentry-dbid-c7398496-b5d7-4fb8-9ae9-ac6fb1462729")}catch{}})();function Z(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ee(e){return parseFloat(e)}function te(e){return T("MuiMenuItem",e)}const u=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ae=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],se=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},oe=e=>{const{disabled:t,dense:a,divider:s,disableGutters:o,selected:r,classes:i}=e,l=E({root:["root",a&&"dense",t&&"disabled",!o&&"gutters",s&&"divider",r&&"selected"]},te,i);return n({},i,l)},ie=F(K,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:se})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:g(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:g(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${j.root}`]:{marginTop:0,marginBottom:0},[`& .${j.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${M.root} svg`]:{fontSize:"1.25rem"}}))),xe=p.forwardRef(function(t,a){const s=L({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:r="li",dense:i=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:m,role:h="menuitem",tabIndex:c,className:b}=s,y=A(s,ae),_=p.useContext(S),I=p.useMemo(()=>({dense:i||_.dense||!1,disableGutters:l}),[_.dense,i,l]),C=p.useRef(null);J(()=>{o&&C.current&&C.current.focus()},[o]);const H=n({},s,{dense:I.dense,divider:d,disableGutters:l}),x=oe(s),X=Y(C,a);let R;return s.disabled||(R=c!==void 0?c:-1),f.jsx(S.Provider,{value:I,children:f.jsx(ie,n({ref:X,role:h,tabIndex:R,component:r,focusVisibleClassName:$(x.focusVisible,m),className:$(x.root,b)},y,{ownerState:H,classes:x}))})});function ne(e){return T("MuiSkeleton",e)}V("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const re=["animation","className","component","height","style","variant","width"];let v=e=>e,B,U,N,P;const le=e=>{const{classes:t,variant:a,animation:s,hasChildren:o,width:r,height:i}=e;return E({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]},ne,t)},de=q(B||(B=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ce=q(U||(U=v`
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
`)),ue=F("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const a=Z(e.shape.borderRadius)||"px",s=ee(e.shape.borderRadius);return n({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Q(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&D(N||(N=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),de),({ownerState:e,theme:t})=>e.animation==="wave"&&D(P||(P=v`
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
    `),ce,(t.vars||t).palette.action.hover)),$e=p.forwardRef(function(t,a){const s=L({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:i="span",height:d,style:l,variant:m="text",width:h}=s,c=A(s,re),b=n({},s,{animation:o,component:i,variant:m,hasChildren:!!c.children}),y=le(b);return f.jsx(ue,n({as:i,ref:a,className:$(y.root,r),ownerState:b},c,{style:n({width:h,height:d},l)}))});var k={},pe=G;Object.defineProperty(k,"__esModule",{value:!0});var fe=k.default=void 0,be=pe(z()),ge=f;fe=k.default=(0,be.default)((0,ge.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var w={},ve=G;Object.defineProperty(w,"__esModule",{value:!0});var me=w.default=void 0,he=ve(z()),ye=f;me=w.default=(0,he.default)((0,ye.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");export{xe as M,$e as S,fe as a,me as d};
//# sourceMappingURL=MoreHoriz-OndgcINU.js.map
