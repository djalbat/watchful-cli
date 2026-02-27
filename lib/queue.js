"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Queue;
    }
});
const _necessary = require("necessary");
const { first } = _necessary.arrayUtilities;
class Queue {
    constructor(tasks, emptyHandler){
        this.tasks = tasks;
        this.emptyHandler = emptyHandler;
    }
    addTask(task) {
        const empty = this.isEmpty();
        this.tasks.push(task);
        if (empty) {
            this.executeFirstTask();
        }
    }
    executeFirstTask() {
        const firstTask = first(this.tasks), task = firstTask, next = this.next.bind(this);
        setTimeout(()=>{
            task.execute(function() {
                const callback = task.getCallback();
                callback.apply(task, arguments);
                next();
            });
        }, 0);
    }
    next() {
        const task = this.tasks.shift(), empty = this.isEmpty();
        if (!empty) {
            this.executeFirstTask();
            return;
        }
        const previousTask = task; ///
        this.emptyHandler(previousTask);
    }
    isEmpty() {
        const tasksLength = this.tasks.length, empty = tasksLength === 0;
        return empty;
    }
    static fromEmptyHandler(emptyHandler) {
        const tasks = [], queue = new Queue(tasks, emptyHandler);
        return queue;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGVtcHR5SGFuZGxlcikge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gICAgdGhpcy5lbXB0eUhhbmRsZXIgPSBlbXB0eUhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIHRhc2sgPSBmaXJzdFRhc2ssIC8vL1xyXG4gICAgICAgICAgbmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGFzay5nZXRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgY29uc3QgdGFzayA9IHRoaXMudGFza3Muc2hpZnQoKSxcclxuICAgICAgICAgIGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSB0YXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5lbXB0eUhhbmRsZXIocHJldmlvdXNUYXNrKTtcclxuICB9XHJcbiAgXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbXB0eUhhbmRsZXIoZW1wdHlIYW5kbGVyKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdLFxyXG4gICAgICAgICAgcXVldWUgPSBuZXcgUXVldWUodGFza3MsIGVtcHR5SGFuZGxlcik7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUXVldWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFza3MiLCJlbXB0eUhhbmRsZXIiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwibmV4dCIsImJpbmQiLCJzZXRUaW1lb3V0IiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwicHJldmlvdXNUYXNrIiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tRW1wdHlIYW5kbGVyIiwicXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSlU7QUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFakIsTUFBTUY7SUFDbkIsWUFBWUcsS0FBSyxFQUFFQyxZQUFZLENBQUU7UUFDL0IsSUFBSSxDQUFDRCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLFFBQVFDLElBQUksRUFBRTtRQUNaLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxJQUFJLENBQUNIO1FBRWhCLElBQUlDLE9BQU87WUFDVCxJQUFJLENBQUNHLGdCQUFnQjtRQUN2QjtJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixNQUFNQyxZQUFZVixNQUFNLElBQUksQ0FBQ0UsS0FBSyxHQUM1QkcsT0FBT0ssV0FDUEMsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUk7UUFFaENDLFdBQVc7WUFDVFIsS0FBS1MsT0FBTyxDQUFDO2dCQUNYLE1BQU1DLFdBQVdWLEtBQUtXLFdBQVc7Z0JBRWpDRCxTQUFTRSxLQUFLLENBQUNaLE1BQU1hO2dCQUVyQlA7WUFDRjtRQUNGLEdBQUc7SUFDTDtJQUVBQSxPQUFPO1FBQ0wsTUFBTU4sT0FBTyxJQUFJLENBQUNILEtBQUssQ0FBQ2lCLEtBQUssSUFDdkJiLFFBQVEsSUFBSSxDQUFDQyxPQUFPO1FBRTFCLElBQUksQ0FBQ0QsT0FBTztZQUNWLElBQUksQ0FBQ0csZ0JBQWdCO1lBRXJCO1FBQ0Y7UUFFQSxNQUFNVyxlQUFlZixNQUFPLEdBQUc7UUFFL0IsSUFBSSxDQUFDRixZQUFZLENBQUNpQjtJQUNwQjtJQUVBYixVQUFVO1FBQ1IsTUFBTWMsY0FBYyxJQUFJLENBQUNuQixLQUFLLENBQUNvQixNQUFNLEVBQy9CaEIsUUFBU2UsZ0JBQWdCO1FBRS9CLE9BQU9mO0lBQ1Q7SUFFQSxPQUFPaUIsaUJBQWlCcEIsWUFBWSxFQUFFO1FBQ3BDLE1BQU1ELFFBQVEsRUFBRSxFQUNWc0IsUUFBUSxJQUFJekIsTUFBTUcsT0FBT0M7UUFFL0IsT0FBT3FCO0lBQ1Q7QUFDRiJ9