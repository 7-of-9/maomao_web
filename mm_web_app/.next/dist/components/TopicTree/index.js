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

var _mobx = require('mobx');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _TopicItem = require('./TopicItem');

var _TopicItem2 = _interopRequireDefault(_TopicItem);

var _logger = require('../../utils/logger');

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