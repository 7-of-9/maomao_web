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

var _reactResizableBox = require('react-resizable-box');

var _reactResizableBox2 = _interopRequireDefault(_reactResizableBox);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp2,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SplitView/index.js';

/**
*
* UnlockNow
*
*/

var SplitView = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(SplitView, _React$Component);

  function SplitView() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SplitView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SplitView.__proto__ || (0, _getPrototypeOf2.default)(SplitView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ready: true
    }, _this.onResizeStart = function () {
      _logger2.default.warn('onResizeStart', _this.resizable);
      _this.props.onResizeStart();
      _this.setState({ ready: false });
    }, _this.onResizeStop = function () {
      _logger2.default.warn('onResizeStop', _this.resizable);
      var width = _this.resizable.state.width;

      _this.props.onResizeStop(width);
      _this.setState({ ready: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SplitView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var ready = this.state.ready;

      return _react2.default.createElement(_reactResizableBox2.default, {
        enable: { top: false, right: true, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false },
        className: 'resizable',
        ref: function ref(c) {
          _this2.resizable = c;
        },
        width: window.innerWidth / 2,
        onResizeStop: this.onResizeStop,
        onResizeStart: this.onResizeStart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', { className: !ready ? 'hidden-view' : 'splitter-view', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.props.children(this.resizable && this.resizable.state.width, window.outerHeight)), !ready && _react2.default.createElement('div', { className: 'on-resize', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }));
    }
  }]);

  return SplitView;
}(_react2.default.Component), _class.propTypes = {
  onResizeStop: _propTypes2.default.func.isRequired,
  onResizeStart: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  onResizeStop: function onResizeStop() {},
  onResizeStart: function onResizeStart() {}
}, _temp2);

exports.default = SplitView;