"use strict";
const removeSpace = () => {
  const treeWalker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT);
  while (treeWalker.nextNode()) {
    const textNode = treeWalker.currentNode;
    const parentNodeName = textNode.parentNode.nodeName;
    if (parentNodeName === "SCRIPT" || parentNodeName === "STYLE") {
      continue;
    }
    textNode.textContent = textNode.textContent.replace(/ /g, "");
  }
};
const observer = new MutationObserver(() => removeSpace());
observer.observe(document, { childList: true, subtree: true });
removeSpace();
