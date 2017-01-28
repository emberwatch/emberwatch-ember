import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  authors: hasMany('person'),
  event: belongsTo()
});
