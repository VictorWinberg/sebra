import{N as E,j as t,W,n as L,p as _,t as y,X as Q,Y as K,Z as P,_ as U,g as I,r as p,B as F,u as H,G as f,w as D,$ as T}from"./index-Bu3rOK7V.js";import{v as N,p as S,u as x,a as w,b,S as B,A as O}from"./useSnackbar-Az2rIrHh.js";import{u as M,C as g}from"./index.esm-Cy9lSAvS.js";const z=E(t.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),A=E(t.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),V=async e=>await W("document_references",e),q=async e=>{N(e,["documentId","entityType","entityId"]),await L("document_references",S(e,["documentId","entityType","entityId"]))},$=async({row:e,where:n})=>{await k(n),await q(e)},k=async e=>{await _("document_references",S(e,["documentId","entityType","entityId"]))},oe=()=>{const e=y(),{showSnackbar:n}=x();return w({mutationFn:Q,onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},se=()=>{const e=y(),{showSnackbar:n}=x();return w({mutationFn:o=>Promise.all([K(o),k(o)]),onSuccess:()=>{e.invalidateQueries({queryKey:["documents"]}),e.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},ce=()=>{const e=y(),{showSnackbar:n}=x();return w({mutationFn:q,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},ae=()=>{const e=y(),{showSnackbar:n}=x();return w({mutationFn:$,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},ue=()=>{const e=y(),{showSnackbar:n}=x();return w({mutationFn:k,onSuccess:()=>{e.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},Y=()=>b({queryKey:["documents"],queryFn:P}),ie=e=>b({queryKey:["documents",e],queryFn:()=>U(e),enabled:!!e}),de=e=>b({queryKey:["document_references",e],queryFn:()=>V(e),enabled:e&&Object.keys(e).length>0}),G=({onChange:e,children:n,...o})=>{const u=c=>{var h;const d=(h=c.target.files)==null?void 0:h[0];d&&(e==null||e(d))};return t.jsxs(I,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:t.jsx(A,{}),...o,children:[n,t.jsx("input",{type:"file",style:{display:"none"},onChange:u})]})};function X(){const[e,n]=p.useState([window.innerWidth,window.innerHeight]);return p.useEffect(()=>{const o=Z(()=>{n([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),e}const Z=(e,n)=>{let o;return(...u)=>{let c;return clearTimeout(o),o=setTimeout(()=>{c=e(...u)},n),c}},J=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],ee=({file:e})=>{const n=X(),o=p.useRef(null),[u,c]=p.useState();if(p.useEffect(()=>{e&&J.some(i=>e.type.match(i))?c(URL.createObjectURL(e)):c(void 0)},[e]),!e||!u)return null;const d=()=>{if(o.current&&o.current.contentWindow){const i=o.current,v=o.current.contentWindow.document,a=i.clientHeight,j=i.clientWidth,s=v.documentElement.scrollHeight,r=v.documentElement.scrollWidth,m=j/r,C=a/s,R=Math.min(m,C);i.style.transform=`scale(${R})`,i.style.transformOrigin="top left",i.style.width=`${r}px`,i.style.height=`${s}px`}},h=()=>e.type.startsWith("image/")?t.jsx("img",{src:u,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):t.jsx("iframe",{ref:o,src:u,title:"Preview",onLoad:d,style:{width:"100%",height:"33vh",border:"none"}},`${n}`);return t.jsx(F,{sx:{mx:-1,overflow:"hidden"},children:t.jsx(F,{sx:{width:"100%",height:"33vh",px:1},children:h()},u)})},le=({formProps:e,...n})=>{const u=!H().pathname.startsWith("/documents"),{data:c=[]}=Y(),{control:d,handleSubmit:h,watch:i,setValue:l,formState:{errors:v}}=M(e),a=i(),j=s=>{l("documentName",s.name),l("content",s)};return p.useEffect(()=>{if(a.documentId){const s=c.find(r=>r.documentId===a.documentId);s&&(l("documentName",s.documentName),l("content",s.content))}else l("documentName",""),l("content",void 0)},[a.documentId,l,c]),t.jsx(B,{...n,handleSubmit:h,children:t.jsxs(f,{container:!0,spacing:2,children:[t.jsx(f,{item:!0,xs:12,sm:6,children:t.jsx(g,{control:d,name:"documentName",rules:{required:!0},defaultValue:"",render:({field:s,fieldState:r})=>t.jsx(D,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...s,error:!!r.error})})}),t.jsx(f,{item:!0,xs:12,sm:6,children:t.jsx(g,{control:d,name:"content",rules:{required:!0},render:({field:s})=>{var r,m;return t.jsx(D,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((r=s.value)==null?void 0:r.name)||"",disabled:!0,error:!!v.content,InputProps:{endAdornment:(m=a.content)==null?void 0:m.type}})}})}),t.jsx(f,{item:!0,xs:12,children:t.jsx(ee,{file:a.content})}),t.jsx(f,{item:!0,xs:12,children:t.jsxs(T,{spacing:2,direction:"row",children:[t.jsx(G,{onChange:j,children:a.content?"Ersätt dokument":"Välj dokument"}),t.jsx(I,{startIcon:t.jsx(z,{}),variant:"contained",href:a.content?URL.createObjectURL(a.content):"#",download:a.documentName,disabled:!a.content,children:"Ladda ner"})]})}),t.jsx(f,{item:!0,xs:12,children:u&&t.jsx(g,{name:"documentId",control:d,render:({field:s})=>t.jsx(O,{options:c,getOptionKey:r=>r.documentId,getOptionLabel:r=>r.documentName,value:c.find(r=>r.documentId===s.value)||null,onChange:(r,m)=>s.onChange(m?m.documentId:void 0),renderInput:r=>t.jsx(D,{...r,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})})};export{le as D,Y as a,oe as b,ce as c,ue as d,se as e,ie as f,ae as g,de as u};