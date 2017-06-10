import DS from 'ember-data';
import config from 'emberwatch-ember/config/environment';

const { JSONAPIAdapter } = DS;
const { api } = config;
const { host, namespace } = api;

export default JSONAPIAdapter.extend({
  host,
  namespace
});
