import{n as R,o as j,r as N,q as z,f as E,_ as o,j as h,e as U,aY as c,t as F,s as y,bz as _,bA as $}from"./index-CjUg9BIw.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="343c9579-2f25-48b5-a51d-909844b43acd",r._sentryDebugIdIdentifier="sentry-dbid-343c9579-2f25-48b5-a51d-909844b43acd")}catch{}})();function K(r){return R("MuiCircularProgress",r)}j("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,C,P,D,S;const t=44,q=$(C||(C=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),A=$(P||(P=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),B=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,u={root:["root",s,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return F(u,K,e)},G=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(D||(D=l`
      animation: ${0} 1.4s linear infinite;
    `),q)),L=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),T=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),A)),Y=N.forwardRef(function(e,s){const a=z({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:w=!1,size:f=40,style:I,thickness:i=3.6,value:m=0,variant:v="indeterminate"}=a,M=E(a,W),n=o({},a,{color:u,disableShrink:w,size:f,thickness:i,value:m,variant:v}),p=B(n),g={},k={},b={};if(v==="determinate"){const x=2*Math.PI*((t-i)/2);g.strokeDasharray=x.toFixed(3),b["aria-valuenow"]=Math.round(m),g.strokeDashoffset=`${((100-m)/100*x).toFixed(3)}px`,k.transform="rotate(-90deg)"}return h.jsx(G,o({className:U(p.root,d),style:o({width:f,height:f},k,I),ownerState:n,ref:s,role:"progressbar"},b,M,{children:h.jsx(L,{className:p.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:h.jsx(T,{className:p.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{Y as C};
//# sourceMappingURL=CircularProgress-D1fUVexo.js.map
