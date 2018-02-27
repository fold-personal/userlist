const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
require('dotenv').load();
const express = require('express');

app = express();
app.use(helmet());

app.get('*', (req, res, next) => {
  // TODO RegExp
  if ((req.url.indexOf('#') > -1) ||
      ((req.url.lastIndexOf('.') === -1) ||
      (req.url.indexOf('/', req.url.lastIndexOf('.')) > -1))) {
    req.url = `/#${req.url}`;
  }
  next();
});

app.use(express.static(path.join(__dirname, 'platforms/browser/www')));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.set('port', process.env.PORT || 8200);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
