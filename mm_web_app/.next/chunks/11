
          window.__NEXT_REGISTER_CHUNK('------components-ShareList-17b0d14e-8324-400d-bf89-b620f8a56b3a.js', function() {
            webpackJsonp([11],{

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagColor = tagColor;
var MAX_COLORS = 12;

function tagColor(name) {
  return "tags-color-" + (name.length % MAX_COLORS + 1);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/utils/helper.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/utils/helper.js"); } } })();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(659);

var _lodash = __webpack_require__(705);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(595);

var _logger2 = _interopRequireDefault(_logger);

var _helper = __webpack_require__(1181);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/ShareList/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/ShareList/index.js"); } } })();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLy0tLS0tLWNvbXBvbmVudHMtU2hhcmVMaXN0LTE3YjBkMTRlLTgzMjQtNDAwZC1iZjg5LWI2MjBmOGE1NmIzYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2hlbHBlci5qcz80N2VlN2JhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmVMaXN0L2luZGV4LmpzP2UwMDQ0ODIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTUFYX0NPTE9SUyA9IDEyXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdDb2xvciAobmFtZSkge1xuICByZXR1cm4gYHRhZ3MtY29sb3ItJHsobmFtZS5sZW5ndGggJSBNQVhfQ09MT1JTKSArIDF9YFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvaGVscGVyLmpzIiwiLyoqXG4qXG4qIFNoYXJlTGlzdFxuKlxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcidcbmltcG9ydCB7IHRhZ0NvbG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJ1xuXG5jb25zdCBhdmF0YXIgPSAodXNlcikgPT4ge1xuICBpZiAodXNlciAmJiAodXNlci5waWN0dXJlIHx8IHVzZXIuYXZhdGFyKSkge1xuICAgIHJldHVybiB1c2VyLnBpY3R1cmUgfHwgdXNlci5hdmF0YXJcbiAgfVxuICByZXR1cm4gJy9zdGF0aWMvaW1hZ2VzL25vLWF2YXRhci5wbmcnXG59XG5cbmNvbnN0IHNoYXJlU3RhdCA9IChmcmllbmQsIHNoYXJlTGlzdHMpID0+IHtcbiAgY29uc3QgaXNBbGwgPSBmcmllbmQuc2hhcmVzLmZpbHRlcihjb2RlID0+IHNoYXJlTGlzdHNbY29kZV0udHlwZSA9PT0gJ2FsbCcpLmxlbmd0aFxuICBjb25zdCBhbGxUb3BpY3MgPSBmcmllbmQuc2hhcmVzLmZpbHRlcihjb2RlID0+IHNoYXJlTGlzdHNbY29kZV0udHlwZSA9PT0gJ3RvcGljJykubGVuZ3RoXG4gIGlmIChpc0FsbCkge1xuICAgIHJldHVybiAnQWxsJ1xuICB9XG4gIHJldHVybiBgJHthbGxUb3BpY3N9IHRvcGljc2Bcbn1cblxuY29uc3QgaGFzU2hhcmVUb3BpYyA9IChmcmllbmQsIHNoYXJlTGlzdHMpID0+IHtcbiAgY29uc3QgaXNBbGwgPSBmcmllbmQuc2hhcmVzLmZpbHRlcihjb2RlID0+IHNoYXJlTGlzdHNbY29kZV0udHlwZSA9PT0gJ2FsbCcpLmxlbmd0aFxuICBjb25zdCBhbGxUb3BpY3MgPSBmcmllbmQuc2hhcmVzLmZpbHRlcihjb2RlID0+IHNoYXJlTGlzdHNbY29kZV0udHlwZSA9PT0gJ3RvcGljJykubGVuZ3RoXG4gIHJldHVybiBpc0FsbCB8fCBhbGxUb3BpY3Ncbn1cblxuQGluamVjdCgnc3RvcmUnKVxuQGluamVjdCgndWknKVxuQG9ic2VydmVyXG5jbGFzcyBTaGFyZUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgbm9JbWFnZSA9IChldnQpID0+IHtcbiAgICBldnQudGFyZ2V0LnNyYyA9ICcvc3RhdGljL2ltYWdlcy9uby1pbWFnZS5wbmcnXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHVzZXIsIHVzZXJJZCB9ID0gdGhpcy5wcm9wcy5zdG9yZVxuICAgIGNvbnN0IHsgZW50aXRpZXM6IHsgZnJpZW5kU3RyZWFtcywgc2hhcmVMaXN0cywgdXJscyB9LCByZXN1bHQ6IHsgc2hhcmVzX2lzc3VlZCB9IH0gPSB0aGlzLnByb3BzLnN0b3JlLm5vcm1hbGl6ZWREYXRhXG4gICAgbG9nZ2VyLndhcm4oJ1NoYXJlTGlzdCBmcmllbmRTdHJlYW1zJywgZnJpZW5kU3RyZWFtcylcbiAgICBsb2dnZXIud2FybignU2hhcmVMaXN0IHNoYXJlTGlzdHMnLCBzaGFyZUxpc3RzKVxuICAgIGNvbnN0IGZyaWVuZHMgPSBfLmZpbHRlcihmcmllbmRTdHJlYW1zLCBmcmllbmQgPT4gaGFzU2hhcmVUb3BpYyhmcmllbmQsIHNoYXJlTGlzdHMpKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1iYWNrJyBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMudWkuYmFja1RvU3RyZWFtcygpIH19PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYW5nbGUtbGVmdCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhcmUtbWFuYWdlbWVudCBib3VuY2VJblJpZ2h0IGFuaW1hdGVkJz5cbiAgICAgICAgICA8ZGl2IGlkPSdhY2NvcmRpb24nIHJvbGU9J3RhYmxpc3QnIGFyaWEtbXVsdGlzZWxlY3RhYmxlPSd0cnVlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGNhcmQtdG9waWMnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXIgY29sbGFwc2VkJyByb2xlPSd0YWInIGlkPXtgaGVhZGluZyR7dXNlcklkfWB9IGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb24nIGhyZWY9e2AjY29sbGFwc2Uke3VzZXJJZH1gfSBhcmlhLWV4cGFuZGVkPSd0cnVlJyBhcmlhLWNvbnRyb2xzPXtgY29sbGFwc2Uke3VzZXJJZH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXItY250Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlci1pbm5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY29sbGFwc2UtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGlyZWN0aW9uYWwtdXNlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoYXJlLWltYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkVycm9yPXt0aGlzLm5vSW1hZ2V9IGNsYXNzTmFtZT0nc2hhcmUtb2JqZWN0JyBzcmM9e2F2YXRhcih1c2VyKX0gYWx0PXt1c2VySWR9IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2hhcmUtbmFtZSc+IFlvdXIgc2hhcmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUtY2FyZCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUtZGlyZWN0IHNoYXJlLWxpbmUtbGVmdCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWl4LWRldGFpbCc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RocmVlLWRvdHMnPi4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBZb3VyIHNoYXJpbmcgKi99XG4gICAgICAgICAgICAgIDxkaXYgaWQ9e2Bjb2xsYXBzZSR7dXNlcklkfWB9IGNsYXNzTmFtZT0nY29sbGFwc2UnIHJvbGU9J3RhYnBhbmVsJyBhcmlhLWxhYmVsbGVkYnk9e2BoZWFkaW5nJHt1c2VySWR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgeyAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgICAgICAgICAgICAgICAgc2hhcmVzX2lzc3VlZCAmJiBzaGFyZXNfaXNzdWVkLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBZb3UgaGF2ZSBzaGFyZWQgbm90aGluZyB3aXRoIHlvdXIgZnJpZW5kczwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge3NoYXJlc19pc3N1ZWQgJiYgXy5tYXAoc2hhcmVzX2lzc3VlZCwgcmVjZWl2ZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIChyZWNlaXZlci5zaGFyZV9hbGwgfHwgcmVjZWl2ZXIudG9waWNfaWQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17YHNoYXJlLWRldGFpbC0ke3JlY2VpdmVyLmVtYWlsfS0ke3JlY2VpdmVyLnNoYXJlX2NvZGV9YH0gY2xhc3NOYW1lPXtyZWNlaXZlci5zb3VyY2VfdXNlcl9kZWFjdGl2YXRlZCA/ICd0aW1lbGluZSB0aW1lbGluZS1wYXVzZSB0aW1lbGluZS1ob3Jpem9udGFsJyA6ICd0aW1lbGluZSB0aW1lbGluZS1ob3Jpem9udGFsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0aW1lbGluZS1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLWJhZGdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uRXJyb3I9e3RoaXMubm9JbWFnZX0gY2xhc3NOYW1lPSdzaGFyZS1vYmplY3QnIHNyYz17YXZhdGFyKHVzZXIpfSBhbHQ9e3VzZXJJZH0gd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlY2VpdmVyLnNvdXJjZV91c2VyX2RlYWN0aXZhdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndXNlci1pbmZvLXNoYXJlJz5IYXMgYmVlbiBwYXVzZWQgYnkge3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RpbWVsaW5lLWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtYmFkZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhICR7cmVjZWl2ZXIudG9waWNfaWQgPyAnZmEtbGlzdCcgOiAnZmEtc2hhcmUtYWx0J31gfSBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlci5zaGFyZV9hbGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaGFyZS1hbGwnPkFsbCBicm93c2luZyBoaXN0b3J5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlci50b3BpY19pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1wYW5lbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFncy10b3BpYyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRhZ3MgJHt0YWdDb2xvcihyZWNlaXZlci50b3BpY19uYW1lKX1gfSByZWw9J3RhZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXRhZyc+e3JlY2VpdmVyLnRvcGljX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RpbWVsaW5lLWl0ZW0gc2hhcmUtbGluZS1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLWJhZGdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uRXJyb3I9e3RoaXMubm9JbWFnZX0gY2xhc3NOYW1lPSdvYmplY3QtYmFkZ2UnIHNyYz17YXZhdGFyKHJlY2VpdmVyKX0gYWx0PXtyZWNlaXZlci5mdWxsbmFtZX0gd2lkdGg9JzUxJyBoZWlnaHQ9JzUxJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd1c2VyLWluZm8tc2hhcmUnPntyZWNlaXZlci5mdWxsbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2J0biBidG4tcmVsYXRlZCc+e3JlY2VpdmVyLnNvdXJjZV91c2VyX2RlYWN0aXZhdGVkID8gJ1Jlc2hhcmUnIDogJ1Vuc2hhcmUnfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ZyaWVuZHMgJiYgXy5tYXAoZnJpZW5kcywgZnJpZW5kID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2BmcmllbmQtJHtmcmllbmQudXNlcl9pZH1gfSBjbGFzc05hbWU9J2NhcmQgY2FyZC10b3BpYyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyIGNvbGxhcHNlZCcgcm9sZT0ndGFiJyBpZD17YGhlYWRpbmcke2ZyaWVuZC51c2VyX2lkfWB9IGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb24nIGhyZWY9e2AjY29sbGFwc2Uke2ZyaWVuZC51c2VyX2lkfWB9IGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJyBhcmlhLWNvbnRyb2xzPXtgY29sbGFwc2Uke2ZyaWVuZC51c2VyX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyLWNudCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlci1pbm5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjb2xsYXBzZS10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RpcmVjdGlvbmFsLXVzZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoYXJlLWltYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uRXJyb3I9e3RoaXMubm9JbWFnZX0gY2xhc3NOYW1lPSdzaGFyZS1vYmplY3QnIHNyYz17YXZhdGFyKGZyaWVuZCl9IGFsdD17ZnJpZW5kLnVzZXJfaWR9IHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NoYXJlLW5hbWUnPiB7ZnJpZW5kLmZ1bGxuYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUtZGlyZWN0IHNoYXJlLWxpbmUtbGVmdCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaXgtZGV0YWlsJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0b3BpYy12YWx1ZSc+KHtzaGFyZVN0YXQoZnJpZW5kLCBzaGFyZUxpc3RzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YGNvbGxhcHNlJHtmcmllbmQudXNlcl9pZH1gfSBjbGFzc05hbWU9J2NvbGxhcHNlJyByb2xlPSd0YWJwYW5lbCcgYXJpYS1sYWJlbGxlZGJ5PXtgaGVhZGluZyR7ZnJpZW5kLnVzZXJfaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgIHtmcmllbmQuc2hhcmVzICYmIF8ubWFwKGZyaWVuZC5zaGFyZXMsIGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzaGFyZUxpc3RzW2NvZGVdXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgIT09ICd1cmwnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17YHNoYXJlLSR7Y29kZX0tJHtmcmllbmQudXNlcl9pZH1gfSBjbGFzc05hbWU9e2l0ZW0udGFyZ2V0X3VzZXJfZGVhY3RpdmF0ZWQgPyAndGltZWxpbmUgdGltZWxpbmUtcGF1c2UgdGltZWxpbmUtaG9yaXpvbnRhbCcgOiAndGltZWxpbmUgdGltZWxpbmUtaG9yaXpvbnRhbCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndGltZWxpbmUtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1iYWRnZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkVycm9yPXt0aGlzLm5vSW1hZ2V9IGNsYXNzTmFtZT0nc2hhcmUtb2JqZWN0JyBzcmM9e2F2YXRhcihmcmllbmQpfSBhbHQ9e2ZyaWVuZC51c2VyX2lkfSB3aWR0aD0nNTEnIGhlaWdodD0nNTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nYnRuIGJ0bi11bmZvbGxvdyc+e2l0ZW0udGFyZ2V0X3VzZXJfZGVhY3RpdmF0ZWQgPyAnRm9sbG93JyA6ICdVbmZvbGxvdyd9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0aW1lbGluZS1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLWJhZGdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSAke2l0ZW0udHlwZSA9PT0gJ3RvcGljJyA/ICdmYS1saXN0JyA6ICdmYS1zaGFyZS1hbHQnfWB9IGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ2FsbCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzaGFyZS1hbGwnPkFsbCBicm93c2luZyBoaXN0b3J5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvcGljX25hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhZ3MtdG9waWMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0YWdzICR7dGFnQ29sb3IoaXRlbS50b3BpY19uYW1lKX1gfSByZWw9J3RhZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXRhZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50b3BpY19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ3VybCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtcGFuZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYW1lLXVybCc+e3VybHNbaXRlbS51cmxzWzBdXS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0aW1lbGluZS1pdGVtIHNoYXJlLWxpbmUtbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1iYWRnZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkVycm9yPXt0aGlzLm5vSW1hZ2V9IGNsYXNzTmFtZT0nc2hhcmUtb2JqZWN0JyBzcmM9e2F2YXRhcih1c2VyKX0gYWx0PXt1c2VySWR9IHdpZHRoPSc1MScgaGVpZ2h0PSc1MScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRhcmdldF91c2VyX2RlYWN0aXZhdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLXBhbmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndXNlci1pbmZvLXNoYXJlJz5IYXMgYmVlbiBwYXVzZWQgYnkge3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZUxpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2hhcmVMaXN0L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFYQTs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBVUE7QUFWQTtBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFZQTtBQVpBOztBQTVDQTtBQWlFQTs7Ozs7QUExTEE7QUFDQTtBQTRMQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
          })
        