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

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _SelectedItem = require('./SelectedItem');

var _SelectedItem2 = _interopRequireDefault(_SelectedItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedList.js';

/**
*
* SearchBar
*
*/

var SelectedList = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(SelectedList, _React$PureComponent);

  function SelectedList() {
    (0, _classCallCheck3.default)(this, SelectedList);

    return (0, _possibleConstructorReturn3.default)(this, (SelectedList.__proto__ || (0, _getPrototypeOf2.default)(SelectedList)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectedList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      var settings = {
        infinite: false,
        arrows: true,
        speed: 500,
        responsive: [{
          breakpoint: 768,
          settings: { slidesToShow: Math.min(items.length, 3) }
        }, {
          breakpoint: 1024,
          settings: { slidesToShow: Math.min(items.length, 5) }
        }],
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true
      };
      return _react2.default.createElement(_reactSlick2.default, (0, _extends3.default)({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), items.map(function (_ref) {
        var name = _ref.name,
            img = _ref.img,
            id = _ref.id;
        return _react2.default.createElement('div', { key: id + '-' + name, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(_SelectedItem2.default, {
          name: name,
          img: img,
          id: id,
          onRemove: _this2.props.onRemove,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }));
      }));
    }
  }]);

  return SelectedList;
}(_react2.default.PureComponent), _class.propTypes = {
  items: _propTypes2.default.array.isRequired,
  onRemove: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  items: [],
  onRemove: function onRemove(id, name, img) {}
}, _temp);

exports.default = SelectedList;