'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first, last, push } = arrayUtilities;

class Queue {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getLastTask() {
    let lastTask = null;

    const empty = this.isEmpty();

    if (!empty) {
      lastTask = last(this.tasks);
    }

    return lastTask;
  }

  addTask(task) {
    const empty = this.isEmpty();

    this.tasks.push(task);
    
    if (empty) {
      this.executeNextTask();
    }
  }

  addTasks(tasks) {
    const empty = this.isEmpty();

    push(this.tasks, tasks);

    if (empty) {
      this.executeNextTask();
    }
  }

  addTaskBeforeLastTask(task) {
    const lastTask = this.tasks.pop();

    this.tasks.push(task);

    this.tasks.push(lastTask);
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
  
  isEmpty() {
    const tasksLength = this.tasks.length,
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
