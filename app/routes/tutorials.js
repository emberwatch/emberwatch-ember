import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken: 'Tutorials about Ember.js',
  model() {
    return this.store.findAll('tutorial');
  }
});
