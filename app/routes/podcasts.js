import Ember from 'ember';
import ENV from 'emberwatch-ember/config/environment';

import fetch from 'ember-network/fetch';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  beforeModel() {
    return this.store.findAll('podcast/feed').then(feeds => {
      const fetchFeedEpisodes = this._fetchFeedEpisodes.bind(this);
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
    const encodedFeedURI = encodeURIComponent(feed.get('url')),
      _lambda = ENV.awsLambda,
      lambdaUrl = `${_lambda.baseUrl}/${_lambda.podcastPath}`;

    return fetch(`${lambdaUrl}${encodedFeedURI}`).then(response => {
      return response.json().then(feedItems => {
        feedItems.forEach(feedItem => {
          const episode = this.store.normalize('podcast/episode', feedItem);
          episode.data.relationships.feed = {
            data: { type: 'podcast/feed', id: feed.get('id') }
          };

          this.store.push(episode);
        });
      });
    });
  }
});
