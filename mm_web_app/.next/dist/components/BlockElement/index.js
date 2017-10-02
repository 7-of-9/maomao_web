'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _lodash = require('lodash');

var _PlaceHolder = require('../PlaceHolder');

var _PlaceHolder2 = _interopRequireDefault(_PlaceHolder);

var _Loading = require('..//Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _previewUrl = require('../../utils/previewUrl');

var _previewUrl2 = _interopRequireDefault(_previewUrl);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/index.js';
/**
*
* BlockElement
*
*/

var YoutubePlayer = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('./YoutubePlayer');

    m.__webpackChunkName = '--YoutubePlayer-534237b8-a84a-430f-90d2-36f9e4dd606a.js';
    resolve(m);
  }, 'chunks/--YoutubePlayer-534237b8-a84a-430f-90d2-36f9e4dd606a.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('./YoutubePlayer');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('./YoutubePlayer');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/--YoutubePlayer-534237b8-a84a-430f-90d2-36f9e4dd606a.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    });
  }
});

var VimeoPlayer = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('./VimeoPlayer');

    m.__webpackChunkName = '--VimeoPlayer-50364538-9a4b-4416-ae25-856a0de3f5d3.js';
    resolve(m);
  }, 'chunks/--VimeoPlayer-50364538-9a4b-4416-ae25-856a0de3f5d3.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('./VimeoPlayer');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('./VimeoPlayer');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/--VimeoPlayer-50364538-9a4b-4416-ae25-856a0de3f5d3.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    });
  }
});

var Wrapper = _noParser2.default.section.withConfig({
  displayName: 'BlockElement__Wrapper',
  componentId: 'tspn0f-0'
})([['{padding:10px;border-radius:6px;}'], [':after{content:\'\';display:block;clear:both;}']]);

var Anchor = _noParser2.default.a.withConfig({
  displayName: 'BlockElement__Anchor',
  componentId: 'tspn0f-1'
})([['{color:#41addd;text-decoration:none;}'], [':hover{color:#6cc0e5;}']]);

var Img = _noParser2.default.img.withConfig({
  displayName: 'BlockElement__Img',
  componentId: 'tspn0f-2'
})([['{margin-bottom:10px;border-radius:8px;vertical-align:middle;margin:0 auto;display:block;}']]);

var Title = _noParser2.default.h3.withConfig({
  displayName: 'BlockElement__Title',
  componentId: 'tspn0f-3'
})([['{font-size:14px;margin:0;padding:0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}']]);

var Description = _noParser2.default.p.withConfig({
  displayName: 'BlockElement__Description',
  componentId: 'tspn0f-4'
})([['{font-size:12px;margin:0;padding:0;text-align:left;}']]);

var Icon = _noParser2.default.img.withConfig({
  displayName: 'BlockElement__Icon',
  componentId: 'tspn0f-5'
})([['{float:left;width:32px;height:32px;}']]);

function iconType(type) {
  switch (type) {
    case 'Google Knowledge':
      return '/static/images/google-knowledge-graph.png';
    case 'Google News':
      return '/static/images/google-news.png';
    case 'Youtube':
      return '/static/images/youtube.png';
    case 'Reddit':
      return '/static/images/reddit.png';
    case 'Vimeo':
      return '/static/images/vimeo.png';
    case 'Twitter':
      return '/static/images/twitter.png';
    default:
      return '/static/images/google.png';
  }
}

var BlockElement = function (_Component) {
  (0, _inherits3.default)(BlockElement, _Component);

  function BlockElement(props) {
    (0, _classCallCheck3.default)(this, BlockElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockElement.__proto__ || (0, _getPrototypeOf2.default)(BlockElement)).call(this, props));

    _this.state = {
      isPreview: false
    };
    _this.onPreview = _this.onPreview.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(BlockElement, [{
    key: 'onPreview',
    value: function onPreview() {
      var _this2 = this;

      this.setState({
        isPreview: true
      }, function () {
        _this2.props.masonry && _this2.props.masonry.layout();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          image = _props.image,
          name = _props.name,
          description = _props.description,
          type = _props.type;
      var isPreview = this.state.isPreview;

      _logger2.default.info('BlockElement render', url, image, type);
      return _react2.default.createElement('div', { className: isPreview ? 'grid-item grid-item--full' : 'grid-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(Wrapper, { className: 'thumbnail-box', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, type === 'Youtube' && _react2.default.createElement(YoutubePlayer, (0, _extends3.default)({}, this.props, { onPreview: this.onPreview, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), type === 'Vimeo' && _react2.default.createElement(VimeoPlayer, (0, _extends3.default)({}, this.props, { onPreview: this.onPreview, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), type !== 'Youtube' && type !== 'Vimeo' && isPreview && (0, _previewUrl2.default)(url, name), type !== 'Youtube' && type !== 'Vimeo' && !isPreview && _react2.default.createElement(_PlaceHolder2.default, { image: image, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement('div', { className: 'thumbnail', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(Anchor, { className: 'thumbnail-overlay', onClick: this.onPreview, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(Img, { src: image, alt: name, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))), _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(Title, { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(Anchor, { onClick: this.onPreview, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, name && _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, name))), description && _react2.default.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, (0, _lodash.truncate)(description, { length: 100, separator: /,? +/ })), _react2.default.createElement('div', { className: 'panel-user panel-credit', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('div', { className: 'panel-user-img', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('span', { className: 'credit-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(Icon, { src: iconType(type), __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), _react2.default.createElement('span', { className: 'panel-user-cnt', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement('span', { className: 'full-name', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, type))))))))));
    }
  }]);

  return BlockElement;
}(_react.Component);

BlockElement.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  url: _propTypes2.default.string,
  masonry: _propTypes2.default.object
};

exports.default = BlockElement;