import{r as l,a3 as f,j as e,B as c,G as i,K as y,M as j,N as v,m as p,a4 as b,D as k}from"./index-D_7NcZOi.js";import{m as u,M as B}from"./Module-BD_86cZT.js";import{M as x}from"./MoreHoriz-HdsIwR5R.js";import"./useQueryParam-OJLBAo7Q.js";import"./useSnackbar-D0rdHqjC.js";import"./index.esm-CSRQ1RaD.js";import"./Tooltip-DRJdaUZb.js";import"./useAssignmentsMutations-CF_NmbCs.js";import"./useContactsQueries-D_6ih0LR.js";import"./FlexGrow-3EOzrlMy.js";import"./useAssignmentsQueries-Ddyyy-_m.js";import"./AssignmentConfig-D1TTLLhv.js";import"./date-CaPDRWxl.js";import"./useCompaniesMutations-DaX6qRa0.js";import"./useCompaniesQueries-Cjbxq2SZ.js";import"./CompanyConfig-4G8C9LvF.js";import"./ContactForm-CdT0tfbT.js";import"./ContactConfig-BUVpy2Rq.js";import"./useContactsMutations-vbOxhFQZ.js";const C=(t,{label:s,height:o,disabled:n})=>`
<a
  style="${n?"color: gray; cursor: default;":"color: #5969cf;"}"
  tabindex="${n?"-1":"0"}"
  tabindex="0"
  ${n?"href='#'":""}
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
  aria-label="${s}"
  aria-disabled="${n}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">${s}</span>
</a>
`,w=t=>{const[s,o]=l.useState("");return l.useEffect(()=>{setTimeout(()=>o(`${location.origin}${f}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:C(s,t)}})},K=()=>{const[t,s]=l.useState(()=>{const a=new URLSearchParams(window.location.search),r=u.find(d=>d.key===a.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[o,n]=l.useState(t==null?void 0:t.label),[m,h]=l.useState(500),g=a=>{const r=u.find(d=>d.key===a.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),s(r),n(r==null?void 0:r.label)};return e.jsxs(c,{children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:!0,children:e.jsxs(y,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(j,{children:"Välj modul"}),e.jsxs(v,{value:(t==null?void 0:t.key)??"",onChange:g,label:"Välj modul",children:[e.jsx(x,{value:"",children:e.jsx("em",{children:"Välj modul"})}),u.map(a=>e.jsx(x,{value:a.key,children:a.label},a.key))]})]})}),e.jsx(i,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(w,{label:(t==null?void 0:t.label)??"",height:m,disabled:!t})})})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:8,children:e.jsx(p,{fullWidth:!0,label:"Titel",value:o??"",onChange:a=>n(a.target.value),variant:"outlined"})}),e.jsx(i,{item:!0,xs:4,children:e.jsx(p,{fullWidth:!0,label:"Höjd",type:"number",value:m,onChange:a=>h(parseInt(a.target.value)),variant:"outlined",InputProps:{endAdornment:e.jsx(b,{position:"end",children:"px"})}})})]}),e.jsx(k,{sx:{my:2}}),e.jsx(c,{sx:{height:m,border:"2px dashed",borderColor:"primary.main",overflow:"hidden"},children:e.jsx(B,{title:o??null,selectedModule:t??null})})]})};export{K as default};
