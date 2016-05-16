import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('talks');
  this.route('screencasts');
  this.route('podcasts');
  this.route('tutorials');
  this.route('books');
  this.route('recipes');
  this.route('contribute');
  this.route('people');
});

export default Router;
