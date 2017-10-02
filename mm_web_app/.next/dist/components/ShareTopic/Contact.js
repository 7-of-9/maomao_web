'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/Contact.js';


var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Contact__Wrapper',
  componentId: 's19x32af-0'
})([['{height:40px;width:170px;float:left;background:#fff;margin:10px !important;}'], [':hover{background:#dedede;box-shadow:0 2px 10px rgba(0,0,0,0.5);cursor:pointer;}']]);
var Image = _noParser2.default.span.withConfig({
  displayName: 'Contact__Image',
  componentId: 's19x32af-1'
})([['{float:left;width:50px;}']]);
var Info = _noParser2.default.ul.withConfig({
  displayName: 'Contact__Info',
  componentId: 's19x32af-2'
})([['{float:right;width:120px;height:50px;text-align:left;}']]);
var Item = _noParser2.default.li.withConfig({
  displayName: 'Contact__Item',
  componentId: 's19x32af-3'
})([['{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left;font-size:11px !important;}']]);

var Remove = _noParser2.default.a.withConfig({
  displayName: 'Contact__Remove',
  componentId: 's19x32af-4'
})([[':hover{background:#dedede;box-shadow:0 2px 10px rgba(0,0,0,0.5);cursor:pointer;}']]);

/* eslint-disable no-param-reassign */
var Contact = function Contact(_ref) {
  var onClick = _ref.onClick,
      name = _ref.name,
      email = _ref.email,
      image = _ref.image,
      isEdit = _ref.isEdit,
      onRemove = _ref.onRemove;
  return _react2.default.createElement(Wrapper, { onClick: onClick, className: 'share-contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(Image, { className: 'share-contact-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('img', {
    onError: function onError(ev) {
      ev.target.src = '/static/images/no-image.png';
    },
    src: image,
    alt: name || email,
    height: '40',
    width: '40',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement(Info, { className: 'share-info', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, name && name.length > 0 && _react2.default.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, name), _react2.default.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, email), isEdit && _react2.default.createElement(Remove, { className: 'account-remove', onClick: onRemove, __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement('img', { style: { width: '20px', height: '20px', float: 'right' }, src: '/static/images/minus.png', alt: 'Remove', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }))));
};

Contact.propTypes = {
  name: _propTypes2.default.string,
  email: _propTypes2.default.string,
  image: _propTypes2.default.string,
  isEdit: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onRemove: _propTypes2.default.func
};

Contact.defaultProps = {
  name: '',
  email: '',
  image: '',
  isEdit: false,
  onClick: function onClick() {},
  onRemove: function onRemove() {}
};

var enhance = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['name', 'email', 'image']));

exports.default = enhance(Contact);