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

var _reactNotification = require('react-notification');

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Notification/index.js';

/*
 *
 * Notification
 *
 */

var Notification = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(Notification, _React$PureComponent);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.removeNotification = function (uuid) {
      _this.props.ui.removeNotification(uuid);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentWillReact',
    value: function componentWillReact() {
      _logger2.default.warn('Notification componentWillReact');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _logger2.default.warn('Notification componentWillUnmount');
      this.props.ui.clearNotifications();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNotification.NotificationStack, {
        notifications: this.props.ui.notifications.slice(),
        dismissAfter: 5000,
        onDismiss: this.removeNotification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      });
    }
  }]);

  return Notification;
}(_react2.default.PureComponent)) || _class) || _class) || _class);

exports.default = Notification;