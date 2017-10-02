
          window.__NEXT_REGISTER_CHUNK('------components-TopicTree-fa945530-c032-42fe-bbc4-58102c625e72.js', function() {
            webpackJsonp([10],{

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagColor = tagColor;
var MAX_COLORS = 12;

function tagColor(name) {
  return "tags-color-" + (name.length % MAX_COLORS + 1);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/utils/helper.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/utils/helper.js"); } } })();

/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _logger = __webpack_require__(595);

var _logger2 = _interopRequireDefault(_logger);

var _helper = __webpack_require__(1181);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/TopicItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/TopicItem.js"); } } })();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(659);

var _mobx = __webpack_require__(566);

var _lodash = __webpack_require__(705);

var _lodash2 = _interopRequireDefault(_lodash);

var _TopicItem = __webpack_require__(1512);

var _TopicItem2 = _interopRequireDefault(_TopicItem);

var _logger = __webpack_require__(595);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/index.js';

/**
*
* TopicTree
*
*/

var parentTopicInfo = function parentTopicInfo(tree, topicId, treeLevel) {
  if (treeLevel <= 2) {
    return { topic_id: '', topic_name: '' };
  } else {
    for (var counter = 0; counter < tree.length; counter += 1) {
      var foundTopicTree = _lodash2.default.find(tree[counter].child_topics, function (item) {
        return item.topic_id === topicId;
      });
      if (foundTopicTree) {
        return tree[counter];
      }
    }
    for (var _counter = 0; _counter < tree.length; _counter += 1) {
      var foundChild = parentTopicInfo(tree[_counter].child_topics, topicId, treeLevel);
      if (foundChild) {
        return foundChild;
      }
    }
  }
};

var currentTopicTree = function currentTopicTree(tree, topicId) {
  if (topicId === '') {
    return tree;
  } else {
    var foundTree = _lodash2.default.find(tree, function (item) {
      return item.topic_id === topicId;
    });
    if (foundTree) {
      return foundTree.child_topics;
    } else {
      for (var counter = 0; counter < tree.length; counter += 1) {
        var topic = currentTopicTree(tree[counter].child_topics, topicId);
        if (topic) {
          return topic;
        }
      }
    }
  }
};

var TopicTree = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  (0, _inherits3.default)(TopicTree, _Component);

  function TopicTree() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TopicTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TopicTree.__proto__ || (0, _getPrototypeOf2.default)(TopicTree)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (isSelect, topicId, title, img) {
      _this.props.ui.toggleSelectTopic(isSelect, topicId, title, img);
    }, _this.onSelect = function (topicId, topicName) {
      _this.props.ui.selectTopicTree(topicId, topicName);
    }, _this.onBack = function () {
      var _toJS = (0, _mobx.toJS)(_this.props.store),
          tree = _toJS.tree;

      var _toJS2 = (0, _mobx.toJS)(_this.props.ui),
          currentTopicId = _toJS2.currentTopicId,
          treeLevel = _toJS2.treeLevel;

      var parentTopic = parentTopicInfo(tree, currentTopicId, treeLevel);
      _this.props.ui.selectTopicTree(parentTopic.topic_id, parentTopic.topic_name, -1);
    }, _this.backButton = function () {
      var _toJS3 = (0, _mobx.toJS)(_this.props.ui),
          currentTopicId = _toJS3.currentTopicId,
          currentTopicTitle = _toJS3.currentTopicTitle;

      return _react2.default.createElement('div', { style: { position: 'fixed', zIndex: '100' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, currentTopicId && currentTopicId !== '' && _react2.default.createElement('div', { className: 'breadcrum', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('button', { className: 'btn back-to-parent', onClick: _this.onBack, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement('span', { onClick: _this.onBack, className: 'text-topic current-topic-name', style: { color: '#000' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, currentTopicTitle)));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TopicTree, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.getTopicTree();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = [];

      var _toJS4 = (0, _mobx.toJS)(this.props.store),
          tree = _toJS4.tree;

      var _toJS5 = (0, _mobx.toJS)(this.props.ui),
          currentTopicId = _toJS5.currentTopicId,
          treeLevel = _toJS5.treeLevel;

      _logger2.default.warn('TopicTree render', currentTopicId, treeLevel);

      _lodash2.default.forEach(currentTopicTree(tree, currentTopicId), function (item) {
        /* eslint-disable camelcase */
        var topic_id = item.topic_id,
            title = item.topic_name,
            img = item.img,
            child_topics = item.child_topics;

        var isSelect = _this2.props.ui.selectedTopics.find(function (item) {
          return item.topicId === topic_id;
        });
        items.push(_react2.default.createElement(_TopicItem2.default, {
          key: topic_id,
          topic_id: topic_id,
          isSelect: !!isSelect,
          title: title,
          onChange: _this2.onChange,
          onSelect: _this2.onSelect,
          hasChild: child_topics.length > 0,
          img: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }));
      });
      var animateClassName = treeLevel === 1 ? 'grid-row' : 'grid-row bounceInRight animated';
      return _react2.default.createElement('div', { className: 'topic-tree', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, this.backButton(), _react2.default.createElement('div', { className: 'main-inner', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', { className: 'container-masonry', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { className: animateClassName, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, items))));
    }
  }]);

  return TopicTree;
}(_react.Component)) || _class) || _class) || _class);

exports.default = TopicTree;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/TopicTree/index.js"); } } })();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLy0tLS0tLWNvbXBvbmVudHMtVG9waWNUcmVlLWZhOTQ1NTMwLWMwMzItNDJmZS1iYmM0LTU4MTAyYzYyNWU3Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2hlbHBlci5qcz81ZjlkMWYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9waWNUcmVlL1RvcGljSXRlbS5qcz81ZjlkMWYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9waWNUcmVlL2luZGV4LmpzPzVmOWQxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTUFYX0NPTE9SUyA9IDEyXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdDb2xvciAobmFtZSkge1xuICByZXR1cm4gYHRhZ3MtY29sb3ItJHsobmFtZS5sZW5ndGggJSBNQVhfQ09MT1JTKSArIDF9YFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvaGVscGVyLmpzIiwiLyoqXG4qXG4qIFN0cmVhbUl0ZW1cbipcbiovXG5cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcidcbmltcG9ydCB7IHRhZ0NvbG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuXG5jbGFzcyBUb3BpY0l0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0b3BpY19pZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGFzQ2hpbGQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9waWNfaWQ6IDAsXG4gICAgdGl0bGU6ICcnLFxuICAgIGltZzogJycsXG4gICAgaXNTZWxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoaWxkOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiAoaXNTZWxlY3QsIHRvcGljSWQsIHRpdGxlLCBpbWcpID0+IHt9LFxuICAgIG9uU2VsZWN0OiAoaXNTZWxlY3QsIHRvcGljSWQpID0+IHt9XG4gIH1cblxuICBvbkNoYW5nZSA9IChldnQpID0+IHtcbiAgICBsb2dnZXIud2Fybignb25DaGFuZ2UnLCBldnQpXG4gICAgY29uc3QgeyB0b3BpY19pZDogdG9waWNJZCwgdGl0bGUsIGlzU2VsZWN0LCBpbWcgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCFpc1NlbGVjdCwgdG9waWNJZCwgdGl0bGUsIGltZylcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9nZ2VyLndhcm4oJ2hhbmRsZUNsaWNrJylcbiAgICBjb25zdCB7IGhhc0NoaWxkLCB0b3BpY19pZDogdG9waWNJZCwgdGl0bGUsIGlzU2VsZWN0LCBpbWcgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoaGFzQ2hpbGQpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodG9waWNJZCwgdGl0bGUpXG4gICAgfVxuICAgIGlmICghaXNTZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIWlzU2VsZWN0LCB0b3BpY0lkLCB0aXRsZSwgaW1nKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB0b3BpY19pZCwgdGl0bGUsIGltZywgaXNTZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBsb2dnZXIud2FybignVG9waWNJdGVtJywgdG9waWNfaWQsIHRpdGxlLCBpbWcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXt0b3BpY19pZH0gY2xhc3NOYW1lPSdncmlkLWl0ZW0gc2h1ZmZsZS1pdGVtJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbC1ib3gnPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGh1bWJuYWlsJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWcgfHwgJy9zdGF0aWMvaW1hZ2VzL25vLWltYWdlLnBuZyd9KWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0aHVtYm5haWwtaW1hZ2UnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcHRpb24nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaXgtdGFnJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaXgtdGFnLXRvcGljJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGFncyAke3RhZ0NvbG9yKHRpdGxlKX1gfSByZWw9J3RhZyc+XG4gICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3R9XG4gICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlbGVjdC10b3BpYydcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljSXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ub3BpY1RyZWUvVG9waWNJdGVtLmpzIiwiLyoqXG4qXG4qIFRvcGljVHJlZVxuKlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgeyB0b0pTIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBUb3BpY0l0ZW0gZnJvbSAnLi9Ub3BpY0l0ZW0nXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcidcblxuY29uc3QgcGFyZW50VG9waWNJbmZvID0gKHRyZWUsIHRvcGljSWQsIHRyZWVMZXZlbCkgPT4ge1xuICBpZiAodHJlZUxldmVsIDw9IDIpIHtcbiAgICByZXR1cm4geyB0b3BpY19pZDogJycsIHRvcGljX25hbWU6ICcnIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IHRyZWUubGVuZ3RoOyBjb3VudGVyICs9IDEpIHtcbiAgICAgIGNvbnN0IGZvdW5kVG9waWNUcmVlID0gXy5maW5kKHRyZWVbY291bnRlcl0uY2hpbGRfdG9waWNzLCBpdGVtID0+IGl0ZW0udG9waWNfaWQgPT09IHRvcGljSWQpXG4gICAgICBpZiAoZm91bmRUb3BpY1RyZWUpIHtcbiAgICAgICAgcmV0dXJuIHRyZWVbY291bnRlcl1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgY291bnRlciA9IDA7IGNvdW50ZXIgPCB0cmVlLmxlbmd0aDsgY291bnRlciArPSAxKSB7XG4gICAgICBjb25zdCBmb3VuZENoaWxkID0gcGFyZW50VG9waWNJbmZvKHRyZWVbY291bnRlcl0uY2hpbGRfdG9waWNzLCB0b3BpY0lkLCB0cmVlTGV2ZWwpXG4gICAgICBpZiAoZm91bmRDaGlsZCkge1xuICAgICAgICByZXR1cm4gZm91bmRDaGlsZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjdXJyZW50VG9waWNUcmVlID0gKHRyZWUsIHRvcGljSWQpID0+IHtcbiAgaWYgKHRvcGljSWQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmb3VuZFRyZWUgPSBfLmZpbmQodHJlZSwgaXRlbSA9PiBpdGVtLnRvcGljX2lkID09PSB0b3BpY0lkKVxuICAgIGlmIChmb3VuZFRyZWUpIHtcbiAgICAgIHJldHVybiBmb3VuZFRyZWUuY2hpbGRfdG9waWNzXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgdHJlZS5sZW5ndGg7IGNvdW50ZXIgKz0gMSkge1xuICAgICAgICBjb25zdCB0b3BpYyA9IGN1cnJlbnRUb3BpY1RyZWUodHJlZVtjb3VudGVyXS5jaGlsZF90b3BpY3MsIHRvcGljSWQpXG4gICAgICAgIGlmICh0b3BpYykge1xuICAgICAgICAgIHJldHVybiB0b3BpY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmplY3QoJ3N0b3JlJylcbkBpbmplY3QoJ3VpJylcbkBvYnNlcnZlclxuY2xhc3MgVG9waWNUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUuZ2V0VG9waWNUcmVlKClcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGlzU2VsZWN0LCB0b3BpY0lkLCB0aXRsZSwgaW1nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTZWxlY3RUb3BpYyhpc1NlbGVjdCwgdG9waWNJZCwgdGl0bGUsIGltZylcbiAgfVxuXG4gIG9uU2VsZWN0ID0gKHRvcGljSWQsIHRvcGljTmFtZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudWkuc2VsZWN0VG9waWNUcmVlKHRvcGljSWQsIHRvcGljTmFtZSlcbiAgfVxuXG4gIG9uQmFjayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyZWUgfSA9IHRvSlModGhpcy5wcm9wcy5zdG9yZSlcbiAgICBjb25zdCB7IGN1cnJlbnRUb3BpY0lkLCB0cmVlTGV2ZWwgfSA9IHRvSlModGhpcy5wcm9wcy51aSlcbiAgICBjb25zdCBwYXJlbnRUb3BpYyA9IHBhcmVudFRvcGljSW5mbyh0cmVlLCBjdXJyZW50VG9waWNJZCwgdHJlZUxldmVsKVxuICAgIHRoaXMucHJvcHMudWkuc2VsZWN0VG9waWNUcmVlKHBhcmVudFRvcGljLnRvcGljX2lkLCBwYXJlbnRUb3BpYy50b3BpY19uYW1lLCAtMSlcbiAgfVxuXG4gIGJhY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50VG9waWNJZCwgY3VycmVudFRvcGljVGl0bGUgfSA9IHRvSlModGhpcy5wcm9wcy51aSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6ICcxMDAnIH19PlxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudFRvcGljSWQgJiYgY3VycmVudFRvcGljSWQgIT09ICcnICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyZWFkY3J1bSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJhY2stdG8tcGFyZW50JyBvbkNsaWNrPXt0aGlzLm9uQmFja30+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYW5nbGUtbGVmdCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25CYWNrfSBjbGFzc05hbWU9J3RleHQtdG9waWMgY3VycmVudC10b3BpYy1uYW1lJyBzdHlsZT17e2NvbG9yOiAnIzAwMCd9fT57Y3VycmVudFRvcGljVGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbXVxuICAgIGNvbnN0IHsgdHJlZSB9ID0gdG9KUyh0aGlzLnByb3BzLnN0b3JlKVxuICAgIGNvbnN0IHsgY3VycmVudFRvcGljSWQsIHRyZWVMZXZlbCB9ID0gdG9KUyh0aGlzLnByb3BzLnVpKVxuICAgIGxvZ2dlci53YXJuKCdUb3BpY1RyZWUgcmVuZGVyJywgY3VycmVudFRvcGljSWQsIHRyZWVMZXZlbClcblxuICAgIF8uZm9yRWFjaChjdXJyZW50VG9waWNUcmVlKHRyZWUsIGN1cnJlbnRUb3BpY0lkKSwgKGl0ZW0pID0+IHtcbiAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgIGNvbnN0IHsgdG9waWNfaWQsIHRvcGljX25hbWU6IHRpdGxlLCBpbWcsIGNoaWxkX3RvcGljcyB9ID0gaXRlbVxuICAgICAgY29uc3QgaXNTZWxlY3QgPSB0aGlzLnByb3BzLnVpLnNlbGVjdGVkVG9waWNzLmZpbmQoaXRlbSA9PiBpdGVtLnRvcGljSWQgPT09IHRvcGljX2lkKVxuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPFRvcGljSXRlbVxuICAgICAgICAgIGtleT17dG9waWNfaWR9XG4gICAgICAgICAgdG9waWNfaWQ9e3RvcGljX2lkfVxuICAgICAgICAgIGlzU2VsZWN0PXshIWlzU2VsZWN0fVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICBoYXNDaGlsZD17Y2hpbGRfdG9waWNzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgaW1nPXtpbWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgY29uc3QgYW5pbWF0ZUNsYXNzTmFtZSA9IHRyZWVMZXZlbCA9PT0gMSA/ICdncmlkLXJvdycgOiAnZ3JpZC1yb3cgYm91bmNlSW5SaWdodCBhbmltYXRlZCdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcGljLXRyZWUnPlxuICAgICAgICB7dGhpcy5iYWNrQnV0dG9uKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWlubmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLW1hc29ucnknPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FuaW1hdGVDbGFzc05hbWV9PlxuICAgICAgICAgICAgICB7aXRlbXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9waWNUcmVlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RvcGljVHJlZS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQVZBOzs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUdBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUlBO0FBR0E7QUFIQTtBQUlBO0FBQUE7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBVUE7QUFWQTtBQUNBOzs7OztBQXBFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFtRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBWkE7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFrQkE7QUFDQTtBQUVBO0FBRkE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFvQkE7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7OztBQWxDQTtBQUFBOzs7O0FBb0NBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVdBO0FBWEE7QUFDQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BOzs7OztBQTFFQTtBQUNBO0FBNEVBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
          })
        