import ENV from 'emberwatch-ember/config/environment';
import { serializeFixturesToJsonApi } from 'emberwatch-ember/mirage/util/serialize-fixtures-to-json-api';

export default function() {
  this.passthrough(`${ENV.awsLambda.baseUrl}/**`);

  this.get('/podcast/feeds', ({ db }) => {
    return serializeFixturesToJsonApi(db.podcastFeeds, 'podcast/feed');
  });

  this.get('/people', (schema) => {
    return schema.people.all();
  });

  this.get('people/:id', (schema, request) => {
    let { params: { id } } = request;
    return schema.people.find(id);
  });

  this.get('/books', (schema)=> {
    return schema.books.all();
  });

  this.get('/tutorials', (schema)=> {
    return schema.tutorials.all();
  });

  this.get('/talks', (schema)=> {
    return schema.talks.all();
  });

  this.get('/events', (schema)=> {
    return schema.events.all();
  });
}
