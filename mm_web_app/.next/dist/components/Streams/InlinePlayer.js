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

var _mobxReact = require('mobx-react');

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _layoutEmitter = require('../../utils/layoutEmitter');

var _layoutEmitter2 = _interopRequireDefault(_layoutEmitter);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Streams/InlinePlayer.js';

/**
*
* YoutubePlayer
*
*/

var InlinePlayer = (_dec = (0, _mobxReact.inject)('ui'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  (0, _inherits3.default)(InlinePlayer, _Component);

  function InlinePlayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InlinePlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InlinePlayer.__proto__ || (0, _getPrototypeOf2.default)(InlinePlayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasHover: false,
      isPlaying: false
    }, _this.onReady = function () {
      _layoutEmitter2.default.emit('layout');
    }, _this.onError = function (err) {
      _logger2.default.warn('onError', err);
      _layoutEmitter2.default.emit('layout');
    }, _this.noImage = function (evt) {
      evt.target.src = '/static/images/no-image.png';
    }, _this.handleClick = function (event) {
      event.preventDefault();
      if (event.shiftKey || event.ctrlKey || event.metaKey) {
        window.open(_this.props.href, '_blank');
      } else {
        _this.props.onPreview(_this.props.href);
        _layoutEmitter2.default.emit('layout');
      }
    }, _this.renderThumbnailImage = function () {
      /* eslint-disable camelcase */
      var _this$props = _this.props,
          title = _this$props.title,
          img = _this$props.img,
          url_id = _this$props.url_id,
          topics = _this$props.topics,
          myUrlIds = _this$props.myUrlIds,
          deepestTopics = _this$props.deepestTopics,
          urlTopic = _this$props.urlTopic,
          urlOwner = _this$props.urlOwner,
          owners = _this$props.owners,
          users = _this$props.users;

      return _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('img', {
        src: img || '/static/images/no-image.png',
        alt: title,
        height: 230,
        onError: _this.noImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), urlTopic(url_id, topics, function (topic) {
        return _this.props.ui.selectTopic(topic);
      }, myUrlIds, function (topic) {
        return _this.props.ui.openShareTopic(url_id, topic, deepestTopics);
      }), urlOwner(owners.filter(function (item) {
        return item.url_id === url_id;
      }), users, function (user) {
        return _this.props.ui.selectUser(user);
      }));
    }, _this.renderTitle = function () {
      /* eslint-disable camelcase */
      var _this$props2 = _this.props,
          href = _this$props2.href,
          title = _this$props2.title,
          url_id = _this$props2.url_id,
          parseDomain = _this$props2.parseDomain;

      return _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h4', { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('a', { onClick: _this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, title, ' (', url_id, ')')), _react2.default.createElement('h5', { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, parseDomain(href)));
    }, _this.renderYoutubeFrame = function () {
      var isPlaying = _this.state.isPlaying;
      var _this$props3 = _this.props,
          href = _this$props3.href,
          url_id = _this$props3.url_id,
          topics = _this$props3.topics,
          owners = _this$props3.owners,
          users = _this$props3.users,
          myUrlIds = _this$props3.myUrlIds,
          deepestTopics = _this$props3.deepestTopics,
          urlTopic = _this$props3.urlTopic,
          urlOwner = _this$props3.urlOwner;

      return _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactPlayer2.default, {
        ref: function ref(player) {
          _this.player = player;
        },
        url: href,
        onReady: _this.onReady,
        onError: _this.onError,
        volume: 0,
        playsinline: true,
        playing: isPlaying,
        width: '100%',
        height: '100%',
        controls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), urlTopic(url_id, topics, function (topic) {
        return _this.props.ui.selectTopic(topic);
      }, myUrlIds, function (topic) {
        return _this.props.ui.openShareTopic(url_id, topic, deepestTopics);
      }), urlOwner(owners.filter(function (item) {
        return item.url_id === url_id;
      }), users, function (user) {
        return _this.props.ui.selectUser(user);
      }));
    }, _this.onMouseEnter = function (evt) {
      _this.setState({
        hasHover: true,
        isPlaying: true
      });
    }, _this.onMouseLeave = function (evt) {
      _this.setState({
        isPlaying: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InlinePlayer, [{
    key: 'render',
    value: function render() {
      /* eslint-disable camelcase */
      var hasHover = this.state.hasHover;

      return _react2.default.createElement('div', { className: 'thumbnail',
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, hasHover && this.renderYoutubeFrame(), !hasHover && this.renderThumbnailImage(), this.renderTitle());
    }
  }]);

  return InlinePlayer;
}(_react.Component)) || _class) || _class);

exports.default = InlinePlayer;