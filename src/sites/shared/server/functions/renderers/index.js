import openGraphProvider from '../providers/open-graph'
import schemaOrgProvider from '../providers/schema-org'
import pretty from 'pretty'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'
import buildAlternateLinks from '../builders/alternate_links.js'

function indexRenderer({
  clientUrl, url, canonicalUrl, noIndex, links, langs, lang, buildUrl,
  title, description, keywords, openGraph, schema,
  html, css, preloadedState, scriptTags
}) {
  const charsetMeta = `<meta charset="UTF-8">`
  const viewportMeta = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
  const canonicalPath = typeof canonicalUrl === 'string' ? canonicalUrl : url
  const canonicalMeta = `<link rel="canonical" href="${getPureUrl(`${clientUrl}/${canonicalPath}`)}">`
  const robotsMeta = `<meta name="robots" content="${noIndex ? 'noindex' : 'index,follow,all'}">`
  const titleMeta = `<title>${title}</title>`
  const descriptionMeta = `<meta name="description" content="${description}">`
  const keywordsMeta = `<meta name="keywords" content="${keywords}">`
  const openGraphMeta = openGraphProvider(openGraph)
  const schemaOrgMeta = `<script type="application/ld+json">${schema}</script>`
  const style = `<style type="text/css">${[...css].join('')}</style>`
  const preloadedStateScript = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`
  const alternateLinks = buildAlternateLinks({ links, langs, buildUrl })
  const indexAsHtml = (
    `<!doctype html>
    <html lang="${lang}">
      <head>
        ${charsetMeta}
        ${viewportMeta}
        ${canonicalMeta}
        ${alternateLinks}
        ${robotsMeta}
        ${titleMeta}
        ${descriptionMeta}
        ${keywordsMeta}
        ${openGraphMeta}
        ${schemaOrgMeta}
        ${style}
      </head>
      <body>
        ${html}
        ${scriptTags}
        ${preloadedStateScript}
      </body>
    </html>`
  )

  return pretty(indexAsHtml)
}

export default indexRenderer
