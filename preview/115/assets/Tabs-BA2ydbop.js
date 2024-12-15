import{aL as ft,aK as pt,s as j,at as Pt,aW as Lt,aN as b,r as d,h as ht,aM as rt,g as L,j as v,aP as vt,k as Nt,bB as Zt,bw as kt,bC as Ft,b8 as At,b3 as lt,f as te,bD as ut,bE as ee}from"./index-Bpl57a60.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a16c5a29-61d8-45cb-abea-fc6e2129001e",t._sentryDebugIdIdentifier="sentry-dbid-a16c5a29-61d8-45cb-abea-fc6e2129001e")}catch{}})();let U;function Ot(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function oe(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(Ot()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function le(t){return pt("MuiTab",t)}const $=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),re=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ne=t=>{const{classes:e,textColor:r,fullWidth:a,wrapped:s,icon:c,label:h,selected:p,disabled:u}=t,x={root:["root",c&&h&&"labelIcon",`textColor${Lt(r)}`,a&&"fullWidth",s&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return vt(x,le,e)},se=j(Pt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Lt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${$.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${$.selected}`]:{opacity:1},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Re=d.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTab"}),{className:s,disabled:c=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:x="top",indicator:B,label:y,onChange:S,onClick:w,onFocus:N,selected:I,selectionFollowsFocus:g,textColor:D="inherit",value:M,wrapped:nt=!1}=a,H=rt(a,re),Y=b({},a,{disabled:c,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:x,label:!!y,fullWidth:p,textColor:D,wrapped:nt}),_=ne(Y),k=u&&y&&d.isValidElement(u)?d.cloneElement(u,{className:L(_.iconWrapper,u.props.className)}):u,J=R=>{!I&&S&&S(R,M),w&&w(R)},X=R=>{g&&!I&&S&&S(R,M),N&&N(R)};return v.jsxs(se,b({focusRipple:!h,className:L(_.root,s),ref:r,role:"tab","aria-selected":I,disabled:c,onClick:J,onFocus:X,ownerState:Y,tabIndex:I?0:-1},H,{children:[x==="top"||x==="start"?v.jsxs(d.Fragment,{children:[k,y]}):v.jsxs(d.Fragment,{children:[y,k]}),B]}))}),ae=Nt(v.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),ie=Nt(v.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function ce(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function de(t,e,r,a={},s=()=>{}){const{ease:c=ce,duration:h=300}=a;let p=null;const u=e[t];let x=!1;const B=()=>{x=!0},y=S=>{if(x){s(new Error("Animation cancelled"));return}p===null&&(p=S);const w=Math.min(1,(S-p)/h);if(e[t]=c(w)*(r-u)+u,w>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(y)};return u===r?(s(new Error("Element already at target position")),B):(requestAnimationFrame(y),B)}const ue=["onChange"],be={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function fe(t){const{onChange:e}=t,r=rt(t,ue),a=d.useRef(),s=d.useRef(null),c=()=>{a.current=s.current.offsetHeight-s.current.clientHeight};return Zt(()=>{const h=kt(()=>{const u=a.current;c(),u!==a.current&&e(a.current)}),p=Ft(s.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{c(),e(a.current)},[e]),v.jsx("div",b({style:be,ref:s},r))}function pe(t){return pt("MuiTabScrollButton",t)}const he=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),ve=["className","slots","slotProps","direction","orientation","disabled"],Se=t=>{const{classes:e,orientation:r,disabled:a}=t;return vt({root:["root",r,a&&"disabled"]},pe,e)},me=j(Pt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${he.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),xe=d.forwardRef(function(e,r){var a,s;const c=ht({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:x}=c,B=rt(c,ve),y=At(),S=b({isRtl:y},c),w=Se(S),N=(a=p.StartScrollButtonIcon)!=null?a:ae,I=(s=p.EndScrollButtonIcon)!=null?s:ie,g=lt({elementType:N,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),D=lt({elementType:I,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return v.jsx(me,b({component:"div",className:L(w.root,h),ref:r,role:null,ownerState:S,tabIndex:null},B,{children:x==="left"?v.jsx(N,b({},g)):v.jsx(I,b({},D))}))});function ge(t){return pt("MuiTabs",t)}const bt=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ye=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,zt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,r)=>{let a=!1,s=r(t,e);for(;s;){if(s===t.firstChild){if(a)return;a=!0}const c=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||c)s=r(t,s);else{s.focus();return}}},Ce=t=>{const{vertical:e,fixed:r,hideScrollbar:a,scrollableX:s,scrollableY:c,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return vt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",s&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},ge,u)},Be=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${bt.scrollButtons}`]:e.scrollButtons},{[`& .${bt.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${bt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),we=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ie=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Te=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Ee=j(fe)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Wt={},ze=d.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTabs"}),s=te(),c=At(),{"aria-label":h,"aria-labelledby":p,action:u,centered:x=!1,children:B,className:y,component:S="div",allowScrollButtonsMobile:w=!1,indicatorColor:N="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:D=xe,scrollButtons:M="auto",selectionFollowsFocus:nt,slots:H={},slotProps:Y={},TabIndicatorProps:_={},TabScrollButtonProps:k={},textColor:J="primary",value:X,variant:R="standard",visibleScrollbar:st=!1}=a,$t=rt(a,ye),T=R==="scrollable",C=g==="vertical",K=C?"scrollTop":"scrollLeft",Q=C?"top":"left",Z=C?"bottom":"right",at=C?"clientHeight":"clientWidth",V=C?"height":"width",F=b({},a,{component:S,allowScrollButtonsMobile:w,indicatorColor:N,orientation:g,vertical:C,scrollButtons:M,textColor:J,variant:R,visibleScrollbar:st,fixed:!T,hideScrollbar:T&&!st,scrollableX:T&&!C,scrollableY:T&&C,centered:x&&!T,scrollButtonsHideMobile:!w}),W=Ce(F),jt=lt({elementType:H.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:F}),Dt=lt({elementType:H.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:F}),[St,Ht]=d.useState(!1),[A,mt]=d.useState(Wt),[xt,_t]=d.useState(!1),[gt,Xt]=d.useState(!1),[yt,Ut]=d.useState(!1),[Ct,Yt]=d.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,z=d.useRef(null),O=d.useRef(null),wt=()=>{const o=z.current;let l;if(o){const n=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:oe(o,c?"rtl":"ltr"),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let i;if(o&&X!==!1){const n=O.current.children;if(n.length>0){const f=n[Bt.get(X)];i=f?f.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},q=ut(()=>{const{tabsMeta:o,tabMeta:l}=wt();let i=0,n;if(C)n="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(n=c?"right":"left",l&&o){const m=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(c?-1:1)*(l[n]-o[n]+m)}const f={[n]:i,[V]:l?l[V]:0};if(isNaN(A[n])||isNaN(A[V]))mt(f);else{const m=Math.abs(A[n]-f[n]),E=Math.abs(A[V]-f[V]);(m>=1||E>=1)&&mt(f)}}),it=(o,{animation:l=!0}={})=>{l?de(K,z.current,o,{duration:s.transitions.duration.standard}):z.current[K]=o},It=o=>{let l=z.current[K];C?l+=o:(l+=o*(c?-1:1),l*=c&&Ot()==="reverse"?-1:1),it(l)},Tt=()=>{const o=z.current[at];let l=0;const i=Array.from(O.current.children);for(let n=0;n<i.length;n+=1){const f=i[n];if(l+f[at]>o){n===0&&(l=o);break}l+=f[at]}return l},Kt=()=>{It(-1*Tt())},Vt=()=>{It(Tt())},qt=d.useCallback(o=>{Yt({overflow:null,scrollbarWidth:o})},[]),Gt=()=>{const o={};o.scrollbarSizeListener=T?v.jsx(Ee,{onChange:qt,className:L(W.scrollableX,W.hideScrollbar)}):null;const i=T&&(M==="auto"&&(xt||gt)||M===!0);return o.scrollButtonStart=i?v.jsx(D,b({slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:jt},orientation:g,direction:c?"right":"left",onClick:Kt,disabled:!xt},k,{className:L(W.scrollButtons,k.className)})):null,o.scrollButtonEnd=i?v.jsx(D,b({slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Dt},orientation:g,direction:c?"left":"right",onClick:Vt,disabled:!gt},k,{className:L(W.scrollButtons,k.className)})):null,o},Et=ut(o=>{const{tabsMeta:l,tabMeta:i}=wt();if(!(!i||!l)){if(i[Q]<l[Q]){const n=l[K]+(i[Q]-l[Q]);it(n,{animation:o})}else if(i[Z]>l[Z]){const n=l[K]+(i[Z]-l[Z]);it(n,{animation:o})}}}),tt=ut(()=>{T&&M!==!1&&Ut(!yt)});d.useEffect(()=>{const o=kt(()=>{z.current&&q()});let l;const i=m=>{m.forEach(E=>{E.removedNodes.forEach(G=>{var P;(P=l)==null||P.unobserve(G)}),E.addedNodes.forEach(G=>{var P;(P=l)==null||P.observe(G)})}),o(),tt()},n=Ft(z.current);n.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(O.current.children).forEach(m=>{l.observe(m)})),typeof MutationObserver<"u"&&(f=new MutationObserver(i),f.observe(O.current,{childList:!0})),()=>{var m,E;o.clear(),n.removeEventListener("resize",o),(m=f)==null||m.disconnect(),(E=l)==null||E.disconnect()}},[q,tt]),d.useEffect(()=>{const o=Array.from(O.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&M!==!1){const i=o[0],n=o[l-1],f={root:z.current,threshold:.99},m=dt=>{_t(!dt[0].isIntersecting)},E=new IntersectionObserver(m,f);E.observe(i);const G=dt=>{Xt(!dt[0].isIntersecting)},P=new IntersectionObserver(G,f);return P.observe(n),()=>{E.disconnect(),P.disconnect()}}},[T,M,yt,B==null?void 0:B.length]),d.useEffect(()=>{Ht(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Et(Wt!==A)},[Et,A]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const Mt=v.jsx(Te,b({},_,{className:L(W.indicator,_.className),ownerState:F,style:b({},A,_.style)}));let et=0;const Jt=d.Children.map(B,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?et:o.props.value;Bt.set(l,et);const i=l===X;return et+=1,d.cloneElement(o,b({fullWidth:R==="fullWidth",indicator:i&&!St&&Mt,selected:i,selectionFollowsFocus:nt,onChange:I,textColor:J,value:l},et===1&&X===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Qt=o=>{const l=O.current,i=ee(l).activeElement;if(i.getAttribute("role")!=="tab")return;let f=g==="horizontal"?"ArrowLeft":"ArrowUp",m=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&c&&(f="ArrowRight",m="ArrowLeft"),o.key){case f:o.preventDefault(),ot(l,i,zt);break;case m:o.preventDefault(),ot(l,i,Rt);break;case"Home":o.preventDefault(),ot(l,null,Rt);break;case"End":o.preventDefault(),ot(l,null,zt);break}},ct=Gt();return v.jsxs(Be,b({className:L(W.root,y),ownerState:F,ref:r,as:S},$t,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,v.jsxs(we,{className:W.scroller,ownerState:F,style:{overflow:Ct.overflow,[C?`margin${c?"Left":"Right"}`:"marginBottom"]:st?void 0:-Ct.scrollbarWidth},ref:z,children:[v.jsx(Ie,{"aria-label":h,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:W.flexContainer,ownerState:F,onKeyDown:Qt,ref:O,role:"tablist",children:Jt}),St&&Mt]}),ct.scrollButtonEnd]}))});export{ze as T,Re as a,bt as t};
//# sourceMappingURL=Tabs-BA2ydbop.js.map
