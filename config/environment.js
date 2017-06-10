/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'emberwatch-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: { },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: { },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    }
  };

  ENV.awsLambda = {
    baseUrl: 'https://00xdxb1q7j.execute-api.us-east-1.amazonaws.com',
    podcastPath: 'prod/jarsson?rss='
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.fastboot.hostWhitelist = [ "serene-dusk-36718.herokuapp.com" ];
  }

  return ENV;
};
