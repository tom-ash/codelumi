const express = require('express');
const compression = require('compression');
const app = express();
var path = require('path'); 

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))

// Since the root/src dir contains our index.html
app.use(express.static(path.join(__dirname, './dist/app')))
app.use(compression())

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/app/index.html'));
});
  
// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
app.listen(process.env.PORT || 8080);
