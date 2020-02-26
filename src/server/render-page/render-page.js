const defaultTitle = 'Mapa wynajmu mieszkań, lokali użytkowych oraz biur w Warszawie | warsawlease.pl'
const defaultDescription = 'Dwujęzyczna mapa wynajmu mieszkań, biur oraz lokali użytkowych w Warszawie. A bilingual lease map of apartments, offices and usable premises in Warsaw.'

export function renderPage({
  html,
  css,
  preloadedState,
  title,
  description
}) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <title>${title || defaultTitle}</title>
        <meta name="description" content="${description || defaultDescription}">
        <meta name="keywords" content="mapa, wynajem, najem, Warszawa, nieruchomość, nieruchomości, mieszkanie, mieszkania, lokal użytkowy, lokale użytkowe, biuro, biura, map, lease, rent, Warsaw, apartment, apartments, usable premises, office, offices">
        <style type="text/css">${[...css].join('')}</style>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Oswald:300|Roboto&display=swap" rel="stylesheet">
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
