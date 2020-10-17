export function renderPage({
  html,
  css,
  preloadedState,
  scriptTags,
  title,
  description,
  url,
  announcementUrl,
  noIndex,
  openGraph,
  schemaOrg,
  language
}) {

  const canonical = announcementUrl ? announcementUrl : `${CLIENT_URL}/${url}`

  return `
    <!doctype html>
    <html lang="${language}">
      <head>
        ${noIndex ? '<meta name="robots" content="noindex">' : ''}
        ${openGraph ? openGraph : ''}
        <link rel="canonical" href="${canonical}">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="description" content="${description}">
        <title>${title}</title>
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        ${schemaOrg || ''}
        ${html}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${scriptTags}
      </body>
    </html>
  `
}
