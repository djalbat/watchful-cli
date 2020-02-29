'use strict';

function guaranteePath(path) {
  const pathAbsolutePath = /^\/.*/.test(path),
        pathAllowedRelativePath = /^\.\/.*/.test(path),
        pathForbiddenRelativePath = /^\.\.\/.*/.test(path);

  if (false) {
    ///
  } else if (pathAbsolutePath) {
    path = null;
  } else if (pathAllowedRelativePath) {
    path = path.replace(/^\.\//, '').replace(/\/$/, '');
  } else if (pathForbiddenRelativePath) {
    path = null;
  } else {
    ///
  }

  return path;
}

module.exports = {
  guaranteePath
};
