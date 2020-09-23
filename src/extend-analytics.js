/**
 * An helper function to extend `analytics` object from GetAnalytics(https://getanalytics.io/).
 * It makes the `analytics.track()` function to handle functional payload and
 * it also accepts an optional `category` param which will be attached to the event properties.
 */
export default function extendAnalytics(analyticsObj, category) {
  const originalTrackFn = analyticsObj.track.bind(analyticsObj);

  analyticsObj.track = (eventName, payload) => {
    payload = payload || {};

    if (typeof payload === 'function') {
      try {
        payload = payload();
      } catch (err) {
        const originalEventName = eventName;
        eventName = 'Track_Error';
        payload = {
          'Event Name': originalEventName,
          'Error Message': err && err.message ? err.message : String(err),
        };
      }
    }

    if (category) {
      originalTrackFn(eventName, { Category: category, ...payload });
    } else {
      originalTrackFn(eventName, { ...payload });
    }
  };

  return analyticsObj;
}
