import 'react-app-polyfill/ie9';
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import vhost from 'vhost'
import warsawleasePlRequestHandler from '../sites/warsawlease-pl/server/functions/request-handler.js'
import codeLumiHandleRequest from '../sites/codelumi/server/functions/request-handler.js'

function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()
app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

app.use(vhost(/^.*(codelumi).*$/, Express.static('dist/sites/codelumi/client')))
app.use(vhost(/^.*(codelumi).*$/, codeLumiHandleRequest))

app.use(vhost(/^.*(warsawlease).*$/, Express.static('dist/sites/warsawlease-pl/client')))
app.use(vhost(/^.*(warsawlease).*$/, warsawleasePlRequestHandler))

app.listen(process.env.PORT || 8080)
