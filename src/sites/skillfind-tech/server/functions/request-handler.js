import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request'
import appRenderer from './app-renderer'
import ROOT_DOMAIN from '../../shared/domains/root'
import CLIENT_URL from '../../shared/constants/urls/client'
import API_URL from '../../shared/constants/urls/api'
import { buildUrl } from '../../shared/functions/routes/builders/url'
import SITE_NAME from '../../shared/constants/names/site'
import { getGoogleAnalyticsMeasurementId } from '../../app/functions/analytics/google/getters/measurement-id'

console.log(getGoogleAnalyticsMeasurementId())

function handleRequest(req, res) {
  if (req.hostname === `www.${ROOT_DOMAIN}`) return res.redirect(301, `https://${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    siteName: SITE_NAME,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    gtmId: getGoogleAnalyticsMeasurementId(),
    buildUrl,
    appRenderer,
  })
}

export default handleRequest
