'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobileBrowser = isMobileBrowser;
exports.browserName = browserName;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _detectBrowser = require('detect-browser');

var _detectBrowser2 = _interopRequireDefault(_detectBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMobileBrowser(userAgent) {
  var md = new _mobileDetect2.default(userAgent);
  return !!md.mobile();
}

function browserName() {
  return _detectBrowser2.default && _detectBrowser2.default.name;
}