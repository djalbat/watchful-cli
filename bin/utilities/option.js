'use strict';

function pathFromOption(option) {
  let path = null;

  const optionAbsolutePath = /^\/.*/.test(option),
        optionAllowedRelativePath = /^\.\/.*/.test(option),
        optionForbiddenRelativePath = /^\.\.\/.*/.test(option);

  if (false) {
    ///
  } else if (optionAbsolutePath) {
    ///
  } else if (optionAllowedRelativePath) {
    path = option.replace(/^\.\//, '').replace(/\/$/, '');
  } else if (optionForbiddenRelativePath) {
    path = null;
  } else {
    path = option;  ///
  }

  return path;
}

module.exports = {
  pathFromOption
};
