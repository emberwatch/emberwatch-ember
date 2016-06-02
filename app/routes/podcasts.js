import Ember from 'ember';
import ENV from 'emberwatch-ember/config/environment';
import fetch from 'ember-network/fetch';
import RSVP from 'rsvp';

const {
  Route
} = Ember;

function fetchFeedEpisodes(feed) {
  let encodedFeedURI = encodeURIComponent(feed.get('url'));
  let _lambda        = ENV.awsLambda;
  let lambdaUrl      = `${_lambda.baseUrl}/${_lambda.podcastPath}`;

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

export default Route.extend({
  // beforeModel() {
    // return this.store.findAll('podcast/feed').then(feeds => {
    //   return RSVP.all(feeds.map(fetchFeedEpisodes.bind(this)));
    // });
  // },

  model() {
    return this.store.findAll('podcast/feed').then(feeds => {
      return RSVP.all(feeds.map(fetchFeedEpisodes.bind(this))).then(() => feeds);
    });
  },

  // setupController(controller, model) {
  //   controller.set('podcasts', model);
  // }
});
