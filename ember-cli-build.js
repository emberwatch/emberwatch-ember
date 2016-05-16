/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');
var jsStringEscape = require('js-string-escape');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: 'vendor/styles'
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  });

  return app.toTree();
};
