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

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedItem.js';

/**
*
* SearchBar
*
*/

var SelectedItem = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(SelectedItem, _PureComponent);

  function SelectedItem() {
    (0, _classCallCheck3.default)(this, SelectedItem);

    return (0, _possibleConstructorReturn3.default)(this, (SelectedItem.__proto__ || (0, _getPrototypeOf2.default)(SelectedItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectedItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          id = _props.id,
          img = _props.img;

      _logger2.default.warn('SelectedItem', name, id, img);
      return _react2.default.createElement('div', { className: 'selected-topic', key: 'topic-' + id,
        style: {
          backgroundImage: 'url(' + (img || '/static/images/no-image.png') + ')',
          backgroundSize: 'cover',
          opacity: '0.6'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('span', { className: 'text-topic', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, name), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
          _this2.props.onRemove(id, name, img);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('i', { className: 'fa fa-remove', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })));
    }
  }]);

  return SelectedItem;
}(_react.PureComponent), _class.propTypes = {
  name: _propTypes2.default.string.isRequired,
  img: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.number.isRequired,
  onRemove: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  img: '',
  name: '',
  id: 0,
  onRemove: function onRemove(id, name, img) {}
}, _temp);

exports.default = SelectedItem;