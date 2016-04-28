import ENV from 'emberwatch-ember/config/environment';
import { serializeFixturesToJsonApi } from
  'emberwatch-ember/mirage/util/serialize-fixtures-to-json-api';

export default function() {
  this.passthrough(`${ENV.awsLambda.baseUrl}/**`);

  this.get('/podcast/feeds', ({db}) => {
    return serializeFixturesToJsonApi(db.podcastFeeds, 'podcast/feed');
  });
}
