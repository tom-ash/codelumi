import clientUrl from '../../constants/urls/client.js'

function buildUrl({ path, query, fragment }) {
  // query, fragment -> TODO
  return `${clientUrl}/${path}`
}

export default buildUrl
