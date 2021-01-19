"use strict";

function startMetric(context) {
  const { metrics } = context;

  if (!metrics) {
    return;
  }

  const now = Date.now();

  Object.assign(context, {
    now
  });
}

function endMetric(context, message) {
  const { metrics } = context;

  if (!metrics) {
    return;
  }

  let { now } = context;

  const then = now; ///

  now = Date.now();

  const seconds = Math.floor((now - then) / 10) / 100;

  message = message.replace("${seconds}", seconds); ///

  console.log(message);

  delete context.now;
}

module.exports = {
  startMetric,
  endMetric
};
