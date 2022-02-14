import 'react-app-polyfill/ie9'
// @ts-ignore
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
// @ts-ignore
import compression from 'compression'
// @ts-ignore
import cookieParser from 'cookie-parser'
// @ts-ignore
import vhost from 'vhost'
import mapawynajmuPlRequestHandler from '../sites/mapawynajmu-pl/server/functions/request-handler.js'
import soundofItHandleRequest from '../sites/soundof-it/server/functions/request-handler.js'
import * as Sentry from '@sentry/node'
// import * as Tracing from '@sentry/tracing'

Sentry.init({
  dsn: "https://ac81f10d287d4659865d2571d7be7b45@o876363.ingest.sentry.io/5825795",
  tracesSampleRate: 1.0
})

// @ts-ignore
function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()
app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

// @ts-ignore
if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([], [], 301))
}

app.use(vhost(/^.*(soundof).*$/, Express.static('dist/sites/soundof-it/client')))
app.use(vhost(/^.*(soundof).*$/, soundofItHandleRequest))

app.use(vhost(/^.*(warsawlease).*$/, Express.static('dist/sites/mapawynajmu-pl/client')))
app.use(vhost(/^.*(warsawlease).*$/, mapawynajmuPlRequestHandler))

app.use(vhost(/^.*(mapawynajmu).*$/, Express.static('dist/sites/mapawynajmu-pl/client')))
app.use(vhost(/^.*(mapawynajmu).*$/, mapawynajmuPlRequestHandler))

app.listen(process.env.PORT || 8080)
