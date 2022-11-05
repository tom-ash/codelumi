import routeSender from '../senders/route'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url'
import getDevice from '../../../shared/functions/getters/device'
import getVisitorState from '../../../shared/functions/getters/visitor-state'
import sitemapSender from '../senders/sitemap'

function genericRequestHandler({ req, res, clientUrl, apiUrl, appRenderer, siteName }) {
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
    apiUrl,
    url,
    query,
    device,
    visitorState,
    accessToken,
    appRenderer,
    siteName,
  })
}

export default genericRequestHandler
