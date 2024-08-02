import{r as l,a3 as g,j as e,B as c,G as i,K as y,M as j,N as v,m as u,a4 as b,D as k}from"./index-BWTAkTXl.js";import{m as p,M as B}from"./Module-rPHDHUbw.js";import{M as x}from"./MoreHoriz-CHocHYtd.js";import{T as w}from"./Tooltip-NbgdLRSc.js";import"./useQueryParam-Dtc3PlXA.js";import"./useSnackbar-hA_AqkQF.js";import"./index.esm-RSrB_6yY.js";import"./useAssignmentsMutations-DapvrciL.js";import"./useContactsQueries-gsnybcOu.js";import"./FlexGrow-Bw0sNOdb.js";import"./useAssignmentsQueries-D3Drutkr.js";import"./AssignmentConfig-BudRfy_5.js";import"./date-BVPaV7Fq.js";import"./useCompaniesMutations-EHECWNhT.js";import"./useCompaniesQueries-qqcMh9-j.js";import"./CompanyConfig-CBIHy6Kx.js";import"./ContactForm-BEIgkKYt.js";import"./ContactConfig-DzW6h26x.js";import"./useContactsMutations-D675Hdj_.js";const C=(t,{label:n,height:o,disabled:s})=>`
<a
  style="${s?"color: gray; cursor: default;":"color: #5969cf;"}"
  tabindex="${s?"-1":"0"}"
  tabindex="0"
  ${s?"href='#'":""}
  href='
    javascript:(function () {
      var messageBox = document.createElement("div");
      messageBox.innerHTML = "Klicka var som helst för att klistra in på webbplatsen.<br/><em>Obs: Fungerar inte på alla webbplatser.</em>";
      messageBox.style.position = "fixed";
      messageBox.style.top = "10px";
      messageBox.style.right = "10px";
      messageBox.style.color = "#5969cf";
      messageBox.style.border = "2px dashed #5969cf";
      messageBox.style.backgroundColor = "#fff";
      messageBox.style.padding = "10px";
      messageBox.style.zIndex = "10000";
      document.body.appendChild(messageBox);

      function handleClick(event) {
        var iframe = document.createElement("iframe");
        iframe.src = "${t}";
        iframe.scrolling = "no";
        iframe.style.width = "100%";
        iframe.style.height = "${o}px";
        iframe.style.border = "none";
        iframe.style.outline = "none";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.style.overflow = "hidden";
        var targetElement = event.target;
        targetElement.parentNode.insertBefore(iframe, targetElement);
        document.body.removeChild(messageBox);
        document.removeEventListener("click", handleClick);
      }
      document.addEventListener("click", handleClick);
    })();
  '
  aria-label="${n}"
  aria-disabled="${s}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">Infoga - ${n}</span>
</a>
`,E=t=>{const[n,o]=l.useState("");return l.useEffect(()=>{setTimeout(()=>o(`${location.origin}${g}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:C(n,t)}})},N=()=>{const[t,n]=l.useState(()=>{const a=new URLSearchParams(window.location.search),r=p.find(d=>d.key===a.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[o,s]=l.useState(t==null?void 0:t.label),[m,h]=l.useState(500),f=a=>{const r=p.find(d=>d.key===a.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),n(r),s(r==null?void 0:r.title)};return e.jsxs(c,{children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:!0,children:e.jsxs(y,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(j,{children:"Välj modul"}),e.jsxs(v,{value:(t==null?void 0:t.key)??"",onChange:f,label:"Välj modul",children:[e.jsx(x,{value:"",children:e.jsx("em",{children:"Välj modul"})}),p.map(a=>e.jsx(x,{value:a.key,children:a.label},a.key))]})]})}),e.jsx(i,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(w,{title:"Dra bokmärket till bokmärkesfältet",arrow:!0,children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(E,{label:(t==null?void 0:t.title)??"",height:m,disabled:!t})})})})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:8,children:e.jsx(u,{fullWidth:!0,label:"Titel",value:o??"",onChange:a=>s(a.target.value),variant:"outlined"})}),e.jsx(i,{item:!0,xs:4,children:e.jsx(u,{fullWidth:!0,label:"Höjd",type:"number",value:m,onChange:a=>h(parseInt(a.target.value)),variant:"outlined",InputProps:{endAdornment:e.jsx(b,{position:"end",children:"px"})}})})]}),e.jsx(k,{sx:{my:2}}),e.jsx(c,{sx:{height:m,border:"2px dashed",borderColor:"primary.main",overflow:"hidden"},children:e.jsx(B,{title:o??null,selectedModule:t??null})})]})};export{N as default};
