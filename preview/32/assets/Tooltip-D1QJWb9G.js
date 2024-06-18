import{A as fe,E as he,F as Y,af as Wo,_ as r,I as jo,a5 as Uo,z as p,J as ge,K as be,a as Te,V as ve,ae as F,aF as Pe,a9 as we,X as Bo,b1 as ye,ak as xe,M as N,ah as Do,b2 as k,j as g,N as Re,b3 as Ce}from"./index-COuMXqaD.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),_e=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Oe(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:n,arrow:a,touch:x,placement:R}=t,C={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Le=Y(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Oe(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const So=new Ce;let y={x:0,y:0};function B(t,e){return(n,...a)=>{e&&e(n,...a),t(n,...a)}}const Ne=p.forwardRef(function(e,n){var a,x,R,C,q,Q,Z,oo,eo,to,ro,no,so,po,io,lo,ao,co,uo;const D=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:S,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Ko=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Xo=700,followCursor:W=!1,id:Go,leaveDelay:bo=0,leaveTouchDelay:Jo=1500,onClose:To,onOpen:vo,open:Yo,placement:Po="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:_={},title:h,TransitionComponent:qo=Do,TransitionProps:Qo}=D,wo=be(D,_e),c=p.isValidElement(S)?S:g.jsx("span",{children:S}),yo=Te(),Zo=ve(),[b,xo]=p.useState(),[U,oe]=p.useState(null),O=p.useRef(!1),V=Ho||W,Ro=F(),z=F(),$=F(),Co=F(),[ee,Mo]=Pe({controlled:Yo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=we(Go),T=p.useRef(),L=Bo(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const _o=o=>{So.clear(),A=!0,Mo(!0),vo&&!l&&vo(o)},E=Bo(o=>{So.start(800+bo,()=>{A=!1}),Mo(!1),To&&l&&To(o),Ro.start(yo.transitions.duration.shortest,()=>{O.current=!1})}),I=o=>{O.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),$.clear(),ho||A&&go?z.start(A?go:ho,()=>{_o(o)}):_o(o))},K=o=>{z.clear(),$.start(bo,()=>{E(o)})},{isFocusVisibleRef:Oo,onBlur:te,onFocus:re,ref:ne}=ye(),[,$o]=p.useState(!1),Lo=o=>{te(o),Oo.current===!1&&($o(!1),K(o))},Eo=o=>{b||xo(o.currentTarget),re(o),Oo.current===!0&&($o(!0),I(o))},Io=o=>{O.current=!0;const s=c.props;s.onTouchStart&&s.onTouchStart(o)},se=o=>{Io(o),$.clear(),Ro.clear(),L(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Xo,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),$.start(Jo,()=>{E(o)})};p.useEffect(()=>{if(!l)return;function o(s){(s.key==="Escape"||s.key==="Esc")&&E(s)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,l]);const ie=xe(c.ref,ne,xo,n);!h&&h!==0&&(l=!1);const X=p.useRef(),le=o=>{const s=c.props;s.onMouseMove&&s.onMouseMove(o),y={x:o.clientX,y:o.clientY},X.current&&X.current.update()},v={},G=typeof h=="string";Vo?(v.title=!l&&G&&!fo?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=G?h:null,v["aria-labelledby"]=l&&!G?H:null);const i=r({},v,wo,c.props,{className:N(wo.className,c.props.className),onTouchStart:Io,ref:ie},W?{onMouseMove:le}:{}),P={};Ko||(i.onTouchStart=se,i.onTouchEnd=pe),fo||(i.onMouseOver=B(I,i.onMouseOver),i.onMouseLeave=B(K,i.onMouseLeave),V||(P.onMouseOver=I,P.onMouseLeave=K)),zo||(i.onFocus=B(Eo,i.onFocus),i.onBlur=B(Lo,i.onBlur),V||(P.onFocus=Eo,P.onBlur=Lo));const ae=p.useMemo(()=>{var o;let s=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(s=s.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:s})},[U,m]),w=r({},D,{isRtl:Zo,arrow:mo,disableInteractive:V,placement:Po,PopperComponentProp:j,touch:O.current}),J=$e(w),Fo=(a=(x=_.popper)!=null?x:M.Popper)!=null?a:Le,No=(R=(C=(q=_.transition)!=null?q:M.Transition)!=null?C:qo)!=null?R:Do,ko=(Q=(Z=_.tooltip)!=null?Z:M.Tooltip)!=null?Q:Ee,Ao=(oo=(eo=_.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=k(Fo,r({},m,(to=f.popper)!=null?to:d.popper,{className:N(J.popper,m==null?void 0:m.className,(ro=(no=f.popper)!=null?no:d.popper)==null?void 0:ro.className)}),w),ue=k(No,r({},Qo,(so=f.transition)!=null?so:d.transition),w),de=k(ko,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:N(J.tooltip,(io=(lo=f.tooltip)!=null?lo:d.tooltip)==null?void 0:io.className)}),w),me=k(Ao,r({},(ao=f.arrow)!=null?ao:d.arrow,{className:N(J.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),w);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(Fo,r({as:j??Wo,placement:Po,anchorEl:W?{getBoundingClientRect:()=>({top:y.y,left:y.x,right:y.x,bottom:y.y,width:0,height:0})}:b,popperRef:X,open:b?l:!1,id:H,transition:!0},P,ce,{popperOptions:ae,children:({TransitionProps:o})=>g.jsx(No,r({timeout:yo.transitions.duration.shorter},o,ue,{children:g.jsxs(ko,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})});export{Ne as T};