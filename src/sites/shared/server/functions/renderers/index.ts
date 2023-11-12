// @ts-ignore
import pretty from 'pretty'
import { openGraphBuilder } from '../../../shared/functions/builders/open-graph-builder'
import { loadGtm } from '../../../app/functions/tags/load-gtm'
import { buildAlternateLangLinkElements } from '../builders/build-alternate-lang-links'

// TODO: Add below after the opening body tag.
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=[GTM_ID]"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

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
    author,
    alternateLangLinks,
  } = props

  const authorMeta = author ? `<meta name="author" content="${author}">` : ''

  const indexAsHtml = `<!doctype html>
    <html lang="${lang}">
      <head>
        <title>${title}</title>
        <link rel="canonical" href="${canonicalUrl}">
        ${buildAlternateLangLinkElements(alternateLangLinks)}
        <link rel="icon" type="image/x-icon" href="${clientUrl}/favicon.ico">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="robots" content="${robots}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        ${authorMeta}
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
