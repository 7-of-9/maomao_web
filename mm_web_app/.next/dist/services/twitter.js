'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitterSearch = twitterSearch;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mobxUtils = require('mobx-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function twitterSearch(keyword, maxId) {
  var apiUrl = '/api/twitter';
  return (0, _mobxUtils.fromPromise)((0, _axios2.default)({
    method: 'post',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      keyword: keyword,
      maxId: maxId
    }
  }));
}