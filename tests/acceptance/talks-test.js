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
  andThen(() => assert.equal(find(testSelector('talk-month-header', '2012-02')).text(), 'February 2012'));
});

test('talk title gets displayed', function(assert) {
  visit('/talks');
  andThen(() => assert.equal(find(testSelector('talk-title-id', 417)).text(), 'Introduction to ember-concurrency'));
});

test('check for youtube thumbnail image', function(assert) {
  visit('/talks');
  andThen(() => assert.equal(find(testSelector('talk-thumbnail-id', '10')).attr('style'), 'background-image:url(\'http://img.youtube.com/vi/B8vyxHZc4fo/hqdefault.jpg\');'));
});
