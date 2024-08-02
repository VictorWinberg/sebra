import{j as e,a3 as x,r as c,B as d,G as o,K as h,M as g,N as f,m as y,D as v}from"./index-7C7diK1O.js";import{m as s,M as j}from"./Module-BJy5UCdd.js";import{M as p}from"./MoreHoriz-BOlLH8QO.js";import"./useQueryParam-DlPUu5W1.js";import"./useSnackbar-mubgvWS0.js";import"./index.esm-BKX94uWB.js";import"./Tooltip-8u7kn7S-.js";import"./useAssignmentsMutations-ClVr2R-g.js";import"./useContactsQueries-rbZvpIxE.js";import"./FlexGrow-DzWrXC7p.js";import"./useAssignmentsQueries-CPe3SWnz.js";import"./AssignmentConfig-um6Mbm9d.js";import"./date-D3IHXyta.js";import"./useCompaniesMutations-CcdoxYrR.js";import"./useCompaniesQueries-4EnGqE8j.js";import"./CompanyConfig-BN83Wduk.js";import"./ContactForm-BmwrBgmZ.js";import"./ContactConfig-kT8jyGk-.js";import"./useContactsMutations-C4_QFoXx.js";const k=({label:t,disabled:n})=>`
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
        iframe.src = "${location.origin}${x}module${location.search}";
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
`,B=t=>e.jsx("div",{dangerouslySetInnerHTML:{__html:k(t)}}),H=()=>{const[t,n]=c.useState(()=>{const a=new URLSearchParams(window.location.search),r=s.find(i=>i.key===a.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[l,m]=c.useState(t==null?void 0:t.label),u=a=>{const r=s.find(i=>i.key===a.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),n(r),m(r==null?void 0:r.label)};return e.jsxs(d,{children:[e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:!0,children:e.jsxs(h,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(g,{children:"Välj modul"}),e.jsxs(f,{value:(t==null?void 0:t.key)??"",onChange:u,label:"Välj modul",children:[e.jsx(p,{value:"",children:e.jsx("em",{children:"Välj modul"})}),s.map(a=>e.jsx(p,{value:a.key,children:a.label},a.key))]})]})}),e.jsx(o,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(d,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(B,{label:t==null?void 0:t.label,disabled:!t})})})]}),e.jsx(o,{container:!0,spacing:2,children:e.jsx(o,{item:!0,xs:12,children:e.jsx(y,{fullWidth:!0,label:"Titel",value:l??"",onChange:a=>m(a.target.value),variant:"outlined"})})}),e.jsx(v,{sx:{my:2}}),e.jsx(j,{title:l??null,selectedModule:t??null})]})};export{H as default};
