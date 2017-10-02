'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _player = require('@vimeo/player');

var _player2 = _interopRequireDefault(_player);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/VimeoPlayer/index.js';
/**
*
* VimeoPlayer
*
*/

var Title = _noParser2.default.h3.withConfig({
  displayName: 'VimeoPlayer__Title',
  componentId: 's1b7xdvp-0'
})([['{font-size:14px;margin:0;padding:0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}']]);

var Anchor = _noParser2.default.a.withConfig({
  displayName: 'VimeoPlayer__Anchor',
  componentId: 's1b7xdvp-1'
})([['{color:#41addd;text-decoration:none;}'], [':hover{color:#6cc0e5;}']]);

var Description = _noParser2.default.p.withConfig({
  displayName: 'VimeoPlayer__Description',
  componentId: 's1b7xdvp-2'
})([['{font-size:12px;margin:0;padding:0;text-align:left;}']]);

var Icon = _noParser2.default.img.withConfig({
  displayName: 'VimeoPlayer__Icon',
  componentId: 's1b7xdvp-3'
})([['{float:left;width:32px;height:32px;}']]);

function vimeoGetID(url) {
  /* global URL */
  var _ref = new URL(url),
      pathname = _ref.pathname;

  return pathname.substr(1);
}

function playVideo(iframe) {
  var player = new _player2.default(iframe);
  player.setVolume(0);
  player.play();
}

function pauseVideo(iframe) {
  var player = new _player2.default(iframe);
  player.pause();
}

function handleClick(event, url, iframe) {
  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else if (iframe) {
    var player = new _player2.default(iframe);
    player.play();
  }
}

var VimeoPlayer = function (_PureComponent) {
  (0, _inherits3.default)(VimeoPlayer, _PureComponent);

  function VimeoPlayer() {
    (0, _classCallCheck3.default)(this, VimeoPlayer);

    return (0, _possibleConstructorReturn3.default)(this, (VimeoPlayer.__proto__ || (0, _getPrototypeOf2.default)(VimeoPlayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(VimeoPlayer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          name = _props.name,
          description = _props.description,
          type = _props.type,
          onPreview = _props.onPreview;

      return _react2.default.createElement('div', { className: 'thumbnail',
        onMouseEnter: function onMouseEnter() {
          _this2.iframe && playVideo(_this2.iframe);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.iframe && pauseVideo(_this2.iframe);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('iframe', {
        src: 'https://player.vimeo.com/video/' + vimeoGetID(url),
        frameBorder: '0',
        height: '100%',
        width: '100%',
        allowFullScreen: true,
        ref: function ref(el) {
          _this2.iframe = el;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(Title, { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(Anchor, { onClick: function onClick(evt) {
          onPreview() && handleClick(evt, url, _this2.iframe);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, name && _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, name))), description && _react2.default.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, (0, _lodash.truncate)(description, { length: 100, separator: /,? +/ })), _react2.default.createElement('div', { className: 'panel-user panel-credit', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('div', { className: 'panel-user-img', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('span', { className: 'credit-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(Icon, { src: '/static/images/vimeo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement('span', { className: 'panel-user-cnt', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('span', { className: 'full-name', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, type)))))));
    }
  }]);

  return VimeoPlayer;
}(_react.PureComponent);

VimeoPlayer.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = VimeoPlayer;