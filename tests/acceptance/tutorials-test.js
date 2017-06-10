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
  andThen(() => assert.equal(find(testSelector('tutorial-month-header', '2015-12')).text(), 'December 2015'));
});

test('multipart article titles', function(assert) {
  visit('/tutorials');

  andThen(() => {
    let multipartTutorial = find(testSelector('tutorial-title-id', '1'));

    assert.equal(multipartTutorial[0].text, 'Ember: Adding Catch Block for Returned Promise');
    assert.equal(multipartTutorial[1].text, 'Part 2');
    assert.equal(multipartTutorial[2].text, 'Part 3');
  });
});

test('author name is correctly displayed', function(assert) {
  visit('/tutorials');
  andThen(() => assert.equal(find(testSelector('tutorial-id-author', '1')).text(), 'Tom Dale'));
});
