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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareList/index.js';

/**
*
* ShareList
*
*/

var avatar = function avatar(user) {
  if (user && (user.picture || user.avatar)) {
    return user.picture || user.avatar;
  }
  return '/static/images/no-avatar.png';
};

var shareStat = function shareStat(friend, shareLists) {
  var isAll = friend.shares.filter(function (code) {
    return shareLists[code].type === 'all';
  }).length;
  var allTopics = friend.shares.filter(function (code) {
    return shareLists[code].type === 'topic';
  }).length;
  if (isAll) {
    return 'All';
  }
  return allTopics + ' topics';
};

var hasShareTopic = function hasShareTopic(friend, shareLists) {
  var isAll = friend.shares.filter(function (code) {
    return shareLists[code].type === 'all';
  }).length;
  var allTopics = friend.shares.filter(function (code) {
    return shareLists[code].type === 'topic';
  }).length;
  return isAll || allTopics;
};

var ShareList = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$PureComponent) {
  (0, _inherits3.default)(ShareList, _React$PureComponent);

  function ShareList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShareList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShareList.__proto__ || (0, _getPrototypeOf2.default)(ShareList)).call.apply(_ref, [this].concat(args))), _this), _this.noImage = function (evt) {
      evt.target.src = '/static/images/no-image.png';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShareList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$store = this.props.store,
          user = _props$store.user,
          userId = _props$store.userId;
      var _props$store$normaliz = this.props.store.normalizedData,
          _props$store$normaliz2 = _props$store$normaliz.entities,
          friendStreams = _props$store$normaliz2.friendStreams,
          shareLists = _props$store$normaliz2.shareLists,
          urls = _props$store$normaliz2.urls,
          shares_issued = _props$store$normaliz.result.shares_issued;

      _logger2.default.warn('ShareList friendStreams', friendStreams);
      _logger2.default.warn('ShareList shareLists', shareLists);
      var friends = _lodash2.default.filter(friendStreams, function (friend) {
        return hasShareTopic(friend, shareLists);
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('button', { className: 'btn btn-back', onClick: function onClick() {
          _this2.props.ui.backToStreams();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('div', { className: 'share-management bounceInRight animated', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', { id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', { className: 'card card-topic', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'card-header collapsed', role: 'tab', id: 'heading' + userId, 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapse' + userId, 'aria-expanded': 'true', 'aria-controls': 'collapse' + userId, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'card-header-cnt', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', { className: 'card-header-inner', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('a', { className: 'collapse-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('span', { className: 'directional-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('span', { className: 'share-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('img', { onError: this.noImage, className: 'share-object', src: avatar(user), alt: userId, width: '40', height: '40', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement('span', { className: 'share-name', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, ' Your sharing'))), _react2.default.createElement('div', { className: 'line-card', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', { className: 'line-direct share-line-left', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })))), _react2.default.createElement('div', { className: 'mix-detail', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('span', { className: 'three-dots', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, '...'))), _react2.default.createElement('div', { id: 'collapse' + userId, className: 'collapse', role: 'tabpanel', 'aria-labelledby': 'heading' + userId, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('div', { className: 'card-block', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      /* eslint-disable camelcase */
      shares_issued && shares_issued.length === 0 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, ' You have shared nothing with your friends'), shares_issued && _lodash2.default.map(shares_issued, function (receiver) {
        return (receiver.share_all || receiver.topic_id) && _react2.default.createElement('ul', { key: 'share-detail-' + receiver.email + '-' + receiver.share_code, className: receiver.source_user_deactivated ? 'timeline timeline-pause timeline-horizontal' : 'timeline timeline-horizontal', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement('li', { className: 'timeline-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('img', { onError: _this2.noImage, className: 'share-object', src: avatar(user), alt: userId, width: '40', height: '40', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }))), _react2.default.createElement('li', { className: 'timeline-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement('i', { className: 'fa ' + (receiver.topic_id ? 'fa-list' : 'fa-share-alt'), 'aria-hidden': 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        })), receiver.share_all && _react2.default.createElement('div', { className: 'timeline-panel', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement('span', { className: 'share-all', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, 'All browsing history')), receiver.topic_id && _react2.default.createElement('div', { className: 'timeline-panel', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react2.default.createElement('div', { className: 'tags-topic', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react2.default.createElement('span', { className: 'tags ' + (0, _helper.tagColor)(receiver.topic_name), rel: 'tag', __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react2.default.createElement('span', { className: 'text-tag', __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, receiver.topic_name))))), _react2.default.createElement('li', { className: 'timeline-item share-line-left', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, _react2.default.createElement('img', { onError: _this2.noImage, className: 'object-badge', src: avatar(receiver), alt: receiver.fullname, width: '51', height: '51', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        })), _react2.default.createElement('div', { className: 'timeline-panel', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, _react2.default.createElement('div', { className: 'timeline-panel', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react2.default.createElement('span', { className: 'user-info-share', __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, receiver.fullname), _react2.default.createElement('a', { href: '#', className: 'btn btn-related', __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, receiver.source_user_deactivated ? 'Reshare' : 'Unshare')))));
      })))), friends && _lodash2.default.map(friends, function (friend) {
        return _react2.default.createElement('div', { key: 'friend-' + friend.user_id, className: 'card card-topic', __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, _react2.default.createElement('div', { className: 'card-header collapsed', role: 'tab', id: 'heading' + friend.user_id, 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapse' + friend.user_id, 'aria-expanded': 'false', 'aria-controls': 'collapse' + friend.user_id, __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement('div', { className: 'card-header-cnt', __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement('div', { className: 'card-header-inner', __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react2.default.createElement('a', { className: 'collapse-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, _react2.default.createElement('span', { className: 'directional-user', __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, _react2.default.createElement('span', { className: 'share-image', __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, _react2.default.createElement('img', { onError: _this2.noImage, className: 'share-object', src: avatar(friend), alt: friend.user_id, width: '40', height: '40', __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        })), _react2.default.createElement('span', { className: 'share-name', __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, ' ', friend.fullname, ' '))), _react2.default.createElement('div', { className: 'line-card', __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, _react2.default.createElement('div', { className: 'line-direct share-line-left', __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        })))), _react2.default.createElement('div', { className: 'mix-detail', __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react2.default.createElement('span', { className: 'topic-value', __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, '(', shareStat(friend, shareLists), ')'))), _react2.default.createElement('div', { id: 'collapse' + friend.user_id, className: 'collapse', role: 'tabpanel', 'aria-labelledby': 'heading' + friend.user_id, __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement('div', { className: 'card-block', __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, friend.shares && _lodash2.default.map(friend.shares, function (code) {
          var item = shareLists[code];
          return item.type !== 'url' && _react2.default.createElement('ul', { key: 'share-' + code + '-' + friend.user_id, className: item.target_user_deactivated ? 'timeline timeline-pause timeline-horizontal' : 'timeline timeline-horizontal', __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            }
          }, _react2.default.createElement('li', { className: 'timeline-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            }
          }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          }, _react2.default.createElement('img', { onError: _this2.noImage, className: 'share-object', src: avatar(friend), alt: friend.user_id, width: '51', height: '51', __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          })), _react2.default.createElement('div', { className: 'timeline-panel', __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          }, _react2.default.createElement('a', { href: '#', className: 'btn btn-unfollow', __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }, item.target_user_deactivated ? 'Follow' : 'Unfollow'))), _react2.default.createElement('li', { className: 'timeline-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            }
          }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }, _react2.default.createElement('i', { className: 'fa ' + (item.type === 'topic' ? 'fa-list' : 'fa-share-alt'), 'aria-hidden': 'true', __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          })), item.type === 'all' && _react2.default.createElement('div', { className: 'timeline-panel', __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            }
          }, _react2.default.createElement('span', { className: 'share-all', __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            }
          }, 'All browsing history')), item.topic_name && _react2.default.createElement('div', { className: 'timeline-panel', __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }, _react2.default.createElement('div', { className: 'tags-topic', __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          }, _react2.default.createElement('span', { className: 'tags ' + (0, _helper.tagColor)(item.topic_name), rel: 'tag', __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            }
          }, _react2.default.createElement('span', { className: 'text-tag', __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            }
          }, item.topic_name)))), item.type === 'url' && _react2.default.createElement('div', { className: 'timeline-panel', __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            }
          }, _react2.default.createElement('span', { className: 'name-url', __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            }
          }, urls[item.urls[0]].title))), _react2.default.createElement('li', { className: 'timeline-item share-line-left', __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            }
          }, _react2.default.createElement('div', { className: 'timeline-badge', __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            }
          }, _react2.default.createElement('img', { onError: _this2.noImage, className: 'share-object', src: avatar(user), alt: userId, width: '51', height: '51', __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            }
          }))));
        }))));
      }))));
    }
  }]);

  return ShareList;
}(_react2.default.PureComponent)) || _class) || _class) || _class);

exports.default = ShareList;