import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | talks');

test('visiting /talks', function(assert) {
  visit('/talks');

  andThen(function() {
    assert.equal(currentURL(), '/talks');
  });
});

test('month header gets displayed', function(assert) {
  visit('/talks');
  andThen(() => assert.equal(find(testSelector('talk-month-header', '2012-10')).text(), 'October 2012'));
});

test('talk title gets displayed', function(assert) {
  visit('/talks');
  andThen(() => assert.equal(find(testSelector('talk-title-id', 18)).text(), 'Ember.js Introduction'));
});

test('check for youtube thumbnail image', function(assert) {
  visit('/talks');
  andThen(() => assert.equal(find(testSelector('talk-thumbnail-id', '18')).attr('style'), 'background-image:url(\'http://img.youtube.com/vi/hod-KX81i7s/hqdefault.jpg\');'));
});
