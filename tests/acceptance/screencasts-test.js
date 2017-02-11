import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | screencasts');

test('visiting /screencasts', function(assert) {
  visit('/screencasts');

  andThen(function() {
    assert.equal(currentURL(), '/screencasts');
  });
});

test('month header gets displayed', function(assert) {
  visit('/screencasts');
  andThen(() => assert.equal(find(testSelector('screencast-month-header', '2012-10')).text(), 'October 2012'));
});

test('talk title gets displayed', function(assert) {
  visit('/screencasts');
  andThen(() => assert.equal(find(testSelector('screencast-title-id', 1)).text(), 'Getting Started with Ember.js'));
});
