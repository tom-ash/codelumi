import pretty from 'pretty'

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
    schema,
    html,
    css,
    preloadedState,
    scriptTags
  } = props

  const indexAsHtml = (
    `<!doctype html>
    <html lang="${lang}">
      <head>
        <title>${title}</title>
        <link rel="canonical" href="${canonicalUrl}">
        ${alternateLinks}
        <link rel="icon" type="image/x-icon" href="https://mapawynajmu.pl/favicon.ico">
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
