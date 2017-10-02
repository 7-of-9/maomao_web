'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp2,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Streams/InlinePreview.js';

/**
*
* YoutubePlayer
*
*/

var InlinePreview = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(InlinePreview, _Component);

  function InlinePreview() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InlinePreview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InlinePreview.__proto__ || (0, _getPrototypeOf2.default)(InlinePreview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: false
    }, _this.renderPlayer = function () {
      var _this$props = _this.props,
          url = _this$props.url,
          width = _this$props.width,
          height = _this$props.height;

      _logger2.default.warn('renderPlayer', url, width, height);
      if (!url) {
        return _react2.default.createElement('div', {
          style: { backgroundColor: '#fff', width: width || '100%', height: height || '100%' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }));
      }
      return _react2.default.createElement(_reactPlayer2.default, {
        url: url,
        playsinline: true,
        playing: true,
        width: width || '100%',
        height: height || '100%',
        controls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      });
    }, _this.onLoadIframe = function () {
      _logger2.default.warn('iframe', _this.iframe);
      _this.setState({ isLoading: false });
    }, _this.renderIframe = function () {
      var _this$props2 = _this.props,
          url = _this$props2.url,
          width = _this$props2.width,
          height = _this$props2.height;
      var isLoading = _this.state.isLoading;

      _logger2.default.warn('renderIframe', url, width, height);
      if (!url) {
        return _react2.default.createElement('div', {
          style: { backgroundColor: '#fff', width: width || '100%', height: height || '100%' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }));
      }
      var PROXY_URL = '/api/preview';
      var proxyUrl = PROXY_URL + '?url=' + url;
      return _react2.default.createElement('div', {
        style: { backgroundColor: '#fff', width: width || '100%', height: height || '100%' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_Loading2.default, { isLoading: isLoading, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement('iframe', {
        className: isLoading ? 'hidden-view' : 'iframe-view',
        sandbox: 'allow-same-origin',
        id: 'frame-' + url,
        name: 'frame-' + url,
        ref: function ref(iframe) {
          _this.iframe = iframe;
        },
        onLoad: _this.onLoadIframe,
        width: width,
        height: height,
        frameBorder: '0',
        allowFullScreen: true,
        allowTransparency: true,
        src: proxyUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InlinePreview, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url && !this.state.isLoading) {
        this.setState({ isLoading: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var url = this.props.url;

      return _react2.default.createElement('div', { className: 'grid-item--full', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', { className: 'close_button', onClick: this.props.closePreview, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), (url.indexOf('vimeo.com') !== -1 || url.indexOf('youtube.com') !== -1) && this.renderPlayer(), url.indexOf('vimeo.com') === -1 && url.indexOf('youtube.com') === -1 && this.renderIframe());
    }
  }]);

  return InlinePreview;
}(_react.Component), _class.propTypes = {
  url: _propTypes2.default.string.isRequired,
  closePreview: _propTypes2.default.func,
  width: _propTypes2.default.any.isRequired,
  height: _propTypes2.default.any.isRequired
}, _temp2);
exports.default = InlinePreview;