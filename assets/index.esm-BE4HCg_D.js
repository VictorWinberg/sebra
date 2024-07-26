import{K as Oe,j as W,ab as dt,aa as ft,z as Ue,aI as Ot,aH as Ut,ap as ue,a9 as te,aw as Bt,r as ge,aq as yt,a7 as ht,ac as Ie,ae as gt,b8 as Nt,bG as $t,T as rt,S as jt,a3 as qt,a4 as zt,R as A}from"./index-rXAvkt_p.js";const Ht=Oe(W.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Wt=Oe(W.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Kt=Oe(W.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Gt(e){return ft("MuiCheckbox",e)}const Pe=dt("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Jt=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Qt=e=>{const{classes:r,indeterminate:t,color:a,size:n}=e,l={root:["root",t&&"indeterminate",`color${ue(a)}`,`size${ue(n)}`]},y=gt(l,Gt,r);return te({},r,y)},Xt=Ue(Ot,{shouldForwardProp:e=>Ut(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,r[`size${ue(t.size)}`],t.color!=="default"&&r[`color${ue(t.color)}`]]}})(({theme:e,ownerState:r})=>te({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${r.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Bt(r.color==="default"?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${Pe.checked}, &.${Pe.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${Pe.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Yt=W.jsx(Wt,{}),Zt=W.jsx(Ht,{}),er=W.jsx(Kt,{}),Rr=ge.forwardRef(function(r,t){var a,n;const l=yt({props:r,name:"MuiCheckbox"}),{checkedIcon:y=Yt,color:h="primary",icon:p=Zt,indeterminate:F=!1,indeterminateIcon:b=er,inputProps:v,size:L="medium",className:T}=l,S=ht(l,Jt),re=F?b:p,I=F?b:y,U=te({},l,{color:h,indeterminate:F,size:L}),m=Qt(U);return W.jsx(Xt,te({type:"checkbox",inputProps:te({"data-indeterminate":F},v),icon:ge.cloneElement(re,{fontSize:(a=re.props.fontSize)!=null?a:L}),checkedIcon:ge.cloneElement(I,{fontSize:(n=I.props.fontSize)!=null?n:L}),ownerState:U,ref:t,className:Ie(m.root,T)},S,{classes:m}))});function tr(e){return ft("MuiFormControlLabel",e)}const he=dt("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),rr=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],sr=e=>{const{classes:r,disabled:t,labelPlacement:a,error:n,required:l}=e,y={root:["root",t&&"disabled",`labelPlacement${ue(a)}`,n&&"error",l&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",n&&"error"]};return gt(y,tr,r)},ir=Ue("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[{[`& .${he.label}`]:r.label},r.root,r[`labelPlacement${ue(t.labelPlacement)}`]]}})(({theme:e,ownerState:r})=>te({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${he.disabled}`]:{cursor:"default"}},r.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},r.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},r.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${he.label}`]:{[`&.${he.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ar=Ue("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${he.error}`]:{color:(e.vars||e).palette.error.main}})),Pr=ge.forwardRef(function(r,t){var a,n;const l=yt({props:r,name:"MuiFormControlLabel"}),{className:y,componentsProps:h={},control:p,disabled:F,disableTypography:b,label:v,labelPlacement:L="end",required:T,slotProps:S={}}=l,re=ht(l,rr),I=Nt(),U=(a=F??p.props.disabled)!=null?a:I==null?void 0:I.disabled,m=T??p.props.required,q={disabled:U,required:m};["checked","name","onChange","value","inputRef"].forEach(G=>{typeof p.props[G]>"u"&&typeof l[G]<"u"&&(q[G]=l[G])});const K=$t({props:l,muiFormControl:I,states:["error"]}),C=te({},l,{disabled:U,labelPlacement:L,required:m,error:K.error}),X=sr(C),se=(n=S.typography)!=null?n:h.typography;let B=v;return B!=null&&B.type!==rt&&!b&&(B=W.jsx(rt,te({component:"span"},se,{className:Ie(X.label,se==null?void 0:se.className),children:B}))),W.jsxs(ir,te({className:Ie(X.root,y),ownerState:C,ref:t},re,{children:[ge.cloneElement(p,q),m?W.jsxs(jt,{display:"block",children:[B,W.jsxs(ar,{ownerState:C,"aria-hidden":!0,className:X.asterisk,children:[" ","*"]})]}):B]}))});var Be={},lr=zt;Object.defineProperty(Be,"__esModule",{value:!0});var nr=Be.default=void 0,or=lr(qt()),ur=W;nr=Be.default=(0,or.default)((0,ur.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");var be=e=>e.type==="checkbox",oe=e=>e instanceof Date,O=e=>e==null;const vt=e=>typeof e=="object";var P=e=>!O(e)&&!Array.isArray(e)&&vt(e)&&!oe(e),bt=e=>P(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,mt=(e,r)=>e.has(cr(r)),dr=e=>{const r=e.constructor&&e.constructor.prototype;return P(r)&&r.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ne&&(e instanceof Blob||e instanceof FileList))&&(t||P(e)))if(r=t?[]:{},!t&&!dr(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=N(e[a]));else return e;return r}var me=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,c=(e,r,t)=>{if(!r||!P(e))return t;const a=me(r.split(/[,[\].]+?/)).reduce((n,l)=>O(n)?n:n[l],e);return D(a)||a===e?D(e[r])?t:e[r]:a},Y=e=>typeof e=="boolean",$e=e=>/^\w*$/.test(e),_t=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/)),k=(e,r,t)=>{let a=-1;const n=$e(r)?[r]:_t(r),l=n.length,y=l-1;for(;++a<l;){const h=n[a];let p=t;if(a!==y){const F=e[h];p=P(F)||Array.isArray(F)?F:isNaN(+n[a+1])?{}:[]}if(h==="__proto__")return;e[h]=p,e=e[h]}return e};const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},fr=A.createContext(null),je=()=>A.useContext(fr);var pt=(e,r,t,a=!0)=>{const n={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const y=l;return r._proxyFormState[y]!==Q.all&&(r._proxyFormState[y]=!a||Q.all),t&&(t[y]=!0),e[y]}});return n},j=e=>P(e)&&!Object.keys(e).length,xt=(e,r,t,a)=>{t(e);const{name:n,...l}=e;return j(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(y=>r[y]===(!a||Q.all))},xe=e=>Array.isArray(e)?e:[e],Vt=(e,r,t)=>!e||!r||e===r||xe(e).some(a=>a&&(t?a===r:a.startsWith(r)||r.startsWith(a)));function qe(e){const r=A.useRef(e);r.current=e,A.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function yr(e){const r=je(),{control:t=r.control,disabled:a,name:n,exact:l}=e||{},[y,h]=A.useState(t._formState),p=A.useRef(!0),F=A.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),b=A.useRef(n);return b.current=n,qe({disabled:a,next:v=>p.current&&Vt(b.current,v.name,l)&&xt(v,F.current,t._updateFormState)&&h({...t._formState,...v}),subject:t._subjects.state}),A.useEffect(()=>(p.current=!0,F.current.isValid&&t._updateValid(!0),()=>{p.current=!1}),[t]),pt(y,t,F.current,!1)}var Z=e=>typeof e=="string",Ft=(e,r,t,a,n)=>Z(e)?(a&&r.watch.add(e),c(t,e,n)):Array.isArray(e)?e.map(l=>(a&&r.watch.add(l),c(t,l))):(a&&(r.watchAll=!0),t);function hr(e){const r=je(),{control:t=r.control,name:a,defaultValue:n,disabled:l,exact:y}=e||{},h=A.useRef(a);h.current=a,qe({disabled:l,subject:t._subjects.values,next:b=>{Vt(h.current,b.name,y)&&F(N(Ft(h.current,t._names,b.values||t._formValues,!1,n)))}});const[p,F]=A.useState(t._getWatch(a,n));return A.useEffect(()=>t._removeUnmounted()),p}function gr(e){const r=je(),{name:t,disabled:a,control:n=r.control,shouldUnregister:l}=e,y=mt(n._names.array,t),h=hr({control:n,name:t,defaultValue:c(n._formValues,t,c(n._defaultValues,t,e.defaultValue)),exact:!0}),p=yr({control:n,name:t}),F=A.useRef(n.register(t,{...e.rules,value:h,...Y(e.disabled)?{disabled:e.disabled}:{}}));return A.useEffect(()=>{const b=n._options.shouldUnregister||l,v=(L,T)=>{const S=c(n._fields,L);S&&(S._f.mount=T)};if(v(t,!0),b){const L=N(c(n._options.defaultValues,t));k(n._defaultValues,t,L),D(c(n._formValues,t))&&k(n._formValues,t,L)}return()=>{(y?b&&!n._state.action:b)?n.unregister(t):v(t,!1)}},[t,n,y,l]),A.useEffect(()=>{c(n._fields,t)&&n._updateDisabledField({disabled:a,fields:n._fields,name:t,value:c(n._fields,t)._f.value})},[a,t,n]),{field:{name:t,value:h,...Y(a)||p.disabled?{disabled:p.disabled||a}:{},onChange:A.useCallback(b=>F.current.onChange({target:{value:bt(b),name:t},type:Fe.CHANGE}),[t]),onBlur:A.useCallback(()=>F.current.onBlur({target:{value:c(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:b=>{const v=c(n._fields,t);v&&b&&(v._f.ref={focus:()=>b.focus(),select:()=>b.select(),setCustomValidity:L=>b.setCustomValidity(L),reportValidity:()=>b.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(p.errors,t)},isDirty:{enumerable:!0,get:()=>!!c(p.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!c(p.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!c(p.validatingFields,t)},error:{enumerable:!0,get:()=>c(p.errors,t)}})}}const Lr=e=>e.render(gr(e));var vr=(e,r,t,a,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:n||!0}}:{},st=e=>({isOnSubmit:!e||e===Q.onSubmit,isOnBlur:e===Q.onBlur,isOnChange:e===Q.onChange,isOnAll:e===Q.all,isOnTouch:e===Q.onTouched}),it=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ve=(e,r,t,a)=>{for(const n of t||Object.keys(e)){const l=c(e,n);if(l){const{_f:y,...h}=l;if(y){if(y.refs&&y.refs[0]&&r(y.refs[0],n)&&!a)break;if(y.ref&&r(y.ref,y.name)&&!a)break;ve(h,r)}else P(h)&&ve(h,r)}}};var br=(e,r,t)=>{const a=me(c(e,t));return k(a,"root",r[t]),k(e,t,a),e},ze=e=>e.type==="file",ie=e=>typeof e=="function",ke=e=>{if(!Ne)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ve=e=>Z(e),He=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const at={value:!1,isValid:!1},lt={value:!0,isValid:!0};var kt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?lt:{value:e[0].value,isValid:!0}:lt:at}return at};const nt={isValid:!1,value:null};var At=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,nt):nt;function ot(e,r,t="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||Y(e)&&!e)return{type:t,message:Ve(e)?e:"",ref:r}}var ne=e=>P(e)&&!Ae(e)?e:{value:e,message:""},ut=async(e,r,t,a,n)=>{const{ref:l,refs:y,required:h,maxLength:p,minLength:F,min:b,max:v,pattern:L,validate:T,name:S,valueAsNumber:re,mount:I,disabled:U}=e._f,m=c(r,S);if(!I||U)return{};const q=y?y[0]:l,K=_=>{a&&q.reportValidity&&(q.setCustomValidity(Y(_)?"":_||""),q.reportValidity())},C={},X=He(l),se=be(l),B=X||se,G=(re||ze(l))&&D(l.value)&&D(m)||ke(l)&&l.value===""||m===""||Array.isArray(m)&&!m.length,z=vr.bind(null,S,t,C),_e=(_,x,E,M=ee.maxLength,J=ee.minLength)=>{const H=_?x:E;C[S]={type:_?M:J,message:H,ref:l,...z(_?M:J,H)}};if(n?!Array.isArray(m)||!m.length:h&&(!B&&(G||O(m))||Y(m)&&!m||se&&!kt(y).isValid||X&&!At(y).isValid)){const{value:_,message:x}=Ve(h)?{value:!!h,message:h}:ne(h);if(_&&(C[S]={type:ee.required,message:x,ref:q,...z(ee.required,x)},!t))return K(x),C}if(!G&&(!O(b)||!O(v))){let _,x;const E=ne(v),M=ne(b);if(!O(m)&&!isNaN(m)){const J=l.valueAsNumber||m&&+m;O(E.value)||(_=J>E.value),O(M.value)||(x=J<M.value)}else{const J=l.valueAsDate||new Date(m),H=fe=>new Date(new Date().toDateString()+" "+fe),ce=l.type=="time",de=l.type=="week";Z(E.value)&&m&&(_=ce?H(m)>H(E.value):de?m>E.value:J>new Date(E.value)),Z(M.value)&&m&&(x=ce?H(m)<H(M.value):de?m<M.value:J<new Date(M.value))}if((_||x)&&(_e(!!_,E.message,M.message,ee.max,ee.min),!t))return K(C[S].message),C}if((p||F)&&!G&&(Z(m)||n&&Array.isArray(m))){const _=ne(p),x=ne(F),E=!O(_.value)&&m.length>+_.value,M=!O(x.value)&&m.length<+x.value;if((E||M)&&(_e(E,_.message,x.message),!t))return K(C[S].message),C}if(L&&!G&&Z(m)){const{value:_,message:x}=ne(L);if(Ae(_)&&!m.match(_)&&(C[S]={type:ee.pattern,message:x,ref:l,...z(ee.pattern,x)},!t))return K(x),C}if(T){if(ie(T)){const _=await T(m,r),x=ot(_,q);if(x&&(C[S]={...x,...z(ee.validate,x.message)},!t))return K(x.message),C}else if(P(T)){let _={};for(const x in T){if(!j(_)&&!t)break;const E=ot(await T[x](m,r),q,x);E&&(_={...E,...z(x,E.message)},K(E.message),t&&(C[S]=_))}if(!j(_)&&(C[S]={ref:q,..._},!t))return C}}return K(!0),C};function mr(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=D(e)?a++:e[r[a++]];return e}function _r(e){for(const r in e)if(e.hasOwnProperty(r)&&!D(e[r]))return!1;return!0}function R(e,r){const t=Array.isArray(r)?r:$e(r)?[r]:_t(r),a=t.length===1?e:mr(e,t),n=t.length-1,l=t[n];return a&&delete a[l],n!==0&&(P(a)&&j(a)||Array.isArray(a)&&_r(a))&&R(e,t.slice(0,-1)),e}var Le=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Ce=e=>O(e)||!vt(e);function ae(e,r){if(Ce(e)||Ce(r))return e===r;if(oe(e)&&oe(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const n of t){const l=e[n];if(!a.includes(n))return!1;if(n!=="ref"){const y=r[n];if(oe(l)&&oe(y)||P(l)&&P(y)||Array.isArray(l)&&Array.isArray(y)?!ae(l,y):l!==y)return!1}}return!0}var Ct=e=>e.type==="select-multiple",pr=e=>He(e)||be(e),Me=e=>ke(e)&&e.isConnected,Dt=e=>{for(const r in e)if(ie(e[r]))return!0;return!1};function De(e,r={}){const t=Array.isArray(e);if(P(e)||t)for(const a in e)Array.isArray(e[a])||P(e[a])&&!Dt(e[a])?(r[a]=Array.isArray(e[a])?[]:{},De(e[a],r[a])):O(e[a])||(r[a]=!0);return r}function St(e,r,t){const a=Array.isArray(e);if(P(e)||a)for(const n in e)Array.isArray(e[n])||P(e[n])&&!Dt(e[n])?D(r)||Ce(t[n])?t[n]=Array.isArray(e[n])?De(e[n],[]):{...De(e[n])}:St(e[n],O(r)?{}:r[n],t[n]):t[n]=!ae(e[n],r[n]);return t}var pe=(e,r)=>St(e,r,De(r)),wt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>D(e)?e:r?e===""?NaN:e&&+e:t&&Z(e)?new Date(e):a?a(e):e;function Te(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return ze(r)?r.files:He(r)?At(e.refs).value:Ct(r)?[...r.selectedOptions].map(({value:t})=>t):be(r)?kt(e.refs).value:wt(D(r.value)?e.ref.value:r.value,e)}var xr=(e,r,t,a)=>{const n={};for(const l of e){const y=c(r,l);y&&k(n,l,y._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:a}},ye=e=>D(e)?e:Ae(e)?e.source:P(e)?Ae(e.value)?e.value.source:e.value:e,Vr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ct(e,r,t){const a=c(e,t);if(a||$e(t))return{error:a,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),y=c(r,l),h=c(e,l);if(y&&!Array.isArray(y)&&t!==l)return{name:t};if(h&&h.type)return{name:l,error:h};n.pop()}return{name:t}}var Fr=(e,r,t,a,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?a.isOnBlur:n.isOnBlur)?!e:(t?a.isOnChange:n.isOnChange)?e:!0,kr=(e,r)=>!me(c(e,r)).length&&R(e,r);const Ar={mode:Q.onSubmit,reValidateMode:Q.onChange,shouldFocusError:!0};function Cr(e={}){let r={...Ar,...e},t={submitCount:0,isDirty:!1,isLoading:ie(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},n=P(r.defaultValues)||P(r.values)?N(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:N(n),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p,F=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Le(),array:Le(),state:Le()},L=st(r.mode),T=st(r.reValidateMode),S=r.criteriaMode===Q.all,re=s=>i=>{clearTimeout(F),F=setTimeout(s,i)},I=async s=>{if(b.isValid||s){const i=r.resolver?j((await B()).errors):await z(a,!0);i!==t.isValid&&v.state.next({isValid:i})}},U=(s,i)=>{(b.isValidating||b.validatingFields)&&((s||Array.from(h.mount)).forEach(o=>{o&&(i?k(t.validatingFields,o,i):R(t.validatingFields,o))}),v.state.next({validatingFields:t.validatingFields,isValidating:!j(t.validatingFields)}))},m=(s,i=[],o,f,d=!0,u=!0)=>{if(f&&o){if(y.action=!0,u&&Array.isArray(c(a,s))){const g=o(c(a,s),f.argA,f.argB);d&&k(a,s,g)}if(u&&Array.isArray(c(t.errors,s))){const g=o(c(t.errors,s),f.argA,f.argB);d&&k(t.errors,s,g),kr(t.errors,s)}if(b.touchedFields&&u&&Array.isArray(c(t.touchedFields,s))){const g=o(c(t.touchedFields,s),f.argA,f.argB);d&&k(t.touchedFields,s,g)}b.dirtyFields&&(t.dirtyFields=pe(n,l)),v.state.next({name:s,isDirty:_(s,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(l,s,i)},q=(s,i)=>{k(t.errors,s,i),v.state.next({errors:t.errors})},K=s=>{t.errors=s,v.state.next({errors:t.errors,isValid:!1})},C=(s,i,o,f)=>{const d=c(a,s);if(d){const u=c(l,s,D(o)?c(n,s):o);D(u)||f&&f.defaultChecked||i?k(l,s,i?u:Te(d._f)):M(s,u),y.mount&&I()}},X=(s,i,o,f,d)=>{let u=!1,g=!1;const V={name:s},w=!!(c(a,s)&&c(a,s)._f.disabled);if(!o||f){b.isDirty&&(g=t.isDirty,t.isDirty=V.isDirty=_(),u=g!==V.isDirty);const $=w||ae(c(n,s),i);g=!!(!w&&c(t.dirtyFields,s)),$||w?R(t.dirtyFields,s):k(t.dirtyFields,s,!0),V.dirtyFields=t.dirtyFields,u=u||b.dirtyFields&&g!==!$}if(o){const $=c(t.touchedFields,s);$||(k(t.touchedFields,s,o),V.touchedFields=t.touchedFields,u=u||b.touchedFields&&$!==o)}return u&&d&&v.state.next(V),u?V:{}},se=(s,i,o,f)=>{const d=c(t.errors,s),u=b.isValid&&Y(i)&&t.isValid!==i;if(e.delayError&&o?(p=re(()=>q(s,o)),p(e.delayError)):(clearTimeout(F),p=null,o?k(t.errors,s,o):R(t.errors,s)),(o?!ae(d,o):d)||!j(f)||u){const g={...f,...u&&Y(i)?{isValid:i}:{},errors:t.errors,name:s};t={...t,...g},v.state.next(g)}},B=async s=>{U(s,!0);const i=await r.resolver(l,r.context,xr(s||h.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return U(s),i},G=async s=>{const{errors:i}=await B(s);if(s)for(const o of s){const f=c(i,o);f?k(t.errors,o,f):R(t.errors,o)}else t.errors=i;return i},z=async(s,i,o={valid:!0})=>{for(const f in s){const d=s[f];if(d){const{_f:u,...g}=d;if(u){const V=h.array.has(u.name);U([f],!0);const w=await ut(d,l,S,r.shouldUseNativeValidation&&!i,V);if(U([f]),w[u.name]&&(o.valid=!1,i))break;!i&&(c(w,u.name)?V?br(t.errors,w,u.name):k(t.errors,u.name,w[u.name]):R(t.errors,u.name))}g&&await z(g,i,o)}}return o.valid},_e=()=>{for(const s of h.unMount){const i=c(a,s);i&&(i._f.refs?i._f.refs.every(o=>!Me(o)):!Me(i._f.ref))&&Se(s)}h.unMount=new Set},_=(s,i)=>(s&&i&&k(l,s,i),!ae(We(),n)),x=(s,i,o)=>Ft(s,h,{...y.mount?l:D(i)?n:Z(s)?{[s]:i}:i},o,i),E=s=>me(c(y.mount?l:n,s,e.shouldUnregister?c(n,s,[]):[])),M=(s,i,o={})=>{const f=c(a,s);let d=i;if(f){const u=f._f;u&&(!u.disabled&&k(l,s,wt(i,u)),d=ke(u.ref)&&O(i)?"":i,Ct(u.ref)?[...u.ref.options].forEach(g=>g.selected=d.includes(g.value)):u.refs?be(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(V=>V===g.value):d===g.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(g=>g.checked=g.value===d):ze(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||v.values.next({name:s,values:{...l}})))}(o.shouldDirty||o.shouldTouch)&&X(s,d,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&fe(s)},J=(s,i,o)=>{for(const f in i){const d=i[f],u=`${s}.${f}`,g=c(a,u);(h.array.has(s)||!Ce(d)||g&&!g._f)&&!oe(d)?J(u,d,o):M(u,d,o)}},H=(s,i,o={})=>{const f=c(a,s),d=h.array.has(s),u=N(i);k(l,s,u),d?(v.array.next({name:s,values:{...l}}),(b.isDirty||b.dirtyFields)&&o.shouldDirty&&v.state.next({name:s,dirtyFields:pe(n,l),isDirty:_(s,u)})):f&&!f._f&&!O(u)?J(s,u,o):M(s,u,o),it(s,h)&&v.state.next({...t}),v.values.next({name:y.mount?s:void 0,values:{...l}})},ce=async s=>{y.mount=!0;const i=s.target;let o=i.name,f=!0;const d=c(a,o),u=()=>i.type?Te(d._f):bt(s),g=V=>{f=Number.isNaN(V)||V===c(l,o,V)};if(d){let V,w;const $=u(),le=s.type===Fe.BLUR||s.type===Fe.FOCUS_OUT,Mt=!Vr(d._f)&&!r.resolver&&!c(t.errors,o)&&!d._f.deps||Fr(le,c(t.touchedFields,o),t.isSubmitted,T,L),Ee=it(o,h,le);k(l,o,$),le?(d._f.onBlur&&d._f.onBlur(s),p&&p(0)):d._f.onChange&&d._f.onChange(s);const Re=X(o,$,le,!1),Tt=!j(Re)||Ee;if(!le&&v.values.next({name:o,type:s.type,values:{...l}}),Mt)return b.isValid&&I(),Tt&&v.state.next({name:o,...Ee?{}:Re});if(!le&&Ee&&v.state.next({...t}),r.resolver){const{errors:et}=await B([o]);if(g($),f){const It=ct(t.errors,a,o),tt=ct(et,a,It.name||o);V=tt.error,o=tt.name,w=j(et)}}else U([o],!0),V=(await ut(d,l,S,r.shouldUseNativeValidation))[o],U([o]),g($),f&&(V?w=!1:b.isValid&&(w=await z(a,!0)));f&&(d._f.deps&&fe(d._f.deps),se(o,w,V,Re))}},de=(s,i)=>{if(c(t.errors,i)&&s.focus)return s.focus(),1},fe=async(s,i={})=>{let o,f;const d=xe(s);if(r.resolver){const u=await G(D(s)?s:d);o=j(u),f=s?!d.some(g=>c(u,g)):o}else s?(f=(await Promise.all(d.map(async u=>{const g=c(a,u);return await z(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!f&&!t.isValid)&&I()):f=o=await z(a);return v.state.next({...!Z(s)||b.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors}),i.shouldFocus&&!f&&ve(a,de,s?d:h.mount),f},We=s=>{const i={...y.mount?l:n};return D(s)?i:Z(s)?c(i,s):s.map(o=>c(i,o))},Ke=(s,i)=>({invalid:!!c((i||t).errors,s),isDirty:!!c((i||t).dirtyFields,s),isTouched:!!c((i||t).touchedFields,s),isValidating:!!c((i||t).validatingFields,s),error:c((i||t).errors,s)}),Et=s=>{s&&xe(s).forEach(i=>R(t.errors,i)),v.state.next({errors:s?t.errors:{}})},Ge=(s,i,o)=>{const f=(c(a,s,{_f:{}})._f||{}).ref,d=c(t.errors,s)||{},{ref:u,message:g,type:V,...w}=d;k(t.errors,s,{...w,...i,ref:f}),v.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&f&&f.focus&&f.focus()},Rt=(s,i)=>ie(s)?v.values.subscribe({next:o=>s(x(void 0,i),o)}):x(s,i,!0),Se=(s,i={})=>{for(const o of s?xe(s):h.mount)h.mount.delete(o),h.array.delete(o),i.keepValue||(R(a,o),R(l,o)),!i.keepError&&R(t.errors,o),!i.keepDirty&&R(t.dirtyFields,o),!i.keepTouched&&R(t.touchedFields,o),!i.keepIsValidating&&R(t.validatingFields,o),!r.shouldUnregister&&!i.keepDefaultValue&&R(n,o);v.values.next({values:{...l}}),v.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&I()},Je=({disabled:s,name:i,field:o,fields:f,value:d})=>{if(Y(s)&&y.mount||s){const u=s?void 0:D(d)?Te(o?o._f:c(f,i)._f):d;k(l,i,u),X(i,u,!1,!1,!0)}},we=(s,i={})=>{let o=c(a,s);const f=Y(i.disabled);return k(a,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...i}}),h.mount.add(s),o?Je({field:o,disabled:i.disabled,name:s,value:i.value}):C(s,!0,i.value),{...f?{disabled:i.disabled}:{},...r.progressive?{required:!!i.required,min:ye(i.min),max:ye(i.max),minLength:ye(i.minLength),maxLength:ye(i.maxLength),pattern:ye(i.pattern)}:{},name:s,onChange:ce,onBlur:ce,ref:d=>{if(d){we(s,i),o=c(a,s);const u=D(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=pr(u),V=o._f.refs||[];if(g?V.find(w=>w===u):u===o._f.ref)return;k(a,s,{_f:{...o._f,...g?{refs:[...V.filter(Me),u,...Array.isArray(c(n,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),C(s,!1,void 0,u)}else o=c(a,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(mt(h.array,s)&&y.action)&&h.unMount.add(s)}}},Qe=()=>r.shouldFocusError&&ve(a,de,h.mount),Pt=s=>{Y(s)&&(v.state.next({disabled:s}),ve(a,(i,o)=>{const f=c(a,o);f&&(i.disabled=f._f.disabled||s,Array.isArray(f._f.refs)&&f._f.refs.forEach(d=>{d.disabled=f._f.disabled||s}))},0,!1))},Xe=(s,i)=>async o=>{let f;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let d=N(l);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:u,values:g}=await B();t.errors=u,d=g}else await z(a);if(R(t.errors,"root"),j(t.errors)){v.state.next({errors:{}});try{await s(d,o)}catch(u){f=u}}else i&&await i({...t.errors},o),Qe(),setTimeout(Qe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:j(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},Lt=(s,i={})=>{c(a,s)&&(D(i.defaultValue)?H(s,N(c(n,s))):(H(s,i.defaultValue),k(n,s,N(i.defaultValue))),i.keepTouched||R(t.touchedFields,s),i.keepDirty||(R(t.dirtyFields,s),t.isDirty=i.defaultValue?_(s,N(c(n,s))):_()),i.keepError||(R(t.errors,s),b.isValid&&I()),v.state.next({...t}))},Ye=(s,i={})=>{const o=s?N(s):n,f=N(o),d=j(s),u=d?n:f;if(i.keepDefaultValues||(n=o),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)c(t.dirtyFields,g)?k(u,g,c(l,g)):H(g,c(u,g));else{if(Ne&&D(s))for(const g of h.mount){const V=c(a,g);if(V&&V._f){const w=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(ke(w)){const $=w.closest("form");if($){$.reset();break}}}}a={}}l=e.shouldUnregister?i.keepDefaultValues?N(n):{}:N(u),v.array.next({values:{...u}}),v.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!b.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:d?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ae(s,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:d?[]:i.keepDirtyValues?i.keepDefaultValues&&l?pe(n,l):t.dirtyFields:i.keepDefaultValues&&s?pe(n,s):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ze=(s,i)=>Ye(ie(s)?s(l):s,i);return{control:{register:we,unregister:Se,getFieldState:Ke,handleSubmit:Xe,setError:Ge,_executeSchema:B,_getWatch:x,_getDirty:_,_updateValid:I,_removeUnmounted:_e,_updateFieldArray:m,_updateDisabledField:Je,_getFieldArray:E,_reset:Ye,_resetDefaultValues:()=>ie(r.defaultValues)&&r.defaultValues().then(s=>{Ze(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Pt,_subjects:v,_proxyFormState:b,_setErrors:K,get _fields(){return a},get _formValues(){return l},get _state(){return y},set _state(s){y=s},get _defaultValues(){return n},get _names(){return h},set _names(s){h=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:fe,register:we,handleSubmit:Xe,watch:Rt,setValue:H,getValues:We,reset:Ze,resetField:Lt,clearErrors:Et,unregister:Se,setError:Ge,setFocus:(s,i={})=>{const o=c(a,s),f=o&&o._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},getFieldState:Ke}}function Mr(e={}){const r=A.useRef(),t=A.useRef(),[a,n]=A.useState({isDirty:!1,isValidating:!1,isLoading:ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ie(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Cr(e),formState:a});const l=r.current.control;return l._options=e,qe({subject:l._subjects.state,next:y=>{xt(y,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),A.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),A.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==a.isDirty&&l._subjects.state.next({isDirty:y})}},[l,a.isDirty]),A.useEffect(()=>{e.values&&!ae(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),A.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),A.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),A.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),r.current.formState=pt(a,l),r.current}export{Lr as C,Pr as F,Rr as a,nr as d,Mr as u};
