'use strict';

const chokidar = require('chokidar');

const bundleFilesCallback = require('./callback/bundleFiles'),
      transformFilesCallback = require('./callback/transformFiles');

function watch(context, done) {
  const { sourceDirectoryPath } = context,
        pattern = `${sourceDirectoryPath}/**/*.js`,
        watcher = chokidar.watch(pattern);

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => {
      console.log(event, path);
    });
  });
}

module.exports = watch;
