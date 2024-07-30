export const bookmark = `
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
`;

const Bookmark = () => {
  return <div dangerouslySetInnerHTML={{ __html: bookmark }} />;
};

export default Bookmark;
