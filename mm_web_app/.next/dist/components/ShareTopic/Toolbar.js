'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/Toolbar.js';


var button = function button(img, active, onClick) {
  return _react2.default.createElement(_Button2.default, { primary: active, onClick: onClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  });
};

var style = {
  toolbar: {
    float: 'right',
    padding: '0 10px'
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['active']));

var Toolbar = enhance(function (_ref) {
  var active = _ref.active,
      onChange = _ref.onChange;
  return _react2.default.createElement('div', { style: style.toolbar, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, button('/static/images/google.svg', active === 'Google', function () {
    return onChange('Google');
  }), button('/static/images/facebook.svg', active === 'Facebook', function () {
    return onChange('Facebook');
  }), button('/static/images/facebook-messenger.svg', active === 'FacebookMessenger', function () {
    return onChange('FacebookMessenger');
  }), button('/static/images/link.svg', active === 'Link', function () {
    return onChange('Link');
  }));
});

Toolbar.propTypes = {
  active: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = Toolbar;