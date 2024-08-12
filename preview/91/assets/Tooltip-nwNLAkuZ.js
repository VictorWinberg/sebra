import{ap as fe,ao as he,y as X,aJ as Wo,an as r,aD as jo,aK as Uo,r as p,aE as ge,al as be,a as Te,aT as ve,bD as F,at as Pe,aB as ye,ay as Ao,av as we,aw as xe,aq as N,bm as Bo,bE as k,j as g,as as Re,bF as Ce}from"./index-C68uxFow.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Oe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function _e(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:n,arrow:l,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",l&&"popperArrow"],tooltip:["tooltip",l&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Ee=X(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Le=X("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${_e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=X("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let D=!1;const So=new Ce;let w={x:0,y:0};function A(t,e){return(n,...l)=>{e&&e(n,...l),t(n,...l)}}const Ne=p.forwardRef(function(e,n){var l,x,R,C,Y,Q,Z,oo,eo,to,ro,no,so,po,io,ao,lo,co,uo;const B=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:S,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Ko=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:qo=700,followCursor:W=!1,id:Go,leaveDelay:bo=0,leaveTouchDelay:Jo=1500,onClose:To,onOpen:vo,open:Xo,placement:Po="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:O={},title:h,TransitionComponent:Yo=Bo,TransitionProps:Qo}=B,yo=be(B,Oe),c=p.isValidElement(S)?S:g.jsx("span",{children:S}),wo=Te(),Zo=ve(),[b,xo]=p.useState(),[U,oe]=p.useState(null),_=p.useRef(!1),V=Ho||W,Ro=F(),z=F(),$=F(),Co=F(),[ee,Mo]=Pe({controlled:Xo,default:!1,name:"Tooltip",state:"open"});let a=ee;const H=ye(Go),T=p.useRef(),E=Ao(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>E,[E]);const Oo=o=>{So.clear(),D=!0,Mo(!0),vo&&!a&&vo(o)},L=Ao(o=>{So.start(800+bo,()=>{D=!1}),Mo(!1),To&&a&&To(o),Ro.start(wo.transitions.duration.shortest,()=>{_.current=!1})}),I=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),$.clear(),ho||D&&go?z.start(D?go:ho,()=>{Oo(o)}):Oo(o))},K=o=>{z.clear(),$.start(bo,()=>{L(o)})},{isFocusVisibleRef:_o,onBlur:te,onFocus:re,ref:ne}=we(),[,$o]=p.useState(!1),Eo=o=>{te(o),_o.current===!1&&($o(!1),K(o))},Lo=o=>{b||xo(o.currentTarget),re(o),_o.current===!0&&($o(!0),I(o))},Io=o=>{_.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),$.clear(),Ro.clear(),E(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(qo,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),E(),$.start(Jo,()=>{L(o)})};p.useEffect(()=>{if(!a)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&L(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[L,a]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(a=!1);const q=p.useRef(),ae=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),w={x:o.clientX,y:o.clientY},q.current&&q.current.update()},v={},G=typeof h=="string";Vo?(v.title=!a&&G&&!fo?h:null,v["aria-describedby"]=a?H:null):(v["aria-label"]=G?h:null,v["aria-labelledby"]=a&&!G?H:null);const i=r({},v,yo,c.props,{className:N(yo.className,c.props.className),onTouchStart:Io,ref:ie},W?{onMouseMove:ae}:{}),P={};Ko||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=A(I,i.onMouseOver),i.onMouseLeave=A(K,i.onMouseLeave),V||(P.onMouseOver=I,P.onMouseLeave=K)),zo||(i.onFocus=A(Lo,i.onFocus),i.onBlur=A(Eo,i.onBlur),V||(P.onFocus=Lo,P.onBlur=Eo));const le=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[U,m]),y=r({},B,{isRtl:Zo,arrow:mo,disableInteractive:V,placement:Po,PopperComponentProp:j,touch:_.current}),J=$e(y),Fo=(l=(x=O.popper)!=null?x:M.Popper)!=null?l:Ee,No=(R=(C=(Y=O.transition)!=null?Y:M.Transition)!=null?C:Yo)!=null?R:Bo,ko=(Q=(Z=O.tooltip)!=null?Z:M.Tooltip)!=null?Q:Le,Do=(oo=(eo=O.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=k(Fo,r({},m,(to=f.popper)!=null?to:d.popper,{className:N(J.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),y),ue=k(No,r({},Qo,(so=f.transition)!=null?so:d.transition),y),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:N(J.tooltip,(io=(ao=f.tooltip)!=null?ao:d.tooltip)==null?void 0:io.className)}),y),me=k(Do,r({},(lo=f.arrow)!=null?lo:d.arrow,{className:N(J.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),y);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(Fo,r({as:j??Wo,placement:Po,anchorEl:W?{getBoundingClientRect:()=>({top:w.y,left:w.x,right:w.x,bottom:w.y,width:0,height:0})}:b,popperRef:q,open:b?a:!1,id:H,transition:!0},P,ce,{popperOptions:le,children:({TransitionProps:o})=>g.jsx(No,r({timeout:wo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Do,r({},me,{ref:oe})):null]}))}))}))]})});export{Ne as T};
