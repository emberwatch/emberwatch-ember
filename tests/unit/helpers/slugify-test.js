import { slugify } from 'emberwatch-ember/helpers/slugify';
import { module, test } from 'qunit';

module('Unit | Helper | slugify');

test('name is dasherized and lowercased', function(assert) {
  let name = 'This is a Filename with      many spaces';
  let result = slugify([name]);
  assert.equal(result, 'this-is-a-filename-with-many-spaces');
});

test('name already has dashes', function(assert) {
  let name = 'filename-with-many-dashes-&-more';
  let result = slugify([name]);
  assert.equal(result, 'filename-with-many-dashes-more');
});

test('remove undesirable filename characters', function(assert) {
  let name = 'My"·$/(/&file-name';
  let result = slugify([name]);
  assert.equal(result, 'my-file-name');
});
