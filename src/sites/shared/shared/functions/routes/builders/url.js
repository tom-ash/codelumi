function buildUrlGeneric({ clientUrl, path, query, fragment }) {
  const purePath = path ? path.replace(/^\//, '') : ''

  return `${clientUrl}/${purePath}`
}

export default buildUrlGeneric
