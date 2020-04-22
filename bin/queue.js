"use strict";

const necessary = require("necessary");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Queue {
  constructor(tasks, emptyHandler) {
    this.tasks = tasks;
    this.emptyHandler = emptyHandler;
  }

  addTask(task) {
    const empty = this.isEmpty();

    this.tasks.push(task);

    if (empty) {
      this.executeNextTask();
    }
  }

  executeNextTask() {
    const firstTask = first(this.tasks),
          task = firstTask, ///
          next = this.next.bind(this);

    setTimeout(() => {
      task.execute(function() { ///
        const callback = task.getCallback();

        callback.apply(task, arguments);

        next();
      });
    }, 0 );
  }

  next() {
    const task = this.tasks.shift(),
          empty = this.isEmpty();

    if (!empty) {
      this.executeNextTask();

      return;
    }

    const previousTask = task;  ///

    this.emptyHandler(previousTask);
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
