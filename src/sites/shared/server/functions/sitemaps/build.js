import pretty from 'pretty'

function buildSitemap({ unlocalizedUrlGroups, clientUrl }) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${buildUrls({ unlocalizedUrlGroups, clientUrl })}
    </urlset>`
  )
}

function buildUrls({ unlocalizedUrlGroups, clientUrl }) {
  let urls = ''

  unlocalizedUrlGroups.map(unlocalizedUrlGroup => {
    urls += buildLocalizedUrls({ unlocalizedUrlGroup, clientUrl })
  })

  // TODO Change to pretty xml.
  return pretty(urls)
}

function buildLocalizedUrls({ unlocalizedUrlGroup, clientUrl }) {
  let localizedUrls = ''

  unlocalizedUrlGroup.map(localizedUrl => {
    const { path, modifiedon, changefreq, priority } = localizedUrl

    localizedUrls += (
      `<url>
        <loc>${clientUrl}/${path}</loc>
        ${modifiedon ? `<lastmod>${modifiedon}</lastmod>` : ''}
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
        ${buildAltUrls({ unlocalizedUrlGroup, clientUrl })}
      </url>`
    )
  })

  return localizedUrls
}

function buildAltUrls({ unlocalizedUrlGroup, clientUrl }) {
  if (unlocalizedUrlGroup.length < 2) return ''

  let altLocalizedUrls = ''
  
  unlocalizedUrlGroup.map(localizedUrl => {
    altLocalizedUrls += (
      `<xhtml:link
         rel="alternate"
         href="${clientUrl}/${localizedUrl.path}"
         hreflang="${localizedUrl.lang}" />`
    )
  })

  return altLocalizedUrls
}

export default buildSitemap
