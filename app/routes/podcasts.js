import Ember from 'ember';
import ENV from 'emberwatch-ember/config/environment';

import fetch from 'ember-network/fetch';

const {
  Route,
  RSVP
} = Ember;
const {
  awsLambda: {
    baseUrl,
    podcastPath
  }
} = ENV;

export default Route.extend({
  titleToken: 'Podcasts about Ember.js',

  beforeModel() {
    return this.store.findAll('podcast/feed').then((feeds) => {
      let fetchFeedEpisodes = this._fetchFeedEpisodes.bind(this);
      return RSVP.all(feeds.map(fetchFeedEpisodes));
    });
  },

  model() {
    return this.store.peekAll('podcast/episode');
  },

  setupController(controller, model) {
    controller.set('podcasts', model);
  },

  _fetchFeedEpisodes(feed) {
    let encodedFeedURI = encodeURIComponent(feed.get('url'));
    let lambdaUrl = `${baseUrl}/${podcastPath}`;

    return fetch(`${lambdaUrl}${encodedFeedURI}`).then((response) => {
      return response.json().then((feedItems) => {
        feedItems.forEach((feedItem) => {
          let episode = this.store.normalize('podcast/episode', feedItem);
          episode.data.relationships.feed = {
            data: { type: 'podcast/feed', id: feed.get('id') }
          };

          this.store.push(episode);
        });
      });
    });
  }
});
