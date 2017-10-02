'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/StepTwo.js';


var style = {
  toolbar: {
    display: 'inline-block'
  }
};

var StepTwo = (0, _recompose.compose)(function (_ref) {
  var type = _ref.type,
      shareOption = _ref.shareOption,
      shareUrl = _ref.shareUrl,
      sendMsgUrl = _ref.sendMsgUrl,
      changeShareType = _ref.changeShareType;
  return _react2.default.createElement('div', { className: 'share-social', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('h3', { className: 'share-social-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Click on button below to select.'), _react2.default.createElement('div', { className: 'toolbar-button', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_Toolbar2.default, {
    active: type,
    onChange: function onChange(value) {
      changeShareType(value, shareOption, 3);
    },
    style: style.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement('div', { className: 'share-footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('button', {
    className: 'btn btn-slide-prev',
    onClick: function onClick() {
      return changeShareType(type, shareOption, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Previous')));
});

StepTwo.propTypes = {
  type: _propTypes2.default.string.isRequired,
  shareOption: _propTypes2.default.string.isRequired,
  changeShareType: _propTypes2.default.func.isRequired
};

exports.default = StepTwo;