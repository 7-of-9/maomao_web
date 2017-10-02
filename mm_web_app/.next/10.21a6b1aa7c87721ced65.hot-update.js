webpackHotUpdate(10,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuMjFhNmIxYWE3Yzg3NzIxY2VkNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9waWNUcmVlL2luZGV4LmpzPzVmOWQxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qXG4qIFRvcGljVHJlZVxuKlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgeyB0b0pTIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBUb3BpY0l0ZW0gZnJvbSAnLi9Ub3BpY0l0ZW0nXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcidcblxuY29uc3QgcGFyZW50VG9waWNJbmZvID0gKHRyZWUsIHRvcGljSWQsIHRyZWVMZXZlbCkgPT4ge1xuICBpZiAodHJlZUxldmVsIDw9IDIpIHtcbiAgICByZXR1cm4geyB0b3BpY19pZDogJycsIHRvcGljX25hbWU6ICcnIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IHRyZWUubGVuZ3RoOyBjb3VudGVyICs9IDEpIHtcbiAgICAgIGNvbnN0IGZvdW5kVG9waWNUcmVlID0gXy5maW5kKHRyZWVbY291bnRlcl0uY2hpbGRfdG9waWNzLCBpdGVtID0+IGl0ZW0udG9waWNfaWQgPT09IHRvcGljSWQpXG4gICAgICBpZiAoZm91bmRUb3BpY1RyZWUpIHtcbiAgICAgICAgcmV0dXJuIHRyZWVbY291bnRlcl1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgY291bnRlciA9IDA7IGNvdW50ZXIgPCB0cmVlLmxlbmd0aDsgY291bnRlciArPSAxKSB7XG4gICAgICBjb25zdCBmb3VuZENoaWxkID0gcGFyZW50VG9waWNJbmZvKHRyZWVbY291bnRlcl0uY2hpbGRfdG9waWNzLCB0b3BpY0lkLCB0cmVlTGV2ZWwpXG4gICAgICBpZiAoZm91bmRDaGlsZCkge1xuICAgICAgICByZXR1cm4gZm91bmRDaGlsZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjdXJyZW50VG9waWNUcmVlID0gKHRyZWUsIHRvcGljSWQpID0+IHtcbiAgaWYgKHRvcGljSWQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmb3VuZFRyZWUgPSBfLmZpbmQodHJlZSwgaXRlbSA9PiBpdGVtLnRvcGljX2lkID09PSB0b3BpY0lkKVxuICAgIGlmIChmb3VuZFRyZWUpIHtcbiAgICAgIHJldHVybiBmb3VuZFRyZWUuY2hpbGRfdG9waWNzXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgdHJlZS5sZW5ndGg7IGNvdW50ZXIgKz0gMSkge1xuICAgICAgICBjb25zdCB0b3BpYyA9IGN1cnJlbnRUb3BpY1RyZWUodHJlZVtjb3VudGVyXS5jaGlsZF90b3BpY3MsIHRvcGljSWQpXG4gICAgICAgIGlmICh0b3BpYykge1xuICAgICAgICAgIHJldHVybiB0b3BpY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmplY3QoJ3N0b3JlJylcbkBpbmplY3QoJ3VpJylcbkBvYnNlcnZlclxuY2xhc3MgVG9waWNUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUuZ2V0VG9waWNUcmVlKClcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGlzU2VsZWN0LCB0b3BpY0lkLCB0aXRsZSwgaW1nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTZWxlY3RUb3BpYyhpc1NlbGVjdCwgdG9waWNJZCwgdGl0bGUsIGltZylcbiAgfVxuXG4gIG9uU2VsZWN0ID0gKHRvcGljSWQsIHRvcGljTmFtZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudWkuc2VsZWN0VG9waWNUcmVlKHRvcGljSWQsIHRvcGljTmFtZSlcbiAgfVxuXG4gIG9uQmFjayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyZWUgfSA9IHRvSlModGhpcy5wcm9wcy5zdG9yZSlcbiAgICBjb25zdCB7IGN1cnJlbnRUb3BpY0lkLCB0cmVlTGV2ZWwgfSA9IHRvSlModGhpcy5wcm9wcy51aSlcbiAgICBjb25zdCBwYXJlbnRUb3BpYyA9IHBhcmVudFRvcGljSW5mbyh0cmVlLCBjdXJyZW50VG9waWNJZCwgdHJlZUxldmVsKVxuICAgIHRoaXMucHJvcHMudWkuc2VsZWN0VG9waWNUcmVlKHBhcmVudFRvcGljLnRvcGljX2lkLCBwYXJlbnRUb3BpYy50b3BpY19uYW1lLCAtMSlcbiAgfVxuXG4gIGJhY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50VG9waWNJZCwgY3VycmVudFRvcGljVGl0bGUgfSA9IHRvSlModGhpcy5wcm9wcy51aSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6ICcxMDAnIH19PlxuICAgICAgICB7XG4gICAgICAgICAgY3VycmVudFRvcGljSWQgJiYgY3VycmVudFRvcGljSWQgIT09ICcnICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyZWFkY3J1bSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJhY2stdG8tcGFyZW50JyBvbkNsaWNrPXt0aGlzLm9uQmFja30+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYW5nbGUtbGVmdCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub25CYWNrfSBjbGFzc05hbWU9J3RleHQtdG9waWMgY3VycmVudC10b3BpYy1uYW1lJyBzdHlsZT17e2NvbG9yOiAnIzAwMCd9fT57Y3VycmVudFRvcGljVGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbXVxuICAgIGNvbnN0IHsgdHJlZSB9ID0gdG9KUyh0aGlzLnByb3BzLnN0b3JlKVxuICAgIGNvbnN0IHsgY3VycmVudFRvcGljSWQsIHRyZWVMZXZlbCB9ID0gdG9KUyh0aGlzLnByb3BzLnVpKVxuICAgIGxvZ2dlci53YXJuKCdUb3BpY1RyZWUgcmVuZGVyJywgY3VycmVudFRvcGljSWQsIHRyZWVMZXZlbClcblxuICAgIF8uZm9yRWFjaChjdXJyZW50VG9waWNUcmVlKHRyZWUsIGN1cnJlbnRUb3BpY0lkKSwgKGl0ZW0pID0+IHtcbiAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgIGNvbnN0IHsgdG9waWNfaWQsIHRvcGljX25hbWU6IHRpdGxlLCBpbWcsIGNoaWxkX3RvcGljcyB9ID0gaXRlbVxuICAgICAgY29uc3QgaXNTZWxlY3QgPSB0aGlzLnByb3BzLnVpLnNlbGVjdGVkVG9waWNzLmZpbmQoaXRlbSA9PiBpdGVtLnRvcGljSWQgPT09IHRvcGljX2lkKVxuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPFRvcGljSXRlbVxuICAgICAgICAgIGtleT17dG9waWNfaWR9XG4gICAgICAgICAgdG9waWNfaWQ9e3RvcGljX2lkfVxuICAgICAgICAgIGlzU2VsZWN0PXshIWlzU2VsZWN0fVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICBoYXNDaGlsZD17Y2hpbGRfdG9waWNzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgaW1nPXtpbWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgY29uc3QgYW5pbWF0ZUNsYXNzTmFtZSA9IHRyZWVMZXZlbCA9PT0gMSA/ICdncmlkLXJvdycgOiAnZ3JpZC1yb3cgYm91bmNlSW5SaWdodCBhbmltYXRlZCdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcGljLXRyZWUnPlxuICAgICAgICB7dGhpcy5iYWNrQnV0dG9uKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWlubmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLW1hc29ucnknPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FuaW1hdGVDbGFzc05hbWV9PlxuICAgICAgICAgICAgICB7aXRlbXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9waWNUcmVlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RvcGljVHJlZS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFaQTs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQWtCQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7O0FBbENBO0FBQUE7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7QUFYQTtBQUNBO0FBV0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBT0E7Ozs7O0FBMUVBO0FBQ0E7QUE0RUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==