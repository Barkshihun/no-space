"use strict";
const removeSpace = () => {
  const placeholderTreeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => (node.placeholder ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
  });
  while (placeholderTreeWalker.nextNode()) {
    const placeholderNode = placeholderTreeWalker.currentNode;
    placeholderNode.placeholder = placeholderNode.placeholder.replace(/ /g, "");
  }
  const titlePropertyTreeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => (node.title ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
  });
  while (titlePropertyTreeWalker.nextNode()) {
    const titlePropertyNode = titlePropertyTreeWalker.currentNode;
    if (titlePropertyNode.attributes.title) {
      titlePropertyNode.attributes.title.textContent = titlePropertyNode.attributes.title.textContent.replace(/ /g, "");
    }
  }
  const valuePropertyTreeWalker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => (node.value ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
  });
  while (valuePropertyTreeWalker.nextNode()) {
    const valuePropertyNode = valuePropertyTreeWalker.currentNode;
    valuePropertyNode.value = valuePropertyNode.value.replace(/ /g, "");
  }
  const textNodeTreeWalker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT);
  while (textNodeTreeWalker.nextNode()) {
    const textNode = textNodeTreeWalker.currentNode;
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
