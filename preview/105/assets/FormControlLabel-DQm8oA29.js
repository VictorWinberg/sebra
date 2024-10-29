import{aC as E,aD as D,P as j,an as ee,aB as l,b5 as W,r as F,az as H,aH as oe,bi as G,j as r,aE as _,aR as x,aG as U,Z as T,aY as te,aS as Y,bH as ae,T as A,ab as se}from"./index-D7kQbbEZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="52c9b080-6dfe-4166-a14c-3446191caee3",e._sentryDebugIdIdentifier="sentry-dbid-52c9b080-6dfe-4166-a14c-3446191caee3")}catch{}})();function ne(e){return E("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const re=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:t,disabled:n,edge:s}=e,a={root:["root",t&&"checked",n&&"disabled",s&&`edge${x(s)}`],input:["input"]};return U(a,ne,o)},ce=j(ee)(({ownerState:e})=>l({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ie=j("input",{shouldForwardProp:W})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=F.forwardRef(function(o,t){const{autoFocus:n,checked:s,checkedIcon:a,className:i,defaultChecked:v,disabled:b,disableFocusRipple:c=!1,edge:y=!1,icon:R,id:g,inputProps:P,inputRef:$,name:I,onBlur:d,onChange:m,onFocus:u,readOnly:w,required:M=!1,tabIndex:z,type:h,value:B}=o,f=H(o,re),[k,Z]=oe({controlled:s,default:!!v,name:"SwitchBase",state:"checked"}),C=G(),J=p=>{u&&u(p),C&&C.onFocus&&C.onFocus(p)},K=p=>{d&&d(p),C&&C.onBlur&&C.onBlur(p)},Q=p=>{if(p.nativeEvent.defaultPrevented)return;const V=p.target.checked;Z(V),m&&m(p,V)};let L=b;C&&typeof L>"u"&&(L=C.disabled);const X=h==="checkbox"||h==="radio",N=l({},o,{checked:k,disabled:L,disableFocusRipple:c,edge:y}),O=le(N);return r.jsxs(ce,l({component:"span",className:_(O.root,i),centerRipple:!0,focusRipple:!c,disabled:L,tabIndex:null,role:void 0,onFocus:J,onBlur:K,ownerState:N,ref:t},f,{children:[r.jsx(ie,l({autoFocus:n,checked:s,defaultChecked:v,className:O.input,disabled:L,id:X?g:void 0,name:I,onChange:Q,readOnly:w,ref:$,required:M,ownerState:N,tabIndex:z,type:h},h==="checkbox"&&B===void 0?{}:{value:B},P)),k?a:R]}))}),ue=T(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),pe=T(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),be=T(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function me(e){return E("MuiCheckbox",e)}const q=D("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),he=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fe=e=>{const{classes:o,indeterminate:t,color:n,size:s}=e,a={root:["root",t&&"indeterminate",`color${x(n)}`,`size${x(s)}`]},i=U(a,me,o);return l({},o,i)},Ce=j(de,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>l({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:te(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${q.checked}, &.${q.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${q.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ge=r.jsx(pe,{}),ke=r.jsx(ue,{}),xe=r.jsx(be,{}),Re=F.forwardRef(function(o,t){var n,s;const a=Y({props:o,name:"MuiCheckbox"}),{checkedIcon:i=ge,color:v="primary",icon:b=ke,indeterminate:c=!1,indeterminateIcon:y=xe,inputProps:R,size:g="medium",className:P}=a,$=H(a,he),I=c?y:b,d=c?y:i,m=l({},a,{color:v,indeterminate:c,size:g}),u=fe(m);return r.jsx(Ce,l({type:"checkbox",inputProps:l({"data-indeterminate":c},R),icon:F.cloneElement(I,{fontSize:(n=I.props.fontSize)!=null?n:g}),checkedIcon:F.cloneElement(d,{fontSize:(s=d.props.fontSize)!=null?s:g}),ownerState:m,ref:t,className:_(u.root,P)},$,{classes:u}))});function ve(e){return E("MuiFormControlLabel",e)}const S=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ye=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Pe=e=>{const{classes:o,disabled:t,labelPlacement:n,error:s,required:a}=e,i={root:["root",t&&"disabled",`labelPlacement${x(n)}`,s&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",s&&"error"]};return U(i,ve,o)},Ie=j("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${S.label}`]:o.label},o.root,o[`labelPlacement${x(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>l({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${S.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${S.label}`]:{[`&.${S.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Be=j("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}})),$e=F.forwardRef(function(o,t){var n,s;const a=Y({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:v={},control:b,disabled:c,disableTypography:y,label:R,labelPlacement:g="end",required:P,slotProps:$={}}=a,I=H(a,ye),d=G(),m=(n=c??b.props.disabled)!=null?n:d==null?void 0:d.disabled,u=P??b.props.required,w={disabled:m,required:u};["checked","name","onChange","value","inputRef"].forEach(k=>{typeof b.props[k]>"u"&&typeof a[k]<"u"&&(w[k]=a[k])});const M=ae({props:a,muiFormControl:d,states:["error"]}),z=l({},a,{disabled:m,labelPlacement:g,required:u,error:M.error}),h=Pe(z),B=(s=$.typography)!=null?s:v.typography;let f=R;return f!=null&&f.type!==A&&!y&&(f=r.jsx(A,l({component:"span"},B,{className:_(h.label,B==null?void 0:B.className),children:f}))),r.jsxs(Ie,l({className:_(h.root,i),ownerState:z,ref:t},I,{children:[F.cloneElement(b,w),u?r.jsxs(se,{display:"block",children:[f,r.jsxs(Be,{ownerState:z,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}):f]}))});export{Re as C,$e as F,de as S};
//# sourceMappingURL=FormControlLabel-DQm8oA29.js.map