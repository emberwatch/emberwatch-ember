import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Talks about Ember.js',
  model() {
    return this.store.findAll('talk');
  }
});
