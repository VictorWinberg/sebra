import{r as p,a5 as Dt,K as gt,V as De,aW as Ht,z as g,A as tt,E as ot,F as z,Y as Ze,a1 as ut,x as He,j as I,H as re,J as nt,aX as ht,aY as Fe,aZ as It,a_ as Ye,al as Rt,aw as At,a4 as Bt,a8 as mt,a$ as jt,b0 as Vt,Q as _t,C as Ut,I as Kt,a7 as kt,n as Mt,U as Gt,aM as Et,b1 as Nt,a9 as zt,Z as ct,a as Xt,W as Yt}from"./index-UAVbU-Jy.js";let qe;function Ft(){if(qe)return qe;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),qe="reverse",e.scrollLeft>0?qe="default":(e.scrollLeft=1,e.scrollLeft===0&&(qe="negative")),document.body.removeChild(e),qe}function qt(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ft()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}const Zt=e=>{const t=p.useRef({});return p.useEffect(()=>{t.current=e}),t.current};function Ct(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Jt(e={}){const{ignoreAccents:t=!0,ignoreCase:r=!0,limit:c,matchFrom:d="any",stringify:b,trim:y=!1}=e;return(h,{inputValue:O,getOptionLabel:R})=>{let T=y?O.trim():O;r&&(T=T.toLowerCase()),t&&(T=Ct(T));const k=T?h.filter(A=>{let B=(b||R)(A);return r&&(B=B.toLowerCase()),t&&(B=Ct(B)),d==="start"?B.indexOf(T)===0:B.indexOf(T)>-1}):h;return typeof c=="number"?k.slice(0,c):k}}function at(e,t){for(let r=0;r<e.length;r+=1)if(t(e[r]))return r;return-1}const Qt=Jt(),Ot=5,eo=e=>{var t;return e.current!==null&&((t=e.current.parentElement)==null?void 0:t.contains(document.activeElement))};function to(e){const{unstable_isActiveElementInListbox:t=eo,unstable_classNamePrefix:r="Mui",autoComplete:c=!1,autoHighlight:d=!1,autoSelect:b=!1,blurOnSelect:y=!1,clearOnBlur:h=!e.freeSolo,clearOnEscape:O=!1,componentName:R="useAutocomplete",defaultValue:T=e.multiple?[]:null,disableClearable:k=!1,disableCloseOnSelect:A=!1,disabled:B,disabledItemsFocusable:be=!1,disableListWrap:Q=!1,filterOptions:Z=Qt,filterSelectedOptions:ie=!1,freeSolo:F=!1,getOptionDisabled:le,getOptionKey:me,getOptionLabel:xe=n=>{var o;return(o=n.label)!=null?o:n},groupBy:ce,handleHomeEndKeys:_=!e.freeSolo,id:Be,includeInputInList:ve=!1,inputValue:ee,isOptionEqualToValue:Se=(n,o)=>n===o,multiple:$=!1,onChange:U,onClose:K,onHighlightChange:ye,onInputChange:te,onOpen:Pe,open:je,openOnFocus:we=!1,options:se,readOnly:G=!1,selectOnFocus:ke=!e.freeSolo,value:Ve}=e,X=Dt(Be);let H=xe;H=n=>{const o=xe(n);return typeof o!="string"?String(o):o};const ae=p.useRef(!1),Me=p.useRef(!0),M=p.useRef(null),J=p.useRef(null),[$e,Je]=p.useState(null),[j,Ee]=p.useState(-1),Ne=d?0:-1,W=p.useRef(Ne),[u,ue]=gt({controlled:Ve,default:T,name:R}),[x,pe]=gt({controlled:ee,default:"",name:R,state:"inputValue"}),[de,Te]=p.useState(!1),Ie=p.useCallback((n,o)=>{if(!($?u.length<o.length:o!==null)&&!h)return;let l;if($)l="";else if(o==null)l="";else{const f=H(o);l=typeof f=="string"?f:""}x!==l&&(pe(l),te&&te(n,l,"reset"))},[H,x,$,te,pe,h,u]),[ge,_e]=gt({controlled:je,default:!1,name:R,state:"open"}),[Qe,Ue]=p.useState(!0),Ke=!$&&u!=null&&x===H(u),V=ge&&!G,P=V?Z(se.filter(n=>!(ie&&($?u:[u]).some(o=>o!==null&&Se(n,o)))),{inputValue:Ke&&Qe?"":x,getOptionLabel:H}):[],oe=Zt({filteredOptions:P,value:u,inputValue:x});p.useEffect(()=>{const n=u!==oe.value;de&&!n||F&&!n||Ie(null,u)},[u,Ie,de,oe.value,F]);const Ce=ge&&P.length>0&&!G,Le=De(n=>{n===-1?M.current.focus():$e.querySelector(`[data-tag-index="${n}"]`).focus()});p.useEffect(()=>{$&&j>u.length-1&&(Ee(-1),Le(-1))},[u,$,j,Le]);function Re(n,o){if(!J.current||n<0||n>=P.length)return-1;let a=n;for(;;){const l=J.current.querySelector(`[data-option-index="${a}"]`),f=be?!1:!l||l.disabled||l.getAttribute("aria-disabled")==="true";if(l&&l.hasAttribute("tabindex")&&!f)return a;if(o==="next"?a=(a+1)%P.length:a=(a-1+P.length)%P.length,a===n)return-1}}const ne=De(({event:n,index:o,reason:a="auto"})=>{if(W.current=o,o===-1?M.current.removeAttribute("aria-activedescendant"):M.current.setAttribute("aria-activedescendant",`${X}-option-${o}`),ye&&ye(n,o===-1?null:P[o],a),!J.current)return;const l=J.current.querySelector(`[role="option"].${r}-focused`);l&&(l.classList.remove(`${r}-focused`),l.classList.remove(`${r}-focusVisible`));let f=J.current;if(J.current.getAttribute("role")!=="listbox"&&(f=J.current.parentElement.querySelector('[role="listbox"]')),!f)return;if(o===-1){f.scrollTop=0;return}const w=J.current.querySelector(`[data-option-index="${o}"]`);if(w&&(w.classList.add(`${r}-focused`),a==="keyboard"&&w.classList.add(`${r}-focusVisible`),f.scrollHeight>f.clientHeight&&a!=="mouse"&&a!=="touch")){const N=w,Oe=f.clientHeight+f.scrollTop,yt=N.offsetTop+N.offsetHeight;yt>Oe?f.scrollTop=yt-f.clientHeight:N.offsetTop-N.offsetHeight*(ce?1.3:0)<f.scrollTop&&(f.scrollTop=N.offsetTop-N.offsetHeight*(ce?1.3:0))}}),s=De(({event:n,diff:o,direction:a="next",reason:l="auto"})=>{if(!V)return;const w=Re((()=>{const N=P.length-1;if(o==="reset")return Ne;if(o==="start")return 0;if(o==="end")return N;const Oe=W.current+o;return Oe<0?Oe===-1&&ve?-1:Q&&W.current!==-1||Math.abs(o)>1?0:N:Oe>N?Oe===N+1&&ve?-1:Q||Math.abs(o)>1?N:0:Oe})(),a);if(ne({index:w,reason:l,event:n}),c&&o!=="reset")if(w===-1)M.current.value=x;else{const N=H(P[w]);M.current.value=N,N.toLowerCase().indexOf(x.toLowerCase())===0&&x.length>0&&M.current.setSelectionRange(x.length,N.length)}}),i=()=>{const n=(o,a)=>{const l=o?H(o):"",f=a?H(a):"";return l===f};if(W.current!==-1&&oe.filteredOptions&&oe.filteredOptions.length!==P.length&&oe.inputValue===x&&($?u.length===oe.value.length&&oe.value.every((o,a)=>H(u[a])===H(o)):n(oe.value,u))){const o=oe.filteredOptions[W.current];if(o)return at(P,a=>H(a)===H(o))}return-1},v=p.useCallback(()=>{if(!V)return;const n=i();if(n!==-1){W.current=n;return}const o=$?u[0]:u;if(P.length===0||o==null){s({diff:"reset"});return}if(J.current){if(o!=null){const a=P[W.current];if($&&a&&at(u,f=>Se(a,f))!==-1)return;const l=at(P,f=>Se(f,o));l===-1?s({diff:"reset"}):ne({index:l});return}if(W.current>=P.length-1){ne({index:P.length-1});return}ne({index:W.current})}},[P.length,$?!1:u,ie,s,ne,V,x,$]),S=De(n=>{Ht(J,n),n&&v()});p.useEffect(()=>{v()},[v]);const C=n=>{ge||(_e(!0),Ue(!0),Pe&&Pe(n))},L=(n,o)=>{ge&&(_e(!1),K&&K(n,o))},E=(n,o,a,l)=>{if($){if(u.length===o.length&&u.every((f,w)=>f===o[w]))return}else if(u===o)return;U&&U(n,o,a,l),ue(o)},fe=p.useRef(!1),Y=(n,o,a="selectOption",l="options")=>{let f=a,w=o;if($){w=Array.isArray(u)?u.slice():[];const N=at(w,Oe=>Se(o,Oe));N===-1?w.push(o):l!=="freeSolo"&&(w.splice(N,1),f="removeOption")}Ie(n,w),E(n,w,f,{option:o}),!A&&(!n||!n.ctrlKey&&!n.metaKey)&&L(n,f),(y===!0||y==="touch"&&fe.current||y==="mouse"&&!fe.current)&&M.current.blur()};function Ae(n,o){if(n===-1)return-1;let a=n;for(;;){if(o==="next"&&a===u.length||o==="previous"&&a===-1)return-1;const l=$e.querySelector(`[data-tag-index="${a}"]`);if(!l||!l.hasAttribute("tabindex")||l.disabled||l.getAttribute("aria-disabled")==="true")a+=o==="next"?1:-1;else return a}}const rt=(n,o)=>{if(!$)return;x===""&&L(n,"toggleInput");let a=j;j===-1?x===""&&o==="previous"&&(a=u.length-1):(a+=o==="next"?1:-1,a<0&&(a=0),a===u.length&&(a=-1)),a=Ae(a,o),Ee(a),Le(a)},lt=n=>{ae.current=!0,pe(""),te&&te(n,"","clear"),E(n,$?[]:null,"clear")},pt=n=>o=>{if(n.onKeyDown&&n.onKeyDown(o),!o.defaultMuiPrevented&&(j!==-1&&["ArrowLeft","ArrowRight"].indexOf(o.key)===-1&&(Ee(-1),Le(-1)),o.which!==229))switch(o.key){case"Home":V&&_&&(o.preventDefault(),s({diff:"start",direction:"next",reason:"keyboard",event:o}));break;case"End":V&&_&&(o.preventDefault(),s({diff:"end",direction:"previous",reason:"keyboard",event:o}));break;case"PageUp":o.preventDefault(),s({diff:-Ot,direction:"previous",reason:"keyboard",event:o}),C(o);break;case"PageDown":o.preventDefault(),s({diff:Ot,direction:"next",reason:"keyboard",event:o}),C(o);break;case"ArrowDown":o.preventDefault(),s({diff:1,direction:"next",reason:"keyboard",event:o}),C(o);break;case"ArrowUp":o.preventDefault(),s({diff:-1,direction:"previous",reason:"keyboard",event:o}),C(o);break;case"ArrowLeft":rt(o,"previous");break;case"ArrowRight":rt(o,"next");break;case"Enter":if(W.current!==-1&&V){const a=P[W.current],l=le?le(a):!1;if(o.preventDefault(),l)return;Y(o,a,"selectOption"),c&&M.current.setSelectionRange(M.current.value.length,M.current.value.length)}else F&&x!==""&&Ke===!1&&($&&o.preventDefault(),Y(o,x,"createOption","freeSolo"));break;case"Escape":V?(o.preventDefault(),o.stopPropagation(),L(o,"escape")):O&&(x!==""||$&&u.length>0)&&(o.preventDefault(),o.stopPropagation(),lt(o));break;case"Backspace":if($&&!G&&x===""&&u.length>0){const a=j===-1?u.length-1:j,l=u.slice();l.splice(a,1),E(o,l,"removeOption",{option:u[a]})}break;case"Delete":if($&&!G&&x===""&&u.length>0&&j!==-1){const a=j,l=u.slice();l.splice(a,1),E(o,l,"removeOption",{option:u[a]})}break}},vt=n=>{Te(!0),we&&!ae.current&&C(n)},Ge=n=>{if(t(J)){M.current.focus();return}Te(!1),Me.current=!0,ae.current=!1,b&&W.current!==-1&&V?Y(n,P[W.current],"blur"):b&&F&&x!==""?Y(n,x,"blur","freeSolo"):h&&Ie(n,u),L(n,"blur")},q=n=>{const o=n.target.value;x!==o&&(pe(o),Ue(!1),te&&te(n,o,"input")),o===""?!k&&!$&&E(n,null,"clear"):C(n)},D=n=>{const o=Number(n.currentTarget.getAttribute("data-option-index"));W.current!==o&&ne({event:n,index:o,reason:"mouse"})},he=n=>{ne({event:n,index:Number(n.currentTarget.getAttribute("data-option-index")),reason:"touch"}),fe.current=!0},St=n=>{const o=Number(n.currentTarget.getAttribute("data-option-index"));Y(n,P[o],"selectOption"),fe.current=!1},dt=n=>o=>{const a=u.slice();a.splice(n,1),E(o,a,"removeOption",{option:u[n]})},ft=n=>{ge?L(n,"toggleInput"):C(n)},bt=n=>{n.currentTarget.contains(n.target)&&n.target.getAttribute("id")!==X&&n.preventDefault()},st=n=>{n.currentTarget.contains(n.target)&&(M.current.focus(),ke&&Me.current&&M.current.selectionEnd-M.current.selectionStart===0&&M.current.select(),Me.current=!1)},et=n=>{!B&&(x===""||!ge)&&ft(n)};let ze=F&&x.length>0;ze=ze||($?u.length>0:u!==null);let Xe=P;return ce&&(Xe=P.reduce((n,o,a)=>{const l=ce(o);return n.length>0&&n[n.length-1].group===l?n[n.length-1].options.push(o):n.push({key:a,index:a,group:l,options:[o]}),n},[])),B&&de&&Ge(),{getRootProps:(n={})=>g({"aria-owns":Ce?`${X}-listbox`:null},n,{onKeyDown:pt(n),onMouseDown:bt,onClick:st}),getInputLabelProps:()=>({id:`${X}-label`,htmlFor:X}),getInputProps:()=>({id:X,value:x,onBlur:Ge,onFocus:vt,onChange:q,onMouseDown:et,"aria-activedescendant":V?"":null,"aria-autocomplete":c?"both":"list","aria-controls":Ce?`${X}-listbox`:void 0,"aria-expanded":Ce,autoComplete:"off",ref:M,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:B}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:lt}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:ft}),getTagProps:({index:n})=>g({key:n,"data-tag-index":n,tabIndex:-1},!G&&{onDelete:dt(n)}),getListboxProps:()=>({role:"listbox",id:`${X}-listbox`,"aria-labelledby":`${X}-label`,ref:S,onMouseDown:n=>{n.preventDefault()}}),getOptionProps:({index:n,option:o})=>{var a;const l=($?u:[u]).some(w=>w!=null&&Se(o,w)),f=le?le(o):!1;return{key:(a=me==null?void 0:me(o))!=null?a:H(o),tabIndex:-1,role:"option",id:`${X}-option-${n}`,onMouseMove:D,onClick:St,onTouchStart:he,"data-option-index":n,"aria-disabled":f,"aria-selected":l}},id:X,inputValue:x,value:u,dirty:ze,expanded:V&&$e,popupOpen:V,focused:de||j!==-1,anchorEl:$e,setAnchorEl:Je,focusedTag:j,groupedOptions:Xe}}function oo(e){return tt("MuiListSubheader",e)}ot("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const no=["className","color","component","disableGutters","disableSticky","inset"],ro=e=>{const{classes:t,color:r,disableGutters:c,inset:d,disableSticky:b}=e,y={root:["root",r!=="default"&&`color${Ze(r)}`,!c&&"gutters",d&&"inset",!b&&"sticky"]};return nt(y,oo,t)},lo=z("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="default"&&t[`color${Ze(r.color)}`],!r.disableGutters&&t.gutters,r.inset&&t.inset,!r.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>g({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},t.color==="primary"&&{color:(e.vars||e).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),Wt=p.forwardRef(function(t,r){const c=ut({props:t,name:"MuiListSubheader"}),{className:d,color:b="default",component:y="li",disableGutters:h=!1,disableSticky:O=!1,inset:R=!1}=c,T=He(c,no),k=g({},c,{color:b,component:y,disableGutters:h,disableSticky:O,inset:R}),A=ro(k);return I.jsx(lo,g({as:y,className:re(A.root,d),ref:r,ownerState:k},T))});Wt.muiSkipListHighlight=!0;function so(e){return tt("MuiAutocomplete",e)}const m=ot("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Pt,$t;const ao=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],io=["ref"],co=Kt(),uo=e=>{const{classes:t,disablePortal:r,expanded:c,focused:d,fullWidth:b,hasClearIcon:y,hasPopupIcon:h,inputFocused:O,popupOpen:R,size:T}=e,k={root:["root",c&&"expanded",d&&"focused",b&&"fullWidth",y&&"hasClearIcon",h&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",O&&"inputFocused"],tag:["tag",`tagSize${Ze(T)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",R&&"popupIndicatorOpen"],popper:["popper",r&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return nt(k,so,t)},po=z("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{fullWidth:c,hasClearIcon:d,hasPopupIcon:b,inputFocused:y,size:h}=r;return[{[`& .${m.tag}`]:t.tag},{[`& .${m.tag}`]:t[`tagSize${Ze(h)}`]},{[`& .${m.inputRoot}`]:t.inputRoot},{[`& .${m.input}`]:t.input},{[`& .${m.input}`]:y&&t.inputFocused},t.root,c&&t.fullWidth,b&&t.hasPopupIcon,d&&t.hasClearIcon]}})({[`&.${m.focused} .${m.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${m.clearIndicator}`]:{visibility:"visible"}},[`& .${m.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${m.inputRoot}`]:{flexWrap:"wrap",[`.${m.hasPopupIcon}&, .${m.hasClearIcon}&`]:{paddingRight:30},[`.${m.hasPopupIcon}.${m.hasClearIcon}&`]:{paddingRight:56},[`& .${m.input}`]:{width:0,minWidth:30}},[`& .${ht.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ht.root}.${Fe.sizeSmall}`]:{[`& .${ht.input}`]:{padding:"2px 4px 3px 0"}},[`& .${It.root}`]:{padding:9,[`.${m.hasPopupIcon}&, .${m.hasClearIcon}&`]:{paddingRight:39},[`.${m.hasPopupIcon}.${m.hasClearIcon}&`]:{paddingRight:65},[`& .${m.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${m.endAdornment}`]:{right:9}},[`& .${It.root}.${Fe.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${m.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Ye.root}`]:{paddingTop:19,paddingLeft:8,[`.${m.hasPopupIcon}&, .${m.hasClearIcon}&`]:{paddingRight:39},[`.${m.hasPopupIcon}.${m.hasClearIcon}&`]:{paddingRight:65},[`& .${Ye.input}`]:{padding:"7px 4px"},[`& .${m.endAdornment}`]:{right:9}},[`& .${Ye.root}.${Fe.sizeSmall}`]:{paddingBottom:1,[`& .${Ye.input}`]:{padding:"2.5px 4px"}},[`& .${Fe.hiddenLabel}`]:{paddingTop:8},[`& .${Ye.root}.${Fe.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${m.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Ye.root}.${Fe.hiddenLabel}.${Fe.sizeSmall}`]:{[`& .${m.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${m.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${m.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${m.input}`]:{opacity:1}}}]}),fo=z("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),bo=z(Rt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),go=z(Rt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},t)=>g({},t.popupIndicator,e.popupOpen&&t.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),ho=z(At,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${m.option}`]:t.option},t.popper,r.disablePortal&&t.popperDisablePortal]}})(({theme:e})=>({zIndex:(e.vars||e).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),mo=z(Bt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})(({theme:e})=>g({},e.typography.body1,{overflow:"auto"})),xo=z("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),vo=z("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),So=z("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${m.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${m.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:mt(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${m.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:mt(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${m.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:mt(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),yo=z(Wt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8})),Io=z("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${m.option}`]:{paddingLeft:24}}),Yo=p.forwardRef(function(t,r){var c,d,b,y;const h=co({props:t,name:"MuiAutocomplete"}),{autoComplete:O=!1,autoHighlight:R=!1,autoSelect:T=!1,blurOnSelect:k=!1,ChipProps:A,className:B,clearIcon:be=Pt||(Pt=I.jsx(jt,{fontSize:"small"})),clearOnBlur:Q=!h.freeSolo,clearOnEscape:Z=!1,clearText:ie="Clear",closeText:F="Close",componentsProps:le={},defaultValue:me=h.multiple?[]:null,disableClearable:xe=!1,disableCloseOnSelect:ce=!1,disabled:_=!1,disabledItemsFocusable:Be=!1,disableListWrap:ve=!1,disablePortal:ee=!1,filterSelectedOptions:Se=!1,forcePopupIcon:$="auto",freeSolo:U=!1,fullWidth:K=!1,getLimitTagsText:ye=l=>`+${l}`,getOptionLabel:te,groupBy:Pe,handleHomeEndKeys:je=!h.freeSolo,includeInputInList:we=!1,limitTags:se=-1,ListboxComponent:G="ul",ListboxProps:ke,loading:Ve=!1,loadingText:X="Loading…",multiple:H=!1,noOptionsText:ae="No options",openOnFocus:Me=!1,openText:M="Open",PaperComponent:J=Bt,PopperComponent:$e=At,popupIcon:Je=$t||($t=I.jsx(Vt,{})),readOnly:j=!1,renderGroup:Ee,renderInput:Ne,renderOption:W,renderTags:u,selectOnFocus:ue=!h.freeSolo,size:x="medium",slotProps:pe={}}=h,de=He(h,ao),{getRootProps:Te,getInputProps:Ie,getInputLabelProps:ge,getPopupIndicatorProps:_e,getClearProps:Qe,getTagProps:Ue,getListboxProps:Ke,getOptionProps:V,value:P,dirty:oe,expanded:Ce,id:Le,popupOpen:Re,focused:ne,focusedTag:s,anchorEl:i,setAnchorEl:v,inputValue:S,groupedOptions:C}=to(g({},h,{componentName:"Autocomplete"})),L=!xe&&!_&&oe&&!j,E=(!U||$===!0)&&$!==!1,{onMouseDown:fe}=Ie(),{ref:Y}=ke??{},Ae=Ke(),{ref:rt}=Ae,lt=He(Ae,io),pt=_t(rt,Y),Ge=te||(l=>{var f;return(f=l.label)!=null?f:l}),q=g({},h,{disablePortal:ee,expanded:Ce,focused:ne,fullWidth:K,getOptionLabel:Ge,hasClearIcon:L,hasPopupIcon:E,inputFocused:s===-1,popupOpen:Re,size:x}),D=uo(q);let he;if(H&&P.length>0){const l=f=>g({className:D.tag,disabled:_},Ue(f));u?he=u(P,l,q):he=P.map((f,w)=>I.jsx(Ut,g({label:Ge(f),size:x},l({index:w}),A)))}if(se>-1&&Array.isArray(he)){const l=he.length-se;!ne&&l>0&&(he=he.splice(0,se),he.push(I.jsx("span",{className:D.tag,children:ye(l)},he.length)))}const dt=Ee||(l=>I.jsxs("li",{children:[I.jsx(yo,{className:D.groupLabel,ownerState:q,component:"div",children:l.group}),I.jsx(Io,{className:D.groupUl,ownerState:q,children:l.children})]},l.key)),bt=W||((l,f)=>p.createElement("li",g({},l,{key:l.key}),Ge(f))),st=(l,f)=>{const w=V({option:l,index:f});return bt(g({},w,{className:D.option}),l,{selected:w["aria-selected"],index:f,inputValue:S},q)},et=(c=pe.clearIndicator)!=null?c:le.clearIndicator,ze=(d=pe.paper)!=null?d:le.paper,Xe=(b=pe.popper)!=null?b:le.popper,n=(y=pe.popupIndicator)!=null?y:le.popupIndicator,o=l=>I.jsx(ho,g({as:$e,disablePortal:ee,style:{width:i?i.clientWidth:null},ownerState:q,role:"presentation",anchorEl:i,open:Re},Xe,{className:re(D.popper,Xe==null?void 0:Xe.className),children:I.jsx(mo,g({ownerState:q,as:J},ze,{className:re(D.paper,ze==null?void 0:ze.className),children:l}))}));let a=null;return C.length>0?a=o(I.jsx(So,g({as:G,className:D.listbox,ownerState:q},lt,ke,{ref:pt,children:C.map((l,f)=>Pe?dt({key:l.key,group:l.group,children:l.options.map((w,N)=>st(w,l.index+N))}):st(l,f))}))):Ve&&C.length===0?a=o(I.jsx(xo,{className:D.loading,ownerState:q,children:X})):C.length===0&&!U&&!Ve&&(a=o(I.jsx(vo,{className:D.noOptions,ownerState:q,role:"presentation",onMouseDown:l=>{l.preventDefault()},children:ae}))),I.jsxs(p.Fragment,{children:[I.jsx(po,g({ref:r,className:re(D.root,B),ownerState:q},Te(de),{children:Ne({id:Le,disabled:_,fullWidth:!0,size:x==="small"?"small":void 0,InputLabelProps:ge(),InputProps:g({ref:v,className:D.inputRoot,startAdornment:he,onClick:l=>{l.target===l.currentTarget&&fe(l)}},(L||E)&&{endAdornment:I.jsxs(fo,{className:D.endAdornment,ownerState:q,children:[L?I.jsx(bo,g({},Qe(),{"aria-label":ie,title:ie,ownerState:q},et,{className:re(D.clearIndicator,et==null?void 0:et.className),children:be})):null,E?I.jsx(go,g({},_e(),{disabled:_,"aria-label":Re?F:M,title:Re?F:M,ownerState:q},n,{className:re(D.popupIndicator,n==null?void 0:n.className),children:Je})):null]})}),inputProps:g({className:D.input,disabled:_,readOnly:j},Ie())})})),i?a:null]})});function Co(e){return tt("MuiTab",e)}const We=ot("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),Oo=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Po=e=>{const{classes:t,textColor:r,fullWidth:c,wrapped:d,icon:b,label:y,selected:h,disabled:O}=e,R={root:["root",b&&y&&"labelIcon",`textColor${Ze(r)}`,c&&"fullWidth",d&&"wrapped",h&&"selected",O&&"disabled"],iconWrapper:["iconWrapper"]};return nt(R,Co,t)},$o=z(kt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Ze(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>g({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${We.iconWrapper}`]:g({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${We.selected}`]:{opacity:1},[`&.${We.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${We.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${We.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${We.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${We.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),qo=p.forwardRef(function(t,r){const c=ut({props:t,name:"MuiTab"}),{className:d,disabled:b=!1,disableFocusRipple:y=!1,fullWidth:h,icon:O,iconPosition:R="top",indicator:T,label:k,onChange:A,onClick:B,onFocus:be,selected:Q,selectionFollowsFocus:Z,textColor:ie="inherit",value:F,wrapped:le=!1}=c,me=He(c,Oo),xe=g({},c,{disabled:b,disableFocusRipple:y,selected:Q,icon:!!O,iconPosition:R,label:!!k,fullWidth:h,textColor:ie,wrapped:le}),ce=Po(xe),_=O&&k&&p.isValidElement(O)?p.cloneElement(O,{className:re(ce.iconWrapper,O.props.className)}):O,Be=ee=>{!Q&&A&&A(ee,F),B&&B(ee)},ve=ee=>{Z&&!Q&&A&&A(ee,F),be&&be(ee)};return I.jsxs($o,g({focusRipple:!y,className:re(ce.root,d),ref:r,role:"tab","aria-selected":Q,disabled:b,onClick:Be,onFocus:ve,ownerState:xe,tabIndex:Q?0:-1},me,{children:[R==="top"||R==="start"?I.jsxs(p.Fragment,{children:[_,k]}):I.jsxs(p.Fragment,{children:[k,_]}),T]}))}),wo=Mt(I.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),To=Mt(I.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Lo(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Ro(e,t,r,c={},d=()=>{}){const{ease:b=Lo,duration:y=300}=c;let h=null;const O=t[e];let R=!1;const T=()=>{R=!0},k=A=>{if(R){d(new Error("Animation cancelled"));return}h===null&&(h=A);const B=Math.min(1,(A-h)/y);if(t[e]=b(B)*(r-O)+O,B>=1){requestAnimationFrame(()=>{d(null)});return}requestAnimationFrame(k)};return O===r?(d(new Error("Element already at target position")),T):(requestAnimationFrame(k),T)}const Ao=["onChange"],Bo={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ko(e){const{onChange:t}=e,r=He(e,Ao),c=p.useRef(),d=p.useRef(null),b=()=>{c.current=d.current.offsetHeight-d.current.clientHeight};return Gt(()=>{const y=Et(()=>{const O=c.current;b(),O!==c.current&&t(c.current)}),h=Nt(d.current);return h.addEventListener("resize",y),()=>{y.clear(),h.removeEventListener("resize",y)}},[t]),p.useEffect(()=>{b(),t(c.current)},[t]),I.jsx("div",g({style:Bo,ref:d},r))}function Mo(e){return tt("MuiTabScrollButton",e)}const Eo=ot("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),No=["className","slots","slotProps","direction","orientation","disabled"],zo=e=>{const{classes:t,orientation:r,disabled:c}=e;return nt({root:["root",r,c&&"disabled"]},Mo,t)},Fo=z(kt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>g({width:40,flexShrink:0,opacity:.8,[`&.${Eo.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Wo=p.forwardRef(function(t,r){var c,d;const b=ut({props:t,name:"MuiTabScrollButton"}),{className:y,slots:h={},slotProps:O={},direction:R}=b,T=He(b,No),k=zt(),A=g({isRtl:k},b),B=zo(A),be=(c=h.StartScrollButtonIcon)!=null?c:wo,Q=(d=h.EndScrollButtonIcon)!=null?d:To,Z=ct({elementType:be,externalSlotProps:O.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:A}),ie=ct({elementType:Q,externalSlotProps:O.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:A});return I.jsx(Fo,g({component:"div",className:re(B.root,y),ref:r,role:null,ownerState:A,tabIndex:null},T,{children:R==="left"?I.jsx(be,g({},Z)):I.jsx(Q,g({},ie))}))});function Do(e){return tt("MuiTabs",e)}const xt=ot("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Ho=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],wt=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Tt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,it=(e,t,r)=>{let c=!1,d=r(e,t);for(;d;){if(d===e.firstChild){if(c)return;c=!0}const b=d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||b)d=r(e,d);else{d.focus();return}}},jo=e=>{const{vertical:t,fixed:r,hideScrollbar:c,scrollableX:d,scrollableY:b,centered:y,scrollButtonsHideMobile:h,classes:O}=e;return nt({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",d&&"scrollableX",b&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",y&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[d&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},Do,O)},Vo=z("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${xt.scrollButtons}`]:t.scrollButtons},{[`& .${xt.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>g({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${xt.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),_o=z("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>g({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Uo=z("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>g({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Ko=z("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>g({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Go=z(ko)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Lt={},Zo=p.forwardRef(function(t,r){const c=ut({props:t,name:"MuiTabs"}),d=Xt(),b=zt(),{"aria-label":y,"aria-labelledby":h,action:O,centered:R=!1,children:T,className:k,component:A="div",allowScrollButtonsMobile:B=!1,indicatorColor:be="primary",onChange:Q,orientation:Z="horizontal",ScrollButtonComponent:ie=Wo,scrollButtons:F="auto",selectionFollowsFocus:le,slots:me={},slotProps:xe={},TabIndicatorProps:ce={},TabScrollButtonProps:_={},textColor:Be="primary",value:ve,variant:ee="standard",visibleScrollbar:Se=!1}=c,$=He(c,Ho),U=ee==="scrollable",K=Z==="vertical",ye=K?"scrollTop":"scrollLeft",te=K?"top":"left",Pe=K?"bottom":"right",je=K?"clientHeight":"clientWidth",we=K?"height":"width",se=g({},c,{component:A,allowScrollButtonsMobile:B,indicatorColor:be,orientation:Z,vertical:K,scrollButtons:F,textColor:Be,variant:ee,visibleScrollbar:Se,fixed:!U,hideScrollbar:U&&!Se,scrollableX:U&&!K,scrollableY:U&&K,centered:R&&!U,scrollButtonsHideMobile:!B}),G=jo(se),ke=ct({elementType:me.StartScrollButtonIcon,externalSlotProps:xe.startScrollButtonIcon,ownerState:se}),Ve=ct({elementType:me.EndScrollButtonIcon,externalSlotProps:xe.endScrollButtonIcon,ownerState:se}),[X,H]=p.useState(!1),[ae,Me]=p.useState(Lt),[M,J]=p.useState(!1),[$e,Je]=p.useState(!1),[j,Ee]=p.useState(!1),[Ne,W]=p.useState({overflow:"hidden",scrollbarWidth:0}),u=new Map,ue=p.useRef(null),x=p.useRef(null),pe=()=>{const s=ue.current;let i;if(s){const S=s.getBoundingClientRect();i={clientWidth:s.clientWidth,scrollLeft:s.scrollLeft,scrollTop:s.scrollTop,scrollLeftNormalized:qt(s,b?"rtl":"ltr"),scrollWidth:s.scrollWidth,top:S.top,bottom:S.bottom,left:S.left,right:S.right}}let v;if(s&&ve!==!1){const S=x.current.children;if(S.length>0){const C=S[u.get(ve)];v=C?C.getBoundingClientRect():null}}return{tabsMeta:i,tabMeta:v}},de=De(()=>{const{tabsMeta:s,tabMeta:i}=pe();let v=0,S;if(K)S="top",i&&s&&(v=i.top-s.top+s.scrollTop);else if(S=b?"right":"left",i&&s){const L=b?s.scrollLeftNormalized+s.clientWidth-s.scrollWidth:s.scrollLeft;v=(b?-1:1)*(i[S]-s[S]+L)}const C={[S]:v,[we]:i?i[we]:0};if(isNaN(ae[S])||isNaN(ae[we]))Me(C);else{const L=Math.abs(ae[S]-C[S]),E=Math.abs(ae[we]-C[we]);(L>=1||E>=1)&&Me(C)}}),Te=(s,{animation:i=!0}={})=>{i?Ro(ye,ue.current,s,{duration:d.transitions.duration.standard}):ue.current[ye]=s},Ie=s=>{let i=ue.current[ye];K?i+=s:(i+=s*(b?-1:1),i*=b&&Ft()==="reverse"?-1:1),Te(i)},ge=()=>{const s=ue.current[je];let i=0;const v=Array.from(x.current.children);for(let S=0;S<v.length;S+=1){const C=v[S];if(i+C[je]>s){S===0&&(i=s);break}i+=C[je]}return i},_e=()=>{Ie(-1*ge())},Qe=()=>{Ie(ge())},Ue=p.useCallback(s=>{W({overflow:null,scrollbarWidth:s})},[]),Ke=()=>{const s={};s.scrollbarSizeListener=U?I.jsx(Go,{onChange:Ue,className:re(G.scrollableX,G.hideScrollbar)}):null;const v=U&&(F==="auto"&&(M||$e)||F===!0);return s.scrollButtonStart=v?I.jsx(ie,g({slots:{StartScrollButtonIcon:me.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ke},orientation:Z,direction:b?"right":"left",onClick:_e,disabled:!M},_,{className:re(G.scrollButtons,_.className)})):null,s.scrollButtonEnd=v?I.jsx(ie,g({slots:{EndScrollButtonIcon:me.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ve},orientation:Z,direction:b?"left":"right",onClick:Qe,disabled:!$e},_,{className:re(G.scrollButtons,_.className)})):null,s},V=De(s=>{const{tabsMeta:i,tabMeta:v}=pe();if(!(!v||!i)){if(v[te]<i[te]){const S=i[ye]+(v[te]-i[te]);Te(S,{animation:s})}else if(v[Pe]>i[Pe]){const S=i[ye]+(v[Pe]-i[Pe]);Te(S,{animation:s})}}}),P=De(()=>{U&&F!==!1&&Ee(!j)});p.useEffect(()=>{const s=Et(()=>{ue.current&&de()});let i;const v=L=>{L.forEach(E=>{E.removedNodes.forEach(fe=>{var Y;(Y=i)==null||Y.unobserve(fe)}),E.addedNodes.forEach(fe=>{var Y;(Y=i)==null||Y.observe(fe)})}),s(),P()},S=Nt(ue.current);S.addEventListener("resize",s);let C;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(s),Array.from(x.current.children).forEach(L=>{i.observe(L)})),typeof MutationObserver<"u"&&(C=new MutationObserver(v),C.observe(x.current,{childList:!0})),()=>{var L,E;s.clear(),S.removeEventListener("resize",s),(L=C)==null||L.disconnect(),(E=i)==null||E.disconnect()}},[de,P]),p.useEffect(()=>{const s=Array.from(x.current.children),i=s.length;if(typeof IntersectionObserver<"u"&&i>0&&U&&F!==!1){const v=s[0],S=s[i-1],C={root:ue.current,threshold:.99},L=Ae=>{J(!Ae[0].isIntersecting)},E=new IntersectionObserver(L,C);E.observe(v);const fe=Ae=>{Je(!Ae[0].isIntersecting)},Y=new IntersectionObserver(fe,C);return Y.observe(S),()=>{E.disconnect(),Y.disconnect()}}},[U,F,j,T==null?void 0:T.length]),p.useEffect(()=>{H(!0)},[]),p.useEffect(()=>{de()}),p.useEffect(()=>{V(Lt!==ae)},[V,ae]),p.useImperativeHandle(O,()=>({updateIndicator:de,updateScrollButtons:P}),[de,P]);const oe=I.jsx(Ko,g({},ce,{className:re(G.indicator,ce.className),ownerState:se,style:g({},ae,ce.style)}));let Ce=0;const Le=p.Children.map(T,s=>{if(!p.isValidElement(s))return null;const i=s.props.value===void 0?Ce:s.props.value;u.set(i,Ce);const v=i===ve;return Ce+=1,p.cloneElement(s,g({fullWidth:ee==="fullWidth",indicator:v&&!X&&oe,selected:v,selectionFollowsFocus:le,onChange:Q,textColor:Be,value:i},Ce===1&&ve===!1&&!s.props.tabIndex?{tabIndex:0}:{}))}),Re=s=>{const i=x.current,v=Yt(i).activeElement;if(v.getAttribute("role")!=="tab")return;let C=Z==="horizontal"?"ArrowLeft":"ArrowUp",L=Z==="horizontal"?"ArrowRight":"ArrowDown";switch(Z==="horizontal"&&b&&(C="ArrowRight",L="ArrowLeft"),s.key){case C:s.preventDefault(),it(i,v,Tt);break;case L:s.preventDefault(),it(i,v,wt);break;case"Home":s.preventDefault(),it(i,null,wt);break;case"End":s.preventDefault(),it(i,null,Tt);break}},ne=Ke();return I.jsxs(Vo,g({className:re(G.root,k),ownerState:se,ref:r,as:A},$,{children:[ne.scrollButtonStart,ne.scrollbarSizeListener,I.jsxs(_o,{className:G.scroller,ownerState:se,style:{overflow:Ne.overflow,[K?`margin${b?"Left":"Right"}`:"marginBottom"]:Se?void 0:-Ne.scrollbarWidth},ref:ue,children:[I.jsx(Uo,{"aria-label":y,"aria-labelledby":h,"aria-orientation":Z==="vertical"?"vertical":null,className:G.flexContainer,ownerState:se,onKeyDown:Re,ref:x,role:"tablist",children:Le}),X&&oe]}),ne.scrollButtonEnd]}))}),Jo=(e,t)=>t.reduce((r,c)=>(c in e&&(r[c]=e[c]),r),{}),Qo=(e,t)=>new Map(e.map(r=>[r[t],r]));export{Yo as A,Zo as T,qo as a,xt as b,Jo as p,Qo as t,Zt as u};
