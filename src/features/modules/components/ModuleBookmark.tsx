interface ModuleBookmarkProps {
  label?: string;
  disabled?: boolean;
}

const moduleBookmark = ({ label, disabled }: ModuleBookmarkProps) => `
<a
  style="${disabled ? 'color: gray; cursor: default;' : 'color: #5969cf;'}"
  tabindex="${disabled ? '-1' : '0'}"
  tabindex="0"
  ${disabled ? "href='#'" : ''}
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
  aria-label="${label}"
  aria-disabled="${disabled}"
>
  <svg
    style="fill: currentColor; font-size: 1.5rem; width: 1em; height: 1em;"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"></path>
  </svg>
  <span style="display: none">${label}</span>
</a>
`;

const ModuleBookmark = (props: ModuleBookmarkProps) => {
  return <div dangerouslySetInnerHTML={{ __html: moduleBookmark(props) }} />;
};

export default ModuleBookmark;
