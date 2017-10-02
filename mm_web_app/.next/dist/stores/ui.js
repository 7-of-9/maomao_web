'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIStore = undefined;
exports.initUIStore = initUIStore;

var _defineProperty = require('next/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('next/node_modules/babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = require('mobx');

var _hash = require('../utils/hash');

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

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

var UIStore = exports.UIStore = (_class = function () {
  function UIStore() {
    (0, _classCallCheck3.default)(this, UIStore);

    _initDefineProp(this, 'showSignInModal', _descriptor, this);

    _initDefineProp(this, 'showExtensionModal', _descriptor2, this);

    _initDefineProp(this, 'onlyMe', _descriptor3, this);

    _initDefineProp(this, 'sortBy', _descriptor4, this);

    _initDefineProp(this, 'sortDirection', _descriptor5, this);

    _initDefineProp(this, 'filterByTopic', _descriptor6, this);

    _initDefineProp(this, 'filterByUser', _descriptor7, this);

    _initDefineProp(this, 'discoveryTerms', _descriptor8, this);

    _initDefineProp(this, 'discoverySuggestionTerms', _descriptor9, this);

    _initDefineProp(this, 'rating', _descriptor10, this);

    _initDefineProp(this, 'currentViewer', _descriptor11, this);

    _initDefineProp(this, 'selectedTopics', _descriptor12, this);

    _initDefineProp(this, 'currentTopicId', _descriptor13, this);

    _initDefineProp(this, 'currentTopicTitle', _descriptor14, this);

    _initDefineProp(this, 'treeLevel', _descriptor15, this);

    _initDefineProp(this, 'notifications', _descriptor16, this);

    _initDefineProp(this, 'page', _descriptor17, this);

    this.shareTopics = [];
    this.shareUrlId = -1;
    this.userId = -1;
    this.title = 'Sign In';
  }

  (0, _createClass3.default)(UIStore, [{
    key: 'toggleOnlyMe',
    value: function toggleOnlyMe(userId, users) {
      _logger2.default.warn('toggleOnlyMe', userId, users);
      this.onlyMe = !this.onlyMe;
      if (this.onlyMe) {
        this.userId = userId;
      }

      if (this.onlyMe) {
        var user = users.find(function (item) {
          return item.user_id === userId;
        });
        if (user) {
          this.filterByUser = [{ value: user.urlIds, label: user.fullname, user_id: user.user_id, avatar: user.avatar }];
        }
      } else {
        this.filterByUser = this.filterByUser.filter(function (item) {
          return item.user_id !== userId;
        });
      }
    }
  }, {
    key: 'toggleSelectTopic',
    value: function toggleSelectTopic(isSelect, topicId, topicName, img) {
      _logger2.default.warn('toggleSelectTopic', isSelect, topicId, topicName, img);
      if (isSelect) {
        this.selectedTopics.push({ topicId: topicId, topicName: topicName, img: img });
      } else {
        this.selectedTopics = this.selectedTopics.filter(function (item) {
          return item.topicId !== topicId;
        });
      }
    }
  }, {
    key: 'selectTopicTree',
    value: function selectTopicTree(topicId) {
      var topicName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var inc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      _logger2.default.warn('selectTopicTree', topicId);
      this.currentTopicId = topicId;
      this.currentTopicTitle = topicName;
      this.treeLevel += inc;
    }
  }, {
    key: 'openDiscoveryMode',
    value: function openDiscoveryMode(terms, suggestions) {
      this.discoveryTerms = terms;
      if (terms.length > 0) {
        this.discoverySuggestionTerms = suggestions;
        this.currentViewer = 'discovery';
      } else {
        this.currentViewer = 'streams';
        this.page = 1;
        this.discoverySuggestionTerms = [];
      }
    }
  }, {
    key: 'openShareTopic',
    value: function openShareTopic(urlId, selectedTopic, otherTopics) {
      var _this = this;

      _logger2.default.warn('share topic', urlId, selectedTopic, otherTopics);
      this.shareUrlId = urlId;
      this.shareTopics = [{ id: selectedTopic.id + '-tld-' + selectedTopic.name, topic_id: selectedTopic.id, name: selectedTopic.name }];
      otherTopics.forEach(function (topic) {
        if (topic.id !== selectedTopic.id) {
          _this.shareTopics.push({ id: topic.id + '-beta-' + topic.name, topic_id: topic.id, name: topic.name });
        }
      });
      this.currentViewer = 'sharetopic';
    }
  }, {
    key: 'displayShareManagement',
    value: function displayShareManagement() {
      this.currentViewer = 'share';
    }
  }, {
    key: 'backToStreams',
    value: function backToStreams() {
      this.currentViewer = 'streams';
      this.page = 1;
    }
  }, {
    key: 'changeSortOrder',
    value: function changeSortOrder(type, direction) {
      _logger2.default.warn('changeSortOrder', type, direction);
      this.sortBy = type;
      this.sortDirection = direction;
      this.page = 1;
    }
  }, {
    key: 'toggleSignIn',
    value: function toggleSignIn(isShow) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Sign In';

      this.showSignInModal = isShow;
      this.title = title;
    }
  }, {
    key: 'openExtensionModal',
    value: function openExtensionModal() {
      this.showExtensionModal = true;
    }
  }, {
    key: 'closeExtensionModal',
    value: function closeExtensionModal() {
      this.showExtensionModal = false;
    }
  }, {
    key: 'removeNotification',
    value: function removeNotification(uuid) {
      if (this.notifications) {
        this.notifications = this.notifications.filter(function (item) {
          return item && item.key !== uuid;
        });
      } else {
        this.clearNotifications();
      }
    }
  }, {
    key: 'clearNotifications',
    value: function clearNotifications() {
      this.notifications = [];
    }
  }, {
    key: 'addNotification',
    value: function addNotification(msg) {
      var _this2 = this;

      var uuid = (0, _hash.guid)();
      this.notifications.push({
        message: msg,
        key: uuid,
        action: 'Dismiss',
        onClick: function onClick(deactivate) {
          _this2.removeNotification(deactivate.key);
        }
      });
    }
  }, {
    key: 'removeTopic',
    value: function removeTopic(topic) {
      _logger2.default.info('removeTopic topic', topic);
      var filterByTopic = (0, _mobx.toJS)(this.filterByTopic);
      _logger2.default.info('removeTopic filterByTopic', filterByTopic);
      this.filterByTopic = filterByTopic.filter(function (item) {
        return item.label !== topic.label;
      });
      this.page = 1;
    }
  }, {
    key: 'selectTopic',
    value: function selectTopic(topic) {
      _logger2.default.info('selectTopic', topic, this);
      var filterByTopic = (0, _mobx.toJS)(this.filterByTopic);
      _logger2.default.info('selectTopic filterByTopic', filterByTopic);
      if (!filterByTopic.find(function (item) {
        return item.label === topic.name;
      })) {
        this.filterByTopic = filterByTopic.filter(function (item) {
          return item.label !== topic.name;
        }).concat([{ value: topic.urlIds, label: topic.name }]);
      }
      this.page = 1;
    }
  }, {
    key: 'removeUser',
    value: function removeUser(user) {
      var _this3 = this;

      _logger2.default.info('removeUser', user, this);
      this.filterByUser = this.filterByUser.filter(function (item) {
        return item.user_id !== user.user_id;
      });
      if (this.filterByUser.length <= 1) {
        this.onlyMe = !!this.filterByUser.find(function (item) {
          return item.user_id === _this3.userId;
        });
      }
      this.page = 1;
    }
  }, {
    key: 'selectUser',
    value: function selectUser(user) {
      _logger2.default.info('selectUser', user, this);
      if (!this.filterByUser.find(function (item) {
        return item.user_id === user.user_id;
      })) {
        this.filterByUser = this.filterByUser.filter(function (item) {
          return item.user_id !== user.user_id;
        }).concat([{ value: user.urlIds, label: user.fullname, user_id: user.user_id, avatar: user.avatar }]);
      }
      if (this.filterByUser.length > 1) {
        this.onlyMe = false;
      }
      this.page = 1;
    }
  }, {
    key: 'changeRate',
    value: function changeRate(rating) {
      this.rating = rating;
      this.page = 1;
    }
  }, {
    key: 'nextPage',
    value: function nextPage() {
      _logger2.default.warn('nextPage');
      this.page += 1;
    }
  }]);

  return UIStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'showSignInModal', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'showExtensionModal', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'onlyMe', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'sortBy', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'rating';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'sortDirection', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'desc';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'filterByTopic', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'filterByUser', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'discoveryTerms', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'discoverySuggestionTerms', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'rating', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'currentViewer', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'streams';
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'selectedTopics', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'currentTopicId', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'currentTopicTitle', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'treeLevel', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'notifications', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'page', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'toggleOnlyMe', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'toggleOnlyMe'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleSelectTopic', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'toggleSelectTopic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'selectTopicTree', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'selectTopicTree'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'openDiscoveryMode', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'openDiscoveryMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'openShareTopic', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'openShareTopic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'displayShareManagement', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'displayShareManagement'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'backToStreams', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'backToStreams'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeSortOrder', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'changeSortOrder'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleSignIn', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'toggleSignIn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'openExtensionModal', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'openExtensionModal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'closeExtensionModal', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'closeExtensionModal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeNotification', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'removeNotification'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearNotifications', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'clearNotifications'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addNotification', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'addNotification'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeTopic', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'removeTopic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'selectTopic', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'selectTopic'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeUser', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'removeUser'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'selectUser', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'selectUser'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeRate', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'changeRate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextPage', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'nextPage'), _class.prototype)), _class);

function initUIStore(isServer) {
  if (isServer && typeof window === 'undefined') {
    return new UIStore(isServer);
  } else {
    if (store === null) {
      store = new UIStore(isServer);
    }
    return store;
  }
}