'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizedHistoryData = normalizedHistoryData;

var _normalizr = require('normalizr');

// Define a users schema
var url = new _normalizr.schema.Entity('urls', {}, { idAttribute: 'url_id' });
var topic = new _normalizr.schema.Entity('topics', {}, { idAttribute: 'term_id' });

// Define your comments schema
var myStream = new _normalizr.schema.Entity('myStreams', {
  urls: [url]
}, { idAttribute: 'user_id' });

var sharedList = new _normalizr.schema.Entity('shareLists', {
  urls: [url]
}, { idAttribute: 'share_code' });

var friendStream = new _normalizr.schema.Entity('friendStreams', {
  shares: [sharedList]
}, { idAttribute: 'user_id' });

// Define your article
var history = new _normalizr.schema.Entity('histories', {
  mine: myStream,
  received: [friendStream],
  topics: [topic]
}, { idAttribute: 'mine' });

function normalizedHistoryData(data) {
  if (data) {
    return (0, _normalizr.normalize)(data, history);
  }
  return { entities: {}, result: {} };
}