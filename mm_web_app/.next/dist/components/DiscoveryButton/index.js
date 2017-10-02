'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/DiscoveryButton/index.js';
/**
*
* DiscoveryButton
*
*/

function DiscoveryButton(_ref) {
  var openDiscoveryMode = _ref.openDiscoveryMode;

  return _react2.default.createElement('a', { className: 'btn-discovery', onClick: openDiscoveryMode, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('img', { width: '16', height: '16', src: '/static/images/search-input.png', alt: 'Discovery', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
}

DiscoveryButton.propTypes = {
  openDiscoveryMode: _propTypes2.default.func.isRequired
};

exports.default = DiscoveryButton;