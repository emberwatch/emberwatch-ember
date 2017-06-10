import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.hello h1').text().trim(), 'Welcome to EmberWatch');
  });
});
