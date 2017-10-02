'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDiscoveryStore = initDiscoveryStore;

var _defineProperty = require('next/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('next/node_modules/babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mobx = require('mobx');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _core = require('./core');

var _google = require('../services/google');

var _crawler = require('../services/crawler');

var _reddit = require('../services/reddit');

var _twitter = require('../services/twitter');

var _vimeo = require('../services/vimeo');

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2;

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

var DiscoveryStore = (_class = function (_CoreStore) {
  (0, _inherits3.default)(DiscoveryStore, _CoreStore);

  (0, _createClass3.default)(DiscoveryStore, [{
    key: 'hasMore',
    get: function get() {
      return this.pendings.length === 0 && this.terms.length > 0;
    }
  }]);

  function DiscoveryStore(isServer, userAgent, user, terms) {
    (0, _classCallCheck3.default)(this, DiscoveryStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DiscoveryStore.__proto__ || (0, _getPrototypeOf2.default)(DiscoveryStore)).call(this, isServer, userAgent, user));

    _this.twitterMaxId = '';
    _this.youtubePageToken = '';
    _this.page = 0;
    _this.youtubeResult = [];
    _this.redditResult = [];
    _this.googleResult = [];
    _this.googleNewsResult = [];
    _this.googleKnowledgeResult = [];
    _this.vimeoResult = [];
    _this.twitterResult = [];

    _initDefineProp(_this, 'pendings', _descriptor, _this);

    _initDefineProp(_this, 'terms', _descriptor2, _this);

    _this.terms = terms;
    return _this;
  }

  (0, _createClass3.default)(DiscoveryStore, [{
    key: 'changeTerms',
    value: function changeTerms(terms) {
      this.terms = terms;
      if (this.terms.length === 0) {
        this.page = 0;
        this.youtubePageToken = '';
        this.twitterMaxId = '';
      }
      this.redditResult = [];
      this.googleResult = [];
      this.googleNewsResult = [];
      this.googleKnowledgeResult = [];
      this.youtubeResult = [];
      this.vimeoResult = [];
      this.twitterResult = [];
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      this.page += 1;
      this.search();
    }
  }, {
    key: 'search',
    value: function search() {
      var _this2 = this;

      _logger2.default.warn('searh terms', this.terms);
      _lodash2.default.forEach(this.terms, function (term) {
        var googleSearch = (0, _crawler.googleSearchByTerm)(term, _this2.page);
        _this2.pendings.push('google');
        var googleNewsSearch = (0, _crawler.googleNewsSearchByTerm)(term, _this2.page);
        _this2.pendings.push('news');
        var googleKnowldge = (0, _google.googleKnowlegeSearchByTerm)(term, _this2.page);
        _this2.pendings.push('knowledge');
        var youtubeVideo = (0, _google.youtubeSearchByKeyword)(term, _this2.youtubePageToken);
        _this2.pendings.push('youtube');
        var reddit = (0, _reddit.redditListing)(term, _this2.page);
        _this2.pendings.push('reddit');
        var vimeo = (0, _vimeo.vimeoVideo)(term, _this2.page);
        _this2.pendings.push('vimeo');
        var twitter = (0, _twitter.twitterSearch)(term, _this2.twitterMaxId);
        _this2.pendings.push('twitter');

        (0, _mobx.when)(function () {
          return googleSearch.state !== 'pending';
        }, function () {
          if (googleSearch.value && googleSearch.value.data) {
            var _googleResult;

            var result = googleSearch.value.data.result;

            (_googleResult = _this2.googleResult).push.apply(_googleResult, (0, _toConsumableArray3.default)(result || []));
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return googleNewsSearch.state !== 'pending';
        }, function () {
          if (googleNewsSearch.value && googleNewsSearch.value.data) {
            var _googleNewsResult;

            var result = googleNewsSearch.value.data.result;

            (_googleNewsResult = _this2.googleNewsResult).push.apply(_googleNewsResult, (0, _toConsumableArray3.default)(result || []));
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return googleKnowldge.state !== 'pending';
        }, function () {
          if (googleKnowldge.value && googleKnowldge.value.data) {
            var _googleKnowledgeResul;

            var itemListElement = googleKnowldge.value.data.itemListElement;

            (_googleKnowledgeResul = _this2.googleKnowledgeResult).push.apply(_googleKnowledgeResul, (0, _toConsumableArray3.default)(itemListElement || []));
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return youtubeVideo.state !== 'pending';
        }, function () {
          if (youtubeVideo.value && youtubeVideo.value.data) {
            var _youtubeResult;

            var _youtubeVideo$value$d = youtubeVideo.value.data,
                items = _youtubeVideo$value$d.items,
                nextPageToken = _youtubeVideo$value$d.nextPageToken;

            (_youtubeResult = _this2.youtubeResult).push.apply(_youtubeResult, (0, _toConsumableArray3.default)(items || []));
            _this2.youtubePageToken = nextPageToken;
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return reddit.state !== 'pending';
        }, function () {
          if (reddit.value) {
            var _redditResult;

            (_redditResult = _this2.redditResult).push.apply(_redditResult, (0, _toConsumableArray3.default)(reddit.value || []));
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return vimeo.state !== 'pending';
        }, function () {
          if (vimeo.value && vimeo.value.data) {
            var _vimeoResult;

            (_vimeoResult = _this2.vimeoResult).push.apply(_vimeoResult, (0, _toConsumableArray3.default)(vimeo.value.data.data || []));
            _this2.pendings.splice(0, 1);
          }
        });

        (0, _mobx.when)(function () {
          return twitter.state !== 'pending';
        }, function () {
          if (twitter.value && twitter.value.data) {
            var _twitterResult;

            var _twitter$value$data$t = twitter.value.data.tweets,
                statuses = _twitter$value$data$t.statuses,
                maxId = _twitter$value$data$t.search_metadata.max_id;

            (_twitterResult = _this2.twitterResult).push.apply(_twitterResult, (0, _toConsumableArray3.default)(statuses || []));
            _this2.twitterMaxId = maxId;
            _this2.pendings.splice(0, 1);
          }
        });
      });
    }
  }]);

  return DiscoveryStore;
}(_core.CoreStore), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'pendings', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'terms', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'hasMore', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'hasMore'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeTerms', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'changeTerms'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loadMore', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'loadMore'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'search', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'search'), _class.prototype)), _class);

function initDiscoveryStore(isServer) {
  var userAgent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var user = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var terms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (isServer && typeof window === 'undefined') {
    return new DiscoveryStore(isServer, userAgent, user, terms);
  } else {
    if (store === null) {
      store = new DiscoveryStore(isServer, userAgent, user, terms);
    }
    return store;
  }
}