import DS from 'ember-data';
import ENV from '../config/environment';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  // host: 'http://vast-meadow-82621.herokuapp.com',
  host: ENV.apiHost,
  namespace: 'api'
});
