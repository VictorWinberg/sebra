import{j as e,B as c,f as p,r as u,K as d,M as y,N as f}from"./index-CT3AHrBx.js";import{A as g,u as x}from"./useAssignmentsMutations-BMSJlKbs.js";import{C as h,u as b}from"./useCompaniesMutations-CoxSyjk7.js";import{f as C,i as v}from"./useSnackbar-C2zLVHRn.js";import{a as j}from"./AssignmentConfig-zjRtNZmD.js";import{u as k}from"./useAssignmentsQueries-LtLSRrwC.js";import{c as B}from"./CompanyConfig-tEvm1UHn.js";import{u as F}from"./useCompaniesQueries-kH5QhIh0.js";import{u as M,F as E}from"./useQueryParam-D8UyOyx2.js";import{M as r}from"./MoreHoriz-CxyVehkV.js";import"./index.esm-D6PEksdK.js";import"./useContactsQueries-B_qIv4L5.js";import"./FlexGrow-BwQ7dsQm.js";import"./Tooltip-IZIKTl7T.js";import"./date-BKJXFPr-.js";const I=`
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
`,S=()=>e.jsx("div",{dangerouslySetInnerHTML:{__html:I}}),T={company:{type:"form",FormComponent:h,createMutation:b},assignment:{type:"form",FormComponent:g,createMutation:x}},w=({moduleType:t})=>{const{FormComponent:a,createMutation:s}=T[t],{mutate:o}=s();return e.jsxs(a,{onSubmit:o,children:[e.jsx(c,{sx:{my:1}}),e.jsx(p,{size:"large",type:"submit",variant:"contained",color:"primary",children:"Spara"})]})},L={companies:{type:"table",columns:B,useData:F},assignments:{type:"table",columns:j,useData:k}},R=({moduleType:t})=>{const a=L[t],{columns:s,useData:o}=a,[m,n]=M("filters",E,[]),{data:i=[]}=o(),l=C({data:i,columns:s,initialState:{columnFilters:m??[]},enableEditing:!1,enableRowActions:!1,enableColumnResizing:!1,enableStickyHeader:!1});return u.useEffect(()=>{n(l.getState().columnFilters)},[l,n]),e.jsx(v,{table:l})},J=()=>{const[t,a]=u.useState(),s=[{type:"form",key:"company"},{type:"form",key:"assignment"},{type:"table",key:"companies"},{type:"table",key:"assignments"}],o=m=>{const n=s.find(i=>i.key===m.target.value);a(n)};return e.jsxs(c,{children:[e.jsx(S,{}),e.jsxs(d,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(y,{children:"Välj modul"}),e.jsxs(f,{value:(t==null?void 0:t.key)??"",onChange:o,label:"Välj modul",children:[e.jsx(r,{value:"company",children:"Företagsformulär"}),e.jsx(r,{value:"assignment",children:"Uppdragsformulär"}),e.jsx(r,{value:"companies",children:"Företagstabell"}),e.jsx(r,{value:"assignments",children:"Uppdragstabell"})]})]}),(t==null?void 0:t.type)==="table"&&e.jsx(R,{moduleType:t.key}),(t==null?void 0:t.type)==="form"&&e.jsx(w,{moduleType:t.key})]})};export{J as default};
