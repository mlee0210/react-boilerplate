const path = require('path');
const express = require('express');
const compression = require('compression');
const db = require('../../database/getMessages');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('/messages', (req, res) => {
    db.getMessages({}, (err, results) => {
      if (err) {
        console.log('error', err);
      } else {
        // const data = [];
        // for (let i = 0; i < results.length; i += 1) {
        //   data.push(results[i].message);
        // }
        res.send(results);
        console.log('fetched messages');
      }
    });
  });

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
