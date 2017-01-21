import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | tutorials');

test('visiting /tutorials', function(assert) {
  visit('/tutorials');

  andThen(function() {
    assert.equal(currentURL(), '/tutorials');
  });
});

test('month header gets displayed', function(assert) {
  visit('/tutorials');
  andThen(() => assert.equal(find(testSelector('tutorial-month-header', '2012-01')).text(), 'January 2012'));
});

test('multipart article titles', function(assert) {
  visit('/tutorials');

  andThen(() => {
    let multipartTutorial = find(testSelector('tutorial-title-id', '3'));

    assert.equal(multipartTutorial[0].text, 'Beginning Ember.js on Rails');
    assert.equal(multipartTutorial[1].text, 'Part 2');
    assert.equal(multipartTutorial[2].text, 'Part 3');
  });
});

test('author name is correctly displayed', function(assert) {
  visit('/tutorials');
  andThen(() => assert.equal(find(testSelector('tutorial-id-author', '3')).text(), 'Dan Gebhardt'));
});
