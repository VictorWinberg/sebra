import{o as R,q as j,r as N,t as E,g as U,_ as o,j as h,f as z,a_ as c,v as B,s as v,bB as S,bC as $}from"./index-DMW7B888.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3fd6f6cc-5392-411f-9151-7f1204eaa84b",r._sentryDebugIdIdentifier="sentry-dbid-3fd6f6cc-5392-411f-9151-7f1204eaa84b")}catch{}})();function F(r){return R("MuiCircularProgress",r)}j("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,C,P,_,D;const t=44,W=$(C||(C=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),q=$(P||(P=l`
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
`)),G=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,f={root:["root",s,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return B(f,F,e)},L=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&S(_||(_=l`
      animation: ${0} 1.4s linear infinite;
    `),W)),T=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),V=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&S(D||(D=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),q)),A=N.forwardRef(function(e,s){const a=E({props:e,name:"MuiCircularProgress"}),{className:d,color:f="primary",disableShrink:w=!1,size:u=40,style:I,thickness:i=3.6,value:m=0,variant:y="indeterminate"}=a,M=U(a,K),n=o({},a,{color:f,disableShrink:w,size:u,thickness:i,value:m,variant:y}),p=G(n),g={},k={},x={};if(y==="determinate"){const b=2*Math.PI*((t-i)/2);g.strokeDasharray=b.toFixed(3),x["aria-valuenow"]=Math.round(m),g.strokeDashoffset=`${((100-m)/100*b).toFixed(3)}px`,k.transform="rotate(-90deg)"}return h.jsx(L,o({className:z(p.root,d),style:o({width:u,height:u},k,I),ownerState:n,ref:s,role:"progressbar"},x,M,{children:h.jsx(T,{className:p.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:h.jsx(V,{className:p.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{A as C};
//# sourceMappingURL=CircularProgress-VtOIAtYT.js.map
