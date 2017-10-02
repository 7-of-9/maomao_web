'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previewUrl;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/utils/previewUrl.js';
function previewUrl(url, name) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '100%';
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
  var onload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

  var PROXY_URL = '/api/preview';
  var proxyUrl = PROXY_URL + '?url=' + url;
  return _react2.default.createElement('iframe', {
    sandbox: 'allow-same-origin',
    id: 'frame-' + name,
    name: 'frame-' + name,
    width: width,
    height: height,
    frameBorder: '0',
    allowFullScreen: true,
    allowTransparency: true,
    onLoad: onload(),
    src: proxyUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
}