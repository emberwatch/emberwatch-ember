import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | podcasts');

test('visiting /podcasts', function(assert) {
  visit('/podcasts');

  andThen(function() {
    assert.equal(currentURL(), '/podcasts');
  });
});

test('podcasts list gets displayed', function(assert) {
  visit('/podcasts');
  andThen(() => assert.equal(find(testSelector('podcasts-list')).length, 1));
});
