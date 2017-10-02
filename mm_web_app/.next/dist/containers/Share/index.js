'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _ShareTopic = require('../../components/ShareTopic');

var _ShareTopic2 = _interopRequireDefault(_ShareTopic);

var _mobx = require('mobx');

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _google = require('../../utils/google');

var _share = require('../../utils/share');

var _fb = require('../../utils/fb');

var _fb2 = _interopRequireDefault(_fb);

var _popup = require('../../utils/popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/containers/Share/index.js';

/**
*
* Share
*
*/

var SITE_URL = 'https://maomaoweb.azurewebsites.net';
var FB_APP_ID = '386694335037120';

var parseShareCode = function parseShareCode(codes, urlId, shareTopics) {
  _logger2.default.warn('parseShareCode', codes, urlId, shareTopics);
  var findUrlCode = codes.sites.find(function (item) {
    return item && item.url_id === urlId;
  });
  var topics = {};
  if (shareTopics && shareTopics.length) {
    shareTopics.forEach(function (topic) {
      var findCode = codes.topics.find(function (item) {
        return item && item.id === topic.topic_id;
      });
      if (findCode) {
        topics[topic.id] = findCode.share_code;
      }
    });
  }
  return (0, _extends3.default)({
    all: codes.all,
    site: findUrlCode && findUrlCode.share_code || ''
  }, topics);
};

var Share = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Share, _React$Component);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Share.__proto__ || (0, _getPrototypeOf2.default)(Share)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      type: 'Google',
      shareOption: 'site',
      currentStep: 1
    }, _this.changeShareType = function (type, shareOption, currentStep) {
      if (type.indexOf('Facebook') !== -1) {
        var _this$props$ui = _this.props.ui,
            shareUrlId = _this$props$ui.shareUrlId,
            shareTopics = _this$props$ui.shareTopics;

        var code = parseShareCode((0, _mobx.toJS)(_this.props.store.codes), shareUrlId, shareTopics);
        var url = SITE_URL + '/' + code[shareOption];
        var closePopupUrl = SITE_URL + '/static/success.html';
        if (type === 'Facebook') {
          var src = 'https://www.facebook.com/dialog/share?app_id=' + FB_APP_ID + '&display=popup&href=' + encodeURI(url) + '&redirect_uri=' + encodeURI(closePopupUrl) + '&hashtag=' + encodeURI('#maomao.rocks');
          _logger2.default.warn('shareUrl', src);
          (0, _popup2.default)(src);
        } else {
          var _src = 'https://www.facebook.com/dialog/send?app_id=' + FB_APP_ID + '&display=popup&link=' + encodeURI(url) + '&redirect_uri=' + encodeURI(closePopupUrl);
          _logger2.default.warn('shareUrl', _src);
          (0, _popup2.default)(_src);
        }
      } else {
        _this.setState({
          type: type, shareOption: shareOption, currentStep: currentStep
        });
      }
    }, _this.fetchGoogleContacts = function () {
      (0, _google.checkGoogleAuth)().then(function (data) {
        // download data
        var googleToken = data.googleToken,
            googleUserId = data.googleUserId;

        _logger2.default.warn('checkGoogleAuth result', googleToken, data);
        _this.props.ui.addNotification('Loading google contacts');
        return (0, _google.fetchContacts)(googleToken, 1000).then(function (result) {
          result.json().then(function (resp) {
            _this.props.store.saveGoogleContacts(resp.contacts, googleToken, googleUserId);
          });
        });
      }).catch(function (error) {
        // Try to logout and remove cache token
        _this.props.ui.addNotification('Oops! Something went wrong: ' + error.message);
        _logger2.default.warn(error);
      });
    }, _this.sendInvitations = function (name, email, topic, url) {
      var _this$props$store$use = _this.props.store.user,
          fullName = _this$props$store$use.name,
          fromEmail = _this$props$store$use.email;

      _logger2.default.warn('sendInvitations', fullName, fromEmail, name, email, topic, url);
      _this.props.ui.addNotification('Sending invitations...');
      /* global fetch */
      fetch('/api/email', {
        method: 'POST',
        // eslint-disable-next-line no-undef
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: (0, _stringify2.default)({ fromEmail: fromEmail, fullName: fullName, name: name, email: email, topic: topic, url: url })
      }).then(function () {
        return _this.props.ui.addNotification('Sent invitation to: ' + email);
      }).catch(function (error) {
        return _this.props.ui.addNotification('Oops! Something went wrong: ' + error.message);
      });
    }, _this.onBack = function (evt) {
      evt.preventDefault();
      _this.props.ui.backToStreams();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Share, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.store.checkGoogleContacts();
      var _props$store = this.props.store,
          userId = _props$store.userId,
          userHash = _props$store.userHash,
          _props$store$codes = _props$store.codes,
          sites = _props$store$codes.sites,
          topics = _props$store$codes.topics,
          all = _props$store$codes.all;
      var _props$ui = this.props.ui,
          shareUrlId = _props$ui.shareUrlId,
          shareTopics = _props$ui.shareTopics;

      _logger2.default.warn('Share componentDidMount');

      var findUrlCode = sites.find(function (item) {
        return item && item.url_id === shareUrlId;
      });

      if (!findUrlCode) {
        (0, _share.shareThisSite)(userId, userHash, shareUrlId).then(function (result) {
          var code = result.data.share_code;

          (0, _fb2.default)(SITE_URL + '/' + code);
          _this2.props.store.saveShareCode('site', (0, _extends3.default)({}, result.data, { url_id: shareUrlId }));
        });
      }

      if (!all) {
        (0, _share.shareAll)(userId, userHash).then(function (result) {
          var code = result.data.share_code;

          (0, _fb2.default)(SITE_URL + '/' + code);
          _this2.props.store.saveShareCode('all', code);
        });
      }

      if (shareTopics && shareTopics.length) {
        shareTopics.forEach(function (topic) {
          var findTopicCode = topics.find(function (item) {
            return item && item.id === topic.topic_id;
          });
          if (!findTopicCode) {
            (0, _share.shareTheTopic)(userId, userHash, topic.topic_id).then(function (result) {
              var code = result.data.share_code;

              (0, _fb2.default)(SITE_URL + '/' + code);
              _this2.props.store.saveShareCode('topic', (0, _extends3.default)({}, result.data, { id: topic.topic_id, name: topic.name }));
            });
          }
        });
      }

      this.setState({
        shareOption: this.props.ui.shareTopics[0].id,
        currentStep: 2
      });
    }
  }, {
    key: 'componentWillReact',
    value: function componentWillReact() {
      _logger2.default.warn('Share componentWillReact');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$ui2 = this.props.ui,
          shareUrlId = _props$ui2.shareUrlId,
          shareTopics = _props$ui2.shareTopics;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('button', { className: 'btn btn-back', onClick: this.onBack, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })), _react2.default.createElement('div', { className: 'share-management bounceInRight animated', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('div', { className: 'block-back', __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, ' Share your streams with friend ')), _react2.default.createElement('div', { className: 'container centering-element', __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(_ShareTopic2.default, {
        type: this.state.type,
        shareOption: this.state.shareOption,
        currentStep: this.state.currentStep,
        topics: this.props.ui.shareTopics,
        code: parseShareCode((0, _mobx.toJS)(this.props.store.codes), shareUrlId, shareTopics),
        sendEmail: this.sendInvitations,
        changeShareType: this.changeShareType,
        accessGoogleContacts: this.fetchGoogleContacts,
        contacts: (0, _mobx.toJS)(this.props.store.contacts),
        notify: this.props.ui.addNotification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }))));
    }
  }]);

  return Share;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = Share;