
          window.__NEXT_REGISTER_CHUNK('--VimeoPlayer-50364538-9a4b-4416-ae25-856a0de3f5d3.js', function() {
            webpackJsonp([14],{

/***/ 1252:
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

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noParser = __webpack_require__(1171);

var _noParser2 = _interopRequireDefault(_noParser);

var _player = __webpack_require__(1455);

var _player2 = _interopRequireDefault(_player);

var _lodash = __webpack_require__(705);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/VimeoPlayer/index.js';
/**
*
* VimeoPlayer
*
*/

var Title = _noParser2.default.h3.withConfig({
  displayName: 'VimeoPlayer__Title',
  componentId: 's1b7xdvp-0'
})([['{font-size:14px;margin:0;padding:0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}']]);

var Anchor = _noParser2.default.a.withConfig({
  displayName: 'VimeoPlayer__Anchor',
  componentId: 's1b7xdvp-1'
})([['{color:#41addd;text-decoration:none;}'], [':hover{color:#6cc0e5;}']]);

var Description = _noParser2.default.p.withConfig({
  displayName: 'VimeoPlayer__Description',
  componentId: 's1b7xdvp-2'
})([['{font-size:12px;margin:0;padding:0;text-align:left;}']]);

var Icon = _noParser2.default.img.withConfig({
  displayName: 'VimeoPlayer__Icon',
  componentId: 's1b7xdvp-3'
})([['{float:left;width:32px;height:32px;}']]);

function vimeoGetID(url) {
  /* global URL */
  var _ref = new URL(url),
      pathname = _ref.pathname;

  return pathname.substr(1);
}

function playVideo(iframe) {
  var player = new _player2.default(iframe);
  player.setVolume(0);
  player.play();
}

function pauseVideo(iframe) {
  var player = new _player2.default(iframe);
  player.pause();
}

function handleClick(event, url, iframe) {
  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    window.open(url, '_blank');
  } else if (iframe) {
    var player = new _player2.default(iframe);
    player.play();
  }
}

var VimeoPlayer = function (_PureComponent) {
  (0, _inherits3.default)(VimeoPlayer, _PureComponent);

  function VimeoPlayer() {
    (0, _classCallCheck3.default)(this, VimeoPlayer);

    return (0, _possibleConstructorReturn3.default)(this, (VimeoPlayer.__proto__ || (0, _getPrototypeOf2.default)(VimeoPlayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(VimeoPlayer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          name = _props.name,
          description = _props.description,
          type = _props.type,
          onPreview = _props.onPreview;

      return _react2.default.createElement('div', { className: 'thumbnail',
        onMouseEnter: function onMouseEnter() {
          _this2.iframe && playVideo(_this2.iframe);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.iframe && pauseVideo(_this2.iframe);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'thumbnail-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('iframe', {
        src: 'https://player.vimeo.com/video/' + vimeoGetID(url),
        frameBorder: '0',
        height: '100%',
        width: '100%',
        allowFullScreen: true,
        ref: function ref(el) {
          _this2.iframe = el;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement('div', { className: 'caption', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(Title, { className: 'caption-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(Anchor, { onClick: function onClick(evt) {
          onPreview() && handleClick(evt, url, _this2.iframe);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, name && _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, name))), description && _react2.default.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, (0, _lodash.truncate)(description, { length: 100, separator: /,? +/ })), _react2.default.createElement('div', { className: 'panel-user panel-credit', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('div', { className: 'panel-user-img', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('span', { className: 'credit-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(Icon, { src: '/static/images/vimeo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement('span', { className: 'panel-user-cnt', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('span', { className: 'full-name', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, type)))))));
    }
  }]);

  return VimeoPlayer;
}(_react.PureComponent);

VimeoPlayer.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = VimeoPlayer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/VimeoPlayer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/BlockElement/VimeoPlayer/index.js"); } } })();

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v2.1.0 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vimeo = global.Vimeo || {}, global.Vimeo.Player = factory());
}(this, (function () { 'use strict';

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window.postMessage !== 'undefined';

if (!arrayIndexOfSupport || !postMessageSupport) {
    throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (exports) {
  'use strict';
  //shared pointer

  var i;
  //shortcuts
  var defineProperty = Object.defineProperty,
      is = function is(a, b) {
    return a === b || a !== a && b !== b;
  };

  //Polyfill global objects
  if (typeof WeakMap == 'undefined') {
    exports.WeakMap = createCollection({
      // WeakMap#delete(key:void*):boolean
      'delete': sharedDelete,
      // WeakMap#clear():
      clear: sharedClear,
      // WeakMap#get(key:void*):void*
      get: sharedGet,
      // WeakMap#has(key:void*):boolean
      has: mapHas,
      // WeakMap#set(key:void*, value:void*):void
      set: sharedSet
    }, true);
  }

  if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
    exports.Map = createCollection({
      // WeakMap#delete(key:void*):boolean
      'delete': sharedDelete,
      //:was Map#get(key:void*[, d3fault:void*]):void*
      // Map#has(key:void*):boolean
      has: mapHas,
      // Map#get(key:void*):boolean
      get: sharedGet,
      // Map#set(key:void*, value:void*):void
      set: sharedSet,
      // Map#keys(void):Iterator
      keys: sharedKeys,
      // Map#values(void):Iterator
      values: sharedValues,
      // Map#entries(void):Iterator
      entries: mapEntries,
      // Map#forEach(callback:Function, context:void*):void ==> callback.call(context, key, value, mapObject) === not in specs`
      forEach: sharedForEach,
      // Map#clear():
      clear: sharedClear
    });
  }

  if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
    exports.Set = createCollection({
      // Set#has(value:void*):boolean
      has: setHas,
      // Set#add(value:void*):boolean
      add: sharedAdd,
      // Set#delete(key:void*):boolean
      'delete': sharedDelete,
      // Set#clear():
      clear: sharedClear,
      // Set#keys(void):Iterator
      keys: sharedValues, // specs actually say "the same function object as the initial value of the values property"
      // Set#values(void):Iterator
      values: sharedValues,
      // Set#entries(void):Iterator
      entries: setEntries,
      // Set#forEach(callback:Function, context:void*):void ==> callback.call(context, value, index) === not in specs
      forEach: sharedForEach
    });
  }

  if (typeof WeakSet == 'undefined') {
    exports.WeakSet = createCollection({
      // WeakSet#delete(key:void*):boolean
      'delete': sharedDelete,
      // WeakSet#add(value:void*):boolean
      add: sharedAdd,
      // WeakSet#clear():
      clear: sharedClear,
      // WeakSet#has(value:void*):boolean
      has: setHas
    }, true);
  }

  /**
   * ES6 collection constructor
   * @return {Function} a collection class
   */
  function createCollection(proto, objectOnly) {
    function Collection(a) {
      if (!this || this.constructor !== Collection) return new Collection(a);
      this._keys = [];
      this._values = [];
      this._itp = []; // iteration pointers
      this.objectOnly = objectOnly;

      //parse initial iterable argument passed
      if (a) init.call(this, a);
    }

    //define size for non object-only collections
    if (!objectOnly) {
      defineProperty(proto, 'size', {
        get: sharedSize
      });
    }

    //set prototype
    proto.constructor = Collection;
    Collection.prototype = proto;

    return Collection;
  }

  /** parse initial iterable argument passed */
  function init(a) {
    var i;
    //init Set argument, like `[1,2,3,{}]`
    if (this.add) a.forEach(this.add, this);
    //init Map argument like `[[1,2], [{}, 4]]`
    else a.forEach(function (a) {
        this.set(a[0], a[1]);
      }, this);
  }

  /** delete */
  function sharedDelete(key) {
    if (this.has(key)) {
      this._keys.splice(i, 1);
      this._values.splice(i, 1);
      // update iteration pointers
      this._itp.forEach(function (p) {
        if (i < p[0]) p[0]--;
      });
    }
    // Aurora here does it while Canary doesn't
    return -1 < i;
  }

  function sharedGet(key) {
    return this.has(key) ? this._values[i] : undefined;
  }

  function has(list, key) {
    if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");
    //NaN or 0 passed
    if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
    return -1 < i;
  }

  function setHas(value) {
    return has.call(this, this._values, value);
  }

  function mapHas(value) {
    return has.call(this, this._keys, value);
  }

  /** @chainable */
  function sharedSet(key, value) {
    this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
    return this;
  }

  /** @chainable */
  function sharedAdd(value) {
    if (!this.has(value)) this._values.push(value);
    return this;
  }

  function sharedClear() {
    (this._keys || 0).length = this._values.length = 0;
  }

  /** keys, values, and iterate related methods */
  function sharedKeys() {
    return sharedIterator(this._itp, this._keys);
  }

  function sharedValues() {
    return sharedIterator(this._itp, this._values);
  }

  function mapEntries() {
    return sharedIterator(this._itp, this._keys, this._values);
  }

  function setEntries() {
    return sharedIterator(this._itp, this._values, this._values);
  }

  function sharedIterator(itp, array, array2) {
    var p = [0],
        done = false;
    itp.push(p);
    return {
      next: function next() {
        var v,
            k = p[0];
        if (!done && k < array.length) {
          v = array2 ? [array[k], array2[k]] : array[k];
          p[0]++;
        } else {
          done = true;
          itp.splice(itp.indexOf(p), 1);
        }
        return { done: done, value: v };
      }
    };
  }

  function sharedSize() {
    return this._values.length;
  }

  function sharedForEach(callback, context) {
    var it = this.entries();
    for (;;) {
      var r = it.next();
      if (r.done) break;
      callback.call(context, r.value[1], r.value[0], this);
    }
  }
})('object' != 'undefined' && typeof commonjsGlobal != 'undefined' ? commonjsGlobal : window);
});

var npo_src = createCommonjsModule(function (module) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/

(function UMD(name, context, definition) {
	// special form of UMD for polyfilling across evironments
	context[name] = context[name] || definition();
	if ('object' != "undefined" && module.exports) {
		module.exports = context[name];
	} else if (false) {
		undefined(function $AMD$() {
			return context[name];
		});
	}
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
	/*jshint validthis:true */
	"use strict";

	var builtInProp,
	    cycle,
	    scheduling_queue,
	    ToString = Object.prototype.toString,
	    timer = typeof setImmediate != "undefined" ? function timer(fn) {
		return setImmediate(fn);
	} : setTimeout;

	// dammit, IE8.
	try {
		Object.defineProperty({}, "x", {});
		builtInProp = function builtInProp(obj, name, val, config) {
			return Object.defineProperty(obj, name, {
				value: val,
				writable: true,
				configurable: config !== false
			});
		};
	} catch (err) {
		builtInProp = function builtInProp(obj, name, val) {
			obj[name] = val;
			return obj;
		};
	}

	// Note: using a queue instead of array for efficiency
	scheduling_queue = function Queue() {
		var first, last, item;

		function Item(fn, self) {
			this.fn = fn;
			this.self = self;
			this.next = void 0;
		}

		return {
			add: function add(fn, self) {
				item = new Item(fn, self);
				if (last) {
					last.next = item;
				} else {
					first = item;
				}
				last = item;
				item = void 0;
			},
			drain: function drain() {
				var f = first;
				first = last = cycle = void 0;

				while (f) {
					f.fn.call(f.self);
					f = f.next;
				}
			}
		};
	}();

	function schedule(fn, self) {
		scheduling_queue.add(fn, self);
		if (!cycle) {
			cycle = timer(scheduling_queue.drain);
		}
	}

	// promise duck typing
	function isThenable(o) {
		var _then,
		    o_type = typeof o === "undefined" ? "undefined" : _typeof(o);

		if (o != null && (o_type == "object" || o_type == "function")) {
			_then = o.then;
		}
		return typeof _then == "function" ? _then : false;
	}

	function notify() {
		for (var i = 0; i < this.chain.length; i++) {
			notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
		}
		this.chain.length = 0;
	}

	// NOTE: This is a separate function to isolate
	// the `try..catch` so that other code can be
	// optimized better
	function notifyIsolated(self, cb, chain) {
		var ret, _then;
		try {
			if (cb === false) {
				chain.reject(self.msg);
			} else {
				if (cb === true) {
					ret = self.msg;
				} else {
					ret = cb.call(void 0, self.msg);
				}

				if (ret === chain.promise) {
					chain.reject(TypeError("Promise-chain cycle"));
				} else if (_then = isThenable(ret)) {
					_then.call(ret, chain.resolve, chain.reject);
				} else {
					chain.resolve(ret);
				}
			}
		} catch (err) {
			chain.reject(err);
		}
	}

	function resolve(msg) {
		var _then,
		    self = this;

		// already triggered?
		if (self.triggered) {
			return;
		}

		self.triggered = true;

		// unwrap
		if (self.def) {
			self = self.def;
		}

		try {
			if (_then = isThenable(msg)) {
				schedule(function () {
					var def_wrapper = new MakeDefWrapper(self);
					try {
						_then.call(msg, function $resolve$() {
							resolve.apply(def_wrapper, arguments);
						}, function $reject$() {
							reject.apply(def_wrapper, arguments);
						});
					} catch (err) {
						reject.call(def_wrapper, err);
					}
				});
			} else {
				self.msg = msg;
				self.state = 1;
				if (self.chain.length > 0) {
					schedule(notify, self);
				}
			}
		} catch (err) {
			reject.call(new MakeDefWrapper(self), err);
		}
	}

	function reject(msg) {
		var self = this;

		// already triggered?
		if (self.triggered) {
			return;
		}

		self.triggered = true;

		// unwrap
		if (self.def) {
			self = self.def;
		}

		self.msg = msg;
		self.state = 2;
		if (self.chain.length > 0) {
			schedule(notify, self);
		}
	}

	function iteratePromises(Constructor, arr, resolver, rejecter) {
		for (var idx = 0; idx < arr.length; idx++) {
			(function IIFE(idx) {
				Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
					resolver(idx, msg);
				}, rejecter);
			})(idx);
		}
	}

	function MakeDefWrapper(self) {
		this.def = self;
		this.triggered = false;
	}

	function MakeDef(self) {
		this.promise = self;
		this.state = 0;
		this.triggered = false;
		this.chain = [];
		this.msg = void 0;
	}

	function Promise(executor) {
		if (typeof executor != "function") {
			throw TypeError("Not a function");
		}

		if (this.__NPO__ !== 0) {
			throw TypeError("Not a promise");
		}

		// instance shadowing the inherited "brand"
		// to signal an already "initialized" promise
		this.__NPO__ = 1;

		var def = new MakeDef(this);

		this["then"] = function then(success, failure) {
			var o = {
				success: typeof success == "function" ? success : true,
				failure: typeof failure == "function" ? failure : false
			};
			// Note: `then(..)` itself can be borrowed to be used against
			// a different promise constructor for making the chained promise,
			// by substituting a different `this` binding.
			o.promise = new this.constructor(function extractChain(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}

				o.resolve = resolve;
				o.reject = reject;
			});
			def.chain.push(o);

			if (def.state !== 0) {
				schedule(notify, def);
			}

			return o.promise;
		};
		this["catch"] = function $catch$(failure) {
			return this.then(void 0, failure);
		};

		try {
			executor.call(void 0, function publicResolve(msg) {
				resolve.call(def, msg);
			}, function publicReject(msg) {
				reject.call(def, msg);
			});
		} catch (err) {
			reject.call(def, err);
		}
	}

	var PromisePrototype = builtInProp({}, "constructor", Promise,
	/*configurable=*/false);

	// Note: Android 4 cannot use `Object.defineProperty(..)` here
	Promise.prototype = PromisePrototype;

	// built-in "brand" to signal an "uninitialized" promise
	builtInProp(PromisePrototype, "__NPO__", 0,
	/*configurable=*/false);

	builtInProp(Promise, "resolve", function Promise$resolve(msg) {
		var Constructor = this;

		// spec mandated checks
		// note: best "isPromise" check that's practical for now
		if (msg && (typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object" && msg.__NPO__ === 1) {
			return msg;
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			resolve(msg);
		});
	});

	builtInProp(Promise, "reject", function Promise$reject(msg) {
		return new this(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			reject(msg);
		});
	});

	builtInProp(Promise, "all", function Promise$all(arr) {
		var Constructor = this;

		// spec mandated checks
		if (ToString.call(arr) != "[object Array]") {
			return Constructor.reject(TypeError("Not an array"));
		}
		if (arr.length === 0) {
			return Constructor.resolve([]);
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			var len = arr.length,
			    msgs = Array(len),
			    count = 0;

			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				msgs[idx] = msg;
				if (++count === len) {
					resolve(msgs);
				}
			}, reject);
		});
	});

	builtInProp(Promise, "race", function Promise$race(arr) {
		var Constructor = this;

		// spec mandated checks
		if (ToString.call(arr) != "[object Array]") {
			return Constructor.reject(TypeError("Not an array"));
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				resolve(msg);
			}, reject);
		});
	});

	return Promise;
});
});

