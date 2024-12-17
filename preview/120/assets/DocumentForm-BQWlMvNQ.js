import{k as E,j as a,H as y,I as D,w as R,a8 as U,a9 as K,aa as L,ab as M,x as P,v as W,z as G,ac as h,ad as I,J as d,K as w,M as b,N as k,ae as Q,af as B,Y as j,ag as z,r as m,p as $,B as S,b as O,c as J,G as p,Q as F,S as H}from"./index-D5HSxLJv.js";import{u as N,C as q}from"./index.esm-BCRtL592.js";import{S as V,A as X}from"./RouterLink-Cm85W6HA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a88109ea-243f-463f-95a4-37f39a4c2975",e._sentryDebugIdIdentifier="sentry-dbid-a88109ea-243f-463f-95a4-37f39a4c2975")}catch{}})();const Y=E(a.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),Z=E(a.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),ee=e=>y(D(`
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
    `))({where:e}),te=e=>y(D(`
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
    `))({id:e.id}),ne=e=>y(D(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `))({id:e.id}),oe=e=>y(D(`
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
    `))({where:e}),se=e=>y(D(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `))({data:{...R(e,["entityId","entityType"]),document:e.document.id}}),re=e=>y(D(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `))({id:e.id,data:{...R(e,["entityId","entityType"]),document:e.document.id}}),ae=e=>y(D(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `))({id:e.id}),ce=async e=>{const t=await U("document_references",K(e)),{allMedia:n}=await L({id:{in:t.map(r=>r.document)}});return{DocumentReferences:{docs:t.map(r=>({...r,document:n.docs.find(o=>o.id===r.document)}))}}},T=async e=>{M(e,["document","entityType","entityId"]);const t=R({...e,id:P(),document:e.document.id},["id","document","entityType","entityId"]);return{createDocumentReference:await W("document_references",t)}},ie=async({id:e,...t})=>(await C({id:e}),{updateDocumentReference:(await T(t)).createDocumentReference}),C=async({id:e})=>({deleteDocumentReference:await G("document_references",{id:e})}),ue=async e=>{const{upload:t,alt:n}=e;if(!t)throw new Error("No file provided");const s=h("jwt"),r=h("workspace"),o=new FormData;o.append("file",t),o.append("_payload",JSON.stringify({alt:n}));const c=await fetch(`${I}/media`,{method:"POST",body:o,headers:{...s&&{Authorization:`JWT ${s}`},...r&&{"X-Payload-Workspace":r}}});if(!c.ok)throw new Error("Failed to upload document");return await c.json()},de=async e=>{const{upload:t,alt:n}=e,s=h("jwt"),r=h("workspace");let o,c={};t?(o=new FormData,o.append("file",t),o.append("_payload",JSON.stringify({alt:n}))):(o=JSON.stringify({alt:n}),c={"Content-Type":"application/json"});const x=await fetch(`${I}/media/?where[id][equals]=${e.id}`,{method:"PATCH",body:o,headers:{...s&&{Authorization:`JWT ${s}`},...r&&{"X-Payload-Workspace":r},...c}});if(!x.ok)throw new Error("Failed to update document");return await x.json()},ge=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?Q:ue,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},Re=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?Q:de,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},je=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?B:ne,onSuccess:()=>{setTimeout(()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]})},100),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},ve=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?T:se,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},Se=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?ie:re,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},Fe=()=>{const e=d(),t=w(),{showSnackbar:n}=b();return k({mutationFn:e?C:ae,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},le=e=>{const n=d()?L:ee;return j({queryKey:["documents",e],queryFn:()=>n(e),select:s=>{var r,o;return((o=(r=s.allMedia)==null?void 0:r.docs)==null?void 0:o.filter(c=>!!c))||[]},enabled:e})},qe=e=>{const n=d()?z:te;return j({queryKey:["documents",e],queryFn:e?()=>n({id:e}):void 0,select:s=>s==null?void 0:s.Media,enabled:!!e})},Ee=e=>{const n=d()?ce:oe;return j({queryKey:["document_references",e],queryFn:()=>n(e),select:s=>{var r,o;return((o=(r=s.DocumentReferences)==null?void 0:r.docs)==null?void 0:o.filter(c=>!!c))||[]},enabled:e&&Object.keys(e).length>0})},me=async e=>{const t=h("jwt"),n=h("workspace"),s=await fetch(e,{headers:{...t&&{Authorization:`JWT ${t}`},...n&&{"X-Payload-Workspace":n}}});if(!s.ok)throw new Error("Failed to url blob");return await s.blob()},fe=e=>{const[t,n]=m.useState(),s=m.useMemo(()=>t&&URL.createObjectURL(t),[t]),[r,o]=m.useState(!1);return m.useEffect(()=>{(async()=>{if(e){o(!0);const c=await me(e);n(c),o(!1)}})()},[e]),{blob:t,url:s,isLoading:r}},pe=({onChange:e,children:t,...n})=>{const s=r=>{var c;const o=(c=r.target.files)==null?void 0:c[0];o&&(e==null||e(o))};return a.jsxs($,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:a.jsx(Z,{}),...n,children:[t,a.jsx("input",{type:"file",style:{display:"none"},onChange:s})]})};function ye(){const[e,t]=m.useState([window.innerWidth,window.innerHeight]);return m.useEffect(()=>{const n=De(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const De=(e,t)=>{let n;return(...s)=>{let r;return clearTimeout(n),n=setTimeout(()=>{r=e(...s)},t),r}},he=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],we=({url:e,blob:t})=>{const n=ye(),s=m.useRef(null);if(!e||!t||!he.some(o=>t.type.match(o)))return;const r=()=>t.type.startsWith("image/")?a.jsx("img",{src:e,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):a.jsx("iframe",{ref:s,src:e,title:"Preview",style:{width:"100%",height:"100%",border:"none"}},`${n}`);return a.jsx(S,{sx:{mx:-1,overflow:"hidden"},children:a.jsx(S,{sx:{width:"100%",height:"50vh",px:1},children:r()})})},Le=({formProps:e,...t})=>{const n=O(),{workspace:s}=J(),r=!n.pathname.startsWith(`/${s}/documents`),{data:o=[]}=le(),{control:c,handleSubmit:x,watch:_,setValue:f}=N(e),l=_(),g=fe(l.url||""),A=u=>{f("upload",u),f("alt",u.name)};return m.useEffect(()=>{if(l.id){const u=o.find(i=>i.id===l.id);u&&(f("upload",void 0),f("alt",u.alt))}else f("upload",void 0),f("alt","")},[l.id,f,o]),a.jsx(V,{...t,handleSubmit:x,children:a.jsxs(p,{container:!0,spacing:2,children:[a.jsx(p,{item:!0,xs:12,md:6,children:a.jsxs(p,{container:!0,spacing:2,children:[a.jsx(p,{item:!0,xs:12,children:a.jsx(q,{control:c,name:"alt",rules:{required:!0},defaultValue:"",render:({field:u,fieldState:i})=>a.jsx(F,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...u,error:!!i.error})})}),a.jsx(p,{item:!0,xs:12,children:a.jsxs(H,{spacing:2,direction:"row",children:[!l.createdAt&&a.jsx(pe,{onChange:A,disabled:!!l.id,children:"Välj dokument"}),a.jsx($,{startIcon:a.jsx(Y,{}),variant:"contained",href:g.url||"#",download:l.alt,disabled:!l.url,children:"Ladda ner"})]})}),a.jsx(p,{item:!0,xs:12,children:!g.blob&&r&&a.jsx(q,{name:"id",control:c,render:({field:u})=>a.jsx(X,{options:o,getOptionKey:i=>i.id,getOptionLabel:i=>i.alt||"",value:o.find(i=>i.id===u.value)||null,onChange:(i,v)=>u.onChange(v?v.id:void 0),renderInput:i=>a.jsx(F,{...i,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})}),a.jsx(p,{item:!0,xs:12,md:6,children:a.jsx(we,{url:g.url,blob:g.blob})})]})})};export{Le as D,ge as a,Re as b,ve as c,Fe as d,le as e,je as f,qe as g,Se as h,Ee as u};
//# sourceMappingURL=DocumentForm-BQWlMvNQ.js.map
