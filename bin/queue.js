'use strict';

require('setimmediate');

const defer = setImmediate; ///

const arrayUtilities = require('./utilities/array');

const { first } = arrayUtilities;

class Queue {
  constructor(tasks, emptyHandler) {
    this.tasks = tasks;
    this.emptyHandler = emptyHandler;
  }

  addTask(task) {
    defer(() => {
      const empty = this.isEmpty();

      this.tasks.push(task);

      if (empty) {
        this.executeNextTask();
      }
    });
  }

  executeNextTask() {
    const firstTask = first(this.tasks),
          nextTask = firstTask, ///
          next = this.next.bind(this);

    nextTask.execute(function() {
      const callback = nextTask.getCallback();

      callback.apply(nextTask, arguments);

      next();
    });
  }

  next() {
    const previousTask = this.tasks.shift();

    const empty = this.isEmpty();

    empty ?
      this.emptyHandler(previousTask) :
        this.executeNextTask();
  }
  
  isEmpty() {
    const tasksLength = this.tasks.length,
          empty = (tasksLength === 0);

    return empty;
  }

  static fromEmptyHandler(emptyHandler) {
    const tasks = [],
          queue = new Queue(tasks, emptyHandler);

    return queue;
  }
}

module.exports = Queue;
