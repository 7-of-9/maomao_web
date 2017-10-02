'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactToggleDisplay = require('react-toggle-display');

var _reactToggleDisplay2 = _interopRequireDefault(_reactToggleDisplay);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _GoogleShare = require('./GoogleShare');

var _GoogleShare2 = _interopRequireDefault(_GoogleShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/StepThree.js';


var SITE_URL = 'https://maomaoweb.azurewebsites.net';
var style = {
  button: {
    float: 'right',
    textAlign: 'center'
  }
};

var selectUrl = function selectUrl(code, shareOption) {
  return code[shareOption];
};

var StepThree = function StepThree(_ref) {
  var type = _ref.type,
      contacts = _ref.contacts,
      code = _ref.code,
      shareOption = _ref.shareOption,
      accessGoogleContacts = _ref.accessGoogleContacts,
      handleChange = _ref.handleChange,
      sendEmails = _ref.sendEmails,
      changeShareType = _ref.changeShareType,
      notify = _ref.notify;
  return _react2.default.createElement('div', { className: 'modifier-autosuggest', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_reactToggleDisplay2.default, { className: 'link-share-option', show: type === 'Google' && contacts.length === 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'You have no google contacts. Click', _react2.default.createElement('button', { type: 'button', className: 'btn btn-copy mr7 ml7', onClick: accessGoogleContacts, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, ' here '), 'to grant permissions to access google contacts.'), _react2.default.createElement(_reactToggleDisplay2.default, { show: type === 'Google' && contacts.length > 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('div', { className: 'panel-account', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_GoogleShare2.default, {
    mostRecentUses: contacts.slice(0, 3),
    contacts: contacts,
    handleChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), _react2.default.createElement(_reactToggleDisplay2.default, { className: 'link-share-option', show: type === 'Link', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'input-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('input', {
    className: 'form-control',
    value: SITE_URL + '/' + selectUrl(code, shareOption),
    readOnly: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement(_reactCopyToClipboard2.default, {
    text: SITE_URL + '/' + selectUrl(code, shareOption),
    onCopy: function onCopy() {
      return notify('You\'ve just copied the link ' + SITE_URL + '/' + selectUrl(code, shareOption));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('div', { className: 'input-group-btn', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('button', { type: 'button', className: 'btn btn-copy', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Copy'))))), _react2.default.createElement('div', { className: 'share-footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('button', {
    className: 'btn btn-slide-prev',
    onClick: function onClick() {
      return changeShareType(type, shareOption, 2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Previous'), type === 'Google' && contacts.length > 0 && _react2.default.createElement('div', { className: 'share-now', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('button', {
    style: style.button,
    className: 'btn share-button',
    onClick: sendEmails,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Share Now !'))));
};

StepThree.propTypes = {
  type: _propTypes2.default.string.isRequired,
  code: _propTypes2.default.object.isRequired,
  contacts: _propTypes2.default.array.isRequired,
  shareOption: _propTypes2.default.string.isRequired,
  accessGoogleContacts: _propTypes2.default.func.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  notify: _propTypes2.default.func.isRequired,
  sendEmails: _propTypes2.default.func.isRequired,
  changeShareType: _propTypes2.default.func.isRequired
};

exports.default = StepThree;