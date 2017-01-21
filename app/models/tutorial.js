import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {
  computed
} = Ember;

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  title: attr('string'),
  authors: hasMany('person'),
  date: attr('date'),
  dateCreated: attr('date'),
  dateUpdated: attr('date'),
  urls: attr(),
  versions: attr(),
  code: attr('string'),

  month: computed('date', function() {
    return moment(this.get('date')).format('YYYY-MM');
  }),
  parts: computed('urls', function() {
    let title = this.get('title');
    return this.get('urls').map(function(url, index) {
      let obj = { url, title };

      if (index !== 0) {
        let part = index + 1;
        obj.title = `Part ${part}`;
      }

      return obj;
    });

  })
});
