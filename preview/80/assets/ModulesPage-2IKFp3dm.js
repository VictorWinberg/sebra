import{r as i,a3 as x,j as e,B as d,G as o,K as h,M as f,N as g,m as y,D as v}from"./index-C5nwaSHx.js";import{m,M as j}from"./Module-28oS5oDs.js";import{M as u}from"./MoreHoriz-DsrTWfmV.js";import"./useQueryParam-DWgwsoOz.js";import"./useSnackbar-BEvpnfT1.js";import"./index.esm-_iMD-ruP.js";import"./Tooltip-CEtDlVoJ.js";import"./useAssignmentsMutations-arlxgMSV.js";import"./useContactsQueries-zbQoSaoZ.js";import"./FlexGrow-PnQO5hC_.js";import"./useAssignmentsQueries-tHRJuGY7.js";import"./AssignmentConfig-BUauomLe.js";import"./date-C6J4ISP2.js";import"./useCompaniesMutations-C4feoyBI.js";import"./useCompaniesQueries-CuXKqisy.js";import"./CompanyConfig-DO7ajk5u.js";import"./ContactForm-Dcf4Qh85.js";import"./ContactConfig-ectRXTed.js";import"./useContactsMutations--niDHBa9.js";const k=(t,{label:n,disabled:a})=>`
<a
  style="${a?"color: gray; cursor: default;":"color: #5969cf;"}"
  tabindex="${a?"-1":"0"}"
  tabindex="0"
  ${a?"href='#'":""}
  href='
    javascript:(function () {
      var messageBox = document.createElement("div");
      messageBox.textContent = "Klicka var som helst för att klistra in på webbplatsen";
      messageBox.style.position = "fixed";
      messageBox.style.top = "10px";
      messageBox.style.right = "10px";
      messageBox.style.backgroundColor = "yellow";
      messageBox.style.padding = "10px";
      messageBox.style.zIndex = "10000";
      document.body.appendChild(messageBox);
      function handleClick(event) {
        var iframe = document.createElement("iframe");
        iframe.src = "${t}";
        iframe.scrolling = "no";
        iframe.style.width = "100%";
        iframe.style.height = "500px";
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
  aria-disabled="${a}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">${n}</span>
</a>
`,B=t=>{const[n,a]=i.useState("");return i.useEffect(()=>{setTimeout(()=>a(`${location.origin}${x}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:k(n,t)}})},G=()=>{const[t,n]=i.useState(()=>{const s=new URLSearchParams(window.location.search),r=m.find(l=>l.key===s.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[a,c]=i.useState(t==null?void 0:t.label),p=s=>{const r=m.find(l=>l.key===s.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),n(r),c(r==null?void 0:r.label)};return e.jsxs(d,{children:[e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:!0,children:e.jsxs(h,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(f,{children:"Välj modul"}),e.jsxs(g,{value:(t==null?void 0:t.key)??"",onChange:p,label:"Välj modul",children:[e.jsx(u,{value:"",children:e.jsx("em",{children:"Välj modul"})}),m.map(s=>e.jsx(u,{value:s.key,children:s.label},s.key))]})]})}),e.jsx(o,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(d,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(B,{label:t==null?void 0:t.label,disabled:!t})})})]}),e.jsx(o,{container:!0,spacing:2,children:e.jsx(o,{item:!0,xs:12,children:e.jsx(y,{fullWidth:!0,label:"Titel",value:a??"",onChange:s=>c(s.target.value),variant:"outlined"})})}),e.jsx(v,{sx:{my:2}}),e.jsx(j,{title:a??null,selectedModule:t??null})]})};export{G as default};
