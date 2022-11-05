import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request'
import appRenderer from './app-renderer'
import APEX_DOMAIN from '../../shared/constants/domains/apex'
import ROOT_DOMAIN from '../../shared/constants/domains/root'
import CLIENT_URL from '../../shared/constants/urls/client'
import API_URL from '../../shared/constants/urls/api'
import { buildUrl } from '../../shared/functions/builders/url'
import SITE_NAME from '../../shared/constants/names/site'

function handleRequest(req, res) {
  if (req.hostname === 'warsawlease.pl' || req.hostname === 'www.warsawlease.pl')
    return res.redirect(301, `https://${ROOT_DOMAIN}${req.originalUrl}`)
  if (req.hostname === `www.${APEX_DOMAIN}`) return res.redirect(301, `https://${APEX_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    buildUrl,
    appRenderer,
    siteName: SITE_NAME,
  })
}

export default handleRequest
