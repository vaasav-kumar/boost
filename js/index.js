generateTag = (tag, src, type, rel, href, name, content) => {
  let tagName = document.createElement(tag)
  src && (tagName.src = src)
  type && (tagName.type = type)
  rel && (tagName.rel = rel)
  href && (tagName.href = href)
  name && (tagName.name = name)
  content && (tagName.content = content)
  document.head.appendChild(tagName)
}
loadImports = () => {
  generateTag('script', '/assets/js/utils.js', 'text/javascript')
  generateTag('link', null, 'text/css', 'stylesheet', '/assets/css/index.css')
  generateTag('link', null, 'image/png', 'icon', '/assets/images/favicon.png')
  generateTag('meta', null, null, null, null, 'viewport', 'width=device-width, initial-scale=1.0')
}
loadImports()
