'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify');

const { BATCH_URI } = uris,
      { FAILED_BATCH_MESSAGE, SUCCESSFUL_BATCH_MESSAGE } = messages;

function batch(argument) {
  const releaseName = argument, ///
        uri = BATCH_URI,
        callbacks = [
          babelCallback,
          browserifyCallback
        ],
        context = {
          releaseName
        };

  action(callbacks, uri, (json, done) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_BATCH_MESSAGE) :
        console.log(FAILED_BATCH_MESSAGE);

    done();
  }, context);
}

module.exports = batch;
