import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  name: attr('string'),
  github: attr('string'),
  twitter: attr('string'),
  speakerdeck: attr('string'),
  slideshare: attr('string'),
  site: attr('string'),
  company: attr('string'),
});
