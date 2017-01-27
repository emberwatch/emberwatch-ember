import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  title: attr('string'),
  publisher: attr('string'),
  url: attr('string'),
  payment: attr('boolean'),
  authors: hasMany('person')
});
