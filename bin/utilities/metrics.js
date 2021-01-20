"use strict";

function startCountMetric(context) {
  const count = 0;

  Object.assign(context, {
    count
  });
}

function endCountMetric(context) {
  const { count } = context;

  delete context.count;

  return count;
}

function updateCountMetric(context) {
  let { count } = context;

  count++;

  Object.assign(context, {
    count
  });
}

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
  startCountMetric,
  endCountMetric,
  updateCountMetric,
  startSecondsMetric,
  endSecondsMetric
};
