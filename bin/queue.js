'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Queue {
  constructor(tasks, pause, emptyHandler) {
    this.tasks = tasks;
    this.pause = pause;
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
          nextTask = firstTask, ///
          next = this.next.bind(this);

    setTimeout(() => {
      nextTask.execute(function() { ///
        const callback = nextTask.getCallback();

        callback.apply(nextTask, arguments);

        next();
      });
    }, this.pause );
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

  static fromPauseAndEmptyHandler(pause, emptyHandler) {
    const tasks = [],
          queue = new Queue(tasks, pause, emptyHandler);

    return queue;
  }
}

module.exports = Queue;
