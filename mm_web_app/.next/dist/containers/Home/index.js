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

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _mobxReact = require('mobx-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ravenJs = require('raven-js');

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _nealReact = require('neal-react');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _constants = require('../../containers/App/constants');

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Notification = require('../../components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _AddToHome = require('../../components/AddToHome');

var _AddToHome2 = _interopRequireDefault(_AddToHome);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/containers/Home/index.js',
    _dec,
    _dec2,
    _class;

/*
 *
 * Home
 *
 */

// dynaymic load container component

var AppHeader = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../AppHeader');

    m.__webpackChunkName = '---AppHeader-7f597a90-edc6-4ca8-aa8a-57833a0faf80.js';
    resolve(m);
  }, 'chunks/---AppHeader-7f597a90-edc6-4ca8-aa8a-57833a0faf80.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../AppHeader');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../AppHeader');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/---AppHeader-7f597a90-edc6-4ca8-aa8a-57833a0faf80.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    });
  },
  ssr: false
});

var Discovery = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../Discovery');

    m.__webpackChunkName = '---Discovery-adbd6bac-c2c6-4010-ae17-bb506225cfd0.js';
    resolve(m);
  }, 'chunks/---Discovery-adbd6bac-c2c6-4010-ae17-bb506225cfd0.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../Discovery');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../Discovery');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/---Discovery-adbd6bac-c2c6-4010-ae17-bb506225cfd0.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    });
  }
});

var Share = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../Share');

    m.__webpackChunkName = '---Share-ca032af2-a3d1-427d-a012-2ec907cca502.js';
    resolve(m);
  }, 'chunks/---Share-ca032af2-a3d1-427d-a012-2ec907cca502.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../Share');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../Share');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/---Share-ca032af2-a3d1-427d-a012-2ec907cca502.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    });
  }
});

var ShareList = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../../components/ShareList');

    m.__webpackChunkName = '------components-ShareList-17b0d14e-8324-400d-bf89-b620f8a56b3a.js';
    resolve(m);
  }, 'chunks/------components-ShareList-17b0d14e-8324-400d-bf89-b620f8a56b3a.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../../components/ShareList');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../../components/ShareList');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/------components-ShareList-17b0d14e-8324-400d-bf89-b620f8a56b3a.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    });
  }
});

var Streams = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../../components/Streams');

    m.__webpackChunkName = '------components-Streams-4512fa46-2a14-4728-90bb-6393bbd7c099.js';
    resolve(m);
  }, 'chunks/------components-Streams-4512fa46-2a14-4728-90bb-6393bbd7c099.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../../components/Streams');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../../components/Streams');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/------components-Streams-4512fa46-2a14-4728-90bb-6393bbd7c099.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    });
  },
  ssr: false
});

var TopicTree = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../../components/TopicTree');

    m.__webpackChunkName = '------components-TopicTree-fa945530-c032-42fe-bbc4-58102c625e72.js';
    resolve(m);
  }, 'chunks/------components-TopicTree-fa945530-c032-42fe-bbc4-58102c625e72.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../../components/TopicTree');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../../components/TopicTree');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/------components-TopicTree-fa945530-c032-42fe-bbc4-58102c625e72.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    });
  }
});

var SelectedPanel = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('../../components/SelectedPanel');

    m.__webpackChunkName = '------components-SelectedPanel-0f214b4d-118b-4c7a-bc13-4bc3f7b1d737.js';
    resolve(m);
  }, 'chunks/------components-SelectedPanel-0f214b4d-118b-4c7a-bc13-4bc3f7b1d737.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak('../../components/SelectedPanel');

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require('../../components/SelectedPanel');

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/------components-SelectedPanel-0f214b4d-118b-4c7a-bc13-4bc3f7b1d737.js');
}), {
  loading: function loading() {
    return _react2.default.createElement(_Loading2.default, { isLoading: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    });
  }
});

_index2.default.onRouteChangeStart = function (url) {
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var brandName = 'maomao';
var businessAddress = _react2.default.createElement('address', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  }
}, _react2.default.createElement('img', { src: '/static/images/maomao.png', className: 'logo-image', alt: 'maomao', __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  }
}));

