import{j as t,B as i,f as u,r as c,K as d,M as y,N as f}from"./index-Cb8GJovI.js";import{A as b,u as g}from"./useAssignmentsMutations-rSjfYdlc.js";import{C as x,u as h}from"./useCompaniesMutations-Ck1BTkNG.js";import{C}from"./ContactForm-DZZxu8AC.js";import{u as k}from"./useContactsMutations-DhuA27YE.js";import{f as F,i as v}from"./useSnackbar-0k07tixR.js";import{a as j}from"./AssignmentConfig-C0sWeBZz.js";import{u as B}from"./useAssignmentsQueries-DxB7OgpD.js";import{c as M}from"./CompanyConfig-D0hBYUou.js";import{u as T}from"./useCompaniesQueries-BYQB3Vjx.js";import{c as E}from"./ContactConfig-CDr6o6r4.js";import{u as I}from"./useContactsQueries-CwO6ua4p.js";import{u as S,F as w}from"./useQueryParam-qKNEfj3W.js";import{M as L}from"./MoreHoriz-BcodxRgp.js";import"./index.esm-DKLScjNo.js";import"./FlexGrow-BCoRXuJq.js";import"./Tooltip-DyZBaYP8.js";import"./date-DGlXuU50.js";const D=`
<a
  style="color: #5969cf; padding: 8px;"
  tabindex="0"
  href='
    javascript:(function () {
      var messageBox = document.createElement("div");
      messageBox.textContent = "Click anywhere to embed website";
      messageBox.style.position = "fixed";
      messageBox.style.top = "10px";
      messageBox.style.right = "10px";
      messageBox.style.backgroundColor = "yellow";
      messageBox.style.padding = "10px";
      messageBox.style.zIndex = "10000";
      document.body.appendChild(messageBox);
      function handleClick(event) {
        var iframe = document.createElement("iframe");
        iframe.src = "https://victorwinberg.github.io/project-x/modules";
        iframe.style.width = "400px";
        iframe.style.height = "400px";
        iframe.style.border = "none";
        iframe.style.outline = "none";
        var targetElement = event.target;
        targetElement.parentNode.insertBefore(iframe, targetElement);
        document.body.removeChild(messageBox);
        document.removeEventListener("click", handleClick);
      }
      document.addEventListener("click", handleClick);
    })();
  '
  aria-label="Infoga Modul"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="BookmarkIcon"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">Infoga Modul</span>
  <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"> </span>
</a>
`,R=()=>t.jsx("div",{dangerouslySetInnerHTML:{__html:D}}),A={companyForm:{type:"form",FormComponent:x,createMutation:h},assignmentForm:{type:"form",FormComponent:b,createMutation:g},contactForm:{type:"form",FormComponent:C,createMutation:k}},_=({moduleType:e})=>{const{FormComponent:o,createMutation:s}=A[e],{mutate:a}=s();return t.jsxs(o,{onSubmit:a,children:[t.jsx(i,{sx:{my:1}}),t.jsx(u,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})},z={companiesTable:{type:"table",columns:M,useData:T},assignmentsTable:{type:"table",columns:j,useData:B},contactsTable:{type:"table",columns:E,useData:I}},O=({moduleType:e})=>{const o=z[e],{columns:s,useData:a}=o,[r,n]=S("filters",w,[]),{data:p=[]}=a(),m=F({data:p,columns:s,initialState:{columnFilters:r??[]},enableEditing:!1,enableRowActions:!1,enableColumnResizing:!1,enableStickyHeader:!1});return c.useEffect(()=>{n(m.getState().columnFilters)},[m,n]),t.jsx(v,{table:m})},l=[{type:"form",key:"companyForm",label:"Företagsformulär"},{type:"form",key:"assignmentForm",label:"Uppdragsformulär"},{type:"form",key:"contactForm",label:"Kontaktpersonsformulär"},{type:"table",key:"companiesTable",label:"Företagstabell"},{type:"table",key:"assignmentsTable",label:"Uppdragstabell"},{type:"table",key:"contactsTable",label:"Kontaktpersonstabell"}],oe=()=>{const[e,o]=c.useState(),s=a=>{const r=l.find(n=>n.key===a.target.value);o(r)};return t.jsxs(i,{children:[t.jsx(R,{}),t.jsxs(d,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[t.jsx(y,{children:"Välj modul"}),t.jsx(f,{value:(e==null?void 0:e.key)??"",onChange:s,label:"Välj modul",children:l.map(a=>t.jsx(L,{value:a.key,children:a.label},a.key))})]}),(e==null?void 0:e.type)==="table"&&t.jsx(O,{moduleType:e.key}),(e==null?void 0:e.type)==="form"&&t.jsx(_,{moduleType:e.key})]})};export{oe as default};
