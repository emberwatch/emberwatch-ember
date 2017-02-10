import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  titleToken: 'Learn about Ember.js',
  model() {
    return RSVP.hash({
      talks: this.store.findAll('talk').then((result) => result.toArray().reverse().slice(0, 3)),
      tutorials: this.store.findAll('tutorial').then((result) => result.toArray().reverse().slice(0, 3))
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});
