'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _nealReact = require('neal-react');

var _reactResizeDetector = require('react-resize-detector');

var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

var _reactStickyEl = require('react-sticky-el');

var _reactStickyEl2 = _interopRequireDefault(_reactStickyEl);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _StreamItem = require('./StreamItem');

var _StreamItem2 = _interopRequireDefault(_StreamItem);

var _InlinePreview = require('./InlinePreview');

var _InlinePreview2 = _interopRequireDefault(_InlinePreview);

var _SplitView = require('../../components/SplitView');

var _SplitView2 = _interopRequireDefault(_SplitView);

var _GridView = require('../../components/GridView');

var _GridView2 = _interopRequireDefault(_GridView);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _FilterSearch = require('../../components/FilterSearch');

var _FilterSearch2 = _interopRequireDefault(_FilterSearch);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Streams/index.js',
    _dec,
    _dec2,
    _class;

/**
*
* Streams
*
*/

var LIMIT = 10;

function urlOwner(owners, users, onSelectUser) {
  var items = [];
  _lodash2.default.forEach(owners, function (user) {
    var hitUtc = user.hit_utc,
        userId = user.owner;

    var owner = users.find(function (item) {
      return item.user_id === userId;
    });
    items.push(_react2.default.createElement('div', { key: owner.fullname + '-' + hitUtc, className: 'panel-user-img', __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, _react2.default.createElement('a', { onClick: function onClick() {
        onSelectUser(owner);
      }, className: 'credit-user', title: owner.fullname + ' visited ' + _moment2.default.utc(hitUtc).fromNow(), __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, _react2.default.createElement('img', { onError: function onError(ev) {
        ev.target.src = '/static/images/no-image.png';
      }, src: owner.avatar || '/static/images/no-avatar.png', width: '40', height: '40', alt: owner.fullname, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }))));
  });
  return _react2.default.createElement('div', { className: 'panel-user', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, items);
}

function urlTopic(urlId, topics, onSelectTopic, myUrlIds, onShareTopic) {
  var currentTopics = topics.filter(function (item) {
    return item.urlIds && item.urlIds.indexOf(urlId) !== -1;
  });
  var items = [];
  var isOwner = myUrlIds.indexOf(urlId) !== -1;
  var maxLevel = _lodash2.default.maxBy(currentTopics, 'level');
  _lodash2.default.forEach(currentTopics.filter(function (item) {
    return item.level === maxLevel.level;
  }), function (topic) {
    items.push(_react2.default.createElement('div', { className: 'mix-tag-topic', key: urlId + '-' + topic.name, __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }, _react2.default.createElement('span', { className: 'tags ' + (0, _helper.tagColor)(topic.name), rel: 'tag', __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, _react2.default.createElement('span', { onClick: function onClick() {
        onSelectTopic(topic);
      }, className: 'text-tag', __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, topic.name), isOwner && _react2.default.createElement('span', { onClick: function onClick() {
        onShareTopic(topic);
      }, className: 'share-topic-ex', __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, _react2.default.createElement('img', { src: '/static/images/logo.png', width: '25', height: '25', alt: 'share firstLevelTopics', __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    })))));
  });
  return _react2.default.createElement('div', { className: 'mix-tag', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, items);
}

function filterbyRating(item, owners, userIds, rating) {
  var users = owners.filter(function (user) {
    return user.url_id === item.url_id;
  });
  if (userIds.length) {
    return !!users.find(function (user) {
      return userIds.indexOf(user.owner) !== -1 && user.rate >= rating;
    });
  }
  return !!users.find(function (user) {
    return user.rate >= rating;
  });
}

function orderBy(result, owners, sortBy, sortDirection) {
  if (sortBy === 'date') {
    var sortResult = _lodash2.default.sortBy(result, function (url) {
      var users = owners.filter(function (item) {
        return item.url_id === url.url_id;
      });
      return _lodash2.default.max(users.map(function (item) {
        return item.hit_utc;
      }));
    });
    return sortDirection === 'desc' ? _lodash2.default.reverse(sortResult) : sortResult;
  } else {
    var _sortResult = _lodash2.default.sortBy(result, function (url) {
      var users = owners.filter(function (item) {
        return item.url_id === url.url_id;
      });
      return _lodash2.default.max(users.map(function (item) {
        return item.rate;
      }));
    });
    return sortDirection === 'desc' ? _lodash2.default.reverse(_sortResult) : _sortResult;
  }
}

function filterUrls(urls, owners, filterByTopic, filterByUser, rating, sortBy, sortDirection) {
  var firstLevelTopics = (0, _mobx.toJS)(filterByTopic);
  var users = (0, _mobx.toJS)(filterByUser);
  if (firstLevelTopics.length > 0 || users.length > 0) {
    var topicUrlIds = _lodash2.default.flatMap(firstLevelTopics, function (item) {
      return item.value;
    });
    var userUrlIds = _lodash2.default.flatMap(users, function (item) {
      return item.value;
    });
    var userIds = _lodash2.default.flatMap(users, function (item) {
      return item.user_id;
    });
    var foundIds = [];
    if (topicUrlIds.length && userUrlIds.length) {
      foundIds = _lodash2.default.intersection(topicUrlIds, userUrlIds);
    } else {
      if (topicUrlIds.length) {
        foundIds = topicUrlIds;
      } else {
        foundIds = userUrlIds;
      }
    }
    var _result = urls.filter(function (item) {
      return foundIds.indexOf(item.url_id) !== -1 && filterbyRating(item, owners, userIds, rating);
    });
    return orderBy(_result, owners, sortBy, sortDirection);
  }
  var result = urls.filter(function (item) {
    return filterbyRating(item, owners, [], rating);
  });
  return orderBy(result, owners, sortBy, sortDirection);
}

function parseDomain(link) {
  /* global URL */
  var url = new URL(link);
  return url.hostname;
}

var Streams = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Streams, _React$Component);

  function Streams() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Streams);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Streams.__proto__ || (0, _getPrototypeOf2.default)(Streams)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentUrl: '',
      innerWidth: window.innerWidth,
      currentWidth: window.innerWidth / 2,
      isResize: false
    }, _this.hasMoreItem = function () {
      return _this.props.ui.page * LIMIT < _this.sortedUrls.length;
    }, _this.loadMore = function () {
      _logger2.default.warn('loadMore');
      _this.props.ui.page += 1;
    }, _this.onPreview = function (url) {
      _logger2.default.warn('onPreview', url);
      var isMobile = _this.props.store.isMobile;

      if (!isMobile) {
        _this.setState({ currentUrl: url });
      } else {
        window.open(url, '_blank');
      }
    }, _this.closePreview = function () {
      _logger2.default.warn('closePreview');
      _this.setState({ currentUrl: '' });
    }, _this.onResizeStart = function () {
      _this.setState({ isResize: true });
    }, _this.onResizeStop = function (width) {
      _this.setState({ currentWidth: width, isResize: false });
    }, _this.onZoomLayout = function () {
      var innerWidth = _this.state.innerWidth;

      if (innerWidth !== window.innerWidth) {
        _logger2.default.warn('onZoomLayout');
        _this.setState({
          currentWidth: window.innerWidth / 2,
          innerWidth: window.innerWidth
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Streams, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // populate urls and users
      var _toJS = (0, _mobx.toJS)(this.props.store),
          urls = _toJS.urls,
          users = _toJS.users,
          topics = _toJS.topics,
          owners = _toJS.owners,
          isInstall = _toJS.isInstall;

      var _toJS2 = (0, _mobx.toJS)(this.props.store.myStream),
          myUrls = _toJS2.urls;

      _logger2.default.warn('Streams render', urls, users, topics, owners, myUrls);
      if (urls && urls.length === 0) {
        return _react2.default.createElement(_nealReact.Section, { className: 'section-empty-list', style: { backgroundColor: '#fff' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, isInstall && _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, 'Congratulations for installing ', _react2.default.createElement('img', { src: '/static/images/maomao.png', className: 'maomao-img', alt: 'maomao', __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }), ' !'), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, 'Now you can start browsing and sharing with your friends. Come back here after you\u2019ve shared with your friends.'));
      }
      var items = [];
      // TODO: support sort by time or score
      var _props$ui = this.props.ui,
          filterByTopic = _props$ui.filterByTopic,
          filterByUser = _props$ui.filterByUser,
          rating = _props$ui.rating,
          sortBy = _props$ui.sortBy,
          sortDirection = _props$ui.sortDirection;

      this.sortedUrls = filterUrls(urls, owners, filterByTopic, filterByUser, rating, sortBy, sortDirection);
      /* eslint-disable camelcase */
      var currentUrls = this.sortedUrls.slice(0, (this.props.ui.page + 1) * LIMIT);
      var myUrlIds = myUrls ? myUrls && myUrls.map(function (item) {
        return item.url_id;
      }) : [];
      _logger2.default.warn('currentUrls', currentUrls);
      var _state = this.state,
          currentUrl = _state.currentUrl,
          currentWidth = _state.currentWidth,
          isResize = _state.isResize;

      if (currentUrls && currentUrls.length) {
        _lodash2.default.forEach(currentUrls, function (item) {
          var url_id = item.url_id,
              href = item.href,
              img = item.img,
              title = item.title;

          if (currentUrl !== href) {
            var discoveryKeys = [];
            var suggestionKeys = [];
            var currentTopics = topics.filter(function (item) {
              return item.urlIds && item.urlIds.indexOf(url_id) !== -1;
            });
            var maxLevel = _lodash2.default.maxBy(currentTopics, 'level');
            var deepestTopics = currentTopics.filter(function (item) {
              return item.level === maxLevel.level;
            });
            discoveryKeys = discoveryKeys.concat(_lodash2.default.map(deepestTopics, 'name'));
            if (deepestTopics.length) {
              deepestTopics.forEach(function (item) {
                suggestionKeys.push.apply(suggestionKeys, (0, _toConsumableArray3.default)(_lodash2.default.map(item.suggestions.slice(0, 5), 'term_name')));
              });
            }
            items.push(_react2.default.createElement(_StreamItem2.default, {
              key: href,
              href: href,
              img: img,
              title: title,
              url_id: url_id,
              topics: topics,
              users: users,
              deepestTopics: deepestTopics,
              discoveryKeys: discoveryKeys,
              suggestionKeys: suggestionKeys,
              owners: owners,
              myUrlIds: myUrlIds,
              urlTopic: urlTopic,
              urlOwner: urlOwner,
              parseDomain: parseDomain,
              onPreview: _this2.onPreview,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 219
              }
            }));
          }
        });
      }

      return _react2.default.createElement('div', { className: 'streams', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, handleHeight: true, onResize: this.onZoomLayout, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }), _react2.default.createElement('div', { className: 'standand-sort', __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_FilterSearch2.default, { sortedUrls: this.sortedUrls, owners: owners, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      })), _react2.default.createElement('div', { className: currentUrl ? 'sticky-view' : 'hidden-view', __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement(_reactStickyEl2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement(_SplitView2.default, { onResizeStart: this.onResizeStart, onResizeStop: this.onResizeStop, __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, function (width, height) {
        return _react2.default.createElement(_InlinePreview2.default, {
          width: currentWidth,
          height: height,
          url: currentUrl,
          closePreview: _this2.closePreview,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        });
      }))), !isResize && _react2.default.createElement('div', { className: currentUrl ? 'split-view' : '', style: { width: currentUrl ? window.innerWidth - currentWidth - 30 : '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement(_reactInfiniteScroller2.default, {
        pageStart: this.props.ui.page,
        loadMore: this.loadMore,
        hasMore: this.hasMoreItem(),
        loader: _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, _react2.default.createElement(_GridView2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, items))));
    }
  }]);

  return Streams;
}(_react2.default.Component)) || _class) || _class) || _class);

exports.default = Streams;