import routeSender from '../senders/route.js'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'
import sitemapSender from '../senders/sitemap.js'

function genericRequestHandler({
  req, res,
  clientUrl, apiUrl,
  appRenderer
}) {
  const { cookies, originalUrl, headers } = req
  const { access_token: accessToken } = cookies
  const url = getPureUrl(originalUrl)
  const queryMatch = originalUrl.match(/\?.+$/)
  const query = queryMatch ? queryMatch[0] : ''
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  if (url === 'sitemap.xml') return sitemapSender({ res, clientUrl, apiUrl })

  routeSender({
    res,
    clientUrl, apiUrl,
    url, query, device,
    visitorState,
    accessToken,
    appRenderer
  })
}

export default genericRequestHandler
