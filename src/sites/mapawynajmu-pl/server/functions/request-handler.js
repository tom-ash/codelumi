import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request'
import appRenderer from './app-renderer'
import APEX_DOMAIN from '../../shared/constants/domains/apex'
import CLIENT_URL from '../../shared/constants/urls/client'
import API_URL from '../../shared/constants/urls/api'
import SITE_NAME from '../../shared/constants/names/site'

const GTM_ID = 'GTM-M34CFVTL'

function handleRequest(req, res) {
  if (req.hostname === `www.${APEX_DOMAIN}`) return res.redirect(301, `https://${APEX_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    siteName: SITE_NAME,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    gtmId: GTM_ID,
    appRenderer,
  })
}

export default handleRequest
