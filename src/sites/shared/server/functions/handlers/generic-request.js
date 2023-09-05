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

  const deviceFromHeader = headers['user-agent']
  const langsHeader = headers['accept-language']
  const langFromHeader = langsHeader ? langsHeader.split(',')[0] : 'None' // TODO!

  routeSender({
    res,
    url,
    query,
    device,
    deviceFromHeader,
    langFromHeader,
    accessToken,
    appRenderer,
    siteName,
    clientUrl,
    apiUrl,
    gtmId,
  })
}

export default genericRequestHandler
