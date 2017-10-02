'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasInstalledExtension = hasInstalledExtension;
exports.sendMsgToChromeExtension = sendMsgToChromeExtension;
exports.actionCreator = actionCreator;

var _constants = require('../containers/App/constants');

/* global chrome */
function hasInstalledExtension() {
  try {
    return document.getElementById('maomao-extension-anchor') !== null || chrome && chrome.app && chrome.app.isInstalled;
  } catch (error) {
    return false;
  }
}

function sendMsgToChromeExtension(payload) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (chrome) {
    chrome.runtime.sendMessage(_constants.EXTENSION_ID, { type: 'chromex.dispatch', portName: 'maomao-extension', payload: payload }, function (response) {
      if (callback && response) {
        callback(response.error, response.value);
      }
    });
  } else {}
}

function actionCreator(type, payload) {
  return {
    type: type,
    payload: payload
  };
}