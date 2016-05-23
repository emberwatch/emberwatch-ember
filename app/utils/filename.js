import Ember from 'ember';

const { dasherize } = Ember.String;

export default function filename(name) {
  let fname = name.replace(/[^a-zA-Z0-9]+/g, ' ');
  return dasherize(fname);
}
