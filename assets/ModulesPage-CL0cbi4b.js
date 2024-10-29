import{r as l,a3 as g,j as e,B as c,G as i,S as b,U as y,V as j,x as p,a4 as v,D as k}from"./index-YJqmW9KL.js";import{m as u,M as w}from"./Module-2MEbNrJd.js";import{M as f}from"./MoreHoriz-x6EIQjlA.js";import{T as B}from"./Tooltip-Bq157Mjh.js";import"./useQueryParam-mKhBW43I.js";import"./SebraForm-BHSdrVvv.js";import"./index.esm-Ckl5Vq71.js";import"./Tabs-C1En54He.js";import"./useAssignmentsMutations-C88PMQrZ.js";import"./useCompaniesQueries-NfGHUcxQ.js";import"./useContactsQueries-BDDHK5Vo.js";import"./useAssignmentsQueries-CwSf4xVb.js";import"./AssignmentConfig-C1mRv69m.js";import"./date-2dI2IryV.js";import"./useCompaniesMutations-B3SrEh7H.js";import"./CompanyConfig-BYQWfRtL.js";import"./useContactsMutations-C3zmE2pd.js";import"./ContactConfig-CrRcELPR.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="bc3c0c7b-ff7b-49ab-ab93-65b66997b6b9",t._sentryDebugIdIdentifier="sentry-dbid-bc3c0c7b-ff7b-49ab-ab93-65b66997b6b9")}catch{}})();const C=(t,{label:s,height:a,disabled:o})=>`
<a
  style="${o?"color: gray; cursor: default;":"color: #5969cf;"}"
  tabindex="${o?"-1":"0"}"
  tabindex="0"
  ${o?"href='#'":""}
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
        iframe.style.height = "${a}px";
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
  aria-disabled="${o}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">Infoga - ${s}</span>
</a>
`,I=t=>{const[s,a]=l.useState("");return l.useEffect(()=>{setTimeout(()=>a(`${location.origin}${g}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:C(s,t)}})},K=()=>{const[t,s]=l.useState(()=>{const n=new URLSearchParams(window.location.search),r=u.find(m=>m.key===n.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[a,o]=l.useState(t==null?void 0:t.label),[d,x]=l.useState(500),h=n=>{const r=u.find(m=>m.key===n.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),s(r),o(r==null?void 0:r.title)};return e.jsxs(c,{children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:!0,children:e.jsxs(b,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(y,{children:"Välj modul"}),e.jsxs(j,{value:(t==null?void 0:t.key)??"",onChange:h,label:"Välj modul",children:[e.jsx(f,{value:"",children:e.jsx("em",{children:"Välj modul"})}),u.map(n=>e.jsx(f,{value:n.key,children:n.label},n.key))]})]})}),e.jsx(i,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(B,{title:"Dra bokmärket till bokmärkesfältet",arrow:!0,children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(I,{label:(t==null?void 0:t.title)??"",height:d,disabled:!t})})})})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:8,children:e.jsx(p,{fullWidth:!0,label:"Titel",value:a??"",onChange:n=>o(n.target.value),variant:"outlined"})}),e.jsx(i,{item:!0,xs:4,children:e.jsx(p,{fullWidth:!0,label:"Höjd",type:"number",value:d,onChange:n=>x(parseInt(n.target.value)),variant:"outlined",InputProps:{endAdornment:e.jsx(v,{position:"end",children:"px"})}})})]}),e.jsx(k,{sx:{my:2}}),e.jsx(c,{sx:{height:d,border:"2px dashed",borderColor:"primary.main",overflow:"hidden"},children:e.jsx(w,{title:a??null,selectedModule:t??null})})]})};export{K as default};
//# sourceMappingURL=ModulesPage-CL0cbi4b.js.map
