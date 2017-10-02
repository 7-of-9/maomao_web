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

var _reactResizeDetector = require('react-resize-detector');

var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _reactSubscribe = require('react-subscribe');

var _layoutEmitter = require('../../utils/layoutEmitter');

var _layoutEmitter2 = _interopRequireDefault(_layoutEmitter);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/GridView/index.js';

/**
*
* GridView
*
*/

var masonryOptions = {
  itemSelector: '.grid-item',
  transitionDuration: '0.4s',
  columnWidth: '.grid-sizer',
  percentPosition: true
};

var GridView = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(GridView, _React$PureComponent);

  function GridView() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GridView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GridView.__proto__ || (0, _getPrototypeOf2.default)(GridView)).call.apply(_ref, [this].concat(args))), _this), _this.onLayout = function () {
      _logger2.default.warn('onLayout', _this.masonry);
      _this.masonry.layout();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GridView, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.onLayout();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onLayout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'main-inner', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_reactSubscribe.Subscribe, { target: _layoutEmitter2.default, eventName: 'layout', listener: this.onLayout, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, handleHeight: true, onResize: this.onLayout, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_reactMasonryComponent2.default, {
        className: 'container-masonry',
        options: masonryOptions,
        ref: function ref(c) {
          _this2.masonry = _this2.masonry || c.masonry;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('div', { className: 'grid-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { className: 'grid-sizer', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), this.props.children)));
    }
  }]);

  return GridView;
}(_react2.default.PureComponent)) || _class) || _class) || _class);

exports.default = GridView;