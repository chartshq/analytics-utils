/**
 * An helper function to extend `analytics` object from GetAnalytics(https://getanalytics.io/).
 *
 * It
 *  - makes the `analytics.track()` function to be able to handle functional payload.
 *  - accepts an optional `extraProp` param which will be attached to the event properties.
 */
export default function extendAnalytics(analyticsObj, extraProp) {
  extraProp = extraProp || {};

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

    originalTrackFn(eventName, { ...payload, ...extraProp });
  };

  return analyticsObj;
}
