import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';
import VideoMixin from '../mixins/video';

const {
  computed
} = Ember;

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(VideoMixin, {
  title: attr('string'),
  subtitle: attr('string'),
  videos: attr(),
  url: attr('string'),
  slides: attr('string'),
  authors: hasMany('person'),
  event: belongsTo('event'),
  date: attr('date'),

  month: computed('date', function() {
    return moment(this.get('date')).format('YYYY-MM');
  })
});
