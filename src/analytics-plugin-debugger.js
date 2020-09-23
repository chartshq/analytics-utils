/* eslint-disable no-console */

/**
 * A GetAnalytics(https://getanalytics.io/) plugin to enable debugging.
 */
export default function analyticsPluginDebugger({ enabled = true }) {
  return {
    name: 'Debugger',

    config: {
      enabled,
    },

    initialize: ({ config: { enabled } }) => {
      if (enabled) {
        console.log('Analytics Debugger: initialize');
      }
    },

    page: ({ config: { enabled }, payload: { properties } }) => {
      if (enabled) {
        console.log('Analytics Debugger: page: ', properties);
      }
    },

    track: ({ config: { enabled }, payload: { event, properties } }) => {
      if (enabled) {
        console.log('Analytics Debugger: track: ', event, properties);
      }
    },

    identify: ({ config: { enabled }, payload: { userId, traits } }) => {
      if (enabled) {
        console.log('Analytics Debugger: identify: ', userId, traits);
      }
    },

    reset: ({ config: { enabled } }) => {
      if (enabled) {
        console.log('Analytics Debugger: reset');
      }
    },

    loaded: () => true,
  };
}
