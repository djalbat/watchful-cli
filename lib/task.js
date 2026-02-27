"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Task;
    }
});
class Task {
    constructor(method, ...remainingArguments){
        const callback = remainingArguments.pop(); ///
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
        const method = this.getMethod(), remainingArguments = this.getRemainingArguments();
        method.call(this, ...remainingArguments, callback);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzO1xuICB9XG5cbiAgZ2V0TWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0UmVtYWluaW5nQXJndW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cztcbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XG5cbiAgICBtZXRob2QuY2FsbCh0aGlzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRhc2siLCJtZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsYmFjayIsInBvcCIsImdldE1ldGhvZCIsImdldENhbGxiYWNrIiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiZXhlY3V0ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxNQUFNLEVBQUUsR0FBR0Msa0JBQWtCLENBQUU7UUFDekMsTUFBTUMsV0FBV0QsbUJBQW1CRSxHQUFHLElBQUssR0FBRztRQUUvQyxJQUFJLENBQUNILE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNFLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDRCxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUcsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtJQUN0QjtJQUVBSSx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNMLGtCQUFrQjtJQUNoQztJQUVBTSxRQUFRTCxRQUFRLEVBQUU7UUFDaEIsTUFBTUYsU0FBUyxJQUFJLENBQUNJLFNBQVMsSUFDdkJILHFCQUFxQixJQUFJLENBQUNLLHFCQUFxQjtRQUVyRE4sT0FBT1EsSUFBSSxDQUFDLElBQUksS0FBS1Asb0JBQW9CQztJQUMzQztBQUNGIn0=