/**
 * @module lib/callbacks
 */

var callbackMap = new WeakMap();

/**
 * Store a callback for a method or event for a player.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */
function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};

    if (!(name in playerCallbacks)) {
        playerCallbacks[name] = [];
    }

    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}

/**
 * Get the callbacks for a player and event or method.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */
function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}

/**
 * Remove a stored callback for a method or event for a player.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */
function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};

    if (!playerCallbacks[name]) {
        return true;
    }

    // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);

        return true;
    }

    var index = playerCallbacks[name].indexOf(callback);

    if (index !== -1) {
        playerCallbacks[name].splice(index, 1);
    }

    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}

/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */
function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);

    if (playerCallbacks.length < 1) {
        return false;
    }

    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}

/**
 * Move callbacks associated with an element to another element.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */
function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);

    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}

/**
 * @module lib/functions
 */

/**
 * Get the name of the method for a given getter or setter.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */
function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) {
        return prop;
    }

    return '' + type.toLowerCase() + prop.substr(0, 1).toUpperCase() + prop.substr(1);
}

/**
 * Check to see if the object is a DOM Element.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {*} element The object to check.
 * @return {boolean}
 */
function isDomElement(element) {
    return element instanceof window.HTMLElement;
}

/**
 * Check to see whether the value is a number.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */
function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}

/**
 * Check to see if the URL is a Vimeo url.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {string} url The url string.
 * @return {boolean}
 */
function isVimeoUrl(url) {
    return (/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(url)
    );
}

/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */
function getVimeoUrl() {
    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var id = oEmbedParameters.id;
    var url = oEmbedParameters.url;
    var idOrUrl = id || url;

    if (!idOrUrl) {
        throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
    }

    if (isInteger(idOrUrl)) {
        return 'https://vimeo.com/' + idOrUrl;
    }

    if (isVimeoUrl(idOrUrl)) {
        return idOrUrl.replace('http:', 'https:');
    }

    if (id) {
        throw new TypeError('\u201C' + id + '\u201D is not a valid video id.');
    }

    throw new TypeError('\u201C' + idOrUrl + '\u201D is not a vimeo.com url.');
}

/**
 * @module lib/embed
 */

var oEmbedParameters = ['id', 'url', 'width', 'maxwidth', 'height', 'maxheight', 'portrait', 'title', 'byline', 'color', 'autoplay', 'autopause', 'loop', 'responsive'];

/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */
function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return oEmbedParameters.reduce(function (params, param) {
        var value = element.getAttribute('data-vimeo-' + param);

        if (value || value === '') {
            params[param] = value === '' ? 1 : value;
        }

        return params;
    }, defaults);
}

/**
 * Make an oEmbed call for the specified URL.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @return {Promise}
 */
function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new Promise(function (resolve, reject) {
        if (!isVimeoUrl(videoUrl)) {
            throw new TypeError('\u201C' + videoUrl + '\u201D is not a vimeo.com url.');
        }

        var url = 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoUrl);

        for (var param in params) {
            if (params.hasOwnProperty(param)) {
                url += '&' + param + '=' + encodeURIComponent(params[param]);
            }
        }

        var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (xhr.status === 404) {
                reject(new Error('\u201C' + videoUrl + '\u201D was not found.'));
                return;
            }

            if (xhr.status === 403) {
                reject(new Error('\u201C' + videoUrl + '\u201D is not embeddable.'));
                return;
            }

            try {
                var json = JSON.parse(xhr.responseText);
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };

        xhr.onerror = function () {
            var status = xhr.status ? ' (' + xhr.status + ')' : '';
            reject(new Error('There was an error fetching the embed code from Vimeo' + status + '.'));
        };

        xhr.send();
    });
}

/**
 * Create an embed from oEmbed data inside an element.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */
function createEmbed(_ref, element) {
    var html = _ref.html;

    if (!element) {
        throw new TypeError('An element must be provided');
    }

    if (element.getAttribute('data-vimeo-initialized') !== null) {
        return element.querySelector('iframe');
    }

    var div = document.createElement('div');
    div.innerHTML = html;

    element.appendChild(div.firstChild);
    element.setAttribute('data-vimeo-initialized', 'true');

    return element.querySelector('iframe');
}

/**
 * Initialize all embeds within a specific element
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */
function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

    var handleError = function handleError(error) {
        if ('console' in window && console.error) {
            console.error('There was an error creating an embed: ' + error);
        }
    };

    elements.forEach(function (element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute('data-vimeo-defer') !== null) {
                return;
            }

            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);

            getOEmbedData(url, params).then(function (data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}

/**
 * Resize embeds when messaged by the player.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */
function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) {
            return;
        }

        if (!event.data || event.data.event !== 'spacechange') {
            return;
        }

        var iframes = parent.querySelectorAll('iframe');

        for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow !== event.source) {
                continue;
            }

            var space = iframes[i].parentElement;

            if (space && space.className.indexOf('vimeo-space') !== -1) {
                space.style.paddingBottom = event.data.data[0].bottom + 'px';
            }

            break;
        }
    };

    if (window.addEventListener) {
        window.addEventListener('message', onMessage, false);
    } else if (window.attachEvent) {
        window.attachEvent('onmessage', onMessage);
    }
}

/**
 * @module lib/postmessage
 */

/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */
function parseMessageData(data) {
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    return data;
}

/**
 * Post a message to the specified target.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */
function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
        return;
    }

    var message = {
        method: method
    };

    if (params !== undefined) {
        message.value = params;
    }

    // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));
    if (ieVersion >= 8 && ieVersion < 10) {
        message = JSON.stringify(message);
    }

    player.element.contentWindow.postMessage(message, player.origin);
}

