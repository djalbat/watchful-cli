'use strict';

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
    const task = this.tasks.shift(),
          next = this.next.bind(this);

    setTimeout(() => {
      task.execute(function() { ///
        const callback = task.getCallback();

        callback.apply(task, arguments);

        const previousTask = task;  ///

        next(previousTask);
      });
    }, 0 );
  }

  next(previousTask) {
    const empty = this.isEmpty();

    if (!empty) {
      this.executeNextTask();

      return;
    }

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
