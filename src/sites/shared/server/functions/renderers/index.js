import { openGraphProvider } from '../providers/open-graph'
import { schemaOrgProvider } from '../providers/schema-org'
import pretty from 'pretty'

function indexRenderer({
  url, canonicalUrl, lang, noIndex,
  title, description, keywords, image, openGraph, schemaOrg,
  css, html, preloadedState, scriptTags
}) {
  const charsetMeta = `<meta charset="UTF-8">`
  const viewportMeta = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
  const canonicalMeta = `<link rel="canonical" href="${`${CLIENT_URL}/${canonicalUrl || url}`}">`
  const robotsMeta = `<meta name="robots" content="${noIndex ? 'noindex' : 'index,follow,all'}">`
  const titleMeta = `<title>${title}</title>`
  const descriptionMeta = `<meta name="description" content="${description}">`
  const keywordsMeta = `<meta name="keywords" content="${keywords}">`
  const openGraphMeta = openGraphProvider({ title, description, keywords, image, ...openGraph })
  const schemaOrgMeta = schemaOrgProvider({ lang, title, description, keywords, ...schemaOrg })
  const style = `<style type="text/css">${[...css].join('')}</style>`
  const preloadedStateScript = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`
  const indexAsHtml = (
    `<!doctype html>
    <html lang="${lang}">
      <head>
        ${charsetMeta}
        ${viewportMeta}
        ${canonicalMeta}
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
