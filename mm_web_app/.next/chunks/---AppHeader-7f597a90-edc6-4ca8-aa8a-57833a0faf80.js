
          window.__NEXT_REGISTER_CHUNK('---AppHeader-7f597a90-edc6-4ca8-aa8a-57833a0faf80.js', function() {
            webpackJsonp([8],{

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* todo: I want this to actually be an array of Function | string but that causes errors */
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_StyleSheet", {
  value: __webpack_require__(96).shape({
    create: __webpack_require__(96).func.isRequired
  })
});

/* eslint-disable no-undef */

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.clones = exports.CONTEXT_KEY = exports.LOCAL_ATTR = exports.SC_ATTR = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _BrowserStyleSheet = __webpack_require__(1194);

var _BrowserStyleSheet2 = _interopRequireDefault(_BrowserStyleSheet);

var _ServerStyleSheet = __webpack_require__(1176);

var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SC_ATTR = exports.SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = exports.LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = exports.CONTEXT_KEY = '__styled-components-stylesheet__';

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = exports.clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, StyleSheet);

    this.hashes = {};
    this.deferredInjections = {};

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */


  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */


  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */


  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */


  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? _ServerStyleSheet2.default : _BrowserStyleSheet2.default).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  _createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get() {
      return instance || (instance = StyleSheet.create());
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CHANNEL = undefined;

var _ThemeProvider$childC, _ThemeProvider$contex;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isFunction = __webpack_require__(1202);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isPlainObject = __webpack_require__(1172);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _createBroadcast = __webpack_require__(1179);

var _createBroadcast2 = _interopRequireDefault(_createBroadcast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* globals React$Element */


// NOTE: DO NOT CHANGE, changing this is a semver major change!
var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__(1179).babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__(96).any;

var CHANNEL = exports.CHANNEL = '__styled-components__';

if (true) Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
  value: __webpack_require__(96).shape({})
});

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */
var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    if (this.context[CHANNEL]) {
      var subscribe = this.context[CHANNEL];
      this.unsubscribeToOuter = subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _extends2;

    return _extends({}, this.context, (_extends2 = {}, _extends2[CHANNEL] = this.broadcast.subscribe, _extends2));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.context[CHANNEL]) {
      this.unsubscribeToOuter();
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if ((0, _isFunction2.default)(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (!(0, _isPlainObject2.default)(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!(0, _isPlainObject2.default)(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return _react2.default.Children.only(this.props.children);
  };

  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  children: __webpack_require__(96).any,
  theme: __webpack_require__(96).oneOfType([__webpack_require__(96).shape({}), __webpack_require__(96).func]).isRequired
};


ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = _propTypes2.default.func.isRequired, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL] = _propTypes2.default.func, _ThemeProvider$contex);

exports.default = ThemeProvider;

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
module.exports = __webpack_require__(1188)


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(1189);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}
module.exports = exports["default"];

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlainObject = __webpack_require__(1172);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _flatten2 = __webpack_require__(1190);

var _flatten3 = _interopRequireDefault(_flatten2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

var isRuleSet = function isRuleSet(interpolation) {
  return !!(interpolation && Array.isArray(interpolation) && interpolation.length > 0 && interpolation[0] && Array.isArray(interpolation[0]));
};

var flatten = function flatten(chunks, executionContext) {
  /* Fall back to old flattener for non-rule-set chunks */
  if (!isRuleSet(chunks)) {
    return (0, _flatten3.default)(chunks, executionContext);
  }

  return chunks.reduce(function (ruleSet, chunk) {
    if (!Array.isArray(chunk)) {
      return ruleSet;
    }

    var appendChunks = [];

    var newChunk = chunk.reduce(function (rules, rule) {
      /* Remove falsey values */
      if (rule === undefined || rule === null || rule === false || rule === '') {
        return rules;
      }

      /* Flatten nested rule set */
      if (isRuleSet(rule)) {
        // $FlowFixMe Don't know what's wrong here
        appendChunks = [].concat(appendChunks, flatten(rule, executionContext));
        return rules;
      }

      /* Stringify unexpected array */
      if (Array.isArray(rule)) {
        return [].concat(rules, (0, _flatten3.default)(rule, executionContext));
      }

      /* Either execute or defer the function */
      if (typeof rule === 'function') {
        if (executionContext) {
          var res = rule(executionContext);

          if (isRuleSet(res)) {
            // $FlowFixMe Don't know what's wrong here
            appendChunks = [].concat(appendChunks, flatten(res, executionContext));
            return rules;
          }

          /* Flatten non-ruleset values */
          return [].concat(rules, flatten([res], executionContext));
        } else {
          return [].concat(rules, [rule]);
        }
      }

      /* Handle other components */
      if ((typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object' && rule.hasOwnProperty('styledComponentId')) return [].concat(rules, ['.' + rule.styledComponentId]);

      /* Convert object to css string */
      if ((typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object' && (0, _isPlainObject2.default)(rule)) {
        return [].concat(rules, [(0, _flatten2.objToCss)(rule)]);
      }

      return [].concat(rules, [rule.toString()]);
    }, []);

    if (executionContext) {
      var newChunkStr = newChunk.join('');
      if (appendChunks.length) {
        return [].concat(ruleSet, [newChunkStr], appendChunks);
      }

      return [].concat(ruleSet, [newChunkStr]);
    }

    return [].concat(ruleSet, [newChunk], appendChunks);
  }, []);
};

exports.default = flatten;
module.exports = exports['default'];

/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _StyleSheetManager = __webpack_require__(1177);

var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/* eslint-disable no-underscore-dangle */


var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__(1169).babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__(96).any;

var ServerTag = function () {
  function ServerTag(isLocal) {
    _classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', _StyleSheet.SC_ATTR + '="' + this.names.join(' ') + '"', _StyleSheet.LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    if (typeof global !== 'undefined' && global.__webpack_nonce__) {
      attrs.push('nonce="' + global.__webpack_nonce__ + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[_StyleSheet.SC_ATTR] = this.names.join(' '), _attrs[_StyleSheet.LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    if (typeof global !== 'undefined' && global.__webpack_nonce__) {
      attrs.nonce = global.__webpack_nonce__;
    }

    return _react2.default.createElement('style', _extends({
      key: key, type: 'text/css' }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    _classCallCheck(this, ServerStyleSheet);

    this.instance = _StyleSheet2.default.clone(_StyleSheet2.default.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) throw new Error("Can't collect styles once you've called getStyleTags!");
    return _react2.default.createElement(
      _StyleSheetManager2.default,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new _StyleSheet2.default(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

exports.default = ServerStyleSheet;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StyleSheetManager$ch;

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleSheetManager = function (_Component) {
  _inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    _classCallCheck(this, StyleSheetManager);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[_StyleSheet.CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return _react2.default.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(_react.Component);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired
};

exports.default = StyleSheetManager;
module.exports = exports['default'];

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isStyledComponent;

var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(96).any;

function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}
module.exports = exports['default'];

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
  value: __webpack_require__(96).shape({
    publish: __webpack_require__(96).func.isRequired,
    subscribe: __webpack_require__(96).func.isRequired
  })
});
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialValue) {
  var listeners = [];
  var currentValue = initialValue;

  return {
    publish: function publish(value) {
      currentValue = value;
      listeners.forEach(function (listener) {
        return listener(currentValue);
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);

      // Publish to this subscriber once immediately.
      listener(currentValue);

      return function () {
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }
  };
};

exports.default = createBroadcast;
module.exports = exports["default"];

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StyleSheetManager = exports.ServerStyleSheet = exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;

var _flatten = __webpack_require__(1175);

var _flatten2 = _interopRequireDefault(_flatten);

var _stringifyRules = __webpack_require__(1191);

var _stringifyRules2 = _interopRequireDefault(_stringifyRules);

var _css = __webpack_require__(1192);

var _css2 = _interopRequireDefault(_css);

var _generateAlphabeticName = __webpack_require__(1193);

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

var _ServerStyleSheet = __webpack_require__(1176);

var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);

var _StyleSheetManager = __webpack_require__(1177);

var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);

var _StyledComponent2 = __webpack_require__(1196);

var _StyledComponent3 = _interopRequireDefault(_StyledComponent2);

var _ComponentStyle2 = __webpack_require__(1203);

var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);

var _styled2 = __webpack_require__(1204);

var _styled3 = _interopRequireDefault(_styled2);

var _keyframes2 = __webpack_require__(1206);

var _keyframes3 = _interopRequireDefault(_keyframes2);

var _injectGlobal2 = __webpack_require__(1207);

var _injectGlobal3 = _interopRequireDefault(_injectGlobal2);

var _constructWithOptions2 = __webpack_require__(1208);

var _constructWithOptions3 = _interopRequireDefault(_constructWithOptions2);

var _ThemeProvider = __webpack_require__(1170);

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _withTheme = __webpack_require__(1209);

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Instantiate singletons */


/* Import components */


/* Import singleton constructors */


/* Import no-parser singleton variants */
var ComponentStyle = (0, _ComponentStyle3.default)(_generateAlphabeticName2.default, _flatten2.default, _stringifyRules2.default);

/* Import Higher Order Components */


/* Import singletons */

var constructWithOptions = (0, _constructWithOptions3.default)(_css2.default);
var StyledComponent = (0, _StyledComponent3.default)(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default, _stringifyRules2.default, _css2.default);
var injectGlobal = (0, _injectGlobal3.default)(_stringifyRules2.default, _css2.default);
var styled = (0, _styled3.default)(StyledComponent, constructWithOptions);

/* Export everything */
exports.default = styled;
exports.css = _css2.default;
exports.keyframes = keyframes;
exports.injectGlobal = injectGlobal;
exports.ThemeProvider = _ThemeProvider2.default;
exports.withTheme = _withTheme2.default;
exports.ServerStyleSheet = _ServerStyleSheet2.default;
exports.StyleSheetManager = _StyleSheetManager2.default;

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.objToCss = undefined;

var _hyphenateStyleName = __webpack_require__(465);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _isPlainObject = __webpack_require__(1172);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).map(function (key) {
    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(ruleSet, flatten(chunk, executionContext));

    /* Handle other components */
    // $FlowFixMe not sure how to make this pass
    if (chunk.hasOwnProperty('styledComponentId')) return [].concat(ruleSet, ['.' + chunk.styledComponentId]);

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

exports.default = flatten;

/***/ }),

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  return rules.reduce(function (str, partial, index) {
    return str + (
    // NOTE: This is to not prefix keyframes with the animation name
    (index > 0 || !prefix) && selector ? selector : '') + (partial && Array.isArray(partial) ? partial.join('') : partial.toString());
  }, '');
};

exports.default = stringifyRules;
module.exports = exports['default'];

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _flatten = __webpack_require__(1175);

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

exports.default = function (interpolations) {
  return (0, _flatten2.default)(interpolations);
};

module.exports = exports['default'];

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

exports.default = generateAlphabeticName;
module.exports = exports['default'];

/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.COMPONENTS_PER_TAG = undefined;

var _extractCompsFromCSS = __webpack_require__(1195);

var _extractCompsFromCSS2 = _interopRequireDefault(_extractCompsFromCSS);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */


var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__(1169).babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__(96).any;

var COMPONENTS_PER_TAG = exports.COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = (0, _extractCompsFromCSS2.default)(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.textNode.data === '') comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(_StyleSheet.SC_ATTR);
      this.el.setAttribute(_StyleSheet.SC_ATTR, existingNames ? existingNames + ' ' + name : name);

      if (typeof window !== 'undefined' && window.__webpack_nonce__) {
        this.el.setAttribute('nonce', window.__webpack_nonce__);
      }
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error('BrowserTag doesn\'t implement toReactElement!');
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */


  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) throw new Error("Trying to replace an element that wasn't mounted!");

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/


exports.default = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + _StyleSheet.SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(_StyleSheet.LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(_StyleSheet.SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(_StyleSheet.SC_ATTR, '');
      el.setAttribute(_StyleSheet.LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new _StyleSheet2.default(tagConstructor, tags, names);
  }
};

/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//mg;

exports.default = function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
};

module.exports = exports['default'];

/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createWarnTooManyClasses = __webpack_require__(1197);

var _createWarnTooManyClasses2 = _interopRequireDefault(_createWarnTooManyClasses);

var _validAttr = __webpack_require__(1198);

var _validAttr2 = _interopRequireDefault(_validAttr);

var _isTag = __webpack_require__(1199);

var _isTag2 = _interopRequireDefault(_isTag);

var _isStyledComponent = __webpack_require__(1178);

var _isStyledComponent2 = _interopRequireDefault(_isStyledComponent);

var _getComponentName = __webpack_require__(1200);

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _AbstractStyledComponent = __webpack_require__(1201);

var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);

var _ThemeProvider = __webpack_require__(1170);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var babelPluginFlowReactPropTypes_proptype_Theme = __webpack_require__(1170).babelPluginFlowReactPropTypes_proptype_Theme || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(96).any;

var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
var multiDashRegex = /--+/g;

exports.default = function (ComponentStyle, constructWithOptions) {
  /* We depend on components having unique IDs */
  var identifiers = {};
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : _displayName.replace(escapeRegex, '-') // Replace all possible CSS selectors
    .replace(multiDashRegex, '-'); // Replace multiple -- with single -

    var nr = (identifiers[displayName] || 0) + 1;
    identifiers[displayName] = nr;

    var hash = ComponentStyle.generateName(displayName + nr);
    var componentId = displayName + '-' + hash;
    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_AbstractStyledCompon) {
    _inherits(BaseStyledComponent, _AbstractStyledCompon);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _AbstractStyledCompon.call.apply(_AbstractStyledCompon, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var executionContext = this.buildExecutionContext(theme, props);
      var styleSheet = this.context[_StyleSheet.CONTEXT_KEY] || _StyleSheet2.default.instance;
      var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

      if (warnTooManyClasses !== undefined) warnTooManyClasses(className);

      return className;
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      // If there is a theme in the context, subscribe to the event emitter. This
      // is necessary due to pure components blocking context updates, this circumvents
      // that by updating when an event is emitted
      if (this.context[_ThemeProvider.CHANNEL]) {
        var subscribe = this.context[_ThemeProvider.CHANNEL];
        this.unsubscribe = subscribe(function (nextTheme) {
          // This will be called once immediately

          // Props should take precedence over ThemeProvider, which should take precedence over
          // defaultProps, but React automatically puts defaultProps on props.
          var defaultProps = _this2.constructor.defaultProps;

          var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
          var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        var _theme = this.props.theme || {};
        var generatedClassName = this.generateAndInjectStyles(_theme, this.props);
        this.setState({ theme: _theme, generatedClassName: generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.setState(function (oldState) {
        // Props should take precedence over ThemeProvider, which should take precedence over
        // defaultProps, but React automatically puts defaultProps on props.
        var defaultProps = _this3.constructor.defaultProps;

        var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
        var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = (0, _isTag2.default)(target);

      var className = [this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if ((0, _isStyledComponent2.default)(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || (0, _validAttr2.default)(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return (0, _react.createElement)(target, propsForElement);
    };

    return BaseStyledComponent;
  }(_AbstractStyledComponent2.default);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (0, _getComponentName2.default)(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? options.displayName + '-' + options.componentId : componentId;

    var warnTooManyClasses = void 0;
    if (typeof process !== 'undefined' && "development" !== 'production') {
      warnTooManyClasses = (0, _createWarnTooManyClasses2.default)(displayName);
    }

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      _inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        _classCallCheck(this, StyledComponent);

        return _possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = _objectWithoutProperties(options, ['componentId']);

        var newComponentId = previousComponentId && previousComponentId + '-' + ((0, _isTag2.default)(tag) ? tag : (0, _getComponentName2.default)(tag));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      _createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = _objectWithoutProperties(options, ['rules', 'componentId']);

          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);

      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _StyledComponent$cont[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.warnTooManyClasses = warnTooManyClasses;
    StyledComponent.target = target;


    return StyledComponent;
  };

  return createStyledComponent;
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var LIMIT = 200;

exports.default = function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. ' + 'Consider using style property for frequently changed styles.\n' + 'Example:\n' + '  const StyledComp = styled.div`width: 100%;`\n' + '  <StyledComp style={{ background: background }} />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
};

module.exports = exports['default'];

/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

/* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,
  autoFocus: true,
  defaultValue: true,
  valueLink: true,
  defaultChecked: true,
  checkedLink: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,
  className: true,

  /* List copied from https://facebook.github.io/react/docs/events.html */
  onCopy: true,
  onCut: true,
  onPaste: true,
  onCompositionEnd: true,
  onCompositionStart: true,
  onCompositionUpdate: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onFocus: true,
  onBlur: true,
  onChange: true,
  onInput: true,
  onSubmit: true,
  onClick: true,
  onContextMenu: true,
  onDoubleClick: true,
  onDrag: true,
  onDragEnd: true,
  onDragEnter: true,
  onDragExit: true,
  onDragLeave: true,
  onDragOver: true,
  onDragStart: true,
  onDrop: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOut: true,
  onMouseOver: true,
  onMouseUp: true,
  onSelect: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchMove: true,
  onTouchStart: true,
  onScroll: true,
  onWheel: true,
  onAbort: true,
  onCanPlay: true,
  onCanPlayThrough: true,
  onDurationChange: true,
  onEmptied: true,
  onEncrypted: true,
  onEnded: true,
  onError: true,
  onLoadedData: true,
  onLoadedMetadata: true,
  onLoadStart: true,
  onPause: true,
  onPlay: true,
  onPlaying: true,
  onProgress: true,
  onRateChange: true,
  onSeeked: true,
  onSeeking: true,
  onStalled: true,
  onSuspend: true,
  onTimeUpdate: true,
  onVolumeChange: true,
  onWaiting: true,
  onLoad: true,
  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  onCopyCapture: true,
  onCutCapture: true,
  onPasteCapture: true,
  onCompositionEndCapture: true,
  onCompositionStartCapture: true,
  onCompositionUpdateCapture: true,
  onKeyDownCapture: true,
  onKeyPressCapture: true,
  onKeyUpCapture: true,
  onFocusCapture: true,
  onBlurCapture: true,
  onChangeCapture: true,
  onInputCapture: true,
  onSubmitCapture: true,
  onClickCapture: true,
  onContextMenuCapture: true,
  onDoubleClickCapture: true,
  onDragCapture: true,
  onDragEndCapture: true,
  onDragEnterCapture: true,
  onDragExitCapture: true,
  onDragLeaveCapture: true,
  onDragOverCapture: true,
  onDragStartCapture: true,
  onDropCapture: true,
  onMouseDownCapture: true,
  onMouseEnterCapture: true,
  onMouseLeaveCapture: true,
  onMouseMoveCapture: true,
  onMouseOutCapture: true,
  onMouseOverCapture: true,
  onMouseUpCapture: true,
  onSelectCapture: true,
  onTouchCancelCapture: true,
  onTouchEndCapture: true,
  onTouchMoveCapture: true,
  onTouchStartCapture: true,
  onScrollCapture: true,
  onWheelCapture: true,
  onAbortCapture: true,
  onCanPlayCapture: true,
  onCanPlayThroughCapture: true,
  onDurationChangeCapture: true,
  onEmptiedCapture: true,
  onEncryptedCapture: true,
  onEndedCapture: true,
  onErrorCapture: true,
  onLoadedDataCapture: true,
  onLoadedMetadataCapture: true,
  onLoadStartCapture: true,
  onPauseCapture: true,
  onPlayCapture: true,
  onPlayingCapture: true,
  onProgressCapture: true,
  onRateChangeCapture: true,
  onSeekedCapture: true,
  onSeekingCapture: true,
  onStalledCapture: true,
  onSuspendCapture: true,
  onTimeUpdateCapture: true,
  onVolumeChangeCapture: true,
  onWaitingCapture: true,
  onLoadCapture: true,
  onAnimationStartCapture: true,
  onAnimationEndCapture: true,
  onAnimationIterationCapture: true,
  onTransitionEndCapture: true
};

/* From HTMLDOMPropertyConfig */
var htmlProps = {
  /**
   * Standard Properties
   */
  accept: true,
  acceptCharset: true,
  accessKey: true,
  action: true,
  allowFullScreen: true,
  allowTransparency: true,
  alt: true,
  // specifies target context for links with `preload` type
  as: true,
  async: true,
  autoComplete: true,
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  autoPlay: true,
  capture: true,
  cellPadding: true,
  cellSpacing: true,
  charSet: true,
  challenge: true,
  checked: true,
  cite: true,
  classID: true,
  className: true,
  cols: true,
  colSpan: true,
  content: true,
  contentEditable: true,
  contextMenu: true,
  controls: true,
  coords: true,
  crossOrigin: true,
  data: true, // For `<object />` acts as `src`.
  dateTime: true,
  default: true,
  defer: true,
  dir: true,
  disabled: true,
  download: true,
  draggable: true,
  encType: true,
  form: true,
  formAction: true,
  formEncType: true,
  formMethod: true,
  formNoValidate: true,
  formTarget: true,
  frameBorder: true,
  headers: true,
  height: true,
  hidden: true,
  high: true,
  href: true,
  hrefLang: true,
  htmlFor: true,
  httpEquiv: true,
  icon: true,
  id: true,
  inputMode: true,
  integrity: true,
  is: true,
  keyParams: true,
  keyType: true,
  kind: true,
  label: true,
  lang: true,
  list: true,
  loop: true,
  low: true,
  manifest: true,
  marginHeight: true,
  marginWidth: true,
  max: true,
  maxLength: true,
  media: true,
  mediaGroup: true,
  method: true,
  min: true,
  minLength: true,
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  multiple: true,
  muted: true,
  name: true,
  nonce: true,
  noValidate: true,
  open: true,
  optimum: true,
  pattern: true,
  placeholder: true,
  playsInline: true,
  poster: true,
  preload: true,
  profile: true,
  radioGroup: true,
  readOnly: true,
  referrerPolicy: true,
  rel: true,
  required: true,
  reversed: true,
  role: true,
  rows: true,
  rowSpan: true,
  sandbox: true,
  scope: true,
  scoped: true,
  scrolling: true,
  seamless: true,
  selected: true,
  shape: true,
  size: true,
  sizes: true,
  span: true,
  spellCheck: true,
  src: true,
  srcDoc: true,
  srcLang: true,
  srcSet: true,
  start: true,
  step: true,
  style: true,
  summary: true,
  tabIndex: true,
  target: true,
  title: true,
  // Setting .type throws on non-<input> tags
  type: true,
  useMap: true,
  value: true,
  width: true,
  wmode: true,
  wrap: true,

  /**
   * RDFa Properties
   */
  about: true,
  datatype: true,
  inlist: true,
  prefix: true,
  // property is also supported for OpenGraph in meta tags.
  property: true,
  resource: true,
  typeof: true,
  vocab: true,

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  autoCapitalize: true,
  autoCorrect: true,
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  autoSave: true,
  // color is for Safari mask-icon link
  color: true,
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  itemProp: true,
  itemScope: true,
  itemType: true,
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  itemID: true,
  itemRef: true,
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  results: true,
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  security: true,
  // IE-only attribute that controls focus behavior
  unselectable: 0
};

var svgProps = {
  accentHeight: true,
  accumulate: true,
  additive: true,
  alignmentBaseline: true,
  allowReorder: true,
  alphabetic: true,
  amplitude: true,
  arabicForm: true,
  ascent: true,
  attributeName: true,
  attributeType: true,
  autoReverse: true,
  azimuth: true,
  baseFrequency: true,
  baseProfile: true,
  baselineShift: true,
  bbox: true,
  begin: true,
  bias: true,
  by: true,
  calcMode: true,
  capHeight: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  clipPathUnits: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  contentScriptType: true,
  contentStyleType: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  decelerate: true,
  descent: true,
  diffuseConstant: true,
  direction: true,
  display: true,
  divisor: true,
  dominantBaseline: true,
  dur: true,
  dx: true,
  dy: true,
  edgeMode: true,
  elevation: true,
  enableBackground: true,
  end: true,
  exponent: true,
  externalResourcesRequired: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  filterRes: true,
  filterUnits: true,
  floodColor: true,
  floodOpacity: true,
  focusable: true,
  fontFamily: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  format: true,
  from: true,
  fx: true,
  fy: true,
  g1: true,
  g2: true,
  glyphName: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  glyphRef: true,
  gradientTransform: true,
  gradientUnits: true,
  hanging: true,
  horizAdvX: true,
  horizOriginX: true,
  ideographic: true,
  imageRendering: true,
  in: true,
  in2: true,
  intercept: true,
  k: true,
  k1: true,
  k2: true,
  k3: true,
  k4: true,
  kernelMatrix: true,
  kernelUnitLength: true,
  kerning: true,
  keyPoints: true,
  keySplines: true,
  keyTimes: true,
  lengthAdjust: true,
  letterSpacing: true,
  lightingColor: true,
  limitingConeAngle: true,
  local: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  markerHeight: true,
  markerUnits: true,
  markerWidth: true,
  mask: true,
  maskContentUnits: true,
  maskUnits: true,
  mathematical: true,
  mode: true,
  numOctaves: true,
  offset: true,
  opacity: true,
  operator: true,
  order: true,
  orient: true,
  orientation: true,
  origin: true,
  overflow: true,
  overlinePosition: true,
  overlineThickness: true,
  paintOrder: true,
  panose1: true,
  pathLength: true,
  patternContentUnits: true,
  patternTransform: true,
  patternUnits: true,
  pointerEvents: true,
  points: true,
  pointsAtX: true,
  pointsAtY: true,
  pointsAtZ: true,
  preserveAlpha: true,
  preserveAspectRatio: true,
  primitiveUnits: true,
  r: true,
  radius: true,
  refX: true,
  refY: true,
  renderingIntent: true,
  repeatCount: true,
  repeatDur: true,
  requiredExtensions: true,
  requiredFeatures: true,
  restart: true,
  result: true,
  rotate: true,
  rx: true,
  ry: true,
  scale: true,
  seed: true,
  shapeRendering: true,
  slope: true,
  spacing: true,
  specularConstant: true,
  specularExponent: true,
  speed: true,
  spreadMethod: true,
  startOffset: true,
  stdDeviation: true,
  stemh: true,
  stemv: true,
  stitchTiles: true,
  stopColor: true,
  stopOpacity: true,
  strikethroughPosition: true,
  strikethroughThickness: true,
  string: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  surfaceScale: true,
  systemLanguage: true,
  tableValues: true,
  targetX: true,
  targetY: true,
  textAnchor: true,
  textDecoration: true,
  textRendering: true,
  textLength: true,
  to: true,
  transform: true,
  u1: true,
  u2: true,
  underlinePosition: true,
  underlineThickness: true,
  unicode: true,
  unicodeBidi: true,
  unicodeRange: true,
  unitsPerEm: true,
  vAlphabetic: true,
  vHanging: true,
  vIdeographic: true,
  vMathematical: true,
  values: true,
  vectorEffect: true,
  version: true,
  vertAdvY: true,
  vertOriginX: true,
  vertOriginY: true,
  viewBox: true,
  viewTarget: true,
  visibility: true,
  widths: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  xHeight: true,
  x1: true,
  x2: true,
  xChannelSelector: true,
  xlinkActuate: true,
  xlinkArcrole: true,
  xlinkHref: true,
  xlinkRole: true,
  xlinkShow: true,
  xlinkTitle: true,
  xlinkType: true,
  xmlBase: true,
  xmlns: true,
  xmlnsXlink: true,
  xmlLang: true,
  xmlSpace: true,
  y: true,
  y1: true,
  y2: true,
  yChannelSelector: true,
  z: true,
  zoomAndPan: true
};

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var hasOwnProperty = {}.hasOwnProperty;

exports.default = function (name) {
  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
};

module.exports = exports['default'];

/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTag;

var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(96).any;

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}
module.exports = exports['default'];

/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getComponentName;


/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}
module.exports = exports['default'];

/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AbstractStyledCompon;

var _react = __webpack_require__(31);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemeProvider = __webpack_require__(1170);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStyledComponent = function (_Component) {
  _inherits(AbstractStyledComponent, _Component);

  function AbstractStyledComponent() {
    _classCallCheck(this, AbstractStyledComponent);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  return AbstractStyledComponent;
}(_react.Component);

exports.default = AbstractStyledComponent;


AbstractStyledComponent.contextTypes = (_AbstractStyledCompon = {}, _AbstractStyledCompon[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _AbstractStyledCompon[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default), _AbstractStyledCompon);
module.exports = exports['default'];

/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _hash = __webpack_require__(1173);

var _hash2 = _interopRequireDefault(_hash);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Flattener = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Flattener || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(96).any;

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
exports.default = function (nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, componentId) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.componentId = componentId;
      if (!_StyleSheet2.default.instance.hasInjectedComponent(this.componentId)) {
        var placeholder =  true ? '.' + componentId + ' {}' : '';
        _StyleSheet2.default.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var flatCSS = flatten(this.rules, executionContext);
      var hash = (0, _hash2.default)(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName) return existingName;

      var name = nameGenerator(hash);
      if (styleSheet.alreadyInjected(hash, name)) return name;

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator((0, _hash2.default)(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
};

module.exports = exports['default'];

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _domElements = __webpack_require__(1205);

var _domElements2 = _interopRequireDefault(_domElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(96).any;

exports.default = function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  _domElements2.default.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

module.exports = exports['default'];

/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

// Thanks to ReactDOMFactories for this handy list!

exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
module.exports = exports['default'];

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _hash = __webpack_require__(1173);

var _hash2 = _interopRequireDefault(_hash);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

exports.default = function (nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));

    var existingName = _StyleSheet2.default.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (_StyleSheet2.default.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    _StyleSheet2.default.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
};

module.exports = exports['default'];

/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _hash = __webpack_require__(1173);

var _hash2 = _interopRequireDefault(_hash);

var _StyleSheet = __webpack_require__(1169);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

exports.default = function (stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = (0, _hash2.default)(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (_StyleSheet2.default.instance.hasInjectedComponent(componentId)) return;

    _StyleSheet2.default.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
};

module.exports = exports['default'];

/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(96).any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(1168).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(96).any;

exports.default = function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs) }));
    };

    return templateFunction;
  };

  return constructWithOptions;
};

module.exports = exports['default'];

/***/ }),

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(1182);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _ThemeProvider = __webpack_require__(1170);

var _isStyledComponent2 = __webpack_require__(1178);

var _isStyledComponent3 = _interopRequireDefault(_isStyledComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component) {
  var _WithTheme$contextTyp;

  var componentName = Component.displayName || Component.name || 'Component';

  var isStyledComponent = (0, _isStyledComponent3.default)(Component);

  var WithTheme = function (_React$Component) {
    _inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      _classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      if (!this.context[_ThemeProvider.CHANNEL]) {
        throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
      }

      var subscribe = this.context[_ThemeProvider.CHANNEL];
      this.unsubscribe = subscribe(function (theme) {
        _this2.setState({ theme: theme });
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (typeof this.unsubscribe === 'function') this.unsubscribe();
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;


      return _react2.default.createElement(Component, _extends({
        theme: theme
      }, this.props, {
        innerRef: isStyledComponent ? innerRef : undefined,
        ref: isStyledComponent ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(_react2.default.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _WithTheme$contextTyp);


  return (0, _hoistNonReactStatics2.default)(WithTheme, Component);
};

exports.default = wrapWithTheme;
module.exports = exports['default'];

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(1410);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(1223);
var foreach = __webpack_require__(1411);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(1223);
var bind = __webpack_require__(1276);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(1413)();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(1412);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(1275);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidden(el) {
  return el.offsetWidth <= 0 && el.offsetHeight <= 0 || el.style.display === 'none';
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidden(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute('tabindex');
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}

/***/ }),

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.tryForceFallback = tryForceFallback;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;
var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error('react-modal: No elements were found for selector ' + selector + '.');
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === 'string') {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = 'length' in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function tryForceFallback() {
  if (document && document.body) {
    // force fallback to document.body
    setElement(document.body);
    return true;
  }
  return false;
}

function validateElement(appElement) {
  if (!appElement && !globalElement && !tryForceFallback()) {
    throw new Error(['react-modal: Cannot fallback to `document.body`, because it\'s not ready or available.', 'If you are doing server-side rendering, use this function to defined an element.', '`Modal.setAppElement(el)` to make this accessible']);
  }
}

function hide(appElement) {
  validateElement(appElement);
  (appElement || globalElement).setAttribute('aria-hidden', 'true');
}

function show(appElement) {
  validateElement(appElement);
  (appElement || globalElement).removeAttribute('aria-hidden');
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = document.body;
}

/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.add = add;
exports.remove = remove;
exports.totalCount = totalCount;
var classListMap = {};

function get() {
  return classListMap;
}

function add(bodyClass) {
  // Set variable and default if none
  if (!classListMap[bodyClass]) {
    classListMap[bodyClass] = 0;
  }
  classListMap[bodyClass] += 1;
  return bodyClass;
}

function remove(bodyClass) {
  if (classListMap[bodyClass]) {
    classListMap[bodyClass] -= 1;
  }
  return bodyClass;
}

function totalCount() {
  return Object.keys(classListMap).reduce(function (acc, curr) {
    return acc + classListMap[curr];
  }, 0);
}

/***/ }),

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exenv = __webpack_require__(1423);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

exports.default = SafeHTMLElement;

/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(70);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(799);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _url = __webpack_require__(321);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__(1408);

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__(190);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) window.scrollTo(0, 0);
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(1409);

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(1415);

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(1416);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(1274);

var implementation = __webpack_require__(1275);
var getPolyfill = __webpack_require__(1277);
var shim = __webpack_require__(1414);

var polyfill = getPolyfill();

defineProperties(polyfill, {
	implementation: implementation,
	getPolyfill: getPolyfill,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 1411:
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ 1412:
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(1223);

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; }
	if (keys(obj).length !== 0) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(1274);
var getPolyfill = __webpack_require__(1277);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(1276);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 1416:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(1418);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(280);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(1419);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(1279);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(1281);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = 'ReactModalPortal';
var bodyOpenClassName = exports.bodyOpenClassName = 'ReactModal__Body--open';

var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.renderPortal = function (props) {
      _this.portal = renderSubtreeIntoContainer(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement('div');
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      this.renderPortal(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var isOpen = newProps.isOpen;
      // Stop unnecessary renders if modal is remaining closed

      if (!this.props.isOpen && !isOpen) return;

      var currentParent = getParentElement(this.props.parentSelector);
      var newParent = getParentElement(newProps.parentSelector);

      if (newParent !== currentParent) {
        currentParent.removeChild(this.node);
        newParent.appendChild(this.node);
      }

      this.renderPortal(newProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(newProps) {
      if (newProps.portalClassName !== this.props.portalClassName) {
        this.node.className = newProps.portalClassName;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.node) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'setAppElement',
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable no-console */

  }, {
    key: 'injectCSS',
    value: function injectCSS() {
      "development" !== "production" && console.warn('React-Modal: injectCSS has been deprecated ' + 'and no longer has any effect. It will be removed in a later version');
    }
    /* eslint-enable no-console */

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string.isRequired
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldCloseOnOverlayClick: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
};
exports.default = Modal;

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _focusManager = __webpack_require__(1420);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(1421);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(1279);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _refCount = __webpack_require__(1280);

var refCount = _interopRequireWildcard(_refCount);

var _bodyClassList = __webpack_require__(1422);

var bodyClassList = _interopRequireWildcard(_bodyClassList);

var _safeHTMLElement = __webpack_require__(1281);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: 'ReactModal__Overlay',
  content: 'ReactModal__Content'
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setFocusAfterRender = function (focus) {
      _this.focusAfterRender = focus;
    };

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
    };

    _this.setContentRef = function (content) {
      _this.content = content;
    };

    _this.afterClose = function () {
      focusManager.returnFocus();
      focusManager.teardownScopedFocus();
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        focusManager.setupScopedFocus(_this.node);
        focusManager.markForFocusLater();
        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      _this.beforeClose();
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }
      if (event.keyCode === ESC_KEY) {
        event.preventDefault();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === 'undefined' ? 'undefined' : _typeof(additional)) === 'object' ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + '--after-open',
        beforeClose: CLASS_NAMES[which] + '--before-close'
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + ' ' + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + ' ' + classNames.beforeClose;
      }
      return typeof additional === 'string' && additional ? className + ' ' + additional : className;
    };

    _this.ariaAttributes = function (items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc['aria-' + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Focus needs to be set when mounting and already open
      if (this.props.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (true) {
        if (newProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + 'This may cause unexpected behavior when multiple modals are open.');
        }
      }
      // Focus only needs to be set once when the modal is being opened
      if (!this.props.isOpen && newProps.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      } else if (this.props.isOpen && !newProps.isOpen) {
        this.close();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.focusAfterRender) {
        this.focusContent();
        this.setFocusAfterRender(false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.beforeClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: 'beforeOpen',
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          bodyOpenClassName = _props.bodyOpenClassName;
      // Add body class

      bodyClassList.add(bodyOpenClassName);
      // Add aria-hidden to appElement
      if (ariaHideApp) {
        ariaAppHider.hide(appElement);
      }
    }
  }, {
    key: 'beforeClose',
    value: function beforeClose() {
      var _props2 = this.props,
          appElement = _props2.appElement,
          ariaHideApp = _props2.ariaHideApp,
          bodyOpenClassName = _props2.bodyOpenClassName;
      // Remove class if no more modals are open

      bodyClassList.remove(bodyOpenClassName);
      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && refCount.totalCount() < 1) {
        ariaAppHider.show(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          overlayClassName = _props3.overlayClassName,
          defaultStyles = _props3.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        'div',
        {
          ref: this.setOverlayRef,
          className: this.buildClassName('overlay', overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick },
        _react2.default.createElement(
          'div',
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName('content', className),
            tabIndex: '-1',
            onKeyDown: this.handleKeyDown,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            'aria-label': this.props.contentLabel
          }, this.ariaAttributes(this.props.aria || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  }
};
ModalPortal.propTypes = {
  isOpen: _propTypes.PropTypes.bool.isRequired,
  defaultStyles: _propTypes.PropTypes.shape({
    content: _propTypes.PropTypes.object,
    overlay: _propTypes.PropTypes.object
  }),
  style: _propTypes.PropTypes.shape({
    content: _propTypes.PropTypes.object,
    overlay: _propTypes.PropTypes.object
  }),
  className: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  overlayClassName: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.object]),
  bodyOpenClassName: _propTypes.PropTypes.string,
  ariaHideApp: _propTypes.PropTypes.bool,
  appElement: _propTypes.PropTypes.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes.PropTypes.func,
  onRequestClose: _propTypes.PropTypes.func,
  closeTimeoutMS: _propTypes.PropTypes.number,
  shouldCloseOnOverlayClick: _propTypes.PropTypes.bool,
  role: _propTypes.PropTypes.string,
  contentLabel: _propTypes.PropTypes.string,
  aria: _propTypes.PropTypes.object,
  children: _propTypes.PropTypes.node
};
exports.default = ModalPortal;

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(1278);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    toFocus = focusLaterElements.pop();
    toFocus.focus();
    return;
  } catch (e) {
    console.warn(['You tried to return focus to', toFocus, 'but it is not in the DOM anymore'].join(" "));
  }
}
/* eslint-enable no-console */

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener('blur', handleBlur, false);
    document.addEventListener('focus', handleFocus, true);
  } else {
    window.attachEvent('onBlur', handleBlur);
    document.attachEvent('onFocus', handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('focus', handleFocus);
  } else {
    window.detachEvent('onBlur', handleBlur);
    document.detachEvent('onFocus', handleFocus);
  }
}

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(1278);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  var leavingFinalTabbable = finalTabbable === document.activeElement ||
  // handle immediate shift+tab after opening with mouse
  node === document.activeElement;
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  target.focus();
}

/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;

var _refCount = __webpack_require__(1280);

var refCount = _interopRequireWildcard(_refCount);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function add(bodyClass) {
  // Increment class(es) on refCount tracker and add class(es) to body
  bodyClass.split(' ').map(refCount.add).forEach(function (className) {
    return document.body.classList.add(className);
  });
}

function remove(bodyClass) {
  var classListMap = refCount.get();
  // Decrement class(es) from the refCount tracker
  // and remove unused class(es) from body
  bodyClass.split(' ').map(refCount.remove).filter(function (className) {
    return classListMap[className] === 0;
  }).forEach(function (className) {
    return document.body.classList.remove(className);
  });
}

/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1171);

var _noParser2 = _interopRequireDefault(_noParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Header/index.js';
/**
*
* Header
*
*/

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'Header__Wrapper',
  componentId: 's1v4a3w0-0'
})([['{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:none;margin-left:0;margin-right:0;padding-right:0;width:auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;min-width:0;padding:12px 16px;}']]);

function Header(props) {
  return _react2.default.createElement(Wrapper, { className: 'logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, ' ', props.children);
}

Header.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/Header/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/Header/index.js"); } } })();

/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _noParser = __webpack_require__(1171);

var _noParser2 = _interopRequireDefault(_noParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/LogoIcon/index.js';
/**
*
* LogoIcon
*
*/

var Wrapper = _noParser2.default.div.withConfig({
  displayName: 'LogoIcon__Wrapper',
  componentId: 's1xfeiti-0'
})([['{background-image:url(\'/static/images/logo.png\');background-repeat:no-repeat;height:40px;width:40px;background-size:40px 40px;margin-left:16px;margin-right:16px;}']]);

function LogoIcon() {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  });
}

exports.default = LogoIcon;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/LogoIcon/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/LogoIcon/index.js"); } } })();

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/Slogan/index.js';
/**
*
* Slogan
*
*/

function Slogan() {
  return _react2.default.createElement('div', { style: { margin: '0 16px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('img', { className: 'logo-image', onClick: function onClick() {
      window.location.href = '/';
    }, src: '/static/images/maomao.png', alt: 'maomao', width: '165', height: '24', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('span', { className: 'paragraph-smarter', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, ' discover & share '));
}

exports.default = Slogan;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/Slogan/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/Slogan/index.js"); } } })();

/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  clientCredentials: {
    apiKey: 'AIzaSyBIrR_A8-XugSImY6HCz-GFn6af5YrHJBs',
    authDomain: 'maomao-testing.firebaseapp.com',
    databaseURL: 'https://maomao-testing.firebaseio.com',
    projectId: 'maomao-testing',
    storageBucket: 'maomao-testing.appspot.com',
    messagingSenderId: '323116239222'
  },
  serverCredentials: {
    'type': 'service_account',
    'project_id': 'maomao-testing',
    'private_key_id': '4eb79f5fc501e6374f7baa85e0afa1fd5183acce',
    'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDm5DAidKbYbWaT\n2rpUATvbsa7jfnibH+Od0Bzq8xARoblXPIPnoAR5pt2YaIXk268HoHb7UkAQnVBZ\nSWcTmJfAZMazl++6ppSK7SwdXh4X0snONJeAAECHmlBUbbVbi09V+yqy4RsfUL++\noM3vwLVoIFNgcYW3WZFME9xrcVgzS5K+Yh/oGwW55o+J1CA7sqcxgA9Io5A2Ylj2\nuNDmFsvDmD9yIePvMq8zvGNF7POuOwJsUgzEAnXN53xylpZEBm1rwAgUBOS+0Xqe\n2fVURadIKKuAbLlPEVfKXSK14JWnHZgW8vq5VcK/pnrJCxiIPRCSW8bHzXJUVPQS\np5lZFnTbAgMBAAECggEAAMy7ifMDfO5sE4kHajES5wDnjSwr+MWUgUBuSTYMUTNR\nNAcmoc/BFDbKv7Nk+1Tzd0BMCTTQuf4BgD2r2LqHlAgFVCvrjab0DsMhivx/eC+n\nuUofWDcoAhA7xP8YSLfjz3VuQW5cLLCX6W4fKHxvZGvwPf5Gq0rpIO1Urx6WYp8X\ntLRT4dzi8bWVOG2RBBwM5AvMGws5uGOdoRkQfL4593nbeWyJndgf7DfrowLHQCOS\nY6XV2Qb0ooFr+u8wRzPxRFTUteb1iRwCoRzKXVM7N9IvpYSr6lT+hfXhLG4wXWpU\nImfrhRm9UHw/onwHfbscveo9WxGHlivgHsI35Ih5iQKBgQD54ZPlUHx4A9VZhy6a\nsxgpMoO32Mwe03Wn5tBryR6UJTbRg8O/sh9xGh0m0duY9JhUyJPFmfKo8loLqyVc\naXOUVwilvD4uoSU0l0RiIgTtMxGk8pbknUzzLHeZe9sE9sUYtC2a1SqYGOor7ch8\nikZkLAeAXhmJfdMmY2MxIWprTwKBgQDsi5HL24uZcc7AtjMeJUlLI2zyHkUZ2zca\nRCFAHUre3JsAOMk7faYdAh21M1FXb2dwfkYtYYsbR8DE9X1kRFVrYUsSksq6jLR2\nYnV1vozNMfSqaWNwUgKVKUigj1J7tTPKHeqsjiqy2xrnZ3sGRXWTjvL7ojg+4mQn\nMJO+NQCKtQKBgQCi5DwnBnq9ObKAtDDbQ9iCMp3O4RLfHXXbSAmh2e+HH2NG3SBj\n/FemwSEzxyXh5cDPtBkwfRTEsYelh6HJRizEDKBkefwHJaE9UUaQuiCACAR+hG19\nBlW9R8WHVkgGSl9dpUb9YexsTgGJNW62UOVmM5WIRs9a450brzpgMqpO3QKBgBay\nDXsRxYMjeELlOGJcEXw0Ge/hF6AzeEX843PTW6umXvjWefhLRfTijxcjpVpORg51\nDyarhT1I1SYQp8dHBysWWq2dh/X+KhJxv/NcJQZLFL6E/hV4yOam32EIX1GfQSjT\nVgDYYyBmBV7Ofu9LGszdmlKqbdsavaFE9+f4DeVBAoGBAKqBdHzkgZSlF0AE3a9s\nOmpS2PP6FoAijVm3+k+7rsgAyu+RpVRYXfZNUi8djlrl29zmzhURhpBMRGnK5UeC\n0S1BZCiLAEUp682LrddoXX8SH7kCNF0g3rUscuhqhywLkntLR+iZ1dTAySEze2PZ\nDe2DPEynvYITHD9mIRmf2mYf\n-----END PRIVATE KEY-----\n',
    'client_email': 'firebase-adminsdk-az1l3@maomao-testing.iam.gserviceaccount.com',
    'client_id': '105735815106367336717',
    'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
    'token_uri': 'https://accounts.google.com/o/oauth2/token',
    'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
    'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-az1l3%40maomao-testing.iam.gserviceaccount.com'
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/firebaseCredentials.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/firebaseCredentials.js"); } } })();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(799);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = __webpack_require__(1407);

var _link2 = _interopRequireDefault(_link);

var _mobxReact = __webpack_require__(659);

var _firebase = __webpack_require__(803);

var _firebase2 = _interopRequireDefault(_firebase);

__webpack_require__(805);

var _reactModal = __webpack_require__(1417);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _nealReact = __webpack_require__(801);

var _Header = __webpack_require__(1424);

var _Header2 = _interopRequireDefault(_Header);

var _LogoIcon = __webpack_require__(1425);

var _LogoIcon2 = _interopRequireDefault(_LogoIcon);

var _Slogan = __webpack_require__(1426);

var _Slogan2 = _interopRequireDefault(_Slogan);

var _hash = __webpack_require__(706);

var _firebaseCredentials = __webpack_require__(1427);

var _logger = __webpack_require__(595);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/containers/AppHeader/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/containers/AppHeader/index.js"); } } })();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLy0tLUFwcEhlYWRlci03ZjU5N2E5MC1lZGM2LTRjYTgtYWE4YS01NzgzM2EwZmFmODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3R5cGVzLmpzPzBiMjU2YmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVTaGVldC5qcz8wYjI1NmJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1RoZW1lUHJvdmlkZXIuanM/MGIyNTZiYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm8tcGFyc2VyLmpzPzBiMjU2YmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iamVjdC9pbmRleC5qcz8wYjI1NmJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL2dsYW1vci9oYXNoLmpzPzBiMjU2YmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9uby1wYXJzZXIvZmxhdHRlbi5qcz8wYjI1NmJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1NlcnZlclN0eWxlU2hlZXQuanM/MGIyNTZiYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZVNoZWV0TWFuYWdlci5qcz8wYjI1NmJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvaXNTdHlsZWRDb21wb25lbnQuanM/MGIyNTZiYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QuanM/MGIyNTZiYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanM/MGIyNTZiYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL25vLXBhcnNlci9pbmRleC5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3Qvbm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzPzQ1MWI5NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9mbGF0dGVuLmpzPzQ1MWI5NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9uby1wYXJzZXIvc3RyaW5naWZ5UnVsZXMuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL25vLXBhcnNlci9jc3MuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2dlbmVyYXRlQWxwaGFiZXRpY05hbWUuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9Ccm93c2VyU3R5bGVTaGVldC5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZXh0cmFjdENvbXBzRnJvbUNTUy5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1N0eWxlZENvbXBvbmVudC5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzLmpzPzQ1MWI5NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy92YWxpZEF0dHIuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2lzVGFnLmpzPzQ1MWI5NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9nZXRDb21wb25lbnROYW1lLmpzPzQ1MWI5NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9Db21wb25lbnRTdHlsZS5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL3N0eWxlZC5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZG9tRWxlbWVudHMuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9rZXlmcmFtZXMuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9pbmplY3RHbG9iYWwuanM/NDUxYjk1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL2NvbnN0cnVjdG9ycy9jb25zdHJ1Y3RXaXRoT3B0aW9ucy5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvaG9jL3dpdGhUaGVtZS5qcz80NTFiOTU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcz8zMTlkYzY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcz8zMTlkYzY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QuYXNzaWduL2ltcGxlbWVudGF0aW9uLmpzPzMxOWRjNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanM/MzE5ZGM2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9wb2x5ZmlsbC5qcz8zMTlkYzY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcz8zMTlkYzY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9hcmlhQXBwSGlkZXIuanM/MzE5ZGM2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvcmVmQ291bnQuanM/MzE5ZGM2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzPzMxOWRjNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvbGluay5qcz8zMTlkYzY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4YWN0L2J1aWxkL2luZGV4LmpzP2NiMWE4NzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vaW5kZXguanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9yZWFjaC9pbmRleC5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzP2NiMWE4NzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vaGFzU3ltYm9scy5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QuYXNzaWduL3NoaW0uanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzL3NyYy9pbmRleC5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4YWN0L2J1aWxkL2hlbHBlcnMvaXNQbGFpbk9iamVjdC5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWwuanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvZm9jdXNNYW5hZ2VyLmpzP2NiMWE4NzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3Njb3BlVGFiLmpzP2NiMWE4NzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2JvZHlDbGFzc0xpc3QuanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nb0ljb24vaW5kZXguanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nsb2dhbi9pbmRleC5qcz9jYjFhODc2Iiwid2VicGFjazovLy8uL2ZpcmViYXNlQ3JlZGVudGlhbHMuanM/Y2IxYTg3NiIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0FwcEhlYWRlci9pbmRleC5qcz9jYjFhODc2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiB0b2RvOiBJIHdhbnQgdGhpcyB0byBhY3R1YWxseSBiZSBhbiBhcnJheSBvZiBGdW5jdGlvbiB8IHN0cmluZyBidXQgdGhhdCBjYXVzZXMgZXJyb3JzICovXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1N0eWxlU2hlZXRcIiwge1xuICB2YWx1ZTogcmVxdWlyZShcInByb3AtdHlwZXNcIikuc2hhcGUoe1xuICAgIGNyZWF0ZTogcmVxdWlyZShcInByb3AtdHlwZXNcIikuZnVuYy5pc1JlcXVpcmVkXG4gIH0pXG59KTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNjhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xvbmVzID0gZXhwb3J0cy5DT05URVhUX0tFWSA9IGV4cG9ydHMuTE9DQUxfQVRUUiA9IGV4cG9ydHMuU0NfQVRUUiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jyb3dzZXJTdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9Ccm93c2VyU3R5bGVTaGVldCcpO1xuXG52YXIgX0Jyb3dzZXJTdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jyb3dzZXJTdHlsZVNoZWV0KTtcblxudmFyIF9TZXJ2ZXJTdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9TZXJ2ZXJTdHlsZVNoZWV0Jyk7XG5cbnZhciBfU2VydmVyU3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZXJ2ZXJTdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNDX0FUVFIgPSBleHBvcnRzLlNDX0FUVFIgPSAnZGF0YS1zdHlsZWQtY29tcG9uZW50cyc7XG52YXIgTE9DQUxfQVRUUiA9IGV4cG9ydHMuTE9DQUxfQVRUUiA9ICdkYXRhLXN0eWxlZC1jb21wb25lbnRzLWlzLWxvY2FsJztcbnZhciBDT05URVhUX0tFWSA9IGV4cG9ydHMuQ09OVEVYVF9LRVkgPSAnX19zdHlsZWQtY29tcG9uZW50cy1zdHlsZXNoZWV0X18nO1xuXG52YXIgaW5zdGFuY2UgPSBudWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG52YXIgY2xvbmVzID0gZXhwb3J0cy5jbG9uZXMgPSBbXTtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQodGFnQ29uc3RydWN0b3IpIHtcbiAgICB2YXIgdGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gICAgdmFyIG5hbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHRoaXMuaGFzaGVzID0ge307XG4gICAgdGhpcy5kZWZlcnJlZEluamVjdGlvbnMgPSB7fTtcblxuICAgIHRoaXMudGFnQ29uc3RydWN0b3IgPSB0YWdDb25zdHJ1Y3RvcjtcbiAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgIHRoaXMubmFtZXMgPSBuYW1lcztcbiAgICB0aGlzLmNvbnN0cnVjdENvbXBvbmVudFRhZ01hcCgpO1xuICB9XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY29uc3RydWN0Q29tcG9uZW50VGFnTWFwID0gZnVuY3Rpb24gY29uc3RydWN0Q29tcG9uZW50VGFnTWFwKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbXBvbmVudFRhZ3MgPSB7fTtcblxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRhZy5jb21wb25lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnRJZCkge1xuICAgICAgICBfdGhpcy5jb21wb25lbnRUYWdzW2NvbXBvbmVudElkXSA9IHRhZztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qIEJlc3QgbGV2ZWwgb2YgY2FjaGluZ+KAlGdldCB0aGUgbmFtZSBmcm9tIHRoZSBoYXNoIHN0cmFpZ2h0IGF3YXkuICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzaGVzW2hhc2gudG9TdHJpbmcoKV07XG4gIH07XG5cbiAgLyogU2Vjb25kIGxldmVsIG9mIGNhY2hpbmfigJRpZiB0aGUgbmFtZSBpcyBhbHJlYWR5IGluIHRoZSBkb20sIGRvbid0XG4gICAqIGluamVjdCBhbnl0aGluZyBhbmQgcmVjb3JkIHRoZSBoYXNoIGZvciBnZXROYW1lIG5leHQgdGltZS4gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmFscmVhZHlJbmplY3RlZCA9IGZ1bmN0aW9uIGFscmVhZHlJbmplY3RlZChoYXNoLCBuYW1lKSB7XG4gICAgaWYgKCF0aGlzLm5hbWVzW25hbWVdKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmhhc2hlc1toYXNoLnRvU3RyaW5nKCldID0gbmFtZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKiBUaGlyZCB0eXBlIG9mIGNhY2hpbmfigJRkb24ndCBpbmplY3QgY29tcG9uZW50cycgY29tcG9uZW50SWQgdHdpY2UuICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5oYXNJbmplY3RlZENvbXBvbmVudCA9IGZ1bmN0aW9uIGhhc0luamVjdGVkQ29tcG9uZW50KGNvbXBvbmVudElkKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jb21wb25lbnRUYWdzW2NvbXBvbmVudElkXTtcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWZlcnJlZEluamVjdCA9IGZ1bmN0aW9uIGRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBpc0xvY2FsLCBjc3MpIHtcbiAgICBpZiAodGhpcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIGNsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjbG9uZS5kZWZlcnJlZEluamVjdChjb21wb25lbnRJZCwgaXNMb2NhbCwgY3NzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0T3JDcmVhdGVUYWcoY29tcG9uZW50SWQsIGlzTG9jYWwpO1xuICAgIHRoaXMuZGVmZXJyZWRJbmplY3Rpb25zW2NvbXBvbmVudElkXSA9IGNzcztcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoY29tcG9uZW50SWQsIGlzTG9jYWwsIGNzcywgaGFzaCwgbmFtZSkge1xuICAgIGlmICh0aGlzID09PSBpbnN0YW5jZSkge1xuICAgICAgY2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNsb25lLmluamVjdChjb21wb25lbnRJZCwgaXNMb2NhbCwgY3NzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLmdldE9yQ3JlYXRlVGFnKGNvbXBvbmVudElkLCBpc0xvY2FsKTtcblxuICAgIHZhciBkZWZlcnJlZEluamVjdGlvbiA9IHRoaXMuZGVmZXJyZWRJbmplY3Rpb25zW2NvbXBvbmVudElkXTtcbiAgICBpZiAoZGVmZXJyZWRJbmplY3Rpb24pIHtcbiAgICAgIHRhZy5pbmplY3QoY29tcG9uZW50SWQsIGRlZmVycmVkSW5qZWN0aW9uKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmRlZmVycmVkSW5qZWN0aW9uc1tjb21wb25lbnRJZF07XG4gICAgfVxuXG4gICAgdGFnLmluamVjdChjb21wb25lbnRJZCwgY3NzLCBuYW1lKTtcblxuICAgIGlmIChoYXNoICYmIG5hbWUpIHtcbiAgICAgIHRoaXMuaGFzaGVzW2hhc2gudG9TdHJpbmcoKV0gPSBuYW1lO1xuICAgIH1cbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbiB0b0hUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy50b0hUTUwoKTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS50b1JlYWN0RWxlbWVudHMgPSBmdW5jdGlvbiB0b1JlYWN0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFncy5tYXAoZnVuY3Rpb24gKHRhZywgaSkge1xuICAgICAgcmV0dXJuIHRhZy50b1JlYWN0RWxlbWVudCgnc2MtJyArIGkpO1xuICAgIH0pO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmdldE9yQ3JlYXRlVGFnID0gZnVuY3Rpb24gZ2V0T3JDcmVhdGVUYWcoY29tcG9uZW50SWQsIGlzTG9jYWwpIHtcbiAgICB2YXIgZXhpc3RpbmdUYWcgPSB0aGlzLmNvbXBvbmVudFRhZ3NbY29tcG9uZW50SWRdO1xuICAgIGlmIChleGlzdGluZ1RhZykge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nVGFnO1xuICAgIH1cblxuICAgIHZhciBsYXN0VGFnID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXTtcbiAgICB2YXIgY29tcG9uZW50VGFnID0gIWxhc3RUYWcgfHwgbGFzdFRhZy5pc0Z1bGwoKSB8fCBsYXN0VGFnLmlzTG9jYWwgIT09IGlzTG9jYWwgPyB0aGlzLmNyZWF0ZU5ld1RhZyhpc0xvY2FsKSA6IGxhc3RUYWc7XG4gICAgdGhpcy5jb21wb25lbnRUYWdzW2NvbXBvbmVudElkXSA9IGNvbXBvbmVudFRhZztcbiAgICBjb21wb25lbnRUYWcuYWRkQ29tcG9uZW50KGNvbXBvbmVudElkKTtcbiAgICByZXR1cm4gY29tcG9uZW50VGFnO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmNyZWF0ZU5ld1RhZyA9IGZ1bmN0aW9uIGNyZWF0ZU5ld1RhZyhpc0xvY2FsKSB7XG4gICAgdmFyIG5ld1RhZyA9IHRoaXMudGFnQ29uc3RydWN0b3IoaXNMb2NhbCk7XG4gICAgdGhpcy50YWdzLnB1c2gobmV3VGFnKTtcbiAgICByZXR1cm4gbmV3VGFnO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucmVzZXQgPSBmdW5jdGlvbiByZXNldChpc1NlcnZlcikge1xuICAgIGluc3RhbmNlID0gU3R5bGVTaGVldC5jcmVhdGUoaXNTZXJ2ZXIpO1xuICB9O1xuXG4gIC8qIFdlIGNhbiBtYWtlIGlzU2VydmVyIHRvdGFsbHkgaW1wbGljaXQgb25jZSBKZXN0IDIwIGRyb3BzIGFuZCB3ZVxuICAgKiBjYW4gY2hhbmdlIGVudmlyb25tZW50IG9uIGEgcGVyLXRlc3QgYmFzaXMuICovXG5cblxuICBTdHlsZVNoZWV0LmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgaXNTZXJ2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG5cbiAgICByZXR1cm4gKGlzU2VydmVyID8gX1NlcnZlclN0eWxlU2hlZXQyLmRlZmF1bHQgOiBfQnJvd3NlclN0eWxlU2hlZXQyLmRlZmF1bHQpLmNyZWF0ZSgpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShvbGRTaGVldCkge1xuICAgIHZhciBuZXdTaGVldCA9IG5ldyBTdHlsZVNoZWV0KG9sZFNoZWV0LnRhZ0NvbnN0cnVjdG9yLCBvbGRTaGVldC50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLmNsb25lKCk7XG4gICAgfSksIF9leHRlbmRzKHt9LCBvbGRTaGVldC5uYW1lcykpO1xuXG4gICAgbmV3U2hlZXQuaGFzaGVzID0gX2V4dGVuZHMoe30sIG9sZFNoZWV0Lmhhc2hlcyk7XG4gICAgbmV3U2hlZXQuZGVmZXJyZWRJbmplY3Rpb25zID0gX2V4dGVuZHMoe30sIG9sZFNoZWV0LmRlZmVycmVkSW5qZWN0aW9ucyk7XG4gICAgY2xvbmVzLnB1c2gobmV3U2hlZXQpO1xuXG4gICAgcmV0dXJuIG5ld1NoZWV0O1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBudWxsLCBbe1xuICAgIGtleTogJ2luc3RhbmNlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZSB8fCAoaW5zdGFuY2UgPSBTdHlsZVNoZWV0LmNyZWF0ZSgpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVTaGVldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1N0eWxlU2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExNjlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ0hBTk5FTCA9IHVuZGVmaW5lZDtcblxudmFyIF9UaGVtZVByb3ZpZGVyJGNoaWxkQywgX1RoZW1lUHJvdmlkZXIkY29udGV4O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpO1xuXG52YXIgX2lzRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNGdW5jdGlvbik7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfY3JlYXRlQnJvYWRjYXN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvY3JlYXRlLWJyb2FkY2FzdCcpO1xuXG52YXIgX2NyZWF0ZUJyb2FkY2FzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVCcm9hZGNhc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG4vKiBnbG9iYWxzIFJlYWN0JEVsZW1lbnQgKi9cblxuXG4vLyBOT1RFOiBETyBOT1QgQ0hBTkdFLCBjaGFuZ2luZyB0aGlzIGlzIGEgc2VtdmVyIG1ham9yIGNoYW5nZSFcbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9Ccm9hZGNhc3QgPSByZXF1aXJlKCcuLi91dGlscy9jcmVhdGUtYnJvYWRjYXN0JykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfQnJvYWRjYXN0IHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbnZhciBDSEFOTkVMID0gZXhwb3J0cy5DSEFOTkVMID0gJ19fc3R5bGVkLWNvbXBvbmVudHNfXyc7XG5cbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGhlbWUnLCB7XG4gIHZhbHVlOiByZXF1aXJlKCdwcm9wLXR5cGVzJykuc2hhcGUoe30pXG59KTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGhlbWUgdG8gYW4gZW50aXJlIHJlYWN0IGNvbXBvbmVudCB0cmVlIHZpYSBjb250ZXh0IGFuZCBldmVudCBsaXN0ZW5lcnMgKGhhdmUgdG8gZG9cbiAqIGJvdGggY29udGV4dCBhbmQgZXZlbnQgZW1pdHRlciBhcyBwdXJlIGNvbXBvbmVudHMgYmxvY2sgY29udGV4dCB1cGRhdGVzKVxuICovXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUaGVtZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZVByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5nZXRUaGVtZSA9IF90aGlzLmdldFRoZW1lLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgVGhlbWVQcm92aWRlciB3cmFwcGVyIGFueXdoZXJlIGFyb3VuZCB0aGlzIHRoZW1lIHByb3ZpZGVyLCBtZXJnZSB0aGlzIHRoZW1lXG4gICAgLy8gd2l0aCB0aGUgb3V0ZXIgdGhlbWVcbiAgICBpZiAodGhpcy5jb250ZXh0W0NIQU5ORUxdKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlID0gdGhpcy5jb250ZXh0W0NIQU5ORUxdO1xuICAgICAgdGhpcy51bnN1YnNjcmliZVRvT3V0ZXIgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIF90aGlzMi5vdXRlclRoZW1lID0gdGhlbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5icm9hZGNhc3QgPSAoMCwgX2NyZWF0ZUJyb2FkY2FzdDIuZGVmYXVsdCkodGhpcy5nZXRUaGVtZSgpKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5jb250ZXh0LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltDSEFOTkVMXSA9IHRoaXMuYnJvYWRjYXN0LnN1YnNjcmliZSwgX2V4dGVuZHMyKSk7XG4gIH07XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudGhlbWUgIT09IG5leHRQcm9wcy50aGVtZSkgdGhpcy5icm9hZGNhc3QucHVibGlzaCh0aGlzLmdldFRoZW1lKG5leHRQcm9wcy50aGVtZSkpO1xuICB9O1xuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dFtDSEFOTkVMXSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZVRvT3V0ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHRoZSB0aGVtZSBmcm9tIHRoZSBwcm9wcywgc3VwcG9ydGluZyBib3RoIChvdXRlclRoZW1lKSA9PiB7fSBhcyB3ZWxsIGFzIG9iamVjdCBub3RhdGlvblxuXG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZShwYXNzZWRUaGVtZSkge1xuICAgIHZhciB0aGVtZSA9IHBhc3NlZFRoZW1lIHx8IHRoaXMucHJvcHMudGhlbWU7XG4gICAgaWYgKCgwLCBfaXNGdW5jdGlvbjIuZGVmYXVsdCkodGhlbWUpKSB7XG4gICAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZSh0aGlzLm91dGVyVGhlbWUpO1xuICAgICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKG1lcmdlZFRoZW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICAgIH1cbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkodGhlbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgICB9XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLm91dGVyVGhlbWUsIHRoZW1lKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUaGVtZVByb3ZpZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55LFxuICB0aGVtZTogcmVxdWlyZSgncHJvcC10eXBlcycpLm9uZU9mVHlwZShbcmVxdWlyZSgncHJvcC10eXBlcycpLnNoYXBlKHt9KSwgcmVxdWlyZSgncHJvcC10eXBlcycpLmZ1bmNdKS5pc1JlcXVpcmVkXG59O1xuXG5cblRoZW1lUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1RoZW1lUHJvdmlkZXIkY2hpbGRDID0ge30sIF9UaGVtZVByb3ZpZGVyJGNoaWxkQ1tDSEFOTkVMXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLCBfVGhlbWVQcm92aWRlciRjaGlsZEMpO1xuVGhlbWVQcm92aWRlci5jb250ZXh0VHlwZXMgPSAoX1RoZW1lUHJvdmlkZXIkY29udGV4ID0ge30sIF9UaGVtZVByb3ZpZGVyJGNvbnRleFtDSEFOTkVMXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX1RoZW1lUHJvdmlkZXIkY29udGV4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGhlbWVQcm92aWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL1RoZW1lUHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIi8qIGVzbGludC1kaXNhYmxlICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL25vLXBhcnNlcicpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9uby1wYXJzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcblxuZnVuY3Rpb24gaXNPYmplY3RPYmplY3Qobykge1xuICByZXR1cm4gaXNPYmplY3QobykgPT09IHRydWVcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuXG4gIGlmIChpc09iamVjdE9iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcbiAgY3RvciA9IG8uY29uc3RydWN0b3I7XG4gIGlmICh0eXBlb2YgY3RvciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3RPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRvSGFzaDtcbi8vIG11cm11cmhhc2gyIHZpYSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yYXljbW9yZ2FuLzU4ODQyM1xuXG5mdW5jdGlvbiBkb0hhc2goc3RyLCBzZWVkKSB7XG4gIHZhciBtID0gMHg1YmQxZTk5NTtcbiAgdmFyIHIgPSAyNDtcbiAgdmFyIGggPSBzZWVkIF4gc3RyLmxlbmd0aDtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHdoaWxlIChsZW5ndGggPj0gNCkge1xuICAgIHZhciBrID0gVUludDMyKHN0ciwgY3VycmVudEluZGV4KTtcblxuICAgIGsgPSBVbXVsMzIoaywgbSk7XG4gICAgayBePSBrID4+PiByO1xuICAgIGsgPSBVbXVsMzIoaywgbSk7XG5cbiAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgIGggXj0gaztcblxuICAgIGN1cnJlbnRJbmRleCArPSA0O1xuICAgIGxlbmd0aCAtPSA0O1xuICB9XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCArIDIpIDw8IDE2O1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IFVtdWwzMihoLCBtKTtcbiAgaCBePSBoID4+PiAxNTtcblxuICByZXR1cm4gaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gVUludDMyKHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCAxNikgKyAoc3RyLmNoYXJDb2RlQXQocG9zKSA8PCAyNCk7XG59XG5cbmZ1bmN0aW9uIFVJbnQxNihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KTtcbn1cblxuZnVuY3Rpb24gVW11bDMyKG4sIG0pIHtcbiAgbiA9IG4gfCAwO1xuICBtID0gbSB8IDA7XG4gIHZhciBubG8gPSBuICYgMHhmZmZmO1xuICB2YXIgbmhpID0gbiA+Pj4gMTY7XG4gIHZhciByZXMgPSBubG8gKiBtICsgKChuaGkgKiBtICYgMHhmZmZmKSA8PCAxNikgfCAwO1xuICByZXR1cm4gcmVzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdmVuZG9yL2dsYW1vci9oYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9mbGF0dGVuMiA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZsYXR0ZW4nKTtcblxudmFyIF9mbGF0dGVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXR0ZW4yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGlzUnVsZVNldCA9IGZ1bmN0aW9uIGlzUnVsZVNldChpbnRlcnBvbGF0aW9uKSB7XG4gIHJldHVybiAhIShpbnRlcnBvbGF0aW9uICYmIEFycmF5LmlzQXJyYXkoaW50ZXJwb2xhdGlvbikgJiYgaW50ZXJwb2xhdGlvbi5sZW5ndGggPiAwICYmIGludGVycG9sYXRpb25bMF0gJiYgQXJyYXkuaXNBcnJheShpbnRlcnBvbGF0aW9uWzBdKSk7XG59O1xuXG52YXIgZmxhdHRlbiA9IGZ1bmN0aW9uIGZsYXR0ZW4oY2h1bmtzLCBleGVjdXRpb25Db250ZXh0KSB7XG4gIC8qIEZhbGwgYmFjayB0byBvbGQgZmxhdHRlbmVyIGZvciBub24tcnVsZS1zZXQgY2h1bmtzICovXG4gIGlmICghaXNSdWxlU2V0KGNodW5rcykpIHtcbiAgICByZXR1cm4gKDAsIF9mbGF0dGVuMy5kZWZhdWx0KShjaHVua3MsIGV4ZWN1dGlvbkNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNodW5rcy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVTZXQsIGNodW5rKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNodW5rKSkge1xuICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgfVxuXG4gICAgdmFyIGFwcGVuZENodW5rcyA9IFtdO1xuXG4gICAgdmFyIG5ld0NodW5rID0gY2h1bmsucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgcnVsZSkge1xuICAgICAgLyogUmVtb3ZlIGZhbHNleSB2YWx1ZXMgKi9cbiAgICAgIGlmIChydWxlID09PSB1bmRlZmluZWQgfHwgcnVsZSA9PT0gbnVsbCB8fCBydWxlID09PSBmYWxzZSB8fCBydWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9XG5cbiAgICAgIC8qIEZsYXR0ZW4gbmVzdGVkIHJ1bGUgc2V0ICovXG4gICAgICBpZiAoaXNSdWxlU2V0KHJ1bGUpKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWUgRG9uJ3Qga25vdyB3aGF0J3Mgd3JvbmcgaGVyZVxuICAgICAgICBhcHBlbmRDaHVua3MgPSBbXS5jb25jYXQoYXBwZW5kQ2h1bmtzLCBmbGF0dGVuKHJ1bGUsIGV4ZWN1dGlvbkNvbnRleHQpKTtcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfVxuXG4gICAgICAvKiBTdHJpbmdpZnkgdW5leHBlY3RlZCBhcnJheSAqL1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocnVsZSkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChydWxlcywgKDAsIF9mbGF0dGVuMy5kZWZhdWx0KShydWxlLCBleGVjdXRpb25Db250ZXh0KSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChleGVjdXRpb25Db250ZXh0KSB7XG4gICAgICAgICAgdmFyIHJlcyA9IHJ1bGUoZXhlY3V0aW9uQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoaXNSdWxlU2V0KHJlcykpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgRG9uJ3Qga25vdyB3aGF0J3Mgd3JvbmcgaGVyZVxuICAgICAgICAgICAgYXBwZW5kQ2h1bmtzID0gW10uY29uY2F0KGFwcGVuZENodW5rcywgZmxhdHRlbihyZXMsIGV4ZWN1dGlvbkNvbnRleHQpKTtcbiAgICAgICAgICAgIHJldHVybiBydWxlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBGbGF0dGVuIG5vbi1ydWxlc2V0IHZhbHVlcyAqL1xuICAgICAgICAgIHJldHVybiBbXS5jb25jYXQocnVsZXMsIGZsYXR0ZW4oW3Jlc10sIGV4ZWN1dGlvbkNvbnRleHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KHJ1bGVzLCBbcnVsZV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEhhbmRsZSBvdGhlciBjb21wb25lbnRzICovXG4gICAgICBpZiAoKHR5cGVvZiBydWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihydWxlKSkgPT09ICdvYmplY3QnICYmIHJ1bGUuaGFzT3duUHJvcGVydHkoJ3N0eWxlZENvbXBvbmVudElkJykpIHJldHVybiBbXS5jb25jYXQocnVsZXMsIFsnLicgKyBydWxlLnN0eWxlZENvbXBvbmVudElkXSk7XG5cbiAgICAgIC8qIENvbnZlcnQgb2JqZWN0IHRvIGNzcyBzdHJpbmcgKi9cbiAgICAgIGlmICgodHlwZW9mIHJ1bGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHJ1bGUpKSA9PT0gJ29iamVjdCcgJiYgKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShydWxlKSkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHJ1bGVzLCBbKDAsIF9mbGF0dGVuMi5vYmpUb0NzcykocnVsZSldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChydWxlcywgW3J1bGUudG9TdHJpbmcoKV0pO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChleGVjdXRpb25Db250ZXh0KSB7XG4gICAgICB2YXIgbmV3Q2h1bmtTdHIgPSBuZXdDaHVuay5qb2luKCcnKTtcbiAgICAgIGlmIChhcHBlbmRDaHVua3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQocnVsZVNldCwgW25ld0NodW5rU3RyXSwgYXBwZW5kQ2h1bmtzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChydWxlU2V0LCBbbmV3Q2h1bmtTdHJdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW10uY29uY2F0KHJ1bGVTZXQsIFtuZXdDaHVua10sIGFwcGVuZENodW5rcyk7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZsYXR0ZW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbm8tcGFyc2VyL2ZsYXR0ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDExNzVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG52YXIgX1N0eWxlU2hlZXRNYW5hZ2VyID0gcmVxdWlyZSgnLi9TdHlsZVNoZWV0TWFuYWdlcicpO1xuXG52YXIgX1N0eWxlU2hlZXRNYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXRNYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhZyA9IHJlcXVpcmUoJy4vU3R5bGVTaGVldCcpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhZyB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG52YXIgU2VydmVyVGFnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJUYWcoaXNMb2NhbCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2ZXJUYWcpO1xuXG4gICAgdGhpcy5pc0xvY2FsID0gaXNMb2NhbDtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMubmFtZXMgPSBbXTtcbiAgfVxuXG4gIFNlcnZlclRhZy5wcm90b3R5cGUuaXNGdWxsID0gZnVuY3Rpb24gaXNGdWxsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIGFkZENvbXBvbmVudChjb21wb25lbnRJZCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdKSB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhZGQgQ29tcG9uZW50IFxcJycgKyBjb21wb25lbnRJZCArICdcXCcgdHdpY2UhJyk7XG4gICAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSA9IHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBjc3M6ICcnIH07XG4gICAgdGhpcy5zaXplICs9IDE7XG4gIH07XG5cbiAgU2VydmVyVGFnLnByb3RvdHlwZS5jb25jYXRlbmF0ZUNTUyA9IGZ1bmN0aW9uIGNvbmNhdGVuYXRlQ1NTKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlcywgaykge1xuICAgICAgcmV0dXJuIHN0eWxlcyArIF90aGlzLmNvbXBvbmVudHNba10uY3NzO1xuICAgIH0sICcnKTtcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdChjb21wb25lbnRJZCwgY3NzLCBuYW1lKSB7XG4gICAgdmFyIGNvbXAgPSB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xuXG4gICAgaWYgKCFjb21wKSB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYWRkIGEgbmV3IGNvbXBvbmVudCBiZWZvcmUgeW91IGNhbiBpbmplY3QgY3NzIGludG8gaXQnKTtcbiAgICBpZiAoY29tcC5jc3MgPT09ICcnKSBjb21wLmNzcyA9ICcvKiBzYy1jb21wb25lbnQtaWQ6ICcgKyBjb21wb25lbnRJZCArICcgKi9cXG4nO1xuXG4gICAgY29tcC5jc3MgKz0gY3NzLnJlcGxhY2UoL1xcbiokLywgJ1xcbicpO1xuXG4gICAgaWYgKG5hbWUpIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICB2YXIgYXR0cnMgPSBbJ3R5cGU9XCJ0ZXh0L2Nzc1wiJywgX1N0eWxlU2hlZXQuU0NfQVRUUiArICc9XCInICsgdGhpcy5uYW1lcy5qb2luKCcgJykgKyAnXCInLCBfU3R5bGVTaGVldC5MT0NBTF9BVFRSICsgJz1cIicgKyAodGhpcy5pc0xvY2FsID8gJ3RydWUnIDogJ2ZhbHNlJykgKyAnXCInXTtcblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuX193ZWJwYWNrX25vbmNlX18pIHtcbiAgICAgIGF0dHJzLnB1c2goJ25vbmNlPVwiJyArIGdsb2JhbC5fX3dlYnBhY2tfbm9uY2VfXyArICdcIicpO1xuICAgIH1cblxuICAgIHJldHVybiAnPHN0eWxlICcgKyBhdHRycy5qb2luKCcgJykgKyAnPicgKyB0aGlzLmNvbmNhdGVuYXRlQ1NTKCkgKyAnPC9zdHlsZT4nO1xuICB9O1xuXG4gIFNlcnZlclRhZy5wcm90b3R5cGUudG9SZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiB0b1JlYWN0RWxlbWVudChrZXkpIHtcbiAgICB2YXIgX2F0dHJzO1xuXG4gICAgdmFyIGF0dHJzID0gKF9hdHRycyA9IHt9LCBfYXR0cnNbX1N0eWxlU2hlZXQuU0NfQVRUUl0gPSB0aGlzLm5hbWVzLmpvaW4oJyAnKSwgX2F0dHJzW19TdHlsZVNoZWV0LkxPQ0FMX0FUVFJdID0gdGhpcy5pc0xvY2FsLnRvU3RyaW5nKCksIF9hdHRycyk7XG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLl9fd2VicGFja19ub25jZV9fKSB7XG4gICAgICBhdHRycy5ub25jZSA9IGdsb2JhbC5fX3dlYnBhY2tfbm9uY2VfXztcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgX2V4dGVuZHMoe1xuICAgICAga2V5OiBrZXksIHR5cGU6ICd0ZXh0L2NzcycgfSwgYXR0cnMsIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5jb25jYXRlbmF0ZUNTUygpIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgU2VydmVyVGFnLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGNvcHkgPSBuZXcgU2VydmVyVGFnKHRoaXMuaXNMb2NhbCk7XG4gICAgY29weS5uYW1lcyA9IFtdLmNvbmNhdCh0aGlzLm5hbWVzKTtcbiAgICBjb3B5LnNpemUgPSB0aGlzLnNpemU7XG4gICAgY29weS5jb21wb25lbnRzID0gT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICBhY2Nba2V5XSA9IF9leHRlbmRzKHt9LCBfdGhpczIuY29tcG9uZW50c1trZXldKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICByZXR1cm4gU2VydmVyVGFnO1xufSgpO1xuXG52YXIgU2VydmVyU3R5bGVTaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmVyU3R5bGVTaGVldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyU3R5bGVTaGVldCk7XG5cbiAgICB0aGlzLmluc3RhbmNlID0gX1N0eWxlU2hlZXQyLmRlZmF1bHQuY2xvbmUoX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5zdGFuY2UpO1xuICB9XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuY29sbGVjdFN0eWxlcyA9IGZ1bmN0aW9uIGNvbGxlY3RTdHlsZXMoY2hpbGRyZW4pIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNhbGxlZCBnZXRTdHlsZVRhZ3MhXCIpO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9TdHlsZVNoZWV0TWFuYWdlcjIuZGVmYXVsdCxcbiAgICAgIHsgc2hlZXQ6IHRoaXMuaW5zdGFuY2UgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRTdHlsZVRhZ3MgPSBmdW5jdGlvbiBnZXRTdHlsZVRhZ3MoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgX1N0eWxlU2hlZXQuY2xvbmVzLnNwbGljZShfU3R5bGVTaGVldC5jbG9uZXMuaW5kZXhPZih0aGlzLmluc3RhbmNlKSwgMSk7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UudG9IVE1MKCk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24gZ2V0U3R5bGVFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIF9TdHlsZVNoZWV0LmNsb25lcy5zcGxpY2UoX1N0eWxlU2hlZXQuY2xvbmVzLmluZGV4T2YodGhpcy5pbnN0YW5jZSksIDEpO1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnRvUmVhY3RFbGVtZW50cygpO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHJldHVybiBuZXcgX1N0eWxlU2hlZXQyLmRlZmF1bHQoZnVuY3Rpb24gKGlzTG9jYWwpIHtcbiAgICAgIHJldHVybiBuZXcgU2VydmVyVGFnKGlzTG9jYWwpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTZXJ2ZXJTdHlsZVNoZWV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TZXJ2ZXJTdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfU3R5bGVTaGVldE1hbmFnZXIkY2g7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vU3R5bGVTaGVldCcpO1xuXG52YXIgX1N0eWxlU2hlZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVTaGVldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFN0eWxlU2hlZXRNYW5hZ2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlU2hlZXRNYW5hZ2VyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0TWFuYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVTaGVldE1hbmFnZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBTdHlsZVNoZWV0TWFuYWdlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltfU3R5bGVTaGVldC5DT05URVhUX0tFWV0gPSB0aGlzLnByb3BzLnNoZWV0LCBfcmVmO1xuICB9O1xuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuICAgIC8vIEZsb3cgdjAuNDMuMSB3aWxsIHJlcG9ydCBhbiBlcnJvciBhY2Nlc3NpbmcgdGhlIGBjaGlsZHJlbmAgcHJvcGVydHksXG4gICAgLy8gYnV0IHYwLjQ3LjAgd2lsbCBub3QuIEl0IGlzIG5lY2Vzc2FyeSB0byB1c2UgYSB0eXBlIGNhc3QgaW5zdGVhZCBvZlxuICAgIC8vIGEgXCJmaXhtZVwiIGNvbW1lbnQgdG8gc2F0aXNmeSBib3RoIEZsb3cgdmVyc2lvbnMuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0TWFuYWdlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblN0eWxlU2hlZXRNYW5hZ2VyLmNoaWxkQ29udGV4dFR5cGVzID0gKF9TdHlsZVNoZWV0TWFuYWdlciRjaCA9IHt9LCBfU3R5bGVTaGVldE1hbmFnZXIkY2hbX1N0eWxlU2hlZXQuQ09OVEVYVF9LRVldID0gX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9TdHlsZVNoZWV0Mi5kZWZhdWx0KS5pc1JlcXVpcmVkLCBfU3R5bGVTaGVldE1hbmFnZXIkY2gpO1xuXG5TdHlsZVNoZWV0TWFuYWdlci5wcm9wVHlwZXMgPSB7XG4gIHNoZWV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX1N0eWxlU2hlZXQyLmRlZmF1bHQpLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlU2hlZXRNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZVNoZWV0TWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTdHlsZWRDb21wb25lbnQ7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIC8qIDogJWNoZWNrcyAqL3tcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCA9PT0gJ3N0cmluZyc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvaXNTdHlsZWRDb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDExNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9Ccm9hZGNhc3RcIiwge1xuICB2YWx1ZTogcmVxdWlyZShcInByb3AtdHlwZXNcIikuc2hhcGUoe1xuICAgIHB1Ymxpc2g6IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzdWJzY3JpYmU6IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLmZ1bmMuaXNSZXF1aXJlZFxuICB9KVxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSBicm9hZGNhc3QgdGhhdCBjYW4gYmUgbGlzdGVuZWQgdG8sIGkuZS4gc2ltcGxlIGV2ZW50IGVtaXR0ZXJcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL3JlYWN0LWJyb2FkY2FzdFxuICovXG5cbnZhciBjcmVhdGVCcm9hZGNhc3QgPSBmdW5jdGlvbiBjcmVhdGVCcm9hZGNhc3QoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uIHB1Ymxpc2godmFsdWUpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcihjdXJyZW50VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICAvLyBQdWJsaXNoIHRvIHRoaXMgc3Vic2NyaWJlciBvbmNlIGltbWVkaWF0ZWx5LlxuICAgICAgbGlzdGVuZXIoY3VycmVudFZhbHVlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb2FkY2FzdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZS1icm9hZGNhc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGlzR2V0T3duUHJvcGVydHlTeW1ib2xzQXZhaWxhYmxlID0gdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGN1c3RvbVN0YXRpY3MpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXlzW2ldXSAmJiAhS05PV05fU1RBVElDU1trZXlzW2ldXSAmJiAoIWN1c3RvbVN0YXRpY3MgfHwgIWN1c3RvbVN0YXRpY3Nba2V5c1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50W2tleXNbaV1dID0gc291cmNlQ29tcG9uZW50W2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlN0eWxlU2hlZXRNYW5hZ2VyID0gZXhwb3J0cy5TZXJ2ZXJTdHlsZVNoZWV0ID0gZXhwb3J0cy53aXRoVGhlbWUgPSBleHBvcnRzLlRoZW1lUHJvdmlkZXIgPSBleHBvcnRzLmluamVjdEdsb2JhbCA9IGV4cG9ydHMua2V5ZnJhbWVzID0gZXhwb3J0cy5jc3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfZmxhdHRlbiA9IHJlcXVpcmUoJy4vZmxhdHRlbicpO1xuXG52YXIgX2ZsYXR0ZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhdHRlbik7XG5cbnZhciBfc3RyaW5naWZ5UnVsZXMgPSByZXF1aXJlKCcuL3N0cmluZ2lmeVJ1bGVzJyk7XG5cbnZhciBfc3RyaW5naWZ5UnVsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5UnVsZXMpO1xuXG52YXIgX2NzcyA9IHJlcXVpcmUoJy4vY3NzJyk7XG5cbnZhciBfY3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzcyk7XG5cbnZhciBfZ2VuZXJhdGVBbHBoYWJldGljTmFtZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dlbmVyYXRlQWxwaGFiZXRpY05hbWUnKTtcblxudmFyIF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlQWxwaGFiZXRpY05hbWUpO1xuXG52YXIgX1NlcnZlclN0eWxlU2hlZXQgPSByZXF1aXJlKCcuLi9tb2RlbHMvU2VydmVyU3R5bGVTaGVldCcpO1xuXG52YXIgX1NlcnZlclN0eWxlU2hlZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VydmVyU3R5bGVTaGVldCk7XG5cbnZhciBfU3R5bGVTaGVldE1hbmFnZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvU3R5bGVTaGVldE1hbmFnZXInKTtcblxudmFyIF9TdHlsZVNoZWV0TWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVNoZWV0TWFuYWdlcik7XG5cbnZhciBfU3R5bGVkQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL21vZGVscy9TdHlsZWRDb21wb25lbnQnKTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVkQ29tcG9uZW50Mik7XG5cbnZhciBfQ29tcG9uZW50U3R5bGUyID0gcmVxdWlyZSgnLi4vbW9kZWxzL0NvbXBvbmVudFN0eWxlJyk7XG5cbnZhciBfQ29tcG9uZW50U3R5bGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29tcG9uZW50U3R5bGUyKTtcblxudmFyIF9zdHlsZWQyID0gcmVxdWlyZSgnLi4vY29uc3RydWN0b3JzL3N0eWxlZCcpO1xuXG52YXIgX3N0eWxlZDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZWQyKTtcblxudmFyIF9rZXlmcmFtZXMyID0gcmVxdWlyZSgnLi4vY29uc3RydWN0b3JzL2tleWZyYW1lcycpO1xuXG52YXIgX2tleWZyYW1lczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlmcmFtZXMyKTtcblxudmFyIF9pbmplY3RHbG9iYWwyID0gcmVxdWlyZSgnLi4vY29uc3RydWN0b3JzL2luamVjdEdsb2JhbCcpO1xuXG52YXIgX2luamVjdEdsb2JhbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmplY3RHbG9iYWwyKTtcblxudmFyIF9jb25zdHJ1Y3RXaXRoT3B0aW9uczIgPSByZXF1aXJlKCcuLi9jb25zdHJ1Y3RvcnMvY29uc3RydWN0V2l0aE9wdGlvbnMnKTtcblxudmFyIF9jb25zdHJ1Y3RXaXRoT3B0aW9uczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25zdHJ1Y3RXaXRoT3B0aW9uczIpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvVGhlbWVQcm92aWRlcicpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGhlbWVQcm92aWRlcik7XG5cbnZhciBfd2l0aFRoZW1lID0gcmVxdWlyZSgnLi4vaG9jL3dpdGhUaGVtZScpO1xuXG52YXIgX3dpdGhUaGVtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoVGhlbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBJbnN0YW50aWF0ZSBzaW5nbGV0b25zICovXG5cblxuLyogSW1wb3J0IGNvbXBvbmVudHMgKi9cblxuXG4vKiBJbXBvcnQgc2luZ2xldG9uIGNvbnN0cnVjdG9ycyAqL1xuXG5cbi8qIEltcG9ydCBuby1wYXJzZXIgc2luZ2xldG9uIHZhcmlhbnRzICovXG52YXIgQ29tcG9uZW50U3R5bGUgPSAoMCwgX0NvbXBvbmVudFN0eWxlMy5kZWZhdWx0KShfZ2VuZXJhdGVBbHBoYWJldGljTmFtZTIuZGVmYXVsdCwgX2ZsYXR0ZW4yLmRlZmF1bHQsIF9zdHJpbmdpZnlSdWxlczIuZGVmYXVsdCk7XG5cbi8qIEltcG9ydCBIaWdoZXIgT3JkZXIgQ29tcG9uZW50cyAqL1xuXG5cbi8qIEltcG9ydCBzaW5nbGV0b25zICovXG5cbnZhciBjb25zdHJ1Y3RXaXRoT3B0aW9ucyA9ICgwLCBfY29uc3RydWN0V2l0aE9wdGlvbnMzLmRlZmF1bHQpKF9jc3MyLmRlZmF1bHQpO1xudmFyIFN0eWxlZENvbXBvbmVudCA9ICgwLCBfU3R5bGVkQ29tcG9uZW50My5kZWZhdWx0KShDb21wb25lbnRTdHlsZSwgY29uc3RydWN0V2l0aE9wdGlvbnMpO1xuXG4vKiBJbnN0YW50aWF0ZSBleHBvcnRlZCBzaW5nbGV0b25zICovXG52YXIga2V5ZnJhbWVzID0gKDAsIF9rZXlmcmFtZXMzLmRlZmF1bHQpKF9nZW5lcmF0ZUFscGhhYmV0aWNOYW1lMi5kZWZhdWx0LCBfc3RyaW5naWZ5UnVsZXMyLmRlZmF1bHQsIF9jc3MyLmRlZmF1bHQpO1xudmFyIGluamVjdEdsb2JhbCA9ICgwLCBfaW5qZWN0R2xvYmFsMy5kZWZhdWx0KShfc3RyaW5naWZ5UnVsZXMyLmRlZmF1bHQsIF9jc3MyLmRlZmF1bHQpO1xudmFyIHN0eWxlZCA9ICgwLCBfc3R5bGVkMy5kZWZhdWx0KShTdHlsZWRDb21wb25lbnQsIGNvbnN0cnVjdFdpdGhPcHRpb25zKTtcblxuLyogRXhwb3J0IGV2ZXJ5dGhpbmcgKi9cbmV4cG9ydHMuZGVmYXVsdCA9IHN0eWxlZDtcbmV4cG9ydHMuY3NzID0gX2NzczIuZGVmYXVsdDtcbmV4cG9ydHMua2V5ZnJhbWVzID0ga2V5ZnJhbWVzO1xuZXhwb3J0cy5pbmplY3RHbG9iYWwgPSBpbmplY3RHbG9iYWw7XG5leHBvcnRzLlRoZW1lUHJvdmlkZXIgPSBfVGhlbWVQcm92aWRlcjIuZGVmYXVsdDtcbmV4cG9ydHMud2l0aFRoZW1lID0gX3dpdGhUaGVtZTIuZGVmYXVsdDtcbmV4cG9ydHMuU2VydmVyU3R5bGVTaGVldCA9IF9TZXJ2ZXJTdHlsZVNoZWV0Mi5kZWZhdWx0O1xuZXhwb3J0cy5TdHlsZVNoZWV0TWFuYWdlciA9IF9TdHlsZVNoZWV0TWFuYWdlcjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbm8tcGFyc2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpID09PSBmYWxzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3Qvbm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm9ialRvQ3NzID0gdW5kZWZpbmVkO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG52YXIgb2JqVG9Dc3MgPSBleHBvcnRzLm9ialRvQ3NzID0gZnVuY3Rpb24gb2JqVG9Dc3Mob2JqLCBwcmV2S2V5KSB7XG4gIHZhciBjc3MgPSBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob2JqW2tleV0pKSByZXR1cm4gb2JqVG9Dc3Mob2JqW2tleV0sIGtleSk7XG4gICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShrZXkpICsgJzogJyArIG9ialtrZXldICsgJzsnO1xuICB9KS5qb2luKCcgJyk7XG4gIHJldHVybiBwcmV2S2V5ID8gcHJldktleSArICcge1xcbiAgJyArIGNzcyArICdcXG59JyA6IGNzcztcbn07XG5cbnZhciBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihjaHVua3MsIGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgcmV0dXJuIGNodW5rcy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVTZXQsIGNodW5rKSB7XG4gICAgLyogUmVtb3ZlIGZhbHNleSB2YWx1ZXMgKi9cbiAgICBpZiAoY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnKSByZXR1cm4gcnVsZVNldDtcbiAgICAvKiBGbGF0dGVuIHJ1bGVTZXQgKi9cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHJldHVybiBbXS5jb25jYXQocnVsZVNldCwgZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCkpO1xuXG4gICAgLyogSGFuZGxlIG90aGVyIGNvbXBvbmVudHMgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vdCBzdXJlIGhvdyB0byBtYWtlIHRoaXMgcGFzc1xuICAgIGlmIChjaHVuay5oYXNPd25Qcm9wZXJ0eSgnc3R5bGVkQ29tcG9uZW50SWQnKSkgcmV0dXJuIFtdLmNvbmNhdChydWxlU2V0LCBbJy4nICsgY2h1bmsuc3R5bGVkQ29tcG9uZW50SWRdKTtcblxuICAgIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBleGVjdXRpb25Db250ZXh0ID8gcnVsZVNldC5jb25jYXQuYXBwbHkocnVsZVNldCwgZmxhdHRlbihbY2h1bmsoZXhlY3V0aW9uQ29udGV4dCldLCBleGVjdXRpb25Db250ZXh0KSkgOiBydWxlU2V0LmNvbmNhdChjaHVuayk7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlIG9iamVjdHMgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIGhhdmUgdG8gYWRkICVjaGVja3Mgc29tZWhvdyB0byBpc1BsYWluT2JqZWN0XG4gICAgcmV0dXJuIHJ1bGVTZXQuY29uY2F0KCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoY2h1bmspID8gb2JqVG9Dc3MoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKSk7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZsYXR0ZW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2ZsYXR0ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDExOTBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIHN0cmluZ2lmeVJ1bGVzID0gZnVuY3Rpb24gc3RyaW5naWZ5UnVsZXMocnVsZXMsIHNlbGVjdG9yLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBwYXJ0aWFsLCBpbmRleCkge1xuICAgIHJldHVybiBzdHIgKyAoXG4gICAgLy8gTk9URTogVGhpcyBpcyB0byBub3QgcHJlZml4IGtleWZyYW1lcyB3aXRoIHRoZSBhbmltYXRpb24gbmFtZVxuICAgIChpbmRleCA+IDAgfHwgIXByZWZpeCkgJiYgc2VsZWN0b3IgPyBzZWxlY3RvciA6ICcnKSArIChwYXJ0aWFsICYmIEFycmF5LmlzQXJyYXkocGFydGlhbCkgPyBwYXJ0aWFsLmpvaW4oJycpIDogcGFydGlhbC50b1N0cmluZygpKTtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5naWZ5UnVsZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbm8tcGFyc2VyL3N0cmluZ2lmeVJ1bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZmxhdHRlbiA9IHJlcXVpcmUoJy4vZmxhdHRlbicpO1xuXG52YXIgX2ZsYXR0ZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhdHRlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0IHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9JbnRlcnBvbGF0aW9uIHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnRlcnBvbGF0aW9ucykge1xuICByZXR1cm4gKDAsIF9mbGF0dGVuMi5kZWZhdWx0KShpbnRlcnBvbGF0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbm8tcGFyc2VyL2Nzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KCcnKTtcbnZhciBjaGFyc0xlbmd0aCA9IGNoYXJzLmxlbmd0aDtcblxuLyogU29tZSBoaWdoIG51bWJlciwgdXN1YWxseSA5LWRpZ2l0IGJhc2UtMTAuIE1hcCBpdCB0byBiYXNlLfCfmI4gKi9cbnZhciBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lID0gZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciB4ID0gdm9pZCAwO1xuXG4gIGZvciAoeCA9IGNvZGU7IHggPiBjaGFyc0xlbmd0aDsgeCA9IE1hdGguZmxvb3IoeCAvIGNoYXJzTGVuZ3RoKSkge1xuICAgIG5hbWUgPSBjaGFyc1t4ICUgY2hhcnNMZW5ndGhdICsgbmFtZTtcbiAgfVxuXG4gIHJldHVybiBjaGFyc1t4ICUgY2hhcnNMZW5ndGhdICsgbmFtZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZ2VuZXJhdGVBbHBoYWJldGljTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5DT01QT05FTlRTX1BFUl9UQUcgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0cmFjdENvbXBzRnJvbUNTUyA9IHJlcXVpcmUoJy4uL3V0aWxzL2V4dHJhY3RDb21wc0Zyb21DU1MnKTtcblxudmFyIF9leHRyYWN0Q29tcHNGcm9tQ1NTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RDb21wc0Zyb21DU1MpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qXG4gKiBCcm93c2VyIFN0eWxlIFNoZWV0IHdpdGggUmVoeWRyYXRpb25cbiAqXG4gKiA8c3R5bGUgZGF0YS1zdHlsZWQtY29tcG9uZW50cz1cInggeSB6XCJcbiAqICAgICAgICBkYXRhLXN0eWxlZC1jb21wb25lbnRzLWlzLWxvY2FsPVwidHJ1ZVwiPlxuICogICAvwrcgc2MtY29tcG9uZW50LWlkOiBhIMK3L1xuICogICAuc2MtYSB7IC4uLiB9XG4gKiAgIC54IHsgLi4uIH1cbiAqICAgL8K3IHNjLWNvbXBvbmVudC1pZDogYiDCty9cbiAqICAgLnNjLWIgeyAuLi4gfVxuICogICAueSB7IC4uLiB9XG4gKiAgIC56IHsgLi4uIH1cbiAqIDwvc3R5bGU+XG4gKlxuICogTm90ZTogcmVwbGFjZSDCtyB3aXRoICogaW4gdGhlIGFib3ZlIHNuaXBwZXQuXG4gKiAqL1xuXG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYWcgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYWcgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIENPTVBPTkVOVFNfUEVSX1RBRyA9IGV4cG9ydHMuQ09NUE9ORU5UU19QRVJfVEFHID0gNDA7XG5cbnZhciBCcm93c2VyVGFnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCcm93c2VyVGFnKGVsLCBpc0xvY2FsKSB7XG4gICAgdmFyIGV4aXN0aW5nU291cmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcm93c2VyVGFnKTtcblxuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcblxuICAgIHZhciBleHRyYWN0ZWRDb21wcyA9ICgwLCBfZXh0cmFjdENvbXBzRnJvbUNTUzIuZGVmYXVsdCkoZXhpc3RpbmdTb3VyY2UpO1xuXG4gICAgdGhpcy5zaXplID0gZXh0cmFjdGVkQ29tcHMubGVuZ3RoO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IGV4dHJhY3RlZENvbXBzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBvYmopIHtcbiAgICAgIGFjY1tvYmouY29tcG9uZW50SWRdID0gb2JqOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIEJyb3dzZXJUYWcucHJvdG90eXBlLmlzRnVsbCA9IGZ1bmN0aW9uIGlzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID49IENPTVBPTkVOVFNfUEVSX1RBRztcbiAgfTtcblxuICBCcm93c2VyVGFnLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbiBhZGRDb21wb25lbnQoY29tcG9uZW50SWQpIHtcbiAgICBpZiAoIXRoaXMucmVhZHkpIHRoaXMucmVwbGFjZUVsZW1lbnQoKTtcbiAgICBpZiAodGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSkgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWRkIENvbXBvbmVudCBcXCcnICsgY29tcG9uZW50SWQgKyAnXFwnIHR3aWNlIScpO1xuXG4gICAgdmFyIGNvbXAgPSB7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgdGV4dE5vZGU6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSB9O1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY29tcC50ZXh0Tm9kZSk7XG5cbiAgICB0aGlzLnNpemUgKz0gMTtcbiAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdID0gY29tcDtcbiAgfTtcblxuICBCcm93c2VyVGFnLnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoY29tcG9uZW50SWQsIGNzcywgbmFtZSkge1xuICAgIGlmICghdGhpcy5yZWFkeSkgdGhpcy5yZXBsYWNlRWxlbWVudCgpO1xuICAgIHZhciBjb21wID0gdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXTtcblxuICAgIGlmICghY29tcCkgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGFkZCBhIG5ldyBjb21wb25lbnQgYmVmb3JlIHlvdSBjYW4gaW5qZWN0IGNzcyBpbnRvIGl0Jyk7XG4gICAgaWYgKGNvbXAudGV4dE5vZGUuZGF0YSA9PT0gJycpIGNvbXAudGV4dE5vZGUuYXBwZW5kRGF0YSgnXFxuLyogc2MtY29tcG9uZW50LWlkOiAnICsgY29tcG9uZW50SWQgKyAnICovXFxuJyk7XG5cbiAgICBjb21wLnRleHROb2RlLmFwcGVuZERhdGEoY3NzKTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIGV4aXN0aW5nTmFtZXMgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShfU3R5bGVTaGVldC5TQ19BVFRSKTtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKF9TdHlsZVNoZWV0LlNDX0FUVFIsIGV4aXN0aW5nTmFtZXMgPyBleGlzdGluZ05hbWVzICsgJyAnICsgbmFtZSA6IG5hbWUpO1xuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fd2VicGFja19ub25jZV9fKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdub25jZScsIHdpbmRvdy5fX3dlYnBhY2tfbm9uY2VfXyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEJyb3dzZXJUYWcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5vdXRlckhUTUw7XG4gIH07XG5cbiAgQnJvd3NlclRhZy5wcm90b3R5cGUudG9SZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiB0b1JlYWN0RWxlbWVudCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXJUYWcgZG9lc25cXCd0IGltcGxlbWVudCB0b1JlYWN0RWxlbWVudCEnKTtcbiAgfTtcblxuICBCcm93c2VyVGFnLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQnJvd3NlclRhZyBjYW5ub3QgYmUgY2xvbmVkIScpO1xuICB9O1xuXG4gIC8qIEJlY2F1c2Ugd2UgY2FyZSBhYm91dCBzb3VyY2Ugb3JkZXIsIGJlZm9yZSB3ZSBjYW4gaW5qZWN0IGFueXRoaW5nIHdlIG5lZWQgdG9cbiAgICogY3JlYXRlIGEgdGV4dCBub2RlIGZvciBlYWNoIGNvbXBvbmVudCBhbmQgcmVwbGFjZSB0aGUgZXhpc3RpbmcgQ1NTLiAqL1xuXG5cbiAgQnJvd3NlclRhZy5wcm90b3R5cGUucmVwbGFjZUVsZW1lbnQgPSBmdW5jdGlvbiByZXBsYWNlRWxlbWVudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgLy8gV2UgaGF2ZSBub3RoaW5nIHRvIGluamVjdC4gVXNlIHRoZSBjdXJyZW50IGVsLlxuICAgIGlmICh0aGlzLnNpemUgPT09IDApIHJldHVybjtcblxuICAgIC8vIEJ1aWxkIHVwIG91ciByZXBsYWNlbWVudCBzdHlsZSB0YWdcbiAgICB2YXIgbmV3RWwgPSB0aGlzLmVsLmNsb25lTm9kZSgpO1xuICAgIG5ld0VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcXG4nKSk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGNvbXAgPSBfdGhpcy5jb21wb25lbnRzW2tleV07XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgY29tcC50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbXAuY3NzRnJvbURPTSk7XG4gICAgICBuZXdFbC5hcHBlbmRDaGlsZChjb21wLnRleHROb2RlKTtcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5lbC5wYXJlbnROb2RlKSB0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gcmVwbGFjZSBhbiBlbGVtZW50IHRoYXQgd2Fzbid0IG1vdW50ZWQhXCIpO1xuXG4gICAgLy8gVGhlIG9sJyBzd2l0Y2hlcm9vXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbCwgdGhpcy5lbCk7XG4gICAgdGhpcy5lbCA9IG5ld0VsO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyVGFnO1xufSgpO1xuXG4vKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIHNlcGFyYXRlIERPTSBvcGVyYXRpb25zIGZyb20gbG9naWNhbCBvbmVzKi9cblxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciB0YWdzID0gW107XG4gICAgdmFyIG5hbWVzID0ge307XG5cbiAgICAvKiBDb25zdHJ1Y3QgZXhpc3Rpbmcgc3RhdGUgZnJvbSBET00gKi9cbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJyArIF9TdHlsZVNoZWV0LlNDX0FUVFIgKyAnXScpO1xuICAgIHZhciBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGVsID0gbm9kZXNbaV07XG5cbiAgICAgIHRhZ3MucHVzaChuZXcgQnJvd3NlclRhZyhlbCwgZWwuZ2V0QXR0cmlidXRlKF9TdHlsZVNoZWV0LkxPQ0FMX0FUVFIpID09PSAndHJ1ZScsIGVsLmlubmVySFRNTCkpO1xuXG4gICAgICB2YXIgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZShfU3R5bGVTaGVldC5TQ19BVFRSKTtcbiAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgIGF0dHIudHJpbSgpLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogRmFjdG9yeSBmb3IgbWFraW5nIG1vcmUgdGFncyAqL1xuICAgIHZhciB0YWdDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIHRhZ0NvbnN0cnVjdG9yKGlzTG9jYWwpIHtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShfU3R5bGVTaGVldC5TQ19BVFRSLCAnJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoX1N0eWxlU2hlZXQuTE9DQUxfQVRUUiwgaXNMb2NhbCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgaWYgKCFkb2N1bWVudC5oZWFkKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZG9jdW1lbnQgPGhlYWQ+Jyk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIHJldHVybiBuZXcgQnJvd3NlclRhZyhlbCwgaXNMb2NhbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgX1N0eWxlU2hlZXQyLmRlZmF1bHQodGFnQ29uc3RydWN0b3IsIHRhZ3MsIG5hbWVzKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvbW9kZWxzL0Jyb3dzZXJTdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgU0NfQ09NUE9ORU5UX0lEID0gL15bXlxcU1xcbl0qP1xcL1xcKiBzYy1jb21wb25lbnQtaWQ6XFxzKyhcXFMrKVxccytcXCpcXC8vbWc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtYXliZUNTUykge1xuICB2YXIgY3NzID0gJycgKyAobWF5YmVDU1MgfHwgJycpOyAvLyBEZWZpbml0ZWx5IGEgc3RyaW5nLCBhbmQgYSBjbG9uZVxuICB2YXIgZXhpc3RpbmdDb21wb25lbnRzID0gW107XG4gIGNzcy5yZXBsYWNlKFNDX0NPTVBPTkVOVF9JRCwgZnVuY3Rpb24gKG1hdGNoLCBjb21wb25lbnRJZCwgbWF0Y2hJbmRleCkge1xuICAgIGV4aXN0aW5nQ29tcG9uZW50cy5wdXNoKHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBtYXRjaEluZGV4OiBtYXRjaEluZGV4IH0pO1xuICAgIHJldHVybiBtYXRjaDtcbiAgfSk7XG4gIHJldHVybiBleGlzdGluZ0NvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChfcmVmLCBpKSB7XG4gICAgdmFyIGNvbXBvbmVudElkID0gX3JlZi5jb21wb25lbnRJZCxcbiAgICAgICAgbWF0Y2hJbmRleCA9IF9yZWYubWF0Y2hJbmRleDtcblxuICAgIHZhciBuZXh0Q29tcCA9IGV4aXN0aW5nQ29tcG9uZW50c1tpICsgMV07XG4gICAgdmFyIGNzc0Zyb21ET00gPSBuZXh0Q29tcCA/IGNzcy5zbGljZShtYXRjaEluZGV4LCBuZXh0Q29tcC5tYXRjaEluZGV4KSA6IGNzcy5zbGljZShtYXRjaEluZGV4KTtcbiAgICByZXR1cm4geyBjb21wb25lbnRJZDogY29tcG9uZW50SWQsIGNzc0Zyb21ET006IGNzc0Zyb21ET00gfTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZXh0cmFjdENvbXBzRnJvbUNTUy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzID0gcmVxdWlyZSgnLi4vdXRpbHMvY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzJyk7XG5cbnZhciBfY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVdhcm5Ub29NYW55Q2xhc3Nlcyk7XG5cbnZhciBfdmFsaWRBdHRyID0gcmVxdWlyZSgnLi4vdXRpbHMvdmFsaWRBdHRyJyk7XG5cbnZhciBfdmFsaWRBdHRyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbGlkQXR0cik7XG5cbnZhciBfaXNUYWcgPSByZXF1aXJlKCcuLi91dGlscy9pc1RhZycpO1xuXG52YXIgX2lzVGFnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVGFnKTtcblxudmFyIF9pc1N0eWxlZENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzU3R5bGVkQ29tcG9uZW50Jyk7XG5cbnZhciBfaXNTdHlsZWRDb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNTdHlsZWRDb21wb25lbnQpO1xuXG52YXIgX2dldENvbXBvbmVudE5hbWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRDb21wb25lbnROYW1lJyk7XG5cbnZhciBfZ2V0Q29tcG9uZW50TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wb25lbnROYW1lKTtcblxudmFyIF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudCA9IHJlcXVpcmUoJy4vQWJzdHJhY3RTdHlsZWRDb21wb25lbnQnKTtcblxudmFyIF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFN0eWxlZENvbXBvbmVudCk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoJy4vVGhlbWVQcm92aWRlcicpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RoZW1lID0gcmVxdWlyZSgnLi9UaGVtZVByb3ZpZGVyJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGhlbWUgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0IHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9SdWxlU2V0IHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbnZhciBlc2NhcGVSZWdleCA9IC9bW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2BdL2c7XG52YXIgbXVsdGlEYXNoUmVnZXggPSAvLS0rL2c7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChDb21wb25lbnRTdHlsZSwgY29uc3RydWN0V2l0aE9wdGlvbnMpIHtcbiAgLyogV2UgZGVwZW5kIG9uIGNvbXBvbmVudHMgaGF2aW5nIHVuaXF1ZSBJRHMgKi9cbiAgdmFyIGlkZW50aWZpZXJzID0ge307XG4gIHZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChfZGlzcGxheU5hbWUsIHBhcmVudENvbXBvbmVudElkKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIF9kaXNwbGF5TmFtZSAhPT0gJ3N0cmluZycgPyAnc2MnIDogX2Rpc3BsYXlOYW1lLnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJykgLy8gUmVwbGFjZSBhbGwgcG9zc2libGUgQ1NTIHNlbGVjdG9yc1xuICAgIC5yZXBsYWNlKG11bHRpRGFzaFJlZ2V4LCAnLScpOyAvLyBSZXBsYWNlIG11bHRpcGxlIC0tIHdpdGggc2luZ2xlIC1cblxuICAgIHZhciBuciA9IChpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gfHwgMCkgKyAxO1xuICAgIGlkZW50aWZpZXJzW2Rpc3BsYXlOYW1lXSA9IG5yO1xuXG4gICAgdmFyIGhhc2ggPSBDb21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUoZGlzcGxheU5hbWUgKyBucik7XG4gICAgdmFyIGNvbXBvbmVudElkID0gZGlzcGxheU5hbWUgKyAnLScgKyBoYXNoO1xuICAgIHJldHVybiBwYXJlbnRDb21wb25lbnRJZCAhPT0gdW5kZWZpbmVkID8gcGFyZW50Q29tcG9uZW50SWQgKyAnLScgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xuICB9O1xuXG4gIHZhciBCYXNlU3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9BYnN0cmFjdFN0eWxlZENvbXBvbikge1xuICAgIF9pbmhlcml0cyhCYXNlU3R5bGVkQ29tcG9uZW50LCBfQWJzdHJhY3RTdHlsZWRDb21wb24pO1xuXG4gICAgZnVuY3Rpb24gQmFzZVN0eWxlZENvbXBvbmVudCgpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlU3R5bGVkQ29tcG9uZW50KTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWJzdHJhY3RTdHlsZWRDb21wb24uY2FsbC5hcHBseShfQWJzdHJhY3RTdHlsZWRDb21wb24sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5hdHRycyA9IHt9LCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGhlbWU6IG51bGwsXG4gICAgICAgIGdlbmVyYXRlZENsYXNzTmFtZTogJydcbiAgICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIEJhc2VTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCA9IGZ1bmN0aW9uIGJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMpIHtcbiAgICAgIHZhciBhdHRycyA9IHRoaXMuY29uc3RydWN0b3IuYXR0cnM7XG5cbiAgICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7IHRoZW1lOiB0aGVtZSB9KTtcbiAgICAgIGlmIChhdHRycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1trZXldO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgYWNjW2tleV0gPSB0eXBlb2YgYXR0ciA9PT0gJ2Z1bmN0aW9uJyA/IGF0dHIoY29udGV4dCkgOiBhdHRyO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHRoaXMuYXR0cnMpO1xuICAgIH07XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoZW1lLCBwcm9wcykge1xuICAgICAgdmFyIF9jb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfY29uc3RydWN0b3IuY29tcG9uZW50U3R5bGUsXG4gICAgICAgICAgd2FyblRvb01hbnlDbGFzc2VzID0gX2NvbnN0cnVjdG9yLndhcm5Ub29NYW55Q2xhc3NlcztcblxuICAgICAgdmFyIGV4ZWN1dGlvbkNvbnRleHQgPSB0aGlzLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMpO1xuICAgICAgdmFyIHN0eWxlU2hlZXQgPSB0aGlzLmNvbnRleHRbX1N0eWxlU2hlZXQuQ09OVEVYVF9LRVldIHx8IF9TdHlsZVNoZWV0Mi5kZWZhdWx0Lmluc3RhbmNlO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuXG4gICAgICBpZiAod2FyblRvb01hbnlDbGFzc2VzICE9PSB1bmRlZmluZWQpIHdhcm5Ub29NYW55Q2xhc3NlcyhjbGFzc05hbWUpO1xuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH07XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0aGVtZSBpbiB0aGUgY29udGV4dCwgc3Vic2NyaWJlIHRvIHRoZSBldmVudCBlbWl0dGVyLiBUaGlzXG4gICAgICAvLyBpcyBuZWNlc3NhcnkgZHVlIHRvIHB1cmUgY29tcG9uZW50cyBibG9ja2luZyBjb250ZXh0IHVwZGF0ZXMsIHRoaXMgY2lyY3VtdmVudHNcbiAgICAgIC8vIHRoYXQgYnkgdXBkYXRpbmcgd2hlbiBhbiBldmVudCBpcyBlbWl0dGVkXG4gICAgICBpZiAodGhpcy5jb250ZXh0W19UaGVtZVByb3ZpZGVyLkNIQU5ORUxdKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmUgPSB0aGlzLmNvbnRleHRbX1RoZW1lUHJvdmlkZXIuQ0hBTk5FTF07XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKG5leHRUaGVtZSkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgb25jZSBpbW1lZGlhdGVseVxuXG4gICAgICAgICAgLy8gUHJvcHMgc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyIFRoZW1lUHJvdmlkZXIsIHdoaWNoIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlclxuICAgICAgICAgIC8vIGRlZmF1bHRQcm9wcywgYnV0IFJlYWN0IGF1dG9tYXRpY2FsbHkgcHV0cyBkZWZhdWx0UHJvcHMgb24gcHJvcHMuXG4gICAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IF90aGlzMi5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgICB2YXIgaXNEZWZhdWx0VGhlbWUgPSBkZWZhdWx0UHJvcHMgJiYgX3RoaXMyLnByb3BzLnRoZW1lID09PSBkZWZhdWx0UHJvcHMudGhlbWU7XG4gICAgICAgICAgdmFyIHRoZW1lID0gX3RoaXMyLnByb3BzLnRoZW1lICYmICFpc0RlZmF1bHRUaGVtZSA/IF90aGlzMi5wcm9wcy50aGVtZSA6IG5leHRUaGVtZTtcbiAgICAgICAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gX3RoaXMyLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoZW1lLCBfdGhpczIucHJvcHMpO1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRoZW1lOiB0aGVtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lOiBnZW5lcmF0ZWRDbGFzc05hbWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF90aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwge307XG4gICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKF90aGVtZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogX3RoZW1lLCBnZW5lcmF0ZWRDbGFzc05hbWU6IGdlbmVyYXRlZENsYXNzTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFzZVN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAob2xkU3RhdGUpIHtcbiAgICAgICAgLy8gUHJvcHMgc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyIFRoZW1lUHJvdmlkZXIsIHdoaWNoIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlclxuICAgICAgICAvLyBkZWZhdWx0UHJvcHMsIGJ1dCBSZWFjdCBhdXRvbWF0aWNhbGx5IHB1dHMgZGVmYXVsdFByb3BzIG9uIHByb3BzLlxuICAgICAgICB2YXIgZGVmYXVsdFByb3BzID0gX3RoaXMzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcztcblxuICAgICAgICB2YXIgaXNEZWZhdWx0VGhlbWUgPSBkZWZhdWx0UHJvcHMgJiYgbmV4dFByb3BzLnRoZW1lID09PSBkZWZhdWx0UHJvcHMudGhlbWU7XG4gICAgICAgIHZhciB0aGVtZSA9IG5leHRQcm9wcy50aGVtZSAmJiAhaXNEZWZhdWx0VGhlbWUgPyBuZXh0UHJvcHMudGhlbWUgOiBvbGRTdGF0ZS50aGVtZTtcbiAgICAgICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IF90aGlzMy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgbmV4dFByb3BzKTtcblxuICAgICAgICByZXR1cm4geyB0aGVtZTogdGhlbWUsIGdlbmVyYXRlZENsYXNzTmFtZTogZ2VuZXJhdGVkQ2xhc3NOYW1lIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQmFzZVN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFzZVN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBpbm5lclJlZiA9IHRoaXMucHJvcHMuaW5uZXJSZWY7XG4gICAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5nZW5lcmF0ZWRDbGFzc05hbWU7XG4gICAgICB2YXIgX2NvbnN0cnVjdG9yMiA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50SWQgPSBfY29uc3RydWN0b3IyLnN0eWxlZENvbXBvbmVudElkLFxuICAgICAgICAgIHRhcmdldCA9IF9jb25zdHJ1Y3RvcjIudGFyZ2V0O1xuXG5cbiAgICAgIHZhciBpc1RhcmdldFRhZyA9ICgwLCBfaXNUYWcyLmRlZmF1bHQpKHRhcmdldCk7XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSBbdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlZENvbXBvbmVudElkLCB0aGlzLmF0dHJzLmNsYXNzTmFtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgICB2YXIgYmFzZVByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuYXR0cnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoKDAsIF9pc1N0eWxlZENvbXBvbmVudDIuZGVmYXVsdCkodGFyZ2V0KSkge1xuICAgICAgICBiYXNlUHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VQcm9wcy5yZWYgPSBpbm5lclJlZjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzRm9yRWxlbWVudCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wTmFtZSkge1xuICAgICAgICAvLyBEb24ndCBwYXNzIHRocm91Z2ggbm9uIEhUTUwgdGFncyB0aHJvdWdoIHRvIEhUTUwgZWxlbWVudHNcbiAgICAgICAgLy8gYWx3YXlzIG9taXQgaW5uZXJSZWZcbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSAnaW5uZXJSZWYnICYmIHByb3BOYW1lICE9PSAnY2xhc3NOYW1lJyAmJiAoIWlzVGFyZ2V0VGFnIHx8ICgwLCBfdmFsaWRBdHRyMi5kZWZhdWx0KShwcm9wTmFtZSkpKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgYWNjW3Byb3BOYW1lXSA9IF90aGlzNC5wcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgYmFzZVByb3BzKTtcblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkodGFyZ2V0LCBwcm9wc0ZvckVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFzZVN0eWxlZENvbXBvbmVudDtcbiAgfShfQWJzdHJhY3RTdHlsZWRDb21wb25lbnQyLmRlZmF1bHQpO1xuXG4gIHZhciBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZWRDb21wb25lbnQodGFyZ2V0LCBvcHRpb25zLCBydWxlcykge1xuICAgIHZhciBfU3R5bGVkQ29tcG9uZW50JGNvbnQ7XG5cbiAgICB2YXIgX29wdGlvbnMkZGlzcGxheU5hbWUgPSBvcHRpb25zLmRpc3BsYXlOYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IF9vcHRpb25zJGRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyAoMCwgX2lzVGFnMi5kZWZhdWx0KSh0YXJnZXQpID8gJ3N0eWxlZC4nICsgdGFyZ2V0IDogJ1N0eWxlZCgnICsgKDAsIF9nZXRDb21wb25lbnROYW1lMi5kZWZhdWx0KSh0YXJnZXQpICsgJyknIDogX29wdGlvbnMkZGlzcGxheU5hbWUsXG4gICAgICAgIF9vcHRpb25zJGNvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50SWQgPSBfb3B0aW9ucyRjb21wb25lbnRJZCA9PT0gdW5kZWZpbmVkID8gZ2VuZXJhdGVJZChvcHRpb25zLmRpc3BsYXlOYW1lLCBvcHRpb25zLnBhcmVudENvbXBvbmVudElkKSA6IF9vcHRpb25zJGNvbXBvbmVudElkLFxuICAgICAgICBfb3B0aW9ucyRQYXJlbnRDb21wb24gPSBvcHRpb25zLlBhcmVudENvbXBvbmVudCxcbiAgICAgICAgUGFyZW50Q29tcG9uZW50ID0gX29wdGlvbnMkUGFyZW50Q29tcG9uID09PSB1bmRlZmluZWQgPyBCYXNlU3R5bGVkQ29tcG9uZW50IDogX29wdGlvbnMkUGFyZW50Q29tcG9uLFxuICAgICAgICBleHRlbmRpbmdSdWxlcyA9IG9wdGlvbnMucnVsZXMsXG4gICAgICAgIGF0dHJzID0gb3B0aW9ucy5hdHRycztcblxuXG4gICAgdmFyIHN0eWxlZENvbXBvbmVudElkID0gb3B0aW9ucy5kaXNwbGF5TmFtZSAmJiBvcHRpb25zLmNvbXBvbmVudElkID8gb3B0aW9ucy5kaXNwbGF5TmFtZSArICctJyArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBjb21wb25lbnRJZDtcblxuICAgIHZhciB3YXJuVG9vTWFueUNsYXNzZXMgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuVG9vTWFueUNsYXNzZXMgPSAoMCwgX2NyZWF0ZVdhcm5Ub29NYW55Q2xhc3NlczIuZGVmYXVsdCkoZGlzcGxheU5hbWUpO1xuICAgIH1cblxuICAgIHZhciBjb21wb25lbnRTdHlsZSA9IG5ldyBDb21wb25lbnRTdHlsZShleHRlbmRpbmdSdWxlcyA9PT0gdW5kZWZpbmVkID8gcnVsZXMgOiBleHRlbmRpbmdSdWxlcy5jb25jYXQocnVsZXMpLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgICB2YXIgU3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9QYXJlbnRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhTdHlsZWRDb21wb25lbnQsIF9QYXJlbnRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUGFyZW50Q29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICBTdHlsZWRDb21wb25lbnQud2l0aENvbXBvbmVudCA9IGZ1bmN0aW9uIHdpdGhDb21wb25lbnQodGFnKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgIG9wdGlvbnNUb0NvcHkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydjb21wb25lbnRJZCddKTtcblxuICAgICAgICB2YXIgbmV3Q29tcG9uZW50SWQgPSBwcmV2aW91c0NvbXBvbmVudElkICYmIHByZXZpb3VzQ29tcG9uZW50SWQgKyAnLScgKyAoKDAsIF9pc1RhZzIuZGVmYXVsdCkodGFnKSA/IHRhZyA6ICgwLCBfZ2V0Q29tcG9uZW50TmFtZTIuZGVmYXVsdCkodGFnKSk7XG5cbiAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgICAgIGNvbXBvbmVudElkOiBuZXdDb21wb25lbnRJZCxcbiAgICAgICAgICBQYXJlbnRDb21wb25lbnQ6IFN0eWxlZENvbXBvbmVudFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhZywgbmV3T3B0aW9ucywgcnVsZXMpO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKFN0eWxlZENvbXBvbmVudCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZXh0ZW5kJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdmFyIHJ1bGVzRnJvbU9wdGlvbnMgPSBvcHRpb25zLnJ1bGVzLFxuICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgIG9wdGlvbnNUb0NvcHkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydydWxlcycsICdjb21wb25lbnRJZCddKTtcblxuICAgICAgICAgIHZhciBuZXdSdWxlcyA9IHJ1bGVzRnJvbU9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHJ1bGVzIDogcnVsZXNGcm9tT3B0aW9ucy5jb25jYXQocnVsZXMpO1xuXG4gICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgICAgICAgcnVsZXM6IG5ld1J1bGVzLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50SWQ6IHBhcmVudENvbXBvbmVudElkLFxuICAgICAgICAgICAgUGFyZW50Q29tcG9uZW50OiBTdHlsZWRDb21wb25lbnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhcmdldCwgbmV3T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbiAgICB9KFBhcmVudENvbXBvbmVudCk7XG5cbiAgICBTdHlsZWRDb21wb25lbnQuY29udGV4dFR5cGVzID0gKF9TdHlsZWRDb21wb25lbnQkY29udCA9IHt9LCBfU3R5bGVkQ29tcG9uZW50JGNvbnRbX1RoZW1lUHJvdmlkZXIuQ0hBTk5FTF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9TdHlsZWRDb21wb25lbnQkY29udFtfU3R5bGVTaGVldC5DT05URVhUX0tFWV0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX1N0eWxlU2hlZXQyLmRlZmF1bHQpLCBfU3R5bGVkQ29tcG9uZW50JGNvbnQpO1xuICAgIFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZCA9IHN0eWxlZENvbXBvbmVudElkO1xuICAgIFN0eWxlZENvbXBvbmVudC5hdHRycyA9IGF0dHJzO1xuICAgIFN0eWxlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSA9IGNvbXBvbmVudFN0eWxlO1xuICAgIFN0eWxlZENvbXBvbmVudC53YXJuVG9vTWFueUNsYXNzZXMgPSB3YXJuVG9vTWFueUNsYXNzZXM7XG4gICAgU3R5bGVkQ29tcG9uZW50LnRhcmdldCA9IHRhcmdldDtcblxuXG4gICAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlU3R5bGVkQ29tcG9uZW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9TdHlsZWRDb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDExOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBMSU1JVCA9IDIwMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gIHZhciBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gIHZhciB3YXJuaW5nU2VlbiA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF3YXJuaW5nU2Vlbikge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhnZW5lcmF0ZWRDbGFzc2VzKS5sZW5ndGggPj0gTElNSVQpIHtcbiAgICAgICAgLy8gVW5hYmxlIHRvIGZpbmQgbGF0ZXN0UnVsZSBpbiB0ZXN0IGVudmlyb25tZW50LlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBwcmVmZXItdGVtcGxhdGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKCdPdmVyICcgKyBMSU1JVCArICcgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50ICcgKyBkaXNwbGF5TmFtZSArICcuICcgKyAnQ29uc2lkZXIgdXNpbmcgc3R5bGUgcHJvcGVydHkgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuJyArICdFeGFtcGxlOlxcbicgKyAnICBjb25zdCBTdHlsZWRDb21wID0gc3R5bGVkLmRpdmB3aWR0aDogMTAwJTtgXFxuJyArICcgIDxTdHlsZWRDb21wIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhY2tncm91bmQgfX0gLz4nKTtcbiAgICAgICAgd2FybmluZ1NlZW4gPSB0cnVlO1xuICAgICAgICBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL3V0aWxzL2NyZWF0ZVdhcm5Ub29NYW55Q2xhc3Nlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKiBUcnlpbmcgdG8gYXZvaWQgdGhlIHVua25vd24tcHJvcCBlcnJvcnMgb24gc3R5bGVkIGNvbXBvbmVudHNcbiBieSBmaWx0ZXJpbmcgYnkgUmVhY3QncyBhdHRyaWJ1dGUgd2hpdGVsaXN0LlxuICovXG5cbi8qIExvZ2ljIGNvcGllZCBmcm9tIFJlYWN0RE9NVW5rbm93blByb3BlcnR5SG9vayAqL1xudmFyIHJlYWN0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB0cnVlLFxuICBkYW5nZXJvdXNseVNldElubmVySFRNTDogdHJ1ZSxcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICB2YWx1ZUxpbms6IHRydWUsXG4gIGRlZmF1bHRDaGVja2VkOiB0cnVlLFxuICBjaGVja2VkTGluazogdHJ1ZSxcbiAgaW5uZXJIVE1MOiB0cnVlLFxuICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc6IHRydWUsXG4gIG9uRm9jdXNJbjogdHJ1ZSxcbiAgb25Gb2N1c091dDogdHJ1ZSxcbiAgY2xhc3NOYW1lOiB0cnVlLFxuXG4gIC8qIExpc3QgY29waWVkIGZyb20gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9ldmVudHMuaHRtbCAqL1xuICBvbkNvcHk6IHRydWUsXG4gIG9uQ3V0OiB0cnVlLFxuICBvblBhc3RlOiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uRW5kOiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uU3RhcnQ6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25VcGRhdGU6IHRydWUsXG4gIG9uS2V5RG93bjogdHJ1ZSxcbiAgb25LZXlQcmVzczogdHJ1ZSxcbiAgb25LZXlVcDogdHJ1ZSxcbiAgb25Gb2N1czogdHJ1ZSxcbiAgb25CbHVyOiB0cnVlLFxuICBvbkNoYW5nZTogdHJ1ZSxcbiAgb25JbnB1dDogdHJ1ZSxcbiAgb25TdWJtaXQ6IHRydWUsXG4gIG9uQ2xpY2s6IHRydWUsXG4gIG9uQ29udGV4dE1lbnU6IHRydWUsXG4gIG9uRG91YmxlQ2xpY2s6IHRydWUsXG4gIG9uRHJhZzogdHJ1ZSxcbiAgb25EcmFnRW5kOiB0cnVlLFxuICBvbkRyYWdFbnRlcjogdHJ1ZSxcbiAgb25EcmFnRXhpdDogdHJ1ZSxcbiAgb25EcmFnTGVhdmU6IHRydWUsXG4gIG9uRHJhZ092ZXI6IHRydWUsXG4gIG9uRHJhZ1N0YXJ0OiB0cnVlLFxuICBvbkRyb3A6IHRydWUsXG4gIG9uTW91c2VEb3duOiB0cnVlLFxuICBvbk1vdXNlRW50ZXI6IHRydWUsXG4gIG9uTW91c2VMZWF2ZTogdHJ1ZSxcbiAgb25Nb3VzZU1vdmU6IHRydWUsXG4gIG9uTW91c2VPdXQ6IHRydWUsXG4gIG9uTW91c2VPdmVyOiB0cnVlLFxuICBvbk1vdXNlVXA6IHRydWUsXG4gIG9uU2VsZWN0OiB0cnVlLFxuICBvblRvdWNoQ2FuY2VsOiB0cnVlLFxuICBvblRvdWNoRW5kOiB0cnVlLFxuICBvblRvdWNoTW92ZTogdHJ1ZSxcbiAgb25Ub3VjaFN0YXJ0OiB0cnVlLFxuICBvblNjcm9sbDogdHJ1ZSxcbiAgb25XaGVlbDogdHJ1ZSxcbiAgb25BYm9ydDogdHJ1ZSxcbiAgb25DYW5QbGF5OiB0cnVlLFxuICBvbkNhblBsYXlUaHJvdWdoOiB0cnVlLFxuICBvbkR1cmF0aW9uQ2hhbmdlOiB0cnVlLFxuICBvbkVtcHRpZWQ6IHRydWUsXG4gIG9uRW5jcnlwdGVkOiB0cnVlLFxuICBvbkVuZGVkOiB0cnVlLFxuICBvbkVycm9yOiB0cnVlLFxuICBvbkxvYWRlZERhdGE6IHRydWUsXG4gIG9uTG9hZGVkTWV0YWRhdGE6IHRydWUsXG4gIG9uTG9hZFN0YXJ0OiB0cnVlLFxuICBvblBhdXNlOiB0cnVlLFxuICBvblBsYXk6IHRydWUsXG4gIG9uUGxheWluZzogdHJ1ZSxcbiAgb25Qcm9ncmVzczogdHJ1ZSxcbiAgb25SYXRlQ2hhbmdlOiB0cnVlLFxuICBvblNlZWtlZDogdHJ1ZSxcbiAgb25TZWVraW5nOiB0cnVlLFxuICBvblN0YWxsZWQ6IHRydWUsXG4gIG9uU3VzcGVuZDogdHJ1ZSxcbiAgb25UaW1lVXBkYXRlOiB0cnVlLFxuICBvblZvbHVtZUNoYW5nZTogdHJ1ZSxcbiAgb25XYWl0aW5nOiB0cnVlLFxuICBvbkxvYWQ6IHRydWUsXG4gIG9uQW5pbWF0aW9uU3RhcnQ6IHRydWUsXG4gIG9uQW5pbWF0aW9uRW5kOiB0cnVlLFxuICBvbkFuaW1hdGlvbkl0ZXJhdGlvbjogdHJ1ZSxcbiAgb25UcmFuc2l0aW9uRW5kOiB0cnVlLFxuXG4gIG9uQ29weUNhcHR1cmU6IHRydWUsXG4gIG9uQ3V0Q2FwdHVyZTogdHJ1ZSxcbiAgb25QYXN0ZUNhcHR1cmU6IHRydWUsXG4gIG9uQ29tcG9zaXRpb25FbmRDYXB0dXJlOiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uU3RhcnRDYXB0dXJlOiB0cnVlLFxuICBvbkNvbXBvc2l0aW9uVXBkYXRlQ2FwdHVyZTogdHJ1ZSxcbiAgb25LZXlEb3duQ2FwdHVyZTogdHJ1ZSxcbiAgb25LZXlQcmVzc0NhcHR1cmU6IHRydWUsXG4gIG9uS2V5VXBDYXB0dXJlOiB0cnVlLFxuICBvbkZvY3VzQ2FwdHVyZTogdHJ1ZSxcbiAgb25CbHVyQ2FwdHVyZTogdHJ1ZSxcbiAgb25DaGFuZ2VDYXB0dXJlOiB0cnVlLFxuICBvbklucHV0Q2FwdHVyZTogdHJ1ZSxcbiAgb25TdWJtaXRDYXB0dXJlOiB0cnVlLFxuICBvbkNsaWNrQ2FwdHVyZTogdHJ1ZSxcbiAgb25Db250ZXh0TWVudUNhcHR1cmU6IHRydWUsXG4gIG9uRG91YmxlQ2xpY2tDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdFbmRDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdFbnRlckNhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ0V4aXRDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdMZWF2ZUNhcHR1cmU6IHRydWUsXG4gIG9uRHJhZ092ZXJDYXB0dXJlOiB0cnVlLFxuICBvbkRyYWdTdGFydENhcHR1cmU6IHRydWUsXG4gIG9uRHJvcENhcHR1cmU6IHRydWUsXG4gIG9uTW91c2VEb3duQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZUVudGVyQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZUxlYXZlQ2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZU1vdmVDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlT3V0Q2FwdHVyZTogdHJ1ZSxcbiAgb25Nb3VzZU92ZXJDYXB0dXJlOiB0cnVlLFxuICBvbk1vdXNlVXBDYXB0dXJlOiB0cnVlLFxuICBvblNlbGVjdENhcHR1cmU6IHRydWUsXG4gIG9uVG91Y2hDYW5jZWxDYXB0dXJlOiB0cnVlLFxuICBvblRvdWNoRW5kQ2FwdHVyZTogdHJ1ZSxcbiAgb25Ub3VjaE1vdmVDYXB0dXJlOiB0cnVlLFxuICBvblRvdWNoU3RhcnRDYXB0dXJlOiB0cnVlLFxuICBvblNjcm9sbENhcHR1cmU6IHRydWUsXG4gIG9uV2hlZWxDYXB0dXJlOiB0cnVlLFxuICBvbkFib3J0Q2FwdHVyZTogdHJ1ZSxcbiAgb25DYW5QbGF5Q2FwdHVyZTogdHJ1ZSxcbiAgb25DYW5QbGF5VGhyb3VnaENhcHR1cmU6IHRydWUsXG4gIG9uRHVyYXRpb25DaGFuZ2VDYXB0dXJlOiB0cnVlLFxuICBvbkVtcHRpZWRDYXB0dXJlOiB0cnVlLFxuICBvbkVuY3J5cHRlZENhcHR1cmU6IHRydWUsXG4gIG9uRW5kZWRDYXB0dXJlOiB0cnVlLFxuICBvbkVycm9yQ2FwdHVyZTogdHJ1ZSxcbiAgb25Mb2FkZWREYXRhQ2FwdHVyZTogdHJ1ZSxcbiAgb25Mb2FkZWRNZXRhZGF0YUNhcHR1cmU6IHRydWUsXG4gIG9uTG9hZFN0YXJ0Q2FwdHVyZTogdHJ1ZSxcbiAgb25QYXVzZUNhcHR1cmU6IHRydWUsXG4gIG9uUGxheUNhcHR1cmU6IHRydWUsXG4gIG9uUGxheWluZ0NhcHR1cmU6IHRydWUsXG4gIG9uUHJvZ3Jlc3NDYXB0dXJlOiB0cnVlLFxuICBvblJhdGVDaGFuZ2VDYXB0dXJlOiB0cnVlLFxuICBvblNlZWtlZENhcHR1cmU6IHRydWUsXG4gIG9uU2Vla2luZ0NhcHR1cmU6IHRydWUsXG4gIG9uU3RhbGxlZENhcHR1cmU6IHRydWUsXG4gIG9uU3VzcGVuZENhcHR1cmU6IHRydWUsXG4gIG9uVGltZVVwZGF0ZUNhcHR1cmU6IHRydWUsXG4gIG9uVm9sdW1lQ2hhbmdlQ2FwdHVyZTogdHJ1ZSxcbiAgb25XYWl0aW5nQ2FwdHVyZTogdHJ1ZSxcbiAgb25Mb2FkQ2FwdHVyZTogdHJ1ZSxcbiAgb25BbmltYXRpb25TdGFydENhcHR1cmU6IHRydWUsXG4gIG9uQW5pbWF0aW9uRW5kQ2FwdHVyZTogdHJ1ZSxcbiAgb25BbmltYXRpb25JdGVyYXRpb25DYXB0dXJlOiB0cnVlLFxuICBvblRyYW5zaXRpb25FbmRDYXB0dXJlOiB0cnVlXG59O1xuXG4vKiBGcm9tIEhUTUxET01Qcm9wZXJ0eUNvbmZpZyAqL1xudmFyIGh0bWxQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIFByb3BlcnRpZXNcbiAgICovXG4gIGFjY2VwdDogdHJ1ZSxcbiAgYWNjZXB0Q2hhcnNldDogdHJ1ZSxcbiAgYWNjZXNzS2V5OiB0cnVlLFxuICBhY3Rpb246IHRydWUsXG4gIGFsbG93RnVsbFNjcmVlbjogdHJ1ZSxcbiAgYWxsb3dUcmFuc3BhcmVuY3k6IHRydWUsXG4gIGFsdDogdHJ1ZSxcbiAgLy8gc3BlY2lmaWVzIHRhcmdldCBjb250ZXh0IGZvciBsaW5rcyB3aXRoIGBwcmVsb2FkYCB0eXBlXG4gIGFzOiB0cnVlLFxuICBhc3luYzogdHJ1ZSxcbiAgYXV0b0NvbXBsZXRlOiB0cnVlLFxuICAvLyBhdXRvRm9jdXMgaXMgcG9seWZpbGxlZC9ub3JtYWxpemVkIGJ5IEF1dG9Gb2N1c1V0aWxzXG4gIC8vIGF1dG9Gb2N1czogdHJ1ZSxcbiAgYXV0b1BsYXk6IHRydWUsXG4gIGNhcHR1cmU6IHRydWUsXG4gIGNlbGxQYWRkaW5nOiB0cnVlLFxuICBjZWxsU3BhY2luZzogdHJ1ZSxcbiAgY2hhclNldDogdHJ1ZSxcbiAgY2hhbGxlbmdlOiB0cnVlLFxuICBjaGVja2VkOiB0cnVlLFxuICBjaXRlOiB0cnVlLFxuICBjbGFzc0lEOiB0cnVlLFxuICBjbGFzc05hbWU6IHRydWUsXG4gIGNvbHM6IHRydWUsXG4gIGNvbFNwYW46IHRydWUsXG4gIGNvbnRlbnQ6IHRydWUsXG4gIGNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgY29udGV4dE1lbnU6IHRydWUsXG4gIGNvbnRyb2xzOiB0cnVlLFxuICBjb29yZHM6IHRydWUsXG4gIGNyb3NzT3JpZ2luOiB0cnVlLFxuICBkYXRhOiB0cnVlLCAvLyBGb3IgYDxvYmplY3QgLz5gIGFjdHMgYXMgYHNyY2AuXG4gIGRhdGVUaW1lOiB0cnVlLFxuICBkZWZhdWx0OiB0cnVlLFxuICBkZWZlcjogdHJ1ZSxcbiAgZGlyOiB0cnVlLFxuICBkaXNhYmxlZDogdHJ1ZSxcbiAgZG93bmxvYWQ6IHRydWUsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZW5jVHlwZTogdHJ1ZSxcbiAgZm9ybTogdHJ1ZSxcbiAgZm9ybUFjdGlvbjogdHJ1ZSxcbiAgZm9ybUVuY1R5cGU6IHRydWUsXG4gIGZvcm1NZXRob2Q6IHRydWUsXG4gIGZvcm1Ob1ZhbGlkYXRlOiB0cnVlLFxuICBmb3JtVGFyZ2V0OiB0cnVlLFxuICBmcmFtZUJvcmRlcjogdHJ1ZSxcbiAgaGVhZGVyczogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBoaWRkZW46IHRydWUsXG4gIGhpZ2g6IHRydWUsXG4gIGhyZWY6IHRydWUsXG4gIGhyZWZMYW5nOiB0cnVlLFxuICBodG1sRm9yOiB0cnVlLFxuICBodHRwRXF1aXY6IHRydWUsXG4gIGljb246IHRydWUsXG4gIGlkOiB0cnVlLFxuICBpbnB1dE1vZGU6IHRydWUsXG4gIGludGVncml0eTogdHJ1ZSxcbiAgaXM6IHRydWUsXG4gIGtleVBhcmFtczogdHJ1ZSxcbiAga2V5VHlwZTogdHJ1ZSxcbiAga2luZDogdHJ1ZSxcbiAgbGFiZWw6IHRydWUsXG4gIGxhbmc6IHRydWUsXG4gIGxpc3Q6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIGxvdzogdHJ1ZSxcbiAgbWFuaWZlc3Q6IHRydWUsXG4gIG1hcmdpbkhlaWdodDogdHJ1ZSxcbiAgbWFyZ2luV2lkdGg6IHRydWUsXG4gIG1heDogdHJ1ZSxcbiAgbWF4TGVuZ3RoOiB0cnVlLFxuICBtZWRpYTogdHJ1ZSxcbiAgbWVkaWFHcm91cDogdHJ1ZSxcbiAgbWV0aG9kOiB0cnVlLFxuICBtaW46IHRydWUsXG4gIG1pbkxlbmd0aDogdHJ1ZSxcbiAgLy8gQ2F1dGlvbjsgYG9wdGlvbi5zZWxlY3RlZGAgaXMgbm90IHVwZGF0ZWQgaWYgYHNlbGVjdC5tdWx0aXBsZWAgaXNcbiAgLy8gZGlzYWJsZWQgd2l0aCBgcmVtb3ZlQXR0cmlidXRlYC5cbiAgbXVsdGlwbGU6IHRydWUsXG4gIG11dGVkOiB0cnVlLFxuICBuYW1lOiB0cnVlLFxuICBub25jZTogdHJ1ZSxcbiAgbm9WYWxpZGF0ZTogdHJ1ZSxcbiAgb3BlbjogdHJ1ZSxcbiAgb3B0aW11bTogdHJ1ZSxcbiAgcGF0dGVybjogdHJ1ZSxcbiAgcGxhY2Vob2xkZXI6IHRydWUsXG4gIHBsYXlzSW5saW5lOiB0cnVlLFxuICBwb3N0ZXI6IHRydWUsXG4gIHByZWxvYWQ6IHRydWUsXG4gIHByb2ZpbGU6IHRydWUsXG4gIHJhZGlvR3JvdXA6IHRydWUsXG4gIHJlYWRPbmx5OiB0cnVlLFxuICByZWZlcnJlclBvbGljeTogdHJ1ZSxcbiAgcmVsOiB0cnVlLFxuICByZXF1aXJlZDogdHJ1ZSxcbiAgcmV2ZXJzZWQ6IHRydWUsXG4gIHJvbGU6IHRydWUsXG4gIHJvd3M6IHRydWUsXG4gIHJvd1NwYW46IHRydWUsXG4gIHNhbmRib3g6IHRydWUsXG4gIHNjb3BlOiB0cnVlLFxuICBzY29wZWQ6IHRydWUsXG4gIHNjcm9sbGluZzogdHJ1ZSxcbiAgc2VhbWxlc3M6IHRydWUsXG4gIHNlbGVjdGVkOiB0cnVlLFxuICBzaGFwZTogdHJ1ZSxcbiAgc2l6ZTogdHJ1ZSxcbiAgc2l6ZXM6IHRydWUsXG4gIHNwYW46IHRydWUsXG4gIHNwZWxsQ2hlY2s6IHRydWUsXG4gIHNyYzogdHJ1ZSxcbiAgc3JjRG9jOiB0cnVlLFxuICBzcmNMYW5nOiB0cnVlLFxuICBzcmNTZXQ6IHRydWUsXG4gIHN0YXJ0OiB0cnVlLFxuICBzdGVwOiB0cnVlLFxuICBzdHlsZTogdHJ1ZSxcbiAgc3VtbWFyeTogdHJ1ZSxcbiAgdGFiSW5kZXg6IHRydWUsXG4gIHRhcmdldDogdHJ1ZSxcbiAgdGl0bGU6IHRydWUsXG4gIC8vIFNldHRpbmcgLnR5cGUgdGhyb3dzIG9uIG5vbi08aW5wdXQ+IHRhZ3NcbiAgdHlwZTogdHJ1ZSxcbiAgdXNlTWFwOiB0cnVlLFxuICB2YWx1ZTogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIHdtb2RlOiB0cnVlLFxuICB3cmFwOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBSREZhIFByb3BlcnRpZXNcbiAgICovXG4gIGFib3V0OiB0cnVlLFxuICBkYXRhdHlwZTogdHJ1ZSxcbiAgaW5saXN0OiB0cnVlLFxuICBwcmVmaXg6IHRydWUsXG4gIC8vIHByb3BlcnR5IGlzIGFsc28gc3VwcG9ydGVkIGZvciBPcGVuR3JhcGggaW4gbWV0YSB0YWdzLlxuICBwcm9wZXJ0eTogdHJ1ZSxcbiAgcmVzb3VyY2U6IHRydWUsXG4gIHR5cGVvZjogdHJ1ZSxcbiAgdm9jYWI6IHRydWUsXG5cbiAgLyoqXG4gICAqIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzXG4gICAqL1xuICAvLyBhdXRvQ2FwaXRhbGl6ZSBhbmQgYXV0b0NvcnJlY3QgYXJlIHN1cHBvcnRlZCBpbiBNb2JpbGUgU2FmYXJpIGZvclxuICAvLyBrZXlib2FyZCBoaW50cy5cbiAgYXV0b0NhcGl0YWxpemU6IHRydWUsXG4gIGF1dG9Db3JyZWN0OiB0cnVlLFxuICAvLyBhdXRvU2F2ZSBhbGxvd3MgV2ViS2l0L0JsaW5rIHRvIHBlcnNpc3QgdmFsdWVzIG9mIGlucHV0IGZpZWxkcyBvbiBwYWdlIHJlbG9hZHNcbiAgYXV0b1NhdmU6IHRydWUsXG4gIC8vIGNvbG9yIGlzIGZvciBTYWZhcmkgbWFzay1pY29uIGxpbmtcbiAgY29sb3I6IHRydWUsXG4gIC8vIGl0ZW1Qcm9wLCBpdGVtU2NvcGUsIGl0ZW1UeXBlIGFyZSBmb3JcbiAgLy8gTWljcm9kYXRhIHN1cHBvcnQuIFNlZSBodHRwOi8vc2NoZW1hLm9yZy9kb2NzL2dzLmh0bWxcbiAgaXRlbVByb3A6IHRydWUsXG4gIGl0ZW1TY29wZTogdHJ1ZSxcbiAgaXRlbVR5cGU6IHRydWUsXG4gIC8vIGl0ZW1JRCBhbmQgaXRlbVJlZiBhcmUgZm9yIE1pY3JvZGF0YSBzdXBwb3J0IGFzIHdlbGwgYnV0XG4gIC8vIG9ubHkgc3BlY2lmaWVkIGluIHRoZSBXSEFUV0cgc3BlYyBkb2N1bWVudC4gU2VlXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL21pY3JvZGF0YS5odG1sI21pY3JvZGF0YS1kb20tYXBpXG4gIGl0ZW1JRDogdHJ1ZSxcbiAgaXRlbVJlZjogdHJ1ZSxcbiAgLy8gcmVzdWx0cyBzaG93IGxvb2tpbmcgZ2xhc3MgaWNvbiBhbmQgcmVjZW50IHNlYXJjaGVzIG9uIGlucHV0XG4gIC8vIHNlYXJjaCBmaWVsZHMgaW4gV2ViS2l0L0JsaW5rXG4gIHJlc3VsdHM6IHRydWUsXG4gIC8vIElFLW9ubHkgYXR0cmlidXRlIHRoYXQgc3BlY2lmaWVzIHNlY3VyaXR5IHJlc3RyaWN0aW9ucyBvbiBhbiBpZnJhbWVcbiAgLy8gYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIHNhbmRib3ggYXR0cmlidXRlIG9uIElFPDEwXG4gIHNlY3VyaXR5OiB0cnVlLFxuICAvLyBJRS1vbmx5IGF0dHJpYnV0ZSB0aGF0IGNvbnRyb2xzIGZvY3VzIGJlaGF2aW9yXG4gIHVuc2VsZWN0YWJsZTogMFxufTtcblxudmFyIHN2Z1Byb3BzID0ge1xuICBhY2NlbnRIZWlnaHQ6IHRydWUsXG4gIGFjY3VtdWxhdGU6IHRydWUsXG4gIGFkZGl0aXZlOiB0cnVlLFxuICBhbGlnbm1lbnRCYXNlbGluZTogdHJ1ZSxcbiAgYWxsb3dSZW9yZGVyOiB0cnVlLFxuICBhbHBoYWJldGljOiB0cnVlLFxuICBhbXBsaXR1ZGU6IHRydWUsXG4gIGFyYWJpY0Zvcm06IHRydWUsXG4gIGFzY2VudDogdHJ1ZSxcbiAgYXR0cmlidXRlTmFtZTogdHJ1ZSxcbiAgYXR0cmlidXRlVHlwZTogdHJ1ZSxcbiAgYXV0b1JldmVyc2U6IHRydWUsXG4gIGF6aW11dGg6IHRydWUsXG4gIGJhc2VGcmVxdWVuY3k6IHRydWUsXG4gIGJhc2VQcm9maWxlOiB0cnVlLFxuICBiYXNlbGluZVNoaWZ0OiB0cnVlLFxuICBiYm94OiB0cnVlLFxuICBiZWdpbjogdHJ1ZSxcbiAgYmlhczogdHJ1ZSxcbiAgYnk6IHRydWUsXG4gIGNhbGNNb2RlOiB0cnVlLFxuICBjYXBIZWlnaHQ6IHRydWUsXG4gIGNsaXA6IHRydWUsXG4gIGNsaXBQYXRoOiB0cnVlLFxuICBjbGlwUnVsZTogdHJ1ZSxcbiAgY2xpcFBhdGhVbml0czogdHJ1ZSxcbiAgY29sb3JJbnRlcnBvbGF0aW9uOiB0cnVlLFxuICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiB0cnVlLFxuICBjb2xvclByb2ZpbGU6IHRydWUsXG4gIGNvbG9yUmVuZGVyaW5nOiB0cnVlLFxuICBjb250ZW50U2NyaXB0VHlwZTogdHJ1ZSxcbiAgY29udGVudFN0eWxlVHlwZTogdHJ1ZSxcbiAgY3Vyc29yOiB0cnVlLFxuICBjeDogdHJ1ZSxcbiAgY3k6IHRydWUsXG4gIGQ6IHRydWUsXG4gIGRlY2VsZXJhdGU6IHRydWUsXG4gIGRlc2NlbnQ6IHRydWUsXG4gIGRpZmZ1c2VDb25zdGFudDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiB0cnVlLFxuICBkaXNwbGF5OiB0cnVlLFxuICBkaXZpc29yOiB0cnVlLFxuICBkb21pbmFudEJhc2VsaW5lOiB0cnVlLFxuICBkdXI6IHRydWUsXG4gIGR4OiB0cnVlLFxuICBkeTogdHJ1ZSxcbiAgZWRnZU1vZGU6IHRydWUsXG4gIGVsZXZhdGlvbjogdHJ1ZSxcbiAgZW5hYmxlQmFja2dyb3VuZDogdHJ1ZSxcbiAgZW5kOiB0cnVlLFxuICBleHBvbmVudDogdHJ1ZSxcbiAgZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZDogdHJ1ZSxcbiAgZmlsbDogdHJ1ZSxcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZpbGxSdWxlOiB0cnVlLFxuICBmaWx0ZXI6IHRydWUsXG4gIGZpbHRlclJlczogdHJ1ZSxcbiAgZmlsdGVyVW5pdHM6IHRydWUsXG4gIGZsb29kQ29sb3I6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgZm9jdXNhYmxlOiB0cnVlLFxuICBmb250RmFtaWx5OiB0cnVlLFxuICBmb250U2l6ZTogdHJ1ZSxcbiAgZm9udFNpemVBZGp1c3Q6IHRydWUsXG4gIGZvbnRTdHJldGNoOiB0cnVlLFxuICBmb250U3R5bGU6IHRydWUsXG4gIGZvbnRWYXJpYW50OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBmb3JtYXQ6IHRydWUsXG4gIGZyb206IHRydWUsXG4gIGZ4OiB0cnVlLFxuICBmeTogdHJ1ZSxcbiAgZzE6IHRydWUsXG4gIGcyOiB0cnVlLFxuICBnbHlwaE5hbWU6IHRydWUsXG4gIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsOiB0cnVlLFxuICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6IHRydWUsXG4gIGdseXBoUmVmOiB0cnVlLFxuICBncmFkaWVudFRyYW5zZm9ybTogdHJ1ZSxcbiAgZ3JhZGllbnRVbml0czogdHJ1ZSxcbiAgaGFuZ2luZzogdHJ1ZSxcbiAgaG9yaXpBZHZYOiB0cnVlLFxuICBob3Jpek9yaWdpblg6IHRydWUsXG4gIGlkZW9ncmFwaGljOiB0cnVlLFxuICBpbWFnZVJlbmRlcmluZzogdHJ1ZSxcbiAgaW46IHRydWUsXG4gIGluMjogdHJ1ZSxcbiAgaW50ZXJjZXB0OiB0cnVlLFxuICBrOiB0cnVlLFxuICBrMTogdHJ1ZSxcbiAgazI6IHRydWUsXG4gIGszOiB0cnVlLFxuICBrNDogdHJ1ZSxcbiAga2VybmVsTWF0cml4OiB0cnVlLFxuICBrZXJuZWxVbml0TGVuZ3RoOiB0cnVlLFxuICBrZXJuaW5nOiB0cnVlLFxuICBrZXlQb2ludHM6IHRydWUsXG4gIGtleVNwbGluZXM6IHRydWUsXG4gIGtleVRpbWVzOiB0cnVlLFxuICBsZW5ndGhBZGp1c3Q6IHRydWUsXG4gIGxldHRlclNwYWNpbmc6IHRydWUsXG4gIGxpZ2h0aW5nQ29sb3I6IHRydWUsXG4gIGxpbWl0aW5nQ29uZUFuZ2xlOiB0cnVlLFxuICBsb2NhbDogdHJ1ZSxcbiAgbWFya2VyRW5kOiB0cnVlLFxuICBtYXJrZXJNaWQ6IHRydWUsXG4gIG1hcmtlclN0YXJ0OiB0cnVlLFxuICBtYXJrZXJIZWlnaHQ6IHRydWUsXG4gIG1hcmtlclVuaXRzOiB0cnVlLFxuICBtYXJrZXJXaWR0aDogdHJ1ZSxcbiAgbWFzazogdHJ1ZSxcbiAgbWFza0NvbnRlbnRVbml0czogdHJ1ZSxcbiAgbWFza1VuaXRzOiB0cnVlLFxuICBtYXRoZW1hdGljYWw6IHRydWUsXG4gIG1vZGU6IHRydWUsXG4gIG51bU9jdGF2ZXM6IHRydWUsXG4gIG9mZnNldDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3BlcmF0b3I6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcmllbnQ6IHRydWUsXG4gIG9yaWVudGF0aW9uOiB0cnVlLFxuICBvcmlnaW46IHRydWUsXG4gIG92ZXJmbG93OiB0cnVlLFxuICBvdmVybGluZVBvc2l0aW9uOiB0cnVlLFxuICBvdmVybGluZVRoaWNrbmVzczogdHJ1ZSxcbiAgcGFpbnRPcmRlcjogdHJ1ZSxcbiAgcGFub3NlMTogdHJ1ZSxcbiAgcGF0aExlbmd0aDogdHJ1ZSxcbiAgcGF0dGVybkNvbnRlbnRVbml0czogdHJ1ZSxcbiAgcGF0dGVyblRyYW5zZm9ybTogdHJ1ZSxcbiAgcGF0dGVyblVuaXRzOiB0cnVlLFxuICBwb2ludGVyRXZlbnRzOiB0cnVlLFxuICBwb2ludHM6IHRydWUsXG4gIHBvaW50c0F0WDogdHJ1ZSxcbiAgcG9pbnRzQXRZOiB0cnVlLFxuICBwb2ludHNBdFo6IHRydWUsXG4gIHByZXNlcnZlQWxwaGE6IHRydWUsXG4gIHByZXNlcnZlQXNwZWN0UmF0aW86IHRydWUsXG4gIHByaW1pdGl2ZVVuaXRzOiB0cnVlLFxuICByOiB0cnVlLFxuICByYWRpdXM6IHRydWUsXG4gIHJlZlg6IHRydWUsXG4gIHJlZlk6IHRydWUsXG4gIHJlbmRlcmluZ0ludGVudDogdHJ1ZSxcbiAgcmVwZWF0Q291bnQ6IHRydWUsXG4gIHJlcGVhdER1cjogdHJ1ZSxcbiAgcmVxdWlyZWRFeHRlbnNpb25zOiB0cnVlLFxuICByZXF1aXJlZEZlYXR1cmVzOiB0cnVlLFxuICByZXN0YXJ0OiB0cnVlLFxuICByZXN1bHQ6IHRydWUsXG4gIHJvdGF0ZTogdHJ1ZSxcbiAgcng6IHRydWUsXG4gIHJ5OiB0cnVlLFxuICBzY2FsZTogdHJ1ZSxcbiAgc2VlZDogdHJ1ZSxcbiAgc2hhcGVSZW5kZXJpbmc6IHRydWUsXG4gIHNsb3BlOiB0cnVlLFxuICBzcGFjaW5nOiB0cnVlLFxuICBzcGVjdWxhckNvbnN0YW50OiB0cnVlLFxuICBzcGVjdWxhckV4cG9uZW50OiB0cnVlLFxuICBzcGVlZDogdHJ1ZSxcbiAgc3ByZWFkTWV0aG9kOiB0cnVlLFxuICBzdGFydE9mZnNldDogdHJ1ZSxcbiAgc3RkRGV2aWF0aW9uOiB0cnVlLFxuICBzdGVtaDogdHJ1ZSxcbiAgc3RlbXY6IHRydWUsXG4gIHN0aXRjaFRpbGVzOiB0cnVlLFxuICBzdG9wQ29sb3I6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJpa2V0aHJvdWdoUG9zaXRpb246IHRydWUsXG4gIHN0cmlrZXRocm91Z2hUaGlja25lc3M6IHRydWUsXG4gIHN0cmluZzogdHJ1ZSxcbiAgc3Ryb2tlOiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZUxpbmVjYXA6IHRydWUsXG4gIHN0cm9rZUxpbmVqb2luOiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZSxcbiAgc3VyZmFjZVNjYWxlOiB0cnVlLFxuICBzeXN0ZW1MYW5ndWFnZTogdHJ1ZSxcbiAgdGFibGVWYWx1ZXM6IHRydWUsXG4gIHRhcmdldFg6IHRydWUsXG4gIHRhcmdldFk6IHRydWUsXG4gIHRleHRBbmNob3I6IHRydWUsXG4gIHRleHREZWNvcmF0aW9uOiB0cnVlLFxuICB0ZXh0UmVuZGVyaW5nOiB0cnVlLFxuICB0ZXh0TGVuZ3RoOiB0cnVlLFxuICB0bzogdHJ1ZSxcbiAgdHJhbnNmb3JtOiB0cnVlLFxuICB1MTogdHJ1ZSxcbiAgdTI6IHRydWUsXG4gIHVuZGVybGluZVBvc2l0aW9uOiB0cnVlLFxuICB1bmRlcmxpbmVUaGlja25lc3M6IHRydWUsXG4gIHVuaWNvZGU6IHRydWUsXG4gIHVuaWNvZGVCaWRpOiB0cnVlLFxuICB1bmljb2RlUmFuZ2U6IHRydWUsXG4gIHVuaXRzUGVyRW06IHRydWUsXG4gIHZBbHBoYWJldGljOiB0cnVlLFxuICB2SGFuZ2luZzogdHJ1ZSxcbiAgdklkZW9ncmFwaGljOiB0cnVlLFxuICB2TWF0aGVtYXRpY2FsOiB0cnVlLFxuICB2YWx1ZXM6IHRydWUsXG4gIHZlY3RvckVmZmVjdDogdHJ1ZSxcbiAgdmVyc2lvbjogdHJ1ZSxcbiAgdmVydEFkdlk6IHRydWUsXG4gIHZlcnRPcmlnaW5YOiB0cnVlLFxuICB2ZXJ0T3JpZ2luWTogdHJ1ZSxcbiAgdmlld0JveDogdHJ1ZSxcbiAgdmlld1RhcmdldDogdHJ1ZSxcbiAgdmlzaWJpbGl0eTogdHJ1ZSxcbiAgd2lkdGhzOiB0cnVlLFxuICB3b3JkU3BhY2luZzogdHJ1ZSxcbiAgd3JpdGluZ01vZGU6IHRydWUsXG4gIHg6IHRydWUsXG4gIHhIZWlnaHQ6IHRydWUsXG4gIHgxOiB0cnVlLFxuICB4MjogdHJ1ZSxcbiAgeENoYW5uZWxTZWxlY3RvcjogdHJ1ZSxcbiAgeGxpbmtBY3R1YXRlOiB0cnVlLFxuICB4bGlua0FyY3JvbGU6IHRydWUsXG4gIHhsaW5rSHJlZjogdHJ1ZSxcbiAgeGxpbmtSb2xlOiB0cnVlLFxuICB4bGlua1Nob3c6IHRydWUsXG4gIHhsaW5rVGl0bGU6IHRydWUsXG4gIHhsaW5rVHlwZTogdHJ1ZSxcbiAgeG1sQmFzZTogdHJ1ZSxcbiAgeG1sbnM6IHRydWUsXG4gIHhtbG5zWGxpbms6IHRydWUsXG4gIHhtbExhbmc6IHRydWUsXG4gIHhtbFNwYWNlOiB0cnVlLFxuICB5OiB0cnVlLFxuICB5MTogdHJ1ZSxcbiAgeTI6IHRydWUsXG4gIHlDaGFubmVsU2VsZWN0b3I6IHRydWUsXG4gIHo6IHRydWUsXG4gIHpvb21BbmRQYW46IHRydWVcbn07XG5cbi8qIEZyb20gRE9NUHJvcGVydHkgKi9cbnZhciBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSID0gJzpBLVpfYS16XFxcXHUwMEMwLVxcXFx1MDBENlxcXFx1MDBEOC1cXFxcdTAwRjZcXFxcdTAwRjgtXFxcXHUwMkZGXFxcXHUwMzcwLVxcXFx1MDM3RFxcXFx1MDM3Ri1cXFxcdTFGRkZcXFxcdTIwMEMtXFxcXHUyMDBEXFxcXHUyMDcwLVxcXFx1MjE4RlxcXFx1MkMwMC1cXFxcdTJGRUZcXFxcdTMwMDEtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRkQnO1xudmFyIEFUVFJJQlVURV9OQU1FX0NIQVIgPSBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgJ1xcXFwtLjAtOVxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwJztcbnZhciBpc0N1c3RvbUF0dHJpYnV0ZSA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdC5iaW5kKG5ldyBSZWdFeHAoJ14oZGF0YXxhcmlhKS1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJykpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaHRtbFByb3BzLCBuYW1lKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHN2Z1Byb3BzLCBuYW1lKSB8fCBpc0N1c3RvbUF0dHJpYnV0ZShuYW1lLnRvTG93ZXJDYXNlKCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwocmVhY3RQcm9wcywgbmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvdmFsaWRBdHRyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1RhZztcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0IHx8IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKS5hbnk7XG5cbmZ1bmN0aW9uIGlzVGFnKHRhcmdldCkgLyogOiAlY2hlY2tzICove1xuICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZyc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvaXNUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDExOTlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldENvbXBvbmVudE5hbWU7XG5cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuZGlzcGxheU5hbWUgfHwgdGFyZ2V0Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvdXRpbHMvZ2V0Q29tcG9uZW50TmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0Fic3RyYWN0U3R5bGVkQ29tcG9uO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoJy4vVGhlbWVQcm92aWRlcicpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBBYnN0cmFjdFN0eWxlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBYnN0cmFjdFN0eWxlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQWJzdHJhY3RTdHlsZWRDb21wb25lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFic3RyYWN0U3R5bGVkQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIEFic3RyYWN0U3R5bGVkQ29tcG9uZW50O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWJzdHJhY3RTdHlsZWRDb21wb25lbnQ7XG5cblxuQWJzdHJhY3RTdHlsZWRDb21wb25lbnQuY29udGV4dFR5cGVzID0gKF9BYnN0cmFjdFN0eWxlZENvbXBvbiA9IHt9LCBfQWJzdHJhY3RTdHlsZWRDb21wb25bX1RoZW1lUHJvdmlkZXIuQ0hBTk5FTF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9BYnN0cmFjdFN0eWxlZENvbXBvbltfU3R5bGVTaGVldC5DT05URVhUX0tFWV0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX1N0eWxlU2hlZXQyLmRlZmF1bHQpLCBfQWJzdHJhY3RTdHlsZWRDb21wb24pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9BYnN0cmFjdFN0eWxlZENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9oYXNoID0gcmVxdWlyZSgnLi4vdmVuZG9yL2dsYW1vci9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxudmFyIF9TdHlsZVNoZWV0ID0gcmVxdWlyZSgnLi9TdHlsZVNoZWV0Jyk7XG5cbnZhciBfU3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1N0cmluZ2lmaWVyID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9TdHJpbmdpZmllciB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfRmxhdHRlbmVyID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9GbGF0dGVuZXIgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1J1bGVTZXQgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobmFtZUdlbmVyYXRvciwgZmxhdHRlbiwgc3RyaW5naWZ5UnVsZXMpIHtcbiAgdmFyIENvbXBvbmVudFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbXBvbmVudFN0eWxlKHJ1bGVzLCBjb21wb25lbnRJZCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFN0eWxlKTtcblxuICAgICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgICAgaWYgKCFfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnN0YW5jZS5oYXNJbmplY3RlZENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkKSkge1xuICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJy4nICsgY29tcG9uZW50SWQgKyAnIHt9JyA6ICcnO1xuICAgICAgICBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnN0YW5jZS5kZWZlcnJlZEluamVjdChjb21wb25lbnRJZCwgdHJ1ZSwgcGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgICAqIEhhc2hlcyBpdCwgd3JhcHMgdGhlIHdob2xlIGNodW5rIGluIGEgLmhhc2gxMjM0IHt9XG4gICAgICogUmV0dXJucyB0aGUgaGFzaCB0byBiZSBpbmplY3RlZCBvbiByZW5kZXIoKVxuICAgICAqICovXG5cblxuICAgIENvbXBvbmVudFN0eWxlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICAgIHZhciBmbGF0Q1NTID0gZmxhdHRlbih0aGlzLnJ1bGVzLCBleGVjdXRpb25Db250ZXh0KTtcbiAgICAgIHZhciBoYXNoID0gKDAsIF9oYXNoMi5kZWZhdWx0KSh0aGlzLmNvbXBvbmVudElkICsgZmxhdENTUy5qb2luKCcnKSk7XG5cbiAgICAgIHZhciBleGlzdGluZ05hbWUgPSBzdHlsZVNoZWV0LmdldE5hbWUoaGFzaCk7XG4gICAgICBpZiAoZXhpc3RpbmdOYW1lKSByZXR1cm4gZXhpc3RpbmdOYW1lO1xuXG4gICAgICB2YXIgbmFtZSA9IG5hbWVHZW5lcmF0b3IoaGFzaCk7XG4gICAgICBpZiAoc3R5bGVTaGVldC5hbHJlYWR5SW5qZWN0ZWQoaGFzaCwgbmFtZSkpIHJldHVybiBuYW1lO1xuXG4gICAgICB2YXIgY3NzID0gJ1xcbicgKyBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnLicgKyBuYW1lKTtcbiAgICAgIHN0eWxlU2hlZXQuaW5qZWN0KHRoaXMuY29tcG9uZW50SWQsIHRydWUsIGNzcywgaGFzaCwgbmFtZSk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuXG4gICAgQ29tcG9uZW50U3R5bGUuZ2VuZXJhdGVOYW1lID0gZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHN0cikge1xuICAgICAgcmV0dXJuIG5hbWVHZW5lcmF0b3IoKDAsIF9oYXNoMi5kZWZhdWx0KShzdHIpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbXBvbmVudFN0eWxlO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFN0eWxlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbGliL21vZGVscy9Db21wb25lbnRTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RvbUVsZW1lbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tRWxlbWVudHMnKTtcblxudmFyIF9kb21FbGVtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21FbGVtZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1RhcmdldCB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3R5bGVkQ29tcG9uZW50LCBjb25zdHJ1Y3RXaXRoT3B0aW9ucykge1xuICB2YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICAgIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhzdHlsZWRDb21wb25lbnQsIHRhZyk7XG4gIH07XG5cbiAgLy8gU2hvcnRoYW5kcyBmb3IgYWxsIHZhbGlkIEhUTUwgRWxlbWVudHNcbiAgX2RvbUVsZW1lbnRzMi5kZWZhdWx0LmZvckVhY2goZnVuY3Rpb24gKGRvbUVsZW1lbnQpIHtcbiAgICBzdHlsZWRbZG9tRWxlbWVudF0gPSBzdHlsZWQoZG9tRWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBzdHlsZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL3N0eWxlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vLyBUaGFua3MgdG8gUmVhY3RET01GYWN0b3JpZXMgZm9yIHRoaXMgaGFuZHkgbGlzdCFcblxuZXhwb3J0cy5kZWZhdWx0ID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJyxcblxuLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdnJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyR3JhZGllbnQnLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi91dGlscy9kb21FbGVtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCcuLi92ZW5kb3IvZ2xhbW9yL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuLi9tb2RlbHMvU3R5bGVTaGVldCcpO1xuXG52YXIgX1N0eWxlU2hlZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVTaGVldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9TdHJpbmdpZmllciA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfU3RyaW5naWZpZXIgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX05hbWVHZW5lcmF0b3IgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIHJlcGxhY2VXaGl0ZXNwYWNlID0gZnVuY3Rpb24gcmVwbGFjZVdoaXRlc3BhY2Uoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzfFxcXFxuL2csICcnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChuYW1lR2VuZXJhdG9yLCBzdHJpbmdpZnlSdWxlcywgY3NzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5ncykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gICAgdmFyIGhhc2ggPSAoMCwgX2hhc2gyLmRlZmF1bHQpKHJlcGxhY2VXaGl0ZXNwYWNlKEpTT04uc3RyaW5naWZ5KHJ1bGVzKSkpO1xuXG4gICAgdmFyIGV4aXN0aW5nTmFtZSA9IF9TdHlsZVNoZWV0Mi5kZWZhdWx0Lmluc3RhbmNlLmdldE5hbWUoaGFzaCk7XG4gICAgaWYgKGV4aXN0aW5nTmFtZSkgcmV0dXJuIGV4aXN0aW5nTmFtZTtcblxuICAgIHZhciBuYW1lID0gbmFtZUdlbmVyYXRvcihoYXNoKTtcbiAgICBpZiAoX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5zdGFuY2UuYWxyZWFkeUluamVjdGVkKGhhc2gsIG5hbWUpKSByZXR1cm4gbmFtZTtcblxuICAgIHZhciBnZW5lcmF0ZWRDU1MgPSBzdHJpbmdpZnlSdWxlcyhydWxlcywgbmFtZSwgJ0BrZXlmcmFtZXMnKTtcbiAgICBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnN0YW5jZS5pbmplY3QoJ3NjLWtleWZyYW1lcy0nICsgbmFtZSwgdHJ1ZSwgZ2VuZXJhdGVkQ1NTLCBoYXNoLCBuYW1lKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMva2V5ZnJhbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4uL3ZlbmRvci9nbGFtb3IvaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbnZhciBfU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4uL21vZGVscy9TdHlsZVNoZWV0Jyk7XG5cbnZhciBfU3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX1N0cmluZ2lmaWVyID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9TdHJpbmdpZmllciB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiA9IHJlcXVpcmUoJy4uL3R5cGVzJykuYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfSW50ZXJwb2xhdGlvbiB8fCByZXF1aXJlKCdwcm9wLXR5cGVzJykuYW55O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyaW5naWZ5UnVsZXMsIGNzcykge1xuICB2YXIgaW5qZWN0R2xvYmFsID0gZnVuY3Rpb24gaW5qZWN0R2xvYmFsKHN0cmluZ3MpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVzID0gY3NzLmFwcGx5KHVuZGVmaW5lZCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpO1xuICAgIHZhciBoYXNoID0gKDAsIF9oYXNoMi5kZWZhdWx0KShKU09OLnN0cmluZ2lmeShydWxlcykpO1xuXG4gICAgdmFyIGNvbXBvbmVudElkID0gJ3NjLWdsb2JhbC0nICsgaGFzaDtcbiAgICBpZiAoX1N0eWxlU2hlZXQyLmRlZmF1bHQuaW5zdGFuY2UuaGFzSW5qZWN0ZWRDb21wb25lbnQoY29tcG9uZW50SWQpKSByZXR1cm47XG5cbiAgICBfU3R5bGVTaGVldDIuZGVmYXVsdC5pbnN0YW5jZS5pbmplY3QoY29tcG9uZW50SWQsIGZhbHNlLCBzdHJpbmdpZnlSdWxlcyhydWxlcykpO1xuICB9O1xuXG4gIHJldHVybiBpbmplY3RHbG9iYWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvY29uc3RydWN0b3JzL2luamVjdEdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgYmFiZWxQbHVnaW5GbG93UmVhY3RQcm9wVHlwZXNfcHJvcHR5cGVfVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdHlwZXMnKS5iYWJlbFBsdWdpbkZsb3dSZWFjdFByb3BUeXBlc19wcm9wdHlwZV9UYXJnZXQgfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxudmFyIGJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gPSByZXF1aXJlKCcuLi90eXBlcycpLmJhYmVsUGx1Z2luRmxvd1JlYWN0UHJvcFR5cGVzX3Byb3B0eXBlX0ludGVycG9sYXRpb24gfHwgcmVxdWlyZSgncHJvcC10eXBlcycpLmFueTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNzcykge1xuICB2YXIgY29uc3RydWN0V2l0aE9wdGlvbnMgPSBmdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKHR5cGVvZiB0YWcgIT09ICdzdHJpbmcnICYmIHR5cGVvZiB0YWcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vICRGbG93SW52YWxpZElucHV0VGVzdFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJyArIHRhZyk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gICAgdmFyIHRlbXBsYXRlRnVuY3Rpb24gPSBmdW5jdGlvbiB0ZW1wbGF0ZUZ1bmN0aW9uKHN0cmluZ3MpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50Q29uc3RydWN0b3IodGFnLCBvcHRpb25zLCBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSkpO1xuICAgIH07XG5cbiAgICAvKiBJZiBjb25maWcgbWV0aG9kcyBhcmUgY2FsbGVkLCB3cmFwIHVwIGEgbmV3IHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCBtZXJnZSBvcHRpb25zICovXG4gICAgdGVtcGxhdGVGdW5jdGlvbi53aXRoQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCBjb25maWcpKTtcbiAgICB9O1xuICAgIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBhdHRyczogX2V4dGVuZHMoe30sIG9wdGlvbnMuYXR0cnMgfHwge30sIGF0dHJzKSB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uO1xuICB9O1xuXG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9jb25zdHJ1Y3RvcnMvY29uc3RydWN0V2l0aE9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDcgOCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvVGhlbWVQcm92aWRlcicpO1xuXG52YXIgX2lzU3R5bGVkQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzU3R5bGVkQ29tcG9uZW50Jyk7XG5cbnZhciBfaXNTdHlsZWRDb21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNTdHlsZWRDb21wb25lbnQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuLyogZ2xvYmFscyBSZWFjdENsYXNzICovXG5cbnZhciB3cmFwV2l0aFRoZW1lID0gZnVuY3Rpb24gd3JhcFdpdGhUaGVtZShDb21wb25lbnQpIHtcbiAgdmFyIF9XaXRoVGhlbWUkY29udGV4dFR5cDtcblxuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgaXNTdHlsZWRDb21wb25lbnQgPSAoMCwgX2lzU3R5bGVkQ29tcG9uZW50My5kZWZhdWx0KShDb21wb25lbnQpO1xuXG4gIHZhciBXaXRoVGhlbWUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoVGhlbWUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2l0aFRoZW1lKCkge1xuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpdGhUaGVtZSk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHt9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICAvLyBOT1RFOiBUaGlzIGlzIHNvIHRoYXQgaXNTdHlsZWRDb21wb25lbnQgcGFzc2VzIGZvciB0aGUgaW5uZXJSZWYgdW53cmFwcGluZ1xuXG5cbiAgICBXaXRoVGhlbWUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1t3aXRoVGhlbWVdIFBsZWFzZSB1c2UgVGhlbWVQcm92aWRlciB0byBiZSBhYmxlIHRvIHVzZSB3aXRoVGhlbWUnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN1YnNjcmliZSA9IHRoaXMuY29udGV4dFtfVGhlbWVQcm92aWRlci5DSEFOTkVMXTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRoZW1lOiB0aGVtZSB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBXaXRoVGhlbWUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuXG4gICAgV2l0aFRoZW1lLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgdmFyIGlubmVyUmVmID0gdGhpcy5wcm9wcy5pbm5lclJlZjtcbiAgICAgIHZhciB0aGVtZSA9IHRoaXMuc3RhdGUudGhlbWU7XG5cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IGlzU3R5bGVkQ29tcG9uZW50ID8gaW5uZXJSZWYgOiB1bmRlZmluZWQsXG4gICAgICAgIHJlZjogaXNTdHlsZWRDb21wb25lbnQgPyB1bmRlZmluZWQgOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV2l0aFRoZW1lO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9ICdXaXRoVGhlbWUoJyArIGNvbXBvbmVudE5hbWUgKyAnKSc7XG4gIFdpdGhUaGVtZS5zdHlsZWRDb21wb25lbnRJZCA9ICd3aXRoVGhlbWUnO1xuICBXaXRoVGhlbWUuY29udGV4dFR5cGVzID0gKF9XaXRoVGhlbWUkY29udGV4dFR5cCA9IHt9LCBfV2l0aFRoZW1lJGNvbnRleHRUeXBbX1RoZW1lUHJvdmlkZXIuQ0hBTk5FTF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9XaXRoVGhlbWUkY29udGV4dFR5cCk7XG5cblxuICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoV2l0aFRoZW1lLCBDb21wb25lbnQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcFdpdGhUaGVtZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9ob2Mvd2l0aFRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBleGNsdWRlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZXh0ZXJuYWw6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHQkc2Nyb2xsWDogdHJ1ZSxcblx0JHNjcm9sbFk6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgZm9yZWFjaCA9IHJlcXVpcmUoJ2ZvcmVhY2gnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuICAgICAgICBmb3IgKHZhciBfIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IHByb3BzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvcmVhY2gocHJvcHMsIGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBtYXBbbmFtZV0sIHByZWRpY2F0ZXNbbmFtZV0pO1xuXHR9KTtcbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyNzRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczYtc2hpbVxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgY2FuQmVPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG5cdHJldHVybiB0eXBlb2Ygb2JqICE9PSAndW5kZWZpbmVkJyAmJiBvYmogIT09IG51bGw7XG59O1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCcuL2hhc1N5bWJvbHMnKSgpO1xudmFyIHRvT2JqZWN0ID0gT2JqZWN0O1xudmFyIHB1c2ggPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgQXJyYXkucHJvdG90eXBlLnB1c2gpO1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgb3JpZ2luYWxHZXRTeW1ib2xzID0gaGFzU3ltYm9scyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgOiBudWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZTEpIHtcblx0aWYgKCFjYW5CZU9iamVjdCh0YXJnZXQpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpOyB9XG5cdHZhciBvYmpUYXJnZXQgPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgcywgc291cmNlLCBpLCBwcm9wcywgc3ltcywgdmFsdWUsIGtleTtcblx0Zm9yIChzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrcykge1xuXHRcdHNvdXJjZSA9IHRvT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cdFx0cHJvcHMgPSBrZXlzKHNvdXJjZSk7XG5cdFx0dmFyIGdldFN5bWJvbHMgPSBoYXNTeW1ib2xzICYmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIHx8IG9yaWdpbmFsR2V0U3ltYm9scyk7XG5cdFx0aWYgKGdldFN5bWJvbHMpIHtcblx0XHRcdHN5bXMgPSBnZXRTeW1ib2xzKHNvdXJjZSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgc3ltcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRrZXkgPSBzeW1zW2ldO1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZShzb3VyY2UsIGtleSkpIHtcblx0XHRcdFx0XHRwdXNoKHByb3BzLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0a2V5ID0gcHJvcHNbaV07XG5cdFx0XHR2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUoc291cmNlLCBrZXkpKSB7XG5cdFx0XHRcdG9ialRhcmdldFtrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvYmpUYXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgbGFja3NQcm9wZXJFbnVtZXJhdGlvbk9yZGVyID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Ly8gdjgsIHNwZWNpZmljYWxseSBpbiBub2RlIDQueCwgaGFzIGEgYnVnIHdpdGggaW5jb3JyZWN0IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyXG5cdC8vIG5vdGU6IHRoaXMgZG9lcyBub3QgZGV0ZWN0IHRoZSBidWcgdW5sZXNzIHRoZXJlJ3MgMjAgY2hhcmFjdGVyc1xuXHR2YXIgc3RyID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0Jztcblx0dmFyIGxldHRlcnMgPSBzdHIuc3BsaXQoJycpO1xuXHR2YXIgbWFwID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7ICsraSkge1xuXHRcdG1hcFtsZXR0ZXJzW2ldXSA9IGxldHRlcnNbaV07XG5cdH1cblx0dmFyIG9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG1hcCk7XG5cdHZhciBhY3R1YWwgPSAnJztcblx0Zm9yICh2YXIgayBpbiBvYmopIHtcblx0XHRhY3R1YWwgKz0gaztcblx0fVxuXHRyZXR1cm4gc3RyICE9PSBhY3R1YWw7XG59O1xuXG52YXIgYXNzaWduSGFzUGVuZGluZ0V4Y2VwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghT2JqZWN0LmFzc2lnbiB8fCAhT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdC8vIEZpcmVmb3ggMzcgc3RpbGwgaGFzIFwicGVuZGluZyBleGNlcHRpb25cIiBsb2dpYyBpbiBpdHMgT2JqZWN0LmFzc2lnbiBpbXBsZW1lbnRhdGlvbixcblx0Ly8gd2hpY2ggaXMgNzIlIHNsb3dlciB0aGFuIG91ciBzaGltLCBhbmQgRmlyZWZveCA0MCdzIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cblx0dmFyIHRocm93ZXIgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoeyAxOiAyIH0pO1xuXHR0cnkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhyb3dlciwgJ3h5Jyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gdGhyb3dlclsxXSA9PT0gJ3knO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcblx0fVxuXHRpZiAobGFja3NQcm9wZXJFbnVtZXJhdGlvbk9yZGVyKCkpIHtcblx0XHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG5cdH1cblx0aWYgKGFzc2lnbkhhc1BlbmRpbmdFeGNlcHRpb25zKCkpIHtcblx0XHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG5cdH1cblx0cmV0dXJuIE9iamVjdC5hc3NpZ247XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcbi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbnZhciB0YWJiYWJsZU5vZGUgPSAvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvO1xuXG5mdW5jdGlvbiBoaWRkZW4oZWwpIHtcbiAgcmV0dXJuIGVsLm9mZnNldFdpZHRoIDw9IDAgJiYgZWwub2Zmc2V0SGVpZ2h0IDw9IDAgfHwgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB2aXNpYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcbiAgICBpZiAoaGlkZGVuKHBhcmVudEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZm9jdXNhYmxlKGVsZW1lbnQsIGlzVGFiSW5kZXhOb3ROYU4pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgcmVzID0gdGFiYmFibGVOb2RlLnRlc3Qobm9kZU5hbWUpICYmICFlbGVtZW50LmRpc2FibGVkIHx8IChub2RlTmFtZSA9PT0gXCJhXCIgPyBlbGVtZW50LmhyZWYgfHwgaXNUYWJJbmRleE5vdE5hTiA6IGlzVGFiSW5kZXhOb3ROYU4pO1xuICByZXR1cm4gcmVzICYmIHZpc2libGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSwgMCkuZmlsdGVyKHRhYmJhYmxlKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFzc2VydE5vZGVMaXN0ID0gYXNzZXJ0Tm9kZUxpc3Q7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy50cnlGb3JjZUZhbGxiYWNrID0gdHJ5Rm9yY2VGYWxsYmFjaztcbmV4cG9ydHMudmFsaWRhdGVFbGVtZW50ID0gdmFsaWRhdGVFbGVtZW50O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLmRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcgPSBkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nO1xuZXhwb3J0cy5yZXNldEZvclRlc3RpbmcgPSByZXNldEZvclRlc3Rpbmc7XG52YXIgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIGFzc2VydE5vZGVMaXN0KG5vZGVMaXN0LCBzZWxlY3Rvcikge1xuICBpZiAoIW5vZGVMaXN0IHx8ICFub2RlTGlzdC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWN0LW1vZGFsOiBObyBlbGVtZW50cyB3ZXJlIGZvdW5kIGZvciBzZWxlY3RvciAnICsgc2VsZWN0b3IgKyAnLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdXNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgdXNlRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHVzZUVsZW1lbnQpO1xuICAgIGFzc2VydE5vZGVMaXN0KGVsLCB1c2VFbGVtZW50KTtcbiAgICB1c2VFbGVtZW50ID0gJ2xlbmd0aCcgaW4gZWwgPyBlbFswXSA6IGVsO1xuICB9XG4gIGdsb2JhbEVsZW1lbnQgPSB1c2VFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQ7XG4gIHJldHVybiBnbG9iYWxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0cnlGb3JjZUZhbGxiYWNrKCkge1xuICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgIC8vIGZvcmNlIGZhbGxiYWNrIHRvIGRvY3VtZW50LmJvZHlcbiAgICBzZXRFbGVtZW50KGRvY3VtZW50LmJvZHkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFnbG9iYWxFbGVtZW50ICYmICF0cnlGb3JjZUZhbGxiYWNrKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoWydyZWFjdC1tb2RhbDogQ2Fubm90IGZhbGxiYWNrIHRvIGBkb2N1bWVudC5ib2R5YCwgYmVjYXVzZSBpdFxcJ3Mgbm90IHJlYWR5IG9yIGF2YWlsYWJsZS4nLCAnSWYgeW91IGFyZSBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcsIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGRlZmluZWQgYW4gZWxlbWVudC4nLCAnYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCB0byBtYWtlIHRoaXMgYWNjZXNzaWJsZSddKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKGFwcEVsZW1lbnQpIHtcbiAgdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpO1xuICAoYXBwRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhhcHBFbGVtZW50KSB7XG4gIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KTtcbiAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nKCkge1xuICBnbG9iYWxFbGVtZW50ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JUZXN0aW5nKCkge1xuICBnbG9iYWxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9hcmlhQXBwSGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldCA9IGdldDtcbmV4cG9ydHMuYWRkID0gYWRkO1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5leHBvcnRzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xudmFyIGNsYXNzTGlzdE1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIHJldHVybiBjbGFzc0xpc3RNYXA7XG59XG5cbmZ1bmN0aW9uIGFkZChib2R5Q2xhc3MpIHtcbiAgLy8gU2V0IHZhcmlhYmxlIGFuZCBkZWZhdWx0IGlmIG5vbmVcbiAgaWYgKCFjbGFzc0xpc3RNYXBbYm9keUNsYXNzXSkge1xuICAgIGNsYXNzTGlzdE1hcFtib2R5Q2xhc3NdID0gMDtcbiAgfVxuICBjbGFzc0xpc3RNYXBbYm9keUNsYXNzXSArPSAxO1xuICByZXR1cm4gYm9keUNsYXNzO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoYm9keUNsYXNzKSB7XG4gIGlmIChjbGFzc0xpc3RNYXBbYm9keUNsYXNzXSkge1xuICAgIGNsYXNzTGlzdE1hcFtib2R5Q2xhc3NdIC09IDE7XG4gIH1cbiAgcmV0dXJuIGJvZHlDbGFzcztcbn1cblxuZnVuY3Rpb24gdG90YWxDb3VudCgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzTGlzdE1hcCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICByZXR1cm4gYWNjICsgY2xhc3NMaXN0TWFwW2N1cnJdO1xuICB9LCAwKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9yZWZDb3VudC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXhlbnYgPSByZXF1aXJlKCdleGVudicpO1xuXG52YXIgX2V4ZW52MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4ZW52KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEVFID0gX2V4ZW52Mi5kZWZhdWx0O1xuXG52YXIgU2FmZUhUTUxFbGVtZW50ID0gRUUuY2FuVXNlRE9NID8gd2luZG93LkhUTUxFbGVtZW50IDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVIVE1MRWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zYWZlSFRNTEVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyODFcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeScpO1xuXG52YXIgX3N0cmluZ2lmeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnkpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF91cmwgPSByZXF1aXJlKCd1cmwnKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXNFeGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTtcblxudmFyIF9wcm9wVHlwZXNFeGFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXNFeGFjdCk7XG5cbnZhciBfcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcblxudmFyIF9yb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShMaW5rLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IExpbmsuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKExpbmspKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzLCBwcm9wc10uY29uY2F0KHJlc3QpKSk7XG5cbiAgICBfdGhpcy5saW5rQ2xpY2tlZCA9IF90aGlzLmxpbmtDbGlja2VkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmZvcm1hdFVybHMocHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExpbmssIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLmZvcm1hdFVybHMobmV4dFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsaW5rQ2xpY2tlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbmtDbGlja2VkKGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0Lm5vZGVOYW1lID09PSAnQScgJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSB8fCBlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hhbGxvdyA9IHRoaXMucHJvcHMuc2hhbGxvdztcbiAgICAgIHZhciBocmVmID0gdGhpcy5ocmVmLFxuICAgICAgICAgIGFzID0gdGhpcy5hcztcblxuXG4gICAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGhyZWYgPSAoMCwgX3VybC5yZXNvbHZlKShwYXRobmFtZSwgaHJlZik7XG4gICAgICBhcyA9IGFzID8gKDAsIF91cmwucmVzb2x2ZSkocGF0aG5hbWUsIGFzKSA6IGhyZWY7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgICB2YXIgc2Nyb2xsID0gdGhpcy5wcm9wcy5zY3JvbGw7XG5cbiAgICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwO1xuICAgICAgfVxuXG4gICAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICAgIHZhciByZXBsYWNlID0gdGhpcy5wcm9wcy5yZXBsYWNlO1xuXG4gICAgICB2YXIgY2hhbmdlTWV0aG9kID0gcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJztcblxuICAgICAgLy8gc3RyYWlnaHQgdXAgcmVkaXJlY3RcbiAgICAgIF9yb3V0ZXIyLmRlZmF1bHRbY2hhbmdlTWV0aG9kXShocmVmLCBhcywgeyBzaGFsbG93OiBzaGFsbG93IH0pLnRoZW4oZnVuY3Rpb24gKHN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm47XG4gICAgICAgIGlmIChzY3JvbGwpIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5vbkVycm9yKSBfdGhpczIucHJvcHMub25FcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJlZmV0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVmZXRjaCgpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5wcmVmZXRjaCkgcmV0dXJuO1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAgIHZhciBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgdmFyIGhyZWYgPSAoMCwgX3VybC5yZXNvbHZlKShwYXRobmFtZSwgdGhpcy5ocmVmKTtcbiAgICAgIF9yb3V0ZXIyLmRlZmF1bHQucHJlZmV0Y2goaHJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJlZmV0Y2goKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAoKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMucHJvcHMuaHJlZikgIT09ICgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KShwcmV2UHJvcHMuaHJlZikpIHtcbiAgICAgICAgdGhpcy5wcmVmZXRjaCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlIGFjY2VwdCBib3RoICdocmVmJyBhbmQgJ2FzJyBhcyBvYmplY3RzIHdoaWNoIHdlIGNhbiBwYXNzIHRvIGB1cmwuZm9ybWF0YC5cbiAgICAvLyBXZSdsbCBoYW5kbGUgaXQgaGVyZS5cblxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0VXJscycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdFVybHMocHJvcHMpIHtcbiAgICAgIHRoaXMuaHJlZiA9IHByb3BzLmhyZWYgJiYgKDAsIF90eXBlb2YzLmRlZmF1bHQpKHByb3BzLmhyZWYpID09PSAnb2JqZWN0JyA/ICgwLCBfdXJsLmZvcm1hdCkocHJvcHMuaHJlZikgOiBwcm9wcy5ocmVmO1xuICAgICAgdGhpcy5hcyA9IHByb3BzLmFzICYmICgwLCBfdHlwZW9mMy5kZWZhdWx0KShwcm9wcy5hcykgPT09ICdvYmplY3QnID8gKDAsIF91cmwuZm9ybWF0KShwcm9wcy5hcykgOiBwcm9wcy5hcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLmhyZWYsXG4gICAgICAgICAgYXMgPSB0aGlzLmFzO1xuICAgICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcblxuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYScsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgIHZhciBjaGlsZCA9IF9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgb25DbGljazogdGhpcy5saW5rQ2xpY2tlZFxuXG4gICAgICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgICAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICAgIH07aWYgKHRoaXMucHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgICAgaWYgKHByb3BzLmhyZWYgJiYgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBwcm9wcy5ocmVmID0gKDAsIF9yb3V0ZXIuX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KShwcm9wcy5ocmVmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5MaW5rLnByb3BUeXBlcyA9ICgwLCBfcHJvcFR5cGVzRXhhY3QyLmRlZmF1bHQpKHtcbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBhczogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBwcmVmZXRjaDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNoYWxsb3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcGFzc0hyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgd2FybkxpbmsoJ1dhcm5pbmc6IFlvdVxcJ3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XSkuaXNSZXF1aXJlZFxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rO1xuXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZikge1xuICB2YXIgdXJsID0gKDAsIF91cmwucGFyc2UpKGhyZWYsIGZhbHNlLCB0cnVlKTtcbiAgdmFyIG9yaWdpbiA9ICgwLCBfdXJsLnBhcnNlKSgoMCwgX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLCBmYWxzZSwgdHJ1ZSk7XG4gIHJldHVybiAhdXJsLmhvc3QgfHwgdXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0O1xufVxuXG52YXIgd2FybkxpbmsgPSAoMCwgX3V0aWxzLmV4ZWNPbmNlKShfdXRpbHMud2Fybik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9saW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDA3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBmb3JiaWRFeHRyYVByb3BzO1xuXG52YXIgX29iamVjdCA9IHJlcXVpcmUoJ29iamVjdC5hc3NpZ24nKTtcblxudmFyIF9vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0KTtcblxudmFyIF9oYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIF9oYXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB6ZXJvV2lkdGhTcGFjZSA9ICdcXHUyMDBCJztcbnZhciBzcGVjaWFsUHJvcGVydHkgPSAncHJvcC10eXBlcy1leGFjdDogJyArIHplcm9XaWR0aFNwYWNlO1xudmFyIHNlbWFwaG9yZSA9IHt9O1xuXG5mdW5jdGlvbiBicmFuZChmbikge1xuICByZXR1cm4gKDAsIF9vYmplY3QyWydkZWZhdWx0J10pKGZuLCBfZGVmaW5lUHJvcGVydHkoe30sIHNwZWNpYWxQcm9wZXJ0eSwgc2VtYXBob3JlKSk7XG59XG5cbmZ1bmN0aW9uIGlzQnJhbmRlZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWVbc3BlY2lhbFByb3BlcnR5XSA9PT0gc2VtYXBob3JlO1xufVxuXG5mdW5jdGlvbiBmb3JiaWRFeHRyYVByb3BzKHByb3BUeXBlcykge1xuICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkocHJvcFR5cGVzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dpdmVuIHByb3BUeXBlcyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG4gIGlmICgoMCwgX2hhczJbJ2RlZmF1bHQnXSkocHJvcFR5cGVzLCBzcGVjaWFsUHJvcGVydHkpICYmICFpc0JyYW5kZWQocHJvcFR5cGVzW3NwZWNpYWxQcm9wZXJ0eV0pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWdhaW5zdCBhbGwgb2RkcywgeW91IGNyZWF0ZWQgYSBwcm9wVHlwZSBmb3IgYSBwcm9wIHRoYXQgdXNlcyBib3RoIHRoZSB6ZXJvLXdpZHRoIHNwYWNlIGFuZCBvdXIgY3VzdG9tIHN0cmluZyAtIHdoaWNoLCBzYWRseSwgY29uZmxpY3RzIHdpdGggYHByb3AtdHlwZXMtZXhhY3RgJyk7XG4gIH1cblxuICByZXR1cm4gKDAsIF9vYmplY3QyWydkZWZhdWx0J10pKHt9LCBwcm9wVHlwZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc3BlY2lhbFByb3BlcnR5LCBicmFuZChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZm9yYmlkVW5rbm93blByb3BzKHByb3BzLCBfLCBjb21wb25lbnROYW1lKSB7XG4gICAgICB2YXIgdW5rbm93blByb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gISgwLCBfaGFzMlsnZGVmYXVsdCddKShwcm9wVHlwZXMsIHByb3ApO1xuICAgICAgfSk7XG4gICAgICBpZiAodW5rbm93blByb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoU3RyaW5nKGNvbXBvbmVudE5hbWUpICsgJzogdW5rbm93biBwcm9wcyBmb3VuZDogJyArIFN0cmluZyh1bmtub3duUHJvcHMuam9pbignLCAnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcmJpZFVua25vd25Qcm9wcztcbiAgfSgpKSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4YWN0L2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG5kZWZpbmVQcm9wZXJ0aWVzKHBvbHlmaWxsLCB7XG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0MDlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoIChvYmosIGZuLCBjdHgpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChmbikgIT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBsID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobCA9PT0gK2wpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpbaV0sIGksIG9iaik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKG9iaiwgaykpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGN0eCwgb2JqW2tdLCBrLCBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9yZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE0MTJcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoa2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopO1xuXHRpZiAoc3ltcy5sZW5ndGggIT09IDEgfHwgc3ltc1swXSAhPT0gc3ltKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBzeW0pO1xuXHRcdGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSBzeW1WYWwgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9oYXNTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUFzc2lnbigpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKFxuXHRcdE9iamVjdCxcblx0XHR7IGFzc2lnbjogcG9seWZpbGwgfSxcblx0XHR7IGFzc2lnbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmFzc2lnbiAhPT0gcG9seWZpbGw7IH0gfVxuXHQpO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpc1BsYWluT2JqZWN0O1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh4KSB7XG4gIHJldHVybiB4ICYmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoeCkpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQbGFpbk9iamVjdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4YWN0L2J1aWxkL2hlbHBlcnMvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTW9kYWwnKTtcblxudmFyIF9Nb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Nb2RhbDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0MTdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX01vZGFsUG9ydGFsID0gcmVxdWlyZSgnLi9Nb2RhbFBvcnRhbCcpO1xuXG52YXIgX01vZGFsUG9ydGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsUG9ydGFsKTtcblxudmFyIF9hcmlhQXBwSGlkZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2FyaWFBcHBIaWRlcicpO1xuXG52YXIgYXJpYUFwcEhpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FyaWFBcHBIaWRlcik7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZSgnLi4vaGVscGVycy9zYWZlSFRNTEVsZW1lbnQnKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcG9ydGFsQ2xhc3NOYW1lID0gZXhwb3J0cy5wb3J0YWxDbGFzc05hbWUgPSAnUmVhY3RNb2RhbFBvcnRhbCc7XG52YXIgYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gJ1JlYWN0TW9kYWxfX0JvZHktLW9wZW4nO1xuXG52YXIgcmVuZGVyU3VidHJlZUludG9Db250YWluZXIgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG5cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQocGFyZW50U2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudFNlbGVjdG9yKCk7XG59XG5cbnZhciBNb2RhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlUG9ydGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMubm9kZSk7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChfdGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RoaXMubm9kZSk7XG4gICAgfSwgX3RoaXMucmVuZGVyUG9ydGFsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICBfdGhpcy5wb3J0YWwgPSByZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihfdGhpcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX01vZGFsUG9ydGFsMi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGRlZmF1bHRTdHlsZXM6IE1vZGFsLmRlZmF1bHRTdHlsZXMgfSwgcHJvcHMpKSwgX3RoaXMubm9kZSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgICB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgdmFyIGlzT3BlbiA9IG5ld1Byb3BzLmlzT3BlbjtcbiAgICAgIC8vIFN0b3AgdW5uZWNlc3NhcnkgcmVuZGVycyBpZiBtb2RhbCBpcyByZW1haW5pbmcgY2xvc2VkXG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgIWlzT3BlbikgcmV0dXJuO1xuXG4gICAgICB2YXIgY3VycmVudFBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICB2YXIgbmV3UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChuZXdQcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG5cbiAgICAgIGlmIChuZXdQYXJlbnQgIT09IGN1cnJlbnRQYXJlbnQpIHtcbiAgICAgICAgY3VycmVudFBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICBuZXdQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5ld1Byb3BzKSB7XG4gICAgICBpZiAobmV3UHJvcHMucG9ydGFsQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLnBvcnRhbENsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gbmV3UHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAoIXRoaXMubm9kZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnBvcnRhbC5zdGF0ZTtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gc3RhdGUuaXNPcGVuICYmIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgJiYgKHN0YXRlLmNsb3Nlc0F0IHx8IG5vdyArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuXG4gICAgICBpZiAoY2xvc2VzQXQpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW1vdmVQb3J0YWwsIGNsb3Nlc0F0IC0gbm93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdzZXRBcHBFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXBwRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luamVjdENTUycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluamVjdENTUygpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBpbmplY3RDU1MgaGFzIGJlZW4gZGVwcmVjYXRlZCAnICsgJ2FuZCBubyBsb25nZXIgaGFzIGFueSBlZmZlY3QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGxhdGVyIHZlcnNpb24nKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgb3ZlcmxheUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBwYXJlbnRTZWxlY3RvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBhcmlhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBwb3J0YWxDbGFzc05hbWUsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBib2R5T3BlbkNsYXNzTmFtZSxcbiAgYXJpYUhpZGVBcHA6IHRydWUsXG4gIGNsb3NlVGltZW91dE1TOiAwLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICBwYXJlbnRTZWxlY3RvcjogZnVuY3Rpb24gcGFyZW50U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cbn07XG5Nb2RhbC5kZWZhdWx0U3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc0MHB4JyxcbiAgICBsZWZ0OiAnNDBweCcsXG4gICAgcmlnaHQ6ICc0MHB4JyxcbiAgICBib3R0b206ICc0MHB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzIwcHgnXG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9mb2N1c01hbmFnZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlcicpO1xuXG52YXIgZm9jdXNNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2ZvY3VzTWFuYWdlcik7XG5cbnZhciBfc2NvcGVUYWIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Njb3BlVGFiJyk7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyJyk7XG5cbnZhciBhcmlhQXBwSGlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXJpYUFwcEhpZGVyKTtcblxudmFyIF9yZWZDb3VudCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVmQ291bnQnKTtcblxudmFyIHJlZkNvdW50ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlZkNvdW50KTtcblxudmFyIF9ib2R5Q2xhc3NMaXN0ID0gcmVxdWlyZSgnLi4vaGVscGVycy9ib2R5Q2xhc3NMaXN0Jyk7XG5cbnZhciBib2R5Q2xhc3NMaXN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2JvZHlDbGFzc0xpc3QpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50Jyk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NhZmVIVE1MRWxlbWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gc28gdGhhdCBvdXIgQ1NTIGlzIHN0YXRpY2FsbHkgYW5hbHl6YWJsZVxudmFyIENMQVNTX05BTUVTID0ge1xuICBvdmVybGF5OiAnUmVhY3RNb2RhbF9fT3ZlcmxheScsXG4gIGNvbnRlbnQ6ICdSZWFjdE1vZGFsX19Db250ZW50J1xufTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxudmFyIE1vZGFsUG9ydGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsUG9ydGFsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbFBvcnRhbChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbFBvcnRhbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTW9kYWxQb3J0YWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbFBvcnRhbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIgPSBmdW5jdGlvbiAoZm9jdXMpIHtcbiAgICAgIF90aGlzLmZvY3VzQWZ0ZXJSZW5kZXIgPSBmb2N1cztcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0T3ZlcmxheVJlZiA9IGZ1bmN0aW9uIChvdmVybGF5KSB7XG4gICAgICBfdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q29udGVudFJlZiA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cygpO1xuICAgICAgZm9jdXNNYW5hZ2VyLnRlYXJkb3duU2NvcGVkRm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvY3VzTWFuYWdlci5zZXR1cFNjb3BlZEZvY3VzKF90aGlzLm5vZGUpO1xuICAgICAgICBmb2N1c01hbmFnZXIubWFya0ZvckZvY3VzTGF0ZXIoKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWZ0ZXJPcGVuOiB0cnVlIH0pO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmlzT3BlbiAmJiBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbikge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25BZnRlck9wZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZUNsb3NlKCk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgPiAwKSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmNvbnRlbnQgJiYgIV90aGlzLmNvbnRlbnRIYXNGb2N1cygpICYmIF90aGlzLmNvbnRlbnQuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjbG9zZXNBdCA9IERhdGUubm93KCkgKyBfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUztcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgYmVmb3JlQ2xvc2U6IHRydWUsIGNsb3Nlc0F0OiBjbG9zZXNBdCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQsIF90aGlzLnN0YXRlLmNsb3Nlc0F0IC0gRGF0ZS5ub3coKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgICBjbG9zZXNBdDogbnVsbFxuICAgICAgfSwgX3RoaXMuYWZ0ZXJDbG9zZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgICAgICgwLCBfc2NvcGVUYWIyLmRlZmF1bHQpKF90aGlzLmNvbnRlbnQsIGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgPT09IG51bGwpIHtcbiAgICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgJiYgX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaykge1xuICAgICAgICBpZiAoX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSkge1xuICAgICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSgpICYmIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZEJlQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFfdGhpcy5zdGF0ZS5pc09wZW4gJiYgIV90aGlzLnN0YXRlLmJlZm9yZUNsb3NlO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb250ZW50SGFzRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuY29udGVudCB8fCBfdGhpcy5jb250ZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5idWlsZENsYXNzTmFtZSA9IGZ1bmN0aW9uICh3aGljaCwgYWRkaXRpb25hbCkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSAodHlwZW9mIGFkZGl0aW9uYWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFkZGl0aW9uYWwpKSA9PT0gJ29iamVjdCcgPyBhZGRpdGlvbmFsIDoge1xuICAgICAgICBiYXNlOiBDTEFTU19OQU1FU1t3aGljaF0sXG4gICAgICAgIGFmdGVyT3BlbjogQ0xBU1NfTkFNRVNbd2hpY2hdICsgJy0tYWZ0ZXItb3BlbicsXG4gICAgICAgIGJlZm9yZUNsb3NlOiBDTEFTU19OQU1FU1t3aGljaF0gKyAnLS1iZWZvcmUtY2xvc2UnXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuYmFzZTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lcy5hZnRlck9wZW47XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lcy5iZWZvcmVDbG9zZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgYWRkaXRpb25hbCA9PT0gJ3N0cmluZycgJiYgYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArICcgJyArIGFkZGl0aW9uYWwgOiBjbGFzc05hbWU7XG4gICAgfTtcblxuICAgIF90aGlzLmFyaWFBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1snYXJpYS0nICsgbmFtZV0gPSBpdGVtc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWxQb3J0YWwsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIEZvY3VzIG5lZWRzIHRvIGJlIHNldCB3aGVuIG1vdW50aW5nIGFuZCBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNldEZvY3VzQWZ0ZXJSZW5kZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChuZXdQcm9wcy5ib2R5T3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5ib2R5T3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJib2R5T3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyAnVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRm9jdXMgb25seSBuZWVkcyB0byBiZSBzZXQgb25jZSB3aGVuIHRoZSBtb2RhbCBpcyBiZWluZyBvcGVuZWRcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgbmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNBZnRlclJlbmRlcih0cnVlKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFuZXdQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLmZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5zZXRGb2N1c0FmdGVyUmVuZGVyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmVmb3JlT3BlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZU9wZW4oKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBFbGVtZW50ID0gX3Byb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG4gICAgICAvLyBBZGQgYm9keSBjbGFzc1xuXG4gICAgICBib2R5Q2xhc3NMaXN0LmFkZChib2R5T3BlbkNsYXNzTmFtZSk7XG4gICAgICAvLyBBZGQgYXJpYS1oaWRkZW4gdG8gYXBwRWxlbWVudFxuICAgICAgaWYgKGFyaWFIaWRlQXBwKSB7XG4gICAgICAgIGFyaWFBcHBIaWRlci5oaWRlKGFwcEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JlZm9yZUNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlQ2xvc2UoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwRWxlbWVudCA9IF9wcm9wczIuYXBwRWxlbWVudCxcbiAgICAgICAgICBhcmlhSGlkZUFwcCA9IF9wcm9wczIuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfcHJvcHMyLmJvZHlPcGVuQ2xhc3NOYW1lO1xuICAgICAgLy8gUmVtb3ZlIGNsYXNzIGlmIG5vIG1vcmUgbW9kYWxzIGFyZSBvcGVuXG5cbiAgICAgIGJvZHlDbGFzc0xpc3QucmVtb3ZlKGJvZHlPcGVuQ2xhc3NOYW1lKTtcbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgcmVmQ291bnQudG90YWxDb3VudCgpIDwgMSkge1xuICAgICAgICBhcmlhQXBwSGlkZXIuc2hvdyhhcHBFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb24ndCBzdGVhbCBmb2N1cyBmcm9tIGlubmVyIGVsZW1lbnRzXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzMy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMzLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjb250ZW50U3R5bGVzID0gY2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgICB2YXIgb3ZlcmxheVN0eWxlcyA9IG92ZXJsYXlDbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IG51bGwgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IHRoaXMuc2V0T3ZlcmxheVJlZixcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoJ292ZXJsYXknLCBvdmVybGF5Q2xhc3NOYW1lKSxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG92ZXJsYXlTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUub3ZlcmxheSksXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICByZWY6IHRoaXMuc2V0Q29udGVudFJlZixcbiAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY29udGVudFN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5jb250ZW50KSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZSgnY29udGVudCcsIGNsYXNzTmFtZSksXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDb250ZW50T25DbGljayxcbiAgICAgICAgICAgIHJvbGU6IHRoaXMucHJvcHMucm9sZSxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wcy5jb250ZW50TGFiZWxcbiAgICAgICAgICB9LCB0aGlzLmFyaWFBdHRyaWJ1dGVzKHRoaXMucHJvcHMuYXJpYSB8fCB7fSkpLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxQb3J0YWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbFBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7XG4gICAgb3ZlcmxheToge30sXG4gICAgY29udGVudDoge31cbiAgfVxufTtcbk1vZGFsUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRTdHlsZXM6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzLlByb3BUeXBlcy5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMub2JqZWN0XG4gIH0pLFxuICBzdHlsZTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzLlByb3BUeXBlcy5vYmplY3RcbiAgfSksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcHJvcFR5cGVzLlByb3BUeXBlcy5zdHJpbmcsIF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9iamVjdF0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5vbmVPZlR5cGUoW19wcm9wVHlwZXMuUHJvcFR5cGVzLnN0cmluZywgX3Byb3BUeXBlcy5Qcm9wVHlwZXMub2JqZWN0XSksXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5zdHJpbmcsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5ib29sLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzLlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQyLmRlZmF1bHQpLFxuICBvbkFmdGVyT3BlbjogX3Byb3BUeXBlcy5Qcm9wVHlwZXMuZnVuYyxcbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5udW1iZXIsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLmJvb2wsXG4gIHJvbGU6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzLlByb3BUeXBlcy5zdHJpbmcsXG4gIGFyaWE6IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuUHJvcFR5cGVzLm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbFBvcnRhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbFBvcnRhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhhbmRsZUJsdXIgPSBoYW5kbGVCbHVyO1xuZXhwb3J0cy5oYW5kbGVGb2N1cyA9IGhhbmRsZUZvY3VzO1xuZXhwb3J0cy5tYXJrRm9yRm9jdXNMYXRlciA9IG1hcmtGb3JGb2N1c0xhdGVyO1xuZXhwb3J0cy5yZXR1cm5Gb2N1cyA9IHJldHVybkZvY3VzO1xuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gc2V0dXBTY29wZWRGb2N1cztcbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IHRlYXJkb3duU2NvcGVkRm9jdXM7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RhYmJhYmxlJyk7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZm9jdXNMYXRlckVsZW1lbnRzID0gW107XG52YXIgbW9kYWxFbGVtZW50ID0gbnVsbDtcbnZhciBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICBuZWVkVG9Gb2N1cyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICBpZiAobmVlZFRvRm9jdXMpIHtcbiAgICBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5lZWQgdG8gc2VlIGhvdyBqUXVlcnkgc2hpbXMgZG9jdW1lbnQub24oJ2ZvY3VzaW4nKSBzbyB3ZSBkb24ndCBuZWVkIHRoZVxuICAgIC8vIHNldFRpbWVvdXQsIGZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGZvY3VzaW4sIGlmIGl0IGRpZCwgd2UgY291bGQgZm9jdXNcbiAgICAvLyB0aGUgZWxlbWVudCBvdXRzaWRlIG9mIGEgc2V0VGltZW91dC4gU2lkZS1lZmZlY3Qgb2YgdGhpcyBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGlzIHRoYXQgdGhlIGRvY3VtZW50LmJvZHkgZ2V0cyBmb2N1cywgYW5kIHRoZW4gd2UgZm9jdXMgb3VyIGVsZW1lbnQgcmlnaHRcbiAgICAvLyBhZnRlciwgc2VlbXMgZmluZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb2RhbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGVsID0gKDAsIF90YWJiYWJsZTIuZGVmYXVsdCkobW9kYWxFbGVtZW50KVswXSB8fCBtb2RhbEVsZW1lbnQ7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtGb3JGb2N1c0xhdGVyKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudHMucHVzaChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZnVuY3Rpb24gcmV0dXJuRm9jdXMoKSB7XG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB0b0ZvY3VzID0gZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xuICAgIHRvRm9jdXMuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oWydZb3UgdHJpZWQgdG8gcmV0dXJuIGZvY3VzIHRvJywgdG9Gb2N1cywgJ2J1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJ10uam9pbihcIiBcIikpO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuZnVuY3Rpb24gc2V0dXBTY29wZWRGb2N1cyhlbGVtZW50KSB7XG4gIG1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVCbHVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZWFyZG93blNjb3BlZEZvY3VzKCkge1xuICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cyk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldGFjaEV2ZW50KCdvbkJsdXInLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25Gb2N1cycsIGhhbmRsZUZvY3VzKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTQyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzY29wZVRhYjtcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoJy4vdGFiYmFibGUnKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNjb3BlVGFiKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9ICgwLCBfdGFiYmFibGUyLmRlZmF1bHQpKG5vZGUpO1xuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBmaW5hbFRhYmJhYmxlID0gdGFiYmFibGVbZXZlbnQuc2hpZnRLZXkgPyAwIDogdGFiYmFibGUubGVuZ3RoIC0gMV07XG4gIHZhciBsZWF2aW5nRmluYWxUYWJiYWJsZSA9IGZpbmFsVGFiYmFibGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHxcbiAgLy8gaGFuZGxlIGltbWVkaWF0ZSBzaGlmdCt0YWIgYWZ0ZXIgb3BlbmluZyB3aXRoIG1vdXNlXG4gIG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmICghbGVhdmluZ0ZpbmFsVGFiYmFibGUpIHJldHVybjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIHRhcmdldCA9IHRhYmJhYmxlW2V2ZW50LnNoaWZ0S2V5ID8gdGFiYmFibGUubGVuZ3RoIC0gMSA6IDBdO1xuICB0YXJnZXQuZm9jdXMoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qc1xuLy8gbW9kdWxlIGlkID0gMTQyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZCA9IGFkZDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuXG52YXIgX3JlZkNvdW50ID0gcmVxdWlyZSgnLi9yZWZDb3VudCcpO1xuXG52YXIgcmVmQ291bnQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVmQ291bnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBhZGQoYm9keUNsYXNzKSB7XG4gIC8vIEluY3JlbWVudCBjbGFzcyhlcykgb24gcmVmQ291bnQgdHJhY2tlciBhbmQgYWRkIGNsYXNzKGVzKSB0byBib2R5XG4gIGJvZHlDbGFzcy5zcGxpdCgnICcpLm1hcChyZWZDb3VudC5hZGQpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShib2R5Q2xhc3MpIHtcbiAgdmFyIGNsYXNzTGlzdE1hcCA9IHJlZkNvdW50LmdldCgpO1xuICAvLyBEZWNyZW1lbnQgY2xhc3MoZXMpIGZyb20gdGhlIHJlZkNvdW50IHRyYWNrZXJcbiAgLy8gYW5kIHJlbW92ZSB1bnVzZWQgY2xhc3MoZXMpIGZyb20gYm9keVxuICBib2R5Q2xhc3Muc3BsaXQoJyAnKS5tYXAocmVmQ291bnQucmVtb3ZlKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjbGFzc0xpc3RNYXBbY2xhc3NOYW1lXSA9PT0gMDtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9ib2R5Q2xhc3NMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKipcbipcbiogSGVhZGVyXG4qXG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG5gXG5cbmZ1bmN0aW9uIEhlYWRlciAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9J2xvZ28nPiB7cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxuICApXG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCIvKipcbipcbiogTG9nb0ljb25cbipcbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuYFxuXG5mdW5jdGlvbiBMb2dvSWNvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvSWNvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dvSWNvbi9pbmRleC5qcyIsIi8qKlxuKlxuKiBTbG9nYW5cbipcbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU2xvZ2FuICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMCAxNnB4J319PlxuICAgICAgPGltZyBjbGFzc05hbWU9J2xvZ28taW1hZ2UnIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLycgfX0gc3JjPScvc3RhdGljL2ltYWdlcy9tYW9tYW8ucG5nJyBhbHQ9J21hb21hbycgd2lkdGg9JzE2NScgaGVpZ2h0PScyNCcgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGFyYWdyYXBoLXNtYXJ0ZXInPiBkaXNjb3ZlciAmIHNoYXJlIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbG9nYW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2xvZ2FuL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsaWVudENyZWRlbnRpYWxzOiB7XG4gICAgYXBpS2V5OiAnQUl6YVN5QklyUl9BOC1YdWdTSW1ZNkhDei1HRm42YWY1WXJISkJzJyxcbiAgICBhdXRoRG9tYWluOiAnbWFvbWFvLXRlc3RpbmcuZmlyZWJhc2VhcHAuY29tJyxcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbWFvbWFvLXRlc3RpbmcuZmlyZWJhc2Vpby5jb20nLFxuICAgIHByb2plY3RJZDogJ21hb21hby10ZXN0aW5nJyxcbiAgICBzdG9yYWdlQnVja2V0OiAnbWFvbWFvLXRlc3RpbmcuYXBwc3BvdC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnMzIzMTE2MjM5MjIyJ1xuICB9LFxuICBzZXJ2ZXJDcmVkZW50aWFsczoge1xuICAgICd0eXBlJzogJ3NlcnZpY2VfYWNjb3VudCcsXG4gICAgJ3Byb2plY3RfaWQnOiAnbWFvbWFvLXRlc3RpbmcnLFxuICAgICdwcml2YXRlX2tleV9pZCc6ICc0ZWI3OWY1ZmM1MDFlNjM3NGY3YmFhODVlMGFmYTFmZDUxODNhY2NlJyxcbiAgICAncHJpdmF0ZV9rZXknOiAnLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFEbTVEQWlkS2JZYldhVFxcbjJycFVBVHZic2E3amZuaWJIK09kMEJ6cTh4QVJvYmxYUElQbm9BUjVwdDJZYUlYazI2OEhvSGI3VWtBUW5WQlpcXG5TV2NUbUpmQVpNYXpsKys2cHBTSzdTd2RYaDRYMHNuT05KZUFBRUNIbWxCVWJiVmJpMDlWK3lxeTRSc2ZVTCsrXFxub00zdndMVm9JRk5nY1lXM1daRk1FOXhyY1ZnelM1SytZaC9vR3dXNTVvK0oxQ0E3c3FjeGdBOUlvNUEyWWxqMlxcbnVORG1Gc3ZEbUQ5eUllUHZNcTh6dkdORjdQT3VPd0pzVWd6RUFuWE41M3h5bHBaRUJtMXJ3QWdVQk9TKzBYcWVcXG4yZlZVUmFkSUtLdUFiTGxQRVZmS1hTSzE0SlduSFpnVzh2cTVWY0svcG5ySkN4aUlQUkNTVzhiSHpYSlVWUFFTXFxucDVsWkZuVGJBZ01CQUFFQ2dnRUFBTXk3aWZNRGZPNXNFNGtIYWpFUzV3RG5qU3dyK01XVWdVQnVTVFlNVVROUlxcbk5BY21vYy9CRkRiS3Y3TmsrMVR6ZDBCTUNUVFF1ZjRCZ0QycjJMcUhsQWdGVkN2cmphYjBEc01oaXZ4L2VDK25cXG51VW9mV0Rjb0FoQTd4UDhZU0xmanozVnVRVzVjTExDWDZXNGZLSHh2Wkd2d1BmNUdxMHJwSU8xVXJ4NldZcDhYXFxudExSVDRkemk4YldWT0cyUkJCd001QXZNR3dzNXVHT2RvUmtRZkw0NTkzbmJlV3lKbmRnZjdEZnJvd0xIUUNPU1xcblk2WFYyUWIwb29Gcit1OHdSelB4UkZUVXRlYjFpUndDb1J6S1hWTTdOOUl2cFlTcjZsVCtoZlhoTEc0d1hXcFVcXG5JbWZyaFJtOVVIdy9vbndIZmJzY3ZlbzlXeEdIbGl2Z0hzSTM1SWg1aVFLQmdRRDU0WlBsVUh4NEE5VlpoeTZhXFxuc3hncE1vTzMyTXdlMDNXbjV0QnJ5UjZVSlRiUmc4Ty9zaDl4R2gwbTBkdVk5SmhVeUpQRm1mS284bG9McXlWY1xcbmFYT1VWd2lsdkQ0dW9TVTBsMFJpSWdUdE14R2s4cGJrblV6ekxIZVplOXNFOXNVWXRDMmExU3FZR09vcjdjaDhcXG5pa1prTEFlQVhobUpmZE1tWTJNeElXcHJUd0tCZ1FEc2k1SEwyNHVaY2M3QXRqTWVKVWxMSTJ6eUhrVVoyemNhXFxuUkNGQUhVcmUzSnNBT01rN2ZhWWRBaDIxTTFGWGIyZHdma1l0WVlzYlI4REU5WDFrUkZWcllVc1Nrc3E2akxSMlxcblluVjF2b3pOTWZTcWFXTndVZ0tWS1VpZ2oxSjd0VFBLSGVxc2ppcXkyeHJuWjNzR1JYV1Rqdkw3b2pnKzRtUW5cXG5NSk8rTlFDS3RRS0JnUUNpNUR3bkJucTlPYktBdEREYlE5aUNNcDNPNFJMZkhYWGJTQW1oMmUrSEgyTkczU0JqXFxuL0ZlbXdTRXp4eVhoNWNEUHRCa3dmUlRFc1llbGg2SEpSaXpFREtCa2Vmd0hKYUU5VVVhUXVpQ0FDQVIraEcxOVxcbkJsVzlSOFdIVmtnR1NsOWRwVWI5WWV4c1RnR0pOVzYyVU9WbU01V0lSczlhNDUwYnJ6cGdNcXBPM1FLQmdCYXlcXG5EWHNSeFlNamVFTGxPR0pjRVh3MEdlL2hGNkF6ZUVYODQzUFRXNnVtWHZqV2VmaExSZlRpanhjanBWcE9SZzUxXFxuRHlhcmhUMUkxU1lRcDhkSEJ5c1dXcTJkaC9YK0toSnh2L05jSlFaTEZMNkUvaFY0eU9hbTMyRUlYMUdmUVNqVFxcblZnRFlZeUJtQlY3T2Z1OUxHc3pkbWxLcWJkc2F2YUZFOStmNERlVkJBb0dCQUtxQmRIemtnWlNsRjBBRTNhOXNcXG5PbXBTMlBQNkZvQWlqVm0zK2srN3JzZ0F5dStScFZSWVhmWk5VaThkamxybDI5em16aFVSaHBCTVJHbks1VWVDXFxuMFMxQlpDaUxBRVVwNjgyTHJkZG9YWDhTSDdrQ05GMGczclVzY3VocWh5d0xrbnRMUitpWjFkVEF5U0V6ZTJQWlxcbkRlMkRQRXludllJVEhEOW1JUm1mMm1ZZlxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG4nLFxuICAgICdjbGllbnRfZW1haWwnOiAnZmlyZWJhc2UtYWRtaW5zZGstYXoxbDNAbWFvbWFvLXRlc3RpbmcuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20nLFxuICAgICdjbGllbnRfaWQnOiAnMTA1NzM1ODE1MTA2MzY3MzM2NzE3JyxcbiAgICAnYXV0aF91cmknOiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgnLFxuICAgICd0b2tlbl91cmknOiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Rva2VuJyxcbiAgICAnYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsJzogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cycsXG4gICAgJ2NsaWVudF94NTA5X2NlcnRfdXJsJzogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstYXoxbDMlNDBtYW9tYW8tdGVzdGluZy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZmlyZWJhc2VDcmVkZW50aWFscy5qcyIsIi8qXG4gKlxuICogQXBwSGVhZGVyXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHsgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAnbmVhbC1yZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dvSWNvbidcbmltcG9ydCBTbG9nYW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TbG9nYW4nXG5pbXBvcnQgeyBndWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFzaCdcbmltcG9ydCB7IGNsaWVudENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2VDcmVkZW50aWFscydcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJ1xuXG5jb25zdCBicmFuZCA9ICgpID0+IChcbiAgPEhlYWRlcj5cbiAgICA8TG9nb0ljb24gLz5cbiAgICA8U2xvZ2FuIC8+XG4gIDwvSGVhZGVyPilcblxuY29uc3QgYXZhdGFyID0gKHVzZXIpID0+IHtcbiAgaWYgKHVzZXIgJiYgKHVzZXIucGljdHVyZSB8fCB1c2VyLmF2YXRhcikpIHtcbiAgICByZXR1cm4gdXNlci5waWN0dXJlIHx8IHVzZXIuYXZhdGFyXG4gIH1cbiAgcmV0dXJuICcvc3RhdGljL2ltYWdlcy9uby1hdmF0YXIucG5nJ1xufVxuXG5jb25zdCBjdXN0b21Nb2RhbFN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzgycHgnLFxuICAgIGxlZnQ6ICdhdXRvJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9XG59XG5cbkBpbmplY3QoJ3N0b3JlJylcbkBpbmplY3QoJ3VpJylcbkBvYnNlcnZlclxuY2xhc3MgQXBwSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc0hvbWU6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzSG9tZTogdHJ1ZVxuICB9XG5cbiAgb25JbnRlcm5hbExvZ2luID0gKCkgPT4ge1xuICAgIGxvZ2dlci53YXJuKCdvbkludGVybmFsTG9naW4nLCB0aGlzLnByb3BzKVxuICAgIHRoaXMuYWRkTm90aWZpY2F0aW9uKCdUZXN0IEludGVybmFsOiBOZXcgVXNlcicpXG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTaWduSW4oZmFsc2UpXG4gICAgdGhpcy5wcm9wcy5zdG9yZS5pbnRlcm5hbExvZ2luKCh1c2VyKSA9PiB7XG4gICAgICBsb2dnZXIud2FybigndGVzdCB1c2VyJywgdXNlcilcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRUb3BpY3MgfSA9IHRoaXMucHJvcHMudWlcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuc2F2ZVRvcGljcyhzZWxlY3RlZFRvcGljcy5tYXAoaXRlbSA9PiBpdGVtLnRvcGljSWQpKVxuICAgICAgY29uc3QgeyBlbWFpbCwgbmFtZTogZGlzcGxheU5hbWUgfSA9IHVzZXJcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsICdtYW9tYW8nKS50aGVuKChuZXdVc2VyKSA9PiB7XG4gICAgICAgIG5ld1VzZXIudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgZGlzcGxheU5hbWUsXG4gICAgICAgICAgcGhvdG9VUkw6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5hZGROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uRmFjZWJvb2tMb2dpbiA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIGxvZ2dlci53YXJuKCdvbkZhY2Vib29rTG9naW4nLCB0aGlzLnByb3BzLCBldnQpXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpXG4gICAgcHJvdmlkZXIuYWRkU2NvcGUoJ2VtYWlsJylcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuYWRkTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIG9uR29vZ2xlTG9naW4gPSAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICBsb2dnZXIud2Fybignb25Hb29nbGVMb2dpbicsIHRoaXMucHJvcHMsIGV2dClcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpXG4gICAgcHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvcGx1cy5tZScpXG4gICAgcHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8uZW1haWwnKVxuICAgIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NvbnRhY3RzLnJlYWRvbmx5JylcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuYWRkTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIG9uTG9nb3V0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9nZ2VyLndhcm4oJ29uTG9nb3V0JywgdGhpcy5wcm9wcylcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZmV0Y2goJy9hcGkvYXV0aC9sb2dvdXQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUubG9nb3V0VXNlcigpXG4gICAgICB9KVxuICAgICAgdGhpcy5hZGROb3RpZmljYXRpb24oJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzaWduZWQgb3V0LicpXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBsb2dnZXIud2FybihlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgb25DbG9zZSA9ICgpID0+IHtcbiAgICBsb2dnZXIud2Fybignb25DbG9zZScsIHRoaXMucHJvcHMpXG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTaWduSW4oZmFsc2UpXG4gIH1cblxuICBzaG93U2lnbkluID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTaWduSW4odHJ1ZSwgJ1NpZ24gSW4nKVxuICB9XG5cbiAgb3BlblNoYXJlTWFuYWdlbWVudCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMudWkuZGlzcGxheVNoYXJlTWFuYWdlbWVudCgpXG4gIH1cblxuICBvbk9wZW5FeHRlbnNpb25Nb2RhbCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMudWkub3BlbkV4dGVuc2lvbk1vZGFsKClcbiAgfVxuXG4gIG9uQ2xvc2VFeHRlbnNpb25Nb2RhbCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMudWkuY2xvc2VFeHRlbnNpb25Nb2RhbCgpXG4gIH1cblxuICBub0ltYWdlID0gKGV2dCkgPT4ge1xuICAgIGV2dC50YXJnZXQuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL25vLWltYWdlLnBuZydcbiAgfVxuXG4gIGlubGluZUluc3RhbGwgPSAoKSA9PiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICBjaHJvbWUud2Vic3RvcmUuaW5zdGFsbChcbiAgICAnaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvb25raW5vZ2dwZWFtYWpuZ3Bha2luYWJhaGtvbWpjbWsnLFxuICAgIHRoaXMub25JbnN0YWxsU3VjZXNzLFxuICAgIHRoaXMub25JbnN0YWxsRmFpbClcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIH1cblxuICBvbkluc3RhbGxTdWNlc3MgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51aS5hZGROb3RpZmljYXRpb24oJ1llYWghIFlvdSBoYXZlIGJlZW4gaW5zdGFsbGVkIG1hb21hbyBleHRlbnNpb24gc3VjY2Vzc2Z1bGx5LicpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLmNoZWNrRW52aXJvbm1lbnQoKVxuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jaGVja0luc3RhbGwoKVxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG9uSW5zdGFsbEZhaWwgPSAoZXJyb3IpID0+IHtcbiAgICB0aGlzLnByb3BzLnVpLmFkZE5vdGlmaWNhdGlvbihlcnJvcilcbiAgfVxuXG4gIGFkZE5vdGlmaWNhdGlvbiA9IChtc2cpID0+IHtcbiAgICB0aGlzLnByb3BzLnVpLmFkZE5vdGlmaWNhdGlvbihtc2cpXG4gIH1cblxuICByZW1vdmVOb3RpZmljYXRpb24gPSAodXVpZCkgPT4ge1xuICAgIHRoaXMucHJvcHMudWkucmVtb3ZlTm90aWZpY2F0aW9uKHV1aWQpXG4gIH1cblxuICAvKiBnbG9iYWwgZmV0Y2ggKi9cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGxvZ2dlci53YXJuKCdBcHBIZWFkZXIgY29tcG9uZW50RGlkTW91bnQnKVxuICAgIGlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjbGllbnRDcmVkZW50aWFscylcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdmaXJlYmFzZSAtIG9uQXV0aFN0YXRlQ2hhbmdlZCcsIHVzZXIpXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm4oJ2ZpcmViYXNlIC0gdXNlcicsIHVzZXIpXG4gICAgICAgICAgY29uc3QgeyBwaG90b1VSTCB9ID0gdXNlclxuICAgICAgICAgIHJldHVybiB1c2VyLmdldElkVG9rZW4oKVxuICAgICAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcmUudXNlcklkIDwgMCkge1xuICAgICAgICAgICAgICBpZiAoIXVzZXIuaXNBbm9ueW1vdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vdGlmaWNhdGlvbihgV2VsY29tZSwgJHt1c2VyLmRpc3BsYXlOYW1lfSFgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudWkudG9nZ2xlU2lnbkluKGZhbHNlKVxuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9hcGkvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b2tlbiB9KVxuICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIG5ldyB1c2VyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gcmVnaXN0ZXIgbmV3IHVzZXJcbiAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdsb2dnZWQtaW4gdXNlcicsIGpzb24pXG4gICAgICAgICAgICAgICAgICBpZiAoIXVzZXIuaXNBbm9ueW1vdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkZWNvZGVkVG9rZW46IHsgZW1haWwsIG5hbWUsIHBpY3R1cmUsIGZpcmViYXNlOiB7IHNpZ25faW5fcHJvdmlkZXIsIGlkZW50aXRpZXMgfSB9IH0gPSBqc29uXG4gICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ3NpZ25faW5fcHJvdmlkZXInLCBzaWduX2luX3Byb3ZpZGVyKVxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybignaWRlbnRpdGllcycsIGlkZW50aXRpZXMpXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYl91c2VyX2lkID0gaWRlbnRpdGllc1snZmFjZWJvb2suY29tJ10gJiYgaWRlbnRpdGllc1snZmFjZWJvb2suY29tJ11bMF1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGdvb2dsZV91c2VyX2lkID0gaWRlbnRpdGllc1snZ29vZ2xlLmNvbSddICYmIGlkZW50aXRpZXNbJ2dvb2dsZS5jb20nXVswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcl9lbWFpbCA9IGlkZW50aXRpZXNbJ2VtYWlsJ10gJiYgaWRlbnRpdGllc1snZW1haWwnXVswXVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbl9pbl9wcm92aWRlciA9PT0gJ2dvb2dsZS5jb20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wcm92aWRlckRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdmlkZXJJZCA9PT0gc2lnbl9pbl9wcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZ29vZ2xlQ29ubmVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogaXRlbS5lbWFpbCwgbmFtZSwgcGljdHVyZSwgZ29vZ2xlX3VzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlbGVjdGVkVG9waWNzIH0gPSB0aGlzLnByb3BzLnVpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnNhdmVUb3BpY3Moc2VsZWN0ZWRUb3BpY3MubWFwKGl0ZW0gPT4gaXRlbS50b3BpY0lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmdvb2dsZUNvbm5lY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCwgbmFtZSwgcGljdHVyZSwgZ29vZ2xlX3VzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZWxlY3RlZFRvcGljcyB9ID0gdGhpcy5wcm9wcy51aVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnNhdmVUb3BpY3Moc2VsZWN0ZWRUb3BpY3MubWFwKGl0ZW0gPT4gaXRlbS50b3BpY0lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNpZ25faW5fcHJvdmlkZXIgPT09ICdmYWNlYm9vay5jb20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wcm92aWRlckRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdmlkZXJJZCA9PT0gc2lnbl9pbl9wcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZmFjZWJvb2tDb25uZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpdGVtLmVtYWlsLCBuYW1lLCBwaWN0dXJlLCBmYl91c2VyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZWxlY3RlZFRvcGljcyB9ID0gdGhpcy5wcm9wcy51aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5zYXZlVG9waWNzKHNlbGVjdGVkVG9waWNzLm1hcChpdGVtID0+IGl0ZW0udG9waWNJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5mYWNlYm9va0Nvbm5lY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCwgbmFtZSwgcGljdHVyZSwgZmJfdXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlbGVjdGVkVG9waWNzIH0gPSB0aGlzLnByb3BzLnVpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuc2F2ZVRvcGljcyhzZWxlY3RlZFRvcGljcy5tYXAoaXRlbSA9PiBpdGVtLnRvcGljSWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2lnbl9pbl9wcm92aWRlciA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdmb3VuZCB1c2VyIGVtYWlsJywgdXNlcl9lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybigncGhvdG9VUkwnLCBwaG90b1VSTClcbiAgICAgICAgICAgICAgICAgICAgICAvLyBoYWNrIGhlcmUsIHRyeSB0byBzdG9yZSBpbnRlbmFsIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nZ2VkVXNlciA9IEpTT04ucGFyc2UocGhvdG9VUkwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJldHJ5bExvZ2luRm9ySW50ZXJuYWxVc2VyKGxvZ2dlZFVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5pc0xvZ2luID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmlzTG9naW4gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnN0b3JlLmNoZWNrSW5zdGFsbCgpXG4gICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKCdBcHBIZWFkZXIgY29tcG9uZW50RGlkTW91bnQgc2V0SW50ZXJ2YWwnKVxuICAgICAgY291bnRlciArPSAxXG4gICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5pc0Nocm9tZSAmJiAhdGhpcy5wcm9wcy5zdG9yZS5pc01vYmlsZSAmJiBjb3VudGVyIDwgMTApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5jaGVja0luc3RhbGwoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZS5pc0luc3RhbGxlZE9uQ2hyb21lRGVza3RvcCkge1xuICAgICAgICAgIGxvZ2dlci53YXJuKCdBcHBIZWFkZXIgY2xlYXJJbnRlcnZhbCcpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNIaWRlOiB0cnVlfSlcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdBcHBIZWFkZXIgY2xlYXJJbnRlcnZhbCcpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgIH1cbiAgICB9LCAyICogMTAwMCkgLy8gY2hlY2sgbW0gZXh0ZW5zaW9uIGhhcyBpbnN0YWxsZWQgb24gZXZlcnkgMnNcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWFjdCAoKSB7XG4gICAgbG9nZ2VyLndhcm4oJ0FwcEhlYWRlciBjb21wb25lbnRXaWxsUmVhY3QnKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGxvZ2dlci53YXJuKCdBcHBIZWFkZXIgY29tcG9uZW50V2lsbFVubW91bnQnKVxuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBsb2dnZXIud2FybignQXBwSGVhZGVyIGNsZWFySW50ZXJ2YWwnKVxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBpc0xvZ2luLCB1c2VySWQsIHVzZXIsIGlzSW5zdGFsbGVkT25DaHJvbWVEZXNrdG9wLCBpc0Nocm9tZSwgaXNNb2JpbGUgfSA9IHRoaXMucHJvcHMuc3RvcmVcbiAgICBjb25zdCB7IHNob3dTaWduSW5Nb2RhbCwgdGl0bGUgfSA9IHRoaXMucHJvcHMudWlcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdmJhciBjbGFzc05hbWU9J2hlYWRlci1uYXYgYW5pbWF0ZWQgZmFkZUluRG93bicgYnJhbmQ9e2JyYW5kKCl9PlxuICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1icmllZmNhc2UgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdub3RpZmljYXRpb25zLW51bWJlciBub3RpZmljYXRpb25zLWhpcmluZyc+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYnVsbGhvcm4nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPiBXZSdyZSBoaXJpbmcgIVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tY2lyY2xlLWRvd24nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51IGRyb3Bkb3duLWhpcmluZyBwdWxsLXJpZ2h0Jz5cbiAgICAgICAgICAgIDxsaSBrZXk9e2d1aWQoKX0+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9oaXJpbmcvP3R5cGU9anMnIGFzPScvaGlyaW5nLWpzJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScvaGlyaW5nLWpzJz48aSBjbGFzc05hbWU9J2ZhIGZhLWFuZ2xlLXJpZ2h0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz4gIEphdmFTY3JpcHQgLyBOb2RlLkpTIERldmVsb3BlcjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBrZXk9e2d1aWQoKX0+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9oaXJpbmcvP3R5cGU9dnAnIGFzPScvaGlyaW5nLXZwJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScvaGlyaW5nLXZwJz48aSBjbGFzc05hbWU9J2ZhIGZhLWFuZ2xlLXJpZ2h0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz4gIFNlcnZlciAmIFBsYXRmb3JtIEVuZ2luZWVyIC8gVlAgRW5naW5lZXJpbmc8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICB7XG4gICAgICAgICAgKCFpc01vYmlsZSAmJiBpc0Nocm9tZSAmJiAhaXNJbnN0YWxsZWRPbkNocm9tZURlc2t0b3ApICYmXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1hZGR0bycgb25DbGljaz17dGhpcy5vbk9wZW5FeHRlbnNpb25Nb2RhbH0+IDxpIGNsYXNzTmFtZT0nZmEgZmEtcGx1cycgYXJpYS1oaWRkZW49J3RydWUnIC8+IEFERCBUTyBDSFJPTUU8L2J1dHRvbj5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGlzTG9naW4gJiZcbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMub3BlblNoYXJlTWFuYWdlbWVudH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2hhcmUtYWx0IGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXYtdGV4dCc+U2hhcmUgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIH1cbiAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAge2lzTG9naW4gJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93biBhY2NvdW50LWRyb3Bkb3duJz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkcm9wZG93bi10b2dnbGUnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgPGltZyBvbkVycm9yPXt0aGlzLm5vSW1hZ2V9IGNsYXNzTmFtZT0naW1hZ2UtYWNjb3VudCcgc3JjPXthdmF0YXIodXNlcil9IGFsdD17dXNlcklkfSB3aWR0aD0nMzMnIGhlaWdodD0nMzMnIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLWxvZ291dC1yZXMnIG9uQ2xpY2s9e3RoaXMub25Mb2dvdXR9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2lnbi1vdXQnIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduYXYtdGV4dCc+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSBwdWxsLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLm5hbWUgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LWRyb3Bkb3duX19pZGVudGl0eSBhY2NvdW50LWRyb3Bkb3duX19zZWdtZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgU2lnbmVkIGluIGFzIDxzdHJvbmc+e3VzZXIubmFtZX0gKHt1c2VyLmVtYWlsfSk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbG9nb3V0JyBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fT48aSBjbGFzc05hbWU9J2ZhIGZhLXNpZ24tb3V0JyAvPiBTaWduIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFpc0xvZ2luICYmIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxvZ2luJyBvbkNsaWNrPXt0aGlzLnNob3dTaWduSW59PjxpIGNsYXNzTmFtZT0nZmEgZmEtc2lnbi1pbicgYXJpYS1oaWRkZW49J3RydWUnIC8+IFNpZ24gSW48L2J1dHRvbj59XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBpc09wZW49e3Nob3dTaWduSW5Nb2RhbH1cbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9J1NpZ25Jbk1vZGFsJ1xuICAgICAgICAgICAgY29udGVudExhYmVsPXt0aXRsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgcmVmPSdzdWJ0aXRsZSc+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLWFjdGlvbicgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2stYnV0dG9uJz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tc29jaWFsIGJ0bi1mYWNlYm9vaycgb25DbGljaz17dGhpcy5vbkZhY2Vib29rTG9naW59PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mYWNlYm9vaycgLz4ge3RpdGxlfSB3aXRoIEZhY2Vib29rXG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2stYnV0dG9uJz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tc29jaWFsIGJ0bi1nb29nbGUnIG9uQ2xpY2s9e3RoaXMub25Hb29nbGVMb2dpbn0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWdvb2dsZScgLz4ge3RpdGxlfSB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jay1idXR0b24nPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1zb2NpYWwgYnRuLWludGVybmFsLWxhYicgb25DbGljaz17dGhpcy5vbkludGVybmFsTG9naW59PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBpY29uLWludGVybmFsLWxhYicgLz4gVGVzdCBJbnRlcm5hbDogTmV3IFVzZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e3RoaXMucHJvcHMudWkuc2hvd0V4dGVuc2lvbk1vZGFsfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLm9uQ2xvc2VFeHRlbnNpb25Nb2RhbH1cbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9J0luc3RhbGxNb2RhbCdcbiAgICAgICAgICBzdHlsZT17Y3VzdG9tTW9kYWxTdHlsZXN9XG4gICAgICAgICAgY29udGVudExhYmVsPSdJbnN0YWxsIG1hb21hbyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RhbGwtbW9kYWwtY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbW9kYWwtdGl0bGUnPkluc3RhbGwgbWFvbWFvPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdGFsbC1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgICAgICAgPGgzPjxpbWcgY2xhc3NOYW1lPSdsb2dvLWltYWdlJyBzcmM9Jy9zdGF0aWMvaW1hZ2VzL21hb21hby5wbmcnIGFsdD0nbWFvbWFvJyAvPiBsZXRzIHlvdSBzaGFyZSB0b3BpY3Mgd2l0aCBmcmllbmRzPC9oMz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT0nbG9nby1pbWFnZScgc3JjPScvc3RhdGljL2ltYWdlcy9tYW9tYW8ucG5nJyBhbHQ9J21hb21hbycgLz4gb25seSBzaGFyZXMgd2hhdCB5b3UgdGVsbCBpdCwgd2hlbiB5b3UgdGVsbCBpdC4gPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluc3RhbGwnIHR5cGU9J2J1dHRvbicgb25DbGljaz17dGhpcy5pbmxpbmVJbnN0YWxsfT5PayEgR2l2ZSBtZSA8aW1nIGNsYXNzTmFtZT0nbG9nby1pbWFnZScgc3JjPScvc3RhdGljL2ltYWdlcy9tYW9tYW8ucG5nJyBhbHQ9J21hb21hbycgLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvTmF2YmFyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvQXBwSGVhZGVyL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbklBO0FBQ0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDNVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcmxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFUQTs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBUkE7Ozs7OztBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUVBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7QUFQQTs7Ozs7O0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBcEJBOzs7Ozs7QUFxQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFDQTtBQU1BOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQURBO0FBQ0E7QUFXQTs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBRUE7QUFQQTtBQVFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFQQTtBQVNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7Ozs7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFxQkE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUEzREE7QUE0REE7QUFFQTtBQUNBO0FBQ0E7QUFoRkE7QUFpRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQVFBO0FBQ0E7QUFFQTtBQWRBOzs7O0FBa0JBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBTEE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQVBBOzs7Ozs7QUExV0E7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBNldBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
          })
        