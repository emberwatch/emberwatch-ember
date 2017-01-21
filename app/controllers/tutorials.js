import Ember from 'ember';
import groupBy from 'ember-group-by';

const {
  Controller,
  computed: { sort }
} = Ember;

export default Controller.extend({
  sortProperties: ['value:desc'],
  tutorialsByMonth: groupBy('model', 'month'),
  tutorialsSorted: sort('tutorialsByMonth', 'sortProperties')
});
