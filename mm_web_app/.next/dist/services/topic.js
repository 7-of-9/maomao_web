'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTopicTree = getAllTopicTree;
exports.addBulkTopics = addBulkTopics;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mobxUtils = require('mobx-utils');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _constants = require('../containers/App/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllTopicTree() {
  var apiUrl = _constants.MAOMAO_API_URL + 'topic_tree/get';
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(apiUrl));
}

/* eslint-disable camelcase */
function addBulkTopics(user_id, hash) {
  var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var apiUrl = _constants.MAOMAO_API_URL + 'user_topics/bulkadd?' + _queryString2.default.stringify({ user_id: user_id, hash: hash, t: t });
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(apiUrl));
}