/**
 * Parse the data received from a message event.
 *
 * @author Brad Dougherty <brad@vimeo.com>
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */
function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param = void 0;

    if (data.event) {
        if (data.event === 'error') {
            var promises = getCallbacks(player, data.data.method);

            promises.forEach(function (promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;

                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }

        callbacks = getCallbacks(player, 'event:' + data.event);
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);

        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }

    callbacks.forEach(function (callback) {
        try {
            if (typeof callback === 'function') {
                callback.call(player, param);
                return;
            }

            callback.resolve(param);
        } catch (e) {
            // empty
        }
    });
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerMap = new WeakMap();
var readyMap = new WeakMap();

var Player = function () {
    /**
    * Create a Player.
    *
    * @author Brad Dougherty <brad@vimeo.com>
    * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
    *        player iframe, and id, or a jQuery object.
    * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
    * @return {Player}
    */
    function Player(element) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Player);

        /* global jQuery */
        if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) {
                console.warn('A jQuery object with multiple elements was passed, using the first element.');
            }

            element = element[0];
        }

        // Find an element by ID
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }

        // Not an element!
        if (!isDomElement(element)) {
            throw new TypeError('You must pass either a valid element or a valid id.');
        }

        // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== 'IFRAME') {
            var iframe = element.querySelector('iframe');

            if (iframe) {
                element = iframe;
            }
        }

        // iframe url is not a Vimeo url
        if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
            throw new Error('The player element passed isn’t a Vimeo embed.');
        }

        // If there is already a player object in the map, return that
        if (playerMap.has(element)) {
            return playerMap.get(element);
        }

        this.element = element;
        this.origin = '*';

        var readyPromise = new npo_src(function (resolve, reject) {
            var onMessage = function onMessage(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
                    return;
                }

                if (_this.origin === '*') {
                    _this.origin = event.origin;
                }

                var data = parseMessageData(event.data);
                var isReadyEvent = 'event' in data && data.event === 'ready';
                var isPingResponse = 'method' in data && data.method === 'ping';

                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute('data-ready', 'true');
                    resolve();
                    return;
                }

                processData(_this, data);
            };

            if (window.addEventListener) {
                window.addEventListener('message', onMessage, false);
            } else if (window.attachEvent) {
                window.attachEvent('onmessage', onMessage);
            }

            if (_this.element.nodeName !== 'IFRAME') {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);

                getOEmbedData(url, params).then(function (data) {
                    var iframe = createEmbed(data, element);
                    _this.element = iframe;

                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);

                    return data;
                }).catch(function (error) {
                    return reject(error);
                });
            }
        });

        // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this);

        // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === 'IFRAME') {
            postMessage(this, 'ping');
        }

        return this;
    }

    /**
     * Get a promise for a method.
     *
     * @author Brad Dougherty <brad@vimeo.com>
     * @param {string} name The API method to call.
     * @param {Object} [args={}] Arguments to send via postMessage.
     * @return {Promise}
     */


    _createClass(Player, [{
        key: 'callMethod',
        value: function callMethod(name) {
            var _this2 = this;

            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new npo_src(function (resolve, reject) {
                // We are storing the resolve/reject handlers to call later, so we
                // can’t return here.
                // eslint-disable-next-line promise/always-return
                return _this2.ready().then(function () {
                    storeCallback(_this2, name, {
                        resolve: resolve,
                        reject: reject
                    });

                    postMessage(_this2, name, args);
                });
            });
        }

        /**
         * Get a promise for the value of a player property.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} name The property name
         * @return {Promise}
         */

    }, {
        key: 'get',
        value: function get(name) {
            var _this3 = this;

            return new npo_src(function (resolve, reject) {
                name = getMethodName(name, 'get');

                // We are storing the resolve/reject handlers to call later, so we
                // can’t return here.
                // eslint-disable-next-line promise/always-return
                return _this3.ready().then(function () {
                    storeCallback(_this3, name, {
                        resolve: resolve,
                        reject: reject
                    });

                    postMessage(_this3, name);
                });
            });
        }

        /**
         * Get a promise for setting the value of a player property.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} name The API method to call.
         * @param {mixed} value The value to set.
         * @return {Promise}
         */

    }, {
        key: 'set',
        value: function set(name, value) {
            var _this4 = this;

            return npo_src.resolve(value).then(function (val) {
                name = getMethodName(name, 'set');

                if (val === undefined || val === null) {
                    throw new TypeError('There must be a value to set.');
                }

                return _this4.ready().then(function () {
                    return new npo_src(function (resolve, reject) {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });

                        postMessage(_this4, name, val);
                    });
                });
            });
        }

        /**
         * Add an event listener for the specified event. Will call the
         * callback with a single parameter, `data`, that contains the data for
         * that event.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} eventName The name of the event.
         * @param {function(*)} callback The function to call when the event fires.
         * @return {void}
         */

    }, {
        key: 'on',
        value: function on(eventName, callback) {
            if (!eventName) {
                throw new TypeError('You must pass an event name.');
            }

            if (!callback) {
                throw new TypeError('You must pass a callback function.');
            }

            if (typeof callback !== 'function') {
                throw new TypeError('The callback must be a function.');
            }

            var callbacks = getCallbacks(this, 'event:' + eventName);
            if (callbacks.length === 0) {
                this.callMethod('addEventListener', eventName).catch(function () {
                    // Ignore the error. There will be an error event fired that
                    // will trigger the error callback if they are listening.
                });
            }

            storeCallback(this, 'event:' + eventName, callback);
        }

        /**
         * Remove an event listener for the specified event. Will remove all
         * listeners for that event if a `callback` isn’t passed, or only that
         * specific callback if it is passed.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} eventName The name of the event.
         * @param {function} [callback] The specific callback to remove.
         * @return {void}
         */

    }, {
        key: 'off',
        value: function off(eventName, callback) {
            if (!eventName) {
                throw new TypeError('You must pass an event name.');
            }

            if (callback && typeof callback !== 'function') {
                throw new TypeError('The callback must be a function.');
            }

            var lastCallback = removeCallback(this, 'event:' + eventName, callback);

            // If there are no callbacks left, remove the listener
            if (lastCallback) {
                this.callMethod('removeEventListener', eventName).catch(function (e) {
                    // Ignore the error. There will be an error event fired that
                    // will trigger the error callback if they are listening.
                });
            }
        }

        /**
         * A promise to load a new video.
         *
         * @promise LoadVideoPromise
         * @fulfill {number} The video with this id successfully loaded.
         * @reject {TypeError} The id was not a number.
         */
        /**
         * Load a new video into this embed. The promise will be resolved if
         * the video is successfully loaded, or it will be rejected if it could
         * not be loaded.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {number} id The id of the video.
         * @return {LoadVideoPromise}
         */

    }, {
        key: 'loadVideo',
        value: function loadVideo(id) {
            return this.callMethod('loadVideo', id);
        }

        /**
         * A promise to perform an action when the Player is ready.
         *
         * @todo document errors
         * @promise LoadVideoPromise
         * @fulfill {void}
         */
        /**
         * Trigger a function when the player iframe has initialized. You do not
         * need to wait for `ready` to trigger to begin adding event listeners
         * or calling other methods.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {ReadyPromise}
         */

    }, {
        key: 'ready',
        value: function ready() {
            var readyPromise = readyMap.get(this);
            return npo_src.resolve(readyPromise);
        }

        /**
         * A promise to add a cue point to the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point to use for removeCuePoint.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Add a cue point to the player.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {number} time The time for the cue point.
         * @param {object} [data] Arbitrary data to be returned with the cue point.
         * @return {AddCuePointPromise}
         */

    }, {
        key: 'addCuePoint',
        value: function addCuePoint(time) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.callMethod('addCuePoint', { time: time, data: data });
        }

        /**
         * A promise to remove a cue point from the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point that was removed.
         * @reject {InvalidCuePoint} The cue point with the specified id was not
         *         found.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Remove a cue point from the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} id The id of the cue point to remove.
         * @return {RemoveCuePointPromise}
         */

    }, {
        key: 'removeCuePoint',
        value: function removeCuePoint(id) {
            return this.callMethod('removeCuePoint', id);
        }

        /**
         * A representation of a text track on a video.
         *
         * @typedef {Object} VimeoTextTrack
         * @property {string} language The ISO language code.
         * @property {string} kind The kind of track it is (captions or subtitles).
         * @property {string} label The human‐readable label for the track.
         */
        /**
         * A promise to enable a text track.
         *
         * @promise EnableTextTrackPromise
         * @fulfill {VimeoTextTrack} The text track that was enabled.
         * @reject {InvalidTrackLanguageError} No track was available with the
         *         specified language.
         * @reject {InvalidTrackError} No track was available with the specified
         *         language and kind.
         */
        /**
         * Enable the text track with the specified language, and optionally the
         * specified kind (captions or subtitles).
         *
         * When set via the API, the track language will not change the viewer’s
         * stored preference.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} language The two‐letter language code.
         * @param {string} [kind] The kind of track to enable (captions or subtitles).
         * @return {EnableTextTrackPromise}
         */

    }, {
        key: 'enableTextTrack',
        value: function enableTextTrack(language, kind) {
            if (!language) {
                throw new TypeError('You must pass a language.');
            }

            return this.callMethod('enableTextTrack', {
                language: language,
                kind: kind
            });
        }

        /**
         * A promise to disable the active text track.
         *
         * @promise DisableTextTrackPromise
         * @fulfill {void} The track was disabled.
         */
        /**
         * Disable the currently-active text track.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {DisableTextTrackPromise}
         */

    }, {
        key: 'disableTextTrack',
        value: function disableTextTrack() {
            return this.callMethod('disableTextTrack');
        }

        /**
         * A promise to pause the video.
         *
         * @promise PausePromise
         * @fulfill {void} The video was paused.
         */
        /**
         * Pause the video if it’s playing.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {PausePromise}
         */

    }, {
        key: 'pause',
        value: function pause() {
            return this.callMethod('pause');
        }

        /**
         * A promise to play the video.
         *
         * @promise PlayPromise
         * @fulfill {void} The video was played.
         */
        /**
         * Play the video if it’s paused. **Note:** on iOS and some other
         * mobile devices, you cannot programmatically trigger play. Once the
         * viewer has tapped on the play button in the player, however, you
         * will be able to use this function.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {PlayPromise}
         */

    }, {
        key: 'play',
        value: function play() {
            return this.callMethod('play');
        }

        /**
         * A promise to unload the video.
         *
         * @promise UnloadPromise
         * @fulfill {void} The video was unloaded.
         */
        /**
         * Return the player to its initial state.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {UnloadPromise}
         */

    }, {
        key: 'unload',
        value: function unload() {
            return this.callMethod('unload');
        }

        /**
         * A promise to get the autopause behavior of the video.
         *
         * @promise GetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */
        /**
         * Get the autopause behavior for this player.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetAutopausePromise}
         */

    }, {
        key: 'getAutopause',
        value: function getAutopause() {
            return this.get('autopause');
        }

        /**
         * A promise to set the autopause behavior of the video.
         *
         * @promise SetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */
        /**
         * Enable or disable the autopause behavior of this player.
         *
         * By default, when another video is played in the same browser, this
         * player will automatically pause. Unless you have a specific reason
         * for doing so, we recommend that you leave autopause set to the
         * default (`true`).
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {boolean} autopause
         * @return {SetAutopausePromise}
         */

    }, {
        key: 'setAutopause',
        value: function setAutopause(autopause) {
            return this.set('autopause', autopause);
        }

        /**
         * A promise to get the color of the player.
         *
         * @promise GetColorPromise
         * @fulfill {string} The hex color of the player.
         */
        /**
         * Get the color for this player.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetColorPromise}
         */

    }, {
        key: 'getColor',
        value: function getColor() {
            return this.get('color');
        }

        /**
         * A promise to set the color of the player.
         *
         * @promise SetColorPromise
         * @fulfill {string} The color was successfully set.
         * @reject {TypeError} The string was not a valid hex or rgb color.
         * @reject {ContrastError} The color was set, but the contrast is
         *         outside of the acceptable range.
         * @reject {EmbedSettingsError} The owner of the player has chosen to
         *         use a specific color.
         */
        /**
         * Set the color of this player to a hex or rgb string. Setting the
         * color may fail if the owner of the video has set their embed
         * preferences to force a specific color.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {string} color The hex or rgb color string to set.
         * @return {SetColorPromise}
         */

    }, {
        key: 'setColor',
        value: function setColor(color) {
            return this.set('color', color);
        }

        /**
         * A representation of a cue point.
         *
         * @typedef {Object} VimeoCuePoint
         * @property {number} time The time of the cue point.
         * @property {object} data The data passed when adding the cue point.
         * @property {string} id The unique id for use with removeCuePoint.
         */
        /**
         * A promise to get the cue points of a video.
         *
         * @promise GetCuePointsPromise
         * @fulfill {VimeoCuePoint[]} The cue points added to the video.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Get an array of the cue points added to the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetCuePointsPromise}
         */

    }, {
        key: 'getCuePoints',
        value: function getCuePoints() {
            return this.get('cuePoints');
        }

        /**
         * A promise to get the current time of the video.
         *
         * @promise GetCurrentTimePromise
         * @fulfill {number} The current time in seconds.
         */
        /**
         * Get the current playback position in seconds.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetCurrentTimePromise}
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            return this.get('currentTime');
        }

        /**
         * A promise to set the current time of the video.
         *
         * @promise SetCurrentTimePromise
         * @fulfill {number} The actual current time that was set.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         */
        /**
         * Set the current playback position in seconds. If the player was
         * paused, it will remain paused. Likewise, if the player was playing,
         * it will resume playing once the video has buffered.
         *
         * You can provide an accurate time and the player will attempt to seek
         * to as close to that time as possible. The exact time will be the
         * fulfilled value of the promise.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {number} currentTime
         * @return {SetCurrentTimePromise}
         */

    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(currentTime) {
            return this.set('currentTime', currentTime);
        }

        /**
         * A promise to get the duration of the video.
         *
         * @promise GetDurationPromise
         * @fulfill {number} The duration in seconds.
         */
        /**
         * Get the duration of the video in seconds. It will be rounded to the
         * nearest second before playback begins, and to the nearest thousandth
         * of a second after playback begins.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetDurationPromise}
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            return this.get('duration');
        }

        /**
         * A promise to get the ended state of the video.
         *
         * @promise GetEndedPromise
         * @fulfill {boolean} Whether or not the video has ended.
         */
        /**
         * Get the ended state of the video. The video has ended if
         * `currentTime === duration`.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetEndedPromise}
         */

    }, {
        key: 'getEnded',
        value: function getEnded() {
            return this.get('ended');
        }

        /**
         * A promise to get the loop state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the player is set to loop.
         */
        /**
         * Get the loop state of the player.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetLoopPromise}
         */

    }, {
        key: 'getLoop',
        value: function getLoop() {
            return this.get('loop');
        }

        /**
         * A promise to set the loop state of the player.
         *
         * @promise SetLoopPromise
         * @fulfill {boolean} The loop state that was set.
         */
        /**
         * Set the loop state of the player. When set to `true`, the player
         * will start over immediately once playback ends.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {boolean} loop
         * @return {SetLoopPromise}
         */

    }, {
        key: 'setLoop',
        value: function setLoop(loop) {
            return this.set('loop', loop);
        }

        /**
         * A promise to get the paused state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the video is paused.
         */
        /**
         * Get the paused state of the player.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetLoopPromise}
         */

    }, {
        key: 'getPaused',
        value: function getPaused() {
            return this.get('paused');
        }

        /**
         * A promise to get the text tracks of a video.
         *
         * @promise GetTextTracksPromise
         * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
         */
        /**
         * Get an array of the text tracks that exist for the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetTextTracksPromise}
         */

    }, {
        key: 'getTextTracks',
        value: function getTextTracks() {
            return this.get('textTracks');
        }

        /**
         * A promise to get the embed code for the video.
         *
         * @promise GetVideoEmbedCodePromise
         * @fulfill {string} The `<iframe>` embed code for the video.
         */
        /**
         * Get the `<iframe>` embed code for the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoEmbedCodePromise}
         */

    }, {
        key: 'getVideoEmbedCode',
        value: function getVideoEmbedCode() {
            return this.get('videoEmbedCode');
        }

        /**
         * A promise to get the id of the video.
         *
         * @promise GetVideoIdPromise
         * @fulfill {number} The id of the video.
         */
        /**
         * Get the id of the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoIdPromise}
         */

    }, {
        key: 'getVideoId',
        value: function getVideoId() {
            return this.get('videoId');
        }

        /**
         * A promise to get the title of the video.
         *
         * @promise GetVideoTitlePromise
         * @fulfill {number} The title of the video.
         */
        /**
         * Get the title of the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoTitlePromise}
         */

    }, {
        key: 'getVideoTitle',
        value: function getVideoTitle() {
            return this.get('videoTitle');
        }

        /**
         * A promise to get the native width of the video.
         *
         * @promise GetVideoWidthPromise
         * @fulfill {number} The native width of the video.
         */
        /**
         * Get the native width of the currently‐playing video. The width of
         * the highest‐resolution available will be used before playback begins.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoWidthPromise}
         */

    }, {
        key: 'getVideoWidth',
        value: function getVideoWidth() {
            return this.get('videoWidth');
        }

        /**
         * A promise to get the native height of the video.
         *
         * @promise GetVideoHeightPromise
         * @fulfill {number} The native height of the video.
         */
        /**
         * Get the native height of the currently‐playing video. The height of
         * the highest‐resolution available will be used before playback begins.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoHeightPromise}
         */

    }, {
        key: 'getVideoHeight',
        value: function getVideoHeight() {
            return this.get('videoHeight');
        }

        /**
         * A promise to get the vimeo.com url for the video.
         *
         * @promise GetVideoUrlPromise
         * @fulfill {number} The vimeo.com url for the video.
         * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
         */
        /**
         * Get the vimeo.com url for the video.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVideoUrlPromise}
         */

    }, {
        key: 'getVideoUrl',
        value: function getVideoUrl() {
            return this.get('videoUrl');
        }

        /**
         * A promise to get the volume level of the player.
         *
         * @promise GetVolumePromise
         * @fulfill {number} The volume level of the player on a scale from 0 to 1.
         */
        /**
         * Get the current volume level of the player on a scale from `0` to `1`.
         *
         * Most mobile devices do not support an independent volume from the
         * system volume. In those cases, this method will always return `1`.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @return {GetVolumePromise}
         */

    }, {
        key: 'getVolume',
        value: function getVolume() {
            return this.get('volume');
        }

        /**
         * A promise to set the volume level of the player.
         *
         * @promise SetVolumePromise
         * @fulfill {number} The volume was set.
         * @reject {RangeError} The volume was less than 0 or greater than 1.
         */
        /**
         * Set the volume of the player on a scale from `0` to `1`. When set
         * via the API, the volume level will not be synchronized to other
         * players or stored as the viewer’s preference.
         *
         * Most mobile devices do not support setting the volume. An error will
         * *not* be triggered in that situation.
         *
         * @author Brad Dougherty <brad@vimeo.com>
         * @param {number} volume
         * @return {SetVolumePromise}
         */

    }, {
        key: 'setVolume',
        value: function setVolume(volume) {
            return this.set('volume', volume);
        }
    }]);

    return Player;
}();

initializeEmbeds();
resizeEmbeds();

return Player;

})));

