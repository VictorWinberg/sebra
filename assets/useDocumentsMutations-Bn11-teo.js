import{o as S,j as n,f as q,r as h,B as I,y as C,q as L,v as Q,z as _,A as H,G as p,m as k,S as K,n as y,E as P,H as U}from"./index-t4rhldu7.js";import{u as T,C as b}from"./index.esm-DLf0gF--.js";import{F as B,s as N}from"./FlexGrow-6vHfXHbX.js";import{v as O,p as R,g,A as z,u as x,e as w}from"./useSnackbar-1At0ini6.js";const A=S(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),M=S(n.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),V=({onChange:e,children:t,...r})=>{const u=d=>{var m;const l=(m=d.target.files)==null?void 0:m[0];l&&(e==null||e(l))};return n.jsxs(q,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:n.jsx(M,{}),...r,children:[t,n.jsx("input",{type:"file",style:{display:"none"},onChange:u})]})};function $(){const[e,t]=h.useState([window.innerWidth,window.innerHeight]);return h.useEffect(()=>{const r=G(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const G=(e,t)=>{let r;return(...u)=>{let d;return clearTimeout(r),r=setTimeout(()=>{d=e(...u)},t),d}},Y=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],X=({file:e})=>{const t=$(),r=h.useRef(null),[u,d]=h.useState();if(h.useEffect(()=>{e&&Y.some(i=>e.type.match(i))?d(URL.createObjectURL(e)):d(void 0)},[e]),!e||!u)return null;const l=()=>{if(r.current&&r.current.contentWindow){const i=r.current,a=r.current.contentWindow.document,j=i.clientHeight,D=i.clientWidth,s=a.documentElement.scrollHeight,v=a.documentElement.scrollWidth,c=D/v,o=j/s,f=Math.min(c,o);i.style.transform=`scale(${f})`,i.style.transformOrigin="top left",i.style.width=`${v}px`,i.style.height=`${s}px`}},m=()=>e.type.startsWith("image/")?n.jsx("img",{src:u,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):n.jsx("iframe",{ref:r,src:u,title:"Preview",onLoad:l,style:{width:"100%",height:"33vh",border:"none"}},`${t}`);return n.jsx(I,{sx:{mx:-1,overflow:"hidden"},children:n.jsx(I,{sx:{width:"100%",height:"33vh",px:1},children:m()},u)})},J=async e=>await C("document_references",e),W=async e=>{O(e,["documentId","entityType","entityId"]),await L("document_references",R(e,["documentId","entityType","entityId"]))},Z=async({row:e,where:t})=>{await F(t),await W(e)},F=async e=>{await Q("document_references",R(e,["documentId","entityType","entityId"]))},ee=()=>g({queryKey:["documents"],queryFn:_}),se=e=>g({queryKey:["documents",e],queryFn:()=>H(e),enabled:!!e}),ce=e=>g({queryKey:["document_references",e],queryFn:()=>J(e),enabled:e&&Object.keys(e).length>0}),ue=({onSubmit:e=()=>{},onChange:t,formProps:r,children:u,...d})=>{const{data:l=[]}=ee(),{control:m,handleSubmit:i,watch:E,setValue:a,formState:{errors:j,defaultValues:{documentId:D}={}}}=T(r),s=E();h.useEffect(()=>{t==null||t(s)},[t,s]);const v=c=>{a("documentName",c.name),a("content",c)};return h.useEffect(()=>{if(s.documentId){const c=l.find(o=>o.documentId===s.documentId);c&&(a("documentName",c.documentName),a("content",c.content))}else a("documentName",""),a("content",void 0)},[s.documentId,a,l]),n.jsx(B,{...d,children:n.jsxs("form",{onSubmit:i(e),style:{...N},children:[n.jsxs(p,{container:!0,spacing:2,children:[n.jsx(p,{item:!0,xs:12,sm:6,children:n.jsx(b,{control:m,name:"documentName",rules:{required:!0},defaultValue:"",render:({field:c,fieldState:o})=>n.jsx(k,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...c,error:!!o.error})})}),n.jsx(p,{item:!0,xs:12,sm:6,children:n.jsx(b,{control:m,name:"content",rules:{required:!0},render:({field:c})=>{var o,f;return n.jsx(k,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((o=c.value)==null?void 0:o.name)||"",disabled:!0,error:!!j.content,InputProps:{endAdornment:(f=s.content)==null?void 0:f.type}})}})}),!D&&n.jsx(p,{item:!0,xs:12,children:n.jsx(b,{name:"documentId",control:m,render:({field:c})=>n.jsx(z,{options:l,getOptionKey:o=>o.documentId,getOptionLabel:o=>o.documentName,value:l.find(o=>o.documentId===c.value)||null,onChange:(o,f)=>c.onChange(f?f.documentId:void 0),renderInput:o=>n.jsx(k,{...o,label:"Existerande dokument",variant:"outlined",fullWidth:!0})})})}),n.jsx(p,{item:!0,xs:12,children:n.jsx(X,{file:s.content})}),n.jsx(p,{item:!0,xs:12,children:n.jsxs(K,{spacing:2,direction:"row",children:[n.jsx(V,{onChange:v,children:s.content?"Ersätt dokument":"Välj dokument"}),n.jsx(q,{startIcon:n.jsx(A,{}),variant:"contained",href:s.content?URL.createObjectURL(s.content):"#",download:s.documentName,disabled:!s.content,children:"Ladda ner"})]})})]}),u]})})},ie=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:P,onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),t("Dokumentet sparat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle sparas.","error")}})},ae=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:r=>Promise.all([U(r),F(r)]),onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),e.invalidateQueries({queryKey:["document_references"]}),t("Dokumentet borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},de=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:W,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument skapat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle skapas.","error")}})},le=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:Z,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument uppdaterat!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},me=()=>{const e=y(),{showSnackbar:t}=x();return w({mutationFn:F,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),t("Dokument borttaget!")},onError:()=>{t("Ett fel uppstod när dokumentet skulle tas bort.","error")}})};export{ue as D,ce as a,ie as b,de as c,me as d,ae as e,se as f,le as g,ee as u};
