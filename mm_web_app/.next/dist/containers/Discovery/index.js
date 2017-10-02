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

var _reactStickyEl = require('react-sticky-el');

var _reactStickyEl2 = _interopRequireDefault(_reactStickyEl);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _BlockElement = require('../../components/BlockElement');

var _BlockElement2 = _interopRequireDefault(_BlockElement);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _SearchBar = require('../../components/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/containers/Discovery/index.js',
    _dec,
    _dec2,
    _dec3,
    _class;

_index2.default.onRouteChangeStart = function (url) {
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var masonryOptions = {
  itemSelector: '.grid-item',
  transitionDuration: '0.4s',
  columnWidth: '.grid-sizer',
  percentPosition: true
};

function mashUp(store, masonry) {
  // Parse data
  if (store.terms.length === 0) {
    return [];
  }
  var urls = [];
  var graphKnowledges = [];
  var search = [];
  var news = [];
  var videos = [];
  var reddits = [];
  var vimeos = [];
  var twitters = [];
  var redditResult = store.redditResult,
      googleResult = store.googleResult,
      googleNewsResult = store.googleNewsResult,
      googleKnowledgeResult = store.googleKnowledgeResult,
      youtubeResult = store.youtubeResult,
      twitterResult = store.twitterResult,
      vimeoResult = store.vimeoResult;

  if (googleKnowledgeResult && googleKnowledgeResult.length) {
    _lodash2.default.forEach(googleKnowledgeResult, function (item) {
      var moreDetailUrl = item.result && item.result.detailedDescription && item.result.detailedDescription.url || item.result && item.result.url;
      if (!urls.includes(moreDetailUrl) && moreDetailUrl && item.result.image && item.result.image.contentUrl) {
        urls.push(moreDetailUrl);
        graphKnowledges.push(_react2.default.createElement(_BlockElement2.default, {
          key: 'GK-' + moreDetailUrl,
          name: item.result.name,
          description: item.result.detailedDescription && item.result.detailedDescription.articleBody || item.result.description,
          image: item.result.image && item.result.image.contentUrl,
          url: moreDetailUrl,
          type: 'Google Knowledge',
          masonry: masonry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }));
      }
    });
  }
  if (googleNewsResult && googleNewsResult.length) {
    _lodash2.default.forEach(googleNewsResult, function (item) {
      if (item.img && item.url && !urls.includes(item.url)) {
        urls.push(item.url);
        news.push(_react2.default.createElement(_BlockElement2.default, {
          key: 'GN-' + item.url,
          name: item.title,
          description: item.description,
          url: item.url,
          image: item.img,
          type: 'Google News',
          masonry: masonry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }));
      }
    });
  }
  if (googleResult && googleResult.length) {
    _lodash2.default.forEach(googleResult, function (item) {
      if (item.img && item.url && !urls.includes(item.url)) {
        urls.push(item.url);
        search.push(_react2.default.createElement(_BlockElement2.default, {
          key: 'GS-' + item.url,
          name: item.title,
          description: item.description,
          url: item.url,
          image: item.img,
          type: 'Google Search',
          masonry: masonry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }));
      }
    });
  }
  if (youtubeResult && youtubeResult.length) {
    _lodash2.default.forEach(youtubeResult, function (item) {
      var youtubeUrl = 'https://www.youtube.com/watch?v=' + item.id.videoId;
      if (item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.medium.url && !urls.includes(youtubeUrl)) {
        urls.push(youtubeUrl);
        videos.push(_react2.default.createElement(_BlockElement2.default, {
          key: 'YT-' + youtubeUrl,
          name: item.snippet.title,
          description: item.snippet.description,
          image: item.snippet.thumbnails && item.snippet.thumbnails.medium.url,
          url: youtubeUrl,
          type: 'Youtube',
          masonry: masonry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }));
      }
    });
  }
  if (redditResult && redditResult.length) {
    _lodash2.default.forEach(redditResult, function (item) {
      if (item.preview && item.preview.images && item.preview.images[0] && item.url && !urls.includes(item.url)) {
        urls.push(item.url);
        var img = item.preview.images[0].resolutions.length ? item.preview.images[0].resolutions[item.preview.images[0].resolutions.length - 1].url : '/static/images/no-image.png';
        reddits.push(_react2.default.createElement(_BlockElement2.default, {
          key: 'YT-' + item.url,
          name: item.title,
          description: item.selftext || item.title,
          image: img,
          url: 'https://www.reddit.com' + item.permalink,
          type: 'Reddit',
          masonry: masonry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }));
      }
    });
  }

  if (twitterResult && twitterResult.length) {
    var uniqTwitterResult = _lodash2.default.uniqBy(twitterResult, 'id_str');
    _lodash2.default.forEach(uniqTwitterResult, function (item) {
      var url = 'https://twitter.com/' + item.user.screen_name + '/status/' + item.id_str;
      urls.push(url);
      twitters.push(_react2.default.createElement(_BlockElement2.default, {
        key: 'TW-' + url,
        name: item.user.name,
        description: item.text,
        image: item.user.profile_image_url,
        url: url,
        type: 'Twitter',
        masonry: masonry,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }));
    });
  }

  if (vimeoResult && vimeoResult.length) {
    var uniqVimeoResult = _lodash2.default.uniqBy(vimeoResult, 'link');
    _lodash2.default.forEach(uniqVimeoResult, function (item) {
      var replace = String.prototype.replace;
      var link = replace.call(item.uri, '/videos', 'https://vimeo.com');
      urls.push(link);
      var img = item.pictures && item.pictures.sizes.length ? item.pictures.sizes[item.pictures.sizes.length - 1].link : '/static/images/no-image.png';
      vimeos.push(_react2.default.createElement(_BlockElement2.default, {
        key: 'VM-' + item.link,
        name: item.name,
        description: item.description,
        image: img,
        url: link,
        type: 'Vimeo',
        masonry: masonry,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }));
    });
  }
  // Mashup records
  var result = [graphKnowledges, news, search, reddits, twitters, vimeos, videos];
  var elements = [];
  var numberItems = _lodash2.default.map(result, function (item) {
    return item.length;
  });
  var maxItems = _lodash2.default.max(numberItems);
  for (var index = 0; index < maxItems; index += 1) {
    for (var count = 0; count < result.length; count += 1) {
      if (result[count] && result[count][index]) {
        elements.push(result[count][index]);
      }
    }
  }
  return elements;
}

var Discovery = (_dec = (0, _mobxReact.inject)('discovery'), _dec2 = (0, _mobxReact.inject)('ui'), _dec3 = (0, _mobxReact.inject)('store'), _dec(_class = _dec2(_class = _dec3(_class = (0, _mobxReact.observer)(_class = function (_PureComponent) {
  (0, _inherits3.default)(Discovery, _PureComponent);

  function Discovery() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Discovery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Discovery.__proto__ || (0, _getPrototypeOf2.default)(Discovery)).call.apply(_ref, [this].concat(args))), _this), _this.onLayout = function () {
      _this.masonry && _this.masonry.layout();
    }, _this.loadMore = function () {
      _logger2.default.warn('loadMore');
      _this.props.discovery.loadMore();
    }, _this.onChange = function (terms) {
      _logger2.default.warn('onChange terms', terms);
      _this.props.discovery.changeTerms(terms);
    }, _this.onGoBack = function () {
      _this.props.ui.openDiscoveryMode([]);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Discovery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.ui.discoveryTerms.length) {
        this.props.discovery.changeTerms(this.props.ui.discoveryTerms);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      _logger2.default.warn('Discovery render', this.props);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement('div', { className: 'back', __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement('button', { className: 'btn btn-back', onClick: this.onGoBack, __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }))), _react2.default.createElement('div', { className: 'bounceInRight animated', __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement(_reactStickyEl2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react2.default.createElement('div', { className: 'standand-sort', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement(_SearchBar2.default, { terms: (0, _mobx.toJS)(this.props.ui.discoveryTerms), suggestions: (0, _mobx.toJS)(this.props.ui.discoverySuggestionTerms), onChange: this.onChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }))), _react2.default.createElement(_reactInfiniteScroller2.default, {
        pageStart: 0,
        loadMore: this.loadMore,
        hasMore: this.props.discovery.hasMore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement(_reactMasonryComponent2.default, {
        className: 'container-masonry',
        options: masonryOptions,
        updateOnEachImageLoad: true,
        onImagesLoaded: this.onLayout,
        ref: function ref(c) {
          _this2.masonry = _this2.masonry || c.masonry;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement('div', { className: 'grid-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react2.default.createElement('div', { className: 'grid-sizer', __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), mashUp((0, _mobx.toJS)(this.props.discovery), this.masonry)))), _react2.default.createElement(_Loading2.default, { isLoading: this.props.discovery.pendings.length > 0, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      })));
    }
  }]);

  return Discovery;
}(_react.PureComponent)) || _class) || _class) || _class) || _class);

exports.default = Discovery;