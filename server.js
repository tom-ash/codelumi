const compression = require('compression')
const express = require('express')
const app = express()
const { redirectToHTTPS } = require('express-http-to-https')
const path = require('path')

app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) return false

  return compression.filter(req, res)
}

app.use(express.static(path.join(__dirname, './dist/app')))

if (process.env.NODE_ENV === 'production') {
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))
}

const router = express.Router();
router.get('*', async (req, res) => {
  res.send(`
    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Arimo|Noto+Sans|Source+Sans+Pro" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <title>warsawlease.pl</title>
    <meta name="description" content="warsawlease.pl - dwujęzyczna baza ogłoszeń wynajmu warszawskich biur oraz lokali użytkowych / a bilingual database of lease announcements regarding Warsaw offices and usable premises.">
    <link rel="shortcut icon" href="/favicon.png"></head>
    <body>
    <div id="app"></div>
    <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet">
    <script type="text/javascript" src="/bundle.js"></script>
    </body>
    </html>
  `)
})

app.use('*', router)
app.listen(process.env.PORT || 8080)
