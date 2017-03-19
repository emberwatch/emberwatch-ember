import DS from 'ember-data';

const { RESTSerializer } = DS;

const TYPE = 'podcast/episode';

export default RESTSerializer.extend({
  normalize(modelClass, recordHash, prop) {
    let hash = {};

    hash.title = recordHash.title;
    hash.url = recordHash.link;

    hash.date = recordHash.pubDate;
    hash.duration = recordHash['itunes:duration']['#'];
    hash.members = recordHash.author;
    hash.summary = recordHash.summary;

    hash.podcastName = recordHash.meta.title;
    hash.imageUrl = recordHash.meta.image.url;

    hash.type = TYPE;
    hash.id = recordHash.guid;

    return this._super(modelClass, hash, prop);
  }
});
