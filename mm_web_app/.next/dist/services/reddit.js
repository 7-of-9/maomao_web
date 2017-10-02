'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redditListing = redditListing;

var _constants = require('../containers/App/constants');

var _mobxUtils = require('mobx-utils');

var REDIDT_REFRESH_TOKEN = '69838591-jrgIILLyZ9z8M_5Z7pQXqXwZ2Z4';
var dev = process.env.NODE_ENV !== 'production';
// Use reddit-oauth-helper to create an permanent token
/* eslint new-cap: ["error", { "newIsCap": false }] */
function redditListing(keyword, page) {
  /* global snoowrap */
  var r = new snoowrap({
    userAgent: 'webapp:maomao:v0.0.3 (by u/dunghd)',
    clientId: _constants.REDDIT_CLIENT_ID,
    clientSecret: _constants.REDDIT_CLIENT_SECRET,
    refreshToken: REDIDT_REFRESH_TOKEN
  });
  r.config({ debug: !!dev });
  return (0, _mobxUtils.fromPromise)(r.search({
    query: keyword,
    relevance: 'top',
    limit: _constants.LIMIT * page
  }));
}