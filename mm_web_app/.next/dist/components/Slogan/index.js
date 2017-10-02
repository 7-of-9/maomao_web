'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Slogan/index.js';
/**
*
* Slogan
*
*/

function Slogan() {
  return _react2.default.createElement('div', { style: { margin: '0 16px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('img', { className: 'logo-image', onClick: function onClick() {
      window.location.href = '/';
    }, src: '/static/images/maomao.png', alt: 'maomao', width: '165', height: '24', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('span', { className: 'paragraph-smarter', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, ' discover & share '));
}

exports.default = Slogan;