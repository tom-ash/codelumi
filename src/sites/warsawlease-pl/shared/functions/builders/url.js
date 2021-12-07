import clientUrl from '../../constants/urls/client.js'
import buildUrlGeneric from '../../../../shared/shared/functions/routes/builders/url.js'

function buildUrl({ path, query, fragment }) {
  return buildUrlGeneric({ clientUrl, path, query, fragment })
}

export default buildUrl
