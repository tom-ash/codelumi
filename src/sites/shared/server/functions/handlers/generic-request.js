import routeSender from '../senders/route.js'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'
import fetch from 'node-fetch'
import buildSitemap from '../sitemaps/build.js'

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

  if (url === 'sitemap1.xml') {
    return fetch(`${apiUrl}/sitemap`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) return response.json()
  
      throw new Error('Sitemap built error!')
    })
    .then(unlocalizedUrlGroups => {
      const sitemap = buildSitemap({ unlocalizedUrlGroups, clientUrl })

      res.set('Content-Type', 'text/xml')
      res.send(sitemap)
    })
  }

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
