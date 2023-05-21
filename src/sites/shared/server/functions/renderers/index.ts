// @ts-ignore
import pretty from 'pretty'
import { openGraphBuilder } from '../../../shared/functions/builders/open-graph-builder'
import { loadGtm } from '../../../app/functions/tags/load-gtm'

// @ts-ignore
function indexRenderer(props) {
  const {
    lang,
    canonicalUrl,
    alternateLinks,
    title,
    robots,
    description,
    keywords,
    openGraph,
    schemaOrg,
    html,
    css,
    preloadedState,
    scriptTags,
    clientUrl,
    gtmId,
  } = props

  const indexAsHtml = `<!doctype html>
    <html lang="${lang}">
      <head>
        <title>${title}</title>
        <link rel="canonical" href="${canonicalUrl}">
        ${alternateLinks}
        <link rel="icon" type="image/x-icon" href="${clientUrl}/favicon.ico">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="robots" content="${robots}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        ${openGraphBuilder(openGraph)}
        <script type="application/ld+json">${JSON.stringify(schemaOrg)}</script>
        <script>${loadGtm(gtmId)}</script>
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        ${html}
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
        ${scriptTags}
      </body>
    </html>`

  return pretty(indexAsHtml)
}

export default indexRenderer
