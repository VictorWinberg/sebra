import{au as me,at as he,K as J,aO as Wo,as as r,aI as jo,aP as Uo,r as i,aJ as ge,aq as be,b as Te,aX as ye,bv as D,ay as ve,aG as we,aD as Ao,aA as Pe,aB as xe,av as k,bb as Bo,bw as F,j as g,ax as Re,bx as Ce}from"./index-8MMrl1Jf.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="e88c5912-e46e-4a1d-ada1-227e829d4c71",o._sentryDebugIdIdentifier="sentry-dbid-e88c5912-e46e-4a1d-ada1-227e829d4c71")}catch{}})();function _e(o){return he("MuiTooltip",o)}const u=me("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Me=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(o){return Math.round(o*1e5)/1e5}const Ie=o=>{const{classes:e,disableInteractive:n,arrow:l,touch:x,placement:R}=o,C={popper:["popper",!n&&"popperInteractive",l&&"popperArrow"],tooltip:["tooltip",l&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,_e,e)},$e=J(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:o,ownerState:e,open:n})=>r({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Le=J("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:o,ownerState:e})=>r({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Uo(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ee=J("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Uo(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let N=!1;const So=new Ce;let P={x:0,y:0};function A(o,e){return(n,...l)=>{e&&e(n,...l),o(n,...l)}}const ke=i.forwardRef(function(e,n){var l,x,R,C,Y,Q,Z,oo,eo,to,ro,no,so,io,po,ao,lo,co,uo;const B=ge({props:e,name:"MuiTooltip"}),{arrow:fo=!1,children:S,components:_={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:mo=!1,disableInteractive:Ho=!1,disableTouchListener:Go=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Ko=700,followCursor:W=!1,id:Xo,leaveDelay:bo=0,leaveTouchDelay:qo=1500,onClose:To,onOpen:yo,open:Jo,placement:vo="bottom",PopperComponent:j,PopperProps:f={},slotProps:m={},slots:M={},title:h,TransitionComponent:Yo=Bo,TransitionProps:Qo}=B,wo=be(B,Me),c=i.isValidElement(S)?S:g.jsx("span",{children:S}),Po=Te(),Zo=ye(),[b,xo]=i.useState(),[U,oe]=i.useState(null),O=i.useRef(!1),V=Ho||W,Ro=D(),z=D(),I=D(),Co=D(),[ee,_o]=ve({controlled:Jo,default:!1,name:"Tooltip",state:"open"});let a=ee;const H=we(Xo),T=i.useRef(),$=Ao(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});i.useEffect(()=>$,[$]);const Mo=t=>{So.clear(),N=!0,_o(!0),yo&&!a&&yo(t)},L=Ao(t=>{So.start(800+bo,()=>{N=!1}),_o(!1),To&&a&&To(t),Ro.start(Po.transitions.duration.shortest,()=>{O.current=!1})}),E=t=>{O.current&&t.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),I.clear(),ho||N&&go?z.start(N?go:ho,()=>{Mo(t)}):Mo(t))},G=t=>{z.clear(),I.start(bo,()=>{L(t)})},{isFocusVisibleRef:Oo,onBlur:te,onFocus:re,ref:ne}=Pe(),[,Io]=i.useState(!1),$o=t=>{te(t),Oo.current===!1&&(Io(!1),G(t))},Lo=t=>{b||xo(t.currentTarget),re(t),Oo.current===!0&&(Io(!0),E(t))},Eo=t=>{O.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(t)},se=t=>{Eo(t),I.clear(),Ro.clear(),$(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Ko,()=>{document.body.style.WebkitUserSelect=T.current,E(t)})},ie=t=>{c.props.onTouchEnd&&c.props.onTouchEnd(t),$(),I.start(qo,()=>{L(t)})};i.useEffect(()=>{if(!a)return;function t(s){(s.key==="Escape"||s.key==="Esc")&&L(s)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[L,a]);const pe=xe(c.ref,ne,xo,n);!h&&h!==0&&(a=!1);const K=i.useRef(),ae=t=>{const s=c.props;s.onMouseMove&&s.onMouseMove(t),P={x:t.clientX,y:t.clientY},K.current&&K.current.update()},y={},X=typeof h=="string";Vo?(y.title=!a&&X&&!mo?h:null,y["aria-describedby"]=a?H:null):(y["aria-label"]=X?h:null,y["aria-labelledby"]=a&&!X?H:null);const p=r({},y,wo,c.props,{className:k(wo.className,c.props.className),onTouchStart:Eo,ref:pe},W?{onMouseMove:ae}:{}),v={};Go||(p.onTouchStart=se,p.onTouchEnd=ie),mo||(p.onMouseOver=A(E,p.onMouseOver),p.onMouseLeave=A(G,p.onMouseLeave),V||(v.onMouseOver=E,v.onMouseLeave=G)),zo||(p.onFocus=A(Lo,p.onFocus),p.onBlur=A($o,p.onBlur),V||(v.onFocus=Lo,v.onBlur=$o));const le=i.useMemo(()=>{var t;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(t=f.popperOptions)!=null&&t.modifiers&&(s=s.concat(f.popperOptions.modifiers)),r({},f.popperOptions,{modifiers:s})},[U,f]),w=r({},B,{isRtl:Zo,arrow:fo,disableInteractive:V,placement:vo,PopperComponentProp:j,touch:O.current}),q=Ie(w),Do=(l=(x=M.popper)!=null?x:_.Popper)!=null?l:$e,ko=(R=(C=(Y=M.transition)!=null?Y:_.Transition)!=null?C:Yo)!=null?R:Bo,Fo=(Q=(Z=M.tooltip)!=null?Z:_.Tooltip)!=null?Q:Le,No=(oo=(eo=M.arrow)!=null?eo:_.Arrow)!=null?oo:Ee,ce=F(Do,r({},f,(to=m.popper)!=null?to:d.popper,{className:k(q.popper,f==null?void 0:f.className,(ro=(no=m.popper)!=null?no:d.popper)==null?void 0:ro.className)}),w),ue=F(ko,r({},Qo,(so=m.transition)!=null?so:d.transition),w),de=F(Fo,r({},(io=m.tooltip)!=null?io:d.tooltip,{className:k(q.tooltip,(po=(ao=m.tooltip)!=null?ao:d.tooltip)==null?void 0:po.className)}),w),fe=F(No,r({},(lo=m.arrow)!=null?lo:d.arrow,{className:k(q.arrow,(co=(uo=m.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),w);return g.jsxs(i.Fragment,{children:[i.cloneElement(c,p),g.jsx(Do,r({as:j??Wo,placement:vo,anchorEl:W?{getBoundingClientRect:()=>({top:P.y,left:P.x,right:P.x,bottom:P.y,width:0,height:0})}:b,popperRef:K,open:b?a:!1,id:H,transition:!0},v,ce,{popperOptions:le,children:({TransitionProps:t})=>g.jsx(ko,r({timeout:Po.transitions.duration.shorter},t,ue,{children:g.jsxs(Fo,r({},de,{children:[h,fo?g.jsx(No,r({},fe,{ref:oe})):null]}))}))}))]})});export{ke as T};
//# sourceMappingURL=Tooltip-C5_8lGvr.js.map
