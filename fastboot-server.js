const express = require('express');
const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');

const httpServer = new ExpressHTTPServer(/* {options} */);
const app = httpServer.app;

var apiRouter = express.Router();

apiRouter.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
apiRouter.get('/tutorials', function (req, res) {
  res.send('Tuts');
});
apiRouter.get('/screencasts', function (req, res) {
  res.send('Screencasts');
});
apiRouter.get('/talks', function (req, res) {
  const talks = require('./fixture');
  res.send(talks);
})

app.get('/api', function(req, res, next) {
  res.send("Hello World~~");
});
app.use('/api', apiRouter);

var server = new FastBootAppServer({
  distPath: 'dist',
  httpServer: httpServer
});

server.start();
