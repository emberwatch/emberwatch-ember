import Ember from 'ember';
import groupBy from 'ember-group-by';

const {
  Controller,
  computed: { sort }
} = Ember;

export default Controller.extend({
  sortProperties: ['value:desc'],
  talksByMonth: groupBy('model', 'month'),
  talksSorted: sort('talksByMonth', 'sortProperties')
});
