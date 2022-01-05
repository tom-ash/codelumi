import 'react-app-polyfill/ie9';
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import vhost from 'vhost'
import mapawynajmuPlRequestHandler from '../sites/mapawynajmu-pl/server/functions/request-handler.js'
import soundofItHandleRequest from '../sites/soundof-it/server/functions/request-handler.js'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

Sentry.init({
  dsn: "https://ac81f10d287d4659865d2571d7be7b45@o876363.ingest.sentry.io/5825795",
  tracesSampleRate: 1.0
})

function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()
app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

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
