import{k as I,j as r,H as p,I as h,w as S,a8 as M,a9 as P,aa as L,ab as U,x as G,v as H,z as O,ac as v,ad as $,J as m,K as x,M as g,N as k,ae as Q,af as z,Y as E,ag as B,p as C,r as w,B as q,b as J,G as D,Q as R,S as N}from"./index-BH2J_HuR.js";import{u as V,C as j}from"./index.esm-MvbHuaO0.js";import{S as X,A as Y}from"./RouterLink-C91Clvog.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7aca2cc3-3174-4c2f-8d51-1af0684733dc",e._sentryDebugIdIdentifier="sentry-dbid-7aca2cc3-3174-4c2f-8d51-1af0684733dc")}catch{}})();const Z=I(r.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),ee=I(r.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),te=e=>p(h(`
      query GetDocuments($where: Media_where) {
        allMedia(sort: "id", where: $where) {
          docs {
            id
            filename
            mimeType
            thumbnailURL
            alt
            url
            createdAt
            updatedAt
          }
        }
      }
    `))({where:e}),ne=e=>p(h(`
      query GetDocument($id: String!) {
        Media(id: $id) {
          id
          filename
          mimeType
          thumbnailURL
          alt
          url
          createdAt
          updatedAt
        }
      }
    `))({id:e.id}),oe=e=>p(h(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `))({id:e.id}),re=e=>p(h(`
      query GetDocumentReferences($where: DocumentReference_where) {
        DocumentReferences(sort: "id", where: $where) {
          docs {
            id
            entityId
            entityType
            createdAt
            updatedAt

            document {
              id
              alt
              filename
              mimeType
              thumbnailURL
              url
            }
          }
        }
      }
    `))({where:e}),se=e=>p(h(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `))({data:{...S(e,["entityId","entityType"]),document:e.document.id}}),ae=e=>p(h(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `))({id:e.id,data:{...S(e,["entityId","entityType"]),document:e.document.id}}),ce=e=>p(h(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `))({id:e.id}),ie=async e=>{const t=await M("document_references",P(e)),{allMedia:n}=await L({id:{in:t.map(o=>o.document)}});return{DocumentReferences:{docs:t.map(o=>({...o,document:n.docs.find(a=>a.id===o.document)}))}}},_=async e=>{U(e,["document","entityType","entityId"]);const t=S({...e,id:G(),document:e.document.id},["id","document","entityType","entityId"]);return{createDocumentReference:await H("document_references",t)}},de=async({id:e,...t})=>(await W({id:e}),{updateDocumentReference:(await _(t)).createDocumentReference}),W=async({id:e})=>({deleteDocumentReference:await O("document_references",{id:e})}),ue=async e=>{const{upload:t,alt:n}=e;if(!t)throw new Error("No file provided");const s=v("jwt"),o=v("workspace"),a=new FormData;a.append("file",t),a.append("_payload",JSON.stringify({alt:n}));const i=await fetch(`${$}/media`,{method:"POST",body:a,headers:{...s&&{Authorization:`JWT ${s}`},...o&&{"X-Payload-Workspace":o}}});if(!i.ok)throw new Error("Failed to upload document");return await i.json()},le=async e=>{const{upload:t,alt:n}=e,s=v("jwt"),o=v("workspace");let a,i={};t?(a=new FormData,a.append("file",t),a.append("_payload",JSON.stringify({alt:n}))):(a=JSON.stringify({alt:n}),i={"Content-Type":"application/json"});const y=await fetch(`${$}/media/?where[id][equals]=${e.id}`,{method:"PATCH",body:a,headers:{...s&&{Authorization:`JWT ${s}`},...o&&{"X-Payload-Workspace":o},...i}});if(!y.ok)throw new Error("Failed to update document");return await y.json()},ke=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?Q:ue,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},ve=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?Q:le,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},be=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?z:oe,onSuccess:()=>{setTimeout(()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]})},100),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},Re=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?_:se,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},je=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?de:ae,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},Se=()=>{const e=m(),t=x(),{showSnackbar:n}=g();return k({mutationFn:e?W:ce,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},me=e=>{const n=m()?L:te;return E({queryKey:["documents",e],queryFn:()=>n(e),select:s=>{var o,a;return((a=(o=s.allMedia)==null?void 0:o.docs)==null?void 0:a.filter(i=>!!i))||[]},enabled:e})},Ee=e=>{const n=m()?B:ne;return E({queryKey:["documents",e],queryFn:e?()=>n({id:e}):void 0,select:s=>s==null?void 0:s.Media,enabled:!!e})},Fe=e=>{const n=m()?ie:re;return E({queryKey:["document_references",e],queryFn:()=>n(e),select:s=>{var o,a;return((a=(o=s.DocumentReferences)==null?void 0:o.docs)==null?void 0:a.filter(i=>!!i))||[]},enabled:e&&Object.keys(e).length>0})},fe=({onChange:e,children:t,...n})=>{const s=o=>{var i;const a=(i=o.target.files)==null?void 0:i[0];a&&(e==null||e(a))};return r.jsxs(C,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:r.jsx(ee,{}),...n,children:[t,r.jsx("input",{type:"file",style:{display:"none"},onChange:s})]})};function pe(){const[e,t]=w.useState([window.innerWidth,window.innerHeight]);return w.useEffect(()=>{const n=he(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const he=(e,t)=>{let n;return(...s)=>{let o;return clearTimeout(n),n=setTimeout(()=>{o=e(...s)},t),o}},ye=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],De=({url:e,mimeType:t})=>{const n=pe(),s=w.useRef(null),[o,a]=w.useState();if(w.useEffect(()=>{e&&t&&ye.some(d=>t.match(d))&&a(e)},[e,t]),!e||!t||!o)return;const i=()=>{if(s.current&&s.current.contentWindow){const d=s.current,u=s.current.contentWindow.document,b=d.clientHeight,l=d.clientWidth,c=u.documentElement.scrollHeight,f=u.documentElement.scrollWidth,T=l/f,A=b/c,K=Math.min(T,A);d.style.transform=`scale(${K})`,d.style.transformOrigin="top left",d.style.width=`${f}px`,d.style.height=`${c}px`}},y=()=>t.startsWith("image/")?r.jsx("img",{src:o,alt:"Preview",style:{width:"100%",height:"100%",maxHeight:"33vh",objectFit:"cover"}}):r.jsx("iframe",{ref:s,src:o,title:"Preview",onLoad:i,style:{width:"100%",height:"33vh",border:"none"}},`${n}`);return r.jsx(q,{sx:{mx:-1,overflow:"hidden"},children:r.jsx(q,{sx:{width:"100%",height:"33vh",px:1},children:y()},o)})},qe=({formProps:e,...t})=>{const s=!J().pathname.startsWith("/documents"),{data:o=[]}=me(),{control:a,handleSubmit:i,watch:y,setValue:d,formState:{errors:F}}=V(e),u=y(),b=l=>{d("upload",l),d("alt",l.name)};return w.useEffect(()=>{if(u.id){const l=o.find(c=>c.id===u.id);l&&(d("upload",void 0),d("alt",l.alt))}else d("upload",void 0),d("alt","")},[u.id,d,o]),r.jsx(X,{...t,handleSubmit:i,children:r.jsxs(D,{container:!0,spacing:2,children:[r.jsx(D,{item:!0,xs:12,sm:6,children:r.jsx(j,{control:a,name:"alt",rules:{required:!0},defaultValue:"",render:({field:l,fieldState:c})=>r.jsx(R,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...l,error:!!c.error})})}),r.jsx(D,{item:!0,xs:12,sm:6,children:r.jsx(j,{control:a,name:"upload",render:({field:l})=>{var c,f;return r.jsx(R,{fullWidth:!0,label:"Dokument",type:"text",margin:"none",value:((c=l.value)==null?void 0:c.name)||"",disabled:!0,error:!!F.upload,InputProps:{endAdornment:(f=u.upload)==null?void 0:f.type}})}})}),r.jsx(D,{item:!0,xs:12,children:r.jsx(De,{url:u.thumbnailURL||u.url,mimeType:u.mimeType})}),r.jsx(D,{item:!0,xs:12,children:r.jsxs(N,{spacing:2,direction:"row",children:[r.jsx(fe,{onChange:b,children:u.id?"Ersätt dokument":"Välj dokument"}),r.jsx(C,{startIcon:r.jsx(Z,{}),variant:"contained",href:u.url||"#",download:u.alt,disabled:!u.url,children:"Ladda ner"})]})}),r.jsx(D,{item:!0,xs:12,children:s&&r.jsx(j,{name:"id",control:a,render:({field:l})=>r.jsx(Y,{options:o,getOptionKey:c=>c.id,getOptionLabel:c=>c.alt||"",value:o.find(c=>c.id===l.value)||null,onChange:(c,f)=>l.onChange(f?f.id:void 0),renderInput:c=>r.jsx(R,{...c,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})})};export{qe as D,ke as a,ve as b,Re as c,Se as d,me as e,be as f,Ee as g,je as h,Fe as u};
//# sourceMappingURL=DocumentForm-vCEnEfk_.js.map