//# sourceMappingURL=player.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85), __webpack_require__(804).setImmediate))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLy0tVmltZW9QbGF5ZXItNTAzNjQ1MzgtOWE0Yi00NDE2LWFlMjUtODU2YTBkZTNmNWQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9ja0VsZW1lbnQvVmltZW9QbGF5ZXIvaW5kZXguanM/NDA1YjI1NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZpbWVvL3BsYXllci9kaXN0L3BsYXllci5qcz80MDViMjU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKlxuKiBWaW1lb1BsYXllclxuKlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJ2xvZGFzaCdcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmBcblxuY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAjNDFhZGRkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAmOmhvdmVyIHtcbiAgICAgY29sb3I6ICM2Y2MwZTU7XG4gICB9XG5gXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYFxuXG5jb25zdCBJY29uID0gc3R5bGVkLmltZ2BcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG5gXG5cbmZ1bmN0aW9uIHZpbWVvR2V0SUQgKHVybCkge1xuICAvKiBnbG9iYWwgVVJMICovXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IG5ldyBVUkwodXJsKVxuICByZXR1cm4gcGF0aG5hbWUuc3Vic3RyKDEpXG59XG5cbmZ1bmN0aW9uIHBsYXlWaWRlbyAoaWZyYW1lKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKVxuICBwbGF5ZXIuc2V0Vm9sdW1lKDApXG4gIHBsYXllci5wbGF5KClcbn1cblxuZnVuY3Rpb24gcGF1c2VWaWRlbyAoaWZyYW1lKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKVxuICBwbGF5ZXIucGF1c2UoKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayAoZXZlbnQsIHVybCwgaWZyYW1lKSB7XG4gIGlmIChldmVudC5zaGlmdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKVxuICB9IGVsc2UgaWYgKGlmcmFtZSkge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKVxuICAgIHBsYXllci5wbGF5KClcbiAgfVxufVxuXG5jbGFzcyBWaW1lb1BsYXllciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdXJsLCBuYW1lLCBkZXNjcmlwdGlvbiwgdHlwZSwgb25QcmV2aWV3IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYm5haWwnXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4geyB0aGlzLmlmcmFtZSAmJiBwbGF5VmlkZW8odGhpcy5pZnJhbWUpIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyB0aGlzLmlmcmFtZSAmJiBwYXVzZVZpZGVvKHRoaXMuaWZyYW1lKSB9fVxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYm5haWwtaW1hZ2UnID5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aW1lb0dldElEKHVybCl9YH1cbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPScwJ1xuICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7IHRoaXMuaWZyYW1lID0gZWwgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FwdGlvbic+XG4gICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT0nY2FwdGlvbi10aXRsZSc+XG4gICAgICAgICAgICA8QW5jaG9yIG9uQ2xpY2s9eyhldnQpID0+IHsgb25QcmV2aWV3KCkgJiYgaGFuZGxlQ2xpY2soZXZ0LCB1cmwsIHRoaXMuaWZyYW1lKSB9fT5cbiAgICAgICAgICAgICAge25hbWUgJiYgPHNwYW4+e25hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgIDwvQW5jaG9yPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxEZXNjcmlwdGlvbj57dHJ1bmNhdGUoZGVzY3JpcHRpb24sIHsgbGVuZ3RoOiAxMDAsIHNlcGFyYXRvcjogLyw/ICsvIH0pfTwvRGVzY3JpcHRpb24+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbC11c2VyIHBhbmVsLWNyZWRpdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtdXNlci1pbWcnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NyZWRpdC11c2VyJz5cbiAgICAgICAgICAgICAgICA8SWNvbiBzcmM9Jy9zdGF0aWMvaW1hZ2VzL3ZpbWVvLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BhbmVsLXVzZXItY250Jz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZnVsbC1uYW1lJz57dHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuVmltZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaW1lb1BsYXllclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9CbG9ja0VsZW1lbnQvVmltZW9QbGF5ZXIvaW5kZXguanMiLCIvKiEgQHZpbWVvL3BsYXllciB2Mi4xLjAgfCAoYykgMjAxNyBWaW1lbyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3ZpbWVvL3BsYXllci5qcyAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlZpbWVvID0gZ2xvYmFsLlZpbWVvIHx8IHt9LCBnbG9iYWwuVmltZW8uUGxheWVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJyYXlJbmRleE9mU3VwcG9ydCA9IHR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgcG9zdE1lc3NhZ2VTdXBwb3J0ID0gdHlwZW9mIHdpbmRvdy5wb3N0TWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCc7XG5cbmlmICghYXJyYXlJbmRleE9mU3VwcG9ydCB8fCAhcG9zdE1lc3NhZ2VTdXBwb3J0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTb3JyeSwgdGhlIFZpbWVvIFBsYXllciBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIuJyk7XG59XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBpbmRleCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAoZXhwb3J0cykge1xuICAndXNlIHN0cmljdCc7XG4gIC8vc2hhcmVkIHBvaW50ZXJcblxuICB2YXIgaTtcbiAgLy9zaG9ydGN1dHNcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgaXMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgfHwgYSAhPT0gYSAmJiBiICE9PSBiO1xuICB9O1xuXG4gIC8vUG9seWZpbGwgZ2xvYmFsIG9iamVjdHNcbiAgaWYgKHR5cGVvZiBXZWFrTWFwID09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwb3J0cy5XZWFrTWFwID0gY3JlYXRlQ29sbGVjdGlvbih7XG4gICAgICAvLyBXZWFrTWFwI2RlbGV0ZShrZXk6dm9pZCopOmJvb2xlYW5cbiAgICAgICdkZWxldGUnOiBzaGFyZWREZWxldGUsXG4gICAgICAvLyBXZWFrTWFwI2NsZWFyKCk6XG4gICAgICBjbGVhcjogc2hhcmVkQ2xlYXIsXG4gICAgICAvLyBXZWFrTWFwI2dldChrZXk6dm9pZCopOnZvaWQqXG4gICAgICBnZXQ6IHNoYXJlZEdldCxcbiAgICAgIC8vIFdlYWtNYXAjaGFzKGtleTp2b2lkKik6Ym9vbGVhblxuICAgICAgaGFzOiBtYXBIYXMsXG4gICAgICAvLyBXZWFrTWFwI3NldChrZXk6dm9pZCosIHZhbHVlOnZvaWQqKTp2b2lkXG4gICAgICBzZXQ6IHNoYXJlZFNldFxuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBNYXAgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5ldyBNYXAoKS52YWx1ZXMgIT09ICdmdW5jdGlvbicgfHwgIW5ldyBNYXAoKS52YWx1ZXMoKS5uZXh0KSB7XG4gICAgZXhwb3J0cy5NYXAgPSBjcmVhdGVDb2xsZWN0aW9uKHtcbiAgICAgIC8vIFdlYWtNYXAjZGVsZXRlKGtleTp2b2lkKik6Ym9vbGVhblxuICAgICAgJ2RlbGV0ZSc6IHNoYXJlZERlbGV0ZSxcbiAgICAgIC8vOndhcyBNYXAjZ2V0KGtleTp2b2lkKlssIGQzZmF1bHQ6dm9pZCpdKTp2b2lkKlxuICAgICAgLy8gTWFwI2hhcyhrZXk6dm9pZCopOmJvb2xlYW5cbiAgICAgIGhhczogbWFwSGFzLFxuICAgICAgLy8gTWFwI2dldChrZXk6dm9pZCopOmJvb2xlYW5cbiAgICAgIGdldDogc2hhcmVkR2V0LFxuICAgICAgLy8gTWFwI3NldChrZXk6dm9pZCosIHZhbHVlOnZvaWQqKTp2b2lkXG4gICAgICBzZXQ6IHNoYXJlZFNldCxcbiAgICAgIC8vIE1hcCNrZXlzKHZvaWQpOkl0ZXJhdG9yXG4gICAgICBrZXlzOiBzaGFyZWRLZXlzLFxuICAgICAgLy8gTWFwI3ZhbHVlcyh2b2lkKTpJdGVyYXRvclxuICAgICAgdmFsdWVzOiBzaGFyZWRWYWx1ZXMsXG4gICAgICAvLyBNYXAjZW50cmllcyh2b2lkKTpJdGVyYXRvclxuICAgICAgZW50cmllczogbWFwRW50cmllcyxcbiAgICAgIC8vIE1hcCNmb3JFYWNoKGNhbGxiYWNrOkZ1bmN0aW9uLCBjb250ZXh0OnZvaWQqKTp2b2lkID09PiBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGtleSwgdmFsdWUsIG1hcE9iamVjdCkgPT09IG5vdCBpbiBzcGVjc2BcbiAgICAgIGZvckVhY2g6IHNoYXJlZEZvckVhY2gsXG4gICAgICAvLyBNYXAjY2xlYXIoKTpcbiAgICAgIGNsZWFyOiBzaGFyZWRDbGVhclxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBTZXQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5ldyBTZXQoKS52YWx1ZXMgIT09ICdmdW5jdGlvbicgfHwgIW5ldyBTZXQoKS52YWx1ZXMoKS5uZXh0KSB7XG4gICAgZXhwb3J0cy5TZXQgPSBjcmVhdGVDb2xsZWN0aW9uKHtcbiAgICAgIC8vIFNldCNoYXModmFsdWU6dm9pZCopOmJvb2xlYW5cbiAgICAgIGhhczogc2V0SGFzLFxuICAgICAgLy8gU2V0I2FkZCh2YWx1ZTp2b2lkKik6Ym9vbGVhblxuICAgICAgYWRkOiBzaGFyZWRBZGQsXG4gICAgICAvLyBTZXQjZGVsZXRlKGtleTp2b2lkKik6Ym9vbGVhblxuICAgICAgJ2RlbGV0ZSc6IHNoYXJlZERlbGV0ZSxcbiAgICAgIC8vIFNldCNjbGVhcigpOlxuICAgICAgY2xlYXI6IHNoYXJlZENsZWFyLFxuICAgICAgLy8gU2V0I2tleXModm9pZCk6SXRlcmF0b3JcbiAgICAgIGtleXM6IHNoYXJlZFZhbHVlcywgLy8gc3BlY3MgYWN0dWFsbHkgc2F5IFwidGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSB2YWx1ZXMgcHJvcGVydHlcIlxuICAgICAgLy8gU2V0I3ZhbHVlcyh2b2lkKTpJdGVyYXRvclxuICAgICAgdmFsdWVzOiBzaGFyZWRWYWx1ZXMsXG4gICAgICAvLyBTZXQjZW50cmllcyh2b2lkKTpJdGVyYXRvclxuICAgICAgZW50cmllczogc2V0RW50cmllcyxcbiAgICAgIC8vIFNldCNmb3JFYWNoKGNhbGxiYWNrOkZ1bmN0aW9uLCBjb250ZXh0OnZvaWQqKTp2b2lkID09PiBjYWxsYmFjay5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCkgPT09IG5vdCBpbiBzcGVjc1xuICAgICAgZm9yRWFjaDogc2hhcmVkRm9yRWFjaFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBXZWFrU2V0ID09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwb3J0cy5XZWFrU2V0ID0gY3JlYXRlQ29sbGVjdGlvbih7XG4gICAgICAvLyBXZWFrU2V0I2RlbGV0ZShrZXk6dm9pZCopOmJvb2xlYW5cbiAgICAgICdkZWxldGUnOiBzaGFyZWREZWxldGUsXG4gICAgICAvLyBXZWFrU2V0I2FkZCh2YWx1ZTp2b2lkKik6Ym9vbGVhblxuICAgICAgYWRkOiBzaGFyZWRBZGQsXG4gICAgICAvLyBXZWFrU2V0I2NsZWFyKCk6XG4gICAgICBjbGVhcjogc2hhcmVkQ2xlYXIsXG4gICAgICAvLyBXZWFrU2V0I2hhcyh2YWx1ZTp2b2lkKik6Ym9vbGVhblxuICAgICAgaGFzOiBzZXRIYXNcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFUzYgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBjb2xsZWN0aW9uIGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKHByb3RvLCBvYmplY3RPbmx5KSB7XG4gICAgZnVuY3Rpb24gQ29sbGVjdGlvbihhKSB7XG4gICAgICBpZiAoIXRoaXMgfHwgdGhpcy5jb25zdHJ1Y3RvciAhPT0gQ29sbGVjdGlvbikgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKGEpO1xuICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgICB0aGlzLl9pdHAgPSBbXTsgLy8gaXRlcmF0aW9uIHBvaW50ZXJzXG4gICAgICB0aGlzLm9iamVjdE9ubHkgPSBvYmplY3RPbmx5O1xuXG4gICAgICAvL3BhcnNlIGluaXRpYWwgaXRlcmFibGUgYXJndW1lbnQgcGFzc2VkXG4gICAgICBpZiAoYSkgaW5pdC5jYWxsKHRoaXMsIGEpO1xuICAgIH1cblxuICAgIC8vZGVmaW5lIHNpemUgZm9yIG5vbiBvYmplY3Qtb25seSBjb2xsZWN0aW9uc1xuICAgIGlmICghb2JqZWN0T25seSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkocHJvdG8sICdzaXplJywge1xuICAgICAgICBnZXQ6IHNoYXJlZFNpemVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vc2V0IHByb3RvdHlwZVxuICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQ29sbGVjdGlvbjtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZSA9IHByb3RvO1xuXG4gICAgcmV0dXJuIENvbGxlY3Rpb247XG4gIH1cblxuICAvKiogcGFyc2UgaW5pdGlhbCBpdGVyYWJsZSBhcmd1bWVudCBwYXNzZWQgKi9cbiAgZnVuY3Rpb24gaW5pdChhKSB7XG4gICAgdmFyIGk7XG4gICAgLy9pbml0IFNldCBhcmd1bWVudCwgbGlrZSBgWzEsMiwzLHt9XWBcbiAgICBpZiAodGhpcy5hZGQpIGEuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7XG4gICAgLy9pbml0IE1hcCBhcmd1bWVudCBsaWtlIGBbWzEsMl0sIFt7fSwgNF1dYFxuICAgIGVsc2UgYS5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHRoaXMuc2V0KGFbMF0sIGFbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gIH1cblxuICAvKiogZGVsZXRlICovXG4gIGZ1bmN0aW9uIHNoYXJlZERlbGV0ZShrZXkpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl92YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgLy8gdXBkYXRlIGl0ZXJhdGlvbiBwb2ludGVyc1xuICAgICAgdGhpcy5faXRwLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgaWYgKGkgPCBwWzBdKSBwWzBdLS07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQXVyb3JhIGhlcmUgZG9lcyBpdCB3aGlsZSBDYW5hcnkgZG9lc24ndFxuICAgIHJldHVybiAtMSA8IGk7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRHZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKGtleSkgPyB0aGlzLl92YWx1ZXNbaV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYXMobGlzdCwga2V5KSB7XG4gICAgaWYgKHRoaXMub2JqZWN0T25seSAmJiBrZXkgIT09IE9iamVjdChrZXkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB2YWx1ZSB1c2VkIGFzIHdlYWsgY29sbGVjdGlvbiBrZXlcIik7XG4gICAgLy9OYU4gb3IgMCBwYXNzZWRcbiAgICBpZiAoa2V5ICE9IGtleSB8fCBrZXkgPT09IDApIGZvciAoaSA9IGxpc3QubGVuZ3RoOyBpLS0gJiYgIWlzKGxpc3RbaV0sIGtleSk7KSB7fSBlbHNlIGkgPSBsaXN0LmluZGV4T2Yoa2V5KTtcbiAgICByZXR1cm4gLTEgPCBpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGFzKHZhbHVlKSB7XG4gICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMsIHRoaXMuX3ZhbHVlcywgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwSGFzKHZhbHVlKSB7XG4gICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMsIHRoaXMuX2tleXMsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAY2hhaW5hYmxlICovXG4gIGZ1bmN0aW9uIHNoYXJlZFNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3ZhbHVlc1tpXSA9IHZhbHVlIDogdGhpcy5fdmFsdWVzW3RoaXMuX2tleXMucHVzaChrZXkpIC0gMV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAY2hhaW5hYmxlICovXG4gIGZ1bmN0aW9uIHNoYXJlZEFkZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB0aGlzLl92YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRDbGVhcigpIHtcbiAgICAodGhpcy5fa2V5cyB8fCAwKS5sZW5ndGggPSB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIC8qKiBrZXlzLCB2YWx1ZXMsIGFuZCBpdGVyYXRlIHJlbGF0ZWQgbWV0aG9kcyAqL1xuICBmdW5jdGlvbiBzaGFyZWRLZXlzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hhcmVkVmFsdWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXBFbnRyaWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcywgdGhpcy5fdmFsdWVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoYXJlZEl0ZXJhdG9yKGl0cCwgYXJyYXksIGFycmF5Mikge1xuICAgIHZhciBwID0gWzBdLFxuICAgICAgICBkb25lID0gZmFsc2U7XG4gICAgaXRwLnB1c2gocCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciB2LFxuICAgICAgICAgICAgayA9IHBbMF07XG4gICAgICAgIGlmICghZG9uZSAmJiBrIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgdiA9IGFycmF5MiA/IFthcnJheVtrXSwgYXJyYXkyW2tdXSA6IGFycmF5W2tdO1xuICAgICAgICAgIHBbMF0rKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICBpdHAuc3BsaWNlKGl0cC5pbmRleE9mKHApLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBkb25lLCB2YWx1ZTogdiB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hhcmVkRm9yRWFjaChjYWxsYmFjaywgY29udGV4dCkge1xuICAgIHZhciBpdCA9IHRoaXMuZW50cmllcygpO1xuICAgIGZvciAoOzspIHtcbiAgICAgIHZhciByID0gaXQubmV4dCgpO1xuICAgICAgaWYgKHIuZG9uZSkgYnJlYWs7XG4gICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIHIudmFsdWVbMV0sIHIudmFsdWVbMF0sIHRoaXMpO1xuICAgIH1cbiAgfVxufSkoJ29iamVjdCcgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbW1vbmpzR2xvYmFsICE9ICd1bmRlZmluZWQnID8gY29tbW9uanNHbG9iYWwgOiB3aW5kb3cpO1xufSk7XG5cbnZhciBucG9fc3JjID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKiEgTmF0aXZlIFByb21pc2UgT25seVxuICAgIHYwLjguMSAoYykgS3lsZSBTaW1wc29uXG4gICAgTUlUIExpY2Vuc2U6IGh0dHA6Ly9nZXRpZnkubWl0LWxpY2Vuc2Uub3JnXG4qL1xuXG4oZnVuY3Rpb24gVU1EKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcblx0Ly8gc3BlY2lhbCBmb3JtIG9mIFVNRCBmb3IgcG9seWZpbGxpbmcgYWNyb3NzIGV2aXJvbm1lbnRzXG5cdGNvbnRleHRbbmFtZV0gPSBjb250ZXh0W25hbWVdIHx8IGRlZmluaXRpb24oKTtcblx0aWYgKCdvYmplY3QnICE9IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNvbnRleHRbbmFtZV07XG5cdH0gZWxzZSBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PSBcImZ1bmN0aW9uXCIgJiYgdW5kZWZpbmVkLmFtZCkge1xuXHRcdHVuZGVmaW5lZChmdW5jdGlvbiAkQU1EJCgpIHtcblx0XHRcdHJldHVybiBjb250ZXh0W25hbWVdO1xuXHRcdH0pO1xuXHR9XG59KShcIlByb21pc2VcIiwgdHlwZW9mIGNvbW1vbmpzR2xvYmFsICE9IFwidW5kZWZpbmVkXCIgPyBjb21tb25qc0dsb2JhbCA6IGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiBERUYoKSB7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBidWlsdEluUHJvcCxcblx0ICAgIGN5Y2xlLFxuXHQgICAgc2NoZWR1bGluZ19xdWV1ZSxcblx0ICAgIFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0ICAgIHRpbWVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSAhPSBcInVuZGVmaW5lZFwiID8gZnVuY3Rpb24gdGltZXIoZm4pIHtcblx0XHRyZXR1cm4gc2V0SW1tZWRpYXRlKGZuKTtcblx0fSA6IHNldFRpbWVvdXQ7XG5cblx0Ly8gZGFtbWl0LCBJRTguXG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInhcIiwge30pO1xuXHRcdGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLCBuYW1lLCB2YWwsIGNvbmZpZykge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcblx0XHRcdFx0dmFsdWU6IHZhbCxcblx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogY29uZmlnICE9PSBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0YnVpbHRJblByb3AgPSBmdW5jdGlvbiBidWlsdEluUHJvcChvYmosIG5hbWUsIHZhbCkge1xuXHRcdFx0b2JqW25hbWVdID0gdmFsO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9O1xuXHR9XG5cblx0Ly8gTm90ZTogdXNpbmcgYSBxdWV1ZSBpbnN0ZWFkIG9mIGFycmF5IGZvciBlZmZpY2llbmN5XG5cdHNjaGVkdWxpbmdfcXVldWUgPSBmdW5jdGlvbiBRdWV1ZSgpIHtcblx0XHR2YXIgZmlyc3QsIGxhc3QsIGl0ZW07XG5cblx0XHRmdW5jdGlvbiBJdGVtKGZuLCBzZWxmKSB7XG5cdFx0XHR0aGlzLmZuID0gZm47XG5cdFx0XHR0aGlzLnNlbGYgPSBzZWxmO1xuXHRcdFx0dGhpcy5uZXh0ID0gdm9pZCAwO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhZGQ6IGZ1bmN0aW9uIGFkZChmbiwgc2VsZikge1xuXHRcdFx0XHRpdGVtID0gbmV3IEl0ZW0oZm4sIHNlbGYpO1xuXHRcdFx0XHRpZiAobGFzdCkge1xuXHRcdFx0XHRcdGxhc3QubmV4dCA9IGl0ZW07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zmlyc3QgPSBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxhc3QgPSBpdGVtO1xuXHRcdFx0XHRpdGVtID0gdm9pZCAwO1xuXHRcdFx0fSxcblx0XHRcdGRyYWluOiBmdW5jdGlvbiBkcmFpbigpIHtcblx0XHRcdFx0dmFyIGYgPSBmaXJzdDtcblx0XHRcdFx0Zmlyc3QgPSBsYXN0ID0gY3ljbGUgPSB2b2lkIDA7XG5cblx0XHRcdFx0d2hpbGUgKGYpIHtcblx0XHRcdFx0XHRmLmZuLmNhbGwoZi5zZWxmKTtcblx0XHRcdFx0XHRmID0gZi5uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSgpO1xuXG5cdGZ1bmN0aW9uIHNjaGVkdWxlKGZuLCBzZWxmKSB7XG5cdFx0c2NoZWR1bGluZ19xdWV1ZS5hZGQoZm4sIHNlbGYpO1xuXHRcdGlmICghY3ljbGUpIHtcblx0XHRcdGN5Y2xlID0gdGltZXIoc2NoZWR1bGluZ19xdWV1ZS5kcmFpbik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gcHJvbWlzZSBkdWNrIHR5cGluZ1xuXHRmdW5jdGlvbiBpc1RoZW5hYmxlKG8pIHtcblx0XHR2YXIgX3RoZW4sXG5cdFx0ICAgIG9fdHlwZSA9IHR5cGVvZiBvID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yobyk7XG5cblx0XHRpZiAobyAhPSBudWxsICYmIChvX3R5cGUgPT0gXCJvYmplY3RcIiB8fCBvX3R5cGUgPT0gXCJmdW5jdGlvblwiKSkge1xuXHRcdFx0X3RoZW4gPSBvLnRoZW47XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlb2YgX3RoZW4gPT0gXCJmdW5jdGlvblwiID8gX3RoZW4gOiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5vdGlmeSgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhaW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vdGlmeUlzb2xhdGVkKHRoaXMsIHRoaXMuc3RhdGUgPT09IDEgPyB0aGlzLmNoYWluW2ldLnN1Y2Nlc3MgOiB0aGlzLmNoYWluW2ldLmZhaWx1cmUsIHRoaXMuY2hhaW5baV0pO1xuXHRcdH1cblx0XHR0aGlzLmNoYWluLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvLyBOT1RFOiBUaGlzIGlzIGEgc2VwYXJhdGUgZnVuY3Rpb24gdG8gaXNvbGF0ZVxuXHQvLyB0aGUgYHRyeS4uY2F0Y2hgIHNvIHRoYXQgb3RoZXIgY29kZSBjYW4gYmVcblx0Ly8gb3B0aW1pemVkIGJldHRlclxuXHRmdW5jdGlvbiBub3RpZnlJc29sYXRlZChzZWxmLCBjYiwgY2hhaW4pIHtcblx0XHR2YXIgcmV0LCBfdGhlbjtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNiID09PSBmYWxzZSkge1xuXHRcdFx0XHRjaGFpbi5yZWplY3Qoc2VsZi5tc2cpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGNiID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0cmV0ID0gc2VsZi5tc2c7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0ID0gY2IuY2FsbCh2b2lkIDAsIHNlbGYubXNnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXQgPT09IGNoYWluLnByb21pc2UpIHtcblx0XHRcdFx0XHRjaGFpbi5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKHJldCkpIHtcblx0XHRcdFx0XHRfdGhlbi5jYWxsKHJldCwgY2hhaW4ucmVzb2x2ZSwgY2hhaW4ucmVqZWN0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGFpbi5yZXNvbHZlKHJldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNoYWluLnJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmUobXNnKSB7XG5cdFx0dmFyIF90aGVuLFxuXHRcdCAgICBzZWxmID0gdGhpcztcblxuXHRcdC8vIGFscmVhZHkgdHJpZ2dlcmVkP1xuXHRcdGlmIChzZWxmLnRyaWdnZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdC8vIHVud3JhcFxuXHRcdGlmIChzZWxmLmRlZikge1xuXHRcdFx0c2VsZiA9IHNlbGYuZGVmO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKG1zZykpIHtcblx0XHRcdFx0c2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBkZWZfd3JhcHBlciA9IG5ldyBNYWtlRGVmV3JhcHBlcihzZWxmKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0X3RoZW4uY2FsbChtc2csIGZ1bmN0aW9uICRyZXNvbHZlJCgpIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZS5hcHBseShkZWZfd3JhcHBlciwgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uICRyZWplY3QkKCkge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QuYXBwbHkoZGVmX3dyYXBwZXIsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdC5jYWxsKGRlZl93cmFwcGVyLCBlcnIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLm1zZyA9IG1zZztcblx0XHRcdFx0c2VsZi5zdGF0ZSA9IDE7XG5cdFx0XHRcdGlmIChzZWxmLmNoYWluLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzY2hlZHVsZShub3RpZnksIHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZWplY3QuY2FsbChuZXcgTWFrZURlZldyYXBwZXIoc2VsZiksIGVycik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVqZWN0KG1zZykge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIGFscmVhZHkgdHJpZ2dlcmVkP1xuXHRcdGlmIChzZWxmLnRyaWdnZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdC8vIHVud3JhcFxuXHRcdGlmIChzZWxmLmRlZikge1xuXHRcdFx0c2VsZiA9IHNlbGYuZGVmO1xuXHRcdH1cblxuXHRcdHNlbGYubXNnID0gbXNnO1xuXHRcdHNlbGYuc3RhdGUgPSAyO1xuXHRcdGlmIChzZWxmLmNoYWluLmxlbmd0aCA+IDApIHtcblx0XHRcdHNjaGVkdWxlKG5vdGlmeSwgc2VsZik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLCBhcnIsIHJlc29sdmVyLCByZWplY3Rlcikge1xuXHRcdGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGFyci5sZW5ndGg7IGlkeCsrKSB7XG5cdFx0XHQoZnVuY3Rpb24gSUlGRShpZHgpIHtcblx0XHRcdFx0Q29uc3RydWN0b3IucmVzb2x2ZShhcnJbaWR4XSkudGhlbihmdW5jdGlvbiAkcmVzb2x2ZXIkKG1zZykge1xuXHRcdFx0XHRcdHJlc29sdmVyKGlkeCwgbXNnKTtcblx0XHRcdFx0fSwgcmVqZWN0ZXIpO1xuXHRcdFx0fSkoaWR4KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBNYWtlRGVmV3JhcHBlcihzZWxmKSB7XG5cdFx0dGhpcy5kZWYgPSBzZWxmO1xuXHRcdHRoaXMudHJpZ2dlcmVkID0gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBNYWtlRGVmKHNlbGYpIHtcblx0XHR0aGlzLnByb21pc2UgPSBzZWxmO1xuXHRcdHRoaXMuc3RhdGUgPSAwO1xuXHRcdHRoaXMudHJpZ2dlcmVkID0gZmFsc2U7XG5cdFx0dGhpcy5jaGFpbiA9IFtdO1xuXHRcdHRoaXMubXNnID0gdm9pZCAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuXHRcdGlmICh0eXBlb2YgZXhlY3V0b3IgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fX05QT19fICE9PSAwKSB7XG5cdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBwcm9taXNlXCIpO1xuXHRcdH1cblxuXHRcdC8vIGluc3RhbmNlIHNoYWRvd2luZyB0aGUgaW5oZXJpdGVkIFwiYnJhbmRcIlxuXHRcdC8vIHRvIHNpZ25hbCBhbiBhbHJlYWR5IFwiaW5pdGlhbGl6ZWRcIiBwcm9taXNlXG5cdFx0dGhpcy5fX05QT19fID0gMTtcblxuXHRcdHZhciBkZWYgPSBuZXcgTWFrZURlZih0aGlzKTtcblxuXHRcdHRoaXNbXCJ0aGVuXCJdID0gZnVuY3Rpb24gdGhlbihzdWNjZXNzLCBmYWlsdXJlKSB7XG5cdFx0XHR2YXIgbyA9IHtcblx0XHRcdFx0c3VjY2VzczogdHlwZW9mIHN1Y2Nlc3MgPT0gXCJmdW5jdGlvblwiID8gc3VjY2VzcyA6IHRydWUsXG5cdFx0XHRcdGZhaWx1cmU6IHR5cGVvZiBmYWlsdXJlID09IFwiZnVuY3Rpb25cIiA/IGZhaWx1cmUgOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdC8vIE5vdGU6IGB0aGVuKC4uKWAgaXRzZWxmIGNhbiBiZSBib3Jyb3dlZCB0byBiZSB1c2VkIGFnYWluc3Rcblx0XHRcdC8vIGEgZGlmZmVyZW50IHByb21pc2UgY29uc3RydWN0b3IgZm9yIG1ha2luZyB0aGUgY2hhaW5lZCBwcm9taXNlLFxuXHRcdFx0Ly8gYnkgc3Vic3RpdHV0aW5nIGEgZGlmZmVyZW50IGB0aGlzYCBiaW5kaW5nLlxuXHRcdFx0by5wcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZnVuY3Rpb24gZXh0cmFjdENoYWluKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRvLnJlamVjdCA9IHJlamVjdDtcblx0XHRcdH0pO1xuXHRcdFx0ZGVmLmNoYWluLnB1c2gobyk7XG5cblx0XHRcdGlmIChkZWYuc3RhdGUgIT09IDApIHtcblx0XHRcdFx0c2NoZWR1bGUobm90aWZ5LCBkZWYpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gby5wcm9taXNlO1xuXHRcdH07XG5cdFx0dGhpc1tcImNhdGNoXCJdID0gZnVuY3Rpb24gJGNhdGNoJChmYWlsdXJlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgZmFpbHVyZSk7XG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRleGVjdXRvci5jYWxsKHZvaWQgMCwgZnVuY3Rpb24gcHVibGljUmVzb2x2ZShtc2cpIHtcblx0XHRcdFx0cmVzb2x2ZS5jYWxsKGRlZiwgbXNnKTtcblx0XHRcdH0sIGZ1bmN0aW9uIHB1YmxpY1JlamVjdChtc2cpIHtcblx0XHRcdFx0cmVqZWN0LmNhbGwoZGVmLCBtc2cpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZWplY3QuY2FsbChkZWYsIGVycik7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFByb21pc2VQcm90b3R5cGUgPSBidWlsdEluUHJvcCh7fSwgXCJjb25zdHJ1Y3RvclwiLCBQcm9taXNlLFxuXHQvKmNvbmZpZ3VyYWJsZT0qL2ZhbHNlKTtcblxuXHQvLyBOb3RlOiBBbmRyb2lkIDQgY2Fubm90IHVzZSBgT2JqZWN0LmRlZmluZVByb3BlcnR5KC4uKWAgaGVyZVxuXHRQcm9taXNlLnByb3RvdHlwZSA9IFByb21pc2VQcm90b3R5cGU7XG5cblx0Ly8gYnVpbHQtaW4gXCJicmFuZFwiIHRvIHNpZ25hbCBhbiBcInVuaW5pdGlhbGl6ZWRcIiBwcm9taXNlXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2VQcm90b3R5cGUsIFwiX19OUE9fX1wiLCAwLFxuXHQvKmNvbmZpZ3VyYWJsZT0qL2ZhbHNlKTtcblxuXHRidWlsdEluUHJvcChQcm9taXNlLCBcInJlc29sdmVcIiwgZnVuY3Rpb24gUHJvbWlzZSRyZXNvbHZlKG1zZykge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdC8vIG5vdGU6IGJlc3QgXCJpc1Byb21pc2VcIiBjaGVjayB0aGF0J3MgcHJhY3RpY2FsIGZvciBub3dcblx0XHRpZiAobXNnICYmICh0eXBlb2YgbXNnID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobXNnKSkgPT0gXCJvYmplY3RcIiAmJiBtc2cuX19OUE9fXyA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIG1zZztcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0aWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzb2x2ZShtc2cpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRidWlsdEluUHJvcChQcm9taXNlLCBcInJlamVjdFwiLCBmdW5jdGlvbiBQcm9taXNlJHJlamVjdChtc2cpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QobXNnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSwgXCJhbGxcIiwgZnVuY3Rpb24gUHJvbWlzZSRhbGwoYXJyKSB7XG5cdFx0dmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuXHRcdC8vIHNwZWMgbWFuZGF0ZWQgY2hlY2tzXG5cdFx0aWYgKFRvU3RyaW5nLmNhbGwoYXJyKSAhPSBcIltvYmplY3QgQXJyYXldXCIpIHtcblx0XHRcdHJldHVybiBDb25zdHJ1Y3Rvci5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTtcblx0XHR9XG5cdFx0aWYgKGFyci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBDb25zdHJ1Y3Rvci5yZXNvbHZlKFtdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0aWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbiA9IGFyci5sZW5ndGgsXG5cdFx0XHQgICAgbXNncyA9IEFycmF5KGxlbiksXG5cdFx0XHQgICAgY291bnQgPSAwO1xuXG5cdFx0XHRpdGVyYXRlUHJvbWlzZXMoQ29uc3RydWN0b3IsIGFyciwgZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LCBtc2cpIHtcblx0XHRcdFx0bXNnc1tpZHhdID0gbXNnO1xuXHRcdFx0XHRpZiAoKytjb3VudCA9PT0gbGVuKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShtc2dzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSwgXCJyYWNlXCIsIGZ1bmN0aW9uIFByb21pc2UkcmFjZShhcnIpIHtcblx0XHR2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG5cdFx0Ly8gc3BlYyBtYW5kYXRlZCBjaGVja3Ncblx0XHRpZiAoVG9TdHJpbmcuY2FsbChhcnIpICE9IFwiW29iamVjdCBBcnJheV1cIikge1xuXHRcdFx0cmV0dXJuIENvbnN0cnVjdG9yLnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVyYXRlUHJvbWlzZXMoQ29uc3RydWN0b3IsIGFyciwgZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LCBtc2cpIHtcblx0XHRcdFx0cmVzb2x2ZShtc2cpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2U7XG59KTtcbn0pO1xuXG4vKipcbiAqIEBtb2R1bGUgbGliL2NhbGxiYWNrc1xuICovXG5cbnZhciBjYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogU3RvcmUgYSBjYWxsYmFjayBmb3IgYSBtZXRob2Qgb3IgZXZlbnQgZm9yIGEgcGxheWVyLlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRob2Qgb3IgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7KGZ1bmN0aW9uKHRoaXM6UGxheWVyLCAqKTogdm9pZHx7cmVzb2x2ZTogZnVuY3Rpb24sIHJlamVjdDogZnVuY3Rpb259KX0gY2FsbGJhY2tcbiAqICAgICAgICBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvciBhbiBvYmplY3Qgd2l0aCByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGZvciBhIHByb21pc2UuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzdG9yZUNhbGxiYWNrKHBsYXllciwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gY2FsbGJhY2tNYXAuZ2V0KHBsYXllci5lbGVtZW50KSB8fCB7fTtcblxuICAgIGlmICghKG5hbWUgaW4gcGxheWVyQ2FsbGJhY2tzKSkge1xuICAgICAgICBwbGF5ZXJDYWxsYmFja3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBwbGF5ZXJDYWxsYmFja3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY2FsbGJhY2tNYXAuc2V0KHBsYXllci5lbGVtZW50LCBwbGF5ZXJDYWxsYmFja3MpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY2FsbGJhY2tzIGZvciBhIHBsYXllciBhbmQgZXZlbnQgb3IgbWV0aG9kLlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRob2Qgb3IgZXZlbnQgbmFtZVxuICogQHJldHVybiB7ZnVuY3Rpb25bXX1cbiAqL1xuZnVuY3Rpb24gZ2V0Q2FsbGJhY2tzKHBsYXllciwgbmFtZSkge1xuICAgIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBjYWxsYmFja01hcC5nZXQocGxheWVyLmVsZW1lbnQpIHx8IHt9O1xuICAgIHJldHVybiBwbGF5ZXJDYWxsYmFja3NbbmFtZV0gfHwgW107XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgc3RvcmVkIGNhbGxiYWNrIGZvciBhIG1ldGhvZCBvciBldmVudCBmb3IgYSBwbGF5ZXIuXG4gKlxuICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG1ldGhvZCBvciBldmVudCBuYW1lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBzcGVjaWZpYyBjYWxsYmFjayB0byByZW1vdmUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBXYXMgdGhpcyB0aGUgbGFzdCBjYWxsYmFjaz9cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBjYWxsYmFja01hcC5nZXQocGxheWVyLmVsZW1lbnQpIHx8IHt9O1xuXG4gICAgaWYgKCFwbGF5ZXJDYWxsYmFja3NbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY2FsbGJhY2sgaXMgcGFzc2VkLCByZW1vdmUgYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGV2ZW50XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICBwbGF5ZXJDYWxsYmFja3NbbmFtZV0gPSBbXTtcbiAgICAgICAgY2FsbGJhY2tNYXAuc2V0KHBsYXllci5lbGVtZW50LCBwbGF5ZXJDYWxsYmFja3MpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHBsYXllckNhbGxiYWNrc1tuYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGxheWVyQ2FsbGJhY2tzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2tNYXAuc2V0KHBsYXllci5lbGVtZW50LCBwbGF5ZXJDYWxsYmFja3MpO1xuICAgIHJldHVybiBwbGF5ZXJDYWxsYmFja3NbbmFtZV0gJiYgcGxheWVyQ2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IHN0b3JlZCBjYWxsYmFjayBmb3IgYSBwbGF5ZXIgYW5kIGV2ZW50IG9yIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG1ldGhvZCBvciBldmVudCBuYW1lLlxuICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjYWxsYmFjaywgb3IgZmFsc2UgaWYgdGhlcmUgd2VyZSBub25lXG4gKi9cbmZ1bmN0aW9uIHNoaWZ0Q2FsbGJhY2tzKHBsYXllciwgbmFtZSkge1xuICAgIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBnZXRDYWxsYmFja3MocGxheWVyLCBuYW1lKTtcblxuICAgIGlmIChwbGF5ZXJDYWxsYmFja3MubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNhbGxiYWNrID0gcGxheWVyQ2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBuYW1lLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG4vKipcbiAqIE1vdmUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCBhbiBlbGVtZW50IHRvIGFub3RoZXIgZWxlbWVudC5cbiAqXG4gKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9sZEVsZW1lbnQgVGhlIG9sZCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3RWxlbWVudCBUaGUgbmV3IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzd2FwQ2FsbGJhY2tzKG9sZEVsZW1lbnQsIG5ld0VsZW1lbnQpIHtcbiAgICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gY2FsbGJhY2tNYXAuZ2V0KG9sZEVsZW1lbnQpO1xuXG4gICAgY2FsbGJhY2tNYXAuc2V0KG5ld0VsZW1lbnQsIHBsYXllckNhbGxiYWNrcyk7XG4gICAgY2FsbGJhY2tNYXAuZGVsZXRlKG9sZEVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgbGliL2Z1bmN0aW9uc1xuICovXG5cbi8qKlxuICogR2V0IHRoZSBuYW1lIG9mIHRoZSBtZXRob2QgZm9yIGEgZ2l2ZW4gZ2V0dGVyIG9yIHNldHRlci5cbiAqXG4gKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEVpdGhlciDigJxnZXTigJ0gb3Ig4oCcc2V04oCdLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNZXRob2ROYW1lKHByb3AsIHR5cGUpIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKHR5cGUudG9Mb3dlckNhc2UoKSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnICsgdHlwZS50b0xvd2VyQ2FzZSgpICsgcHJvcC5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xufVxuXG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRE9NIEVsZW1lbnQuXG4gKlxuICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgVGhlIG9iamVjdCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRG9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHNlZSBodHRwOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzM1MTQ2L2pzL3Rlc3RzL2lzTnVtYmVyLmh0bWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtib29sZWFufSBpbnRlZ2VyIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhbiBpbnRlZ2VyLlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIFVSTCBpcyBhIFZpbWVvIHVybC5cbiAqXG4gKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1ZpbWVvVXJsKHVybCkge1xuICAgIHJldHVybiAoL14oaHR0cHM/Oik/XFwvXFwvKChwbGF5ZXJ8d3d3KS4pP3ZpbWVvLmNvbSg/PSR8XFwvKS8udGVzdCh1cmwpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIFZpbWVvIFVSTCBmcm9tIGFuIGVsZW1lbnQuXG4gKiBUaGUgZWxlbWVudCBtdXN0IGhhdmUgZWl0aGVyIGEgZGF0YS12aW1lby1pZCBvciBkYXRhLXZpbWVvLXVybCBhdHRyaWJ1dGUuXG4gKlxuICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gKiBAcGFyYW0ge29iamVjdH0gb0VtYmVkUGFyYW1ldGVycyBUaGUgb0VtYmVkIHBhcmFtZXRlcnMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFZpbWVvVXJsKCkge1xuICAgIHZhciBvRW1iZWRQYXJhbWV0ZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIHZhciBpZCA9IG9FbWJlZFBhcmFtZXRlcnMuaWQ7XG4gICAgdmFyIHVybCA9IG9FbWJlZFBhcmFtZXRlcnMudXJsO1xuICAgIHZhciBpZE9yVXJsID0gaWQgfHwgdXJsO1xuXG4gICAgaWYgKCFpZE9yVXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQW4gaWQgb3IgdXJsIG11c3QgYmUgcGFzc2VkLCBlaXRoZXIgaW4gYW4gb3B0aW9ucyBvYmplY3Qgb3IgYXMgYSBkYXRhLXZpbWVvLWlkIG9yIGRhdGEtdmltZW8tdXJsIGF0dHJpYnV0ZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlZ2VyKGlkT3JVcmwpKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly92aW1lby5jb20vJyArIGlkT3JVcmw7XG4gICAgfVxuXG4gICAgaWYgKGlzVmltZW9VcmwoaWRPclVybCkpIHtcbiAgICAgICAgcmV0dXJuIGlkT3JVcmwucmVwbGFjZSgnaHR0cDonLCAnaHR0cHM6Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcdTIwMUMnICsgaWQgKyAnXFx1MjAxRCBpcyBub3QgYSB2YWxpZCB2aWRlbyBpZC4nKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXHUyMDFDJyArIGlkT3JVcmwgKyAnXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLicpO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgbGliL2VtYmVkXG4gKi9cblxudmFyIG9FbWJlZFBhcmFtZXRlcnMgPSBbJ2lkJywgJ3VybCcsICd3aWR0aCcsICdtYXh3aWR0aCcsICdoZWlnaHQnLCAnbWF4aGVpZ2h0JywgJ3BvcnRyYWl0JywgJ3RpdGxlJywgJ2J5bGluZScsICdjb2xvcicsICdhdXRvcGxheScsICdhdXRvcGF1c2UnLCAnbG9vcCcsICdyZXNwb25zaXZlJ107XG5cbi8qKlxuICogR2V0IHRoZSAnZGF0YS12aW1lbyctcHJlZml4ZWQgYXR0cmlidXRlcyBmcm9tIGFuIGVsZW1lbnQgYXMgYW4gb2JqZWN0LlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmYXVsdHM9e31dIFRoZSBkZWZhdWx0IHZhbHVlcyB0byB1c2UuXG4gKiBAcmV0dXJuIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fVxuICovXG5mdW5jdGlvbiBnZXRPRW1iZWRQYXJhbWV0ZXJzKGVsZW1lbnQpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIG9FbWJlZFBhcmFtZXRlcnMucmVkdWNlKGZ1bmN0aW9uIChwYXJhbXMsIHBhcmFtKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpbWVvLScgKyBwYXJhbSk7XG5cbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcGFyYW1zW3BhcmFtXSA9IHZhbHVlID09PSAnJyA/IDEgOiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSwgZGVmYXVsdHMpO1xufVxuXG4vKipcbiAqIE1ha2UgYW4gb0VtYmVkIGNhbGwgZm9yIHRoZSBzcGVjaWZpZWQgVVJMLlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtzdHJpbmd9IHZpZGVvVXJsIFRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gUGFyYW1ldGVycyB0byBwYXNzIHRvIG9FbWJlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGdldE9FbWJlZERhdGEodmlkZW9VcmwpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghaXNWaW1lb1VybCh2aWRlb1VybCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcdTIwMUMnICsgdmlkZW9VcmwgKyAnXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodmlkZW9VcmwpO1xuXG4gICAgICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyYnICsgcGFyYW0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3BhcmFtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeGhyID0gJ1hEb21haW5SZXF1ZXN0JyBpbiB3aW5kb3cgPyBuZXcgWERvbWFpblJlcXVlc3QoKSA6IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcblxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1xcdTIwMUMnICsgdmlkZW9VcmwgKyAnXFx1MjAxRCB3YXMgbm90IGZvdW5kLicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdcXHUyMDFDJyArIHZpZGVvVXJsICsgJ1xcdTIwMUQgaXMgbm90IGVtYmVkZGFibGUuJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzID8gJyAoJyArIHhoci5zdGF0dXMgKyAnKScgOiAnJztcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZW1iZWQgY29kZSBmcm9tIFZpbWVvJyArIHN0YXR1cyArICcuJykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVtYmVkIGZyb20gb0VtYmVkIGRhdGEgaW5zaWRlIGFuIGVsZW1lbnQuXG4gKlxuICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgb0VtYmVkIGRhdGEuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHB1dCB0aGUgaWZyYW1lIGluLlxuICogQHJldHVybiB7SFRNTElGcmFtZUVsZW1lbnR9IFRoZSBpZnJhbWUgZW1iZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVtYmVkKF9yZWYsIGVsZW1lbnQpIHtcbiAgICB2YXIgaHRtbCA9IF9yZWYuaHRtbDtcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbiBlbGVtZW50IG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmltZW8taW5pdGlhbGl6ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB9XG5cbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS12aW1lby1pbml0aWFsaXplZCcsICd0cnVlJyk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGFsbCBlbWJlZHMgd2l0aGluIGEgc3BlY2lmaWMgZWxlbWVudFxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3BhcmVudD1kb2N1bWVudF0gVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUVtYmVkcygpIHtcbiAgICB2YXIgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkb2N1bWVudDtcblxuICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpbWVvLWlkXSwgW2RhdGEtdmltZW8tdXJsXScpKTtcblxuICAgIHZhciBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICgnY29uc29sZScgaW4gd2luZG93ICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhbiBlbWJlZDogJyArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTa2lwIGFueSB0aGF0IGhhdmUgZGF0YS12aW1lby1kZWZlclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpbWVvLWRlZmVyJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBnZXRPRW1iZWRQYXJhbWV0ZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHVybCA9IGdldFZpbWVvVXJsKHBhcmFtcyk7XG5cbiAgICAgICAgICAgIGdldE9FbWJlZERhdGEodXJsLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRW1iZWQoZGF0YSwgZWxlbWVudCk7XG4gICAgICAgICAgICB9KS5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZXNpemUgZW1iZWRzIHdoZW4gbWVzc2FnZWQgYnkgdGhlIHBsYXllci5cbiAqXG4gKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtwYXJlbnQ9ZG9jdW1lbnRdIFRoZSBwYXJlbnQgZWxlbWVudC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZUVtYmVkcygpIHtcbiAgICB2YXIgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkb2N1bWVudDtcblxuICAgIHZhciBvbk1lc3NhZ2UgPSBmdW5jdGlvbiBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFpc1ZpbWVvVXJsKGV2ZW50Lm9yaWdpbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXZlbnQuZGF0YSB8fCBldmVudC5kYXRhLmV2ZW50ICE9PSAnc3BhY2VjaGFuZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWZyYW1lcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpZnJhbWVzW2ldLmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3BhY2UgPSBpZnJhbWVzW2ldLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChzcGFjZSAmJiBzcGFjZS5jbGFzc05hbWUuaW5kZXhPZigndmltZW8tc3BhY2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gZXZlbnQuZGF0YS5kYXRhWzBdLmJvdHRvbSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQG1vZHVsZSBsaWIvcG9zdG1lc3NhZ2VcbiAqL1xuXG4vKipcbiAqIFBhcnNlIGEgbWVzc2FnZSByZWNlaXZlZCBmcm9tIHBvc3RNZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSByZWNlaXZlZCBmcm9tIHBvc3RNZXNzYWdlLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZU1lc3NhZ2VEYXRhKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFBvc3QgYSBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0LlxuICpcbiAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdCB0byB1c2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFRoZSBBUEkgbWV0aG9kIHRvIGNhbGwuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIHBsYXllci5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHBvc3RNZXNzYWdlKHBsYXllciwgbWV0aG9kLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBsYXllci5lbGVtZW50LmNvbnRlbnRXaW5kb3cgfHwgIXBsYXllci5lbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZFxuICAgIH07XG5cbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVzc2FnZS52YWx1ZSA9IHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBJRSA4IGFuZCA5IGRvIG5vdCBzdXBwb3J0IHBhc3NpbmcgbWVzc2FnZXMsIHNvIHN0cmluZ2lmeSB0aGVtXG4gICAgdmFyIGllVmVyc2lvbiA9IHBhcnNlRmxvYXQobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14uKm1zaWUgKFxcZCspLiokLywgJyQxJykpO1xuICAgIGlmIChpZVZlcnNpb24gPj0gOCAmJiBpZVZlcnNpb24gPCAxMCkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcGxheWVyLmVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBwbGF5ZXIub3JpZ2luKTtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZGF0YSByZWNlaXZlZCBmcm9tIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgVGhlIHBsYXllciB0aGF0IHJlY2VpdmVkIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHsoT2JqZWN0fHN0cmluZyl9IGRhdGEgVGhlIG1lc3NhZ2UgZGF0YS4gU3RyaW5ncyB3aWxsIGJlIHBhcnNlZCBpbnRvIEpTT04uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShwbGF5ZXIsIGRhdGEpIHtcbiAgICBkYXRhID0gcGFyc2VNZXNzYWdlRGF0YShkYXRhKTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgdmFyIHBhcmFtID0gdm9pZCAwO1xuXG4gICAgaWYgKGRhdGEuZXZlbnQpIHtcbiAgICAgICAgaWYgKGRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IGdldENhbGxiYWNrcyhwbGF5ZXIsIGRhdGEuZGF0YS5tZXRob2QpO1xuXG4gICAgICAgICAgICBwcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGRhdGEuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBlcnJvci5uYW1lID0gZGF0YS5kYXRhLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBkYXRhLmRhdGEubWV0aG9kLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2tzID0gZ2V0Q2FsbGJhY2tzKHBsYXllciwgJ2V2ZW50OicgKyBkYXRhLmV2ZW50KTtcbiAgICAgICAgcGFyYW0gPSBkYXRhLmRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhLm1ldGhvZCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBzaGlmdENhbGxiYWNrcyhwbGF5ZXIsIGRhdGEubWV0aG9kKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHBhcmFtID0gZGF0YS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwocGxheWVyLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjay5yZXNvbHZlKHBhcmFtKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZW1wdHlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcGxheWVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciByZWFkeU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBQbGF5ZXIuXG4gICAgKlxuICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgKiBAcGFyYW0geyhIVE1MSUZyYW1lRWxlbWVudHxIVE1MRWxlbWVudHxzdHJpbmd8alF1ZXJ5KX0gZWxlbWVudCBBIHJlZmVyZW5jZSB0byB0aGUgVmltZW9cbiAgICAqICAgICAgICBwbGF5ZXIgaWZyYW1lLCBhbmQgaWQsIG9yIGEgalF1ZXJ5IG9iamVjdC5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gb0VtYmVkIHBhcmFtZXRlcnMgdG8gdXNlIHdoZW4gY3JlYXRpbmcgYW4gZW1iZWQgaW4gdGhlIGVsZW1lbnQuXG4gICAgKiBAcmV0dXJuIHtQbGF5ZXJ9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBQbGF5ZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyKTtcblxuICAgICAgICAvKiBnbG9iYWwgalF1ZXJ5ICovXG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBIGpRdWVyeSBvYmplY3Qgd2l0aCBtdWx0aXBsZSBlbGVtZW50cyB3YXMgcGFzc2VkLCB1c2luZyB0aGUgZmlyc3QgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIGFuIGVsZW1lbnQgYnkgSURcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90IGFuIGVsZW1lbnQhXG4gICAgICAgIGlmICghaXNEb21FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGVpdGhlciBhIHZhbGlkIGVsZW1lbnQgb3IgYSB2YWxpZCBpZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFscmVhZHkgaW5pdGlhbGl6ZWQgYW4gZW1iZWQgaW4gdGhpcyBkaXYsIHNvIGdyYWIgdGhlIGlmcmFtZVxuICAgICAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSAhPT0gJ0lGUkFNRScpIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGlmcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmcmFtZSB1cmwgaXMgbm90IGEgVmltZW8gdXJsXG4gICAgICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSUZSQU1FJyAmJiAhaXNWaW1lb1VybChlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwbGF5ZXIgZWxlbWVudCBwYXNzZWQgaXNu4oCZdCBhIFZpbWVvIGVtYmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHBsYXllciBvYmplY3QgaW4gdGhlIG1hcCwgcmV0dXJuIHRoYXRcbiAgICAgICAgaWYgKHBsYXllck1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSAnKic7XG5cbiAgICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBvbk1lc3NhZ2UgPSBmdW5jdGlvbiBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmltZW9VcmwoZXZlbnQub3JpZ2luKSB8fCBfdGhpcy5lbGVtZW50LmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9yaWdpbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9yaWdpbiA9IGV2ZW50Lm9yaWdpbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHBhcnNlTWVzc2FnZURhdGEoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVhZHlFdmVudCA9ICdldmVudCcgaW4gZGF0YSAmJiBkYXRhLmV2ZW50ID09PSAncmVhZHknO1xuICAgICAgICAgICAgICAgIHZhciBpc1BpbmdSZXNwb25zZSA9ICdtZXRob2QnIGluIGRhdGEgJiYgZGF0YS5tZXRob2QgPT09ICdwaW5nJztcblxuICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5RXZlbnQgfHwgaXNQaW5nUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhZHknLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YShfdGhpcywgZGF0YSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIG9uTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5lbGVtZW50Lm5vZGVOYW1lICE9PSAnSUZSQU1FJykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBnZXRPRW1iZWRQYXJhbWV0ZXJzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBnZXRWaW1lb1VybChwYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgZ2V0T0VtYmVkRGF0YSh1cmwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gY3JlYXRlRW1iZWQoZGF0YSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQgPSBpZnJhbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dhcENhbGxiYWNrcyhlbGVtZW50LCBpZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNYXAuc2V0KF90aGlzLmVsZW1lbnQsIF90aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0b3JlIGEgY29weSBvZiB0aGlzIFBsYXllciBpbiB0aGUgbWFwXG4gICAgICAgIHJlYWR5TWFwLnNldCh0aGlzLCByZWFkeVByb21pc2UpO1xuICAgICAgICBwbGF5ZXJNYXAuc2V0KHRoaXMuZWxlbWVudCwgdGhpcyk7XG5cbiAgICAgICAgLy8gU2VuZCBhIHBpbmcgdG8gdGhlIGlmcmFtZSBzbyB0aGUgcmVhZHkgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIGlmXG4gICAgICAgIC8vIHRoZSBwbGF5ZXIgaXMgYWxyZWFkeSByZWFkeS5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lGUkFNRScpIHtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHRoaXMsICdwaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcm9taXNlIGZvciBhIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBBUEkgbWV0aG9kIHRvIGNhbGwuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzPXt9XSBBcmd1bWVudHMgdG8gc2VuZCB2aWEgcG9zdE1lc3NhZ2UuXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFBsYXllciwgW3tcbiAgICAgICAga2V5OiAnY2FsbE1ldGhvZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsTWV0aG9kKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgbnBvX3NyYyhmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIHN0b3JpbmcgdGhlIHJlc29sdmUvcmVqZWN0IGhhbmRsZXJzIHRvIGNhbGwgbGF0ZXIsIHNvIHdlXG4gICAgICAgICAgICAgICAgLy8gY2Fu4oCZdCByZXR1cm4gaGVyZS5cbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9hbHdheXMtcmV0dXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZUNhbGxiYWNrKF90aGlzMiwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKF90aGlzMiwgbmFtZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBwcm9taXNlIGZvciB0aGUgdmFsdWUgb2YgYSBwbGF5ZXIgcHJvcGVydHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkgbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZ2V0TWV0aG9kTmFtZShuYW1lLCAnZ2V0Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgc3RvcmluZyB0aGUgcmVzb2x2ZS9yZWplY3QgaGFuZGxlcnMgdG8gY2FsbCBsYXRlciwgc28gd2VcbiAgICAgICAgICAgICAgICAvLyBjYW7igJl0IHJldHVybiBoZXJlLlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL2Fsd2F5cy1yZXR1cm5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlQ2FsbGJhY2soX3RoaXMzLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0OiByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoX3RoaXMzLCBuYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByb21pc2UgZm9yIHNldHRpbmcgdGhlIHZhbHVlIG9mIGEgcGxheWVyIHByb3BlcnR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIEFQSSBtZXRob2QgdG8gY2FsbC5cbiAgICAgICAgICogQHBhcmFtIHttaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gbnBvX3NyYy5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZ2V0TWV0aG9kTmFtZShuYW1lLCAnc2V0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZXJlIG11c3QgYmUgYSB2YWx1ZSB0byBzZXQuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IG5wb19zcmMoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVDYWxsYmFjayhfdGhpczQsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoX3RoaXM0LCBuYW1lLCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIHNwZWNpZmllZCBldmVudC4gV2lsbCBjYWxsIHRoZVxuICAgICAgICAgKiBjYWxsYmFjayB3aXRoIGEgc2luZ2xlIHBhcmFtZXRlciwgYGRhdGFgLCB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvclxuICAgICAgICAgKiB0aGF0IGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGV2ZW50IGZpcmVzLlxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGV2ZW50IG5hbWUuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gZ2V0Q2FsbGJhY2tzKHRoaXMsICdldmVudDonICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsTWV0aG9kKCdhZGRFdmVudExpc3RlbmVyJywgZXZlbnROYW1lKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgZXJyb3IuIFRoZXJlIHdpbGwgYmUgYW4gZXJyb3IgZXZlbnQgZmlyZWQgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIHRyaWdnZXIgdGhlIGVycm9yIGNhbGxiYWNrIGlmIHRoZXkgYXJlIGxpc3RlbmluZy5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmVDYWxsYmFjayh0aGlzLCAnZXZlbnQ6JyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIHNwZWNpZmllZCBldmVudC4gV2lsbCByZW1vdmUgYWxsXG4gICAgICAgICAqIGxpc3RlbmVycyBmb3IgdGhhdCBldmVudCBpZiBhIGBjYWxsYmFja2AgaXNu4oCZdCBwYXNzZWQsIG9yIG9ubHkgdGhhdFxuICAgICAgICAgKiBzcGVjaWZpYyBjYWxsYmFjayBpZiBpdCBpcyBwYXNzZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgc3BlY2lmaWMgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb2ZmJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gZXZlbnQgbmFtZS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsYXN0Q2FsbGJhY2sgPSByZW1vdmVDYWxsYmFjayh0aGlzLCAnZXZlbnQ6JyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gY2FsbGJhY2tzIGxlZnQsIHJlbW92ZSB0aGUgbGlzdGVuZXJcbiAgICAgICAgICAgIGlmIChsYXN0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxNZXRob2QoJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCBldmVudE5hbWUpLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgZXJyb3IuIFRoZXJlIHdpbGwgYmUgYW4gZXJyb3IgZXZlbnQgZmlyZWQgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIHRyaWdnZXIgdGhlIGVycm9yIGNhbGxiYWNrIGlmIHRoZXkgYXJlIGxpc3RlbmluZy5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gbG9hZCBhIG5ldyB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgTG9hZFZpZGVvUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdmlkZW8gd2l0aCB0aGlzIGlkIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgICAgICAqIEByZWplY3Qge1R5cGVFcnJvcn0gVGhlIGlkIHdhcyBub3QgYSBudW1iZXIuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCBhIG5ldyB2aWRlbyBpbnRvIHRoaXMgZW1iZWQuIFRoZSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgaWZcbiAgICAgICAgICogdGhlIHZpZGVvIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQsIG9yIGl0IHdpbGwgYmUgcmVqZWN0ZWQgaWYgaXQgY291bGRcbiAgICAgICAgICogbm90IGJlIGxvYWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKiBAcmV0dXJuIHtMb2FkVmlkZW9Qcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZFZpZGVvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRWaWRlbyhpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnbG9hZFZpZGVvJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBwZXJmb3JtIGFuIGFjdGlvbiB3aGVuIHRoZSBQbGF5ZXIgaXMgcmVhZHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0b2RvIGRvY3VtZW50IGVycm9yc1xuICAgICAgICAgKiBAcHJvbWlzZSBMb2FkVmlkZW9Qcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXIgYSBmdW5jdGlvbiB3aGVuIHRoZSBwbGF5ZXIgaWZyYW1lIGhhcyBpbml0aWFsaXplZC4gWW91IGRvIG5vdFxuICAgICAgICAgKiBuZWVkIHRvIHdhaXQgZm9yIGByZWFkeWAgdG8gdHJpZ2dlciB0byBiZWdpbiBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAqIG9yIGNhbGxpbmcgb3RoZXIgbWV0aG9kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge1JlYWR5UHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlYWR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHJlYWR5TWFwLmdldCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBucG9fc3JjLnJlc29sdmUocmVhZHlQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gYWRkIGEgY3VlIHBvaW50IHRvIHRoZSBwbGF5ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIEFkZEN1ZVBvaW50UHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0byB1c2UgZm9yIHJlbW92ZUN1ZVBvaW50LlxuICAgICAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSB0aGUgdGltZSB3YXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAgICAgKiAgICAgICAgIHZpZGVv4oCZcyBkdXJhdGlvbi5cbiAgICAgICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQ3VlIHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgY3VlIHBvaW50IHRvIHRoZSBwbGF5ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaGUgdGltZSBmb3IgdGhlIGN1ZSBwb2ludC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IFtkYXRhXSBBcmJpdHJhcnkgZGF0YSB0byBiZSByZXR1cm5lZCB3aXRoIHRoZSBjdWUgcG9pbnQuXG4gICAgICAgICAqIEByZXR1cm4ge0FkZEN1ZVBvaW50UHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEN1ZVBvaW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRpbWUpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnYWRkQ3VlUG9pbnQnLCB7IHRpbWU6IHRpbWUsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIHJlbW92ZSBhIGN1ZSBwb2ludCBmcm9tIHRoZSBwbGF5ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIEFkZEN1ZVBvaW50UHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0aGF0IHdhcyByZW1vdmVkLlxuICAgICAgICAgKiBAcmVqZWN0IHtJbnZhbGlkQ3VlUG9pbnR9IFRoZSBjdWUgcG9pbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGlkIHdhcyBub3RcbiAgICAgICAgICogICAgICAgICBmb3VuZC5cbiAgICAgICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQ3VlIHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGEgY3VlIHBvaW50IGZyb20gdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgY3VlIHBvaW50IHRvIHJlbW92ZS5cbiAgICAgICAgICogQHJldHVybiB7UmVtb3ZlQ3VlUG9pbnRQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlQ3VlUG9pbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ3VlUG9pbnQoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3JlbW92ZUN1ZVBvaW50JywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVwcmVzZW50YXRpb24gb2YgYSB0ZXh0IHRyYWNrIG9uIGEgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFZpbWVvVGV4dFRyYWNrXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgSVNPIGxhbmd1YWdlIGNvZGUuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBraW5kIFRoZSBraW5kIG9mIHRyYWNrIGl0IGlzIChjYXB0aW9ucyBvciBzdWJ0aXRsZXMpLlxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIGh1bWFu4oCQcmVhZGFibGUgbGFiZWwgZm9yIHRoZSB0cmFjay5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZW5hYmxlIGEgdGV4dCB0cmFjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgRW5hYmxlVGV4dFRyYWNrUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7VmltZW9UZXh0VHJhY2t9IFRoZSB0ZXh0IHRyYWNrIHRoYXQgd2FzIGVuYWJsZWQuXG4gICAgICAgICAqIEByZWplY3Qge0ludmFsaWRUcmFja0xhbmd1YWdlRXJyb3J9IE5vIHRyYWNrIHdhcyBhdmFpbGFibGUgd2l0aCB0aGVcbiAgICAgICAgICogICAgICAgICBzcGVjaWZpZWQgbGFuZ3VhZ2UuXG4gICAgICAgICAqIEByZWplY3Qge0ludmFsaWRUcmFja0Vycm9yfSBObyB0cmFjayB3YXMgYXZhaWxhYmxlIHdpdGggdGhlIHNwZWNpZmllZFxuICAgICAgICAgKiAgICAgICAgIGxhbmd1YWdlIGFuZCBraW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZSB0aGUgdGV4dCB0cmFjayB3aXRoIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UsIGFuZCBvcHRpb25hbGx5IHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQga2luZCAoY2FwdGlvbnMgb3Igc3VidGl0bGVzKS5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiBzZXQgdmlhIHRoZSBBUEksIHRoZSB0cmFjayBsYW5ndWFnZSB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZpZXdlcuKAmXNcbiAgICAgICAgICogc3RvcmVkIHByZWZlcmVuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIHR3b+KAkGxldHRlciBsYW5ndWFnZSBjb2RlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2tpbmRdIFRoZSBraW5kIG9mIHRyYWNrIHRvIGVuYWJsZSAoY2FwdGlvbnMgb3Igc3VidGl0bGVzKS5cbiAgICAgICAgICogQHJldHVybiB7RW5hYmxlVGV4dFRyYWNrUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuYWJsZVRleHRUcmFjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVUZXh0VHJhY2sobGFuZ3VhZ2UsIGtpbmQpIHtcbiAgICAgICAgICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgbGFuZ3VhZ2UuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2VuYWJsZVRleHRUcmFjaycsIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAga2luZDoga2luZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGRpc2FibGUgdGhlIGFjdGl2ZSB0ZXh0IHRyYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBEaXNhYmxlVGV4dFRyYWNrUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7dm9pZH0gVGhlIHRyYWNrIHdhcyBkaXNhYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlIHRoZSBjdXJyZW50bHktYWN0aXZlIHRleHQgdHJhY2suXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcmV0dXJuIHtEaXNhYmxlVGV4dFRyYWNrUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2FibGVUZXh0VHJhY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZVRleHRUcmFjaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2Rpc2FibGVUZXh0VHJhY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gcGF1c2UgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBQYXVzZVByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge3ZvaWR9IFRoZSB2aWRlbyB3YXMgcGF1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhdXNlIHRoZSB2aWRlbyBpZiBpdOKAmXMgcGxheWluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge1BhdXNlUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgncGF1c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gcGxheSB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIFBsYXlQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHBsYXllZC5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGF5IHRoZSB2aWRlbyBpZiBpdOKAmXMgcGF1c2VkLiAqKk5vdGU6Kiogb24gaU9TIGFuZCBzb21lIG90aGVyXG4gICAgICAgICAqIG1vYmlsZSBkZXZpY2VzLCB5b3UgY2Fubm90IHByb2dyYW1tYXRpY2FsbHkgdHJpZ2dlciBwbGF5LiBPbmNlIHRoZVxuICAgICAgICAgKiB2aWV3ZXIgaGFzIHRhcHBlZCBvbiB0aGUgcGxheSBidXR0b24gaW4gdGhlIHBsYXllciwgaG93ZXZlciwgeW91XG4gICAgICAgICAqIHdpbGwgYmUgYWJsZSB0byB1c2UgdGhpcyBmdW5jdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge1BsYXlQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgncGxheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byB1bmxvYWQgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBVbmxvYWRQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHVubG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgcGxheWVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7VW5sb2FkUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VubG9hZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmxvYWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsTWV0aG9kKCd1bmxvYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBhdXRvcGF1c2UgYmVoYXZpb3Igb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRBdXRvcGF1c2VQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHtib29sZWFufSBXaGV0aGVyIGF1dG9wYXVzZSBpcyB0dXJuZWQgb24gb3Igb2ZmLlxuICAgICAgICAgKiBAcmVqZWN0IHtVbnN1cHBvcnRlZEVycm9yfSBBdXRvcGF1c2UgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBhdXRvcGF1c2UgYmVoYXZpb3IgZm9yIHRoaXMgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0QXV0b3BhdXNlUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEF1dG9wYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdXRvcGF1c2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2F1dG9wYXVzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGF1dG9wYXVzZSBiZWhhdmlvciBvZiB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIFNldEF1dG9wYXVzZVByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgYXV0b3BhdXNlIGlzIHR1cm5lZCBvbiBvciBvZmYuXG4gICAgICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEF1dG9wYXVzZSBpcyBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICAgICAgICogICAgICAgICBwbGF5ZXIgb3IgYnJvd3Nlci5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYXV0b3BhdXNlIGJlaGF2aW9yIG9mIHRoaXMgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCB3aGVuIGFub3RoZXIgdmlkZW8gaXMgcGxheWVkIGluIHRoZSBzYW1lIGJyb3dzZXIsIHRoaXNcbiAgICAgICAgICogcGxheWVyIHdpbGwgYXV0b21hdGljYWxseSBwYXVzZS4gVW5sZXNzIHlvdSBoYXZlIGEgc3BlY2lmaWMgcmVhc29uXG4gICAgICAgICAqIGZvciBkb2luZyBzbywgd2UgcmVjb21tZW5kIHRoYXQgeW91IGxlYXZlIGF1dG9wYXVzZSBzZXQgdG8gdGhlXG4gICAgICAgICAqIGRlZmF1bHQgKGB0cnVlYCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9wYXVzZVxuICAgICAgICAgKiBAcmV0dXJuIHtTZXRBdXRvcGF1c2VQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QXV0b3BhdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF1dG9wYXVzZShhdXRvcGF1c2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCgnYXV0b3BhdXNlJywgYXV0b3BhdXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBjb2xvciBvZiB0aGUgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRDb2xvclByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge3N0cmluZ30gVGhlIGhleCBjb2xvciBvZiB0aGUgcGxheWVyLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgY29sb3IgZm9yIHRoaXMgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0Q29sb3JQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29sb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2NvbG9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIHNldCB0aGUgY29sb3Igb2YgdGhlIHBsYXllci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgU2V0Q29sb3JQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHtzdHJpbmd9IFRoZSBjb2xvciB3YXMgc3VjY2Vzc2Z1bGx5IHNldC5cbiAgICAgICAgICogQHJlamVjdCB7VHlwZUVycm9yfSBUaGUgc3RyaW5nIHdhcyBub3QgYSB2YWxpZCBoZXggb3IgcmdiIGNvbG9yLlxuICAgICAgICAgKiBAcmVqZWN0IHtDb250cmFzdEVycm9yfSBUaGUgY29sb3Igd2FzIHNldCwgYnV0IHRoZSBjb250cmFzdCBpc1xuICAgICAgICAgKiAgICAgICAgIG91dHNpZGUgb2YgdGhlIGFjY2VwdGFibGUgcmFuZ2UuXG4gICAgICAgICAqIEByZWplY3Qge0VtYmVkU2V0dGluZ3NFcnJvcn0gVGhlIG93bmVyIG9mIHRoZSBwbGF5ZXIgaGFzIGNob3NlbiB0b1xuICAgICAgICAgKiAgICAgICAgIHVzZSBhIHNwZWNpZmljIGNvbG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgY29sb3Igb2YgdGhpcyBwbGF5ZXIgdG8gYSBoZXggb3IgcmdiIHN0cmluZy4gU2V0dGluZyB0aGVcbiAgICAgICAgICogY29sb3IgbWF5IGZhaWwgaWYgdGhlIG93bmVyIG9mIHRoZSB2aWRlbyBoYXMgc2V0IHRoZWlyIGVtYmVkXG4gICAgICAgICAqIHByZWZlcmVuY2VzIHRvIGZvcmNlIGEgc3BlY2lmaWMgY29sb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgVGhlIGhleCBvciByZ2IgY29sb3Igc3RyaW5nIHRvIHNldC5cbiAgICAgICAgICogQHJldHVybiB7U2V0Q29sb3JQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q29sb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCgnY29sb3InLCBjb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGVkZWYge09iamVjdH0gVmltZW9DdWVQb2ludFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZSBUaGUgdGltZSBvZiB0aGUgY3VlIHBvaW50LlxuICAgICAgICAgKiBAcHJvcGVydHkge29iamVjdH0gZGF0YSBUaGUgZGF0YSBwYXNzZWQgd2hlbiBhZGRpbmcgdGhlIGN1ZSBwb2ludC5cbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIFRoZSB1bmlxdWUgaWQgZm9yIHVzZSB3aXRoIHJlbW92ZUN1ZVBvaW50LlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGN1ZSBwb2ludHMgb2YgYSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0Q3VlUG9pbnRzUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7VmltZW9DdWVQb2ludFtdfSBUaGUgY3VlIHBvaW50cyBhZGRlZCB0byB0aGUgdmlkZW8uXG4gICAgICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEN1ZSBwb2ludHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAgKiAgICAgICAgIHBsYXllciBvciBicm93c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBhcnJheSBvZiB0aGUgY3VlIHBvaW50cyBhZGRlZCB0byB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcmV0dXJuIHtHZXRDdWVQb2ludHNQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q3VlUG9pbnRzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1ZVBvaW50cygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnY3VlUG9pbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0Q3VycmVudFRpbWVQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSBjdXJyZW50IHRpbWUgaW4gc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gc2Vjb25kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldEN1cnJlbnRUaW1lUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjdXJyZW50VGltZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIFNldEN1cnJlbnRUaW1lUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgYWN0dWFsIGN1cnJlbnQgdGltZSB0aGF0IHdhcyBzZXQuXG4gICAgICAgICAqIEByZWplY3Qge1JhbmdlRXJyb3J9IHRoZSB0aW1lIHdhcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gdGhlXG4gICAgICAgICAqICAgICAgICAgdmlkZW/igJlzIGR1cmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiBzZWNvbmRzLiBJZiB0aGUgcGxheWVyIHdhc1xuICAgICAgICAgKiBwYXVzZWQsIGl0IHdpbGwgcmVtYWluIHBhdXNlZC4gTGlrZXdpc2UsIGlmIHRoZSBwbGF5ZXIgd2FzIHBsYXlpbmcsXG4gICAgICAgICAqIGl0IHdpbGwgcmVzdW1lIHBsYXlpbmcgb25jZSB0aGUgdmlkZW8gaGFzIGJ1ZmZlcmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBZb3UgY2FuIHByb3ZpZGUgYW4gYWNjdXJhdGUgdGltZSBhbmQgdGhlIHBsYXllciB3aWxsIGF0dGVtcHQgdG8gc2Vla1xuICAgICAgICAgKiB0byBhcyBjbG9zZSB0byB0aGF0IHRpbWUgYXMgcG9zc2libGUuIFRoZSBleGFjdCB0aW1lIHdpbGwgYmUgdGhlXG4gICAgICAgICAqIGZ1bGZpbGxlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50VGltZVxuICAgICAgICAgKiBAcmV0dXJuIHtTZXRDdXJyZW50VGltZVByb21pc2V9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRDdXJyZW50VGltZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDdXJyZW50VGltZShjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdjdXJyZW50VGltZScsIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIEdldER1cmF0aW9uUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB2aWRlbyBpbiBzZWNvbmRzLiBJdCB3aWxsIGJlIHJvdW5kZWQgdG8gdGhlXG4gICAgICAgICAqIG5lYXJlc3Qgc2Vjb25kIGJlZm9yZSBwbGF5YmFjayBiZWdpbnMsIGFuZCB0byB0aGUgbmVhcmVzdCB0aG91c2FuZHRoXG4gICAgICAgICAqIG9mIGEgc2Vjb25kIGFmdGVyIHBsYXliYWNrIGJlZ2lucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldER1cmF0aW9uUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldER1cmF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkdXJhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGVuZGVkIHN0YXRlIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0RW5kZWRQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgdmlkZW8gaGFzIGVuZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgZW5kZWQgc3RhdGUgb2YgdGhlIHZpZGVvLiBUaGUgdmlkZW8gaGFzIGVuZGVkIGlmXG4gICAgICAgICAqIGBjdXJyZW50VGltZSA9PT0gZHVyYXRpb25gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0RW5kZWRQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RW5kZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RW5kZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2VuZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRMb29wUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHBsYXllciBpcyBzZXQgdG8gbG9vcC5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGxvb3Agc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldExvb3BQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9vcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb29wKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdsb29wJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIHNldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBTZXRMb29wUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gVGhlIGxvb3Agc3RhdGUgdGhhdCB3YXMgc2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLiBXaGVuIHNldCB0byBgdHJ1ZWAsIHRoZSBwbGF5ZXJcbiAgICAgICAgICogd2lsbCBzdGFydCBvdmVyIGltbWVkaWF0ZWx5IG9uY2UgcGxheWJhY2sgZW5kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcFxuICAgICAgICAgKiBAcmV0dXJuIHtTZXRMb29wUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldExvb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9vcChsb29wKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ2xvb3AnLCBsb29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0TG9vcFByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSB2aWRlbyBpcyBwYXVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldExvb3BQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UGF1c2VkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhdXNlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgncGF1c2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGV4dCB0cmFja3Mgb2YgYSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0VGV4dFRyYWNrc1Byb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge1ZpbWVvVGV4dFRyYWNrW119IFRoZSB0ZXh0IHRyYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhbiBhcnJheSBvZiB0aGUgdGV4dCB0cmFja3MgdGhhdCBleGlzdCBmb3IgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0VGV4dFRyYWNrc1Byb21pc2V9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUZXh0VHJhY2tzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRleHRUcmFja3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3RleHRUcmFja3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9taXNlIEdldFZpZGVvRW1iZWRDb2RlUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgYDxpZnJhbWU+YCBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBgPGlmcmFtZT5gIGVtYmVkIGNvZGUgZm9yIHRoZSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldFZpZGVvRW1iZWRDb2RlUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFZpZGVvRW1iZWRDb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvRW1iZWRDb2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2aWRlb0VtYmVkQ29kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0VmlkZW9JZFByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEByZXR1cm4ge0dldFZpZGVvSWRQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VmlkZW9JZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWaWRlb0lkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2aWRlb0lkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb1RpdGxlUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0VmlkZW9UaXRsZVByb21pc2V9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRWaWRlb1RpdGxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvVGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvVGl0bGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBuYXRpdmUgd2lkdGggb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb1dpZHRoUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgbmF0aXZlIHdpZHRoIG9mIHRoZSB2aWRlby5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIG5hdGl2ZSB3aWR0aCBvZiB0aGUgY3VycmVudGx54oCQcGxheWluZyB2aWRlby4gVGhlIHdpZHRoIG9mXG4gICAgICAgICAqIHRoZSBoaWdoZXN04oCQcmVzb2x1dGlvbiBhdmFpbGFibGUgd2lsbCBiZSB1c2VkIGJlZm9yZSBwbGF5YmFjayBiZWdpbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcmV0dXJuIHtHZXRWaWRlb1dpZHRoUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFZpZGVvV2lkdGgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9XaWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndmlkZW9XaWR0aCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIG5hdGl2ZSBoZWlnaHQgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb0hlaWdodFByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIG5hdGl2ZSBoZWlnaHQgb2YgdGhlIHZpZGVvLlxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgbmF0aXZlIGhlaWdodCBvZiB0aGUgY3VycmVudGx54oCQcGxheWluZyB2aWRlby4gVGhlIGhlaWdodCBvZlxuICAgICAgICAgKiB0aGUgaGlnaGVzdOKAkHJlc29sdXRpb24gYXZhaWxhYmxlIHdpbGwgYmUgdXNlZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0VmlkZW9IZWlnaHRQcm9taXNlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VmlkZW9IZWlnaHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9IZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvSGVpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdmltZW8uY29tIHVybCBmb3IgdGhlIHZpZGVvLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb1VybFByb21pc2VcbiAgICAgICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIHZpbWVvLmNvbSB1cmwgZm9yIHRoZSB2aWRlby5cbiAgICAgICAgICogQHJlamVjdCB7UHJpdmFjeUVycm9yfSBUaGUgdXJsIGlzbuKAmXQgYXZhaWxhYmxlIGJlY2F1c2Ugb2YgdGhlIHZpZGVv4oCZcyBwcml2YWN5IHNldHRpbmcuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdXRob3IgQnJhZCBEb3VnaGVydHkgPGJyYWRAdmltZW8uY29tPlxuICAgICAgICAgKiBAcmV0dXJuIHtHZXRWaWRlb1VybFByb21pc2V9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRWaWRlb1VybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWaWRlb1VybCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndmlkZW9VcmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSB2b2x1bWUgbGV2ZWwgb2YgdGhlIHBsYXllci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb21pc2UgR2V0Vm9sdW1lUHJvbWlzZVxuICAgICAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdm9sdW1lIGxldmVsIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIDAgdG8gMS5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdm9sdW1lIGxldmVsIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIGAwYCB0byBgMWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgYW4gaW5kZXBlbmRlbnQgdm9sdW1lIGZyb20gdGhlXG4gICAgICAgICAqIHN5c3RlbSB2b2x1bWUuIEluIHRob3NlIGNhc2VzLCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gYDFgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIEJyYWQgRG91Z2hlcnR5IDxicmFkQHZpbWVvLmNvbT5cbiAgICAgICAgICogQHJldHVybiB7R2V0Vm9sdW1lUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFZvbHVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWb2x1bWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZvbHVtZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIHZvbHVtZSBsZXZlbCBvZiB0aGUgcGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvbWlzZSBTZXRWb2x1bWVQcm9taXNlXG4gICAgICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2b2x1bWUgd2FzIHNldC5cbiAgICAgICAgICogQHJlamVjdCB7UmFuZ2VFcnJvcn0gVGhlIHZvbHVtZSB3YXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIDEuXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB2b2x1bWUgb2YgdGhlIHBsYXllciBvbiBhIHNjYWxlIGZyb20gYDBgIHRvIGAxYC4gV2hlbiBzZXRcbiAgICAgICAgICogdmlhIHRoZSBBUEksIHRoZSB2b2x1bWUgbGV2ZWwgd2lsbCBub3QgYmUgc3luY2hyb25pemVkIHRvIG90aGVyXG4gICAgICAgICAqIHBsYXllcnMgb3Igc3RvcmVkIGFzIHRoZSB2aWV3ZXLigJlzIHByZWZlcmVuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgc2V0dGluZyB0aGUgdm9sdW1lLiBBbiBlcnJvciB3aWxsXG4gICAgICAgICAqICpub3QqIGJlIHRyaWdnZXJlZCBpbiB0aGF0IHNpdHVhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBCcmFkIERvdWdoZXJ0eSA8YnJhZEB2aW1lby5jb20+XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWVcbiAgICAgICAgICogQHJldHVybiB7U2V0Vm9sdW1lUHJvbWlzZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFZvbHVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUodm9sdW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3ZvbHVtZScsIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGxheWVyO1xufSgpO1xuXG5pbml0aWFsaXplRW1iZWRzKCk7XG5yZXNpemVFbWJlZHMoKTtcblxucmV0dXJuIFBsYXllcjtcblxufSkpKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxheWVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2aW1lby9wbGF5ZXIvZGlzdC9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBWEE7Ozs7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBOzs7QUFFQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBOzs7OztBQXRDQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBOzs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
          })
        