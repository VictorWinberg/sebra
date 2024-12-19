import{k as q,j as s,H as f,I as y,w as g,a8 as A,a9 as K,aa as E,ab as G,x as M,v as P,z as W,ac as b,ad as I,J as l,K as D,M as h,N as w,ae as Q,af as U,Y as v,ag as z,p as L,r as k,B as j,b as O,c as B,G as p,Q as S,S as H}from"./index-fST7Sn_U.js";import{u as J,C as F}from"./index.esm-DcM0ODI1.js";import{S as N,A as V}from"./RouterLink-DK62vDre.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2e0c4f2b-14da-4827-a962-d107c5cbbe05",e._sentryDebugIdIdentifier="sentry-dbid-2e0c4f2b-14da-4827-a962-d107c5cbbe05")}catch{}})();const X=q(s.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),Y=q(s.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),Z=e=>f(y(`
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
    `))({where:e}),ee=e=>f(y(`
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
    `))({id:e.id}),te=e=>f(y(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `))({id:e.id}),ne=e=>f(y(`
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
    `))({where:e}),oe=e=>f(y(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `))({data:{...g(e,["entityId","entityType"]),document:e.document.id}}),re=e=>f(y(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `))({id:e.id,data:{...g(e,["entityId","entityType"]),document:e.document.id}}),se=e=>f(y(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `))({id:e.id}),ae=async e=>{const t=await A("document_references",K(e)),{allMedia:n}=await E({id:{in:t.map(o=>o.document)}});return{DocumentReferences:{docs:t.map(o=>({...o,document:n.docs.find(r=>r.id===o.document)}))}}},$=async e=>{G(e,["document","entityType","entityId"]);const t=g({...e,id:M(),document:e.document.id},["id","document","entityType","entityId"]);return{createDocumentReference:await P("document_references",t)}},ce=async({id:e,...t})=>(await C({id:e}),{updateDocumentReference:(await $(t)).createDocumentReference}),C=async({id:e})=>({deleteDocumentReference:await W("document_references",{id:e})}),ie=async e=>{const{upload:t,alt:n}=e;if(!t)throw new Error("No file provided");const a=b("jwt"),o=b("workspace"),r=new FormData;r.append("file",t),r.append("_payload",JSON.stringify({alt:n,workspace:o}));const c=await fetch(`${I}/media`,{method:"POST",body:r,headers:{...a&&{Authorization:`JWT ${a}`},...o&&{"X-Payload-Workspace":o}}});if(!c.ok)throw new Error("Failed to upload document");return await c.json()},de=async e=>{const{upload:t,alt:n}=e,a=b("jwt"),o=b("workspace");let r,c={};t?(r=new FormData,r.append("file",t),r.append("_payload",JSON.stringify({alt:n,workspace:o}))):(r=JSON.stringify({alt:n}),c={"Content-Type":"application/json"});const x=await fetch(`${I}/media/?where[id][equals]=${e.id}`,{method:"PATCH",body:r,headers:{...a&&{Authorization:`JWT ${a}`},...o&&{"X-Payload-Workspace":o},...c}});if(!x.ok)throw new Error("Failed to update document");return await x.json()},xe=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?Q:ie,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},be=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?Q:de,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},ke=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?U:te,onSuccess:()=>{setTimeout(()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]})},100),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},ge=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?$:oe,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},ve=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?ce:re,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},Re=()=>{const e=l(),t=D(),{showSnackbar:n}=h();return w({mutationFn:e?C:se,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},ue=e=>{const n=l()?E:Z;return v({queryKey:["documents",e],queryFn:()=>n(e),select:a=>{var o,r;return((r=(o=a.allMedia)==null?void 0:o.docs)==null?void 0:r.filter(c=>!!c))||[]},enabled:e})},je=e=>{const n=l()?z:ee;return v({queryKey:["documents",e],queryFn:e?()=>n({id:e}):void 0,select:a=>a==null?void 0:a.Media,enabled:!!e})},Se=e=>{const n=l()?ae:ne;return v({queryKey:["document_references",e],queryFn:()=>n(e),select:a=>{var o,r;return((r=(o=a.DocumentReferences)==null?void 0:o.docs)==null?void 0:r.filter(c=>!!c))||[]},enabled:e&&Object.keys(e).length>0})},le=({onChange:e,children:t,...n})=>{const a=o=>{var c;const r=(c=o.target.files)==null?void 0:c[0];r&&(e==null||e(r))};return s.jsxs(L,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:s.jsx(Y,{}),...n,children:[t,s.jsx("input",{type:"file",style:{display:"none"},onChange:a})]})};function me(){const[e,t]=k.useState([window.innerWidth,window.innerHeight]);return k.useEffect(()=>{const n=pe(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const pe=(e,t)=>{let n;return(...a)=>{let o;return clearTimeout(n),n=setTimeout(()=>{o=e(...a)},t),o}},fe=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],ye=({url:e,mimeType:t})=>{const n=me(),a=k.useRef(null);if(!e||!t||!fe.some(r=>t.match(r)))return;const o=()=>t.startsWith("image/")?s.jsx("img",{src:e,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):s.jsx("iframe",{ref:a,src:e,title:"Preview",style:{width:"100%",height:"100%",border:"none"}},`${n}`);return s.jsx(j,{sx:{mx:-1,overflow:"hidden"},children:s.jsx(j,{sx:{width:"100%",height:"50vh",px:1},children:o()})})},Fe=({formProps:e,...t})=>{const n=O(),{workspace:a}=B(),o=!n.pathname.startsWith(`/${a}/documents`),{data:r=[]}=ue(),{control:c,handleSubmit:x,watch:T,setValue:m}=J(e),d=T(),_=u=>{m("upload",u),m("alt",u.name)};return k.useEffect(()=>{if(d.id){const u=r.find(i=>i.id===d.id);u&&(m("upload",void 0),m("alt",u.alt))}else m("upload",void 0),m("alt","")},[d.id,m,r]),s.jsx(N,{...t,handleSubmit:x,children:s.jsxs(p,{container:!0,spacing:2,children:[s.jsx(p,{item:!0,xs:12,md:6,children:s.jsxs(p,{container:!0,spacing:2,children:[s.jsx(p,{item:!0,xs:12,children:s.jsx(F,{control:c,name:"alt",rules:{required:!0},defaultValue:"",render:({field:u,fieldState:i})=>s.jsx(S,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...u,error:!!i.error})})}),s.jsx(p,{item:!0,xs:12,children:s.jsxs(H,{spacing:2,direction:"row",children:[!d.createdAt&&s.jsx(le,{onChange:_,disabled:!!d.id,children:"Välj dokument"}),s.jsx(L,{startIcon:s.jsx(X,{}),variant:"contained",href:d.url||"#",download:d.alt,disabled:!d.url,children:"Ladda ner"})]})}),s.jsx(p,{item:!0,xs:12,children:!d.url&&o&&s.jsx(F,{name:"id",control:c,render:({field:u})=>s.jsx(V,{options:r,getOptionKey:i=>i.id,getOptionLabel:i=>i.alt||"",value:r.find(i=>i.id===u.value)||null,onChange:(i,R)=>u.onChange(R?R.id:void 0),renderInput:i=>s.jsx(S,{...i,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})}),s.jsx(p,{item:!0,xs:12,md:6,children:s.jsx(ye,{url:d.url,mimeType:d.mimeType})})]})})};export{Fe as D,xe as a,be as b,ge as c,Re as d,ue as e,ke as f,je as g,ve as h,Se as u};
//# sourceMappingURL=DocumentForm-x4LyaV7I.js.map
