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
    const metrics = {};
    Object.assign(context, {
        metrics
    });
}
function startCountMetric(context) {
    const { metrics } = context;
    const count = 0;
    Object.assign(metrics, {
        count
    });
}
function endCountMetric(context) {
    const { metrics } = context, { count } = metrics;
    delete metrics.count;
    return count;
}
function updateCountMetric(context) {
    const { metrics } = context;
    let { count } = metrics;
    count++;
    Object.assign(metrics, {
        count
    });
}
function startSecondsMetric(context) {
    const { metrics } = context, now = Date.now();
    Object.assign(metrics, {
        now
    });
}
function endSecondsMetric(context) {
    const { metrics } = context;
    let { now } = metrics;
    const then = now; ///
    now = Date.now();
    const seconds = Math.floor(now - then) / 1000;
    delete metrics.now;
    return seconds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWV0cmljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VNZXRyaWNzKGNvbnRleHQpIHtcbiAgY29uc3QgbWV0cmljcyA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIG1ldHJpY3NcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGNvdW50ID0gMDtcblxuICBPYmplY3QuYXNzaWduKG1ldHJpY3MsIHtcbiAgICBjb3VudFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZENvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGNvdW50IH0gPSBtZXRyaWNzO1xuXG4gIGRlbGV0ZSBtZXRyaWNzLmNvdW50O1xuXG4gIHJldHVybiBjb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvdW50TWV0cmljKGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gIGxldCB7IGNvdW50IH0gPSBtZXRyaWNzO1xuXG4gIGNvdW50Kys7XG5cbiAgT2JqZWN0LmFzc2lnbihtZXRyaWNzLCB7XG4gICAgY291bnRcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFNlY29uZHNNZXRyaWMoY29udGV4dCkge1xuICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbnRleHQsXG4gICAgICAgIG5vdyA9IERhdGUubm93KCk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZXRyaWNzLCB7XG4gICAgbm93XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kU2Vjb25kc01ldHJpYyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgbWV0cmljcyB9ID0gY29udGV4dDtcblxuICBsZXQgeyBub3cgfSA9IG1ldHJpY3M7XG5cbiAgY29uc3QgdGhlbiA9IG5vdzsgLy8vXG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihub3cgLSB0aGVuKSAvIDEwMDA7XG5cbiAgZGVsZXRlIG1ldHJpY3Mubm93O1xuXG4gIHJldHVybiBzZWNvbmRzO1xufVxuIl0sIm5hbWVzIjpbImVuZENvdW50TWV0cmljIiwiZW5kU2Vjb25kc01ldHJpYyIsImluaXRpYWxpc2VNZXRyaWNzIiwic3RhcnRDb3VudE1ldHJpYyIsInN0YXJ0U2Vjb25kc01ldHJpYyIsInVwZGF0ZUNvdW50TWV0cmljIiwiY29udGV4dCIsIm1ldHJpY3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjb3VudCIsIm5vdyIsIkRhdGUiLCJ0aGVuIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBb0JnQkE7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUErQkFDO2VBQUFBOztRQVpBQztlQUFBQTs7O0FBM0JULFNBQVNILGtCQUFrQkksT0FBTztJQUN2QyxNQUFNQyxVQUFVLENBQUM7SUFFakJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkM7SUFDRjtBQUNGO0FBRU8sU0FBU0osaUJBQWlCRyxPQUFPO0lBQ3RDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdEO0lBRXBCLE1BQU1JLFFBQVE7SUFFZEYsT0FBT0MsTUFBTSxDQUFDRixTQUFTO1FBQ3JCRztJQUNGO0FBQ0Y7QUFFTyxTQUFTVixlQUFlTSxPQUFPO0lBQ3BDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdELFNBQ2QsRUFBRUksS0FBSyxFQUFFLEdBQUdIO0lBRWxCLE9BQU9BLFFBQVFHLEtBQUs7SUFFcEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNMLGtCQUFrQkMsT0FBTztJQUN2QyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRDtJQUVwQixJQUFJLEVBQUVJLEtBQUssRUFBRSxHQUFHSDtJQUVoQkc7SUFFQUYsT0FBT0MsTUFBTSxDQUFDRixTQUFTO1FBQ3JCRztJQUNGO0FBQ0Y7QUFFTyxTQUFTTixtQkFBbUJFLE9BQU87SUFDeEMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsU0FDZEssTUFBTUMsS0FBS0QsR0FBRztJQUVwQkgsT0FBT0MsTUFBTSxDQUFDRixTQUFTO1FBQ3JCSTtJQUNGO0FBQ0Y7QUFFTyxTQUFTVixpQkFBaUJLLE9BQU87SUFDdEMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Q7SUFFcEIsSUFBSSxFQUFFSyxHQUFHLEVBQUUsR0FBR0o7SUFFZCxNQUFNTSxPQUFPRixLQUFLLEdBQUc7SUFFckJBLE1BQU1DLEtBQUtELEdBQUc7SUFFZCxNQUFNRyxVQUFVQyxLQUFLQyxLQUFLLENBQUNMLE1BQU1FLFFBQVE7SUFFekMsT0FBT04sUUFBUUksR0FBRztJQUVsQixPQUFPRztBQUNUIn0=