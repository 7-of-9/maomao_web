'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleSearchByTerm = googleSearchByTerm;
exports.googleNewsSearchByTerm = googleNewsSearchByTerm;
exports.googleImageSearchByTerm = googleImageSearchByTerm;
exports.fetchImageSearchByTerm = fetchImageSearchByTerm;

var _mobxUtils = require('mobx-utils');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _constants = require('../containers/App/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function googleSearchByTerm(term, page) {
  var query = _queryString2.default.stringify({
    type: 'google',
    url: 'https://www.google.com/search?q=' + encodeURI(term) + '&start=' + _constants.LIMIT * (page - 1)
  });
  var crawlerUrl = _constants.CRALWER_API_URL + '?' + query;
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(crawlerUrl));
}

function googleNewsSearchByTerm(term, page) {
  var query = _queryString2.default.stringify({
    type: 'google',
    url: 'https://www.google.com/search?q=' + encodeURI(term) + '&tbm=nws&start=' + _constants.LIMIT * (page - 1)
  });
  var crawlerUrl = _constants.CRALWER_API_URL + '?' + query;
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(crawlerUrl));
}

function googleImageSearchByTerm(term, page) {
  var query = _queryString2.default.stringify({
    type: 'image',
    url: 'https://www.google.com/search?q=' + encodeURI(term) + '&tbm=isch&site=imghp'
  });
  var crawlerUrl = _constants.CRALWER_API_URL + '?' + query;
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(crawlerUrl));
}

function fetchImageSearchByTerm(term, page) {
  var query = _queryString2.default.stringify({
    type: 'image',
    url: 'https://www.google.com/search?q=' + encodeURI(term) + '&tbm=isch&site=imghp'
  });
  var crawlerUrl = _constants.CRALWER_API_URL + '?' + query;
  return _axios2.default.get(crawlerUrl);
}