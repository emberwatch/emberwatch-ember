import { test } from 'qunit';
import moduleForAcceptance from 'emberwatch-ember/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | contribute');

test('visiting /contribute', function(assert) {
  visit('/contribute');

  andThen(function() {
    assert.equal(currentURL(), '/contribute');
  });
});

test('check for stackoverflow render', function(assert) {
  visit('/contribute');

  andThen(() => {
    let question = find(testSelector('contribute-question-id', '41911217'));

    assert.equal(question.text(), 'Allowing Access-Control-Allow-Origin from anywhere (Java and ember.js)');
    assert.equal(question.attr('href'), 'http://stackoverflow.com/questions/41911217/allowing-access-control-allow-origin-from-anywhere-java-and-ember-js');
  });
});
