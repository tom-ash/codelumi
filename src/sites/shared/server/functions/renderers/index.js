import pretty from 'pretty'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'
import buildAlternateLinks from '../builders/alternate_links.js'

function indexRenderer({
  lang, canonicalUrl, alternateLinks,
  title, robots, description, keywords,
  openGraph, schema,
  html, css, preloadedState, scriptTags
}) {
  // const alternateLinks = buildAlternateLinks({ links, langs, buildUrl })
  
  const indexAsHtml = (
    `<!doctype html>
    <html lang="${lang}">
      <head>
        <link rel="canonical" href="${canonicalUrl}">
        ${alternateLinks}
        <title>${title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="robots" content="${robots}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        ${openGraph}
        <script type="application/ld+json">${schema}</script>
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        ${html}
        ${scriptTags}
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
      </body>
    </html>`
  )

  return pretty(indexAsHtml)
}

export default indexRenderer
