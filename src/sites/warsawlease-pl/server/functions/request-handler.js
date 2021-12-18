import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import appRenderer from './app-renderer.js'
import ROOT_DOMAIN from '../../shared/constants/domains/root.js'
import CLIENT_URL from '../../shared/constants/urls/client.js'
import API_URL from '../../shared/constants/urls/api.js'
import buildUrl from '../../shared/functions/builders/url.js'

function handleRequest(req, res) {
  if (req.hostname === ROOT_DOMAIN) return res.redirect(`https://www.${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    buildUrl,
    appRenderer
  })
}

export default handleRequest
