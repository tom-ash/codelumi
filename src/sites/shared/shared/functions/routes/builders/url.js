function buildUrlGeneric({ clientUrl, path, query, fragment }) {
  // query, fragment -> TODO
  return `${clientUrl}/${path}`
}

export default buildUrlGeneric