var Home = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasAddToHome: false
    }, _this.addToHomeOnMobile = function () {
      _logger2.default.warn('Home addToHomeOnMobile');
      if (_this.props.isMobile) {
        _this.addToHome.show(true);
        _this.setState({
          hasAddToHome: true
        });
      }
    }, _this.renderViewer = function (currentViewer) {
      switch (currentViewer) {
        case 'share':
          return _react2.default.createElement(ShareList, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          });
        case 'sharetopic':
          return _react2.default.createElement(Share, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          });
        case 'discovery':
          return _react2.default.createElement(Discovery, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          });
        case 'streams':
        default:
          return _react2.default.createElement(Streams, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          });
      }
    }, _this.renderBaseOnAuthentication = function () {
      var _this$props$store = _this.props.store,
          isLogin = _this$props$store.isLogin,
          isProcessing = _this$props$store.isProcessing;
      var _this$props$ui = _this.props.ui,
          currentViewer = _this$props$ui.currentViewer,
          selectedTopics = _this$props$ui.selectedTopics;

      if (isLogin) {
        return _react2.default.createElement('div', { className: 'wrapper-slide', __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, _this.renderViewer(currentViewer), _react2.default.createElement(_Loading2.default, { isLoading: isProcessing, __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }));
      }
      var selectedItems = selectedTopics ? selectedTopics.map(function (item) {
        return { img: item.img, id: item.topicId, name: item.topicName };
      }) : [];
      return _react2.default.createElement('div', { className: 'wrapper-slide', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(SelectedPanel, {
        total: selectedTopics && selectedTopics.length,
        items: selectedItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), currentViewer !== 'discovery' && _react2.default.createElement(TopicTree, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), currentViewer === 'discovery' && _react2.default.createElement(Discovery, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _logger2.default.warn('Home componentDidMount');
      _ravenJs2.default.config('https://85aabb7a13e843c5a992da888d11a11c@sentry.io/191653').install();
      if (this.props.isMobile) {
        // TODO: support chrome (android)
        if (window.navigator.standalone) {
          this.setState({
            hasAddToHome: true
          });
        } else {
          /* eslint-disable no-undef */
          this.addToHome = addToHomescreen({
            autostart: false,
            appID: 'org.maomao.webApp',
            detectHomescreen: true,
            startDelay: 0
          });
          _logger2.default.warn('addToHome', this.addToHome);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'maomao - discover & share';
      var description = 'maomao is a peer-to-peer real time content sharing network, powered by a deep learning engine.';
      var _props$store = this.props.store,
          shareInfo = _props$store.shareInfo,
          bgImage = _props$store.bgImage,
          isMobile = _props$store.isMobile;

      if (shareInfo) {
        var fullname = shareInfo.fullname,
            shareAll = shareInfo.share_all,
            topicTitle = shareInfo.topic_title,
            urlTitle = shareInfo.url_title;

        if (shareAll) {
          description = fullname + ' would like to share all maomao stream with you';
        } else if (urlTitle && urlTitle.length) {
          description = fullname + ' would like to share "' + urlTitle + '" with you';
        } else if (topicTitle && topicTitle.length) {
          description = fullname + ' would like to share the maomao stream with you: "' + topicTitle + '"';
        }
      }
      var hasAddToHome = this.state.hasAddToHome;

      _logger2.default.warn('Home render', this.props);
      return _react2.default.createElement(_nealReact.Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, title), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Maomao', __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), _react2.default.createElement('meta', { name: 'description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement('meta', { name: 'og:title', content: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), _react2.default.createElement('meta', { name: 'og:description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), _react2.default.createElement('meta', { name: 'og:image', content: bgImage && bgImage.length > 0 ? bgImage : _constants.MAOMAO_SITE_URL + 'static/images/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), _react2.default.createElement('meta', { name: 'fb:app_id', content: _constants.FACEBOOK_APP_ID, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), _react2.default.createElement('meta', { name: 'google-site-verification', content: 'AmFFr6xg5Htf_GFkf0psWvL1r9JKBMhGEkmAJ7UmafM', __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/images/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), _react2.default.createElement('link', { rel: 'icon', href: '/static/images/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement('link', { rel: 'chrome-webstore-item', href: 'https://chrome.google.com/webstore/detail/onkinoggpeamajngpakinabahkomjcmk', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vendors/css/nprogress.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vendors/css/addtohomescreen.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), _react2.default.createElement('script', { src: '/static/vendors/js/snoowrap-v1.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), _react2.default.createElement('script', { src: '/static/vendors/js/addtohomescreen.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), _react2.default.createElement(AppHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), this.renderBaseOnAuthentication(), isMobile && !hasAddToHome && _react2.default.createElement(_AddToHome2.default, { onClick: this.addToHomeOnMobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }), _react2.default.createElement(_Notification2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), _react2.default.createElement('div', { className: 'footer-area', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement(_nealReact.Footer, { brandName: brandName,
        facebookUrl: 'https://www.facebook.com/maomao.hiring',
        address: businessAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })));
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class) || _class) || _class);

exports.default = Home;