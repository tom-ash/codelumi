import fetch from 'node-fetch'
import buildSitemap from '../sitemaps/build'

function sitemapSender({ res, clientUrl, apiUrl }) {
  fetch(`${apiUrl}/sitemap`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('Sitemap fetch error!')
    })
    .then(linkGroups => {
      const sitemap = buildSitemap({ linkGroups, clientUrl })

      res.set('Content-Type', 'text/xml')
      res.send(sitemap)
    })
}

export default sitemapSender
