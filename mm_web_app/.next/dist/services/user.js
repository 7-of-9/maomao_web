'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testInternalUser = testInternalUser;
exports.loginWithGoogle = loginWithGoogle;
exports.loginWithFacebook = loginWithFacebook;
exports.getUserHistory = getUserHistory;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mobxUtils = require('mobx-utils');

var _constants = require('../containers/App/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testInternalUser() {
  var apiUrl = _constants.MAOMAO_API_URL + 'user/test';
  return (0, _mobxUtils.fromPromise)((0, _axios2.default)({
    method: 'post',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  }));
}

function loginWithGoogle(info) {
  var names = info.name.split(' ');
  var firstName = names[0];
  var lastName = names.slice(1, names.length).join(' ');
  var user = {
    email: info.email,
    firstName: firstName,
    lastName: lastName,
    avatar: info.picture,
    google_user_id: info.google_user_id
  };
  var apiUrl = _constants.MAOMAO_API_URL + 'user/google';

  return (0, _mobxUtils.fromPromise)((0, _axios2.default)({
    method: 'post',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: user
  }));
}

function loginWithFacebook(info) {
  var names = info.name.split(' ');
  var firstName = names[0];
  var lastName = names.slice(1, names.length).join(' ');

  var user = {
    email: info.email,
    firstName: firstName,
    lastName: lastName,
    avatar: info.picture,
    fb_user_id: info.fb_user_id
  };
  var apiUrl = _constants.MAOMAO_API_URL + 'user/fb';
  return (0, _mobxUtils.fromPromise)((0, _axios2.default)({
    method: 'post',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: user
  }));
}

function getUserHistory(id, hash) {
  var apiUrl = _constants.MAOMAO_API_URL + 'user/homepage?user_id=' + id + '&hash=' + hash;
  return (0, _mobxUtils.fromPromise)(_axios2.default.get(apiUrl));
}