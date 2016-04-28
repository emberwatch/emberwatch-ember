import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  url: attr('string'),
  episodes: hasMany('podcast/episode')
});
