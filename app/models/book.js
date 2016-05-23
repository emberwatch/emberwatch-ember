import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import filename from 'emberwatch-ember/utils/filename';

const { computed } = Ember;

export default Model.extend({
  title: attr('string'),
  publisher: attr('string'),
  url: attr('string'),
  payment: attr('boolean'),
  authors: hasMany('person'),

  slug: computed('title', function() {
    return filename(this.get('title'));
  })
});
