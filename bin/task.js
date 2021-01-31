"use strict";

class Task {
  constructor(method, ...remainingArguments) {
    const callback = remainingArguments.pop();  ///

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

    method.call(this, ...remainingArguments, callback);
  }
}

module.exports = Task;
