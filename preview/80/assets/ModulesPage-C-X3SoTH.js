import{j as e,r as m,B as d,G as s,K as h,M as p,N as g,m as f,D as y}from"./index-ddI1K0Uz.js";import{m as l,M as v}from"./Module-Ck9XIHpn.js";import{M as c}from"./MoreHoriz-CNDzEBJ8.js";import"./useQueryParam-yYHqQwSD.js";import"./useSnackbar-CvIRoW3l.js";import"./index.esm-Dhb3aMtu.js";import"./Tooltip-DoNkApSW.js";import"./useAssignmentsMutations-Cdcqpsi7.js";import"./useContactsQueries-PP6qFhMy.js";import"./FlexGrow-Dzo_CAs5.js";import"./useAssignmentsQueries-CURbVvZS.js";import"./AssignmentConfig-jNkq2-A3.js";import"./date-BEc8q94w.js";import"./useCompaniesMutations-DUvHXjWa.js";import"./useCompaniesQueries-Dk_jIta1.js";import"./CompanyConfig-CcolPPOq.js";import"./ContactForm-CMrvvV7i.js";import"./ContactConfig-BYkgSsZc.js";import"./useContactsMutations-D4JyyZiO.js";const j=({label:t,disabled:a})=>`
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
        iframe.src = "https://victorwinberg.github.io/project-x/module" + window.location.search;
        iframe.src = "http://localhost:3000/module" + window.location.search;
        iframe.scrolling = "no";
        iframe.style.width = "100%";
        iframe.style.height = "400px";
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
  <span style="display: none">${t}</span>
</a>
`,b=t=>e.jsx("div",{dangerouslySetInnerHTML:{__html:j(t)}}),N=()=>{const[t,a]=m.useState(()=>{const r=new URLSearchParams(window.location.search);return l.find(i=>i.key===r.get("module"))}),[o,n]=m.useState(t==null?void 0:t.label),u=r=>{const i=l.find(x=>x.key===r.target.value);a(i),n(i==null?void 0:i.label)};return e.jsxs(d,{children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:!0,children:e.jsxs(h,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(p,{children:"Välj modul"}),e.jsxs(g,{value:(t==null?void 0:t.key)??"",onChange:u,label:"Välj modul",children:[e.jsx(c,{value:"",children:e.jsx("em",{children:"Välj modul"})}),l.map(r=>e.jsx(c,{value:r.key,children:r.label},r.key))]})]})}),e.jsx(s,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(d,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(b,{label:t==null?void 0:t.label,disabled:!t})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(f,{fullWidth:!0,label:"Titel",value:o??"",onChange:r=>n(r.target.value),variant:"outlined"})})]}),e.jsx(y,{sx:{my:2}}),e.jsx(v,{title:o??null,selectedModule:t??null})]})};export{N as default};
