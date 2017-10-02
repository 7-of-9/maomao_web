'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareAll = shareAll;
exports.shareThisSite = shareThisSite;
exports.shareTheTopic = shareTheTopic;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiUrl = 'https://mmapi00.azurewebsites.net';

function shareAll(userId, userHash) {
  return (0, _axios2.default)({
    method: 'put',
    url: apiUrl + '/share/create?user_id=' + userId + '&hash=' + userHash + '&share_all=true'
  });
}

function shareThisSite(userId, userHash, urlId) {
  return (0, _axios2.default)({
    method: 'put',
    url: apiUrl + '/share/create?user_id=' + userId + '&hash=' + userHash + '&url_id=' + urlId
  });
}

function shareTheTopic(userId, userHash, topicId) {
  return (0, _axios2.default)({
    method: 'put',
    url: apiUrl + '/share/create?user_id=' + userId + '&hash=' + userHash + '&topic_id=' + topicId
  });
}