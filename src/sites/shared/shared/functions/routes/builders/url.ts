interface BuildUrlGenericArgs {
  clientUrl: string
  path: string
  // query: string
  // fragment: string
}

function buildUrlGeneric(args: BuildUrlGenericArgs) {
  const {
    clientUrl,
    path,
    // query,
    // fragment
  } = args
  const purePath = path ? path.replace(/^\//, '') : ''

  return `${clientUrl}/${purePath}`
}

export default buildUrlGeneric
