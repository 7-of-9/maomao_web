'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchContacts = fetchContacts;
exports.checkGoogleAuth = checkGoogleAuth;
exports.downloadPhoto = downloadPhoto;

var _promise = require('next/node_modules/babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('next/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

require('isomorphic-fetch');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _chrome = require('./chrome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchContacts(token, limit) {
  /* global fetch */
  return fetch('/api/contacts', {
    method: 'POST',
    // eslint-disable-next-line no-undef
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: (0, _stringify2.default)({ token: token, limit: limit })
  });
}

function checkGoogleAuth() {
  _logger2.default.warn('checkGoogleAuth', _firebase2.default.auth().currentUser);
  var promise = new _promise2.default(function (resolve, reject) {
    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    _firebase2.default.auth().signInWithPopup(provider).then(function (result) {
      var googleToken = result.credential.accessToken;
      var user = result.user;
      var googleUserId = '';
      var googleEmail = '';
      if (user.providerData && user.providerData.length) {
        for (var counter = 0; counter < user.providerData.length; counter += 1) {
          if (user.providerData[counter].providerId === 'google.com') {
            googleUserId = user.providerData[counter].uid;
            googleEmail = user.providerData[counter].email;
            break;
          }
        }
      }
      return resolve({
        googleUserId: googleUserId,
        googleToken: googleToken,
        info: {
          name: user.displayName,
          email: user.email || googleEmail,
          picture: user.photoURL
        }
      });
    }).catch(function (error) {
      return reject(error);
    });
  });
  return promise;
}

function downloadPhoto(googleToken, googleUserId) {
  (0, _chrome.sendMsgToChromeExtension)(actionCreator('GOOGLE_CONTACTS_FULFILLED', { googleToken: googleToken, googleUserId: googleUserId }));
  (0, _chrome.sendMsgToChromeExtension)(actionCreator('FETCH_CONTACTS', {}));
}

function actionCreator(type, payload) {
  return {
    type: type,
    payload: payload
  };
}