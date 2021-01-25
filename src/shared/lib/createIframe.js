export function createIframe(name, src, debug, parentSelector, styles) {
  src = src || 'javascript:false';
  if (parentSelector) {
    const $parent = document.querySelector(parentSelector);
    const tmpElem = document.createElement('div');
    tmpElem.innerHTML = `<iframe name="${name}" id="${name}" src="${src}" style="">`;
    const iframe = tmpElem.firstChild;

    Object
      .keys(styles)
      .forEach(key => {
        iframe.style[key] = styles[key]
      });

    if (debug) {
      iframe.style.display = 'none';
    }

    $parent.prepend(iframe);

    return iframe;
  }

}
