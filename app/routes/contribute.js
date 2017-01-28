import Ember from 'ember';

const {
  Route,
  $
} = Ember;

const stackoverflowQuery = 'https://api.stackexchange.com/2.2/questions/unanswered?page=1&pagesize=20&order=desc&sort=activity&tagged=emberjs&site=stackoverflow';

export default Route.extend({
  titleToken: 'Contribute to Ember.js community',
  model() {
    return $.getJSON(stackoverflowQuery);
  }
});
