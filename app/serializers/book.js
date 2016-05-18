import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  normalize(modelClass, hash) {
    // normalize authors relationship
    let authorIds = hash.attributes.authors;
    let people = authorIds.map(author => ({ type: 'person', id: author }));
    hash.relationships = {
      authors: { data: people }
    };
    return this._super(modelClass, hash); 
  }
});
