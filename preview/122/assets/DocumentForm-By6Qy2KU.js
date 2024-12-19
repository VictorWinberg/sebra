import{k as I,j as r,H as y,I as D,w as j,a8 as M,a9 as P,aa as Q,ab as W,x as G,v as B,z,ac as h,ad as T,J as l,K as w,M as b,N as x,ae as $,af as O,Y as R,ag as J,r as m,p as C,B as F,b as H,c as N,G as f,Q as q,S as V}from"./index-DjJLP0TS.js";import{u as X,C as E}from"./index.esm-BXFlVR9S.js";import{S as Y,A as Z}from"./RouterLink-CTLZw406.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="86532a9d-cfc0-4576-814a-f84869ee6ea4",e._sentryDebugIdIdentifier="sentry-dbid-86532a9d-cfc0-4576-814a-f84869ee6ea4")}catch{}})();const ee=I(r.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload"),te=I(r.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload"),ne=e=>y(D(`
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
    `))({where:e}),oe=e=>y(D(`
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
    `))({id:e.id}),se=e=>y(D(`
      mutation DeleteDocument($id: String!) {
        deleteMedia(id: $id) {
          id
        }
      }
    `))({id:e.id}),re=e=>y(D(`
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
    `))({where:e}),ae=e=>y(D(`
      mutation CreateDocumentReference($data: mutationDocumentReferenceInput!) {
        createDocumentReference(data: $data) {
          id
        }
      }
    `))({data:{...j(e,["entityId","entityType"]),document:e.document.id}}),ce=e=>y(D(`
      mutation UpdateDocumentReference($id: String!, $data: mutationDocumentReferenceUpdateInput!) {
        updateDocumentReference(id: $id, data: $data) {
          id
        }
      }
    `))({id:e.id,data:{...j(e,["entityId","entityType"]),document:e.document.id}}),ie=e=>y(D(`
      mutation DeleteDocumentReference($id: String!) {
        deleteDocumentReference(id: $id) {
          id
        }
      }
    `))({id:e.id}),ue=async e=>{const t=await M("document_references",P(e)),{allMedia:n}=await Q({id:{in:t.map(s=>s.document)}});return{DocumentReferences:{docs:t.map(s=>({...s,document:n.docs.find(o=>o.id===s.document)}))}}},_=async e=>{W(e,["document","entityType","entityId"]);const t=j({...e,id:G(),document:e.document.id},["id","document","entityType","entityId"]);return{createDocumentReference:await B("document_references",t)}},de=async({id:e,...t})=>(await A({id:e}),{updateDocumentReference:(await _(t)).createDocumentReference}),A=async({id:e})=>({deleteDocumentReference:await z("document_references",{id:e})}),le=async e=>{const{upload:t,alt:n}=e;if(!t)throw new Error("No file provided");const a=h("jwt"),s=h("workspace"),o=new FormData;o.append("file",t),o.append("_payload",JSON.stringify({alt:n,workspace:s}));const c=await fetch(`${T}/media`,{method:"POST",body:o,headers:{...a&&{Authorization:`JWT ${a}`},...s&&{"X-Payload-Workspace":s}}});if(!c.ok)throw new Error("Failed to upload document");return await c.json()},me=async e=>{const{upload:t,alt:n}=e,a=h("jwt"),s=h("workspace");let o,c={};t?(o=new FormData,o.append("file",t),o.append("_payload",JSON.stringify({alt:n,workspace:s}))):(o=JSON.stringify({alt:n}),c={"Content-Type":"application/json"});const k=await fetch(`${T}/media/?where[id][equals]=${e.id}`,{method:"PATCH",body:o,headers:{...a&&{Authorization:`JWT ${a}`},...s&&{"X-Payload-Workspace":s},...c}});if(!k.ok)throw new Error("Failed to update document");return await k.json()},je=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?$:le,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet sparat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle sparas.","error")}})},Re=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?$:me,onSuccess:()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]}),n("Dokumentet uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},ve=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?O:se,onSuccess:()=>{setTimeout(()=>{t.invalidateQueries({queryKey:["documents"]}),t.invalidateQueries({queryKey:["document_references"]})},100),n("Dokumentet borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},Se=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?_:ae,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument skapat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle skapas.","error")}})},Fe=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?de:ce,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument uppdaterat!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle uppdateras.","error")}})},qe=()=>{const e=l(),t=w(),{showSnackbar:n}=b();return x({mutationFn:e?A:ie,onSuccess:()=>{t.invalidateQueries({queryKey:["document_references"]}),n("Dokument borttaget!")},onError:()=>{n("Ett fel uppstod när dokumentet skulle tas bort.","error")}})},pe=e=>{const n=l()?Q:ne;return R({queryKey:["documents",e],queryFn:()=>n(e),select:a=>{var s,o;return((o=(s=a.allMedia)==null?void 0:s.docs)==null?void 0:o.filter(c=>!!c))||[]},enabled:e})},Ee=e=>{const n=l()?J:oe;return R({queryKey:["documents",e],queryFn:e?()=>n({id:e}):void 0,select:a=>a==null?void 0:a.Media,enabled:!!e})},Le=e=>{const n=l()?ue:re;return R({queryKey:["document_references",e],queryFn:()=>n(e),select:a=>{var s,o;return((o=(s=a.DocumentReferences)==null?void 0:s.docs)==null?void 0:o.filter(c=>!!c))||[]},enabled:e&&Object.keys(e).length>0})},fe=async e=>{const t=h("jwt"),n=h("workspace"),a=await fetch(e,{headers:{...t&&{Authorization:`JWT ${t}`},...n&&{"X-Payload-Workspace":n}}});if(!a.ok)throw new Error("Failed to url blob");return await a.blob()},ye=e=>{const[t,n]=m.useState(),a=m.useMemo(()=>t&&URL.createObjectURL(t),[t]),[s,o]=m.useState(!1);return m.useEffect(()=>{(async()=>{if(e){o(!0);const c=await fe(e);n(c),o(!1)}})()},[e]),{blob:t,url:a,isLoading:s}},De=({onChange:e,children:t,...n})=>{const a=s=>{var c;const o=(c=s.target.files)==null?void 0:c[0];o&&(e==null||e(o))};return r.jsxs(C,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:r.jsx(te,{}),...n,children:[t,r.jsx("input",{type:"file",style:{display:"none"},onChange:a})]})};function he(){const[e,t]=m.useState([window.innerWidth,window.innerHeight]);return m.useEffect(()=>{const n=we(()=>{t([window.innerWidth,window.innerHeight])},200);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const we=(e,t)=>{let n;return(...a)=>{let s;return clearTimeout(n),n=setTimeout(()=>{s=e(...a)},t),s}},be=["application/pdf","application/json","image/*","text/*","video/*","audio/*"],L=({url:e,mimeType:t})=>{const n=he(),a=m.useRef(null);if(!e||!t||!be.some(o=>t.match(o)))return;const s=()=>t.startsWith("image/")?r.jsx("img",{src:e,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx("iframe",{ref:a,src:e,title:"Preview",style:{width:"100%",height:"100%",border:"none"}},`${n}`);return r.jsx(F,{sx:{mx:-1,overflow:"hidden"},children:r.jsx(F,{sx:{width:"100%",height:"50vh",px:1},children:s()})})},Ie=({formProps:e,...t})=>{var v;const n=H(),{workspace:a}=N(),s=!n.pathname.startsWith(`/${a}/documents`),{data:o=[]}=pe(),{control:c,handleSubmit:k,watch:U,setValue:p}=X(e),u=U(),g=ye(u.url||""),K=d=>{p("upload",d),p("alt",d.name)};return m.useEffect(()=>{if(u.id){const d=o.find(i=>i.id===u.id);d&&(p("upload",void 0),p("alt",d.alt))}else p("upload",void 0),p("alt","")},[u.id,p,o]),r.jsx(Y,{...t,handleSubmit:k,children:r.jsxs(f,{container:!0,spacing:2,children:[r.jsx(f,{item:!0,xs:12,md:6,children:r.jsxs(f,{container:!0,spacing:2,children:[r.jsx(f,{item:!0,xs:12,children:r.jsx(E,{control:c,name:"alt",rules:{required:!0},defaultValue:"",render:({field:d,fieldState:i})=>r.jsx(q,{fullWidth:!0,label:"Dokumentnamn",type:"text",margin:"none",...d,error:!!i.error})})}),r.jsx(f,{item:!0,xs:12,children:r.jsxs(V,{spacing:2,direction:"row",children:[!u.createdAt&&r.jsx(De,{onChange:K,disabled:!!u.id,children:"Välj dokument"}),r.jsx(C,{startIcon:r.jsx(ee,{}),variant:"contained",href:g.url||"#",download:u.alt,disabled:!u.url,children:"Ladda ner"})]})}),r.jsx(f,{item:!0,xs:12,children:!g.blob&&s&&r.jsx(E,{name:"id",control:c,render:({field:d})=>r.jsx(Z,{options:o,getOptionKey:i=>i.id,getOptionLabel:i=>i.alt||"",value:o.find(i=>i.id===d.value)||null,onChange:(i,S)=>d.onChange(S?S.id:void 0),renderInput:i=>r.jsx(q,{...i,label:"Välj existerande dokument",variant:"outlined",fullWidth:!0})})})})]})}),r.jsxs(f,{item:!0,xs:12,md:6,children:[r.jsx(L,{url:g.url,mimeType:(v=g.blob)==null?void 0:v.type}),r.jsx(L,{url:u.url,mimeType:u.mimeType})]})]})})};export{Ie as D,je as a,Re as b,Se as c,qe as d,pe as e,ve as f,Ee as g,Fe as h,Le as u};
//# sourceMappingURL=DocumentForm-By6Qy2KU.js.map
