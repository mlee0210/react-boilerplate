const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const Message = require('../../database/index');
const db = require('../../database/getMessages');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(bodyParser.json());

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('/messages', (req, res) => {
    db.getMessages({}, (err, results) => {
      if (err) {
        console.log('error', err);
      } else {
        // const data = [];
        // for (let i = 0; i < results.length; i += 1) {
        //   data.push(results[i].message);
        // }
        res.send('RESULTS', results);
        console.log('fetched messages');
      }
    });
  });

  app.post('/messages', (req, res) => {
    const message = new Message(req.body);
    message.save(err => {
      if (err) {
        throw err;
      } else {
        console.log('message saved successfully...');
        res.sendStatus(201);
      }
    });
  });

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
