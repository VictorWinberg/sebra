import{K as q,j as n,V as L,n as Q,p as _,t as p,W as P,X as U,Y as H,Z as N,f as R,r as m,B as S,G as h,w as F,S as O}from"./index-CCoyQ5Fl.js";import{v as M,p as W,u as x,c as w,e as E,A as z}from"./useSnackbar-DtZAqGvd.js";import{u as A,C as g}from"./index.esm-DNhKaJpn.js";import{F as T,s as V}from"./FlexGrow-C7TTiM9g.js";const C=q(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),$=q(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),B=async e=>await L("document_references",e),K=async e=>{M(e,["documentId","entityType","entityId"]),await Q("document_references",W(e,["documentId","entityType","entityId"]))},G=async({row:e,where:t})=>{await I(t),await K(e)},I=async e=>{await _("document_references",W(e,["documentId","entityType","entityId"]))},ce=()=>{const e=p(),{showSnackbar:t}=x();return w({mutationFn:P,onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),t("Dokumentet sparat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle sparas.","error")}})},ue=()=>{const e=p(),{showSnackbar:t}=x();return w({mutationFn:r=>Promise.all([U(r),I(r)]),onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),e.invalidateQueries({queryKey:["document_references"]}),t("Dokumentet borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},ie=()=>{const e=p(),{showSnackbar:t}=x();return w({mutationFn:K,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument skapat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle skapas.","error")}})},ae=()=>{const e=p(),{showSnackbar:t}=x();return w({mutationFn:G,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument uppdaterat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},de=()=>{const e=p(),{showSnackbar:t}=x();return w({mutationFn:I,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},Y=()=>E({queryKey:["documents"],queryFn:H}),le=e=>E({queryKey:["documents",e],queryFn:()=>N(e),enabled:!!e}),me=e=>E({queryKey:["document_references",e],queryFn:()=>B(e),enabled:e&&Object.keys(e).length>0}),X=({onChange:e,children:t,...r})=>{const a=i=>{var f;const l=(f=i.target.files)==null?void 0:f[0];l&&(e==null||e(l))};return n.jsxs(R,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:n.jsx($,{}),...r,children:[t,n.jsx("input",{type:"file",style:{display:"none"},onChange:a})]})};function Z(){const[e,t]=m.useState([window.innerWidth,window.innerHeight]);return m.useEffect(()=>{const r=J(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const J=(e,t)=>{let r;return(...a)=>{let i;return clearTimeout(r),r=setTimeout(()=>{i=e(...a)},t),i}},ee=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],te=({file:e})=>{const t=Z(),r=m.useRef(null),[a,i]=m.useState();if(m.useEffect(()=>{e&&ee.some(u=>e.type.match(u))?i(URL.createObjectURL(e)):i(void 0)},[e]),!e||!a)return null;const l=()=>{if(r.current&&r.current.contentWindow){const u=r.current,j=r.current.contentWindow.document,k=u.clientHeight,d=u.clientWidth,D=j.documentElement.scrollHeight,o=j.documentElement.scrollWidth,b=d/o,c=k/D,s=Math.min(b,c);u.style.transform=`scale(${s})`,u.style.transformOrigin="top left",u.style.width=`${o}px`,u.style.height=`${D}px`}},f=()=>e.type.startsWith("image/")?n.jsx("img",{src:a,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):n.jsx("iframe",{ref:r,src:a,title:"Preview",onLoad:l,style:{width:"100%",height:"33vh",border:"none"}},`${t}`);return n.jsx(S,{sx:{mx:-1,overflow:"hidden"},children:n.jsx(S,{sx:{width:"100%",height:"33vh",px:1},children:f()},a)})},fe=({onSubmit:e=()=>{},onChange:t,formProps:r,enableExistingDocuments:a,renderTopContent:i,renderBottomContent:l,...f})=>{const{data:u=[]}=Y(),{control:v,handleSubmit:j,watch:k,setValue:d,formState:{errors:D}}=A(r),o=k();m.useEffect(()=>{t==null||t(o)},[t,o]);const b=c=>{d("documentName",c.name),d("content",c)};return m.useEffect(()=>{if(o.documentId){const c=u.find(s=>s.documentId===o.documentId);c&&(d("documentName",c.documentName),d("content",c.content))}else d("documentName",""),d("content",void 0)},[o.documentId,d,u]),n.jsx(T,{...f,children:n.jsxs("form",{onSubmit:j(e),style:{...V},children:[i==null?void 0:i(),n.jsxs(h,{container:!0,spacing:2,children:[n.jsx(h,{item:!0,xs:12,sm:6,children:n.jsx(g,{control:v,name:"documentName",rules:{required:!0},defaultValue:"",render:({field:c,fieldState:s})=>n.jsx(F,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...c,error:!!s.error})})}),n.jsx(h,{item:!0,xs:12,sm:6,children:n.jsx(g,{control:v,name:"content",rules:{required:!0},render:({field:c})=>{var s,y;return n.jsx(F,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((s=c.value)==null?void 0:s.name)||"",disabled:!0,error:!!D.content,InputProps:{endAdornment:(y=o.content)==null?void 0:y.type}})}})}),a&&n.jsx(h,{item:!0,xs:12,children:n.jsx(g,{name:"documentId",control:v,render:({field:c})=>n.jsx(z,{options:u,getOptionKey:s=>s.documentId,getOptionLabel:s=>s.documentName,value:u.find(s=>s.documentId===c.value)||null,onChange:(s,y)=>c.onChange(y?y.documentId:void 0),renderInput:s=>n.jsx(F,{...s,label:"Existerande dokument",variant:"outlined",fullWidth:!0})})})}),n.jsx(h,{item:!0,xs:12,children:n.jsx(te,{file:o.content})}),n.jsx(h,{item:!0,xs:12,children:n.jsxs(O,{spacing:2,direction:"row",children:[n.jsx(X,{onChange:b,children:o.content?"Ersätt dokument":"Välj dokument"}),n.jsx(R,{startIcon:n.jsx(C,{}),variant:"contained",href:o.content?URL.createObjectURL(o.content):"#",download:o.documentName,disabled:!o.content,children:"Ladda ner"})]})})]}),l==null?void 0:l()]})})};export{fe as D,ce as a,ie as b,de as c,me as d,ue as e,le as f,ae as g,Y as u};