import posthog from 'posthog-js';

/**
 * A GetAnalytics(https://getanalytics.io/) plugin for PostHog(https://posthog.com/).
 */
export default function analyticsPluginPostHog({ token, apiHost }) {
  let isLoaded = false;

  return {
    name: 'PostHog',

    config: {
      token,
      apiHost,
    },

    initialize: ({ config }) => {
      posthog.init(config.token, { api_host: config.apiHost });
      isLoaded = true;
    },

    page: () => {
      posthog.capture('$pageview');
    },

    track: ({ payload: { event, properties } }) => {
      posthog.capture(event, { ...properties });
    },

    identify: ({ payload: { userId, traits } }) => {
      posthog.identify(userId);
      posthog.people.set({ ...traits });
    },

    reset: () => {
      posthog.reset();
    },

    loaded: () => isLoaded,
  };
}
