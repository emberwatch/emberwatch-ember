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
  hasMany
} = DS;

export default Model.extend(VideoMixin, {
  title: attr('string'),
  url: attr('string'),
  date: attr('date'),
  authors: hasMany('person'),
  videos: attr(),
  price: attr('string'),
  series: attr('string'),

  month: computed('date', function() {
    return moment(this.get('date')).format('YYYY-MM');
  })
});
