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

var _DiscoveryButton = require('../../components/DiscoveryButton');

var _DiscoveryButton2 = _interopRequireDefault(_DiscoveryButton);

var _PlaceHolder = require('../../components/PlaceHolder');

var _PlaceHolder2 = _interopRequireDefault(_PlaceHolder);

var _InlinePlayer = require('./InlinePlayer');

var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Streams/StreamItem.js';

/**
*
* StreamItem
*
*/

var StreamItem = (_dec = (0, _mobxReact.inject)('ui'), _dec(_class = (0, _mobxReact.observer)(_class = function (_PureComponent) {
  (0, _inherits3.default)(StreamItem, _PureComponent);

  function StreamItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, StreamItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StreamItem.__proto__ || (0, _getPrototypeOf2.default)(StreamItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      event.preventDefault();
      if (event.shiftKey || event.ctrlKey || event.metaKey) {
        window.open(_this.props.href, '_blank');
      } else {
        _this.props.onPreview(_this.props.href);
      }
    }, _this.noImage = function (evt) {
      evt.target.src = '/static/images/no-image.png';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(StreamItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      /* eslint-disable camelcase */
      var _props = this.props,
          href = _props.href,
          title = _props.title,
          img = _props.img,
          url_id = _props.url_id,
          owners = _props.owners,
          users = _props.users,
          topics = _props.topics,
          myUrlIds = _props.myUrlIds,
          deepestTopics = _props.deepestTopics,
          parseDomain = _props.parseDomain,
          urlTopic = _props.urlTopic,
          urlOwner = _props.urlOwner,
          discoveryKeys = _props.discoveryKeys,
          suggestionKeys = _props.suggestionKeys;

      return _react2.default.createElement('div', { key: url_id, className: 'grid-item shuffle-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-box', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, discoveryKeys && discoveryKeys.length > 0 && _react2.default.createElement(_DiscoveryButton2.default, { openDiscoveryMode: function openDiscoveryMode() {
          return _this2.props.ui.openDiscoveryMode(discoveryKeys, suggestionKeys);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), href.indexOf('youtube.com') === -1 && href.indexOf('vimeo.com') === -1 && _react2.default.createElement(_PlaceHolder2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('div', { className: 'thumbnail', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('a', { className: 'thumbnail-overlay', onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('img', {
        src: img || '/static/images/no-image.png',
        alt: title,
        onError: this.noImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), urlTopic(url_id, topics, function (topic) {
        return _this2.props.ui.selectTopic(topic);
      }, myUrlIds, function (topic) {
        return _this2.props.ui.openShareTopic(url_id, topic, deepestTopics);
      }), urlOwner(owners.filter(function (item) {
        return item.url_id === url_id;
      }), users, function (user) {
        return _this2.props.ui.selectUser(user);
      })), _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h4', { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, title, ' (', url_id, ')')), _react2.default.createElement('h5', { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, parseDomain(href))))), href.indexOf('youtube.com') !== -1 && _react2.default.createElement(_InlinePlayer2.default, {
        href: href,
        img: img,
        title: title,
        url_id: url_id,
        topics: topics,
        deepestTopics: deepestTopics,
        users: users,
        owners: owners,
        myUrlIds: myUrlIds,
        urlTopic: urlTopic,
        urlOwner: urlOwner,
        parseDomain: parseDomain,
        onPreview: this.props.onPreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), href.indexOf('vimeo.com') !== -1 && _react2.default.createElement(_InlinePlayer2.default, {
        href: href,
        img: img,
        title: title,
        url_id: url_id,
        topics: topics,
        deepestTopics: deepestTopics,
        users: users,
        owners: owners,
        myUrlIds: myUrlIds,
        urlTopic: urlTopic,
        urlOwner: urlOwner,
        parseDomain: parseDomain,
        onPreview: this.props.onPreview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })));
    }
  }]);

  return StreamItem;
}(_react.PureComponent)) || _class) || _class);

exports.default = StreamItem;