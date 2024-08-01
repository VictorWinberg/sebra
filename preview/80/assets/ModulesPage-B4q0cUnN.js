import{j as e,a3 as x,r as d,B as c,G as s,K as h,M as f,N as g,m as y,D as v}from"./index-BglhsclV.js";import{m as i,M as j}from"./Module-KrVEaGoc.js";import{M as p}from"./MoreHoriz-Js2LV-H9.js";import"./useQueryParam-pt8Wv4kc.js";import"./useSnackbar-BvaiHheu.js";import"./index.esm-DGiGiQuX.js";import"./Tooltip-CGnU_RYg.js";import"./useAssignmentsMutations-NDJYhVDh.js";import"./useContactsQueries-DXlt8hbA.js";import"./FlexGrow-2fLn2rpb.js";import"./useAssignmentsQueries-EaLO_Y_U.js";import"./AssignmentConfig-BfLMh5Fr.js";import"./date-6oMMIu0M.js";import"./useCompaniesMutations-BOiUj9Ab.js";import"./useCompaniesQueries-N2SpGyO9.js";import"./CompanyConfig-DFWa0v1_.js";import"./ContactForm-p6-Lyqmd.js";import"./ContactConfig-D02kBs5E.js";import"./useContactsMutations-B6z3qYWS.js";const k=({label:t,disabled:n})=>`
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
        iframe.src = "${x}module" + window.location.search;
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
  aria-label="${t}"
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
  <span style="display: none">${t}</span>
</a>
`,B=t=>e.jsx("div",{dangerouslySetInnerHTML:{__html:k(t)}}),H=()=>{const[t,n]=d.useState(()=>{const a=new URLSearchParams(window.location.search),r=i.find(o=>o.key===a.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[l,m]=d.useState(t==null?void 0:t.label),u=a=>{const r=i.find(o=>o.key===a.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),n(r),m(r==null?void 0:r.label)};return e.jsxs(c,{children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:!0,children:e.jsxs(h,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(f,{children:"Välj modul"}),e.jsxs(g,{value:(t==null?void 0:t.key)??"",onChange:u,label:"Välj modul",children:[e.jsx(p,{value:"",children:e.jsx("em",{children:"Välj modul"})}),i.map(a=>e.jsx(p,{value:a.key,children:a.label},a.key))]})]})}),e.jsx(s,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(B,{label:t==null?void 0:t.label,disabled:!t})})})]}),e.jsx(s,{container:!0,spacing:2,children:e.jsx(s,{item:!0,xs:12,children:e.jsx(y,{fullWidth:!0,label:"Titel",value:l??"",onChange:a=>m(a.target.value),variant:"outlined"})})}),e.jsx(v,{sx:{my:2}}),e.jsx(j,{title:l??null,selectedModule:t??null})]})};export{H as default};
