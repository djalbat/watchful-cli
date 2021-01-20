"use strict";

function startSecondsMetric(context) {
  const now = Date.now();

  Object.assign(context, {
    now
  });
}

function endSecondsMetric(context) {
  let { now } = context;

  const then = now; ///

  now = Date.now();

  const seconds = Math.floor((now - then) / 10) / 100;

  delete context.now;

  return seconds;
}

module.exports = {
  startSecondsMetric,
  endSecondsMetric
};
