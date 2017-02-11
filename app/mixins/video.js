import Ember from 'ember';

const {
  computed,
  String: { htmlSafe }
} = Ember;

const {
  Mixin
} = Ember;

const youtubeRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export default Mixin.create({
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
