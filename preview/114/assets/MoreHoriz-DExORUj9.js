import{aK as $,aL as j,bF as w,s as S,aN as o,bi as D,bG as g,r as I,i as U,aM as A,j as d,h as P,aP as q,ah as _,ai as C}from"./index-Bg9hpXZo.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="67bd17cb-38d7-4e1f-8ecc-cfcaab7260c7",t._sentryDebugIdIdentifier="sentry-dbid-67bd17cb-38d7-4e1f-8ecc-cfcaab7260c7")}catch{}})();function E(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function L(t){return parseFloat(t)}function N(t){return $("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const X=["animation","className","component","height","style","variant","width"];let s=t=>t,b,v,m,y;const z=t=>{const{classes:e,variant:a,animation:r,hasChildren:i,width:l,height:n}=t;return q({root:["root",a,r,i&&"withChildren",i&&!l&&"fitContent",i&&!n&&"heightAuto"]},N,e)},F=w(b||(b=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=w(v||(v=s`
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
`)),O=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=E(t.shape.borderRadius)||"px",r=L(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:D(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(m||(m=s`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),F),({ownerState:t,theme:e})=>t.animation==="wave"&&g(y||(y=s`
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
    `),K,(e.vars||e).palette.action.hover)),Z=I.forwardRef(function(e,a){const r=U({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:n="span",height:h,style:x,variant:k="text",width:R}=r,f=A(r,X),p=o({},r,{animation:i,component:n,variant:k,hasChildren:!!f.children}),M=z(p);return d.jsx(O,o({as:n,ref:a,className:P(M.root,l),ownerState:p},f,{style:o({width:R,height:h},x)}))});var u={},B=C;Object.defineProperty(u,"__esModule",{value:!0});var H=u.default=void 0,T=B(_()),V=d;H=u.default=(0,T.default)((0,V.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var c={},W=C;Object.defineProperty(c,"__esModule",{value:!0});var G=c.default=void 0,J=W(_()),Q=d;G=c.default=(0,J.default)((0,Q.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");export{Z as S,H as a,G as d};
//# sourceMappingURL=MoreHoriz-DExORUj9.js.map
