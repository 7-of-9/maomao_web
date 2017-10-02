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

var _reactPlaceholder = require('react-placeholder');

var _reactPlaceholder2 = _interopRequireDefault(_reactPlaceholder);

var _placeholders = require('react-placeholder/lib/placeholders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/PlaceHolder/index.js';
/**
*
* BlockElement
*
*/

function awesomePlaceholder() {
  return _react2.default.createElement('div', { className: 'media-block', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_placeholders.RectShape, { color: '#CDCDCD', style: { width: '100%', height: 120 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_placeholders.TextBlock, { rows: 3, color: '#CDCDCD', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
}

var PlaceHolder = function (_PureComponent) {
  (0, _inherits3.default)(PlaceHolder, _PureComponent);

  function PlaceHolder() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PlaceHolder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PlaceHolder.__proto__ || (0, _getPrototypeOf2.default)(PlaceHolder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ready: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PlaceHolder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ ready: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactPlaceholder2.default, {
        showLoadingAnimation: true,
        customPlaceholder: awesomePlaceholder(),
        ready: this.state.ready, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.children);
    }
  }]);

  return PlaceHolder;
}(_react.PureComponent);

exports.default = PlaceHolder;