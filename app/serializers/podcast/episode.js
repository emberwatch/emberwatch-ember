import DS from 'ember-data';

const { RESTSerializer } = DS;

const TYPE = 'podcast/episode';

export default RESTSerializer.extend({
  normalize(modelClass, recordHash, prop) {
    const hash = {};

    hash.title = recordHash.title;
    hash.url = recordHash['rss:link'];

    hash.date = recordHash.pubDate;
    hash.duration = recordHash['itunes:duration'];
    hash.members = recordHash.author;
    hash.summary = recordHash.summary;

    hash.podcastName = recordHash['rss:title'];
    hash.imageUrl = recordHash.meta.image.url;

    hash.type = TYPE;
    hash.id = recordHash.guid;

    return this._super(modelClass, hash, prop);
  }
});
