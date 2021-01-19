"use strict";

const constants = require("../constants");

const { DEFAULT_METRICS } = constants;

function startMetric(context) {
  const { metrics = DEFAULT_METRICS } = context;

  if (!metrics) {
    return;
  }

  const now = Date.now();

  Object.assign(context, {
    now
  });
}

function endMetric(context) {
  const { metrics = DEFAULT_METRICS } = context;

  if (!metrics) {
    return;
  }

  let { now } = context;

  const then = now; ///

  now = Date.now();

  const seconds = Math.floor((now - then) / 10) / 100;

  delete context.now;

  return seconds;
}

module.exports = {
  startMetric,
  endMetric
};
