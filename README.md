Created using ionic v3
Tested on:
  npm 5.6.0
  node 8.9.4
  ionic 3.19.1
  cordova 8.0.0


## Installation
  npm install ionic -g
  npm install
  ionic cordova build browser --prod
  npm start

## Fixing ionic serve live reload issue
  Add 
    app.all('/*', serveIndex);
  to 
    \node_modules\@ionic\app-scripts\dist\dev-server\http-server.js
  in createHttpServer function, right before return app;
