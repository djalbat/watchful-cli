"use strict";

import { EMPTY_STRING } from "../constants";

export function pathFromOption(option) {
  let path = null;

  const optionAbsolutePath = /^\/.*/.test(option),
        optionAllowedRelativePath = /^\.\/.*/.test(option),
        optionForbiddenRelativePath = /^\.\.\/.*/.test(option);

  if (false) {
    ///
  } else if (optionAbsolutePath) {
    ///
  } else if (optionAllowedRelativePath) {
    path = option.replace(/^\.\//, EMPTY_STRING).replace(/\/$/, EMPTY_STRING);
  } else if (optionForbiddenRelativePath) {
    path = null;
  } else {
    path = option;  ///
  }

  return path;
}
