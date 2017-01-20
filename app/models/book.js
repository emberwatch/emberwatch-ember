import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  publisher: attr('string'),
  url: attr('string'),
  payment: attr('boolean'),
  authors: hasMany('person')
});
