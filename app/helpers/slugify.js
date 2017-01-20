import Ember from 'ember';

const { Helper: { helper }, String: { dasherize } } = Ember;

export function slugify([file]) {
  let fname = file.replace(/[^a-zA-Z0-9]+/g, ' ');
  return dasherize(fname);
}

export default helper(slugify);
