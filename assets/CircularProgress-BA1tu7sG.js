import{o as R,q as j,r as N,t as E,g as U,_ as o,j as h,f as z,aZ as c,v as B,s as v,bA as _,bB as $}from"./index-DsTDW4zj.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="c864fef8-b217-464e-a9f3-b18510b8aa63",r._sentryDebugIdIdentifier="sentry-dbid-c864fef8-b217-464e-a9f3-b18510b8aa63")}catch{}})();function F(r){return R("MuiCircularProgress",r)}j("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,C,P,D,S;const t=44,W=$(C||(C=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=$(P||(P=l`
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
`)),q=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,f={root:["root",s,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return B(f,F,e)},A=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(D||(D=l`
      animation: ${0} 1.4s linear infinite;
    `),W)),G=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),L=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),V=N.forwardRef(function(e,s){const a=E({props:e,name:"MuiCircularProgress"}),{className:d,color:f="primary",disableShrink:w=!1,size:u=40,style:I,thickness:i=3.6,value:m=0,variant:y="indeterminate"}=a,M=U(a,K),n=o({},a,{color:f,disableShrink:w,size:u,thickness:i,value:m,variant:y}),p=q(n),g={},b={},k={};if(y==="determinate"){const x=2*Math.PI*((t-i)/2);g.strokeDasharray=x.toFixed(3),k["aria-valuenow"]=Math.round(m),g.strokeDashoffset=`${((100-m)/100*x).toFixed(3)}px`,b.transform="rotate(-90deg)"}return h.jsx(A,o({className:z(p.root,d),style:o({width:u,height:u},b,I),ownerState:n,ref:s,role:"progressbar"},k,M,{children:h.jsx(G,{className:p.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:h.jsx(L,{className:p.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{V as C};
//# sourceMappingURL=CircularProgress-BA1tu7sG.js.map
