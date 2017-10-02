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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStickyEl = require('react-sticky-el');

var _reactStickyEl2 = _interopRequireDefault(_reactStickyEl);

var _SelectedList = require('./SelectedList');

var _SelectedList2 = _interopRequireDefault(_SelectedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/index.js';

/**
*
* Loading
*
*/

var SelectedPanel = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(SelectedPanel, _PureComponent);

  function SelectedPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectedPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectedPanel.__proto__ || (0, _getPrototypeOf2.default)(SelectedPanel)).call.apply(_ref, [this].concat(args))), _this), _this.onRemove = function (id, name, img) {
      _this.props.ui.toggleSelectTopic(false, id, name, img);
    }, _this.showSignUp = function () {
      _this.props.ui.toggleSignIn(true, 'Sign Up');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectedPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          total = _props.total;

      return _react2.default.createElement(_reactStickyEl2.default, { className: 'animated fadeInUp', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', { className: 'selected-panel', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('p', { className: 'text-engine', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'What kind of things are you interested in\u2026', total > 0 && _react2.default.createElement('div', { className: 'block-button', style: { textAlign: 'center', display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('button', { className: 'btn btn-login', onClick: this.showSignUp, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('i', { className: 'fa fa-sign-in', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), ' Ok! Let\u2019s go'))), items && items.length > 0 && _react2.default.createElement(_SelectedList2.default, { items: items, onRemove: this.onRemove, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })));
    }
  }]);

  return SelectedPanel;
}(_react.PureComponent), _class2.propTypes = {
  total: _propTypes2.default.number.isRequired,
  items: _propTypes2.default.array.isRequired
}, _class2.defaultProps = {
  total: 0,
  items: []
}, _temp2)) || _class) || _class) || _class);

exports.default = SelectedPanel;