/**
 * An helper function to extend `analytics` object from GetAnalytics(https://getanalytics.io/).
 *
 * It
 *  - makes the `analytics.track()` function to be able to handle functional payload.
 *  - makes the analytics.page()` function to be able to handle functional page path.
 *  - accepts an optional `extraProp` param which will be attached to the event properties.
 */
export default function extendAnalytics(analyticsObj, extraProp) {
  const originalTrackFn = analyticsObj.track.bind(analyticsObj);
  const originalPageFn = analyticsObj.page.bind(analyticsObj);

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

    originalTrackFn(eventName, { ...payload, ...(extraProp || {}) });
  };

  analyticsObj.page = (pagePath) => {
    if (typeof pagePath === 'function') {
      try {
        pagePath = pagePath();
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        pagePath = '';
      }
    }

    if (pagePath) {
      originalPageFn({ path: pagePath });
    } else {
      originalPageFn();
    }
  };

  return analyticsObj;
}
