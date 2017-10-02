'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Loading/index.js';
/**
*
* Loading
*
*/

function Loading(props) {
  return _react2.default.createElement('div', { style: { display: props.isLoading ? '' : 'none', textAlign: 'center', margin: '0 auto' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('img', { src: '/static/images/balls.svg', alt: 'loading', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
}

Loading.propTypes = {
  isLoading: _propTypes2.default.bool.isRequired
};

exports.default = Loading;