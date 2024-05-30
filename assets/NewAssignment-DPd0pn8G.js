var Ie=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)};var V=(e,r,t)=>(Ie(e,r,"read from private field"),t?t.call(e):r.get(e)),ie=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},oe=(e,r,t,n)=>(Ie(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t);var ce=(e,r,t)=>(Ie(e,r,"access private method"),t);import{S as Mt,s as Ut,h as at,g as Bt,n as mt,i as xt,r as me,R as q,j as E,T as Nt,B as ut,G as fe,k as xe,f as jt}from"./index-1svpJYwy.js";import{n as It,s as Pt}from"./utils-km2FGkQ4.js";import{c as qt}from"./assignmentsApi-wGO1PWMn.js";import{A as Wt}from"./Autocomplete-Id9QKEys.js";import"./IconButton-CF1nXYwE.js";var ee,te,L,z,he,ke,Fe,He,bt,Kt=(bt=class extends Mt{constructor(r,t){super();ie(this,he);ie(this,Fe);ie(this,ee,void 0);ie(this,te,void 0);ie(this,L,void 0);ie(this,z,void 0);oe(this,ee,r),this.setOptions(t),this.bindMethods(),ce(this,he,ke).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(r){var n;const t=this.options;this.options=V(this,ee).defaultMutationOptions(r),Ut(this.options,t)||V(this,ee).getMutationCache().notify({type:"observerOptionsUpdated",mutation:V(this,L),observer:this}),t!=null&&t.mutationKey&&this.options.mutationKey&&at(t.mutationKey)!==at(this.options.mutationKey)?this.reset():((n=V(this,L))==null?void 0:n.state.status)==="pending"&&V(this,L).setOptions(this.options)}onUnsubscribe(){var r;this.hasListeners()||(r=V(this,L))==null||r.removeObserver(this)}onMutationUpdate(r){ce(this,he,ke).call(this),ce(this,Fe,He).call(this,r)}getCurrentResult(){return V(this,te)}reset(){var r;(r=V(this,L))==null||r.removeObserver(this),oe(this,L,void 0),ce(this,he,ke).call(this),ce(this,Fe,He).call(this)}mutate(r,t){var n;return oe(this,z,t),(n=V(this,L))==null||n.removeObserver(this),oe(this,L,V(this,ee).getMutationCache().build(V(this,ee),this.options)),V(this,L).addObserver(this),V(this,L).execute(r)}},ee=new WeakMap,te=new WeakMap,L=new WeakMap,z=new WeakMap,he=new WeakSet,ke=function(){var t;const r=((t=V(this,L))==null?void 0:t.state)??Bt();oe(this,te,{...r,isPending:r.status==="pending",isSuccess:r.status==="success",isError:r.status==="error",isIdle:r.status==="idle",mutate:this.mutate,reset:this.reset})},Fe=new WeakSet,He=function(r){mt.batch(()=>{var t,n,l,u,y,g,T,M;if(V(this,z)&&this.hasListeners()){const A=V(this,te).variables,v=V(this,te).context;(r==null?void 0:r.type)==="success"?((n=(t=V(this,z)).onSuccess)==null||n.call(t,r.data,A,v),(u=(l=V(this,z)).onSettled)==null||u.call(l,r.data,null,A,v)):(r==null?void 0:r.type)==="error"&&((g=(y=V(this,z)).onError)==null||g.call(y,r.error,A,v),(M=(T=V(this,z)).onSettled)==null||M.call(T,void 0,r.error,A,v))}this.listeners.forEach(A=>{A(V(this,te))})})},bt);function Ht(e,r){const t=xt(),[n]=me.useState(()=>new Kt(t,e));me.useEffect(()=>{n.setOptions(e)},[n,e]);const l=me.useSyncExternalStore(me.useCallback(y=>n.subscribe(mt.batchCalls(y)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),u=me.useCallback((y,g)=>{n.mutate(y,g).catch(It)},[n]);if(l.error&&Pt(n.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:u,mutateAsync:l.mutate}}var Ve=e=>e.type==="checkbox",ye=e=>e instanceof Date,R=e=>e==null;const _t=e=>typeof e=="object";var O=e=>!R(e)&&!Array.isArray(e)&&_t(e)&&!ye(e),$t=e=>O(e)&&e.target?Ve(e.target)?e.target.checked:e.target.value:e,Gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Qt=(e,r)=>e.has(Gt(r)),zt=e=>{const r=e.constructor&&e.constructor.prototype;return O(r)&&r.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function P(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(t||O(e)))if(r=t?[]:{},!t&&!zt(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=P(e[n]));else return e;return r}var we=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,r,t)=>{if(!r||!O(e))return t;const n=we(r.split(/[,[\].]+?/)).reduce((l,u)=>R(l)?l:l[u],e);return w(n)||n===e?w(e[r])?t:e[r]:n},Z=e=>typeof e=="boolean",Ge=e=>/^\w*$/.test(e),At=e=>we(e.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(e,r,t)=>{let n=-1;const l=Ge(r)?[r]:At(r),u=l.length,y=u-1;for(;++n<u;){const g=l[n];let T=t;if(n!==y){const M=e[g];T=O(M)||Array.isArray(M)?M:isNaN(+l[n+1])?{}:[]}if(g==="__proto__")return;e[g]=T,e=e[g]}return e};const lt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var Jt=(e,r,t,n=!0)=>{const l={defaultValues:r._defaultValues};for(const u in e)Object.defineProperty(l,u,{get:()=>{const y=u;return r._proxyFormState[y]!==K.all&&(r._proxyFormState[y]=!n||K.all),e[y]}});return l},N=e=>O(e)&&!Object.keys(e).length,Xt=(e,r,t,n)=>{t(e);const{name:l,...u}=e;return N(u)||Object.keys(u).length>=Object.keys(r).length||Object.keys(u).find(y=>r[y]===K.all)},Pe=e=>Array.isArray(e)?e:[e];function Yt(e){const r=q.useRef(e);r.current=e,q.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Zt=(e,r,t,n,l)=>H(e)?(n&&r.watch.add(e),d(t,e,l)):Array.isArray(e)?e.map(u=>(n&&r.watch.add(u),d(t,u))):(n&&(r.watchAll=!0),t),er=(e,r,t,n,l)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:l||!0}}:{},ot=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),ct=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Ae=(e,r,t,n)=>{for(const l of t||Object.keys(e)){const u=d(e,l);if(u){const{_f:y,...g}=u;if(y){if(y.refs&&y.refs[0]&&r(y.refs[0],l)&&!n)break;if(y.ref&&r(y.ref,y.name)&&!n)break;Ae(g,r)}else O(g)&&Ae(g,r)}}};var tr=(e,r,t)=>{const n=we(d(e,t));return F(n,"root",r[t]),F(e,t,n),e},Qe=e=>e.type==="file",re=e=>typeof e=="function",Ce=e=>{if(!$e)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Oe=e=>H(e),ze=e=>e.type==="radio",Re=e=>e instanceof RegExp;const ft={value:!1,isValid:!1},dt={value:!0,isValid:!0};var Ft=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?dt:{value:e[0].value,isValid:!0}:dt:ft}return ft};const yt={isValid:!1,value:null};var Vt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,yt):yt;function ht(e,r,t="validate"){if(Oe(e)||Array.isArray(e)&&e.every(Oe)||Z(e)&&!e)return{type:t,message:Oe(e)?e:"",ref:r}}var de=e=>O(e)&&!Re(e)?e:{value:e,message:""},gt=async(e,r,t,n,l)=>{const{ref:u,refs:y,required:g,maxLength:T,minLength:M,min:A,max:v,pattern:pe,validate:J,name:U,valueAsNumber:Me,mount:X,disabled:Y}=e._f,m=d(r,U);if(!X||Y)return{};const $=y?y[0]:u,G=b=>{n&&$.reportValidity&&($.setCustomValidity(Z(b)?"":b||""),$.reportValidity())},S={},ae=ze(u),Se=Ve(u),se=ae||Se,ue=(Me||Qe(u))&&w(u.value)&&w(m)||Ce(u)&&u.value===""||m===""||Array.isArray(m)&&!m.length,j=er.bind(null,U,t,S),De=(b,x,D,C=Q.maxLength,W=Q.minLength)=>{const I=b?x:D;S[U]={type:b?C:W,message:I,ref:u,...j(b?C:W,I)}};if(l?!Array.isArray(m)||!m.length:g&&(!se&&(ue||R(m))||Z(m)&&!m||Se&&!Ft(y).isValid||ae&&!Vt(y).isValid)){const{value:b,message:x}=Oe(g)?{value:!!g,message:g}:de(g);if(b&&(S[U]={type:Q.required,message:x,ref:$,...j(Q.required,x)},!t))return G(x),S}if(!ue&&(!R(A)||!R(v))){let b,x;const D=de(v),C=de(A);if(!R(m)&&!isNaN(m)){const W=u.valueAsNumber||m&&+m;R(D.value)||(b=W>D.value),R(C.value)||(x=W<C.value)}else{const W=u.valueAsDate||new Date(m),I=be=>new Date(new Date().toDateString()+" "+be),ge=u.type=="time",ve=u.type=="week";H(D.value)&&m&&(b=ge?I(m)>I(D.value):ve?m>D.value:W>new Date(D.value)),H(C.value)&&m&&(x=ge?I(m)<I(C.value):ve?m<C.value:W<new Date(C.value))}if((b||x)&&(De(!!b,D.message,C.message,Q.max,Q.min),!t))return G(S[U].message),S}if((T||M)&&!ue&&(H(m)||l&&Array.isArray(m))){const b=de(T),x=de(M),D=!R(b.value)&&m.length>+b.value,C=!R(x.value)&&m.length<+x.value;if((D||C)&&(De(D,b.message,x.message),!t))return G(S[U].message),S}if(pe&&!ue&&H(m)){const{value:b,message:x}=de(pe);if(Re(b)&&!m.match(b)&&(S[U]={type:Q.pattern,message:x,ref:u,...j(Q.pattern,x)},!t))return G(x),S}if(J){if(re(J)){const b=await J(m,r),x=ht(b,$);if(x&&(S[U]={...x,...j(Q.validate,x.message)},!t))return G(x.message),S}else if(O(J)){let b={};for(const x in J){if(!N(b)&&!t)break;const D=ht(await J[x](m,r),$,x);D&&(b={...D,...j(x,D.message)},G(D.message),t&&(S[U]=b))}if(!N(b)&&(S[U]={ref:$,...b},!t))return S}}return G(!0),S};function rr(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=w(e)?n++:e[r[n++]];return e}function sr(e){for(const r in e)if(e.hasOwnProperty(r)&&!w(e[r]))return!1;return!0}function k(e,r){const t=Array.isArray(r)?r:Ge(r)?[r]:At(r),n=t.length===1?e:rr(e,t),l=t.length-1,u=t[l];return n&&delete n[u],l!==0&&(O(n)&&N(n)||Array.isArray(n)&&sr(n))&&k(e,t.slice(0,-1)),e}var qe=()=>{let e=[];return{get observers(){return e},next:l=>{for(const u of e)u.next&&u.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(u=>u!==l)}}),unsubscribe:()=>{e=[]}}},Te=e=>R(e)||!_t(e);function ne(e,r){if(Te(e)||Te(r))return e===r;if(ye(e)&&ye(r))return e.getTime()===r.getTime();const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const l of t){const u=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const y=r[l];if(ye(u)&&ye(y)||O(u)&&O(y)||Array.isArray(u)&&Array.isArray(y)?!ne(u,y):u!==y)return!1}}return!0}var wt=e=>e.type==="select-multiple",ir=e=>ze(e)||Ve(e),We=e=>Ce(e)&&e.isConnected,pt=e=>{for(const r in e)if(re(e[r]))return!0;return!1};function Le(e,r={}){const t=Array.isArray(e);if(O(e)||t)for(const n in e)Array.isArray(e[n])||O(e[n])&&!pt(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Le(e[n],r[n])):R(e[n])||(r[n]=!0);return r}function St(e,r,t){const n=Array.isArray(e);if(O(e)||n)for(const l in e)Array.isArray(e[l])||O(e[l])&&!pt(e[l])?w(r)||Te(t[l])?t[l]=Array.isArray(e[l])?Le(e[l],[]):{...Le(e[l])}:St(e[l],R(r)?{}:r[l],t[l]):t[l]=!ne(e[l],r[l]);return t}var Ee=(e,r)=>St(e,r,Le(r)),Dt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>w(e)?e:r?e===""?NaN:e&&+e:t&&H(e)?new Date(e):n?n(e):e;function Ke(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Qe(r)?r.files:ze(r)?Vt(e.refs).value:wt(r)?[...r.selectedOptions].map(({value:t})=>t):Ve(r)?Ft(e.refs).value:Dt(w(r.value)?e.ref.value:r.value,e)}var nr=(e,r,t,n)=>{const l={};for(const u of e){const y=d(r,u);y&&F(l,u,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:n}},_e=e=>w(e)?e:Re(e)?e.source:O(e)?Re(e.value)?e.value.source:e.value:e,ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function vt(e,r,t){const n=d(e,t);if(n||Ge(t))return{error:n,name:t};const l=t.split(".");for(;l.length;){const u=l.join("."),y=d(r,u),g=d(e,u);if(y&&!Array.isArray(y)&&t!==u)return{name:t};if(g&&g.type)return{name:u,error:g};l.pop()}return{name:t}}var ur=(e,r,t,n,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(r||e):(t?n.isOnBlur:l.isOnBlur)?!e:(t?n.isOnChange:l.isOnChange)?e:!0,lr=(e,r)=>!we(d(e,r)).length&&k(e,r);const or={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function cr(e={}){let r={...or,...e},t={submitCount:0,isDirty:!1,isLoading:re(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},l=O(r.defaultValues)||O(r.values)?P(r.defaultValues||r.values)||{}:{},u=r.shouldUnregister?{}:P(l),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,M=0;const A={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:qe(),array:qe(),state:qe()},pe=ot(r.mode),J=ot(r.reValidateMode),U=r.criteriaMode===K.all,Me=s=>i=>{clearTimeout(M),M=setTimeout(s,i)},X=async s=>{if(A.isValid||s){const i=r.resolver?N((await se()).errors):await j(n,!0);i!==t.isValid&&v.state.next({isValid:i})}},Y=(s,i)=>{(A.isValidating||A.validatingFields)&&((s||Array.from(g.mount)).forEach(a=>{a&&(i?F(t.validatingFields,a,i):k(t.validatingFields,a))}),v.state.next({validatingFields:t.validatingFields,isValidating:!N(t.validatingFields)}))},m=(s,i=[],a,f,c=!0,o=!0)=>{if(f&&a){if(y.action=!0,o&&Array.isArray(d(n,s))){const h=a(d(n,s),f.argA,f.argB);c&&F(n,s,h)}if(o&&Array.isArray(d(t.errors,s))){const h=a(d(t.errors,s),f.argA,f.argB);c&&F(t.errors,s,h),lr(t.errors,s)}if(A.touchedFields&&o&&Array.isArray(d(t.touchedFields,s))){const h=a(d(t.touchedFields,s),f.argA,f.argB);c&&F(t.touchedFields,s,h)}A.dirtyFields&&(t.dirtyFields=Ee(l,u)),v.state.next({name:s,isDirty:b(s,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else F(u,s,i)},$=(s,i)=>{F(t.errors,s,i),v.state.next({errors:t.errors})},G=s=>{t.errors=s,v.state.next({errors:t.errors,isValid:!1})},S=(s,i,a,f)=>{const c=d(n,s);if(c){const o=d(u,s,w(a)?d(l,s):a);w(o)||f&&f.defaultChecked||i?F(u,s,i?o:Ke(c._f)):C(s,o),y.mount&&X()}},ae=(s,i,a,f,c)=>{let o=!1,h=!1;const _={name:s},p=!!(d(n,s)&&d(n,s)._f.disabled);if(!a||f){A.isDirty&&(h=t.isDirty,t.isDirty=_.isDirty=b(),o=h!==_.isDirty);const B=p||ne(d(l,s),i);h=!!(!p&&d(t.dirtyFields,s)),B||p?k(t.dirtyFields,s):F(t.dirtyFields,s,!0),_.dirtyFields=t.dirtyFields,o=o||A.dirtyFields&&h!==!B}if(a){const B=d(t.touchedFields,s);B||(F(t.touchedFields,s,a),_.touchedFields=t.touchedFields,o=o||A.touchedFields&&B!==a)}return o&&c&&v.state.next(_),o?_:{}},Se=(s,i,a,f)=>{const c=d(t.errors,s),o=A.isValid&&Z(i)&&t.isValid!==i;if(e.delayError&&a?(T=Me(()=>$(s,a)),T(e.delayError)):(clearTimeout(M),T=null,a?F(t.errors,s,a):k(t.errors,s)),(a?!ne(c,a):c)||!N(f)||o){const h={...f,...o&&Z(i)?{isValid:i}:{},errors:t.errors,name:s};t={...t,...h},v.state.next(h)}},se=async s=>{Y(s,!0);const i=await r.resolver(u,r.context,nr(s||g.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return Y(s),i},ue=async s=>{const{errors:i}=await se(s);if(s)for(const a of s){const f=d(i,a);f?F(t.errors,a,f):k(t.errors,a)}else t.errors=i;return i},j=async(s,i,a={valid:!0})=>{for(const f in s){const c=s[f];if(c){const{_f:o,...h}=c;if(o){const _=g.array.has(o.name);Y([f],!0);const p=await gt(c,u,U,r.shouldUseNativeValidation&&!i,_);if(Y([f]),p[o.name]&&(a.valid=!1,i))break;!i&&(d(p,o.name)?_?tr(t.errors,p,o.name):F(t.errors,o.name,p[o.name]):k(t.errors,o.name))}h&&await j(h,i,a)}}return a.valid},De=()=>{for(const s of g.unMount){const i=d(n,s);i&&(i._f.refs?i._f.refs.every(a=>!We(a)):!We(i._f.ref))&&Ue(s)}g.unMount=new Set},b=(s,i)=>(s&&i&&F(u,s,i),!ne(Je(),l)),x=(s,i,a)=>Zt(s,g,{...y.mount?u:w(i)?l:H(s)?{[s]:i}:i},a,i),D=s=>we(d(y.mount?u:l,s,e.shouldUnregister?d(l,s,[]):[])),C=(s,i,a={})=>{const f=d(n,s);let c=i;if(f){const o=f._f;o&&(!o.disabled&&F(u,s,Dt(i,o)),c=Ce(o.ref)&&R(i)?"":i,wt(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?Ve(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(_=>_===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Qe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:s,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ae(s,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&be(s)},W=(s,i,a)=>{for(const f in i){const c=i[f],o=`${s}.${f}`,h=d(n,o);(g.array.has(s)||!Te(c)||h&&!h._f)&&!ye(c)?W(o,c,a):C(o,c,a)}},I=(s,i,a={})=>{const f=d(n,s),c=g.array.has(s),o=P(i);F(u,s,o),c?(v.array.next({name:s,values:{...u}}),(A.isDirty||A.dirtyFields)&&a.shouldDirty&&v.state.next({name:s,dirtyFields:Ee(l,u),isDirty:b(s,o)})):f&&!f._f&&!R(o)?W(s,o,a):C(s,o,a),ct(s,g)&&v.state.next({...t}),v.values.next({name:y.mount?s:void 0,values:{...u}})},ge=async s=>{y.mount=!0;const i=s.target;let a=i.name,f=!0;const c=d(n,a),o=()=>i.type?Ke(c._f):$t(s),h=_=>{f=Number.isNaN(_)||_===d(u,a,_)};if(c){let _,p;const B=o(),le=s.type===lt.BLUR||s.type===lt.FOCUS_OUT,Rt=!ar(c._f)&&!r.resolver&&!d(t.errors,a)&&!c._f.deps||ur(le,d(t.touchedFields,a),t.isSubmitted,J,pe),Ne=ct(a,g,le);F(u,a,B),le?(c._f.onBlur&&c._f.onBlur(s),T&&T(0)):c._f.onChange&&c._f.onChange(s);const je=ae(a,B,le,!1),Tt=!N(je)||Ne;if(!le&&v.values.next({name:a,type:s.type,values:{...u}}),Rt)return A.isValid&&X(),Tt&&v.state.next({name:a,...Ne?{}:je});if(!le&&Ne&&v.state.next({...t}),r.resolver){const{errors:it}=await se([a]);if(h(B),f){const Lt=vt(t.errors,n,a),nt=vt(it,n,Lt.name||a);_=nt.error,a=nt.name,p=N(it)}}else Y([a],!0),_=(await gt(c,u,U,r.shouldUseNativeValidation))[a],Y([a]),h(B),f&&(_?p=!1:A.isValid&&(p=await j(n,!0)));f&&(c._f.deps&&be(c._f.deps),Se(a,p,_,je))}},ve=(s,i)=>{if(d(t.errors,i)&&s.focus)return s.focus(),1},be=async(s,i={})=>{let a,f;const c=Pe(s);if(r.resolver){const o=await ue(w(s)?s:c);a=N(o),f=s?!c.some(h=>d(o,h)):a}else s?(f=(await Promise.all(c.map(async o=>{const h=d(n,o);return await j(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!f&&!t.isValid)&&X()):f=a=await j(n);return v.state.next({...!H(s)||A.isValid&&a!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:a}:{},errors:t.errors}),i.shouldFocus&&!f&&Ae(n,ve,s?c:g.mount),f},Je=s=>{const i={...y.mount?u:l};return w(s)?i:H(s)?d(i,s):s.map(a=>d(i,a))},Xe=(s,i)=>({invalid:!!d((i||t).errors,s),isDirty:!!d((i||t).dirtyFields,s),isTouched:!!d((i||t).touchedFields,s),isValidating:!!d((i||t).validatingFields,s),error:d((i||t).errors,s)}),Et=s=>{s&&Pe(s).forEach(i=>k(t.errors,i)),v.state.next({errors:s?t.errors:{}})},Ye=(s,i,a)=>{const f=(d(n,s,{_f:{}})._f||{}).ref,c=d(t.errors,s)||{},{ref:o,message:h,type:_,...p}=c;F(t.errors,s,{...p,...i,ref:f}),v.state.next({name:s,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},kt=(s,i)=>re(s)?v.values.subscribe({next:a=>s(x(void 0,i),a)}):x(s,i,!0),Ue=(s,i={})=>{for(const a of s?Pe(s):g.mount)g.mount.delete(a),g.array.delete(a),i.keepValue||(k(n,a),k(u,a)),!i.keepError&&k(t.errors,a),!i.keepDirty&&k(t.dirtyFields,a),!i.keepTouched&&k(t.touchedFields,a),!i.keepIsValidating&&k(t.validatingFields,a),!r.shouldUnregister&&!i.keepDefaultValue&&k(l,a);v.values.next({values:{...u}}),v.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&X()},Ze=({disabled:s,name:i,field:a,fields:f,value:c})=>{if(Z(s)&&y.mount||s){const o=s?void 0:w(c)?Ke(a?a._f:d(f,i)._f):c;F(u,i,o),ae(i,o,!1,!1,!0)}},Be=(s,i={})=>{let a=d(n,s);const f=Z(i.disabled);return F(n,s,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:s}},name:s,mount:!0,...i}}),g.mount.add(s),a?Ze({field:a,disabled:i.disabled,name:s,value:i.value}):S(s,!0,i.value),{...f?{disabled:i.disabled}:{},...r.progressive?{required:!!i.required,min:_e(i.min),max:_e(i.max),minLength:_e(i.minLength),maxLength:_e(i.maxLength),pattern:_e(i.pattern)}:{},name:s,onChange:ge,onBlur:ge,ref:c=>{if(c){Be(s,i),a=d(n,s);const o=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=ir(o),_=a._f.refs||[];if(h?_.find(p=>p===o):o===a._f.ref)return;F(n,s,{_f:{...a._f,...h?{refs:[..._.filter(We),o,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),S(s,!1,void 0,o)}else a=d(n,s,{}),a._f&&(a._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(Qt(g.array,s)&&y.action)&&g.unMount.add(s)}}},et=()=>r.shouldFocusError&&Ae(n,ve,g.mount),Ot=s=>{Z(s)&&(v.state.next({disabled:s}),Ae(n,(i,a)=>{const f=d(n,a);f&&(i.disabled=f._f.disabled||s,Array.isArray(f._f.refs)&&f._f.refs.forEach(c=>{c.disabled=f._f.disabled||s}))},0,!1))},tt=(s,i)=>async a=>{let f;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=P(u);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:o,values:h}=await se();t.errors=o,c=h}else await j(n);if(k(t.errors,"root"),N(t.errors)){v.state.next({errors:{}});try{await s(c,a)}catch(o){f=o}}else i&&await i({...t.errors},a),et(),setTimeout(et);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},Ct=(s,i={})=>{d(n,s)&&(w(i.defaultValue)?I(s,P(d(l,s))):(I(s,i.defaultValue),F(l,s,P(i.defaultValue))),i.keepTouched||k(t.touchedFields,s),i.keepDirty||(k(t.dirtyFields,s),t.isDirty=i.defaultValue?b(s,P(d(l,s))):b()),i.keepError||(k(t.errors,s),A.isValid&&X()),v.state.next({...t}))},rt=(s,i={})=>{const a=s?P(s):l,f=P(a),c=N(s),o=c?l:f;if(i.keepDefaultValues||(l=a),!i.keepValues){if(i.keepDirtyValues)for(const h of g.mount)d(t.dirtyFields,h)?F(o,h,d(u,h)):I(h,d(o,h));else{if($e&&w(s))for(const h of g.mount){const _=d(n,h);if(_&&_._f){const p=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(Ce(p)){const B=p.closest("form");if(B){B.reset();break}}}}n={}}u=e.shouldUnregister?i.keepDefaultValues?P(l):{}:P(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!A.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ne(s,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&u?Ee(l,u):t.dirtyFields:i.keepDefaultValues&&s?Ee(l,s):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},st=(s,i)=>rt(re(s)?s(u):s,i);return{control:{register:Be,unregister:Ue,getFieldState:Xe,handleSubmit:tt,setError:Ye,_executeSchema:se,_getWatch:x,_getDirty:b,_updateValid:X,_removeUnmounted:De,_updateFieldArray:m,_updateDisabledField:Ze,_getFieldArray:D,_reset:rt,_resetDefaultValues:()=>re(r.defaultValues)&&r.defaultValues().then(s=>{st(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Ot,_subjects:v,_proxyFormState:A,_setErrors:G,get _fields(){return n},get _formValues(){return u},get _state(){return y},set _state(s){y=s},get _defaultValues(){return l},get _names(){return g},set _names(s){g=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:be,register:Be,handleSubmit:tt,watch:kt,setValue:I,getValues:Je,reset:st,resetField:Ct,clearErrors:Et,unregister:Ue,setError:Ye,setFocus:(s,i={})=>{const a=d(n,s),f=a&&a._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Xe}}function fr(e={}){const r=q.useRef(),t=q.useRef(),[n,l]=q.useState({isDirty:!1,isValidating:!1,isLoading:re(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:re(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...cr(e),formState:n});const u=r.current.control;return u._options=e,Yt({subject:u._subjects.state,next:y=>{Xt(y,u._proxyFormState,u._updateFormState)&&l({...u._formState})}}),q.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),q.useEffect(()=>{if(u._proxyFormState.isDirty){const y=u._getDirty();y!==n.isDirty&&u._subjects.state.next({isDirty:y})}},[u,n.isDirty]),q.useEffect(()=>{e.values&&!ne(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values,l(y=>({...y}))):u._resetDefaultValues()},[e.values,u]),q.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),q.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),q.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),r.current.formState=Jt(n,u),r.current}const dr=()=>{const e=xt();return Ht({mutationFn:qt,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]})}})},Vr=()=>{const{mutate:e}=dr(),{register:r,handleSubmit:t}=fr();return E.jsxs(E.Fragment,{children:[E.jsx(Nt,{variant:"h4",color:"primary",children:"Lägg till uppdrag"}),E.jsx(ut,{sx:{my:1}}),E.jsxs("form",{onSubmit:t(n=>e(n)),children:[E.jsxs(fe,{container:!0,spacing:3,children:[E.jsx(fe,{item:!0,xs:12,sm:6,children:E.jsx(xe,{fullWidth:!0,label:"Uppdragsnamn",type:"text",margin:"none",...r("assignmentName")})}),E.jsx(fe,{item:!0,xs:12,sm:6,children:E.jsx(xe,{fullWidth:!0,label:"Uppdragsgivare",type:"text",margin:"none",...r("contactId")})}),E.jsx(fe,{item:!0,xs:12,sm:6,children:E.jsx(Wt,{multiple:!0,options:yr,renderInput:n=>E.jsx(xe,{...n,label:"Fastigheter",type:"text",...r("relevantFiles")}),limitTags:2,disableCloseOnSelect:!0})}),E.jsx(fe,{item:!0,xs:12,sm:6,children:E.jsx(xe,{fullWidth:!0,label:"Status",margin:"none",type:"text",...r("status")})}),E.jsx(fe,{item:!0,xs:12,sm:6,children:E.jsx(xe,{fullWidth:!0,label:"Arvode",margin:"none",type:"text",...r("fee")})})]}),E.jsx(ut,{sx:{mt:3},children:E.jsx(jt,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})})]})]})},yr=[{label:"Företaget"},{label:"BRF Sjöstadshöjden"},{label:"Bil & Bostad AB"},{label:"Hemfosa Fastigheter AB"},{label:"Svenska Bostäder"},{label:"Wallenstam AB"},{label:"Skanska"},{label:"JM AB"}];export{Vr as default};