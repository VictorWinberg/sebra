import{v as fe,t as he,w as Y,aj as Wo,s as r,Q as jo,a4 as Uo,x as p,X as ge,p as be,a as Te,a5 as ve,bh as k,E as Pe,a0 as we,K as Bo,H as ye,I as xe,y as F,ak as Do,bi as N,j as g,A as Re,bj as Ce}from"./index-D3mAOLH1.js";function Me(t){return he("MuiTooltip",t)}const u=fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Oe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function _e(t){return Math.round(t*1e5)/1e5}const $e=t=>{const{classes:e,disableInteractive:s,arrow:a,touch:x,placement:R}=t,C={popper:["popper",!s&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",x&&"touch",`tooltipPlacement${jo(R.split("-")[0])}`],arrow:["arrow"]};return Re(C,Me,e)},Le=Y(Wo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.popper,!s.disableInteractive&&e.popperInteractive,s.arrow&&e.popperArrow,!s.open&&e.popperClose]}})(({theme:t,ownerState:e,open:s})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${u.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${u.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${u.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${u.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=Y("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.tooltip,s.touch&&e.touch,s.arrow&&e.tooltipArrow,e[`tooltipPlacement${jo(s.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${_e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${u.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${u.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${u.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${u.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=Y("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Uo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1;const So=new Ce;let y={x:0,y:0};function B(t,e){return(s,...a)=>{e&&e(s,...a),t(s,...a)}}const Fe=p.forwardRef(function(e,s){var a,x,R,C,q,J,Z,oo,eo,to,ro,so,no,po,io,lo,ao,co,uo;const D=ge({props:e,name:"MuiTooltip"}),{arrow:mo=!1,children:S,components:M={},componentsProps:d={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:fo=!1,disableInteractive:Ho=!1,disableTouchListener:Ko=!1,enterDelay:ho=100,enterNextDelay:go=0,enterTouchDelay:Xo=700,followCursor:W=!1,id:Go,leaveDelay:bo=0,leaveTouchDelay:Qo=1500,onClose:To,onOpen:vo,open:Yo,placement:Po="bottom",PopperComponent:j,PopperProps:m={},slotProps:f={},slots:O={},title:h,TransitionComponent:qo=Do,TransitionProps:Jo}=D,wo=be(D,Oe),c=p.isValidElement(S)?S:g.jsx("span",{children:S}),yo=Te(),Zo=ve(),[b,xo]=p.useState(),[U,oe]=p.useState(null),_=p.useRef(!1),V=Ho||W,Ro=k(),z=k(),$=k(),Co=k(),[ee,Mo]=Pe({controlled:Yo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=we(Go),T=p.useRef(),L=Bo(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),Co.clear()});p.useEffect(()=>L,[L]);const Oo=o=>{So.clear(),A=!0,Mo(!0),vo&&!l&&vo(o)},E=Bo(o=>{So.start(800+bo,()=>{A=!1}),Mo(!1),To&&l&&To(o),Ro.start(yo.transitions.duration.shortest,()=>{_.current=!1})}),I=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),z.clear(),$.clear(),ho||A&&go?z.start(A?go:ho,()=>{Oo(o)}):Oo(o))},K=o=>{z.clear(),$.start(bo,()=>{E(o)})},{isFocusVisibleRef:_o,onBlur:te,onFocus:re,ref:se}=ye(),[,$o]=p.useState(!1),Lo=o=>{te(o),_o.current===!1&&($o(!1),K(o))},Eo=o=>{b||xo(o.currentTarget),re(o),_o.current===!0&&($o(!0),I(o))},Io=o=>{_.current=!0;const n=c.props;n.onTouchStart&&n.onTouchStart(o)},ne=o=>{Io(o),$.clear(),Ro.clear(),L(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Co.start(Xo,()=>{document.body.style.WebkitUserSelect=T.current,I(o)})},pe=o=>{c.props.onTouchEnd&&c.props.onTouchEnd(o),L(),$.start(Qo,()=>{E(o)})};p.useEffect(()=>{if(!l)return;function o(n){(n.key==="Escape"||n.key==="Esc")&&E(n)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,l]);const ie=xe(c.ref,se,xo,s);!h&&h!==0&&(l=!1);const X=p.useRef(),le=o=>{const n=c.props;n.onMouseMove&&n.onMouseMove(o),y={x:o.clientX,y:o.clientY},X.current&&X.current.update()},v={},G=typeof h=="string";Vo?(v.title=!l&&G&&!fo?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=G?h:null,v["aria-labelledby"]=l&&!G?H:null);const i=r({},v,wo,c.props,{className:F(wo.className,c.props.className),onTouchStart:Io,ref:ie},W?{onMouseMove:le}:{}),P={};Ko||(i.onTouchStart=ne,i.onTouchEnd=pe),fo||(i.onMouseOver=B(I,i.onMouseOver),i.onMouseLeave=B(K,i.onMouseLeave),V||(P.onMouseOver=I,P.onMouseLeave=K)),zo||(i.onFocus=B(Eo,i.onFocus),i.onBlur=B(Lo,i.onBlur),V||(P.onFocus=Eo,P.onBlur=Lo));const ae=p.useMemo(()=>{var o;let n=[{name:"arrow",enabled:!!U,options:{element:U,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(n=n.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:n})},[U,m]),w=r({},D,{isRtl:Zo,arrow:mo,disableInteractive:V,placement:Po,PopperComponentProp:j,touch:_.current}),Q=$e(w),ko=(a=(x=O.popper)!=null?x:M.Popper)!=null?a:Le,Fo=(R=(C=(q=O.transition)!=null?q:M.Transition)!=null?C:qo)!=null?R:Do,No=(J=(Z=O.tooltip)!=null?Z:M.Tooltip)!=null?J:Ee,Ao=(oo=(eo=O.arrow)!=null?eo:M.Arrow)!=null?oo:Ie,ce=N(ko,r({},m,(to=f.popper)!=null?to:d.popper,{className:F(Q.popper,m==null?void 0:m.className,(ro=(so=f.popper)!=null?so:d.popper)==null?void 0:ro.className)}),w),ue=N(Fo,r({},Jo,(no=f.transition)!=null?no:d.transition),w),de=N(No,r({},(po=f.tooltip)!=null?po:d.tooltip,{className:F(Q.tooltip,(io=(lo=f.tooltip)!=null?lo:d.tooltip)==null?void 0:io.className)}),w),me=N(Ao,r({},(ao=f.arrow)!=null?ao:d.arrow,{className:F(Q.arrow,(co=(uo=f.arrow)!=null?uo:d.arrow)==null?void 0:co.className)}),w);return g.jsxs(p.Fragment,{children:[p.cloneElement(c,i),g.jsx(ko,r({as:j??Wo,placement:Po,anchorEl:W?{getBoundingClientRect:()=>({top:y.y,left:y.x,right:y.x,bottom:y.y,width:0,height:0})}:b,popperRef:X,open:b?l:!1,id:H,transition:!0},P,ce,{popperOptions:ae,children:({TransitionProps:o})=>g.jsx(Fo,r({timeout:yo.transitions.duration.shorter},o,ue,{children:g.jsxs(No,r({},de,{children:[h,mo?g.jsx(Ao,r({},me,{ref:oe})):null]}))}))}))]})});export{Fe as T};