"use strict";

export function initialiseMetrics(context) {
  const metrics = {};

  Object.assign(context, {
    metrics
  });
}

export function startCountMetric(context) {
  const { metrics } = context;

  const count = 0;

  Object.assign(metrics, {
    count
  });
}

export function endCountMetric(context) {
  const { metrics } = context,
        { count } = metrics;

  delete metrics.count;

  return count;
}

export function updateCountMetric(context) {
  const { metrics } = context;

  let { count } = metrics;

  count++;

  Object.assign(metrics, {
    count
  });
}

export function startSecondsMetric(context) {
  const { metrics } = context,
        now = Date.now();

  Object.assign(metrics, {
    now
  });
}

export function endSecondsMetric(context) {
  const { metrics } = context;

  let { now } = metrics;

  const then = now; ///

  now = Date.now();

  const seconds = Math.floor(now - then) / 1000;

  delete metrics.now;

  return seconds;
}
