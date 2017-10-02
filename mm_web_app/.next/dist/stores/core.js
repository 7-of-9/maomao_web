'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoreStore = undefined;
exports.initStore = initStore;

var _defineProperty = require('next/node_modules/babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('next/node_modules/babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = require('mobx');

var _pusherJs = require('pusher-js');

var _pusherJs2 = _interopRequireDefault(_pusherJs);

var _detector = require('../utils/detector');

var _constants = require('../containers/App/constants');

var _chrome = require('../utils/chrome');

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _google = require('../utils/google');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

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

var dev = process.env.NODE_ENV !== 'production';
_pusherJs2.default.logToConsole = !!dev;

var CoreStore = exports.CoreStore = (_dec = _mobx.observable.ref, (_class = function () {
  function CoreStore(isServer, userAgent, user) {
    (0, _classCallCheck3.default)(this, CoreStore);

    this.isMobile = false;
    this.userAgent = {};
    this.channels = [];
    this.user = null;
    this.pusher = null;
    this.browserName = '';

    _initDefineProp(this, 'contacts', _descriptor, this);

    _initDefineProp(this, 'isChrome', _descriptor2, this);

    _initDefineProp(this, 'userHash', _descriptor3, this);

    _initDefineProp(this, 'userId', _descriptor4, this);

    _initDefineProp(this, 'isInstall', _descriptor5, this);

    _initDefineProp(this, 'isLogin', _descriptor6, this);

    this.userAgent = userAgent;
    this.user = user;
    if (this.user) {
      this.isLogin = true;
    }
    this.isMobile = (0, _detector.isMobileBrowser)(userAgent);
    this.browserName = (0, _detector.browserName)();
  }

  (0, _createClass3.default)(CoreStore, [{
    key: 'resetData',
    value: function resetData() {
      this.contacts = [];
      this.channels = [];
    }
  }, {
    key: 'checkEnvironment',
    value: function checkEnvironment() {
      this.isChrome = this.browserName === 'chrome';
      _logger2.default.warn('browserName', this.browserName);
    }
  }, {
    key: 'checkInstall',
    value: function checkInstall() {
      if (this.isChrome && !this.isMobile) {
        var checkInstall = !!(0, _chrome.hasInstalledExtension)();
        if (checkInstall !== this.isInstall) {
          this.isInstall = checkInstall;
          this.checkAuthFromExtension();
        }
      }
      _logger2.default.info('checkInstall isChrome, isMobile, isInstalledOnChromeDesktop', this.isChrome, this.isMobile, this.isInstalledOnChromeDesktop);
    }
  }, {
    key: 'checkAuthFromExtension',
    value: function checkAuthFromExtension() {
      var _this = this;

      _logger2.default.warn('checkAuthFromExtension');
      if (this.isInstall && this.isChrome && !this.isMobile && this.userId < 0) {
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('WEB_CHECK_AUTH', {}), function (error, data) {
          if (error) {
            _logger2.default.warn('WEB_CHECK_AUTH error', error);
          } else {
            _this.autoLogin(data.payload);
          }
        });
      }
    }
  }, {
    key: 'checkGoogleContacts',
    value: function checkGoogleContacts() {
      var _this2 = this;

      _logger2.default.warn('checkGoogleContacts');
      if (this.isInstall && this.userId > 0) {
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('WEB_GOOGLE_CONTACTS', {}), function (error, data) {
          if (error) {
            _logger2.default.warn('WEB_GOOGLE_CONTACTS error', error);
          } else {
            _this2.contacts = data.payload;
            _logger2.default.warn('contacts', _this2.contacts);
          }
        });
      }
    }
  }, {
    key: 'saveGoogleContacts',
    value: function saveGoogleContacts(contacts, googleToken, googleUserId) {
      _logger2.default.warn('saveGoogleContacts', contacts, googleToken, googleUserId);
      this.contacts = contacts;
      if (this.isInstall) {
        (0, _google.downloadPhoto)(googleToken, googleUserId);
      }
    }
  }, {
    key: 'login',
    value: function login(userId, userHash) {
      this.userId = userId;
      this.userHash = userHash;
      this.isLogin = true;
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.userId = -1;
      this.userHash = '';
      this.isLogin = false;
      this.resetData();
    }
  }, {
    key: 'autoLogin',
    value: function autoLogin(auth) {
      _logger2.default.warn('autoLogin', auth);
      var userId = auth.userId,
          userHash = auth.userHash,
          info = auth.info;

      if (userId > 0) {
        this.isLogin = true;
        this.user = info;
        this.login(userId, userHash);
      }
    }
  }, {
    key: 'logoutUser',
    value: function logoutUser() {
      if (this.isInstall && this.isChrome && !this.isMobile) {
        (0, _chrome.sendMsgToChromeExtension)((0, _chrome.actionCreator)('AUTH_LOGOUT', {}));
      }
      this.logout();
    }
  }, {
    key: 'onSubscribe',
    value: function onSubscribe(channelName, eventName, callback) {
      if (this.channels.indexOf(channelName) === -1) {
        _logger2.default.warn('channelName', channelName);
        if (!this.pusher) {
          this.pusher = new _pusherJs2.default(_constants.PUSHER_KEY, {
            cluster: 'ap1',
            encrypted: true
          });
        }
        var channel = this.pusher.subscribe(channelName);
        channel.bind(eventName, function (data) {
          callback(data);
        });
        this.channels.push(channelName);
      }
    }
  }, {
    key: 'isInstalledOnChromeDesktop',
    get: function get() {
      return this.isInstall && this.isChrome && !this.isMobile;
    }
  }]);

  return CoreStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'contacts', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isChrome', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'userHash', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'userId', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'isInstall', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'isLogin', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'isInstalledOnChromeDesktop', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'isInstalledOnChromeDesktop'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetData', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'resetData'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkEnvironment', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkEnvironment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkInstall', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkInstall'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkAuthFromExtension', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkAuthFromExtension'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkGoogleContacts', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkGoogleContacts'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveGoogleContacts', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'saveGoogleContacts'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'login', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'login'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'logout', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'logout'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'autoLogin', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'autoLogin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'logoutUser', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'logoutUser'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSubscribe', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onSubscribe'), _class.prototype)), _class));

function initStore(isServer) {
  var userAgent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var user = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (isServer && typeof window === 'undefined') {
    return new CoreStore(isServer, userAgent, user);
  } else {
    if (store === null) {
      store = new CoreStore(isServer, userAgent, user);
    }
    return store;
  }
}