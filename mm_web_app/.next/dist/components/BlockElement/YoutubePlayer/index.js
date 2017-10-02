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

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/YoutubePlayer/index.js';
/**
*
* YoutubePlayer
*
*/

var Title = _noParser2.default.h3.withConfig({
  displayName: 'YoutubePlayer__Title',
  componentId: 'j7s0vi-0'
})([['{font-size:14px;margin:0;padding:0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}']]);

var Anchor = _noParser2.default.a.withConfig({
  displayName: 'YoutubePlayer__Anchor',
  componentId: 'j7s0vi-1'
})([['{color:#41addd;text-decoration:none;}'], [':hover{color:#6cc0e5;}']]);

var Description = _noParser2.default.p.withConfig({
  displayName: 'YoutubePlayer__Description',
  componentId: 'j7s0vi-2'
})([['{font-size:12px;margin:0;padding:0;text-align:left;}']]);

var Icon = _noParser2.default.img.withConfig({
  displayName: 'YoutubePlayer__Icon',
  componentId: 'j7s0vi-3'
})([['{float:left;width:32px;height:32px;}']]);

function YouTubeGetID(url) {
  var ID = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
}

function playVideo(player) {
  player.mute();
  player.playVideo();
}

function pauseVideo(player) {
  player.pauseVideo();
}

function handleClick(event, url, player) {
  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else if (player) {
    player.playVideo();
  }
}

var YoutubePlayer = function (_PureComponent) {
  (0, _inherits3.default)(YoutubePlayer, _PureComponent);

  function YoutubePlayer() {
    (0, _classCallCheck3.default)(this, YoutubePlayer);

    return (0, _possibleConstructorReturn3.default)(this, (YoutubePlayer.__proto__ || (0, _getPrototypeOf2.default)(YoutubePlayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(YoutubePlayer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          name = _props.name,
          description = _props.description,
          type = _props.type,
          onPreview = _props.onPreview;

      var opts = {
        height: '220',
        width: '100%',
        playerVars: {
          autoplay: 0
        }
      };
      return _react2.default.createElement('div', {
        className: 'thumbnail',
        onMouseEnter: function onMouseEnter() {
          _this2.ytb && playVideo(_this2.ytb);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.ytb && pauseVideo(_this2.ytb);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('div', {
        className: 'thumbnail-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_reactYoutube2.default, {
        videoId: YouTubeGetID(url),
        opts: opts,
        onReady: function onReady(event) {
          _this2.ytb = event.target;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(Title, { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(Anchor, { onClick: function onClick(evt) {
          onPreview() && handleClick(evt, url, _this2.ytb);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, name && _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, name))), description && _react2.default.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, (0, _lodash.truncate)(description, { length: 100, separator: /,? +/ })), _react2.default.createElement('div', { className: 'panel-user panel-credit', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('div', { className: 'panel-user-img', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('span', { className: 'credit-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(Icon, { src: '/static/images/youtube.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement('span', { className: 'panel-user-cnt', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('span', { className: 'full-name', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, type)))))));
    }
  }]);

  return YoutubePlayer;
}(_react.PureComponent);

YoutubePlayer.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = YoutubePlayer;