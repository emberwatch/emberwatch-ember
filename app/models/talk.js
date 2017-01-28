import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {
  computed,
  String: { htmlSafe }
} = Ember;

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

const youtubeRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export default Model.extend({
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
  }),
  firstVideo: computed('videos', function() {
    let videos = this.get('videos');
    if (videos) {
      return videos[0];
    }
  }),
  thumbnail: computed('firstVideo', function() {
    let video = this.get('firstVideo');

    if (video) {
      let youtubeMatch = video.match(youtubeRegex);
      if (youtubeMatch) {
        let [, , youtubeId] = youtubeMatch;
        return `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      }
    }
  }),
  thumbnailStyle: computed('thumbnail', function() {
    let thumbnail = this.get('thumbnail');
    if (thumbnail) {
      return htmlSafe(`background-image:url('${thumbnail}');`);
    }
  })
});
