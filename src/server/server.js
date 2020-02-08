import 'react-app-polyfill/ie9';
import Express from 'express'
import { redirectToHTTPS } from 'express-http-to-https'
import { handleRequest } from './handle-request/handle-request'

const app = Express()

if (['production', 'staging'].indexOf(APP_ENV) !== -1) {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

app.use('/', Express.static('dist/client'))
app.use(handleRequest)
app.listen(process.env.PORT || 8080)
