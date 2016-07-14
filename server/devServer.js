var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var express = require('express');
var appRouter = require('./appRouter');

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    stats: 'minimal'
}));

app.use('/api', appRouter);
app.use(express.static('public'));

app.listen(3001, function () {
  console.log('App is listening on port 3001');
});