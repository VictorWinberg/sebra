import{r as l,ak as g,j as e,B as c,G as i,a3 as y,a4 as b,a5 as j,a6 as p,Q as f,al as v,a1 as k}from"./index-Wz3Ywbj5.js";import{m as u,M as w}from"./Module-B9OuAwg6.js";import{T as B}from"./Tooltip--He67NIp.js";import"./useQueryParam-DYoKtSME.js";import"./RouterLink-BseUmFNE.js";import"./MoreHoriz-C32XwXmh.js";import"./index.esm-_iGQBVP7.js";import"./createStyled-CKX6XILu.js";import"./FormControlLabel-cg8IhE3Y.js";import"./Tabs-iXjsQtoR.js";import"./useAssignmentsMutations-BvrelSV7.js";import"./useCompaniesQueries-CvPfiiuR.js";import"./useContactsQueries-D5WnVdse.js";import"./useAssignmentsQueries-D1XaOkxN.js";import"./AssignmentConfig-Eoa8p981.js";import"./date-wXVMu8CQ.js";import"./Link-BKpCVJ4r.js";import"./useCompaniesMutations-z6fAovSX.js";import"./CompanyConfig-uJ7O8hce.js";import"./useContactsMutations-D4jL5q7s.js";import"./ContactConfig-BlTKqB2V.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="55db9158-a264-4e49-ac25-121217e62fb6",t._sentryDebugIdIdentifier="sentry-dbid-55db9158-a264-4e49-ac25-121217e62fb6")}catch{}})();const C=(t,{label:n,height:s,disabled:o})=>`
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
        iframe.style.height = "${s}px";
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
  <span style="display: none">Infoga - ${n}</span>
</a>
`,I=t=>{const[n,s]=l.useState("");return l.useEffect(()=>{setTimeout(()=>s(`${location.origin}${g}module${location.search}`),0)},[t]),e.jsx("div",{dangerouslySetInnerHTML:{__html:C(n,t)}})},Q=()=>{const[t,n]=l.useState(()=>{const a=new URLSearchParams(window.location.search),r=u.find(m=>m.key===a.get("module"));return r&&(r.props={...r.props,...r.configProps}),r}),[s,o]=l.useState(t==null?void 0:t.label),[d,x]=l.useState(500),h=a=>{const r=u.find(m=>m.key===a.target.value);r&&(r.props={...r.props,...r.configProps}),window.history.replaceState(null,"",window.location.pathname),n(r),o(r==null?void 0:r.title)};return e.jsxs(c,{children:[e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:!0,children:e.jsxs(y,{variant:"outlined",fullWidth:!0,sx:{my:2},children:[e.jsx(b,{children:"Välj modul"}),e.jsxs(j,{value:(t==null?void 0:t.key)??"",onChange:h,label:"Välj modul",children:[e.jsx(p,{value:"",children:e.jsx("em",{children:"Välj modul"})}),u.map(a=>e.jsx(p,{value:a.key,children:a.label},a.key))]})]})}),e.jsx(i,{item:!0,sx:{alignContent:"center",textAlign:"center"},children:e.jsx(B,{title:"Dra bokmärket till bokmärkesfältet",arrow:!0,children:e.jsx(c,{sx:{width:24,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(I,{label:(t==null?void 0:t.title)??"",height:d,disabled:!t})})})})]}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:8,children:e.jsx(f,{fullWidth:!0,label:"Titel",value:s??"",onChange:a=>o(a.target.value),variant:"outlined"})}),e.jsx(i,{item:!0,xs:4,children:e.jsx(f,{fullWidth:!0,label:"Höjd",type:"number",value:d,onChange:a=>x(parseInt(a.target.value)),variant:"outlined",InputProps:{endAdornment:e.jsx(v,{position:"end",children:"px"})}})})]}),e.jsx(k,{sx:{my:2}}),e.jsx(c,{sx:{height:d,border:"2px dashed",borderColor:"primary.main",overflow:"hidden"},children:e.jsx(w,{title:s??null,selectedModule:t??null})})]})};export{Q as default};
//# sourceMappingURL=ModulesPage-D1NJWs1V.js.map
