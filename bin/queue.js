'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Queue {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
    
    const tasksLength = this.getTasksLength();
    
    if (tasksLength === 1) {
      this.executeNextTask();
    }
  }

  executeNextTask() {
    const firstTask = first(this.tasks),
          nextTask = firstTask; ///

    nextTask.execute(function() {
      const callback = nextTask.getCallback();

      callback.apply(nextTask, arguments);

      this.next();
    }.bind(this));
  }

  next() {
    this.tasks.shift();

    const empty = this.isEmpty();

    if (!empty) {
      this.executeNextTask();
    }
  }
  
  getTasksLength() {
    const tasksLength = this.tasks.length;
    
    return tasksLength;
  }

  isEmpty() {
    const tasksLength = this.getTasksLength(),
          empty = (tasksLength === 0);

    return empty;
  }

  static fromNothing() {
    const tasks = [],
          queue = new Queue(tasks);

    return queue;
  }
}

module.exports = Queue;
