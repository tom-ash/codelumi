const title = 'warsawlease.pl: Ogłoszenia wynajmu warszawskich biur i lokali użytkowych'

export function renderPage({ html, preloadedState, css }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <title>${title}</title>
        <meta name="description" content="Dwujęzyczna baza ogłoszeń wynajmu warszawskich biur oraz lokali użytkowych. A bilingual database of lease announcements regarding Warsaw offices and usable premises.">
        <meta name="keywords" content="wynajem, najem, biura, biuro, lokale użytkowe, lokal użytkowy, Warszawa, mapa, lease, offices, office, usable premises, Warsaw, map">
        <style type="text/css">${[...css].join('')}</style>
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
