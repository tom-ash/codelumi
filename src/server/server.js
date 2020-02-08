import 'react-app-polyfill/ie9';
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../app/functions/root_reducer.js'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

import { redirectToHTTPS } from 'express-http-to-https'

const app = Express()

if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

app.use('/', Express.static('dist/client'))
app.use(handleRender)

const css = new Set()

function handleRender(req, res) {
  function getRoutState(route) {
    switch(route) {
      case '/dodaj_ogloszenie': return { showAnnouncementCreate: true }
      case '/add_announcement': return { showAnnouncementCreate: true, language: 'en' }
      case '/zarejestruj': return { showUserCreate: true }
      case '/sign_up': return { showUserCreate: true, language: 'en' }
      case '/zaloguj': return { showUserAuthorize: true }
      case '/sign_in': return { showUserAuthorize: true, language: 'en' }
      case '/o_serwisie': return { showVisitorAbout: true }
      case '/about': return { showVisitorAbout: true, language: 'en' }
      case '/kontakt': return { showVisitorContact: true }
      case '/contact': return { showVisitorContact: true, language: 'en' }
      case '/regulamin': return { showVisitorTermsOfService: true }
      case '/terms_of_service': return { showVisitorTermsOfService: true, language: 'en' }
      case '/polityka_plikow_cookies': return { showVisitorCookiesPolicy: true }
      case '/cookies_policy': return { showVisitorCookiesPolicy: true, language: 'en' }
      case '/polityka_prywatnosci': return { showVisitorPrivacyPolicy: true }
      case '/privacy_policy': return { showVisitorPrivacyPolicy: true, language: 'en' }
      case '/ustawienia_prywatnosci': return { showVisitorPrivacySettings: true }
      case '/privacy_settings': return { showVisitorPrivacySettings: true, language: 'en' }
      default: return {}
    }
  }

  const route = getRoutState(req.originalUrl)
  const store = createStore(rootReducer(route))

  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const html = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <div id='app'>
          <App />
        </div>
      </StyleContext.Provider>
    </Provider>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <title>warsawlease.pl</title>
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

app.listen(process.env.PORT || 8080)
