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

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp2,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/TopicItem.js';

/**
*
* StreamItem
*
*/

var TopicItem = (_temp2 = _class = function (_PureComponent) {
  (0, _inherits3.default)(TopicItem, _PureComponent);

  function TopicItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TopicItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TopicItem.__proto__ || (0, _getPrototypeOf2.default)(TopicItem)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (evt) {
      _logger2.default.warn('onChange', evt);
      var _this$props = _this.props,
          topicId = _this$props.topic_id,
          title = _this$props.title,
          isSelect = _this$props.isSelect,
          img = _this$props.img;

      _this.props.onChange(!isSelect, topicId, title, img);
    }, _this.handleClick = function (evt) {
      evt.preventDefault();
      _logger2.default.warn('handleClick');
      var _this$props2 = _this.props,
          hasChild = _this$props2.hasChild,
          topicId = _this$props2.topic_id,
          title = _this$props2.title,
          isSelect = _this$props2.isSelect,
          img = _this$props2.img;

      if (hasChild) {
        _this.props.onSelect(topicId, title);
      }
      if (!isSelect) {
        _this.props.onChange(!isSelect, topicId, title, img);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TopicItem, [{
    key: 'render',
    value: function render() {
      /* eslint-disable camelcase */
      var _props = this.props,
          topic_id = _props.topic_id,
          title = _props.title,
          img = _props.img,
          isSelect = _props.isSelect;

      _logger2.default.warn('TopicItem', topic_id, title, img);
      return _react2.default.createElement('div', { key: topic_id, className: 'grid-item shuffle-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-box', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', {
        className: 'thumbnail',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('a', {
        style: {
          backgroundImage: 'url(' + (img || '/static/images/no-image.png') + ')',
          backgroundSize: 'cover'
        },
        className: 'thumbnail-image',
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', { className: 'mix-tag', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { className: 'mix-tag-topic', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('span', { className: 'tags ' + (0, _helper.tagColor)(title), rel: 'tag', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, title))))), _react2.default.createElement('input', {
        checked: isSelect,
        type: 'checkbox',
        className: 'select-topic',
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))));
    }
  }]);

  return TopicItem;
}(_react.PureComponent), _class.propTypes = {
  topic_id: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  img: _propTypes2.default.string.isRequired,
  isSelect: _propTypes2.default.bool.isRequired,
  hasChild: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onSelect: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  topic_id: 0,
  title: '',
  img: '',
  isSelect: false,
  hasChild: true,
  onChange: function onChange(isSelect, topicId, title, img) {},
  onSelect: function onSelect(isSelect, topicId) {}
}, _temp2);

exports.default = TopicItem;