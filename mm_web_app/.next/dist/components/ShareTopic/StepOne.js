'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _ShareOptions = require('./ShareOptions');

var _ShareOptions2 = _interopRequireDefault(_ShareOptions);

var _fb = require('../../utils/fb');

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/StepOne.js';


var SITE_URL = 'https://maomaoweb.azurewebsites.net';
var selectUrl = function selectUrl(code, shareOption) {
  return code[shareOption];
};

var StepOne = (0, _recompose.compose)(function (_ref) {
  var type = _ref.type,
      code = _ref.code,
      shareOption = _ref.shareOption,
      topics = _ref.topics,
      changeShareType = _ref.changeShareType;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_ShareOptions2.default, {
    active: shareOption,
    topics: topics,
    onChange: function onChange(value) {
      changeShareType(type, value, 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('div', { className: 'share-footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('button', {
    className: 'btn btn-slide-next',
    onClick: function onClick() {
      var url = SITE_URL + '/' + selectUrl(code, shareOption);
      (0, _fb2.default)(url);
      changeShareType(type, shareOption, 2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Next')));
});

StepOne.propTypes = {
  type: _propTypes2.default.string.isRequired,
  code: _propTypes2.default.object.isRequired,
  topics: _propTypes2.default.array.isRequired,
  shareOption: _propTypes2.default.string.isRequired,
  changeShareType: _propTypes2.default.func.isRequired
};

exports.default = StepOne;