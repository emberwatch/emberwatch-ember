import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  episodeNumber: computed('podcast.title', function() {
    let parts = this.get('podcast.title').split(':');
    let episodeNumber = +parts[0].match(/\d+/)[0];
    return episodeNumber;
  }),
  title: computed('podcast.title', function() {
    let titleParts = this.get('podcast.title').split(':');
    let cleanTitle = titleParts[1].trim();
    return cleanTitle;
  })
});
