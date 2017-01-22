import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken: 'People of Ember.js community',
  model() {
    return this.store.findAll('person');
  }
});
