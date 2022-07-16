function removeSpace() {
  const allElems = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElems.length; i++) {
    const elem = allElems[i];
    if (elem.tagName === "STYLE" || elem.tagName === "SCRIPT") {
      continue;
    }
    for (let i = 0; i < elem.childNodes.length; i++) {
      const elemChildNode = elem.childNodes[i];
      if (elemChildNode.nodeType === 3) {
        elemChildNode.nodeValue = elemChildNode.nodeValue.replace(/ /g, "");
      }
    }
  }
}
const observer = new MutationObserver(() => removeSpace());
observer.observe(document, { childList: true, subtree: true });
removeSpace();
