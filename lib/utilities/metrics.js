"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get endCountMetric () {
        return endCountMetric;
    },
    get endSecondsMetric () {
        return endSecondsMetric;
    },
    get initialiseMetrics () {
        return initialiseMetrics;
    },
    get startCountMetric () {
        return startCountMetric;
    },
    get startSecondsMetric () {
        return startSecondsMetric;
    },
    get updateCountMetric () {
        return updateCountMetric;
    }
});
function initialiseMetrics(context) {
    var metrics = {};
    Object.assign(context, {
        metrics: metrics
    });
}
function startCountMetric(context) {
    var metrics = context.metrics;
    var count = 0;
    Object.assign(metrics, {
        count: count
    });
}
function endCountMetric(context) {
    var metrics = context.metrics, count = metrics.count;
    delete metrics.count;
    return count;
}
function updateCountMetric(context) {
    var metrics = context.metrics;
    var count = metrics.count;
    count++;
    Object.assign(metrics, {
        count: count
    });
}
function startSecondsMetric(context) {
    var metrics = context.metrics, now = Date.now();
    Object.assign(metrics, {
        now: now
    });
}
function endSecondsMetric(context) {
    var metrics = context.metrics;
    var now = metrics.now;
    var then = now; ///
    now = Date.now();
    var seconds = Math.floor(now - then) / 1000;
    delete metrics.now;
    return seconds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWV0cmljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VNZXRyaWNzKGNvbnRleHQpIHtcbiAgY29uc3QgbWV0cmljcyA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIG1ldHJpY3NcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGNvdW50ID0gMDtcblxuICBPYmplY3QuYXNzaWduKG1ldHJpY3MsIHtcbiAgICBjb3VudFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZENvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGNvdW50IH0gPSBtZXRyaWNzO1xuXG4gIGRlbGV0ZSBtZXRyaWNzLmNvdW50O1xuXG4gIHJldHVybiBjb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gIGxldCB7IGNvdW50IH0gPSBtZXRyaWNzO1xuXG4gIGNvdW50Kys7XG5cbiAgT2JqZWN0LmFzc2lnbihtZXRyaWNzLCB7XG4gICAgY291bnRcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFNlY29uZHNNZXRyaWMoY29udGV4dCkge1xuICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbnRleHQsXG4gICAgICAgIG5vdyA9IERhdGUubm93KCk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZXRyaWNzLCB7XG4gICAgbm93XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kU2Vjb25kc01ldHJpYyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgbWV0cmljcyB9ID0gY29udGV4dDtcblxuICBsZXQgeyBub3cgfSA9IG1ldHJpY3M7XG5cbiAgY29uc3QgdGhlbiA9IG5vdzsgLy8vXG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihub3cgLSB0aGVuKSAvIDEwMDA7XG5cbiAgZGVsZXRlIG1ldHJpY3Mubm93O1xuXG4gIHJldHVybiBzZWNvbmRzO1xufVxuIl0sIm5hbWVzIjpbImVuZENvdW50TWV0cmljIiwiZW5kU2Vjb25kc01ldHJpYyIsImluaXRpYWxpc2VNZXRyaWNzIiwic3RhcnRDb3VudE1ldHJpYyIsInN0YXJ0U2Vjb25kc01ldHJpYyIsInVwZGF0ZUNvdW50TWV0cmljIiwiY29udGV4dCIsIm1ldHJpY3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjb3VudCIsIm5vdyIsIkRhdGUiLCJ0aGVuIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBb0JnQkE7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUErQkFDO2VBQUFBOztRQVpBQztlQUFBQTs7O0FBM0JULFNBQVNILGtCQUFrQkksT0FBTztJQUN2QyxJQUFNQyxVQUFVLENBQUM7SUFFakJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkMsU0FBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU0osaUJBQWlCRyxPQUFPO0lBQ3RDLElBQU0sQUFBRUMsVUFBWUQsUUFBWkM7SUFFUixJQUFNRyxRQUFRO0lBRWRGLE9BQU9DLE1BQU0sQ0FBQ0YsU0FBUztRQUNyQkcsT0FBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU1YsZUFBZU0sT0FBTztJQUNwQyxJQUFNLEFBQUVDLFVBQVlELFFBQVpDLFNBQ0YsQUFBRUcsUUFBVUgsUUFBVkc7SUFFUixPQUFPSCxRQUFRRyxLQUFLO0lBRXBCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTTCxrQkFBa0JDLE9BQU87SUFDdkMsSUFBTSxBQUFFQyxVQUFZRCxRQUFaQztJQUVSLElBQUksQUFBRUcsUUFBVUgsUUFBVkc7SUFFTkE7SUFFQUYsT0FBT0MsTUFBTSxDQUFDRixTQUFTO1FBQ3JCRyxPQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTTixtQkFBbUJFLE9BQU87SUFDeEMsSUFBTSxBQUFFQyxVQUFZRCxRQUFaQyxTQUNGSSxNQUFNQyxLQUFLRCxHQUFHO0lBRXBCSCxPQUFPQyxNQUFNLENBQUNGLFNBQVM7UUFDckJJLEtBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNWLGlCQUFpQkssT0FBTztJQUN0QyxJQUFNLEFBQUVDLFVBQVlELFFBQVpDO0lBRVIsSUFBSSxBQUFFSSxNQUFRSixRQUFSSTtJQUVOLElBQU1FLE9BQU9GLEtBQUssR0FBRztJQUVyQkEsTUFBTUMsS0FBS0QsR0FBRztJQUVkLElBQU1HLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0wsTUFBTUUsUUFBUTtJQUV6QyxPQUFPTixRQUFRSSxHQUFHO0lBRWxCLE9BQU9HO0FBQ1QifQ==