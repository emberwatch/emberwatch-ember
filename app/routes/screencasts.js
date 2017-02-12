import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Screencasts about Ember.js',
  model() {
    return this.store.findAll('screencast').then((result) => result.sortBy('date').toArray().reverse());
  }
});
