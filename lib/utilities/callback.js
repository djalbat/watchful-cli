"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "executeOperations", {
    enumerable: true,
    get: function() {
        return executeOperations;
    }
});
const _necessary = require("necessary");
const { whilst } = _necessary.asynchronousUtilities;
function executeOperations(operations, callback, context) {
    const completed = true;
    Object.assign(context, {
        operations,
        completed
    });
    whilst(executeOperation, ()=>{
        const { completed } = context;
        delete context.operations;
        delete context.completed;
        callback(completed);
    }, context);
}
function executeOperation(next, done, context, index) {
    const { operations } = context, operationsLength = operations.length, lastIndex = operationsLength - 1;
    if (index > lastIndex) {
        done();
        return;
    }
    const operation = operations[index];
    operation(proceed, abort, context);
    function proceed() {
        next();
    }
    function abort() {
        const completed = false;
        Object.assign(context, {
            completed
        });
        done();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2FsbGJhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyB3aGlsc3QgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgb3BlcmF0aW9ucyxcbiAgICBjb21wbGV0ZWRcbiAgfSk7XG5cbiAgd2hpbHN0KGV4ZWN1dGVPcGVyYXRpb24sICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gY29udGV4dDtcblxuICAgIGRlbGV0ZSBjb250ZXh0Lm9wZXJhdGlvbnM7XG5cbiAgICBkZWxldGUgY29udGV4dC5jb21wbGV0ZWQ7XG5cbiAgICBjYWxsYmFjayhjb21wbGV0ZWQpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZU9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkge1xuICBjb25zdCB7IG9wZXJhdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG9wZXJhdGlvbnNMZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gb3BlcmF0aW9uc0xlbmd0aCAtIDE7XG5cbiAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgZG9uZSgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XG5cbiAgb3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBwcm9jZWVkKCkge1xuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFib3J0KCkge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBjb21wbGV0ZWRcbiAgICB9KTtcblxuICAgIGRvbmUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4ZWN1dGVPcGVyYXRpb25zIiwid2hpbHN0IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwib3BlcmF0aW9ucyIsImNhbGxiYWNrIiwiY29udGV4dCIsImNvbXBsZXRlZCIsIk9iamVjdCIsImFzc2lnbiIsImV4ZWN1dGVPcGVyYXRpb24iLCJuZXh0IiwiZG9uZSIsImluZGV4Iiwib3BlcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsIm9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7MkJBSnNCO0FBRXRDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLGdDQUFxQjtBQUVqQyxTQUFTRixrQkFBa0JHLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQzdELE1BQU1DLFlBQVk7SUFFbEJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkY7UUFDQUc7SUFDRjtJQUVBTCxPQUFPUSxrQkFBa0I7UUFDdkIsTUFBTSxFQUFFSCxTQUFTLEVBQUUsR0FBR0Q7UUFFdEIsT0FBT0EsUUFBUUYsVUFBVTtRQUV6QixPQUFPRSxRQUFRQyxTQUFTO1FBRXhCRixTQUFTRTtJQUNYLEdBQUdEO0FBQ0w7QUFFQSxTQUFTSSxpQkFBaUJDLElBQUksRUFBRUMsSUFBSSxFQUFFTixPQUFPLEVBQUVPLEtBQUs7SUFDbEQsTUFBTSxFQUFFVCxVQUFVLEVBQUUsR0FBR0UsU0FDakJRLG1CQUFtQlYsV0FBV1csTUFBTSxFQUNwQ0MsWUFBWUYsbUJBQW1CO0lBRXJDLElBQUlELFFBQVFHLFdBQVc7UUFDckJKO1FBRUE7SUFDRjtJQUVBLE1BQU1LLFlBQVliLFVBQVUsQ0FBQ1MsTUFBTTtJQUVuQ0ksVUFBVUMsU0FBU0MsT0FBT2I7SUFFMUIsU0FBU1k7UUFDUFA7SUFDRjtJQUVBLFNBQVNRO1FBQ1AsTUFBTVosWUFBWTtRQUVsQkMsT0FBT0MsTUFBTSxDQUFDSCxTQUFTO1lBQ3JCQztRQUNGO1FBRUFLO0lBQ0Y7QUFDRiJ9