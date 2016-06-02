import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  feed: belongsTo('podcast/feed'),

  title: attr('string'),
  podcastName: attr(),
  date: attr('date'),

  duration: attr('string'),
  url: attr('string'),

  imageUrl: attr('string'),
  members: attr('string'),
  summary: attr('string')
});
