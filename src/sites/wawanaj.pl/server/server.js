import 'react-app-polyfill/ie9';
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
import { handleRequest } from './handle-request'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import vhost from 'vhost'

function allowCompression (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

const app = Express()

if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

function createVirtualHost(domainName, dirPath) {
  return vhost(domainName, Express.static( dirPath ))
}


const warsawlease_pl = vhost(/^.*(wawanaj|warsawlease).*$/, Express.static('dist/sites/wawanaj.pl/client'))


app.use(cookieParser())
app.use(compression({ filter: allowCompression }))

app.use(warsawlease_pl)

app.use(handleRequest)
app.listen(process.env.PORT || 8080)
