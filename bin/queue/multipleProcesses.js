"use strict";

class MultipleProcessesQueue {
  constructor(tasks, emptyHandler) {
    this.tasks = tasks;
    this.emptyHandler = emptyHandler;
  }

  addTask(task) {
    this.tasks.push(task);

    this.executeTasks();
  }

  executeTasks() {
    this.tasks.forEach((task) => {
      const taskRunning = task.isRunning();

      if (!taskRunning) {
        this.executeTask(task);
      }
    });
  }

  executeTask(task) {
    const next = this.next.bind(this);

    setTimeout(() => {
      task.execute(function() { ///
        const callback = task.getCallback();

        callback.apply(task, arguments);

        next(task);
      });
    }, 0 );
  }

  next(task) {
    this.deleteTask(task);

    const empty = this.isEmpty();

    if (!empty) {
      this.executeTasks();

      return;
    }

    const previousTask = task;  ///

    this.emptyHandler(previousTask);
  }

  deleteTask(task) {
    const index = this.tasks.indexOf(task),
          start = index,  ///
          deleteCount = 1;

    this.tasks.splice(start, deleteCount);
  }
  
  isEmpty() {
    const tasksLength = this.tasks.length,
          empty = (tasksLength === 0);

    return empty;
  }

  static fromEmptyHandler(emptyHandler) {
    const tasks = [],
          multipleProcessesQueue = new MultipleProcessesQueue(tasks, emptyHandler);

    return multipleProcessesQueue;
  }
}

module.exports = MultipleProcessesQueue;
