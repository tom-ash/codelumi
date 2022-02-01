import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import appRenderer from './app-renderer.js'
import APEX_DOMAIN from '../../shared/constants/domains/apex.js'
import ROOT_DOMAIN from '../../shared/constants/domains/root.js'
import CLIENT_URL from '../../shared/constants/urls/client.js'
import API_URL from '../../shared/constants/urls/api.js'
import buildUrl from '../../shared/functions/builders/url.js'
import SITE_NAME from '../../shared/constants/names/site.js'

function handleRequest(req, res) {
  if (req.hostname === 'warsawlease.pl' || req.hostname === 'www.warsawlease.pl') return res.status(301).redirect(`https://${ROOT_DOMAIN}${req.originalUrl}`)
  if (req.hostname === APEX_DOMAIN) return res.redirect(`https://${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    buildUrl,
    appRenderer,
    siteName: SITE_NAME
  })
}

export default handleRequest
