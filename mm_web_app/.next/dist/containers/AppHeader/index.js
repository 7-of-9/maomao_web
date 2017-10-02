'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('next/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _mobxReact = require('mobx-react');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

require('isomorphic-fetch');

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _nealReact = require('neal-react');

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _LogoIcon = require('../../components/LogoIcon');

var _LogoIcon2 = _interopRequireDefault(_LogoIcon);

var _Slogan = require('../../components/Slogan');

var _Slogan2 = _interopRequireDefault(_Slogan);

var _hash = require('../../utils/hash');

var _firebaseCredentials = require('../../firebaseCredentials');

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/containers/AppHeader/index.js',
    _dec,
    _dec2,
    _class,
    _class2,
    _temp2;

/*
 *
 * AppHeader
 *
 */

var brand = function brand() {
  return _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_LogoIcon2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_Slogan2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
};

var avatar = function avatar(user) {
  if (user && (user.picture || user.avatar)) {
    return user.picture || user.avatar;
  }
  return '/static/images/no-avatar.png';
};

var customModalStyles = {
  content: {
    top: '82px',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    overflow: 'hidden'
  }
};

var AppHeader = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(AppHeader, _React$Component);

  function AppHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppHeader.__proto__ || (0, _getPrototypeOf2.default)(AppHeader)).call.apply(_ref, [this].concat(args))), _this), _this.onInternalLogin = function () {
      _logger2.default.warn('onInternalLogin', _this.props);
      _this.addNotification('Test Internal: New User');
      _this.props.ui.toggleSignIn(false);
      _this.props.store.internalLogin(function (user) {
        _logger2.default.warn('test user', user);
        var selectedTopics = _this.props.ui.selectedTopics;

        _this.props.store.saveTopics(selectedTopics.map(function (item) {
          return item.topicId;
        }));
        var email = user.email,
            displayName = user.name;

        _firebase2.default.auth().createUserWithEmailAndPassword(email, 'maomao').then(function (newUser) {
          newUser.updateProfile({
            displayName: displayName,
            photoURL: (0, _stringify2.default)(user)
          }).catch(function (error) {
            _this.addNotification(error.message);
          });
        }).catch(function (error) {
          _this.addNotification(error.message);
        });
      });
    }, _this.onFacebookLogin = function (evt) {
      evt.preventDefault();
      _logger2.default.warn('onFacebookLogin', _this.props, evt);
      var provider = new _firebase2.default.auth.FacebookAuthProvider();
      provider.addScope('email');
      _firebase2.default.auth().signInWithPopup(provider).catch(function (error) {
        _this.addNotification(error.message);
      });
    }, _this.onGoogleLogin = function (evt) {
      evt.preventDefault();
      _logger2.default.warn('onGoogleLogin', _this.props, evt);
      var provider = new _firebase2.default.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.me');
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      _firebase2.default.auth().signInWithPopup(provider).catch(function (error) {
        _this.addNotification(error.message);
      });
    }, _this.onLogout = function (evt) {
      evt.preventDefault();
      _logger2.default.warn('onLogout', _this.props);
      _firebase2.default.auth().signOut().then(function () {
        fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'same-origin'
        }).then(function () {
          _this.props.store.logoutUser();
        });
        _this.addNotification('You have successfully signed out.');
      }).catch(function (error) {
        _logger2.default.warn(error);
      });
    }, _this.onClose = function () {
      _logger2.default.warn('onClose', _this.props);
      _this.props.ui.toggleSignIn(false);
    }, _this.showSignIn = function (evt) {
      evt.preventDefault();
      _this.props.ui.toggleSignIn(true, 'Sign In');
    }, _this.openShareManagement = function (evt) {
      evt.preventDefault();
      _this.props.ui.displayShareManagement();
    }, _this.onOpenExtensionModal = function (evt) {
      evt.preventDefault();
      _this.props.ui.openExtensionModal();
    }, _this.onCloseExtensionModal = function (evt) {
      evt.preventDefault();
      _this.props.ui.closeExtensionModal();
    }, _this.noImage = function (evt) {
      evt.target.src = '/static/images/no-image.png';
    }, _this.inlineInstall = function () {
      /* eslint-disable */
      chrome.webstore.install('https://chrome.google.com/webstore/detail/onkinoggpeamajngpakinabahkomjcmk', _this.onInstallSucess, _this.onInstallFail);
      /* eslint-enable */
    }, _this.onInstallSucess = function () {
      _this.props.ui.addNotification('Yeah! You have been installed maomao extension successfully.');
      setTimeout(function () {
        _this.props.store.checkEnvironment();
        _this.props.store.checkInstall();
        window.location.reload();
      }, 1000);
    }, _this.onInstallFail = function (error) {
      _this.props.ui.addNotification(error);
    }, _this.addNotification = function (msg) {
      _this.props.ui.addNotification(msg);
    }, _this.removeNotification = function (uuid) {
      _this.props.ui.removeNotification(uuid);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AppHeader, [{
    key: 'componentDidMount',

    /* global fetch */
    value: function componentDidMount() {
      var _this2 = this;

      _logger2.default.warn('AppHeader componentDidMount');
      if (_firebase2.default.apps.length === 0) {
        _firebase2.default.initializeApp(_firebaseCredentials.clientCredentials);
        _firebase2.default.auth().onAuthStateChanged(function (user) {
          _logger2.default.warn('firebase - onAuthStateChanged', user);
          if (user) {
            _logger2.default.warn('firebase - user', user);
            var photoURL = user.photoURL;

            return user.getIdToken().then(function (token) {
              if (_this2.props.store.userId < 0) {
                if (!user.isAnonymous) {
                  _this2.addNotification('Welcome, ' + user.displayName + '!');
                }
                _this2.props.ui.toggleSignIn(false);
                return fetch('/api/auth/login', {
                  method: 'POST',
                  // eslint-disable-next-line no-undef
                  headers: new Headers({ 'Content-Type': 'application/json' }),
                  credentials: 'same-origin',
                  body: (0, _stringify2.default)({ token: token })
                }).then(function (res) {
                  // register for new user
                  res.json().then(function (json) {
                    // register new user
                    _logger2.default.warn('logged-in user', json);
                    if (!user.isAnonymous) {
                      var _json$decodedToken = json.decodedToken,
                          email = _json$decodedToken.email,
                          name = _json$decodedToken.name,
                          picture = _json$decodedToken.picture,
                          _json$decodedToken$fi = _json$decodedToken.firebase,
                          sign_in_provider = _json$decodedToken$fi.sign_in_provider,
                          identities = _json$decodedToken$fi.identities;
                      /* eslint-disable camelcase */

                      _logger2.default.warn('sign_in_provider', sign_in_provider);
                      _logger2.default.warn('identities', identities);
                      var fb_user_id = identities['facebook.com'] && identities['facebook.com'][0];
                      var google_user_id = identities['google.com'] && identities['google.com'][0];
                      var user_email = identities['email'] && identities['email'][0];
                      if (sign_in_provider === 'google.com') {
                        if (!email) {
                          user.providerData.forEach(function (item) {
                            if (item.providerId === sign_in_provider) {
                              _this2.props.store.googleConnect({
                                email: item.email, name: name, picture: picture, google_user_id: google_user_id
                              }, function () {
                                var selectedTopics = _this2.props.ui.selectedTopics;

                                _this2.props.store.saveTopics(selectedTopics.map(function (item) {
                                  return item.topicId;
                                }));
                              });
                            }
                          });
                        } else {
                          _this2.props.store.googleConnect({
                            email: email, name: name, picture: picture, google_user_id: google_user_id
                          }, function () {
                            var selectedTopics = _this2.props.ui.selectedTopics;

                            _this2.props.store.saveTopics(selectedTopics.map(function (item) {
                              return item.topicId;
                            }));
                          });
                        }
                      } else if (sign_in_provider === 'facebook.com') {
                        if (!email) {
                          user.providerData.forEach(function (item) {
                            if (item.providerId === sign_in_provider) {
                              _this2.props.store.facebookConnect({
                                email: item.email, name: name, picture: picture, fb_user_id: fb_user_id
                              }, function () {
                                var selectedTopics = _this2.props.ui.selectedTopics;

                                _this2.props.store.saveTopics(selectedTopics.map(function (item) {
                                  return item.topicId;
                                }));
                              });
                            }
                          });
                        } else {
                          _this2.props.store.facebookConnect({
                            email: email, name: name, picture: picture, fb_user_id: fb_user_id
                          }, function () {
                            var selectedTopics = _this2.props.ui.selectedTopics;

                            _this2.props.store.saveTopics(selectedTopics.map(function (item) {
                              return item.topicId;
                            }));
                          });
                        }
                      } else if (sign_in_provider === 'password') {
                        _logger2.default.warn('found user email', user_email);
                        _logger2.default.warn('photoURL', photoURL);
                        // hack here, try to store intenal user
                        try {
                          var loggedUser = JSON.parse(photoURL);
                          _this2.props.store.retrylLoginForInternalUser(loggedUser);
                        } catch (error) {
                          _logger2.default.warn(error);
                        }
                      }
                    } else {
                      _this2.props.store.isLogin = true;
                    }
                  });
                });
              } else {
                _this2.props.store.isLogin = true;
              }
            });
          }
        });
      }

      this.props.store.checkInstall();
      var counter = 0;
      this.timer = setInterval(function () {
        _logger2.default.info('AppHeader componentDidMount setInterval');
        counter += 1;
        if (_this2.props.store.isChrome && !_this2.props.store.isMobile && counter < 10) {
          _this2.props.store.checkInstall();
          if (_this2.props.store.isInstalledOnChromeDesktop) {
            _logger2.default.warn('AppHeader clearInterval');
            _this2.setState({ isHide: true });
            clearInterval(_this2.timer);
          }
        } else {
          _logger2.default.warn('AppHeader clearInterval');
          clearInterval(_this2.timer);
        }
      }, 2 * 1000); // check mm extension has installed on every 2s
    }
  }, {
    key: 'componentWillReact',
    value: function componentWillReact() {
      _logger2.default.warn('AppHeader componentWillReact');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _logger2.default.warn('AppHeader componentWillUnmount');
      if (this.timer) {
        _logger2.default.warn('AppHeader clearInterval');
        clearInterval(this.timer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$store = this.props.store,
          isLogin = _props$store.isLogin,
          userId = _props$store.userId,
          user = _props$store.user,
          isInstalledOnChromeDesktop = _props$store.isInstalledOnChromeDesktop,
          isChrome = _props$store.isChrome,
          isMobile = _props$store.isMobile;
      var _props$ui = this.props.ui,
          showSignInModal = _props$ui.showSignInModal,
          title = _props$ui.title;

      return _react2.default.createElement(_nealReact.Navbar, { className: 'header-nav animated fadeInDown', brand: brand(), __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, _react2.default.createElement(_nealReact.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, _react2.default.createElement('a', { 'data-toggle': 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, _react2.default.createElement('i', { className: 'fa fa-briefcase fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }), _react2.default.createElement('span', { className: 'notifications-number notifications-hiring', __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, _react2.default.createElement('i', { className: 'fa fa-bullhorn', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), ' We\'re hiring !'), _react2.default.createElement('i', { className: 'fa fa-chevron-circle-down', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      })), _react2.default.createElement('ul', { className: 'dropdown-menu dropdown-hiring pull-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react2.default.createElement('li', { key: (0, _hash.guid)(), __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/hiring/?type=js', as: '/hiring-js', __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, _react2.default.createElement('a', { href: '/hiring-js', __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-right', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }), '  JavaScript / Node.JS Developer'))), _react2.default.createElement('li', { key: (0, _hash.guid)(), __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/hiring/?type=vp', as: '/hiring-vp', __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, _react2.default.createElement('a', { href: '/hiring-vp', __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-right', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }), '  Server & Platform Engineer / VP Engineering'))))), !isMobile && isChrome && !isInstalledOnChromeDesktop && _react2.default.createElement(_nealReact.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, _react2.default.createElement('button', { className: 'btn btn-addto', onClick: this.onOpenExtensionModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, ' ', _react2.default.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }), ' ADD TO CHROME')), isLogin && _react2.default.createElement(_nealReact.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, _react2.default.createElement('a', { onClick: this.openShareManagement, __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, _react2.default.createElement('i', { className: 'fa fa-share-alt fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, 'Share Management'))), _react2.default.createElement(_nealReact.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, isLogin && _react2.default.createElement('div', { className: 'dropdown account-dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, _react2.default.createElement('a', { className: 'dropdown-toggle', 'data-toggle': 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, _react2.default.createElement('img', { onError: this.noImage, className: 'image-account', src: avatar(user), alt: userId, width: '33', height: '33', __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      })), _react2.default.createElement('a', { className: 'link-logout-res', onClick: this.onLogout, __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, _react2.default.createElement('i', { className: 'fa fa-sign-out', __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, 'Sign Out')), _react2.default.createElement('ul', { className: 'dropdown-menu pull-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, user && user.name && _react2.default.createElement('div', { className: 'account-dropdown__identity account-dropdown__segment', __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, 'Signed in as ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, user.name, ' (', user.email, ')')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, _react2.default.createElement('button', { className: 'btn btn-logout', onClick: this.onLogout, __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, _react2.default.createElement('i', { className: 'fa fa-sign-out', __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }), ' Sign Out')))), !isLogin && _react2.default.createElement('button', { className: 'btn btn-login', onClick: this.showSignIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, _react2.default.createElement('i', { className: 'fa fa-sign-in', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }), ' Sign In'), _react2.default.createElement(_reactModal2.default, {
        isOpen: showSignInModal,
        onRequestClose: this.onClose,
        portalClassName: 'SignInModal',
        contentLabel: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react2.default.createElement('h2', { ref: 'subtitle', __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, title), _react2.default.createElement('div', { className: 'social-action', __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, _react2.default.createElement('div', { className: 'block-button', __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, _react2.default.createElement('a', { className: 'btn btn-social btn-facebook', onClick: this.onFacebookLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, _react2.default.createElement('i', { className: 'fa fa-facebook', __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }), ' ', title, ' with Facebook')), _react2.default.createElement('div', { className: 'block-button', __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, _react2.default.createElement('a', { className: 'btn btn-social btn-google', onClick: this.onGoogleLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, _react2.default.createElement('i', { className: 'fa fa-google', __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), ' ', title, ' with Google')), _react2.default.createElement('div', { className: 'block-button', __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, _react2.default.createElement('a', { className: 'btn btn-social btn-internal-lab', onClick: this.onInternalLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, _react2.default.createElement('i', { className: 'fa icon-internal-lab', __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }), ' Test Internal: New User'))))), _react2.default.createElement(_reactModal2.default, {
        isOpen: this.props.ui.showExtensionModal,
        onRequestClose: this.onCloseExtensionModal,
        portalClassName: 'InstallModal',
        style: customModalStyles,
        contentLabel: 'Install maomao', __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, _react2.default.createElement('div', { className: 'install-modal-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, _react2.default.createElement('div', { className: 'modal-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, _react2.default.createElement('h4', { className: 'modal-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, 'Install maomao')), _react2.default.createElement('div', { className: 'modal-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement('div', { className: 'install-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, _react2.default.createElement('img', { className: 'logo-image', src: '/static/images/maomao.png', alt: 'maomao', __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }), ' lets you share topics with friends'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement('img', { className: 'logo-image', src: '/static/images/maomao.png', alt: 'maomao', __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }), ' only shares what you tell it, when you tell it. '), _react2.default.createElement('button', { className: 'btn btn-install', type: 'button', onClick: this.inlineInstall, __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, 'Ok! Give me ', _react2.default.createElement('img', { className: 'logo-image', src: '/static/images/maomao.png', alt: 'maomao', __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      })))))));
    }
  }]);

  return AppHeader;
}(_react2.default.Component), _class2.propTypes = {
  isHome: _propTypes2.default.bool
}, _class2.defaultProps = {
  isHome: true
}, _temp2)) || _class) || _class) || _class);

exports.default = AppHeader;