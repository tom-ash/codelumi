import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import appState from '../../app/constants/app-state.js'
import appRenderer from './app-renderer.js'
import ROOT_DOMAIN from '../../shared/domains/root.js'
import CLIENT_URL from '../../shared/constants/urls/client.js'
import API_URL from '../../shared/constants/urls/api.js'

function handleRequest(req, res) {
  if (req.hostname === 'codelumi.com' || req.hostname === 'www.codelumi.com') return res.status(301).redirect(`https://${ROOT_DOMAIN}${req.originalUrl}`)
  if (req.hostname === `www.${ROOT_DOMAIN}`) return res.status(301).redirect(`https://${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    appState,
    appRenderer
  })
}

export default handleRequest
