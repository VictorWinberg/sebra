import{at as Te,au as Ue,K as me,ag as Ut,as as Z,aY as gt,r as he,aq as Ne,ay as Nt,b9 as bt,j as K,av as ke,aI as ce,ax as $e,W as je,aP as $t,aJ as vt,by as jt,T as nt,a4 as qt,a5 as zt,a6 as Ht,R as C}from"./index-8MMrl1Jf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7a4a3179-e3b4-42c3-9f70-aa276350f5a3",e._sentryDebugIdIdentifier="sentry-dbid-7a4a3179-e3b4-42c3-9f70-aa276350f5a3")}catch{}})();function Wt(e){return Te("PrivateSwitchBase",e)}Ue("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Kt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Gt=e=>{const{classes:r,checked:t,disabled:a,edge:l}=e,n={root:["root",t&&"checked",a&&"disabled",l&&`edge${ce(l)}`],input:["input"]};return $e(n,Wt,r)},Jt=me(Ut)(({ownerState:e})=>Z({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Yt=me("input",{shouldForwardProp:gt})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Qt=he.forwardRef(function(r,t){const{autoFocus:a,checked:l,checkedIcon:n,className:f,defaultChecked:h,disabled:_,disableFocusRipple:F=!1,edge:v=!1,icon:b,id:P,inputProps:M,inputRef:w,name:re,onBlur:B,onChange:O,onFocus:m,readOnly:q,required:G=!1,tabIndex:A,type:N,value:ee}=r,T=Ne(r,Kt),[z,H]=Nt({controlled:l,default:!!h,name:"SwitchBase",state:"checked"}),J=bt(),p=$=>{m&&m($),J&&J.onFocus&&J.onFocus($)},x=$=>{B&&B($),J&&J.onBlur&&J.onBlur($)},E=$=>{if($.nativeEvent.defaultPrevented)return;const le=$.target.checked;H(le),O&&O($,le)};let S=_;J&&typeof S>"u"&&(S=J.disabled);const Y=N==="checkbox"||N==="radio",U=Z({},r,{checked:z,disabled:S,disableFocusRipple:F,edge:v}),ne=Gt(U);return K.jsxs(Jt,Z({component:"span",className:ke(ne.root,f),centerRipple:!0,focusRipple:!F,disabled:S,tabIndex:null,role:void 0,onFocus:p,onBlur:x,ownerState:U,ref:t},T,{children:[K.jsx(Yt,Z({autoFocus:a,checked:l,defaultChecked:h,className:ne.input,disabled:S,id:Y?P:void 0,name:re,onChange:E,readOnly:q,ref:w,required:G,ownerState:U,tabIndex:A,type:N},N==="checkbox"&&ee===void 0?{}:{value:ee},M)),z?n:b]}))}),Xt=je(K.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Zt=je(K.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),er=je(K.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function tr(e){return Te("MuiCheckbox",e)}const Le=Ue("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),rr=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],sr=e=>{const{classes:r,indeterminate:t,color:a,size:l}=e,n={root:["root",t&&"indeterminate",`color${ce(a)}`,`size${ce(l)}`]},f=$e(n,tr,r);return Z({},r,f)},ir=me(Qt,{shouldForwardProp:e=>gt(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,r[`size${ce(t.size)}`],t.color!=="default"&&r[`color${ce(t.color)}`]]}})(({theme:e,ownerState:r})=>Z({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${r.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$t(r.color==="default"?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${Le.checked}, &.${Le.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${Le.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ar=K.jsx(Zt,{}),nr=K.jsx(Xt,{}),lr=K.jsx(er,{}),Tr=he.forwardRef(function(r,t){var a,l;const n=vt({props:r,name:"MuiCheckbox"}),{checkedIcon:f=ar,color:h="primary",icon:_=nr,indeterminate:F=!1,indeterminateIcon:v=lr,inputProps:b,size:P="medium",className:M}=n,w=Ne(n,rr),re=F?v:_,B=F?v:f,O=Z({},n,{color:h,indeterminate:F,size:P}),m=sr(O);return K.jsx(ir,Z({type:"checkbox",inputProps:Z({"data-indeterminate":F},b),icon:he.cloneElement(re,{fontSize:(a=re.props.fontSize)!=null?a:P}),checkedIcon:he.cloneElement(B,{fontSize:(l=B.props.fontSize)!=null?l:P}),ownerState:O,ref:t,className:ke(m.root,M)},w,{classes:m}))});function or(e){return Te("MuiFormControlLabel",e)}const be=Ue("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ur=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],cr=e=>{const{classes:r,disabled:t,labelPlacement:a,error:l,required:n}=e,f={root:["root",t&&"disabled",`labelPlacement${ce(a)}`,l&&"error",n&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",l&&"error"]};return $e(f,or,r)},dr=me("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[{[`& .${be.label}`]:r.label},r.root,r[`labelPlacement${ce(t.labelPlacement)}`]]}})(({theme:e,ownerState:r})=>Z({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${be.disabled}`]:{cursor:"default"}},r.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},r.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},r.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${be.label}`]:{[`&.${be.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),fr=me("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${be.error}`]:{color:(e.vars||e).palette.error.main}})),Ur=he.forwardRef(function(r,t){var a,l;const n=vt({props:r,name:"MuiFormControlLabel"}),{className:f,componentsProps:h={},control:_,disabled:F,disableTypography:v,label:b,labelPlacement:P="end",required:M,slotProps:w={}}=n,re=Ne(n,ur),B=bt(),O=(a=F??_.props.disabled)!=null?a:B==null?void 0:B.disabled,m=M??_.props.required,q={disabled:O,required:m};["checked","name","onChange","value","inputRef"].forEach(z=>{typeof _.props[z]>"u"&&typeof n[z]<"u"&&(q[z]=n[z])});const G=jt({props:n,muiFormControl:B,states:["error"]}),A=Z({},n,{disabled:O,labelPlacement:P,required:m,error:G.error}),N=cr(A),ee=(l=w.typography)!=null?l:h.typography;let T=b;return T!=null&&T.type!==nt&&!v&&(T=K.jsx(nt,Z({component:"span"},ee,{className:ke(N.label,ee==null?void 0:ee.className),children:T}))),K.jsxs(dr,Z({className:ke(N.root,f),ownerState:A,ref:t},re,{children:[he.cloneElement(_,q),m?K.jsxs(qt,{display:"block",children:[T,K.jsxs(fr,{ownerState:A,"aria-hidden":!0,className:N.asterisk,children:[" ","*"]})]}):T]}))});var qe={},yr=Ht;Object.defineProperty(qe,"__esModule",{value:!0});var hr=qe.default=void 0,gr=yr(zt()),br=K;hr=qe.default=(0,gr.default)((0,br.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");var pe=e=>e.type==="checkbox",ye=e=>e instanceof Date,j=e=>e==null;const mt=e=>typeof e=="object";var L=e=>!j(e)&&!Array.isArray(e)&&mt(e)&&!ye(e),pt=e=>L(e)&&e.target?pe(e.target)?e.target.checked:e.target.value:e,vr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_t=(e,r)=>e.has(vr(r)),mr=e=>{const r=e.constructor&&e.constructor.prototype;return L(r)&&r.hasOwnProperty("isPrototypeOf")},ze=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(ze&&(e instanceof Blob||e instanceof FileList))&&(t||L(e)))if(r=t?[]:{},!t&&!mr(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=W(e[a]));else return e;return r}var _e=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,c=(e,r,t)=>{if(!r||!L(e))return t;const a=_e(r.split(/[,[\].]+?/)).reduce((l,n)=>j(l)?l:l[n],e);return D(a)||a===e?D(e[r])?t:e[r]:a},se=e=>typeof e=="boolean",He=e=>/^\w*$/.test(e),xt=e=>_e(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,r,t)=>{let a=-1;const l=He(r)?[r]:xt(r),n=l.length,f=n-1;for(;++a<n;){const h=l[a];let _=t;if(a!==f){const F=e[h];_=L(F)||Array.isArray(F)?F:isNaN(+l[a+1])?{}:[]}if(h==="__proto__")return;e[h]=_,e=e[h]}return e};const Ce={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ae={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},pr=C.createContext(null),We=()=>C.useContext(pr);var Ft=(e,r,t,a=!0)=>{const l={defaultValues:r._defaultValues};for(const n in e)Object.defineProperty(l,n,{get:()=>{const f=n;return r._proxyFormState[f]!==te.all&&(r._proxyFormState[f]=!a||te.all),t&&(t[f]=!0),e[f]}});return l},X=e=>L(e)&&!Object.keys(e).length,Vt=(e,r,t,a)=>{t(e);const{name:l,...n}=e;return X(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find(f=>r[f]===(!a||te.all))},Fe=e=>Array.isArray(e)?e:[e],kt=(e,r,t)=>!e||!r||e===r||Fe(e).some(a=>a&&(t?a===r:a.startsWith(r)||r.startsWith(a)));function Ke(e){const r=C.useRef(e);r.current=e,C.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function _r(e){const r=We(),{control:t=r.control,disabled:a,name:l,exact:n}=e||{},[f,h]=C.useState(t._formState),_=C.useRef(!0),F=C.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),v=C.useRef(l);return v.current=l,Ke({disabled:a,next:b=>_.current&&kt(v.current,b.name,n)&&Vt(b,F.current,t._updateFormState)&&h({...t._formState,...b}),subject:t._subjects.state}),C.useEffect(()=>(_.current=!0,F.current.isValid&&t._updateValid(!0),()=>{_.current=!1}),[t]),Ft(f,t,F.current,!1)}var ie=e=>typeof e=="string",Ct=(e,r,t,a,l)=>ie(e)?(a&&r.watch.add(e),c(t,e,l)):Array.isArray(e)?e.map(n=>(a&&r.watch.add(n),c(t,n))):(a&&(r.watchAll=!0),t);function xr(e){const r=We(),{control:t=r.control,name:a,defaultValue:l,disabled:n,exact:f}=e||{},h=C.useRef(a);h.current=a,Ke({disabled:n,subject:t._subjects.values,next:v=>{kt(h.current,v.name,f)&&F(W(Ct(h.current,t._names,v.values||t._formValues,!1,l)))}});const[_,F]=C.useState(t._getWatch(a,l));return C.useEffect(()=>t._removeUnmounted()),_}function Fr(e){const r=We(),{name:t,disabled:a,control:l=r.control,shouldUnregister:n}=e,f=_t(l._names.array,t),h=xr({control:l,name:t,defaultValue:c(l._formValues,t,c(l._defaultValues,t,e.defaultValue)),exact:!0}),_=_r({control:l,name:t}),F=C.useRef(l.register(t,{...e.rules,value:h,...se(e.disabled)?{disabled:e.disabled}:{}}));return C.useEffect(()=>{const v=l._options.shouldUnregister||n,b=(P,M)=>{const w=c(l._fields,P);w&&(w._f.mount=M)};if(b(t,!0),v){const P=W(c(l._options.defaultValues,t));k(l._defaultValues,t,P),D(c(l._formValues,t))&&k(l._formValues,t,P)}return()=>{(f?v&&!l._state.action:v)?l.unregister(t):b(t,!1)}},[t,l,f,n]),C.useEffect(()=>{c(l._fields,t)&&l._updateDisabledField({disabled:a,fields:l._fields,name:t,value:c(l._fields,t)._f.value})},[a,t,l]),{field:{name:t,value:h,...se(a)||_.disabled?{disabled:_.disabled||a}:{},onChange:C.useCallback(v=>F.current.onChange({target:{value:pt(v),name:t},type:Ce.CHANGE}),[t]),onBlur:C.useCallback(()=>F.current.onBlur({target:{value:c(l._formValues,t),name:t},type:Ce.BLUR}),[t,l]),ref:v=>{const b=c(l._fields,t);b&&v&&(b._f.ref={focus:()=>v.focus(),select:()=>v.select(),setCustomValidity:P=>v.setCustomValidity(P),reportValidity:()=>v.reportValidity()})}},formState:_,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(_.errors,t)},isDirty:{enumerable:!0,get:()=>!!c(_.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!c(_.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!c(_.validatingFields,t)},error:{enumerable:!0,get:()=>c(_.errors,t)}})}}const Nr=e=>e.render(Fr(e));var Vr=(e,r,t,a,l)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},lt=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched}),ot=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ve=(e,r,t,a)=>{for(const l of t||Object.keys(e)){const n=c(e,l);if(n){const{_f:f,...h}=n;if(f){if(f.refs&&f.refs[0]&&r(f.refs[0],l)&&!a)break;if(f.ref&&r(f.ref,f.name)&&!a)break;ve(h,r)}else L(h)&&ve(h,r)}}};var kr=(e,r,t)=>{const a=_e(c(e,t));return k(a,"root",r[t]),k(e,t,a),e},Ge=e=>e.type==="file",oe=e=>typeof e=="function",Ae=e=>{if(!ze)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ve=e=>ie(e),Je=e=>e.type==="radio",we=e=>e instanceof RegExp;const ut={value:!1,isValid:!1},ct={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?ct:{value:e[0].value,isValid:!0}:ct:ut}return ut};const dt={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,dt):dt;function ft(e,r,t="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||se(e)&&!e)return{type:t,message:Ve(e)?e:"",ref:r}}var fe=e=>L(e)&&!we(e)?e:{value:e,message:""},yt=async(e,r,t,a,l)=>{const{ref:n,refs:f,required:h,maxLength:_,minLength:F,min:v,max:b,pattern:P,validate:M,name:w,valueAsNumber:re,mount:B,disabled:O}=e._f,m=c(r,w);if(!B||O)return{};const q=f?f[0]:n,G=p=>{a&&q.reportValidity&&(q.setCustomValidity(se(p)?"":p||""),q.reportValidity())},A={},N=Je(n),ee=pe(n),T=N||ee,z=(re||Ge(n))&&D(n.value)&&D(m)||Ae(n)&&n.value===""||m===""||Array.isArray(m)&&!m.length,H=Vr.bind(null,w,t,A),J=(p,x,E,S=ae.maxLength,Y=ae.minLength)=>{const U=p?x:E;A[w]={type:p?S:Y,message:U,ref:n,...H(p?S:Y,U)}};if(l?!Array.isArray(m)||!m.length:h&&(!T&&(z||j(m))||se(m)&&!m||ee&&!At(f).isValid||N&&!wt(f).isValid)){const{value:p,message:x}=Ve(h)?{value:!!h,message:h}:fe(h);if(p&&(A[w]={type:ae.required,message:x,ref:q,...H(ae.required,x)},!t))return G(x),A}if(!z&&(!j(v)||!j(b))){let p,x;const E=fe(b),S=fe(v);if(!j(m)&&!isNaN(m)){const Y=n.valueAsNumber||m&&+m;j(E.value)||(p=Y>E.value),j(S.value)||(x=Y<S.value)}else{const Y=n.valueAsDate||new Date(m),U=le=>new Date(new Date().toDateString()+" "+le),ne=n.type=="time",$=n.type=="week";ie(E.value)&&m&&(p=ne?U(m)>U(E.value):$?m>E.value:Y>new Date(E.value)),ie(S.value)&&m&&(x=ne?U(m)<U(S.value):$?m<S.value:Y<new Date(S.value))}if((p||x)&&(J(!!p,E.message,S.message,ae.max,ae.min),!t))return G(A[w].message),A}if((_||F)&&!z&&(ie(m)||l&&Array.isArray(m))){const p=fe(_),x=fe(F),E=!j(p.value)&&m.length>+p.value,S=!j(x.value)&&m.length<+x.value;if((E||S)&&(J(E,p.message,x.message),!t))return G(A[w].message),A}if(P&&!z&&ie(m)){const{value:p,message:x}=fe(P);if(we(p)&&!m.match(p)&&(A[w]={type:ae.pattern,message:x,ref:n,...H(ae.pattern,x)},!t))return G(x),A}if(M){if(oe(M)){const p=await M(m,r),x=ft(p,q);if(x&&(A[w]={...x,...H(ae.validate,x.message)},!t))return G(x.message),A}else if(L(M)){let p={};for(const x in M){if(!X(p)&&!t)break;const E=ft(await M[x](m,r),q,x);E&&(p={...E,...H(x,E.message)},G(E.message),t&&(A[w]=p))}if(!X(p)&&(A[w]={ref:q,...p},!t))return A}}return G(!0),A};function Cr(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=D(e)?a++:e[r[a++]];return e}function Ar(e){for(const r in e)if(e.hasOwnProperty(r)&&!D(e[r]))return!1;return!0}function I(e,r){const t=Array.isArray(r)?r:He(r)?[r]:xt(r),a=t.length===1?e:Cr(e,t),l=t.length-1,n=t[l];return a&&delete a[n],l!==0&&(L(a)&&X(a)||Array.isArray(a)&&Ar(a))&&I(e,t.slice(0,-1)),e}var Be=()=>{let e=[];return{get observers(){return e},next:l=>{for(const n of e)n.next&&n.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(n=>n!==l)}}),unsubscribe:()=>{e=[]}}},Se=e=>j(e)||!mt(e);function ue(e,r){if(Se(e)||Se(r))return e===r;if(ye(e)&&ye(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const l of t){const n=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const f=r[l];if(ye(n)&&ye(f)||L(n)&&L(f)||Array.isArray(n)&&Array.isArray(f)?!ue(n,f):n!==f)return!1}}return!0}var St=e=>e.type==="select-multiple",wr=e=>Je(e)||pe(e),Me=e=>Ae(e)&&e.isConnected,Dt=e=>{for(const r in e)if(oe(e[r]))return!0;return!1};function De(e,r={}){const t=Array.isArray(e);if(L(e)||t)for(const a in e)Array.isArray(e[a])||L(e[a])&&!Dt(e[a])?(r[a]=Array.isArray(e[a])?[]:{},De(e[a],r[a])):j(e[a])||(r[a]=!0);return r}function Et(e,r,t){const a=Array.isArray(e);if(L(e)||a)for(const l in e)Array.isArray(e[l])||L(e[l])&&!Dt(e[l])?D(r)||Se(t[l])?t[l]=Array.isArray(e[l])?De(e[l],[]):{...De(e[l])}:Et(e[l],j(r)?{}:r[l],t[l]):t[l]=!ue(e[l],r[l]);return t}var xe=(e,r)=>Et(e,r,De(r)),Rt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>D(e)?e:r?e===""?NaN:e&&+e:t&&ie(e)?new Date(e):a?a(e):e;function Oe(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Ge(r)?r.files:Je(r)?wt(e.refs).value:St(r)?[...r.selectedOptions].map(({value:t})=>t):pe(r)?At(e.refs).value:Rt(D(r.value)?e.ref.value:r.value,e)}var Sr=(e,r,t,a)=>{const l={};for(const n of e){const f=c(r,n);f&&k(l,n,f._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},ge=e=>D(e)?e:we(e)?e.source:L(e)?we(e.value)?e.value.source:e.value:e,Dr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ht(e,r,t){const a=c(e,t);if(a||He(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const n=l.join("."),f=c(r,n),h=c(e,n);if(f&&!Array.isArray(f)&&t!==n)return{name:t};if(h&&h.type)return{name:n,error:h};l.pop()}return{name:t}}var Er=(e,r,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(r||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,Rr=(e,r)=>!_e(c(e,r)).length&&I(e,r);const Pr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function Ir(e={}){let r={...Pr,...e},t={submitCount:0,isDirty:!1,isLoading:oe(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},l=L(r.defaultValues)||L(r.values)?W(r.defaultValues||r.values)||{}:{},n=r.shouldUnregister?{}:W(l),f={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},_,F=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Be(),array:Be(),state:Be()},P=lt(r.mode),M=lt(r.reValidateMode),w=r.criteriaMode===te.all,re=s=>i=>{clearTimeout(F),F=setTimeout(s,i)},B=async s=>{if(v.isValid||s){const i=r.resolver?X((await T()).errors):await H(a,!0);i!==t.isValid&&b.state.next({isValid:i})}},O=(s,i)=>{(v.isValidating||v.validatingFields)&&((s||Array.from(h.mount)).forEach(o=>{o&&(i?k(t.validatingFields,o,i):I(t.validatingFields,o))}),b.state.next({validatingFields:t.validatingFields,isValidating:!X(t.validatingFields)}))},m=(s,i=[],o,y,d=!0,u=!0)=>{if(y&&o){if(f.action=!0,u&&Array.isArray(c(a,s))){const g=o(c(a,s),y.argA,y.argB);d&&k(a,s,g)}if(u&&Array.isArray(c(t.errors,s))){const g=o(c(t.errors,s),y.argA,y.argB);d&&k(t.errors,s,g),Rr(t.errors,s)}if(v.touchedFields&&u&&Array.isArray(c(t.touchedFields,s))){const g=o(c(t.touchedFields,s),y.argA,y.argB);d&&k(t.touchedFields,s,g)}v.dirtyFields&&(t.dirtyFields=xe(l,n)),b.state.next({name:s,isDirty:p(s,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(n,s,i)},q=(s,i)=>{k(t.errors,s,i),b.state.next({errors:t.errors})},G=s=>{t.errors=s,b.state.next({errors:t.errors,isValid:!1})},A=(s,i,o,y)=>{const d=c(a,s);if(d){const u=c(n,s,D(o)?c(l,s):o);D(u)||y&&y.defaultChecked||i?k(n,s,i?u:Oe(d._f)):S(s,u),f.mount&&B()}},N=(s,i,o,y,d)=>{let u=!1,g=!1;const V={name:s},R=!!(c(a,s)&&c(a,s)._f.disabled);if(!o||y){v.isDirty&&(g=t.isDirty,t.isDirty=V.isDirty=p(),u=g!==V.isDirty);const Q=R||ue(c(l,s),i);g=!!(!R&&c(t.dirtyFields,s)),Q||R?I(t.dirtyFields,s):k(t.dirtyFields,s,!0),V.dirtyFields=t.dirtyFields,u=u||v.dirtyFields&&g!==!Q}if(o){const Q=c(t.touchedFields,s);Q||(k(t.touchedFields,s,o),V.touchedFields=t.touchedFields,u=u||v.touchedFields&&Q!==o)}return u&&d&&b.state.next(V),u?V:{}},ee=(s,i,o,y)=>{const d=c(t.errors,s),u=v.isValid&&se(i)&&t.isValid!==i;if(e.delayError&&o?(_=re(()=>q(s,o)),_(e.delayError)):(clearTimeout(F),_=null,o?k(t.errors,s,o):I(t.errors,s)),(o?!ue(d,o):d)||!X(y)||u){const g={...y,...u&&se(i)?{isValid:i}:{},errors:t.errors,name:s};t={...t,...g},b.state.next(g)}},T=async s=>{O(s,!0);const i=await r.resolver(n,r.context,Sr(s||h.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return O(s),i},z=async s=>{const{errors:i}=await T(s);if(s)for(const o of s){const y=c(i,o);y?k(t.errors,o,y):I(t.errors,o)}else t.errors=i;return i},H=async(s,i,o={valid:!0})=>{for(const y in s){const d=s[y];if(d){const{_f:u,...g}=d;if(u){const V=h.array.has(u.name);O([y],!0);const R=await yt(d,n,w,r.shouldUseNativeValidation&&!i,V);if(O([y]),R[u.name]&&(o.valid=!1,i))break;!i&&(c(R,u.name)?V?kr(t.errors,R,u.name):k(t.errors,u.name,R[u.name]):I(t.errors,u.name))}g&&await H(g,i,o)}}return o.valid},J=()=>{for(const s of h.unMount){const i=c(a,s);i&&(i._f.refs?i._f.refs.every(o=>!Me(o)):!Me(i._f.ref))&&Ee(s)}h.unMount=new Set},p=(s,i)=>(s&&i&&k(n,s,i),!ue(Ye(),l)),x=(s,i,o)=>Ct(s,h,{...f.mount?n:D(i)?l:ie(s)?{[s]:i}:i},o,i),E=s=>_e(c(f.mount?n:l,s,e.shouldUnregister?c(l,s,[]):[])),S=(s,i,o={})=>{const y=c(a,s);let d=i;if(y){const u=y._f;u&&(!u.disabled&&k(n,s,Rt(i,u)),d=Ae(u.ref)&&j(i)?"":i,St(u.ref)?[...u.ref.options].forEach(g=>g.selected=d.includes(g.value)):u.refs?pe(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(V=>V===g.value):d===g.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(g=>g.checked=g.value===d):Ge(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||b.values.next({name:s,values:{...n}})))}(o.shouldDirty||o.shouldTouch)&&N(s,d,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&le(s)},Y=(s,i,o)=>{for(const y in i){const d=i[y],u=`${s}.${y}`,g=c(a,u);(h.array.has(s)||!Se(d)||g&&!g._f)&&!ye(d)?Y(u,d,o):S(u,d,o)}},U=(s,i,o={})=>{const y=c(a,s),d=h.array.has(s),u=W(i);k(n,s,u),d?(b.array.next({name:s,values:{...n}}),(v.isDirty||v.dirtyFields)&&o.shouldDirty&&b.state.next({name:s,dirtyFields:xe(l,n),isDirty:p(s,u)})):y&&!y._f&&!j(u)?Y(s,u,o):S(s,u,o),ot(s,h)&&b.state.next({...t}),b.values.next({name:f.mount?s:void 0,values:{...n}})},ne=async s=>{f.mount=!0;const i=s.target;let o=i.name,y=!0;const d=c(a,o),u=()=>i.type?Oe(d._f):pt(s),g=V=>{y=Number.isNaN(V)||V===c(n,o,V)};if(d){let V,R;const Q=u(),de=s.type===Ce.BLUR||s.type===Ce.FOCUS_OUT,Mt=!Dr(d._f)&&!r.resolver&&!c(t.errors,o)&&!d._f.deps||Er(de,c(t.touchedFields,o),t.isSubmitted,M,P),Pe=ot(o,h,de);k(n,o,Q),de?(d._f.onBlur&&d._f.onBlur(s),_&&_(0)):d._f.onChange&&d._f.onChange(s);const Ie=N(o,Q,de,!1),Ot=!X(Ie)||Pe;if(!de&&b.values.next({name:o,type:s.type,values:{...n}}),Mt)return v.isValid&&B(),Ot&&b.state.next({name:o,...Pe?{}:Ie});if(!de&&Pe&&b.state.next({...t}),r.resolver){const{errors:it}=await T([o]);if(g(Q),y){const Tt=ht(t.errors,a,o),at=ht(it,a,Tt.name||o);V=at.error,o=at.name,R=X(it)}}else O([o],!0),V=(await yt(d,n,w,r.shouldUseNativeValidation))[o],O([o]),g(Q),y&&(V?R=!1:v.isValid&&(R=await H(a,!0)));y&&(d._f.deps&&le(d._f.deps),ee(o,R,V,Ie))}},$=(s,i)=>{if(c(t.errors,i)&&s.focus)return s.focus(),1},le=async(s,i={})=>{let o,y;const d=Fe(s);if(r.resolver){const u=await z(D(s)?s:d);o=X(u),y=s?!d.some(g=>c(u,g)):o}else s?(y=(await Promise.all(d.map(async u=>{const g=c(a,u);return await H(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!y&&!t.isValid)&&B()):y=o=await H(a);return b.state.next({...!ie(s)||v.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors}),i.shouldFocus&&!y&&ve(a,$,s?d:h.mount),y},Ye=s=>{const i={...f.mount?n:l};return D(s)?i:ie(s)?c(i,s):s.map(o=>c(i,o))},Qe=(s,i)=>({invalid:!!c((i||t).errors,s),isDirty:!!c((i||t).dirtyFields,s),isTouched:!!c((i||t).touchedFields,s),isValidating:!!c((i||t).validatingFields,s),error:c((i||t).errors,s)}),Pt=s=>{s&&Fe(s).forEach(i=>I(t.errors,i)),b.state.next({errors:s?t.errors:{}})},Xe=(s,i,o)=>{const y=(c(a,s,{_f:{}})._f||{}).ref,d=c(t.errors,s)||{},{ref:u,message:g,type:V,...R}=d;k(t.errors,s,{...R,...i,ref:y}),b.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},It=(s,i)=>oe(s)?b.values.subscribe({next:o=>s(x(void 0,i),o)}):x(s,i,!0),Ee=(s,i={})=>{for(const o of s?Fe(s):h.mount)h.mount.delete(o),h.array.delete(o),i.keepValue||(I(a,o),I(n,o)),!i.keepError&&I(t.errors,o),!i.keepDirty&&I(t.dirtyFields,o),!i.keepTouched&&I(t.touchedFields,o),!i.keepIsValidating&&I(t.validatingFields,o),!r.shouldUnregister&&!i.keepDefaultValue&&I(l,o);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:p()}:{}}),!i.keepIsValid&&B()},Ze=({disabled:s,name:i,field:o,fields:y,value:d})=>{if(se(s)&&f.mount||s){const u=s?void 0:D(d)?Oe(o?o._f:c(y,i)._f):d;k(n,i,u),N(i,u,!1,!1,!0)}},Re=(s,i={})=>{let o=c(a,s);const y=se(i.disabled);return k(a,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...i}}),h.mount.add(s),o?Ze({field:o,disabled:i.disabled,name:s,value:i.value}):A(s,!0,i.value),{...y?{disabled:i.disabled}:{},...r.progressive?{required:!!i.required,min:ge(i.min),max:ge(i.max),minLength:ge(i.minLength),maxLength:ge(i.maxLength),pattern:ge(i.pattern)}:{},name:s,onChange:ne,onBlur:ne,ref:d=>{if(d){Re(s,i),o=c(a,s);const u=D(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=wr(u),V=o._f.refs||[];if(g?V.find(R=>R===u):u===o._f.ref)return;k(a,s,{_f:{...o._f,...g?{refs:[...V.filter(Me),u,...Array.isArray(c(l,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),A(s,!1,void 0,u)}else o=c(a,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(_t(h.array,s)&&f.action)&&h.unMount.add(s)}}},et=()=>r.shouldFocusError&&ve(a,$,h.mount),Lt=s=>{se(s)&&(b.state.next({disabled:s}),ve(a,(i,o)=>{const y=c(a,o);y&&(i.disabled=y._f.disabled||s,Array.isArray(y._f.refs)&&y._f.refs.forEach(d=>{d.disabled=y._f.disabled||s}))},0,!1))},tt=(s,i)=>async o=>{let y;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let d=W(n);if(b.state.next({isSubmitting:!0}),r.resolver){const{errors:u,values:g}=await T();t.errors=u,d=g}else await H(a);if(I(t.errors,"root"),X(t.errors)){b.state.next({errors:{}});try{await s(d,o)}catch(u){y=u}}else i&&await i({...t.errors},o),et(),setTimeout(et);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:X(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},Bt=(s,i={})=>{c(a,s)&&(D(i.defaultValue)?U(s,W(c(l,s))):(U(s,i.defaultValue),k(l,s,W(i.defaultValue))),i.keepTouched||I(t.touchedFields,s),i.keepDirty||(I(t.dirtyFields,s),t.isDirty=i.defaultValue?p(s,W(c(l,s))):p()),i.keepError||(I(t.errors,s),v.isValid&&B()),b.state.next({...t}))},rt=(s,i={})=>{const o=s?W(s):l,y=W(o),d=X(s),u=d?l:y;if(i.keepDefaultValues||(l=o),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)c(t.dirtyFields,g)?k(u,g,c(n,g)):U(g,c(u,g));else{if(ze&&D(s))for(const g of h.mount){const V=c(a,g);if(V&&V._f){const R=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(Ae(R)){const Q=R.closest("form");if(Q){Q.reset();break}}}}a={}}n=e.shouldUnregister?i.keepDefaultValues?W(l):{}:W(u),b.array.next({values:{...u}}),b.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!v.isValid||!!i.keepIsValid||!!i.keepDirtyValues,f.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:d?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ue(s,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:d?[]:i.keepDirtyValues?i.keepDefaultValues&&n?xe(l,n):t.dirtyFields:i.keepDefaultValues&&s?xe(l,s):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},st=(s,i)=>rt(oe(s)?s(n):s,i);return{control:{register:Re,unregister:Ee,getFieldState:Qe,handleSubmit:tt,setError:Xe,_executeSchema:T,_getWatch:x,_getDirty:p,_updateValid:B,_removeUnmounted:J,_updateFieldArray:m,_updateDisabledField:Ze,_getFieldArray:E,_reset:rt,_resetDefaultValues:()=>oe(r.defaultValues)&&r.defaultValues().then(s=>{st(s,r.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Lt,_subjects:b,_proxyFormState:v,_setErrors:G,get _fields(){return a},get _formValues(){return n},get _state(){return f},set _state(s){f=s},get _defaultValues(){return l},get _names(){return h},set _names(s){h=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:le,register:Re,handleSubmit:tt,watch:It,setValue:U,getValues:Ye,reset:st,resetField:Bt,clearErrors:Pt,unregister:Ee,setError:Xe,setFocus:(s,i={})=>{const o=c(a,s),y=o&&o._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},getFieldState:Qe}}function $r(e={}){const r=C.useRef(),t=C.useRef(),[a,l]=C.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Ir(e),formState:a});const n=r.current.control;return n._options=e,Ke({subject:n._subjects.state,next:f=>{Vt(f,n._proxyFormState,n._updateFormState,!0)&&l({...n._formState})}}),C.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),C.useEffect(()=>{if(n._proxyFormState.isDirty){const f=n._getDirty();f!==a.isDirty&&n._subjects.state.next({isDirty:f})}},[n,a.isDirty]),C.useEffect(()=>{e.values&&!ue(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,l(f=>({...f}))):n._resetDefaultValues()},[e.values,n]),C.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),C.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),C.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),r.current.formState=Ft(a,n),r.current}export{Nr as C,Ur as F,Qt as S,Tr as a,hr as d,$r as u};
//# sourceMappingURL=index.esm-qNI6yR3U.js.map
