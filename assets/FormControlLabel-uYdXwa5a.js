import{U as M,j as a,y as N,z as q,A as B,b3 as O,aO as A,E as b,F as n,W as V,r as x,Q as E,_ as T,I as j,K as U,b4 as D,b5 as W,T as _,b0 as w}from"./index-1svpJYwy.js";const K=M(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Q=M(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),G=M(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function J(e){return q("MuiCheckbox",e)}const R=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),X=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Y=e=>{const{classes:o,indeterminate:r,color:s,size:l}=e,t={root:["root",r&&"indeterminate",`color${b(s)}`,`size${b(l)}`]},c=U(t,J,o);return n({},o,c)},Z=B(O,{shouldForwardProp:e=>A(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.indeterminate&&o.indeterminate,o[`size${b(r.size)}`],r.color!=="default"&&o[`color${b(r.color)}`]]}})(({theme:e,ownerState:o})=>n({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:V(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${R.checked}, &.${R.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${R.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ee=a.jsx(Q,{}),oe=a.jsx(K,{}),re=a.jsx(G,{}),ie=x.forwardRef(function(o,r){var s,l;const t=E({props:o,name:"MuiCheckbox"}),{checkedIcon:c=ee,color:y="primary",icon:d=oe,indeterminate:i=!1,indeterminateIcon:v=re,inputProps:$,size:h="medium",className:k}=t,z=T(t,X),P=i?v:d,p=i?v:c,C=n({},t,{color:y,indeterminate:i,size:h}),m=Y(C);return a.jsx(Z,n({type:"checkbox",inputProps:n({"data-indeterminate":i},$),icon:x.cloneElement(P,{fontSize:(s=P.props.fontSize)!=null?s:h}),checkedIcon:x.cloneElement(p,{fontSize:(l=p.props.fontSize)!=null?l:h}),ownerState:C,ref:r,className:j(m.root,k)},z,{classes:m}))});function te(e){return q("MuiFormControlLabel",e)}const f=N("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ae=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],le=e=>{const{classes:o,disabled:r,labelPlacement:s,error:l,required:t}=e,c={root:["root",r&&"disabled",`labelPlacement${b(s)}`,l&&"error",t&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",l&&"error"]};return U(c,te,o)},se=B("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${f.label}`]:o.label},o.root,o[`labelPlacement${b(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>n({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${f.label}`]:{[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ne=B("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${f.error}`]:{color:(e.vars||e).palette.error.main}})),de=x.forwardRef(function(o,r){var s,l;const t=E({props:o,name:"MuiFormControlLabel"}),{className:c,componentsProps:y={},control:d,disabled:i,disableTypography:v,label:$,labelPlacement:h="end",required:k,slotProps:z={}}=t,P=T(t,ae),p=D(),C=(s=i??d.props.disabled)!=null?s:p==null?void 0:p.disabled,m=k??d.props.required,S={disabled:C,required:m};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof d.props[g]>"u"&&typeof t[g]<"u"&&(S[g]=t[g])});const H=W({props:t,muiFormControl:p,states:["error"]}),I=n({},t,{disabled:C,labelPlacement:h,required:m,error:H.error}),L=le(I),F=(l=z.typography)!=null?l:y.typography;let u=$;return u!=null&&u.type!==_&&!v&&(u=a.jsx(_,n({component:"span"},F,{className:j(L.label,F==null?void 0:F.className),children:u}))),a.jsxs(se,n({className:j(L.root,c),ownerState:I,ref:r},P,{children:[x.cloneElement(d,S),m?a.jsxs(w,{display:"block",children:[u,a.jsxs(ne,{ownerState:I,"aria-hidden":!0,className:L.asterisk,children:[" ","*"]})]}):u]}))});export{ie as C,de as F};
