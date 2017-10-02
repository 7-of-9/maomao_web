'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Header/index.js';
/**
*
* Header
*
*/

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Header__Wrapper',
  componentId: 's1v4a3w0-0'
})([['{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:none;margin-left:0;margin-right:0;padding-right:0;width:auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;min-width:0;padding:12px 16px;}']]);

function Header(props) {
  return _react2.default.createElement(Wrapper, { className: 'logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, ' ', props.children);
}

Header.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Header;