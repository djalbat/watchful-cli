'use strict';

class Task {
  constructor(method, ...remainingArgumentsThenCallback) {
    const callback = remainingArgumentsThenCallback.pop(), ///
          remainingArguments = remainingArgumentsThenCallback;  ///

    this.method = method;
    this.callback = callback;
    this.remainingArguments = remainingArguments;
  }

  getMethod() {
    return this.method;
  }

  getCallback() {
    return this.callback;
  }

  getRemainingArguments() {
    return this.remainingArguments;
  }

  execute(callback) {
    const method = this.getMethod(),
          remainingArguments = this.getRemainingArguments();

    method.call(null, ...remainingArguments, callback);
  }
}

module.exports = Task;
