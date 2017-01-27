import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  name: attr('string'),
  github: attr('string'),
  slack: attr('string'),
  twitter: attr('string'),
  speakerdeck: attr('string'),
  slideshare: attr('string'),
  site: attr('string'),
  company: attr('string')
});
