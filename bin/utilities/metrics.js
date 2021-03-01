"use strict";

function initialiseMetrics(context) {
  const metrics = {};

  Object.assign(context, {
    metrics
  });
}

function startCountMetric(context) {
  const { metrics } = context;

  const count = 0;

  Object.assign(metrics, {
    count
  });
}

function endCountMetric(context) {
  const { metrics } = context,
        { count } = metrics;

  delete metrics.count;

  return count;
}

function updateCountMetric(context) {
  const { metrics } = context;

  let { count } = metrics;

  count++;

  Object.assign(metrics, {
    count
  });
}

function startSecondsMetric(context) {
  const { metrics } = context,
        now = Date.now();

  Object.assign(metrics, {
    now
  });
}

function endSecondsMetric(context) {
  const { metrics } = context;

  let { now } = metrics;

  const then = now; ///

  now = Date.now();

  const seconds = Math.floor(now - then) / 1000;

  delete metrics.now;

  return seconds;
}

module.exports = {
  initialiseMetrics,
  startCountMetric,
  endCountMetric,
  updateCountMetric,
  startSecondsMetric,
  endSecondsMetric
};
