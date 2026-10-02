import{n as j,o as M,r as S,q as D,f as I,_ as o,j as d,e as A,t as U,s as q,bg as E,bA as g,bB as _,as as w,at as C}from"./index-CUwKYY9V.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="04c8ae53-0c41-4547-834c-0d7df1b28977",t._sentryDebugIdIdentifier="sentry-dbid-04c8ae53-0c41-4547-834c-0d7df1b28977")}catch{}})();function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function z(t){return j("MuiSkeleton",t)}M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let s=t=>t,v,m,b,y;const L=t=>{const{classes:e,variant:a,animation:r,hasChildren:n,width:l,height:i}=t;return U({root:["root",a,r,n&&"withChildren",n&&!l&&"fitContent",n&&!i&&"heightAuto"]},z,e)},N=_(v||(v=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),O=_(m||(m=s`
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
`)),F=q("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=P(t.shape.borderRadius)||"px",r=X(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:E(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(b||(b=s`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),N),({ownerState:t,theme:e})=>t.animation==="wave"&&g(y||(y=s`
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
    `),O,(e.vars||e).palette.action.hover)),Z=S.forwardRef(function(e,a){const r=D({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:i="span",height:h,style:x,variant:k="text",width:R}=r,f=I(r,B),p=o({},r,{animation:n,component:i,variant:k,hasChildren:!!f.children}),$=L(p);return d.jsx(F,o({as:i,ref:a,className:A($.root,l),ownerState:p},f,{style:o({width:R,height:h},x)}))});var u={},H=C;Object.defineProperty(u,"__esModule",{value:!0});var K=u.default=void 0,T=H(w()),V=d;K=u.default=(0,T.default)((0,V.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var c={},W=C;Object.defineProperty(c,"__esModule",{value:!0});var G=c.default=void 0,J=W(w()),Q=d;G=c.default=(0,J.default)((0,Q.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");export{Z as S,K as a,G as d};
//# sourceMappingURL=MoreHoriz-D9l7Ek2G.js.map
