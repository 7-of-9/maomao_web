'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeStore = undefined;
exports.initStore = initStore;

var _defineProperty = require('next/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('next/node_modules/babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _mobx = require('mobx');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _core = require('./core');

var _history = require('./schema/history');

var _user = require('../services/user');

var _google = require('../services/google');

var _topic = require('../services/topic');

var _chrome = require('../utils/chrome');

var _hash = require('../utils/hash');

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;

  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var store = null;

var calcRate = function calcRate(score, timeOnTab) {
  var scoreUnit = parseInt(score / 30);
  var timeUnit = parseInt(timeOnTab / (30 * 1000)); // 30 seconds
  var rate = Math.ceil(((scoreUnit > 5 ? 5 : scoreUnit) + (timeUnit > 5 ? 5 : timeUnit)) / 2);
  return rate < 1 ? 1 : rate;
};

function flattenTopics(topics) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var result = [];
  topics.forEach(function (item) {
    result.push({ level: counter, id: item.term_id, name: item.term_name, urlIds: item.url_ids, suggestions: item.suggestions });
    if (item.child_topics && item.child_topics.length) {
      result.push.apply(result, (0, _toConsumableArray3.default)(flattenTopics(item.child_topics, counter + 1)));
    }
  });
  return result;
}

var HomeStore = exports.HomeStore = (_class = function (_CoreStore) {
  (0, _inherits3.default)(HomeStore, _CoreStore);

  function HomeStore(isServer, userAgent, user) {
    (0, _classCallCheck3.default)(this, HomeStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomeStore.__proto__ || (0, _getPrototypeOf2.default)(HomeStore)).call(this, isServer, userAgent, user));

    _initDefineProp(_this, 'isProcessingRegister', _descriptor, _this);

    _initDefineProp(_this, 'isProcessingTopicTree', _descriptor2, _this);

    _initDefineProp(_this, 'isProcessingHistory', _descriptor3, _this);

    _initDefineProp(_this, 'codes', _descriptor4, _this);

    _this.normalizedData = { entities: {}, result: {} };
    _this.tree = [];
    _this.users = [];
    _this.topics = [];
    _this.firstLevelTopics = [];
    _this.urls = [];
    _this.owners = [];
    _this.googleUser = {};
    _this.facebookUser = {};
    _this.userHistory = { mine: {}, received: [], topics: [] };

    (0, _mobx.reaction)(function () {
      return _this.userHash.length;
    }, function (userHash) {
      if (userHash > 0) {
        _this.getUserHistory();
      }
    });
    return _this;
  }

  (0, _createClass3.default)(HomeStore, [{
    key: 'saveTopics',
    value: function saveTopics(ids) {
      var saveTopicRequest = (0, _topic.addBulkTopics)(this.userId, this.userHash, ids);
      (0, _mobx.when)(function () {
        return saveTopicRequest.state !== 'pending';
      }, function () {
        _logger2.default.warn('saveTopics result', saveTopicRequest.data);
      });
    }
  }, {
    key: 'internalLogin',
    value: function internalLogin(callback) {
      var _this2 = this;

      _logger2.default.warn('internalLogin');
      var registerNewUser = (0, _user.testInternalUser)();
      this.isProcessingRegister = true;
      (0, _mobx.when)(function () {
        return registerNewUser.state !== 'pending';
      }, function () {
        _this2.isProcessingRegister = false;
        var data = registerNewUser.value.data;

        var userHash = (0, _hash.md5hash)(data.id);
        _this2.isLogin = true;
        _this2.userId = data.id;
        _this2.userHash = userHash;
        _this2.user = (0, _extends3.default)({}, data, { name: data.firstname + ' ' + data.lastname, picture: 'http://maomaoweb.azurewebsites.net/static/images/no-avatar.png'
          // send data to chrome extension
        });if (_this2.isInstalledOnChromeDesktop) {
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_HASH', { userHash: data.id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('AUTH_FULFILLED', {
            info: (0, _extends3.default)({}, data, { name: data.firstname + ' ' + data.lastname, picture: 'http://maomaoweb.azurewebsites.net/static/images/no-avatar.png' })
          }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_AFTER_LOGIN', { userId: data.id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('PRELOAD_SHARE_ALL', { userId: data.id }));
        }
        _this2.login(_this2.userId, _this2.userHash);
        callback((0, _assign2.default)({}, _this2.user, { userHash: userHash }));
        _this2.getUserHistory();
      });
    }
  }, {
    key: 'retrylLoginForInternalUser',
    value: function retrylLoginForInternalUser(user) {
      _logger2.default.warn('retrylLoginForInternalUser', user);
      var id = user.id,
          userHash = user.userHash;

      this.isLogin = true;
      this.userId = id;
      this.userHash = userHash;
      this.user = user;
      if (this.isInstalledOnChromeDesktop) {
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_HASH', { userHash: id }));
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('AUTH_FULFILLED', {
          info: user
        }));
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_AFTER_LOGIN', { userId: id }));
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('PRELOAD_SHARE_ALL', { userId: id }));
      }
      this.login(this.userId, this.userHash);
      this.getUserHistory();
    }
  }, {
    key: 'googleConnect',
    value: function googleConnect(info, callback) {
      var _this3 = this;

      _logger2.default.warn('googleConnect', info);
      var googleConnectResult = (0, _user.loginWithGoogle)(info);
      this.isProcessingRegister = true;
      (0, _mobx.when)(function () {
        return googleConnectResult.state !== 'pending';
      }, function () {
        _this3.isProcessingRegister = false;
        var data = googleConnectResult.value.data;

        var userHash = (0, _hash.md5hash)(info.google_user_id);
        _this3.isLogin = true;
        _this3.userId = data.id;
        _this3.userHash = userHash;
        _this3.googleUser = (0, _assign2.default)({}, data, { userHash: userHash }, info);
        _this3.user = {
          name: info.name,
          email: info.email || data.email,
          picture: info.picture
          // send data to chrome extension
        };if (_this3.isInstalledOnChromeDesktop) {
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_HASH', { userHash: info.google_user_id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('AUTH_FULFILLED', {
            googleUserId: info.google_user_id,
            googleToken: info.accessToken,
            info: {
              name: info.name,
              email: info.email || data.email,
              picture: info.picture
            }
          }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_AFTER_LOGIN', { userId: data.id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('PRELOAD_SHARE_ALL', { userId: data.id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('FETCH_CONTACTS', {}));
        }
        _this3.login(_this3.userId, _this3.userHash);
        _this3.getUserHistory();
        callback && callback();
      });
    }
  }, {
    key: 'facebookConnect',
    value: function facebookConnect(info, callback) {
      var _this4 = this;

      _logger2.default.warn('facebookConnect', info);
      var facebookConnectResult = (0, _user.loginWithFacebook)(info);
      this.isProcessingRegister = true;
      (0, _mobx.when)(function () {
        return facebookConnectResult.state !== 'pending';
      }, function () {
        _this4.isProcessingRegister = false;
        var data = facebookConnectResult.value.data;

        var userHash = (0, _hash.md5hash)(info.fb_user_id);
        _this4.userId = data.id;
        _this4.userHash = userHash;
        _this4.isLogin = true;
        _this4.facebookUser = (0, _assign2.default)({}, data, { userHash: userHash }, info);
        _this4.user = {
          name: info.name,
          email: info.email || data.email,
          picture: info.picture
          // send data to chrome extension
        };if (_this4.isInstalledOnChromeDesktop) {
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_HASH', { userHash: info.fb_user_id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('AUTH_FULFILLED', {
            facebookUserId: info.fb_user_id,
            facebookToken: info.accessToken,
            info: {
              name: info.name,
              email: info.email || data.email,
              picture: info.picture
            }
          }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('USER_AFTER_LOGIN', { userId: data.id }));
          (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('PRELOAD_SHARE_ALL', { userId: data.id }));
        }
        _this4.login(_this4.userId, _this4.userHash);
        _this4.getUserHistory();
        callback && callback();
      });
    }
  }, {
    key: 'getTopicTree',
    value: function getTopicTree() {
      var _this5 = this;

      _logger2.default.warn('getTopicTree');
      if (!this.isProcessingTopicTree) {
        var allTopics = (0, _topic.getAllTopicTree)();
        this.isProcessingTopicTree = true;
        (0, _mobx.when)(function () {
          return allTopics.state !== 'pending';
        }, function () {
          _this5.isProcessingTopicTree = false;
          _this5.tree = allTopics.value.data.tree || [];
          _logger2.default.warn('getTopicTree', _this5.tree);
        });
      }
    }
  }, {
    key: 'getUserHistory',
    value: function getUserHistory() {
      var _this6 = this;

      _logger2.default.warn('getUserHistory');
      if (!this.isProcessingHistory) {
        this.isProcessingHistory = true;
        var userHistoryResult = (0, _user.getUserHistory)(this.userId, this.userHash);
        (0, _mobx.when)(function () {
          return userHistoryResult.state !== 'pending';
        }, function () {
          if (userHistoryResult.state === 'fulfilled') {
            _this6.userHistory = userHistoryResult.value.data;
            var normalizedData = (0, _history.normalizedHistoryData)((0, _mobx.toJS)(_this6.userHistory));
            _logger2.default.warn('normalizedData', normalizedData);
            _this6.normalizedData = normalizedData;

            var _userHistory = _this6.userHistory,
                received = _userHistory.received,
                mine = _userHistory.mine,
                topics = _userHistory.topics;

            var friends = (0, _mobx.toJS)(received);

            var _toJS = (0, _mobx.toJS)(mine),
                myUrls = _toJS.urls,
                user_id = _toJS.user_id,
                fullname = _toJS.fullname,
                avatar = _toJS.avatar;

            var urls = [];
            var users = [];
            var owners = [];
            if (myUrls && myUrls.length) {
              urls.push.apply(urls, (0, _toConsumableArray3.default)(myUrls.map(function (item) {
                return {
                  url_id: item.url_id,
                  title: item.title,
                  href: item.href,
                  img: item.img
                };
              })));
              myUrls.forEach(function (item) {
                owners.push({
                  owner: user_id,
                  url_id: item.url_id,
                  hit_utc: item.hit_utc,
                  im_score: item.im_score,
                  time_on_tab: item.time_on_tab,
                  rate: calcRate(item.im_score, item.time_on_tab)
                });
              });
              users.push({ user_id: user_id, fullname: fullname, avatar: avatar, urlIds: myUrls.map(function (item) {
                  return item.url_id;
                }) });
            }

            _lodash2.default.forEach(friends, function (friend) {
              var user_id = friend.user_id,
                  fullname = friend.fullname,
                  avatar = friend.avatar,
                  list = friend.shares;

              var urlIds = [];
              _lodash2.default.forEach(list, function (item) {
                urls.push.apply(urls, (0, _toConsumableArray3.default)(item.urls.map(function (item) {
                  return {
                    url_id: item.url_id,
                    title: item.title,
                    href: item.href,
                    img: item.img
                  };
                })));
                item.urls.forEach(function (item) {
                  owners.push({
                    owner: user_id,
                    url_id: item.url_id,
                    hit_utc: item.hit_utc,
                    im_score: item.im_score,
                    time_on_tab: item.time_on_tab,
                    rate: calcRate(item.im_score, item.time_on_tab)
                  });
                });
                urlIds.push.apply(urlIds, (0, _toConsumableArray3.default)(item.urls.map(function (item) {
                  return item.url_id;
                })));
              });
              users.push({ user_id: user_id, fullname: fullname, avatar: avatar, urlIds: urlIds });
            });
            _this6.urls = _lodash2.default.uniqBy(urls, 'url_id');
            _this6.topics = flattenTopics(topics);
            _this6.firstLevelTopics = topics.map(function (item) {
              return { id: item.term_id, name: item.term_name, urlIds: item.url_ids, suggestions: item.suggestions };
            });
            _this6.users = users;
            _this6.owners = _lodash2.default.uniqBy(owners, function (item) {
              return item.owner + '-' + item.url_id;
            });
            _logger2.default.warn('findAllUrlsAndTopics urls, users, topics', _this6.urls, _this6.users, _this6.topics, _this6.owners);
          }
          _this6.checkSafeUrls();
        });
      }
    }
  }, {
    key: 'checkSafeUrls',
    value: function checkSafeUrls() {
      var _this7 = this;

      _logger2.default.warn('safeBrowsingLoockup', this.urls);
      var urls = (0, _mobx.toJS)(this.urls);
      var MAX_ITEM = 500;
      var totalPage = urls.length / MAX_ITEM;
      if (urls.length === 0) {
        this.isProcessingHistory = false;
      }

      var _loop = function _loop(counter) {
        var safeCheckResult = (0, _google.safeBrowsingLoockup)(urls.slice(counter * MAX_ITEM, MAX_ITEM * (counter + 1)).map(function (item) {
          return item.href;
        }));
        (0, _mobx.when)(function () {
          return safeCheckResult.state !== 'pending';
        }, function () {
          if (safeCheckResult.state === 'fulfilled') {
            var matches = safeCheckResult.value.data.matches;

            if (matches) {
              var ingoreUrls = matches.map(function (item) {
                return item && item.threat && item.threat.url;
              });
              _logger2.default.warn('safeBrowsingLoockup ingoreUrls', ingoreUrls);
              _this7.urls = urls.filter(function (item) {
                return ingoreUrls.indexOf(item.href) === -1;
              });
            }
          }
          _this7.isProcessingHistory = false;
        });
      };

      for (var counter = 0; counter < totalPage; counter += 1) {
        _loop(counter);
      }
    }
  }, {
    key: 'findUserRating',
    value: function findUserRating(item, userIds) {
      _logger2.default.warn('findUserRating');
      if (userIds.length) {
        var owner = item.owners.find(function (item) {
          return userIds.indexOf(item.owner) !== -1;
        });
        return owner.rate;
      }
      return item.owners[0].rate;
    }
  }, {
    key: 'filterUrls',
    value: function filterUrls(filterByTopic, filterByUser, rating) {
      var _this8 = this;

      _logger2.default.warn('filterUrls');
      var topics = (0, _mobx.toJS)(filterByTopic);
      var users = (0, _mobx.toJS)(filterByUser);
      if (topics.length > 0 || users.length > 0) {
        var topicUrlIds = _lodash2.default.map(topics, function (item) {
          return item.value;
        });
        var userUrlIds = _lodash2.default.map(users, function (item) {
          return item.value;
        });
        var userIds = _lodash2.default.map(users, function (item) {
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
        var _result = this.urls.filter(function (item) {
          return foundIds.indexOf(item.id) !== -1 && _this8.findUserRating(item, userIds) >= rating;
        });
        return _result;
      }
      var result = this.urls.filter(function (item) {
        return item.owners[0].rate >= rating;
      });
      return result;
    }
  }, {
    key: 'sortByOrdering',
    value: function sortByOrdering(sortedUrls, sortBy, sortDirection) {
      _logger2.default.warn('sortByOrdering');
      if (sortBy === 'date') {
        return sortDirection === 'desc' ? _lodash2.default.reverse(_lodash2.default.sortBy(sortedUrls, [function (url) {
          return _lodash2.default.max(url.owners[0].hit_utc);
        }])) : _lodash2.default.sortBy(sortedUrls, [function (url) {
          return url.owners[0].hit_utc;
        }]);
      } else {
        return sortDirection === 'desc' ? _lodash2.default.reverse(_lodash2.default.sortBy(sortedUrls, [function (url) {
          return url.owners[0].rate;
        }])) : _lodash2.default.sortBy(sortedUrls, [function (url) {
          return url.owners[0].rate;
        }]);
      }
    }
  }, {
    key: 'saveShareCode',
    value: function saveShareCode(type, code) {
      switch (type) {
        case 'all':
          this.codes.all = code;
          if (this.isInstall) {
            (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('SHARE_ALL_SUCCESS', code));
          }
          break;
        case 'site':
          this.codes.sites.push(code);
          if (this.isInstall) {
            (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('SHARE_URL_SUCCESS', code));
          }
          break;
        case 'topic':
          this.codes.topics.push(code);
          if (this.isInstall) {
            (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('SHARE_TOPIC_SUCCESS', code));
          }
          break;
        default:
      }
    }
  }, {
    key: 'isProcessing',
    get: function get() {
      return this.isProcessingRegister || this.isProcessingHistory || this.isProcessingTopicTree;
    }
  }, {
    key: 'myStream',
    get: function get() {
      var me = this.userHistory.mine;

      return me;
    }
  }, {
    key: 'friendsStream',
    get: function get() {
      var _this9 = this;

      var sharesReveived = this.userHistory.received;
      // listen new data and reload all

      var friends = (0, _mobx.toJS)(sharesReveived);
      if (friends.length > 0) {
        friends.forEach(function (friend) {
          // TODO: Check new data is belong to sharing topics or share all
          _this9.onSubscribe('my-friend-stream-' + friend.user_id, 'process-url', function (data) {
            _this9.getUserHistory();
          });
        });
      }
      return sharesReveived;
    }
  }]);

  return HomeStore;
}(_core.CoreStore), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'isProcessingRegister', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isProcessingTopicTree', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'isProcessingHistory', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'codes', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      all: null,
      sites: [],
      topics: []
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'isProcessing', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'isProcessing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'myStream', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'myStream'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'friendsStream', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'friendsStream'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveTopics', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'saveTopics'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'internalLogin', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'internalLogin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'retrylLoginForInternalUser', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'retrylLoginForInternalUser'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'googleConnect', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'googleConnect'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'facebookConnect', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'facebookConnect'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getTopicTree', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getTopicTree'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserHistory', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getUserHistory'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkSafeUrls', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkSafeUrls'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'findUserRating', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'findUserRating'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filterUrls', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'filterUrls'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sortByOrdering', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sortByOrdering'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveShareCode', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'saveShareCode'), _class.prototype)), _class);

function initStore(isServer, userAgent, user) {
  if (isServer && typeof window === 'undefined') {
    return new HomeStore(isServer, userAgent, user);
  } else {
    if (store === null) {
      store = new HomeStore(isServer, userAgent, user);
    }
    return store;
  }
}