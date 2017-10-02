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

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/FilterSearch/index.js',
    _dec,
    _dec2,
    _class;

/**
*
* FriendStreams
*
*/

var avatar = function avatar(user) {
  if (user && (user.picture || user.avatar)) {
    return user.picture || user.avatar;
  }
  return '/static/images/no-avatar.png';
};

var getSuggestions = function getSuggestions(value, users, firstLevelTopics) {
  if (value === '' || value.length === 0) {
    return [];
  }

  var userOptions = {
    include: ['matches', 'score'],
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['fullname']
  };

  var sections = [];
  var fuseUser = new _fuse2.default(users, userOptions);
  sections.push({
    title: 'User',
    data: fuseUser.search(value)
  });

  var topicOtions = {
    include: ['matches', 'score'],
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name']
  };
  var fuseTopic = new _fuse2.default(firstLevelTopics, topicOtions);
  sections.push({
    title: 'Stream',
    data: fuseTopic.search(value)
  });

  return sections.filter(function (section) {
    return section.data.length > 0;
  });
};

var getSectionSuggestions = function getSectionSuggestions(section) {
  return section.data;
};

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.name || suggestion.fullname || suggestion.title;
};

var renderSuggestion = function renderSuggestion(suggestion) {
  if (suggestion.name) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, suggestion.name);
  }
  return _react2.default.createElement('div', { className: 'search-media', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, _react2.default.createElement('div', { className: 'search-media-left', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, _react2.default.createElement('img', { onError: function onError(ev) {
      ev.target.src = '/static/images/no-image.png';
    }, src: suggestion.avatar, className: 'img-object', alt: '', width: '40', height: '40', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  })), _react2.default.createElement('div', { className: 'search-media-body', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _react2.default.createElement('span', { className: 'full-name', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, suggestion.fullname)));
};

var renderInputComponent = function renderInputComponent(inputProps) {
  return _react2.default.createElement(_reactDebounceInput2.default, (0, _extends3.default)({
    className: 'search-box-list',
    minLength: 2,
    debounceTimeout: 200
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }));
};

var renderSectionTitle = function renderSectionTitle(section) {
  return _react2.default.createElement('p', { className: 'search-box-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, section.title);
};

var ratingCount = function ratingCount(urls, owners, rate) {
  var counter = 0;
  _lodash2.default.forEach(urls, function (url) {
    if (owners.find(function (owner) {
      return owner.rate === rate && owner.url_id === url.url_id;
    })) {
      counter += 1;
    }
  });
  return counter;
};

var urlsCount = function urlsCount(topic, filterByUser) {
  if (filterByUser.length) {
    var urlIds = _lodash2.default.flatMap((0, _mobx.toJS)(filterByUser), 'value');
    return _lodash2.default.intersection(urlIds, topic.urlIds).length;
  }
  return topic.urlIds.length;
};

var FilterSearch = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(FilterSearch, _React$Component);

  function FilterSearch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FilterSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FilterSearch.__proto__ || (0, _getPrototypeOf2.default)(FilterSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      suggestions: []
    }, _this.onSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;

      _logger2.default.warn('onSuggestionsFetchRequested');
      var _this$props$store = _this.props.store,
          users = _this$props$store.users,
          firstLevelTopics = _this$props$store.firstLevelTopics;

      _this.setState({ suggestions: getSuggestions(value, users, firstLevelTopics) });
    }, _this.onSuggestionsClearRequested = function () {
      _logger2.default.warn('onSuggestionsClearRequested');
      _this.setState({ suggestions: [] });
    }, _this.onChange = function (event, _ref3) {
      var newValue = _ref3.newValue,
          method = _ref3.method;

      _logger2.default.warn('onChange newValue, method', newValue, method);
      if (method === 'click' || method === 'enter') {
        var _this$props$store2 = _this.props.store,
            users = _this$props$store2.users,
            firstLevelTopics = _this$props$store2.firstLevelTopics;

        var selected = getSuggestions(newValue, users, firstLevelTopics);
        _logger2.default.warn('selected', selected);
        if (selected && selected.length > 0) {
          if (selected[0].title === 'User') {
            _this.props.ui.selectUser(selected[0].data[0]);
          } else {
            _this.props.ui.selectTopic(selected[0].data[0]);
          }
          _this.setState({
            value: ''
          });
        }
      } else {
        _this.setState({
          value: newValue
        });
      }
    }, _this.noImage = function (evt) {
      evt.target.src = '/static/images/no-image.png';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FilterSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          suggestions = _state.suggestions;
      var _props = this.props,
          sortedUrls = _props.sortedUrls,
          owners = _props.owners;

      var inputProps = {
        placeholder: 'Search...',
        value: value,
        onChange: this.onChange
      };

      var _toJS = (0, _mobx.toJS)(this.props.store),
          users = _toJS.users,
          firstLevelTopics = _toJS.firstLevelTopics,
          userId = _toJS.userId;

      var _props$ui = this.props.ui,
          filterByTopic = _props$ui.filterByTopic,
          filterByUser = _props$ui.filterByUser,
          rating = _props$ui.rating,
          sortBy = _props$ui.sortBy,
          sortDirection = _props$ui.sortDirection,
          onlyMe = _props$ui.onlyMe;

      _logger2.default.warn('FilterSearch render', users, firstLevelTopics, userId, filterByUser);

      return _react2.default.createElement('nav', { className: 'navbar', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement('div', { className: 'nav navbar-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement('div', { className: 'switch-responsive', __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement('div', { className: 'switch-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement('div', { className: 'checkbox__styled', __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement('input', { onChange: function onChange() {
          return _this2.props.ui.toggleOnlyMe(userId, users);
        }, type: 'checkbox', className: 'checkbox__styled__input', id: 'checkbox-mobile-only-me', name: 'only-me-mobile', value: userId, checked: onlyMe, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), _react2.default.createElement('label', { className: 'checkbox__styled__label', htmlFor: 'checkbox-mobile-only-me', __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, 'Only me'))), _react2.default.createElement('div', { className: 'switch-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement('button', { className: 'btn btn-search navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#toolbar-search', 'aria-expanded': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement('i', { className: 'fa fa-search', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }))), _react2.default.createElement('div', { className: 'switch-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement('button', { className: 'btn btn-navicon navbar-toggler collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#toolbar-sort', 'aria-expanded': 'false', __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement('i', { className: 'fa fa-gear', __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      })))), _react2.default.createElement('div', { id: 'toolbar-search', className: 'widget-form collapse', 'aria-expanded': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react2.default.createElement('div', { className: 'checkbox__styled', __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement('input', { onChange: function onChange() {
          return _this2.props.ui.toggleOnlyMe(userId, users);
        }, type: 'checkbox', className: 'checkbox__styled__input', id: 'checkbox-only-me', name: 'only-me', value: userId, checked: onlyMe, __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), _react2.default.createElement('label', { className: 'checkbox__styled__label', htmlFor: 'checkbox-only-me', __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, 'Only me')), _react2.default.createElement('div', { className: 'input-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement('div', { className: 'input-group-suggest', __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react2.default.createElement('div', { className: 'search-box-drop', __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react2.default.createElement('ul', { className: 'search-box-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, filterByTopic.map(function (item) {
        return _react2.default.createElement('li', { className: (0, _helper.tagColor)(item.label), key: 'filter-topic-' + item.label, __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          }
        }, _react2.default.createElement('span', { className: 'text-topic', __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        }, item.label), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
            _this2.props.ui.removeTopic(item);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }, _react2.default.createElement('i', { className: 'fa fa-remove', 'aria-hidden': 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          }
        })));
      }), filterByUser.map(function (item) {
        return _react2.default.createElement('li', { key: 'filter-user-' + item.label, className: 'search-item tags-color-1', __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, _react2.default.createElement('div', { className: 'search-media', __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }, _react2.default.createElement('div', { className: 'search-media-left', __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }, _react2.default.createElement('img', { onError: _this2.noImage, src: item.avatar || '/static/images/no-image.png', alt: item.label, className: 'img-object', width: '40', height: '40', __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        })), _react2.default.createElement('div', { className: 'search-media-body', __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, _react2.default.createElement('span', { className: 'full-name', __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, item.label), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
            _this2.props.ui.removeUser(item);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, _react2.default.createElement('i', { className: 'fa fa-remove', 'aria-hidden': 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        })))));
      }))), _react2.default.createElement(_reactAutosuggest2.default, {
        multiSection: true,
        highlightFirstSuggestion: true,
        focusInputOnSuggestionClick: false,
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        getSectionSuggestions: getSectionSuggestions,
        renderSectionTitle: renderSectionTitle,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps,
        renderInputComponent: renderInputComponent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      })))), _react2.default.createElement('div', { id: 'toolbar-sort', className: 'widget-row collapse', 'aria-expanded': 'false', __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, _react2.default.createElement('div', { className: 'widget-dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement('div', { className: 'widget-topic', __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, _react2.default.createElement('a', { 'data-toggle': 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement('span', { className: 'nav-symbol', __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement('i', { className: 'fa fa-list fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      })), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, 'List Streams')), _react2.default.createElement('ul', { className: 'dropdown-menu', __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, firstLevelTopics.filter(function (item) {
        return urlsCount(item, filterByUser);
      }).map(function (topic) {
        return _react2.default.createElement('li', { key: 'topic-' + topic.name, onClick: function onClick() {
            return _this2.props.ui.selectTopic(topic);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          }
        }, _react2.default.createElement('span', { className: 'topic-name', __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, _react2.default.createElement('i', { className: 'fa fa-angle-right', 'aria-hidden': 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }), ' ', topic.name, ' (', urlsCount(topic, filterByUser), ')'));
      })))), _react2.default.createElement('div', { className: 'widget-dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, _react2.default.createElement('div', { className: 'widget-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react2.default.createElement('a', { 'data-toggle': 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement('span', { className: 'nav-symbol', __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, _react2.default.createElement('i', { className: 'fa fa-users fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      })), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, 'List Users')), _react2.default.createElement('ul', { className: 'dropdown-menu', __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, users.map(function (user) {
        return _react2.default.createElement('li', { onClick: function onClick() {
            return _this2.props.ui.selectUser(user);
          }, key: 'user-' + user.user_id, __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          }
        }, _react2.default.createElement('div', { className: 'user-share', __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          }
        }, _react2.default.createElement('div', { className: 'user-share-img', __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        }, _react2.default.createElement('img', { onError: _this2.noImage, width: '24', height: '24', src: avatar(user), alt: user.fullname, __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        })), _react2.default.createElement('div', { className: 'user-share-cnt', __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }, _react2.default.createElement('div', { className: 'user-share-inner', __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }, _react2.default.createElement('p', { className: 'user-info', __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          }
        }, _react2.default.createElement('span', { className: 'share-fullname', __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          }
        }, user.fullname))))));
      })))), _react2.default.createElement('div', { className: 'widget-dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, _react2.default.createElement('div', { className: sortBy === 'date' ? 'widget-calendar active' : 'widget-calendar', __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, _react2.default.createElement('a', { onClick: function onClick() {
          return _this2.props.ui.changeSortOrder('date', sortDirection);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement('span', { className: 'nav-symbol', __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, _react2.default.createElement('i', { className: 'fa fa-calendar fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      })), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, 'Order by date')), _react2.default.createElement('span', { className: 'order-calendar', __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react2.default.createElement('a', {
        className: sortBy === 'date' && sortDirection === 'asc' ? 'order-asc active' : 'order-asc',
        onClick: function onClick() {
          return _this2.props.ui.changeSortOrder('date', 'asc');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement('i', { className: 'ar-sort-asc', __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      })), _react2.default.createElement('a', {
        className: sortBy === 'date' && sortDirection === 'desc' ? 'order-desc active' : 'order-desc',
        onClick: function onClick() {
          return _this2.props.ui.changeSortOrder('date', 'desc');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, _react2.default.createElement('i', { className: 'ar-sort-desc', __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }))))), _react2.default.createElement('div', { className: 'widget-dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, _react2.default.createElement('div', { className: sortBy === 'rating' ? 'widget-user active' : 'widget-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, _react2.default.createElement('a', { 'data-toggle': 'dropdown', __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, _react2.default.createElement('span', { className: 'nav-symbol', __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react2.default.createElement('i', { className: 'fa fa-signal fa-2x', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      })), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, 'Rating')), _react2.default.createElement('span', { className: 'order-rating', __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, _react2.default.createElement('a', {
        className: sortBy === 'rating' && sortDirection === 'asc' ? 'order-asc active' : 'order-asc',
        onClick: function onClick() {
          return _this2.props.ui.changeSortOrder('rating', 'asc');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, _react2.default.createElement('i', { className: 'ar-sort-asc', __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      })), _react2.default.createElement('a', {
        className: sortBy === 'rating' && sortDirection === 'desc' ? 'order-desc active' : 'order-desc',
        onClick: function onClick() {
          return _this2.props.ui.changeSortOrder('rating', 'desc');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, _react2.default.createElement('i', { className: 'ar-sort-desc', __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }))), _react2.default.createElement('ul', { className: 'dropdown-menu sort-case', __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, [{ rate: 1, label: 'Low' }, { rate: 2, label: 'Poor' }, { rate: 3, label: 'Average' }, { rate: 4, label: 'Good' }, { rate: 5, label: 'Excellent' }].map(function (item) {
        return _react2.default.createElement('li', { onClick: function onClick() {
            return _this2.props.ui.changeRate(item.rate);
          }, className: item.rate >= rating ? 'sort-case-item active' : 'sort-case-item', key: 'rating-label-' + item.label, __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          }
        }, _react2.default.createElement('a', { className: 'filter-rating', __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          }
        }, [1, 2, 3, 4, 5].map(function (star) {
          return _react2.default.createElement('span', { className: star <= item.rate ? 'active' : '', key: 'rating-start-' + star, __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            }
          });
        })), _react2.default.createElement('div', { className: 'rating-number', __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          }
        }, _react2.default.createElement('span', { className: 'label-priority', __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          }
        }, item.label), _react2.default.createElement('div', { className: 'label-rating-number', __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          }
        }, item.rate >= rating ? ratingCount(sortedUrls, owners, item.rate) : 0)));
      })))))));
    }
  }]);

  return FilterSearch;
}(_react2.default.Component)) || _class) || _class) || _class);

FilterSearch.propTypes = {
  sortedUrls: _propTypes2.default.array.isRequired,
  owners: _propTypes2.default.array.isRequired
};

exports.default = FilterSearch;