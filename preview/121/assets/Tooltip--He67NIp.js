import{aM as me,aL as he,s as Q,P as Wo,aO as r,aX as jo,b0 as Uo,r as i,h as ge,aN as be,f as Te,b9 as ye,bJ as D,b8 as ve,b7 as we,bE as Ao,bK as Pe,b3 as xe,g as N,bn as Bo,bL as k,j as g,aQ as Re,bM as Ce}from"./index-Wz3Ywbj5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="864672b2-27b6-4fcc-be09-0ed1801ec291",o._sentryDebugIdIdentifier="sentry-dbid-864672b2-27b6-4fcc-be09-0ed1801ec291")}catch{}})();function Me(o){return he("MuiTooltip",o)}const u=me("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),_e=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(o){return Math.round(o*1e5)/1e5}const Le=o=>{const{classes:e,disableInteractive:n,arrow:a,touch:x,placement:R}=o,C={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},$e=Q(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:o,ownerState:e,open:n})=>r({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ie=Q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:o,ownerState:e})=>r({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Uo(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ee=Q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Uo(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let F=!1;const So=new Ce;let P={x:0,y:0};function A(o,e){return(n,...a)=>{e&&e(n,...a),o(n,...a)}}const Ne=i.forwardRef(function(e,n){var a,x,R,C,Y,q,Z,oo,eo,to,ro,no,so,io,po,lo,ao,co,uo;const B=ge({props:e,name:"MuiTooltip"}),{arrow:fo=!1,children:S,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:mo=!1,disableInteractive:Ho=!1,disableTouchListener:Ko=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Xo=700,followCursor:W=!1,id:Go,leaveDelay:bo=0,leaveTouchDelay:Jo=1500,onClose:To,onOpen:yo,open:Qo,placement:vo="bottom",PopperComponent:j,PopperProps:f={},slotProps:m={},slots:_={},title:h,TransitionComponent:Yo=Bo,TransitionProps:qo}=B,wo=be(B,_e),c=i.isValidElement(S)?S:g.jsx("span",{children:S}),Po=Te(),Zo=ye(),[b,xo]=i.useState(),[U,oe]=i.useState(null),O=i.useRef(!1),V=Ho||W,Ro=D(),z=D(),L=D(),Co=D(),[ee,Mo]=ve({controlled:Qo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=we(Go),T=i.useRef(),$=Ao(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});i.useEffect(()=>$,[$]);const _o=t=>{So.clear(),F=!0,Mo(!0),yo&&!l&&yo(t)},I=Ao(t=>{So.start(800+bo,()=>{F=!1}),Mo(!1),To&&l&&To(t),Ro.start(Po.transitions.duration.shortest,()=>{O.current=!1})}),E=t=>{O.current&&t.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),L.clear(),ho||F&&go?z.start(F?go:ho,()=>{_o(t)}):_o(t))},K=t=>{z.clear(),L.start(bo,()=>{I(t)})},{isFocusVisibleRef:Oo,onBlur:te,onFocus:re,ref:ne}=Pe(),[,Lo]=i.useState(!1),$o=t=>{te(t),Oo.current===!1&&(Lo(!1),K(t))},Io=t=>{b||xo(t.currentTarget),re(t),Oo.current===!0&&(Lo(!0),E(t))},Eo=t=>{O.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(t)},se=t=>{Eo(t),L.clear(),Ro.clear(),$(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Xo,()=>{document.body.style.WebkitUserSelect=T.current,E(t)})},ie=t=>{c.props.onTouchEnd&&c.props.onTouchEnd(t),$(),L.start(Jo,()=>{I(t)})};i.useEffect(()=>{if(!l)return;function t(s){(s.key==="Escape"||s.key==="Esc")&&I(s)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[I,l]);const pe=xe(c.ref,ne,xo,n);!h&&h!==0&&(l=!1);const X=i.useRef(),le=t=>{const s=c.props;s.onMouseMove&&s.onMouseMove(t),P={x:t.clientX,y:t.clientY},X.current&&X.current.update()},y={},G=typeof h=="string";Vo?(y.title=!l&&G&&!mo?h:null,y["aria-describedby"]=l?H:null):(y["aria-label"]=G?h:null,y["aria-labelledby"]=l&&!G?H:null);const p=r({},y,wo,c.props,{className:N(wo.className,c.props.className),onTouchStart:Eo,ref:pe},W?{onMouseMove:le}:{}),v={};Ko||(p.onTouchStart=se,p.onTouchEnd=ie),mo||(p.onMouseOver=A(E,p.onMouseOver),p.onMouseLeave=A(K,p.onMouseLeave),V||(v.onMouseOver=E,v.onMouseLeave=K)),zo||(p.onFocus=A(Io,p.onFocus),p.onBlur=A($o,p.onBlur),V||(v.onFocus=Io,v.onBlur=$o));const ae=i.useMemo(()=>{var t;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(t=f.popperOptions)!=null&&t.modifiers&&(s=s.concat(f.popperOptions.modifiers)),r({},f.popperOptions,{modifiers:s})},[U,f]),w=r({},B,{isRtl:Zo,arrow:fo,disableInteractive:V,placement:vo,PopperComponentProp:j,touch:O.current}),J=Le(w),Do=(a=(x=_.popper)!=null?x:M.Popper)!=null?a:$e,No=(R=(C=(Y=_.transition)!=null?Y:M.Transition)!=null?C:Yo)!=null?R:Bo,ko=(q=(Z=_.tooltip)!=null?Z:M.Tooltip)!=null?q:Ie,Fo=(oo=(eo=_.arrow)!=null?eo:M.Arrow)!=null?oo:Ee,ce=k(Do,r({},f,(to=m.popper)!=null?to:d.popper,{className:N(J.popper,f==null?void 0:f.className,(ro=(no=m.popper)!=null?no:d.popper)==null?void 0:ro.className)}),w),ue=k(No,r({},qo,(so=m.transition)!=null?so:d.transition),w),de=k(ko,r({},(io=m.tooltip)!=null?io:d.tooltip,{className:N(J.tooltip,(po=(lo=m.tooltip)!=null?lo:d.tooltip)==null?void 0:po.className)}),w),fe=k(Fo,r({},(ao=m.arrow)!=null?ao:d.arrow,{className:N(J.arrow,(co=(uo=m.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),w);return g.jsxs(i.Fragment,{children:[i.cloneElement(c,p),g.jsx(Do,r({as:j??Wo,placement:vo,anchorEl:W?{getBoundingClientRect:()=>({top:P.y,left:P.x,right:P.x,bottom:P.y,width:0,height:0})}:b,popperRef:X,open:b?l:!1,id:H,transition:!0},v,ce,{popperOptions:ae,children:({TransitionProps:t})=>g.jsx(No,r({timeout:Po.transitions.duration.shorter},t,ue,{children:g.jsxs(ko,r({},de,{children:[h,fo?g.jsx(Fo,r({},fe,{ref:oe})):null]}))}))}))]})});export{Ne as T};
//# sourceMappingURL=Tooltip--He67NIp.js.map
