'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _home = require('../stores/home');

var _ui = require('../stores/ui');

var _discovery = require('../stores/discovery');

var _Home = require('../containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  (0, _createClass3.default)(Index, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req,
            query = _ref2.query;
        var isServer, userAgent, user, store, uiStore, terms, search, discovery;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = !!req;
                userAgent = '';

                if (req && req.headers && req.headers['user-agent']) {
                  userAgent = req.headers['user-agent'];
                }
                user = req && req.session ? req.session.decodedToken : null;
                store = (0, _home.initStore)(isServer, userAgent, user);
                uiStore = (0, _ui.initUIStore)(isServer);
                terms = [];
                search = query.search;

                if (search) {
                  terms = search.split(',');
                }
                _logger2.default.warn('terms', terms);
                discovery = (0, _discovery.initDiscoveryStore)(isServer, userAgent, user, terms);
                return _context.abrupt('return', (0, _extends3.default)({ isServer: isServer }, store, uiStore, discovery));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _logger2.default.warn('Index', props);
    _this.store = (0, _home.initStore)(props.isServer, props.userAgent, props.user);
    _this.uiStore = (0, _ui.initUIStore)(props.isServer);
    _this.store.checkEnvironment();
    _this.discovery = (0, _discovery.initDiscoveryStore)(props.isServer, props.userAgent, props.user, props.terms);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          _logger2.default.log('service worker registration successful');
        }).catch(function (err) {
          _logger2.default.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      _logger2.default.warn('Index render', this.store);
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store, discovery: this.discovery, ui: this.uiStore, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_Home2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;