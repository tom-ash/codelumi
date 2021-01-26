import 'react-app-polyfill/ie9';
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import vhost from 'vhost'

import { handleRequest } from '../sites/wawanaj.pl/server/handle-request'
import handleWarsawDigitalRequest from '../sites/warsaw-digital/server/handle-request'

function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()

if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

const warsawLeasePlStatic = vhost(/^.*(wawanaj|warsawlease).*$/, Express.static('dist/sites/wawanaj.pl/client'))
const warsawLeasePlRequestHandler = vhost(/^.*(wawanaj|warsawlease).*$/, handleRequest)

const warsawDigitalRequestHost = vhost(/^.*warsaw.digital.*$/, handleWarsawDigitalRequest)

app.use(warsawLeasePlStatic)
app.use(warsawLeasePlRequestHandler)

app.use(warsawDigitalRequestHost)

app.listen(process.env.PORT || 8080)
