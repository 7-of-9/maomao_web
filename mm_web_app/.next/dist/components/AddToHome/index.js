'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/AddToHome/index.js';
/**
*
* DiscoveryButton
*
*/

function AddToHome(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('a', { onClick: onClick, className: 'add-to-home', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('i', { className: 'fa fa-plus', 'aria-hidden': true, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('i', { className: 'fa fa-2x fa-home', 'aria-hidden': true, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
}

AddToHome.propTypes = {
  onClick: _propTypes2.default.func.isRequired
};

exports.default = AddToHome;