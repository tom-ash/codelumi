import { openGraphProvider } from '../../shared/functions/providers/open-graph-provider'
import { schemaOrgProvider } from '../../shared/functions/providers/schema-org-provider'

export function renderPage({
  url,
  canonicalUrl,
  announcementUrl,
  language,
  noIndex,
  title,
  description,
  keywords,
  image,
  openGraph,
  schemaOrg,
  css,
  html,
  preloadedState,
  scriptTags
}) {
  return `
    <!doctype html>
    <html lang="${language}">
      <head>
        <link rel="canonical" href="${canonicalUrl || announcementUrl || `${CLIENT_URL}/${url}`}">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="robots" content="${noIndex ? 'noindex' : 'index,follow,all'}">
        <title>${title}</title>
        <meta name="description" content="${description}">
        ${openGraphProvider({ title, description, image, ...openGraph })}
        ${schemaOrgProvider({ language, title, description, keywords, ...schemaOrg })}
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        ${html}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${scriptTags}
      </body>
    </html>
  `
}
