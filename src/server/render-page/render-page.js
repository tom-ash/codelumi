export function renderPage({
  html,
  css,
  preloadedState,
  title,
  description,
  url
}) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="canonical" href="${CLIENT_URL}/${url}">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <style type="text/css">${[...css].join('')}</style>
        <link href="https://fonts.googleapis.com/css?family=Iceland|Montserrat|Open+Sans|Oswald:300|Roboto&display=swap" rel="stylesheet">
      </head>
      <body>
        ${html}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `
}
