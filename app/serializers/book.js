import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  normalize(modelClass, hash) {
    // normalize authors relationship
    let authorIds = hash.attributes.authors;
    let people = [];
    for (let author of authorIds) {
      people.push({type: 'person', id: author});
    }
    hash.relationships = {
      authors: { data: people }
    };
    return this._super(modelClass, hash); 
  }
});
