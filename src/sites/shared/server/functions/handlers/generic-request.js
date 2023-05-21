import routeSender from '../senders/route'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url'
import getDevice from '../../../shared/functions/getters/device'
import sitemapSender from '../senders/sitemap'

function genericRequestHandler({ req, res, clientUrl, apiUrl, appRenderer, siteName, gtmId }) {
  const { cookies, originalUrl, headers } = req
  const { access_token: accessToken } = cookies
  const url = getPureUrl(originalUrl)
  const queryMatch = originalUrl.match(/\?.+$/)
  const query = queryMatch ? queryMatch[0] : ''
  const device = getDevice(headers['user-agent'])

  if (url === 'sitemap.xml') return sitemapSender({ res, clientUrl, apiUrl })

  routeSender({
    res,
    url,
    query,
    device,
    accessToken,
    appRenderer,
    siteName,
    clientUrl,
    apiUrl,
    gtmId,
  })
}

export default genericRequestHandler
