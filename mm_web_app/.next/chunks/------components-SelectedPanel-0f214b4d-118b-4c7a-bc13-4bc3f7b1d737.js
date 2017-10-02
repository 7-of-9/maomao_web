
          window.__NEXT_REGISTER_CHUNK('------components-SelectedPanel-0f214b4d-118b-4c7a-bc13-4bc3f7b1d737.js', function() {
            webpackJsonp([9],{

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sticky = __webpack_require__(1211);

var _sticky2 = _interopRequireDefault(_sticky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _sticky2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(280);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(1212);

var _find = __webpack_require__(1213);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stickyOwnProps = ['mode', 'stickyStyle', 'stickyClassName', 'boundaryElement', 'scrollElement', 'bottomOffset', 'topOffset', 'positionRecheckInterval', 'noExceptionOnMissedScrollElement', 'wrapperCmp', 'holderCmp', 'hideOnBoundaryHit', 'holderProps'];

var isEqual = function isEqual(obj1, obj2) {
  for (var field in obj1) {
    if (obj1.hasOwnProperty(field) && obj1[field] !== obj2[field]) {
      return false;
    }
  }

  return true;
};

var Sticky = function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky(props) {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

    _this.createWrapperRef = function (wrapper) {
      _this.wrapperEl = wrapper;
    };

    _this.createHolderRef = function (holder) {
      _this.holderEl = holder;
    };

    _this.checkPosition = function () {
      var holderEl = _this.holderEl;
      var wrapperEl = _this.wrapperEl;
      var boundaryElement = _this.boundaryElement;
      var scrollElement = _this.scrollElement;


      var holderRect = holderEl.getBoundingClientRect(),
          wrapperRect = wrapperEl.getBoundingClientRect(),
          boundaryRect = boundaryElement ? getRect(boundaryElement) : { top: -Infinity, bottom: Infinity },
          scrollRect = getRect(scrollElement),
          isFixed = _this.isFixed(holderRect, wrapperRect, boundaryRect, scrollRect);

      _this.setState({
        fixed: isFixed,
        boundaryTop: boundaryRect.top,
        boundaryBottom: boundaryRect.bottom,
        top: scrollRect.top,
        bottom: scrollRect.bottom,
        width: holderRect.width,
        height: wrapperRect.height
      });
    };

    _this.state = {
      height: 0,
      fixed: false
    };
    return _this;
  }

  _createClass(Sticky, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nProps, nState) {
      var state = this.state;
      var props = this.props;

      return !isEqual(state, nState) || !isEqual(props, nProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var me = _reactDom2.default.findDOMNode(this);
      var _props = this.props;
      var boundaryElement = _props.boundaryElement;
      var scrollElement = _props.scrollElement;
      var noExceptionOnMissedScrollElement = _props.noExceptionOnMissedScrollElement;
      var positionRecheckInterval = _props.positionRecheckInterval;


      this.boundaryElement = (0, _find2.default)(boundaryElement, me);
      if (this.boundaryElement === window || this.boundaryElement === document) {
        // such objects can't be used as boundary
        // and in fact there is no point in such a case
        this.boundaryElement = null;
      }

      this.scrollElement = (0, _find2.default)(scrollElement, me);

      if (this.scrollElement) {
        (0, _events.listen)(this.scrollElement, ['scroll'], this.checkPosition);
      } else if (!noExceptionOnMissedScrollElement) {
        throw new Error('Cannot find scrollElement ' + scrollElement);
      }

      (0, _events.listen)(window, ['scroll', 'resize', 'pageshow', 'load'], this.checkPosition);
      this.checkPosition();

      if (positionRecheckInterval) {
        this.checkPositionIntervalId = setInterval(this.checkPosition, positionRecheckInterval);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollElement) {
        (0, _events.unlisten)(this.scrollElement, ['scroll'], this.checkPosition);
      }
      (0, _events.unlisten)(window, ['scroll', 'resize', 'pageshow', 'load'], this.checkPosition);
      this.boundaryElement = null;
      this.scrollElement = null;
      clearTimeout(this.checkPositionIntervalId);
    }
  }, {
    key: 'isFixed',
    value: function isFixed(holderRect, wrapperRect, boundaryRect, scrollRect) {
      var _props2 = this.props;
      var hideOnBoundaryHit = _props2.hideOnBoundaryHit;
      var bottomOffset = _props2.bottomOffset;
      var topOffset = _props2.topOffset;
      var mode = _props2.mode;


      if (boundaryRect && !instersect(boundaryRect, scrollRect, topOffset, bottomOffset)) {
        return false;
      }

      var hideOffset = hideOnBoundaryHit ? wrapperRect.height + bottomOffset : 0;

      if (mode === 'top') {
        return holderRect.top + topOffset < scrollRect.top && scrollRect.top + hideOffset <= boundaryRect.bottom;
      }

      return holderRect.bottom - topOffset > scrollRect.bottom && scrollRect.bottom - hideOffset >= boundaryRect.top;
    }
  }, {
    key: 'buildTopStyles',
    value: function buildTopStyles() {
      var _props3 = this.props;
      var bottomOffset = _props3.bottomOffset;
      var hideOnBoundaryHit = _props3.hideOnBoundaryHit;
      var _state = this.state;
      var top = _state.top;
      var height = _state.height;
      var boundaryBottom = _state.boundaryBottom;


      if (hideOnBoundaryHit || top + height + bottomOffset < boundaryBottom) {
        return { top: top, position: 'fixed' };
      }

      return { bottom: bottomOffset, position: 'absolute' };
    }
  }, {
    key: 'buildBottomStyles',
    value: function buildBottomStyles() {
      var _props4 = this.props;
      var bottomOffset = _props4.bottomOffset;
      var hideOnBoundaryHit = _props4.hideOnBoundaryHit;
      var _state2 = this.state;
      var bottom = _state2.bottom;
      var height = _state2.height;
      var boundaryTop = _state2.boundaryTop;


      if (hideOnBoundaryHit || bottom - height - bottomOffset > boundaryTop) {
        return { top: bottom - height, position: 'fixed' };
      }

      return { top: bottomOffset, position: 'absolute' };
    }
  }, {
    key: 'buildStickyStyle',
    value: function buildStickyStyle() {
      var style = void 0;
      if (this.props.mode === 'top') {
        style = this.buildTopStyles();
      } else {
        style = this.buildBottomStyles();
      }
      style.width = this.state.width;

      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var _state3 = this.state;
      var fixed = _state3.fixed;
      var height = _state3.height;
      var stickyClassName = props.stickyClassName;
      var stickyStyle = props.stickyStyle;
      var holderCmp = props.holderCmp;
      var wrapperCmp = props.wrapperCmp;
      var holderProps = props.holderProps;
      var children = props.children;

      var wrapperProps = sanitizeProps(props, stickyOwnProps);
      // To ensure that this component becomes sticky immediately on mobile devices instead
      // of disappearing until the scroll event completes, we add `transform: translateZ(0)`
      // to 'kick' rendering of this element to the GPU
      // @see http://stackoverflow.com/questions/32875046
      var wrapperStyle = { transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' };
      if (wrapperProps.style) {
        wrapperStyle = _extends({}, wrapperStyle, wrapperProps.style);
      }

      if (fixed) {
        wrapperProps.className += ' ' + stickyClassName;
        wrapperStyle = _extends({}, wrapperStyle, stickyStyle, this.buildStickyStyle());
      }

      holderProps.style = _extends({}, holderProps.style, { minHeight: height + 'px' });
      holderProps.ref = this.createHolderRef;

      wrapperProps.style = wrapperStyle;
      wrapperProps.ref = this.createWrapperRef;

      return _react2.default.createElement(holderCmp, holderProps, _react2.default.createElement(wrapperCmp, wrapperProps, children));
    }
  }]);

  return Sticky;
}(_react.Component);

// some helpers

Sticky.propTypes = {
  mode: _propTypes2.default.oneOf(['top', 'bottom']),
  stickyStyle: _propTypes2.default.object,
  stickyClassName: _propTypes2.default.string,
  hideOnBoundaryHit: _propTypes2.default.bool,
  boundaryElement: _propTypes2.default.string,
  scrollElement: _propTypes2.default.string,
  bottomOffset: _propTypes2.default.number,
  topOffset: _propTypes2.default.number,
  positionRecheckInterval: _propTypes2.default.number,
  noExceptionOnMissedScrollElement: _propTypes2.default.bool,
  wrapperCmp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  holderCmp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  holderProps: _propTypes2.default.object
};
Sticky.defaultProps = {
  className: '',
  style: {},
  mode: 'top',
  holderCmp: 'div',
  holderProps: {},
  wrapperCmp: 'div',
  stickyClassName: 'sticky',
  stickyStyle: null,
  hideOnBoundaryHit: true,
  boundaryElement: null,
  scrollElement: 'window',
  topOffset: 0,
  bottomOffset: 0,
  noExceptionOnMissedScrollElement: false,
  positionRecheckInterval: 0
};
exports.default = Sticky;
function getRect(el) {
  if (el && typeof el.getBoundingClientRect === 'function') {
    return el.getBoundingClientRect();
  }

  if (el === window || el === document) {
    return { top: 0, left: 0, bottom: window.innerHeight, height: window.innerHeight, width: window.innerWidth, right: window.innerWidth };
  }

  return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
}

function instersect(r1, r2, topOffset, bottomOffset) {
  var r1Top = r1.top + topOffset,
      r1Bottom = r1.bottom + bottomOffset;

  return r1Top >= r2.top && r1Top <= r2.bottom || r1Bottom >= r2.top && r1Bottom <= r2.bottom || r1Bottom >= r2.bottom && r1Top <= r2.top;
}

/**
 * Simply removes all unwanted props in order to avoid react 'unkown prop' warning
 * @param  {Object} props     that should be sanitized
 * @param  {Object} toRemove  array of prop names to remove
 * @return {Object}           cloned and sanitized props
 */
function sanitizeProps(props, toRemove) {
  props = _extends({}, props);
  for (var i = 0, l = toRemove.length; i < l; i += 1) {
    delete props[toRemove[i]];
  }
  return props;
}
module.exports = exports['default'];

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = listen;
exports.unlisten = unlisten;
////////////////////////////////////////////////////////////////////////////////////////
// Small helpers that provide an easy and effecient way to add/remove event listeners //
////////////////////////////////////////////////////////////////////////////////////////

var elementsWithListeners = [],
    registeredListeners = [];

function addListener(el, event, cb) {
  var idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    idx = elementsWithListeners.length;
    elementsWithListeners.push(el);
    registeredListeners.push({ el: el, totalCount: 0 });
  }

  var listeners = registeredListeners[idx],
      listener = listeners[event];

  if (!listener) {
    listener = listeners[event] = { callbacks: [] };
    listener.cb = function (e) {
      for (var i = 0, l = listener.callbacks.length; i < l; i += 1) {
        listener.callbacks[i](e);
      }
    };
    listeners.totalCount += 1;
    listeners.el.addEventListener(event, listener.cb);
  }

  // just to prevent double listeners
  if (listener.callbacks.indexOf(cb) !== -1) {
    return;
  }

  listener.callbacks.push(cb);
}

function removeListener(el, event, cb) {
  var idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    return;
  }

  var listeners = registeredListeners[idx],
      listener = listeners[event],
      callbacks = listener ? listener.callbacks : [];

  if (!listener || callbacks.indexOf(cb) === -1) {
    return;
  }

  callbacks.splice(callbacks.indexOf(cb), 1);
  if (callbacks.length > 0) {
    return;
  }

  listeners.el.removeEventListener(event, listener.cb);
  listeners.totalCount -= 1;
  delete listeners[event];

  if (listeners.totalCount > 0) {
    return;
  }

  elementsWithListeners.splice(idx, 1);
  registeredListeners.splice(idx, 1);
}

/**
 * Subscribe cb to events list
 * @param  {HTMLElement}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be called
 */
function listen(el, events, cb) {
  for (var i = 0, l = events.length; i < l; i += 1) {
    addListener(el, events[i], cb);
  }
}

/**
 * Unsubscribe cb from events list
 * @param  {HTMLElement}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be unsubscribed
 */

function unlisten(el, events, cb) {
  for (var i = 0, l = events.length; i < l; i += 1) {
    removeListener(el, events[i], cb);
  }
}

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
var basicSelectors = {};
if (typeof document !== 'undefined') {
  basicSelectors.body = document.body;
  basicSelectors.window = window;
  basicSelectors.document = document;
}

var matchesMethodName = function () {
  if (typeof document !== 'undefined') {
    var body = document.body;
    return typeof body.matches === 'function' ? 'matches' : typeof body.webkitMatchesSelector === 'function' ? 'webkitMatchesSelector' : //webkit
    typeof body.mozMatchesSelector === 'function' ? 'mozMatchesSelector' : //mozilla
    typeof body.msMatchesSelector === 'function' ? 'msMatchesSelector' : //ie
    typeof body.oMatchesSelector === 'function' ? 'oMatchesSelector' : //old opera
    null;
  }
}();

function find(selector, el) {
  if (!selector) {
    return null;
  }

  if (basicSelectors.hasOwnProperty(selector)) {
    return basicSelectors[selector];
  }

  // select by id
  if (selector[0] === '#') {
    return document.getElementById(selector.slice(1));
  }

  if (!matchesMethodName) {
    return null;
  }

  // eslint-disable-next-line no-cond-assign
  while (el = el.parentElement) {
    if (el[matchesMethodName](selector)) {
      return el;
    }
  }

  // nothing has been found :(
  return null;
}
module.exports = exports['default'];

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var React = __webpack_require__(31);
var factory = __webpack_require__(171);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(280);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _trackHelper = __webpack_require__(1404);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helpers = {
  initialize: function initialize(props) {
    var slickList = _reactDom2.default.findDOMNode(this.list);

    var slideCount = _react2.default.Children.count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
    } else {
      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
    }

    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * props.slidesToShow;

    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      currentSlide: currentSlide,
      slideHeight: slideHeight,
      listHeight: listHeight
    }, function () {

      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
    });
  },
  update: function update(props) {
    var slickList = _reactDom2.default.findDOMNode(this.list);
    // This method has mostly same code as initialize method.
    // Refactor it
    var slideCount = _react2.default.Children.count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
    } else {
      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
    }

    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * props.slidesToShow;

    // pause slider if autoplay is set to false
    if (props.autoplay) {
      this.pause();
    } else {
      this.autoPlay();
    }

    this.setState({
      slideCount: slideCount,
      slideWidth: slideWidth,
      listWidth: listWidth,
      trackWidth: trackWidth,
      slideHeight: slideHeight,
      listHeight: listHeight
    }, function () {

      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

      this.setState({ trackStyle: trackStyle });
    });
  },
  getWidth: function getWidth(elem) {
    return elem.getBoundingClientRect().width || elem.offsetWidth || 0;
  },
  getHeight: function getHeight(elem) {
    return elem.getBoundingClientRect().height || elem.offsetHeight || 0;
  },

  adaptHeight: function adaptHeight() {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide + '"]';
      if (this.list) {
        var slickList = _reactDom2.default.findDOMNode(this.list);
        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
      }
    }
  },
  canGoNext: function canGoNext(opts) {
    var canGo = true;
    if (!opts.infinite) {
      if (opts.centerMode) {
        // check if current slide is last slide
        if (opts.currentSlide >= opts.slideCount - 1) {
          canGo = false;
        }
      } else {
        // check if all slides are shown in slider
        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
          canGo = false;
        }
      }
    }
    return canGo;
  },
  slideHandler: function slideHandler(index) {
    var _this = this;

    // Functionality of animateSlide and postSlide is merged into this function
    // console.log('slideHandler', index);
    var targetSlide, currentSlide;
    var targetLeft, currentLeft;
    var callback;

    if (this.props.waitForAnimate && this.state.animating) {
      return;
    }

    if (this.props.fade) {
      currentSlide = this.state.currentSlide;

      // Don't change slide if it's not infite and current slide is the first or last slide.
      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
        return;
      }

      //  Shifting targetSlide back into the range
      if (index < 0) {
        targetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        targetSlide = index - this.state.slideCount;
      } else {
        targetSlide = index;
      }

      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
        });
      }

      callback = function callback() {
        _this.setState({
          animating: false
        });
        if (_this.props.afterChange) {
          _this.props.afterChange(targetSlide);
        }
        delete _this.animationEndCallback;
      };

      this.setState({
        animating: true,
        currentSlide: targetSlide
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

      if (this.props.beforeChange) {
        this.props.beforeChange(this.state.currentSlide, targetSlide);
      }

      this.autoPlay();
      return;
    }

    targetSlide = index;
    if (targetSlide < 0) {
      if (this.props.infinite === false) {
        currentSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
      } else {
        currentSlide = this.state.slideCount + targetSlide;
      }
    } else if (targetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        currentSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = 0;
      } else {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else {
      currentSlide = targetSlide;
    }

    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: targetSlide,
      trackRef: this.track
    }, this.props, this.state));

    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: currentSlide,
      trackRef: this.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }

    if (this.props.beforeChange) {
      this.props.beforeChange(this.state.currentSlide, currentSlide);
    }

    if (this.props.lazyLoad) {
      var loaded = true;
      var slidesToLoad = [];
      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
        if (!loaded) {
          slidesToLoad.push(i);
        }
      }
      if (!loaded) {
        this.setState({
          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
        });
      }
    }

    // Slide Transition happens here.
    // animated transition happens to target Slide and
    // non - animated transition happens to current Slide
    // If CSS transitions are false, directly go the current slide.

    if (this.props.useCSS === false) {

      this.setState({
        currentSlide: currentSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
      }, function () {
        if (this.props.afterChange) {
          this.props.afterChange(currentSlide);
        }
      });
    } else {

      var nextStateChanges = {
        animating: false,
        currentSlide: currentSlide,
        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
        swipeLeft: null
      };

      callback = function callback() {
        _this.setState(nextStateChanges);
        if (_this.props.afterChange) {
          _this.props.afterChange(currentSlide);
        }
        delete _this.animationEndCallback;
      };

      this.setState({
        animating: true,
        currentSlide: currentSlide,
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });
    }

    this.autoPlay();
  },
  swipeDirection: function swipeDirection(touchObject) {
    var xDist, yDist, r, swipeAngle;

    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
      return this.props.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return this.props.rtl === false ? 'right' : 'left';
    }
    if (this.props.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  },
  play: function play() {
    var nextIndex;

    if (!this.state.mounted) {
      return false;
    }

    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (this.canGoNext(_extends({}, this.props, this.state))) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  },
  autoPlay: function autoPlay() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
    }
    if (this.props.autoplay) {
      this.setState({
        autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
      });
    }
  },
  pause: function pause() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
      this.setState({
        autoPlayTimer: null
      });
    }
  }
};

exports.default = helpers;

/***/ }),

/***/ 1404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

var _reactDom = __webpack_require__(280);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth, trackHeight;

  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    if (spec.variableWidth) {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    } else if (spec.centerMode) {
      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
    } else {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    }
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
  };

  if (trackWidth) {
    (0, _objectAssign2.default)(style, { width: trackWidth });
  }

  if (trackHeight) {
    (0, _objectAssign2.default)(style, { height: trackHeight });
  }

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
  }

  return style;
};

var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (spec.fade) {
    return 0;
  }

  if (spec.infinite) {
    if (spec.slideCount >= spec.slidesToShow) {
      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        if (spec.slideIndex > spec.slideCount) {
          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
        } else {
          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
        }
      }
    }
  } else {

    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
        slideOffset = slidesToOffset * spec.slideWidth;
      }
    }
  }

  if (spec.centerMode) {
    if (spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }

  if (!spec.vertical) {
    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
  } else {
    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
  }

  if (spec.variableWidth === true) {
    var targetSlideIndex;
    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
    }
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (spec.centerMode === true) {
      if (spec.infinite === false) {
        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
      } else {
        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
      }

      if (targetSlide) {
        targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
      }
    }
  }

  return targetLeft;
};

/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    className: '',
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    customPaging: function customPaging(i) {
        return _react2.default.createElement(
            'button',
            null,
            i + 1
        );
    },
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: false,
    pauseOnHover: true,
    responsive: null,
    rtl: false,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    afterChange: null,
    beforeChange: null,
    edgeEvent: null,
    init: null,
    swipeEvent: null,
    // nextArrow, prevArrow are react componets
    nextArrow: null,
    prevArrow: null
};

module.exports = defaultProps;

/***/ }),

/***/ 1406:
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(191);

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactSlick = __webpack_require__(1514);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _SelectedItem = __webpack_require__(1529);

var _SelectedItem2 = _interopRequireDefault(_SelectedItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedList.js';

/**
*
* SearchBar
*
*/

var SelectedList = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(SelectedList, _React$PureComponent);

  function SelectedList() {
    (0, _classCallCheck3.default)(this, SelectedList);

    return (0, _possibleConstructorReturn3.default)(this, (SelectedList.__proto__ || (0, _getPrototypeOf2.default)(SelectedList)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectedList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      var settings = {
        infinite: false,
        arrows: true,
        speed: 500,
        responsive: [{
          breakpoint: 768,
          settings: { slidesToShow: Math.min(items.length, 3) }
        }, {
          breakpoint: 1024,
          settings: { slidesToShow: Math.min(items.length, 5) }
        }],
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true
      };
      return _react2.default.createElement(_reactSlick2.default, (0, _extends3.default)({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), items.map(function (_ref) {
        var name = _ref.name,
            img = _ref.img,
            id = _ref.id;
        return _react2.default.createElement('div', { key: id + '-' + name, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(_SelectedItem2.default, {
          name: name,
          img: img,
          id: id,
          onRemove: _this2.props.onRemove,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }));
      }));
    }
  }]);

  return SelectedList;
}(_react2.default.PureComponent), _class.propTypes = {
  items: _propTypes2.default.array.isRequired,
  onRemove: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  items: [],
  onRemove: function onRemove(id, name, img) {}
}, _temp);

exports.default = SelectedList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedList.js"); } } })();

/***/ }),

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1515);

/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _innerSlider = __webpack_require__(1516);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _json2mq = __webpack_require__(1522);

var _json2mq2 = _interopRequireDefault(_json2mq);

var _defaultProps = __webpack_require__(1405);

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _canUseDom = __webpack_require__(1524);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enquire = _canUseDom2.default && __webpack_require__(1525);

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    _this.innerSliderRefHandler = _this.innerSliderRefHandler.bind(_this);
    return _this;
  }

  Slider.prototype.innerSliderRefHandler = function innerSliderRefHandler(ref) {
    this.innerSlider = ref;
  };

  Slider.prototype.media = function media(query, handler) {
    enquire.register(query, handler);
    this._responsiveMediaHandlers.push({ query: query, handler: handler });
  };

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    if (this.props.responsive) {
      var breakpoints = this.props.responsive.map(function (breakpt) {
        return breakpt.breakpoint;
      });
      breakpoints.sort(function (x, y) {
        return x - y;
      });

      breakpoints.forEach(function (breakpoint, index) {
        var bQuery;
        if (index === 0) {
          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
        } else {
          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
        }
        _canUseDom2.default && _this2.media(bQuery, function () {
          _this2.setState({ breakpoint: breakpoint });
        });
      });

      // Register media query for full screen. Need to support resize from small to large
      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

      _canUseDom2.default && this.media(query, function () {
        _this2.setState({ breakpoint: null });
      });
    }
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    this._responsiveMediaHandlers.forEach(function (obj) {
      enquire.unregister(obj.query, obj.handler);
    });
  };

  Slider.prototype.slickPrev = function slickPrev() {
    this.innerSlider.slickPrev();
  };

  Slider.prototype.slickNext = function slickNext() {
    this.innerSlider.slickNext();
  };

  Slider.prototype.slickGoTo = function slickGoTo(slide) {
    this.innerSlider.slickGoTo(slide);
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(function (resp) {
        return resp.breakpoint === _this3.state.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
    } else {
      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
    }

    var children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }

    // Children may contain false or null, so we should filter them
    children = children.filter(function (child) {
      return !!child;
    });

    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return _react2.default.createElement(
        'div',
        null,
        children
      );
    } else {
      return _react2.default.createElement(
        _innerSlider.InnerSlider,
        _extends({ ref: this.innerSliderRefHandler }, settings),
        children
      );
    }
  };

  return Slider;
}(_react2.default.Component);

exports.default = Slider;

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.InnerSlider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _eventHandlers = __webpack_require__(1517);

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _helpers = __webpack_require__(1273);

var _helpers2 = _interopRequireDefault(_helpers);

var _initialState = __webpack_require__(1518);

var _initialState2 = _interopRequireDefault(_initialState);

var _defaultProps = __webpack_require__(1405);

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _createReactClass = __webpack_require__(1216);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = __webpack_require__(599);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _track = __webpack_require__(1519);

var _dots = __webpack_require__(1520);

var _arrows = __webpack_require__(1521);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
  mixins: [_helpers2.default, _eventHandlers2.default],
  list: null,
  track: null,
  listRefHandler: function listRefHandler(ref) {
    this.list = ref;
  },
  trackRefHandler: function trackRefHandler(ref) {
    this.track = ref;
  },
  getInitialState: function getInitialState() {
    return _extends({}, _initialState2.default, {
      currentSlide: this.props.initialSlide
    });
  },
  getDefaultProps: function getDefaultProps() {
    return _defaultProps2.default;
  },
  componentWillMount: function componentWillMount() {
    if (this.props.init) {
      this.props.init();
    }
    this.setState({
      mounted: true
    });
    var lazyLoadedList = [];
    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
        lazyLoadedList.push(i);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({
        lazyLoadedList: lazyLoadedList
      });
    }
  },
  componentDidMount: function componentDidMount() {
    // Hack for autoplay -- Inspect Later
    this.initialize(this.props);
    this.adaptHeight();

    // To support server-side rendering
    if (!window) {
      return;
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      clearInterval(this.state.autoPlayTimer);
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      if (true) {
        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
      }
      this.changeSlide({
        message: 'index',
        index: nextProps.slickGoTo,
        currentSlide: this.state.currentSlide
      });
    } else if (this.state.currentSlide >= nextProps.children.length) {
      this.update(nextProps);
      this.changeSlide({
        message: 'index',
        index: nextProps.children.length - nextProps.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    this.adaptHeight();
  },
  onWindowResized: function onWindowResized() {
    this.update(this.props);
    // animating state should be cleared while resizing, otherwise autoplay stops working
    this.setState({
      animating: false
    });
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  },
  slickPrev: function slickPrev() {
    this.changeSlide({ message: 'previous' });
  },
  slickNext: function slickNext() {
    this.changeSlide({ message: 'next' });
  },
  slickGoTo: function slickGoTo(slide) {
    typeof slide === 'number' && this.changeSlide({
      message: 'index',
      index: slide,
      currentSlide: this.state.currentSlide
    });
  },
  render: function render() {
    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
      'slick-vertical': this.props.vertical
    });

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide,
        children: this.props.children,
        customPaging: this.props.customPaging
      };

      dots = _react2.default.createElement(_dots.Dots, dotProps);
    }

    var prevArrow, nextArrow;

    var arrowProps = {
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      prevArrow: this.props.prevArrow,
      nextArrow: this.props.nextArrow,
      clickHandler: this.changeSlide
    };

    if (this.props.arrows) {
      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
    }

    var verticalHeightStyle = null;

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight
      };
    }

    var centerPaddingStyle = null;

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: '0px ' + this.props.centerPadding
        };
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: this.props.centerPadding + ' 0px'
        };
      }
    }

    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);

    return _react2.default.createElement(
      'div',
      {
        className: className,
        onMouseEnter: this.onInnerSliderEnter,
        onMouseLeave: this.onInnerSliderLeave,
        onMouseOver: this.onInnerSliderOver
      },
      prevArrow,
      _react2.default.createElement(
        'div',
        {
          ref: this.listRefHandler,
          className: 'slick-list',
          style: listStyle,
          onMouseDown: this.swipeStart,
          onMouseMove: this.state.dragging ? this.swipeMove : null,
          onMouseUp: this.swipeEnd,
          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
          onTouchStart: this.swipeStart,
          onTouchMove: this.state.dragging ? this.swipeMove : null,
          onTouchEnd: this.swipeEnd,
          onTouchCancel: this.state.dragging ? this.swipeEnd : null,
          onKeyDown: this.props.accessibility ? this.keyHandler : null },
        _react2.default.createElement(
          _track.Track,
          _extends({ ref: this.trackRefHandler }, trackProps),
          this.props.children
        )
      ),
      nextArrow,
      dots
    );
  }
});

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _trackHelper = __webpack_require__(1404);

var _helpers = __webpack_require__(1273);

var _helpers2 = _interopRequireDefault(_helpers);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactDom = __webpack_require__(280);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function changeSlide(options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var _props = this.props,
        slidesToScroll = _props.slidesToScroll,
        slidesToShow = _props.slidesToShow;
    var _state = this.state,
        slideCount = _state.slideCount,
        currentSlide = _state.currentSlide;

    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (this.props.lazyLoad) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
      }
    } else if (options.message === 'next') {
      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
      targetSlide = currentSlide + slideOffset;
      if (this.props.lazyLoad) {
        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
      }
    } else if (options.message === 'dots' || options.message === 'children') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === 'index') {
      targetSlide = parseInt(options.index);
      if (targetSlide === options.currentSlide) {
        return;
      }
    }

    this.slideHandler(targetSlide);
  },

  // Accessiblity handler for previous and next
  keyHandler: function keyHandler(e) {
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (e.keyCode === 37 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? 'next' : 'previous'
        });
      } else if (e.keyCode === 39 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true ? 'previous' : 'next'
        });
      }
    }
  },
  // Focus on selecting a slide (click handler on track)
  selectHandler: function selectHandler(options) {
    this.changeSlide(options);
  },
  swipeStart: function swipeStart(e) {
    var touches, posX, posY;

    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });
  },
  swipeMove: function swipeMove(e) {
    if (!this.state.dragging) {
      e.preventDefault();
      return;
    }
    if (this.state.animating) {
      return;
    }
    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
      e.preventDefault();
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
      slideIndex: this.state.currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

    if (this.props.verticalSwiping) {
      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    }

    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

    if (this.props.verticalSwiping) {
      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    }

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;

    if (this.props.infinite === false) {
      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

        if (this.state.edgeDragged === false && this.props.edgeEvent) {
          this.props.edgeEvent(swipeDirection);
          this.setState({ edgeDragged: true });
        }
      }
    }

    if (this.state.swiped === false && this.props.swipeEvent) {
      this.props.swipeEvent(swipeDirection);
      this.setState({ swiped: true });
    }

    if (!this.props.vertical) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
    }

    if (this.props.verticalSwiping) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }

    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
    });

    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return;
    }
    if (touchObject.swipeLength > 4) {
      e.preventDefault();
    }
  },
  getNavigableIndexes: function getNavigableIndexes() {
    var max = void 0;
    var breakPoint = 0;
    var counter = 0;
    var indexes = [];

    if (!this.props.infinite) {
      max = this.state.slideCount;
    } else {
      breakPoint = this.props.slidesToShow * -1;
      counter = this.props.slidesToShow * -1;
      max = this.state.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + this.props.slidesToScroll;

      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
    }

    return indexes;
  },
  checkNavigable: function checkNavigable(index) {
    var navigables = this.getNavigableIndexes();
    var prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  },
  getSlideCount: function getSlideCount() {
    var _this = this;

    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

    if (this.props.swipeToSlide) {
      var swipedSlide = void 0;

      var slickList = _reactDom2.default.findDOMNode(this.list);

      var slides = slickList.querySelectorAll('.slick-slide');

      Array.from(slides).every(function (slide) {
        if (!_this.props.vertical) {
          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else {
          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        }

        return true;
      });

      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

      return slidesTraversed;
    } else {
      return this.props.slidesToScroll;
    }
  },

  swipeEnd: function swipeEnd(e) {
    if (!this.state.dragging) {
      if (this.props.swipe) {
        e.preventDefault();
      }
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth / this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);

    if (this.props.verticalSwiping) {
      minSwipe = this.state.listHeight / this.props.touchThreshold;
    }

    // reset the state of touch related state variables.
    this.setState({
      dragging: false,
      edgeDragged: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();

      var slideCount = void 0,
          newSlide = void 0;

      switch (swipeDirection) {

        case 'left':
        case 'down':
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          this.state.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
          this.state.currentDirection = 1;
          break;

        default:
          slideCount = this.state.currentSlide;

      }

      this.slideHandler(slideCount);
    } else {
      // Adjust the track back to it's original position.
      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, this.props, this.state));

      this.setState({
        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
      });
    }
  },
  onInnerSliderEnter: function onInnerSliderEnter(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderOver: function onInnerSliderOver(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  },
  onInnerSliderLeave: function onInnerSliderLeave(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }
};

exports.default = EventHandlers;

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initialState = {
    animating: false,
    dragging: false,
    autoPlayTimer: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    listWidth: null,
    listHeight: null,
    // loadIndex: 0,
    slideCount: null,
    slideWidth: null,
    slideHeight: null,
    // sliding: false,
    // slideOffset: 0,
    swipeLeft: null,
    touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
    },

    lazyLoadedList: [],

    // added for react
    initialized: false,
    edgeDragged: false,
    swiped: false, // used by swipeEvent. differentites between touch and swipe.
    trackStyle: {},
    trackWidth: 0

    // Removed
    // transformsEnabled: false,
    // $nextArrow: null,
    // $prevArrow: null,
    // $dots: null,
    // $list: null,
    // $slideTrack: null,
    // $slides: null,
};

module.exports = initialState;

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Track = undefined;

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(599);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  return (0, _classnames2.default)({
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned
  });
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = 'relative';
    style.left = -spec.index * spec.slideWidth;
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  // key could be a zero
  return child.key === null || child.key === undefined ? fallbackKey : child.key;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = _react2.default.Children.count(spec.children);

  _react2.default.Children.forEach(spec.children, function (elem, index) {
    var child = void 0;
    var childOnClickOptions = {
      message: 'children',
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };

    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = _react2.default.createElement('div', null);
    }
    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
    var slickClasses = getSlideClasses((0, _objectAssign2.default)({ index: index }, spec));
    var cssClasses;

    if (child.props.className) {
      cssClasses = (0, _classnames2.default)(slickClasses, child.props.className);
    } else {
      cssClasses = slickClasses;
    }

    var onClick = function onClick(e) {
      child.props && child.props.onClick && child.props.onClick(e);
      if (spec.focusOnSelect) {
        spec.focusOnSelect(childOnClickOptions);
      }
    };

    slides.push(_react2.default.cloneElement(child, {
      key: 'original' + getKey(child, index),
      'data-index': index,
      className: cssClasses,
      tabIndex: '-1',
      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
      onClick: onClick
    }));

    // variableWidth doesn't wrap properly.
    if (spec.infinite && spec.fade === false) {
      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

      if (index >= count - infiniteCount) {
        key = -(count - index);
        preCloneSlides.push(_react2.default.cloneElement(child, {
          key: 'precloned' + getKey(child, key),
          'data-index': key,
          className: cssClasses,
          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
          onClick: onClick
        }));
      }

      if (index < infiniteCount) {
        key = count + index;
        postCloneSlides.push(_react2.default.cloneElement(child, {
          key: 'postcloned' + getKey(child, key),
          'data-index': key,
          className: cssClasses,
          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
          onClick: onClick
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = exports.Track = function (_React$Component) {
  _inherits(Track, _React$Component);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Track.prototype.render = function render() {
    var slides = renderSlides.call(this, this.props);
    return _react2.default.createElement(
      'div',
      { className: 'slick-track', style: this.props.trackStyle },
      slides
    );
  };

  return Track;
}(_react2.default.Component);

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Dots = undefined;

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(599);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDotCount = function getDotCount(spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};

var Dots = exports.Dots = function (_React$Component) {
  _inherits(Dots, _React$Component);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Dots.prototype.clickHandler = function clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  };

  Dots.prototype.render = function render() {
    var _this2 = this;

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

      var leftBound = i * _this2.props.slidesToScroll;
      var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
      var className = (0, _classnames2.default)({
        'slick-active': _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: _this2.props.slidesToScroll,
        currentSlide: _this2.props.currentSlide
      };

      var onClick = _this2.clickHandler.bind(_this2, dotOptions);

      return _react2.default.createElement(
        'li',
        { key: i, className: className },
        _react2.default.cloneElement(_this2.props.customPaging(i), { onClick: onClick })
      );
    });

    return _react2.default.createElement(
      'ul',
      { className: this.props.dotsClass, style: { display: 'block' } },
      dots
    );
  };

  return Dots;
}(_react2.default.Component);

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NextArrow = exports.PrevArrow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(599);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(1273);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrevArrow = exports.PrevArrow = function (_React$Component) {
  _inherits(PrevArrow, _React$Component);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  PrevArrow.prototype.render = function render() {
    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: (0, _classnames2.default)(prevClasses),
      style: { display: 'block' },
      onClick: prevHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
    } else {
      prevArrow = _react2.default.createElement(
        'button',
        _extends({ key: '0', type: 'button' }, prevArrowProps),
        ' Previous'
      );
    }

    return prevArrow;
  };

  return PrevArrow;
}(_react2.default.Component);

var NextArrow = exports.NextArrow = function (_React$Component2) {
  _inherits(NextArrow, _React$Component2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  };

  NextArrow.prototype.render = function render() {
    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

    if (!_helpers2.default.canGoNext(this.props)) {
      nextClasses['slick-disabled'] = true;
      nextHandler = null;
    }

    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: (0, _classnames2.default)(nextClasses),
      style: { display: 'block' },
      onClick: nextHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
    } else {
      nextArrow = _react2.default.createElement(
        'button',
        _extends({ key: '1', type: 'button' }, nextArrowProps),
        ' Next'
      );
    }

    return nextArrow;
  };

  return NextArrow;
}(_react2.default.Component);

/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(1523);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ 1523:
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ 1524:
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(1526);
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(1527);
var Util = __webpack_require__(1406);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(1528);
var each = __webpack_require__(1406).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ 1528:
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ 1529:
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

var _logger = __webpack_require__(595);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedItem.js';

/**
*
* SearchBar
*
*/

var SelectedItem = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(SelectedItem, _PureComponent);

  function SelectedItem() {
    (0, _classCallCheck3.default)(this, SelectedItem);

    return (0, _possibleConstructorReturn3.default)(this, (SelectedItem.__proto__ || (0, _getPrototypeOf2.default)(SelectedItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectedItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          id = _props.id,
          img = _props.img;

      _logger2.default.warn('SelectedItem', name, id, img);
      return _react2.default.createElement('div', { className: 'selected-topic', key: 'topic-' + id,
        style: {
          backgroundImage: 'url(' + (img || '/static/images/no-image.png') + ')',
          backgroundSize: 'cover',
          opacity: '0.6'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('span', { className: 'text-topic', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, name), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
          _this2.props.onRemove(id, name, img);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('i', { className: 'fa fa-remove', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })));
    }
  }]);

  return SelectedItem;
}(_react.PureComponent), _class.propTypes = {
  name: _propTypes2.default.string.isRequired,
  img: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.number.isRequired,
  onRemove: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  img: '',
  name: '',
  id: 0,
  onRemove: function onRemove(id, name, img) {}
}, _temp);

exports.default = SelectedItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/SelectedItem.js"); } } })();

/***/ }),

/***/ 713:
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

var _propTypes = __webpack_require__(96);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStickyEl = __webpack_require__(1210);

var _reactStickyEl2 = _interopRequireDefault(_reactStickyEl);

var _SelectedList = __webpack_require__(1513);

var _SelectedList2 = _interopRequireDefault(_SelectedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/index.js';

/**
*
* Loading
*
*/

var SelectedPanel = (_dec = (0, _mobxReact.inject)('store'), _dec2 = (0, _mobxReact.inject)('ui'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(SelectedPanel, _PureComponent);

  function SelectedPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectedPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectedPanel.__proto__ || (0, _getPrototypeOf2.default)(SelectedPanel)).call.apply(_ref, [this].concat(args))), _this), _this.onRemove = function (id, name, img) {
      _this.props.ui.toggleSelectTopic(false, id, name, img);
    }, _this.showSignUp = function () {
      _this.props.ui.toggleSignIn(true, 'Sign Up');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectedPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          total = _props.total;

      return _react2.default.createElement(_reactStickyEl2.default, { className: 'animated fadeInUp', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', { className: 'selected-panel', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('p', { className: 'text-engine', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'What kind of things are you interested in\u2026', total > 0 && _react2.default.createElement('div', { className: 'block-button', style: { textAlign: 'center', display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('button', { className: 'btn btn-login', onClick: this.showSignUp, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('i', { className: 'fa fa-sign-in', 'aria-hidden': 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), ' Ok! Let\u2019s go'))), items && items.length > 0 && _react2.default.createElement(_SelectedList2.default, { items: items, onRemove: this.onRemove, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })));
    }
  }]);

  return SelectedPanel;
}(_react.PureComponent), _class2.propTypes = {
  total: _propTypes2.default.number.isRequired,
  items: _propTypes2.default.array.isRequired
}, _class2.defaultProps = {
  total: 0,
  items: []
}, _temp2)) || _class) || _class) || _class);

exports.default = SelectedPanel;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dom/src/MAOMAO/mm_web_app/components/SelectedPanel/index.js"); } } })();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLy0tLS0tLWNvbXBvbmVudHMtU2VsZWN0ZWRQYW5lbC0wZjIxNGI0ZC0xMThiLTRjN2EtYmMxMy00YmMzZjdiMWQ3MzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LWVsL2xpYi9pbmRleC5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktZWwvbGliL3N0aWNreS5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktZWwvbGliL2hlbHBlcnMvZXZlbnRzLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS1lbC9saWIvaGVscGVycy9maW5kLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jbGFzcy9pbmRleC5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvbWl4aW5zL2hlbHBlcnMuanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL21peGlucy90cmFja0hlbHBlci5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvZGVmYXVsdC1wcm9wcy5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9VdGlsLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL1NlbGVjdGVkTGlzdC5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5kZXguanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL3NsaWRlci5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5uZXItc2xpZGVyLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9taXhpbnMvZXZlbnQtaGFuZGxlcnMuanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL2luaXRpYWwtc3RhdGUuanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL3RyYWNrLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9kb3RzLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9hcnJvd3MuanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpbmctY29udmVydC9jYW1lbDJoeXBoZW4uanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FuLXVzZS1kb20vaW5kZXguanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvaW5kZXguanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL01lZGlhUXVlcnkuanM/NDMzYTEzMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvUXVlcnlIYW5kbGVyLmpzPzQzM2ExMzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL1NlbGVjdGVkSXRlbS5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VsZWN0ZWRQYW5lbC9pbmRleC5qcz80MzNhMTMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zdGlja3kgPSByZXF1aXJlKCcuL3N0aWNreScpO1xuXG52YXIgX3N0aWNreTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGlja3kpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfc3RpY2t5Mi5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LWVsL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoJy4vaGVscGVycy9ldmVudHMnKTtcblxudmFyIF9maW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2ZpbmQnKTtcblxudmFyIF9maW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpbmQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdGlja3lPd25Qcm9wcyA9IFsnbW9kZScsICdzdGlja3lTdHlsZScsICdzdGlja3lDbGFzc05hbWUnLCAnYm91bmRhcnlFbGVtZW50JywgJ3Njcm9sbEVsZW1lbnQnLCAnYm90dG9tT2Zmc2V0JywgJ3RvcE9mZnNldCcsICdwb3NpdGlvblJlY2hlY2tJbnRlcnZhbCcsICdub0V4Y2VwdGlvbk9uTWlzc2VkU2Nyb2xsRWxlbWVudCcsICd3cmFwcGVyQ21wJywgJ2hvbGRlckNtcCcsICdoaWRlT25Cb3VuZGFyeUhpdCcsICdob2xkZXJQcm9wcyddO1xuXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwob2JqMSwgb2JqMikge1xuICBmb3IgKHZhciBmaWVsZCBpbiBvYmoxKSB7XG4gICAgaWYgKG9iajEuaGFzT3duUHJvcGVydHkoZmllbGQpICYmIG9iajFbZmllbGRdICE9PSBvYmoyW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIFN0aWNreSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdGlja3ksIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0aWNreShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGlja3kpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0aWNreS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0aWNreSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmNyZWF0ZVdyYXBwZXJSZWYgPSBmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgX3RoaXMud3JhcHBlckVsID0gd3JhcHBlcjtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlSG9sZGVyUmVmID0gZnVuY3Rpb24gKGhvbGRlcikge1xuICAgICAgX3RoaXMuaG9sZGVyRWwgPSBob2xkZXI7XG4gICAgfTtcblxuICAgIF90aGlzLmNoZWNrUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaG9sZGVyRWwgPSBfdGhpcy5ob2xkZXJFbDtcbiAgICAgIHZhciB3cmFwcGVyRWwgPSBfdGhpcy53cmFwcGVyRWw7XG4gICAgICB2YXIgYm91bmRhcnlFbGVtZW50ID0gX3RoaXMuYm91bmRhcnlFbGVtZW50O1xuICAgICAgdmFyIHNjcm9sbEVsZW1lbnQgPSBfdGhpcy5zY3JvbGxFbGVtZW50O1xuXG5cbiAgICAgIHZhciBob2xkZXJSZWN0ID0gaG9sZGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgd3JhcHBlclJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRhcnlSZWN0ID0gYm91bmRhcnlFbGVtZW50ID8gZ2V0UmVjdChib3VuZGFyeUVsZW1lbnQpIDogeyB0b3A6IC1JbmZpbml0eSwgYm90dG9tOiBJbmZpbml0eSB9LFxuICAgICAgICAgIHNjcm9sbFJlY3QgPSBnZXRSZWN0KHNjcm9sbEVsZW1lbnQpLFxuICAgICAgICAgIGlzRml4ZWQgPSBfdGhpcy5pc0ZpeGVkKGhvbGRlclJlY3QsIHdyYXBwZXJSZWN0LCBib3VuZGFyeVJlY3QsIHNjcm9sbFJlY3QpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpeGVkOiBpc0ZpeGVkLFxuICAgICAgICBib3VuZGFyeVRvcDogYm91bmRhcnlSZWN0LnRvcCxcbiAgICAgICAgYm91bmRhcnlCb3R0b206IGJvdW5kYXJ5UmVjdC5ib3R0b20sXG4gICAgICAgIHRvcDogc2Nyb2xsUmVjdC50b3AsXG4gICAgICAgIGJvdHRvbTogc2Nyb2xsUmVjdC5ib3R0b20sXG4gICAgICAgIHdpZHRoOiBob2xkZXJSZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdyYXBwZXJSZWN0LmhlaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RpY2t5LCBbe1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuUHJvcHMsIG5TdGF0ZSkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiAhaXNFcXVhbChzdGF0ZSwgblN0YXRlKSB8fCAhaXNFcXVhbChwcm9wcywgblByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIG1lID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYm91bmRhcnlFbGVtZW50ID0gX3Byb3BzLmJvdW5kYXJ5RWxlbWVudDtcbiAgICAgIHZhciBzY3JvbGxFbGVtZW50ID0gX3Byb3BzLnNjcm9sbEVsZW1lbnQ7XG4gICAgICB2YXIgbm9FeGNlcHRpb25Pbk1pc3NlZFNjcm9sbEVsZW1lbnQgPSBfcHJvcHMubm9FeGNlcHRpb25Pbk1pc3NlZFNjcm9sbEVsZW1lbnQ7XG4gICAgICB2YXIgcG9zaXRpb25SZWNoZWNrSW50ZXJ2YWwgPSBfcHJvcHMucG9zaXRpb25SZWNoZWNrSW50ZXJ2YWw7XG5cblxuICAgICAgdGhpcy5ib3VuZGFyeUVsZW1lbnQgPSAoMCwgX2ZpbmQyLmRlZmF1bHQpKGJvdW5kYXJ5RWxlbWVudCwgbWUpO1xuICAgICAgaWYgKHRoaXMuYm91bmRhcnlFbGVtZW50ID09PSB3aW5kb3cgfHwgdGhpcy5ib3VuZGFyeUVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgIC8vIHN1Y2ggb2JqZWN0cyBjYW4ndCBiZSB1c2VkIGFzIGJvdW5kYXJ5XG4gICAgICAgIC8vIGFuZCBpbiBmYWN0IHRoZXJlIGlzIG5vIHBvaW50IGluIHN1Y2ggYSBjYXNlXG4gICAgICAgIHRoaXMuYm91bmRhcnlFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50ID0gKDAsIF9maW5kMi5kZWZhdWx0KShzY3JvbGxFbGVtZW50LCBtZSk7XG5cbiAgICAgIGlmICh0aGlzLnNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgKDAsIF9ldmVudHMubGlzdGVuKSh0aGlzLnNjcm9sbEVsZW1lbnQsIFsnc2Nyb2xsJ10sIHRoaXMuY2hlY2tQb3NpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKCFub0V4Y2VwdGlvbk9uTWlzc2VkU2Nyb2xsRWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIHNjcm9sbEVsZW1lbnQgJyArIHNjcm9sbEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2V2ZW50cy5saXN0ZW4pKHdpbmRvdywgWydzY3JvbGwnLCAncmVzaXplJywgJ3BhZ2VzaG93JywgJ2xvYWQnXSwgdGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpO1xuXG4gICAgICBpZiAocG9zaXRpb25SZWNoZWNrSW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuY2hlY2tQb3NpdGlvbiwgcG9zaXRpb25SZWNoZWNrSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxFbGVtZW50KSB7XG4gICAgICAgICgwLCBfZXZlbnRzLnVubGlzdGVuKSh0aGlzLnNjcm9sbEVsZW1lbnQsIFsnc2Nyb2xsJ10sIHRoaXMuY2hlY2tQb3NpdGlvbik7XG4gICAgICB9XG4gICAgICAoMCwgX2V2ZW50cy51bmxpc3Rlbikod2luZG93LCBbJ3Njcm9sbCcsICdyZXNpemUnLCAncGFnZXNob3cnLCAnbG9hZCddLCB0aGlzLmNoZWNrUG9zaXRpb24pO1xuICAgICAgdGhpcy5ib3VuZGFyeUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoZWNrUG9zaXRpb25JbnRlcnZhbElkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0ZpeGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNGaXhlZChob2xkZXJSZWN0LCB3cmFwcGVyUmVjdCwgYm91bmRhcnlSZWN0LCBzY3JvbGxSZWN0KSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaGlkZU9uQm91bmRhcnlIaXQgPSBfcHJvcHMyLmhpZGVPbkJvdW5kYXJ5SGl0O1xuICAgICAgdmFyIGJvdHRvbU9mZnNldCA9IF9wcm9wczIuYm90dG9tT2Zmc2V0O1xuICAgICAgdmFyIHRvcE9mZnNldCA9IF9wcm9wczIudG9wT2Zmc2V0O1xuICAgICAgdmFyIG1vZGUgPSBfcHJvcHMyLm1vZGU7XG5cblxuICAgICAgaWYgKGJvdW5kYXJ5UmVjdCAmJiAhaW5zdGVyc2VjdChib3VuZGFyeVJlY3QsIHNjcm9sbFJlY3QsIHRvcE9mZnNldCwgYm90dG9tT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlT2Zmc2V0ID0gaGlkZU9uQm91bmRhcnlIaXQgPyB3cmFwcGVyUmVjdC5oZWlnaHQgKyBib3R0b21PZmZzZXQgOiAwO1xuXG4gICAgICBpZiAobW9kZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgcmV0dXJuIGhvbGRlclJlY3QudG9wICsgdG9wT2Zmc2V0IDwgc2Nyb2xsUmVjdC50b3AgJiYgc2Nyb2xsUmVjdC50b3AgKyBoaWRlT2Zmc2V0IDw9IGJvdW5kYXJ5UmVjdC5ib3R0b207XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBob2xkZXJSZWN0LmJvdHRvbSAtIHRvcE9mZnNldCA+IHNjcm9sbFJlY3QuYm90dG9tICYmIHNjcm9sbFJlY3QuYm90dG9tIC0gaGlkZU9mZnNldCA+PSBib3VuZGFyeVJlY3QudG9wO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J1aWxkVG9wU3R5bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRUb3BTdHlsZXMoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYm90dG9tT2Zmc2V0ID0gX3Byb3BzMy5ib3R0b21PZmZzZXQ7XG4gICAgICB2YXIgaGlkZU9uQm91bmRhcnlIaXQgPSBfcHJvcHMzLmhpZGVPbkJvdW5kYXJ5SGl0O1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgdG9wID0gX3N0YXRlLnRvcDtcbiAgICAgIHZhciBoZWlnaHQgPSBfc3RhdGUuaGVpZ2h0O1xuICAgICAgdmFyIGJvdW5kYXJ5Qm90dG9tID0gX3N0YXRlLmJvdW5kYXJ5Qm90dG9tO1xuXG5cbiAgICAgIGlmIChoaWRlT25Cb3VuZGFyeUhpdCB8fCB0b3AgKyBoZWlnaHQgKyBib3R0b21PZmZzZXQgPCBib3VuZGFyeUJvdHRvbSkge1xuICAgICAgICByZXR1cm4geyB0b3A6IHRvcCwgcG9zaXRpb246ICdmaXhlZCcgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgYm90dG9tOiBib3R0b21PZmZzZXQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYnVpbGRCb3R0b21TdHlsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEJvdHRvbVN0eWxlcygpIHtcbiAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBib3R0b21PZmZzZXQgPSBfcHJvcHM0LmJvdHRvbU9mZnNldDtcbiAgICAgIHZhciBoaWRlT25Cb3VuZGFyeUhpdCA9IF9wcm9wczQuaGlkZU9uQm91bmRhcnlIaXQ7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgYm90dG9tID0gX3N0YXRlMi5ib3R0b207XG4gICAgICB2YXIgaGVpZ2h0ID0gX3N0YXRlMi5oZWlnaHQ7XG4gICAgICB2YXIgYm91bmRhcnlUb3AgPSBfc3RhdGUyLmJvdW5kYXJ5VG9wO1xuXG5cbiAgICAgIGlmIChoaWRlT25Cb3VuZGFyeUhpdCB8fCBib3R0b20gLSBoZWlnaHQgLSBib3R0b21PZmZzZXQgPiBib3VuZGFyeVRvcCkge1xuICAgICAgICByZXR1cm4geyB0b3A6IGJvdHRvbSAtIGhlaWdodCwgcG9zaXRpb246ICdmaXhlZCcgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgdG9wOiBib3R0b21PZmZzZXQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYnVpbGRTdGlja3lTdHlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkU3RpY2t5U3R5bGUoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB2b2lkIDA7XG4gICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSAndG9wJykge1xuICAgICAgICBzdHlsZSA9IHRoaXMuYnVpbGRUb3BTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gdGhpcy5idWlsZEJvdHRvbVN0eWxlcygpO1xuICAgICAgfVxuICAgICAgc3R5bGUud2lkdGggPSB0aGlzLnN0YXRlLndpZHRoO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBfc3RhdGUzID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBmaXhlZCA9IF9zdGF0ZTMuZml4ZWQ7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3N0YXRlMy5oZWlnaHQ7XG4gICAgICB2YXIgc3RpY2t5Q2xhc3NOYW1lID0gcHJvcHMuc3RpY2t5Q2xhc3NOYW1lO1xuICAgICAgdmFyIHN0aWNreVN0eWxlID0gcHJvcHMuc3RpY2t5U3R5bGU7XG4gICAgICB2YXIgaG9sZGVyQ21wID0gcHJvcHMuaG9sZGVyQ21wO1xuICAgICAgdmFyIHdyYXBwZXJDbXAgPSBwcm9wcy53cmFwcGVyQ21wO1xuICAgICAgdmFyIGhvbGRlclByb3BzID0gcHJvcHMuaG9sZGVyUHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgdmFyIHdyYXBwZXJQcm9wcyA9IHNhbml0aXplUHJvcHMocHJvcHMsIHN0aWNreU93blByb3BzKTtcbiAgICAgIC8vIFRvIGVuc3VyZSB0aGF0IHRoaXMgY29tcG9uZW50IGJlY29tZXMgc3RpY2t5IGltbWVkaWF0ZWx5IG9uIG1vYmlsZSBkZXZpY2VzIGluc3RlYWRcbiAgICAgIC8vIG9mIGRpc2FwcGVhcmluZyB1bnRpbCB0aGUgc2Nyb2xsIGV2ZW50IGNvbXBsZXRlcywgd2UgYWRkIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClgXG4gICAgICAvLyB0byAna2ljaycgcmVuZGVyaW5nIG9mIHRoaXMgZWxlbWVudCB0byB0aGUgR1BVXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzI4NzUwNDZcbiAgICAgIHZhciB3cmFwcGVyU3R5bGUgPSB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknLCBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJyB9O1xuICAgICAgaWYgKHdyYXBwZXJQcm9wcy5zdHlsZSkge1xuICAgICAgICB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgd3JhcHBlclN0eWxlLCB3cmFwcGVyUHJvcHMuc3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgd3JhcHBlclByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBzdGlja3lDbGFzc05hbWU7XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IF9leHRlbmRzKHt9LCB3cmFwcGVyU3R5bGUsIHN0aWNreVN0eWxlLCB0aGlzLmJ1aWxkU3RpY2t5U3R5bGUoKSk7XG4gICAgICB9XG5cbiAgICAgIGhvbGRlclByb3BzLnN0eWxlID0gX2V4dGVuZHMoe30sIGhvbGRlclByb3BzLnN0eWxlLCB7IG1pbkhlaWdodDogaGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgIGhvbGRlclByb3BzLnJlZiA9IHRoaXMuY3JlYXRlSG9sZGVyUmVmO1xuXG4gICAgICB3cmFwcGVyUHJvcHMuc3R5bGUgPSB3cmFwcGVyU3R5bGU7XG4gICAgICB3cmFwcGVyUHJvcHMucmVmID0gdGhpcy5jcmVhdGVXcmFwcGVyUmVmO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaG9sZGVyQ21wLCBob2xkZXJQcm9wcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQod3JhcHBlckNtcCwgd3JhcHBlclByb3BzLCBjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGlja3k7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG4vLyBzb21lIGhlbHBlcnNcblxuU3RpY2t5LnByb3BUeXBlcyA9IHtcbiAgbW9kZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIHN0aWNreVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgc3RpY2t5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaGlkZU9uQm91bmRhcnlIaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYm91bmRhcnlFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2Nyb2xsRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJvdHRvbU9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRvcE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHBvc2l0aW9uUmVjaGVja0ludGVydmFsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbm9FeGNlcHRpb25Pbk1pc3NlZFNjcm9sbEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgd3JhcHBlckNtcDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKSxcbiAgaG9sZGVyQ21wOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY10pLFxuICBob2xkZXJQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5TdGlja3kuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge30sXG4gIG1vZGU6ICd0b3AnLFxuICBob2xkZXJDbXA6ICdkaXYnLFxuICBob2xkZXJQcm9wczoge30sXG4gIHdyYXBwZXJDbXA6ICdkaXYnLFxuICBzdGlja3lDbGFzc05hbWU6ICdzdGlja3knLFxuICBzdGlja3lTdHlsZTogbnVsbCxcbiAgaGlkZU9uQm91bmRhcnlIaXQ6IHRydWUsXG4gIGJvdW5kYXJ5RWxlbWVudDogbnVsbCxcbiAgc2Nyb2xsRWxlbWVudDogJ3dpbmRvdycsXG4gIHRvcE9mZnNldDogMCxcbiAgYm90dG9tT2Zmc2V0OiAwLFxuICBub0V4Y2VwdGlvbk9uTWlzc2VkU2Nyb2xsRWxlbWVudDogZmFsc2UsXG4gIHBvc2l0aW9uUmVjaGVja0ludGVydmFsOiAwXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU3RpY2t5O1xuZnVuY3Rpb24gZ2V0UmVjdChlbCkge1xuICBpZiAoZWwgJiYgdHlwZW9mIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIGlmIChlbCA9PT0gd2luZG93IHx8IGVsID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG59XG5cbmZ1bmN0aW9uIGluc3RlcnNlY3QocjEsIHIyLCB0b3BPZmZzZXQsIGJvdHRvbU9mZnNldCkge1xuICB2YXIgcjFUb3AgPSByMS50b3AgKyB0b3BPZmZzZXQsXG4gICAgICByMUJvdHRvbSA9IHIxLmJvdHRvbSArIGJvdHRvbU9mZnNldDtcblxuICByZXR1cm4gcjFUb3AgPj0gcjIudG9wICYmIHIxVG9wIDw9IHIyLmJvdHRvbSB8fCByMUJvdHRvbSA+PSByMi50b3AgJiYgcjFCb3R0b20gPD0gcjIuYm90dG9tIHx8IHIxQm90dG9tID49IHIyLmJvdHRvbSAmJiByMVRvcCA8PSByMi50b3A7XG59XG5cbi8qKlxuICogU2ltcGx5IHJlbW92ZXMgYWxsIHVud2FudGVkIHByb3BzIGluIG9yZGVyIHRvIGF2b2lkIHJlYWN0ICd1bmtvd24gcHJvcCcgd2FybmluZ1xuICogQHBhcmFtICB7T2JqZWN0fSBwcm9wcyAgICAgdGhhdCBzaG91bGQgYmUgc2FuaXRpemVkXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRvUmVtb3ZlICBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIHJlbW92ZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgY2xvbmVkIGFuZCBzYW5pdGl6ZWQgcHJvcHNcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVQcm9wcyhwcm9wcywgdG9SZW1vdmUpIHtcbiAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRvUmVtb3ZlLmxlbmd0aDsgaSA8IGw7IGkgKz0gMSkge1xuICAgIGRlbGV0ZSBwcm9wc1t0b1JlbW92ZVtpXV07XG4gIH1cbiAgcmV0dXJuIHByb3BzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LWVsL2xpYi9zdGlja3kuanNcbi8vIG1vZHVsZSBpZCA9IDEyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5saXN0ZW4gPSBsaXN0ZW47XG5leHBvcnRzLnVubGlzdGVuID0gdW5saXN0ZW47XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTbWFsbCBoZWxwZXJzIHRoYXQgcHJvdmlkZSBhbiBlYXN5IGFuZCBlZmZlY2llbnQgd2F5IHRvIGFkZC9yZW1vdmUgZXZlbnQgbGlzdGVuZXJzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBlbGVtZW50c1dpdGhMaXN0ZW5lcnMgPSBbXSxcbiAgICByZWdpc3RlcmVkTGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsLCBldmVudCwgY2IpIHtcbiAgdmFyIGlkeCA9IGVsZW1lbnRzV2l0aExpc3RlbmVycy5pbmRleE9mKGVsKTtcbiAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICBpZHggPSBlbGVtZW50c1dpdGhMaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGVsZW1lbnRzV2l0aExpc3RlbmVycy5wdXNoKGVsKTtcbiAgICByZWdpc3RlcmVkTGlzdGVuZXJzLnB1c2goeyBlbDogZWwsIHRvdGFsQ291bnQ6IDAgfSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1tpZHhdLFxuICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbZXZlbnRdO1xuXG4gIGlmICghbGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tldmVudF0gPSB7IGNhbGxiYWNrczogW10gfTtcbiAgICBsaXN0ZW5lci5jYiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVyLmNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpICs9IDEpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2tzW2ldKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgbGlzdGVuZXJzLnRvdGFsQ291bnQgKz0gMTtcbiAgICBsaXN0ZW5lcnMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIuY2IpO1xuICB9XG5cbiAgLy8ganVzdCB0byBwcmV2ZW50IGRvdWJsZSBsaXN0ZW5lcnNcbiAgaWYgKGxpc3RlbmVyLmNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsaXN0ZW5lci5jYWxsYmFja3MucHVzaChjYik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGVsLCBldmVudCwgY2IpIHtcbiAgdmFyIGlkeCA9IGVsZW1lbnRzV2l0aExpc3RlbmVycy5pbmRleE9mKGVsKTtcbiAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1tpZHhdLFxuICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbZXZlbnRdLFxuICAgICAgY2FsbGJhY2tzID0gbGlzdGVuZXIgPyBsaXN0ZW5lci5jYWxsYmFja3MgOiBbXTtcblxuICBpZiAoIWxpc3RlbmVyIHx8IGNhbGxiYWNrcy5pbmRleE9mKGNiKSA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYWxsYmFja3Muc3BsaWNlKGNhbGxiYWNrcy5pbmRleE9mKGNiKSwgMSk7XG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxpc3RlbmVycy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lci5jYik7XG4gIGxpc3RlbmVycy50b3RhbENvdW50IC09IDE7XG4gIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMudG90YWxDb3VudCA+IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50c1dpdGhMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gIHJlZ2lzdGVyZWRMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG59XG5cbi8qKlxuICogU3Vic2NyaWJlIGNiIHRvIGV2ZW50cyBsaXN0XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gICBlbCAgICAgICB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgZXZlbnRzICAgYXJyYXkgb2YgZXZlbnQgbmFtZXNcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYiAgIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZFxuICovXG5mdW5jdGlvbiBsaXN0ZW4oZWwsIGV2ZW50cywgY2IpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgYWRkTGlzdGVuZXIoZWwsIGV2ZW50c1tpXSwgY2IpO1xuICB9XG59XG5cbi8qKlxuICogVW5zdWJzY3JpYmUgY2IgZnJvbSBldmVudHMgbGlzdFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICAgZWwgICAgICAgdGFyZ2V0IGVsZW1lbnRcbiAqIEBwYXJhbSAge0FycmF5fSAgICAgICAgIGV2ZW50cyAgIGFycmF5IG9mIGV2ZW50IG5hbWVzXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2IgICBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSB1bnN1YnNjcmliZWRcbiAqL1xuXG5mdW5jdGlvbiB1bmxpc3RlbihlbCwgZXZlbnRzLCBjYikge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsOyBpICs9IDEpIHtcbiAgICByZW1vdmVMaXN0ZW5lcihlbCwgZXZlbnRzW2ldLCBjYik7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktZWwvbGliL2hlbHBlcnMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kO1xudmFyIGJhc2ljU2VsZWN0b3JzID0ge307XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBiYXNpY1NlbGVjdG9ycy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgYmFzaWNTZWxlY3RvcnMud2luZG93ID0gd2luZG93O1xuICBiYXNpY1NlbGVjdG9ycy5kb2N1bWVudCA9IGRvY3VtZW50O1xufVxuXG52YXIgbWF0Y2hlc01ldGhvZE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHJldHVybiB0eXBlb2YgYm9keS5tYXRjaGVzID09PSAnZnVuY3Rpb24nID8gJ21hdGNoZXMnIDogdHlwZW9mIGJvZHkud2Via2l0TWF0Y2hlc1NlbGVjdG9yID09PSAnZnVuY3Rpb24nID8gJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicgOiAvL3dlYmtpdFxuICAgIHR5cGVvZiBib2R5Lm1vek1hdGNoZXNTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyA/ICdtb3pNYXRjaGVzU2VsZWN0b3InIDogLy9tb3ppbGxhXG4gICAgdHlwZW9mIGJvZHkubXNNYXRjaGVzU2VsZWN0b3IgPT09ICdmdW5jdGlvbicgPyAnbXNNYXRjaGVzU2VsZWN0b3InIDogLy9pZVxuICAgIHR5cGVvZiBib2R5Lm9NYXRjaGVzU2VsZWN0b3IgPT09ICdmdW5jdGlvbicgPyAnb01hdGNoZXNTZWxlY3RvcicgOiAvL29sZCBvcGVyYVxuICAgIG51bGw7XG4gIH1cbn0oKTtcblxuZnVuY3Rpb24gZmluZChzZWxlY3RvciwgZWwpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGJhc2ljU2VsZWN0b3JzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgIHJldHVybiBiYXNpY1NlbGVjdG9yc1tzZWxlY3Rvcl07XG4gIH1cblxuICAvLyBzZWxlY3QgYnkgaWRcbiAgaWYgKHNlbGVjdG9yWzBdID09PSAnIycpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICB9XG5cbiAgaWYgKCFtYXRjaGVzTWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gIHdoaWxlIChlbCA9IGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAoZWxbbWF0Y2hlc01ldGhvZE5hbWVdKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdGhpbmcgaGFzIGJlZW4gZm91bmQgOihcbiAgcmV0dXJuIG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktZWwvbGliL2hlbHBlcnMvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA5IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3J5Jyk7XG5cbmlmICh0eXBlb2YgUmVhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IEVycm9yKFxuICAgICdjcmVhdGUtcmVhY3QtY2xhc3MgY291bGQgbm90IGZpbmQgdGhlIFJlYWN0IG9iamVjdC4gSWYgeW91IGFyZSB1c2luZyBzY3JpcHQgdGFncywgJyArXG4gICAgICAnbWFrZSBzdXJlIHRoYXQgUmVhY3QgaXMgYmVpbmcgbG9hZGVkIGJlZm9yZSBjcmVhdGUtcmVhY3QtY2xhc3MuJ1xuICApO1xufVxuXG4vLyBIYWNrIHRvIGdyYWIgTm9vcFVwZGF0ZVF1ZXVlIGZyb20gaXNvbW9ycGhpYyBSZWFjdFxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gbmV3IFJlYWN0LkNvbXBvbmVudCgpLnVwZGF0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgUmVhY3QuQ29tcG9uZW50LFxuICBSZWFjdC5pc1ZhbGlkRWxlbWVudCxcbiAgUmVhY3ROb29wVXBkYXRlUXVldWVcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgOSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3RyYWNrSGVscGVyID0gcmVxdWlyZSgnLi90cmFja0hlbHBlcicpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhlbHBlcnMgPSB7XG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUocHJvcHMpIHtcbiAgICB2YXIgc2xpY2tMaXN0ID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMubGlzdCk7XG5cbiAgICB2YXIgc2xpZGVDb3VudCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIGxpc3RXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoc2xpY2tMaXN0KTtcbiAgICB2YXIgdHJhY2tXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMudHJhY2spKTtcbiAgICB2YXIgc2xpZGVXaWR0aDtcblxuICAgIGlmICghcHJvcHMudmVydGljYWwpIHtcbiAgICAgIHZhciBjZW50ZXJQYWRkaW5nQWRqID0gcHJvcHMuY2VudGVyTW9kZSAmJiBwYXJzZUludChwcm9wcy5jZW50ZXJQYWRkaW5nKSAqIDI7XG4gICAgICBzbGlkZVdpZHRoID0gKHRoaXMuZ2V0V2lkdGgoX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpKSAtIGNlbnRlclBhZGRpbmdBZGopIC8gcHJvcHMuc2xpZGVzVG9TaG93O1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVdpZHRoID0gdGhpcy5nZXRXaWR0aChfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpO1xuICAgIH1cblxuICAgIHZhciBzbGlkZUhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KHNsaWNrTGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbmRleD1cIjBcIl0nKSk7XG4gICAgdmFyIGxpc3RIZWlnaHQgPSBzbGlkZUhlaWdodCAqIHByb3BzLnNsaWRlc1RvU2hvdztcblxuICAgIHZhciBjdXJyZW50U2xpZGUgPSBwcm9wcy5ydGwgPyBzbGlkZUNvdW50IC0gMSAtIHByb3BzLmluaXRpYWxTbGlkZSA6IHByb3BzLmluaXRpYWxTbGlkZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVDb3VudDogc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlV2lkdGg6IHNsaWRlV2lkdGgsXG4gICAgICBsaXN0V2lkdGg6IGxpc3RXaWR0aCxcbiAgICAgIHRyYWNrV2lkdGg6IHRyYWNrV2lkdGgsXG4gICAgICBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSxcbiAgICAgIHNsaWRlSGVpZ2h0OiBzbGlkZUhlaWdodCxcbiAgICAgIGxpc3RIZWlnaHQ6IGxpc3RIZWlnaHRcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciB0YXJnZXRMZWZ0ID0gKDAsIF90cmFja0hlbHBlci5nZXRUcmFja0xlZnQpKCgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHNsaWRlSW5kZXg6IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlLFxuICAgICAgICB0cmFja1JlZjogdGhpcy50cmFja1xuICAgICAgfSwgcHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICAgIC8vIGdldENTUyBmdW5jdGlvbiBuZWVkcyBwcmV2aW91c2x5IHNldCBzdGF0ZVxuICAgICAgdmFyIHRyYWNrU3R5bGUgPSAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrQ1NTKSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoeyBsZWZ0OiB0YXJnZXRMZWZ0IH0sIHByb3BzLCB0aGlzLnN0YXRlKSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFja1N0eWxlOiB0cmFja1N0eWxlIH0pO1xuXG4gICAgICB0aGlzLmF1dG9QbGF5KCk7IC8vIG9uY2Ugd2UncmUgc2V0IHVwLCB0cmlnZ2VyIHRoZSBpbml0aWFsIGF1dG9wbGF5LlxuICAgIH0pO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcykge1xuICAgIHZhciBzbGlja0xpc3QgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5saXN0KTtcbiAgICAvLyBUaGlzIG1ldGhvZCBoYXMgbW9zdGx5IHNhbWUgY29kZSBhcyBpbml0aWFsaXplIG1ldGhvZC5cbiAgICAvLyBSZWZhY3RvciBpdFxuICAgIHZhciBzbGlkZUNvdW50ID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgbGlzdFdpZHRoID0gdGhpcy5nZXRXaWR0aChzbGlja0xpc3QpO1xuICAgIHZhciB0cmFja1dpZHRoID0gdGhpcy5nZXRXaWR0aChfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy50cmFjaykpO1xuICAgIHZhciBzbGlkZVdpZHRoO1xuXG4gICAgaWYgKCFwcm9wcy52ZXJ0aWNhbCkge1xuICAgICAgdmFyIGNlbnRlclBhZGRpbmdBZGogPSBwcm9wcy5jZW50ZXJNb2RlICYmIHBhcnNlSW50KHByb3BzLmNlbnRlclBhZGRpbmcpICogMjtcbiAgICAgIHNsaWRlV2lkdGggPSAodGhpcy5nZXRXaWR0aChfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpIC0gY2VudGVyUGFkZGluZ0FkaikgLyBwcm9wcy5zbGlkZXNUb1Nob3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlV2lkdGggPSB0aGlzLmdldFdpZHRoKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHNsaWRlSGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoc2xpY2tMaXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWluZGV4PVwiMFwiXScpKTtcbiAgICB2YXIgbGlzdEhlaWdodCA9IHNsaWRlSGVpZ2h0ICogcHJvcHMuc2xpZGVzVG9TaG93O1xuXG4gICAgLy8gcGF1c2Ugc2xpZGVyIGlmIGF1dG9wbGF5IGlzIHNldCB0byBmYWxzZVxuICAgIGlmIChwcm9wcy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9QbGF5KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZUNvdW50OiBzbGlkZUNvdW50LFxuICAgICAgc2xpZGVXaWR0aDogc2xpZGVXaWR0aCxcbiAgICAgIGxpc3RXaWR0aDogbGlzdFdpZHRoLFxuICAgICAgdHJhY2tXaWR0aDogdHJhY2tXaWR0aCxcbiAgICAgIHNsaWRlSGVpZ2h0OiBzbGlkZUhlaWdodCxcbiAgICAgIGxpc3RIZWlnaHQ6IGxpc3RIZWlnaHRcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciB0YXJnZXRMZWZ0ID0gKDAsIF90cmFja0hlbHBlci5nZXRUcmFja0xlZnQpKCgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHNsaWRlSW5kZXg6IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlLFxuICAgICAgICB0cmFja1JlZjogdGhpcy50cmFja1xuICAgICAgfSwgcHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICAgIC8vIGdldENTUyBmdW5jdGlvbiBuZWVkcyBwcmV2aW91c2x5IHNldCBzdGF0ZVxuICAgICAgdmFyIHRyYWNrU3R5bGUgPSAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrQ1NTKSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoeyBsZWZ0OiB0YXJnZXRMZWZ0IH0sIHByb3BzLCB0aGlzLnN0YXRlKSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFja1N0eWxlOiB0cmFja1N0eWxlIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IGVsZW0ub2Zmc2V0V2lkdGggfHwgMDtcbiAgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiBnZXRIZWlnaHQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCAwO1xuICB9LFxuXG4gIGFkYXB0SGVpZ2h0OiBmdW5jdGlvbiBhZGFwdEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hZGFwdGl2ZUhlaWdodCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gJ1tkYXRhLWluZGV4PVwiJyArIHRoaXMuc3RhdGUuY3VycmVudFNsaWRlICsgJ1wiXSc7XG4gICAgICBpZiAodGhpcy5saXN0KSB7XG4gICAgICAgIHZhciBzbGlja0xpc3QgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5saXN0KTtcbiAgICAgICAgc2xpY2tMaXN0LnN0eWxlLmhlaWdodCA9IHNsaWNrTGlzdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2FuR29OZXh0OiBmdW5jdGlvbiBjYW5Hb05leHQob3B0cykge1xuICAgIHZhciBjYW5HbyA9IHRydWU7XG4gICAgaWYgKCFvcHRzLmluZmluaXRlKSB7XG4gICAgICBpZiAob3B0cy5jZW50ZXJNb2RlKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgc2xpZGUgaXMgbGFzdCBzbGlkZVxuICAgICAgICBpZiAob3B0cy5jdXJyZW50U2xpZGUgPj0gb3B0cy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgIGNhbkdvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGFsbCBzbGlkZXMgYXJlIHNob3duIGluIHNsaWRlclxuICAgICAgICBpZiAob3B0cy5zbGlkZUNvdW50IDw9IG9wdHMuc2xpZGVzVG9TaG93IHx8IG9wdHMuY3VycmVudFNsaWRlID49IG9wdHMuc2xpZGVDb3VudCAtIG9wdHMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgY2FuR28gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuR287XG4gIH0sXG4gIHNsaWRlSGFuZGxlcjogZnVuY3Rpb24gc2xpZGVIYW5kbGVyKGluZGV4KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIEZ1bmN0aW9uYWxpdHkgb2YgYW5pbWF0ZVNsaWRlIGFuZCBwb3N0U2xpZGUgaXMgbWVyZ2VkIGludG8gdGhpcyBmdW5jdGlvblxuICAgIC8vIGNvbnNvbGUubG9nKCdzbGlkZUhhbmRsZXInLCBpbmRleCk7XG4gICAgdmFyIHRhcmdldFNsaWRlLCBjdXJyZW50U2xpZGU7XG4gICAgdmFyIHRhcmdldExlZnQsIGN1cnJlbnRMZWZ0O1xuICAgIHZhciBjYWxsYmFjaztcblxuICAgIGlmICh0aGlzLnByb3BzLndhaXRGb3JBbmltYXRlICYmIHRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZmFkZSkge1xuICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG5cbiAgICAgIC8vIERvbid0IGNoYW5nZSBzbGlkZSBpZiBpdCdzIG5vdCBpbmZpdGUgYW5kIGN1cnJlbnQgc2xpZGUgaXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnN0YXRlLnNsaWRlQ291bnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gIFNoaWZ0aW5nIHRhcmdldFNsaWRlIGJhY2sgaW50byB0aGUgcmFuZ2VcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleCArIHRoaXMuc3RhdGUuc2xpZGVDb3VudDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gdGhpcy5zdGF0ZS5zbGlkZUNvdW50KSB7XG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXggLSB0aGlzLnN0YXRlLnNsaWRlQ291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXp5TG9hZCAmJiB0aGlzLnN0YXRlLmxhenlMb2FkZWRMaXN0LmluZGV4T2YodGFyZ2V0U2xpZGUpIDwgMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsYXp5TG9hZGVkTGlzdDogdGhpcy5zdGF0ZS5sYXp5TG9hZGVkTGlzdC5jb25jYXQodGFyZ2V0U2xpZGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmFmdGVyQ2hhbmdlKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMuYWZ0ZXJDaGFuZ2UodGFyZ2V0U2xpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaztcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYXRpbmc6IHRydWUsXG4gICAgICAgIGN1cnJlbnRTbGlkZTogdGFyZ2V0U2xpZGVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMucHJvcHMuc3BlZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmJlZm9yZUNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLmJlZm9yZUNoYW5nZSh0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSwgdGFyZ2V0U2xpZGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmF1dG9QbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNvdW50ICUgdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLnN0YXRlLnNsaWRlQ291bnQgLSB0aGlzLnN0YXRlLnNsaWRlQ291bnQgJSB0aGlzLnByb3BzLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5zdGF0ZS5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSB0aGlzLnN0YXRlLnNsaWRlQ291bnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLnN0YXRlLnNsaWRlQ291bnQgLSB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNvdW50ICUgdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGFyZ2V0U2xpZGUgLSB0aGlzLnN0YXRlLnNsaWRlQ291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgIH1cblxuICAgIHRhcmdldExlZnQgPSAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrTGVmdCkoKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgIHNsaWRlSW5kZXg6IHRhcmdldFNsaWRlLFxuICAgICAgdHJhY2tSZWY6IHRoaXMudHJhY2tcbiAgICB9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG5cbiAgICBjdXJyZW50TGVmdCA9ICgwLCBfdHJhY2tIZWxwZXIuZ2V0VHJhY2tMZWZ0KSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgc2xpZGVJbmRleDogY3VycmVudFNsaWRlLFxuICAgICAgdHJhY2tSZWY6IHRoaXMudHJhY2tcbiAgICB9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRhcmdldExlZnQgPSBjdXJyZW50TGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5iZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuYmVmb3JlQ2hhbmdlKHRoaXMuc3RhdGUuY3VycmVudFNsaWRlLCBjdXJyZW50U2xpZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICB2YXIgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZhciBzbGlkZXNUb0xvYWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSB0YXJnZXRTbGlkZTsgaSA8IHRhcmdldFNsaWRlICsgdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3c7IGkrKykge1xuICAgICAgICBsb2FkZWQgPSBsb2FkZWQgJiYgdGhpcy5zdGF0ZS5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKGkpID49IDA7XG4gICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgc2xpZGVzVG9Mb2FkLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxhenlMb2FkZWRMaXN0OiB0aGlzLnN0YXRlLmxhenlMb2FkZWRMaXN0LmNvbmNhdChzbGlkZXNUb0xvYWQpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNsaWRlIFRyYW5zaXRpb24gaGFwcGVucyBoZXJlLlxuICAgIC8vIGFuaW1hdGVkIHRyYW5zaXRpb24gaGFwcGVucyB0byB0YXJnZXQgU2xpZGUgYW5kXG4gICAgLy8gbm9uIC0gYW5pbWF0ZWQgdHJhbnNpdGlvbiBoYXBwZW5zIHRvIGN1cnJlbnQgU2xpZGVcbiAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIGZhbHNlLCBkaXJlY3RseSBnbyB0aGUgY3VycmVudCBzbGlkZS5cblxuICAgIGlmICh0aGlzLnByb3BzLnVzZUNTUyA9PT0gZmFsc2UpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlLFxuICAgICAgICB0cmFja1N0eWxlOiAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrQ1NTKSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoeyBsZWZ0OiBjdXJyZW50TGVmdCB9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSlcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWZ0ZXJDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2hhbmdlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciBuZXh0U3RhdGVDaGFuZ2VzID0ge1xuICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSxcbiAgICAgICAgdHJhY2tTdHlsZTogKDAsIF90cmFja0hlbHBlci5nZXRUcmFja0NTUykoKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHsgbGVmdDogY3VycmVudExlZnQgfSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpLFxuICAgICAgICBzd2lwZUxlZnQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKG5leHRTdGF0ZUNoYW5nZXMpO1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuYWZ0ZXJDaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5hZnRlckNoYW5nZShjdXJyZW50U2xpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjaztcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYXRpbmc6IHRydWUsXG4gICAgICAgIGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlLFxuICAgICAgICB0cmFja1N0eWxlOiAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrQW5pbWF0ZUNTUykoKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHsgbGVmdDogdGFyZ2V0TGVmdCB9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSlcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMucHJvcHMuc3BlZWQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdXRvUGxheSgpO1xuICB9LFxuICBzd2lwZURpcmVjdGlvbjogZnVuY3Rpb24gc3dpcGVEaXJlY3Rpb24odG91Y2hPYmplY3QpIHtcbiAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlO1xuXG4gICAgeERpc3QgPSB0b3VjaE9iamVjdC5zdGFydFggLSB0b3VjaE9iamVjdC5jdXJYO1xuICAgIHlEaXN0ID0gdG91Y2hPYmplY3Quc3RhcnRZIC0gdG91Y2hPYmplY3QuY3VyWTtcbiAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgIH1cbiAgICBpZiAoc3dpcGVBbmdsZSA8PSA0NSAmJiBzd2lwZUFuZ2xlID49IDAgfHwgc3dpcGVBbmdsZSA8PSAzNjAgJiYgc3dpcGVBbmdsZSA+PSAzMTUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH1cbiAgICBpZiAoc3dpcGVBbmdsZSA+PSAxMzUgJiYgc3dpcGVBbmdsZSA8PSAyMjUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgIGlmIChzd2lwZUFuZ2xlID49IDM1ICYmIHN3aXBlQW5nbGUgPD0gMTM1KSB7XG4gICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgfSxcbiAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICB2YXIgbmV4dEluZGV4O1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ydGwpIHtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlIC0gdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY2FuR29OZXh0KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSkpIHtcbiAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgKyB0aGlzLnByb3BzLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVIYW5kbGVyKG5leHRJbmRleCk7XG4gIH0sXG4gIGF1dG9QbGF5OiBmdW5jdGlvbiBhdXRvUGxheSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hdXRvUGxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS5hdXRvUGxheVRpbWVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b3BsYXkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdXRvUGxheVRpbWVyOiBzZXRUaW1lb3V0KHRoaXMucGxheSwgdGhpcy5wcm9wcy5hdXRvcGxheVNwZWVkKVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0b1BsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuYXV0b1BsYXlUaW1lcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBoZWxwZXJzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9taXhpbnMvaGVscGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMTI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldFRyYWNrTGVmdCA9IGV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZXhwb3J0cy5nZXRUcmFja0NTUyA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjaGVja1NwZWNLZXlzID0gZnVuY3Rpb24gY2hlY2tTcGVjS2V5cyhzcGVjLCBrZXlzQXJyYXkpIHtcbiAgcmV0dXJuIGtleXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgc3BlYy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LCB0cnVlKSA/IG51bGwgOiBjb25zb2xlLmVycm9yKCdLZXlzIE1pc3NpbmcnLCBzcGVjKTtcbn07XG5cbnZhciBnZXRUcmFja0NTUyA9IGV4cG9ydHMuZ2V0VHJhY2tDU1MgPSBmdW5jdGlvbiBnZXRUcmFja0NTUyhzcGVjKSB7XG4gIGNoZWNrU3BlY0tleXMoc3BlYywgWydsZWZ0JywgJ3ZhcmlhYmxlV2lkdGgnLCAnc2xpZGVDb3VudCcsICdzbGlkZXNUb1Nob3cnLCAnc2xpZGVXaWR0aCddKTtcblxuICB2YXIgdHJhY2tXaWR0aCwgdHJhY2tIZWlnaHQ7XG5cbiAgdmFyIHRyYWNrQ2hpbGRyZW4gPSBzcGVjLnNsaWRlQ291bnQgKyAyICogc3BlYy5zbGlkZXNUb1Nob3c7XG5cbiAgaWYgKCFzcGVjLnZlcnRpY2FsKSB7XG4gICAgaWYgKHNwZWMudmFyaWFibGVXaWR0aCkge1xuICAgICAgdHJhY2tXaWR0aCA9IChzcGVjLnNsaWRlQ291bnQgKyAyICogc3BlYy5zbGlkZXNUb1Nob3cpICogc3BlYy5zbGlkZVdpZHRoO1xuICAgIH0gZWxzZSBpZiAoc3BlYy5jZW50ZXJNb2RlKSB7XG4gICAgICB0cmFja1dpZHRoID0gKHNwZWMuc2xpZGVDb3VudCArIDIgKiAoc3BlYy5zbGlkZXNUb1Nob3cgKyAxKSkgKiBzcGVjLnNsaWRlV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrV2lkdGggPSAoc3BlYy5zbGlkZUNvdW50ICsgMiAqIHNwZWMuc2xpZGVzVG9TaG93KSAqIHNwZWMuc2xpZGVXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tIZWlnaHQgPSB0cmFja0NoaWxkcmVuICogc3BlYy5zbGlkZUhlaWdodDtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIFdlYmtpdFRyYW5zZm9ybTogIXNwZWMudmVydGljYWwgPyAndHJhbnNsYXRlM2QoJyArIHNwZWMubGVmdCArICdweCwgMHB4LCAwcHgpJyA6ICd0cmFuc2xhdGUzZCgwcHgsICcgKyBzcGVjLmxlZnQgKyAncHgsIDBweCknLFxuICAgIHRyYW5zZm9ybTogIXNwZWMudmVydGljYWwgPyAndHJhbnNsYXRlM2QoJyArIHNwZWMubGVmdCArICdweCwgMHB4LCAwcHgpJyA6ICd0cmFuc2xhdGUzZCgwcHgsICcgKyBzcGVjLmxlZnQgKyAncHgsIDBweCknLFxuICAgIHRyYW5zaXRpb246ICcnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICcnLFxuICAgIG1zVHJhbnNmb3JtOiAhc3BlYy52ZXJ0aWNhbCA/ICd0cmFuc2xhdGVYKCcgKyBzcGVjLmxlZnQgKyAncHgpJyA6ICd0cmFuc2xhdGVZKCcgKyBzcGVjLmxlZnQgKyAncHgpJ1xuICB9O1xuXG4gIGlmICh0cmFja1dpZHRoKSB7XG4gICAgKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHN0eWxlLCB7IHdpZHRoOiB0cmFja1dpZHRoIH0pO1xuICB9XG5cbiAgaWYgKHRyYWNrSGVpZ2h0KSB7XG4gICAgKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHN0eWxlLCB7IGhlaWdodDogdHJhY2tIZWlnaHQgfSk7XG4gIH1cblxuICAvLyBGYWxsYmFjayBmb3IgSUU4XG4gIGlmICh3aW5kb3cgJiYgIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgIGlmICghc3BlYy52ZXJ0aWNhbCkge1xuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9IHNwZWMubGVmdCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLm1hcmdpblRvcCA9IHNwZWMubGVmdCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufTtcblxudmFyIGdldFRyYWNrQW5pbWF0ZUNTUyA9IGV4cG9ydHMuZ2V0VHJhY2tBbmltYXRlQ1NTID0gZnVuY3Rpb24gZ2V0VHJhY2tBbmltYXRlQ1NTKHNwZWMpIHtcbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbJ2xlZnQnLCAndmFyaWFibGVXaWR0aCcsICdzbGlkZUNvdW50JywgJ3NsaWRlc1RvU2hvdycsICdzbGlkZVdpZHRoJywgJ3NwZWVkJywgJ2Nzc0Vhc2UnXSk7XG5cbiAgdmFyIHN0eWxlID0gZ2V0VHJhY2tDU1Moc3BlYyk7XG4gIC8vIHVzZUNTUyBpcyB0cnVlIGJ5IGRlZmF1bHQgc28gaXQgY2FuIGJlIHVuZGVmaW5lZFxuICBzdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gJy13ZWJraXQtdHJhbnNmb3JtICcgKyBzcGVjLnNwZWVkICsgJ21zICcgKyBzcGVjLmNzc0Vhc2U7XG4gIHN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyBzcGVjLnNwZWVkICsgJ21zICcgKyBzcGVjLmNzc0Vhc2U7XG4gIHJldHVybiBzdHlsZTtcbn07XG5cbnZhciBnZXRUcmFja0xlZnQgPSBleHBvcnRzLmdldFRyYWNrTGVmdCA9IGZ1bmN0aW9uIGdldFRyYWNrTGVmdChzcGVjKSB7XG5cbiAgY2hlY2tTcGVjS2V5cyhzcGVjLCBbJ3NsaWRlSW5kZXgnLCAndHJhY2tSZWYnLCAnaW5maW5pdGUnLCAnY2VudGVyTW9kZScsICdzbGlkZUNvdW50JywgJ3NsaWRlc1RvU2hvdycsICdzbGlkZXNUb1Njcm9sbCcsICdzbGlkZVdpZHRoJywgJ2xpc3RXaWR0aCcsICd2YXJpYWJsZVdpZHRoJywgJ3NsaWRlSGVpZ2h0J10pO1xuXG4gIHZhciBzbGlkZU9mZnNldCA9IDA7XG4gIHZhciB0YXJnZXRMZWZ0O1xuICB2YXIgdGFyZ2V0U2xpZGU7XG4gIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG5cbiAgaWYgKHNwZWMuZmFkZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKHNwZWMuaW5maW5pdGUpIHtcbiAgICBpZiAoc3BlYy5zbGlkZUNvdW50ID49IHNwZWMuc2xpZGVzVG9TaG93KSB7XG4gICAgICBzbGlkZU9mZnNldCA9IHNwZWMuc2xpZGVXaWR0aCAqIHNwZWMuc2xpZGVzVG9TaG93ICogLTE7XG4gICAgICB2ZXJ0aWNhbE9mZnNldCA9IHNwZWMuc2xpZGVIZWlnaHQgKiBzcGVjLnNsaWRlc1RvU2hvdyAqIC0xO1xuICAgIH1cbiAgICBpZiAoc3BlYy5zbGlkZUNvdW50ICUgc3BlYy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgaWYgKHNwZWMuc2xpZGVJbmRleCArIHNwZWMuc2xpZGVzVG9TY3JvbGwgPiBzcGVjLnNsaWRlQ291bnQgJiYgc3BlYy5zbGlkZUNvdW50ID4gc3BlYy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgaWYgKHNwZWMuc2xpZGVJbmRleCA+IHNwZWMuc2xpZGVDb3VudCkge1xuICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gKHNwZWMuc2xpZGVzVG9TaG93IC0gKHNwZWMuc2xpZGVJbmRleCAtIHNwZWMuc2xpZGVDb3VudCkpICogc3BlYy5zbGlkZVdpZHRoICogLTE7XG4gICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoc3BlYy5zbGlkZXNUb1Nob3cgLSAoc3BlYy5zbGlkZUluZGV4IC0gc3BlYy5zbGlkZUNvdW50KSkgKiBzcGVjLnNsaWRlSGVpZ2h0ICogLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVPZmZzZXQgPSBzcGVjLnNsaWRlQ291bnQgJSBzcGVjLnNsaWRlc1RvU2Nyb2xsICogc3BlYy5zbGlkZVdpZHRoICogLTE7XG4gICAgICAgICAgdmVydGljYWxPZmZzZXQgPSBzcGVjLnNsaWRlQ291bnQgJSBzcGVjLnNsaWRlc1RvU2Nyb2xsICogc3BlYy5zbGlkZUhlaWdodCAqIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuXG4gICAgaWYgKHNwZWMuc2xpZGVDb3VudCAlIHNwZWMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgIGlmIChzcGVjLnNsaWRlSW5kZXggKyBzcGVjLnNsaWRlc1RvU2Nyb2xsID4gc3BlYy5zbGlkZUNvdW50ICYmIHNwZWMuc2xpZGVDb3VudCA+IHNwZWMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgIHZhciBzbGlkZXNUb09mZnNldCA9IHNwZWMuc2xpZGVzVG9TaG93IC0gc3BlYy5zbGlkZUNvdW50ICUgc3BlYy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgc2xpZGVPZmZzZXQgPSBzbGlkZXNUb09mZnNldCAqIHNwZWMuc2xpZGVXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlYy5jZW50ZXJNb2RlKSB7XG4gICAgaWYgKHNwZWMuaW5maW5pdGUpIHtcbiAgICAgIHNsaWRlT2Zmc2V0ICs9IHNwZWMuc2xpZGVXaWR0aCAqIE1hdGguZmxvb3Ioc3BlYy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVPZmZzZXQgPSBzcGVjLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKHNwZWMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzcGVjLnZlcnRpY2FsKSB7XG4gICAgdGFyZ2V0TGVmdCA9IHNwZWMuc2xpZGVJbmRleCAqIHNwZWMuc2xpZGVXaWR0aCAqIC0xICsgc2xpZGVPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0TGVmdCA9IHNwZWMuc2xpZGVJbmRleCAqIHNwZWMuc2xpZGVIZWlnaHQgKiAtMSArIHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaWYgKHNwZWMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgIHZhciB0YXJnZXRTbGlkZUluZGV4O1xuICAgIGlmIChzcGVjLnNsaWRlQ291bnQgPD0gc3BlYy5zbGlkZXNUb1Nob3cgfHwgc3BlYy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRhcmdldFNsaWRlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHNwZWMudHJhY2tSZWYpLmNoaWxkTm9kZXNbc3BlYy5zbGlkZUluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0U2xpZGVJbmRleCA9IHNwZWMuc2xpZGVJbmRleCArIHNwZWMuc2xpZGVzVG9TaG93O1xuICAgICAgdGFyZ2V0U2xpZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoc3BlYy50cmFja1JlZikuY2hpbGROb2Rlc1t0YXJnZXRTbGlkZUluZGV4XTtcbiAgICB9XG4gICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlID8gdGFyZ2V0U2xpZGUub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICBpZiAoc3BlYy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICBpZiAoc3BlYy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoc3BlYy50cmFja1JlZikuY2hpbGRyZW5bc3BlYy5zbGlkZUluZGV4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFNsaWRlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHNwZWMudHJhY2tSZWYpLmNoaWxkcmVuW3NwZWMuc2xpZGVJbmRleCArIHNwZWMuc2xpZGVzVG9TaG93ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRTbGlkZSkge1xuICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGUub2Zmc2V0TGVmdCAqIC0xICsgKHNwZWMubGlzdFdpZHRoIC0gdGFyZ2V0U2xpZGUub2Zmc2V0V2lkdGgpIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0TGVmdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2xpY2svbGliL21peGlucy90cmFja0hlbHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMTQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgIGFycm93czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gY3VzdG9tUGFnaW5nKGkpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgaSArIDFcbiAgICAgICAgKTtcbiAgICB9LFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICBmYWRlOiBmYWxzZSxcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgbGF6eUxvYWQ6IGZhbHNlLFxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiBudWxsLFxuICAgIHJ0bDogZmFsc2UsXG4gICAgc2xpZGU6ICdkaXYnLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHN3aXBlOiB0cnVlLFxuICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgIHVzZUNTUzogdHJ1ZSxcbiAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgYWZ0ZXJDaGFuZ2U6IG51bGwsXG4gICAgYmVmb3JlQ2hhbmdlOiBudWxsLFxuICAgIGVkZ2VFdmVudDogbnVsbCxcbiAgICBpbml0OiBudWxsLFxuICAgIHN3aXBlRXZlbnQ6IG51bGwsXG4gICAgLy8gbmV4dEFycm93LCBwcmV2QXJyb3cgYXJlIHJlYWN0IGNvbXBvbmV0c1xuICAgIG5leHRBcnJvdzogbnVsbCxcbiAgICBwcmV2QXJyb3c6IG51bGxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdFByb3BzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9kZWZhdWx0LXByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDA1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHBhcmFtIGZuXG4gKi9cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgZm4pIHtcbiAgICB2YXIgaSAgICAgID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGNvbnQ7XG5cbiAgICBmb3IoaTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgaWYoY29udCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvL2FsbG93IGVhcmx5IGV4aXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFycmF5LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0YXJnZXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdW5jdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRnVuY3Rpb24gOiBpc0Z1bmN0aW9uLFxuICAgIGlzQXJyYXkgOiBpc0FycmF5LFxuICAgIGVhY2ggOiBlYWNoXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbipcbiogU2VhcmNoQmFyXG4qXG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xuaW1wb3J0IFNlbGVjdGVkSXRlbSBmcm9tICcuL1NlbGVjdGVkSXRlbSdcblxuY2xhc3MgU2VsZWN0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBvblJlbW92ZTogKGlkLCBuYW1lLCBpbWcpID0+IHt9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICByZXNwb25zaXZlOiBbIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczogeyBzbGlkZXNUb1Nob3c6IE1hdGgubWluKGl0ZW1zLmxlbmd0aCwgMykgfVxuICAgICAgfSwge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczogeyBzbGlkZXNUb1Nob3c6IE1hdGgubWluKGl0ZW1zLmxlbmd0aCwgNSkgfVxuICAgICAgfV0sXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zLm1hcCgoe25hbWUsIGltZywgaWR9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17YCR7aWR9LSR7bmFtZX1gfT5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgaW1nPXtpbWd9XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnByb3BzLm9uUmVtb3ZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9TbGlkZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkTGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL1NlbGVjdGVkTGlzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NsaWRlcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbm5lclNsaWRlciA9IHJlcXVpcmUoJy4vaW5uZXItc2xpZGVyJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX2pzb24ybXEgPSByZXF1aXJlKCdqc29uMm1xJyk7XG5cbnZhciBfanNvbjJtcTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qc29uMm1xKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kZWZhdWx0UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFByb3BzKTtcblxudmFyIF9jYW5Vc2VEb20gPSByZXF1aXJlKCdjYW4tdXNlLWRvbScpO1xuXG52YXIgX2NhblVzZURvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW5Vc2VEb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBlbnF1aXJlID0gX2NhblVzZURvbTIuZGVmYXVsdCAmJiByZXF1aXJlKCdlbnF1aXJlLmpzJyk7XG5cbnZhciBTbGlkZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBicmVha3BvaW50OiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5fcmVzcG9uc2l2ZU1lZGlhSGFuZGxlcnMgPSBbXTtcbiAgICBfdGhpcy5pbm5lclNsaWRlclJlZkhhbmRsZXIgPSBfdGhpcy5pbm5lclNsaWRlclJlZkhhbmRsZXIuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU2xpZGVyLnByb3RvdHlwZS5pbm5lclNsaWRlclJlZkhhbmRsZXIgPSBmdW5jdGlvbiBpbm5lclNsaWRlclJlZkhhbmRsZXIocmVmKSB7XG4gICAgdGhpcy5pbm5lclNsaWRlciA9IHJlZjtcbiAgfTtcblxuICBTbGlkZXIucHJvdG90eXBlLm1lZGlhID0gZnVuY3Rpb24gbWVkaWEocXVlcnksIGhhbmRsZXIpIHtcbiAgICBlbnF1aXJlLnJlZ2lzdGVyKHF1ZXJ5LCBoYW5kbGVyKTtcbiAgICB0aGlzLl9yZXNwb25zaXZlTWVkaWFIYW5kbGVycy5wdXNoKHsgcXVlcnk6IHF1ZXJ5LCBoYW5kbGVyOiBoYW5kbGVyIH0pO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucmVzcG9uc2l2ZSkge1xuICAgICAgdmFyIGJyZWFrcG9pbnRzID0gdGhpcy5wcm9wcy5yZXNwb25zaXZlLm1hcChmdW5jdGlvbiAoYnJlYWtwdCkge1xuICAgICAgICByZXR1cm4gYnJlYWtwdC5icmVha3BvaW50O1xuICAgICAgfSk7XG4gICAgICBicmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4IC0geTtcbiAgICAgIH0pO1xuXG4gICAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50LCBpbmRleCkge1xuICAgICAgICB2YXIgYlF1ZXJ5O1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBiUXVlcnkgPSAoMCwgX2pzb24ybXEyLmRlZmF1bHQpKHsgbWluV2lkdGg6IDAsIG1heFdpZHRoOiBicmVha3BvaW50IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJRdWVyeSA9ICgwLCBfanNvbjJtcTIuZGVmYXVsdCkoeyBtaW5XaWR0aDogYnJlYWtwb2ludHNbaW5kZXggLSAxXSwgbWF4V2lkdGg6IGJyZWFrcG9pbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgX2NhblVzZURvbTIuZGVmYXVsdCAmJiBfdGhpczIubWVkaWEoYlF1ZXJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYnJlYWtwb2ludDogYnJlYWtwb2ludCB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVnaXN0ZXIgbWVkaWEgcXVlcnkgZm9yIGZ1bGwgc2NyZWVuLiBOZWVkIHRvIHN1cHBvcnQgcmVzaXplIGZyb20gc21hbGwgdG8gbGFyZ2VcbiAgICAgIHZhciBxdWVyeSA9ICgwLCBfanNvbjJtcTIuZGVmYXVsdCkoeyBtaW5XaWR0aDogYnJlYWtwb2ludHMuc2xpY2UoLTEpWzBdIH0pO1xuXG4gICAgICBfY2FuVXNlRG9tMi5kZWZhdWx0ICYmIHRoaXMubWVkaWEocXVlcnksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYnJlYWtwb2ludDogbnVsbCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fcmVzcG9uc2l2ZU1lZGlhSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICBlbnF1aXJlLnVucmVnaXN0ZXIob2JqLnF1ZXJ5LCBvYmouaGFuZGxlcik7XG4gICAgfSk7XG4gIH07XG5cbiAgU2xpZGVyLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbiBzbGlja1ByZXYoKSB7XG4gICAgdGhpcy5pbm5lclNsaWRlci5zbGlja1ByZXYoKTtcbiAgfTtcblxuICBTbGlkZXIucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uIHNsaWNrTmV4dCgpIHtcbiAgICB0aGlzLmlubmVyU2xpZGVyLnNsaWNrTmV4dCgpO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24gc2xpY2tHb1RvKHNsaWRlKSB7XG4gICAgdGhpcy5pbm5lclNsaWRlci5zbGlja0dvVG8oc2xpZGUpO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHNldHRpbmdzO1xuICAgIHZhciBuZXdQcm9wcztcbiAgICBpZiAodGhpcy5zdGF0ZS5icmVha3BvaW50KSB7XG4gICAgICBuZXdQcm9wcyA9IHRoaXMucHJvcHMucmVzcG9uc2l2ZS5maWx0ZXIoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgcmV0dXJuIHJlc3AuYnJlYWtwb2ludCA9PT0gX3RoaXMzLnN0YXRlLmJyZWFrcG9pbnQ7XG4gICAgICB9KTtcbiAgICAgIHNldHRpbmdzID0gbmV3UHJvcHNbMF0uc2V0dGluZ3MgPT09ICd1bnNsaWNrJyA/ICd1bnNsaWNrJyA6ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgdGhpcy5wcm9wcywgbmV3UHJvcHNbMF0uc2V0dGluZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXR0aW5ncyA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgX2RlZmF1bHRQcm9wczIuZGVmYXVsdCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XG4gICAgfVxuXG4gICAgLy8gQ2hpbGRyZW4gbWF5IGNvbnRhaW4gZmFsc2Ugb3IgbnVsbCwgc28gd2Ugc2hvdWxkIGZpbHRlciB0aGVtXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gISFjaGlsZDtcbiAgICB9KTtcblxuICAgIGlmIChzZXR0aW5ncyA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAvLyBpZiAndW5zbGljaycgcmVzcG9uc2l2ZSBicmVha3BvaW50IHNldHRpbmcgdXNlZCwganVzdCByZXR1cm4gdGhlIDxTbGlkZXI+IHRhZyBuZXN0ZWQgSFRNTFxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2lubmVyU2xpZGVyLklubmVyU2xpZGVyLFxuICAgICAgICBfZXh0ZW5kcyh7IHJlZjogdGhpcy5pbm5lclNsaWRlclJlZkhhbmRsZXIgfSwgc2V0dGluZ3MpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSW5uZXJTbGlkZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9ldmVudEhhbmRsZXJzID0gcmVxdWlyZSgnLi9taXhpbnMvZXZlbnQtaGFuZGxlcnMnKTtcblxudmFyIF9ldmVudEhhbmRsZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50SGFuZGxlcnMpO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL21peGlucy9oZWxwZXJzJyk7XG5cbnZhciBfaGVscGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzKTtcblxudmFyIF9pbml0aWFsU3RhdGUgPSByZXF1aXJlKCcuL2luaXRpYWwtc3RhdGUnKTtcblxudmFyIF9pbml0aWFsU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5pdGlhbFN0YXRlKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kZWZhdWx0UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFByb3BzKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX3RyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuXG52YXIgX2RvdHMgPSByZXF1aXJlKCcuL2RvdHMnKTtcblxudmFyIF9hcnJvd3MgPSByZXF1aXJlKCcuL2Fycm93cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSW5uZXJTbGlkZXIgPSBleHBvcnRzLklubmVyU2xpZGVyID0gKDAsIF9jcmVhdGVSZWFjdENsYXNzMi5kZWZhdWx0KSh7XG4gIG1peGluczogW19oZWxwZXJzMi5kZWZhdWx0LCBfZXZlbnRIYW5kbGVyczIuZGVmYXVsdF0sXG4gIGxpc3Q6IG51bGwsXG4gIHRyYWNrOiBudWxsLFxuICBsaXN0UmVmSGFuZGxlcjogZnVuY3Rpb24gbGlzdFJlZkhhbmRsZXIocmVmKSB7XG4gICAgdGhpcy5saXN0ID0gcmVmO1xuICB9LFxuICB0cmFja1JlZkhhbmRsZXI6IGZ1bmN0aW9uIHRyYWNrUmVmSGFuZGxlcihyZWYpIHtcbiAgICB0aGlzLnRyYWNrID0gcmVmO1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9pbml0aWFsU3RhdGUyLmRlZmF1bHQsIHtcbiAgICAgIGN1cnJlbnRTbGlkZTogdGhpcy5wcm9wcy5pbml0aWFsU2xpZGVcbiAgICB9KTtcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIF9kZWZhdWx0UHJvcHMyLmRlZmF1bHQ7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmluaXQpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5pdCgpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQ6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgbGF6eUxvYWRlZExpc3QgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKTsgaSsrKSB7XG4gICAgICBpZiAoaSA+PSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSAmJiBpIDwgdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgKyB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdykge1xuICAgICAgICBsYXp5TG9hZGVkTGlzdC5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxhenlMb2FkICYmIHRoaXMuc3RhdGUubGF6eUxvYWRlZExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF6eUxvYWRlZExpc3Q6IGxhenlMb2FkZWRMaXN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBIYWNrIGZvciBhdXRvcGxheSAtLSBJbnNwZWN0IExhdGVyXG4gICAgdGhpcy5pbml0aWFsaXplKHRoaXMucHJvcHMpO1xuICAgIHRoaXMuYWRhcHRIZWlnaHQoKTtcblxuICAgIC8vIFRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZWQpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25FbmRDYWxsYmFjayk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemVkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0b1BsYXlUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmF1dG9QbGF5VGltZXIpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zbGlja0dvVG8gIT0gbmV4dFByb3BzLnNsaWNrR29Ubykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdyZWFjdC1zbGljayBkZXByZWNhdGlvbiB3YXJuaW5nOiBzbGlja0dvVG8gcHJvcCBpcyBkZXByZWNhdGVkIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCByZWxlYXNlLiBVc2Ugc2xpY2tHb1RvIG1ldGhvZCBpbnN0ZWFkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgaW5kZXg6IG5leHRQcm9wcy5zbGlja0dvVG8sXG4gICAgICAgIGN1cnJlbnRTbGlkZTogdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgPj0gbmV4dFByb3BzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcbiAgICAgIHRoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICBpbmRleDogbmV4dFByb3BzLmNoaWxkcmVuLmxlbmd0aCAtIG5leHRQcm9wcy5zbGlkZXNUb1Nob3csXG4gICAgICAgIGN1cnJlbnRTbGlkZTogdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZShuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5hZGFwdEhlaWdodCgpO1xuICB9LFxuICBvbldpbmRvd1Jlc2l6ZWQ6IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplZCgpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzKTtcbiAgICAvLyBhbmltYXRpbmcgc3RhdGUgc2hvdWxkIGJlIGNsZWFyZWQgd2hpbGUgcmVzaXppbmcsIG90aGVyd2lzZSBhdXRvcGxheSBzdG9wcyB3b3JraW5nXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbmltYXRpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uRW5kQ2FsbGJhY2spO1xuICAgIGRlbGV0ZSB0aGlzLmFuaW1hdGlvbkVuZENhbGxiYWNrO1xuICB9LFxuICBzbGlja1ByZXY6IGZ1bmN0aW9uIHNsaWNrUHJldigpIHtcbiAgICB0aGlzLmNoYW5nZVNsaWRlKHsgbWVzc2FnZTogJ3ByZXZpb3VzJyB9KTtcbiAgfSxcbiAgc2xpY2tOZXh0OiBmdW5jdGlvbiBzbGlja05leHQoKSB7XG4gICAgdGhpcy5jaGFuZ2VTbGlkZSh7IG1lc3NhZ2U6ICduZXh0JyB9KTtcbiAgfSxcbiAgc2xpY2tHb1RvOiBmdW5jdGlvbiBzbGlja0dvVG8oc2xpZGUpIHtcbiAgICB0eXBlb2Ygc2xpZGUgPT09ICdudW1iZXInICYmIHRoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgIGluZGV4OiBzbGlkZSxcbiAgICAgIGN1cnJlbnRTbGlkZTogdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGVcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3NsaWNrLWluaXRpYWxpemVkJywgJ3NsaWNrLXNsaWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAnc2xpY2stdmVydGljYWwnOiB0aGlzLnByb3BzLnZlcnRpY2FsXG4gICAgfSk7XG5cbiAgICB2YXIgdHJhY2tQcm9wcyA9IHtcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuZmFkZSxcbiAgICAgIGNzc0Vhc2U6IHRoaXMucHJvcHMuY3NzRWFzZSxcbiAgICAgIHNwZWVkOiB0aGlzLnByb3BzLnNwZWVkLFxuICAgICAgaW5maW5pdGU6IHRoaXMucHJvcHMuaW5maW5pdGUsXG4gICAgICBjZW50ZXJNb2RlOiB0aGlzLnByb3BzLmNlbnRlck1vZGUsXG4gICAgICBmb2N1c09uU2VsZWN0OiB0aGlzLnByb3BzLmZvY3VzT25TZWxlY3QgPyB0aGlzLnNlbGVjdEhhbmRsZXIgOiBudWxsLFxuICAgICAgY3VycmVudFNsaWRlOiB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSxcbiAgICAgIGxhenlMb2FkOiB0aGlzLnByb3BzLmxhenlMb2FkLFxuICAgICAgbGF6eUxvYWRlZExpc3Q6IHRoaXMuc3RhdGUubGF6eUxvYWRlZExpc3QsXG4gICAgICBydGw6IHRoaXMucHJvcHMucnRsLFxuICAgICAgc2xpZGVXaWR0aDogdGhpcy5zdGF0ZS5zbGlkZVdpZHRoLFxuICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnByb3BzLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgc2xpZGVDb3VudDogdGhpcy5zdGF0ZS5zbGlkZUNvdW50LFxuICAgICAgdHJhY2tTdHlsZTogdGhpcy5zdGF0ZS50cmFja1N0eWxlLFxuICAgICAgdmFyaWFibGVXaWR0aDogdGhpcy5wcm9wcy52YXJpYWJsZVdpZHRoXG4gICAgfTtcblxuICAgIHZhciBkb3RzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZG90cyA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLnNsaWRlQ291bnQgPj0gdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgIHZhciBkb3RQcm9wcyA9IHtcbiAgICAgICAgZG90c0NsYXNzOiB0aGlzLnByb3BzLmRvdHNDbGFzcyxcbiAgICAgICAgc2xpZGVDb3VudDogdGhpcy5zdGF0ZS5zbGlkZUNvdW50LFxuICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucHJvcHMuc2xpZGVzVG9TaG93LFxuICAgICAgICBjdXJyZW50U2xpZGU6IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgICAgY2xpY2tIYW5kbGVyOiB0aGlzLmNoYW5nZVNsaWRlLFxuICAgICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY3VzdG9tUGFnaW5nOiB0aGlzLnByb3BzLmN1c3RvbVBhZ2luZ1xuICAgICAgfTtcblxuICAgICAgZG90cyA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb3RzLkRvdHMsIGRvdFByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldkFycm93LCBuZXh0QXJyb3c7XG5cbiAgICB2YXIgYXJyb3dQcm9wcyA9IHtcbiAgICAgIGluZmluaXRlOiB0aGlzLnByb3BzLmluZmluaXRlLFxuICAgICAgY2VudGVyTW9kZTogdGhpcy5wcm9wcy5jZW50ZXJNb2RlLFxuICAgICAgY3VycmVudFNsaWRlOiB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSxcbiAgICAgIHNsaWRlQ291bnQ6IHRoaXMuc3RhdGUuc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlc1RvU2hvdzogdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3csXG4gICAgICBwcmV2QXJyb3c6IHRoaXMucHJvcHMucHJldkFycm93LFxuICAgICAgbmV4dEFycm93OiB0aGlzLnByb3BzLm5leHRBcnJvdyxcbiAgICAgIGNsaWNrSGFuZGxlcjogdGhpcy5jaGFuZ2VTbGlkZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hcnJvd3MpIHtcbiAgICAgIHByZXZBcnJvdyA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9hcnJvd3MuUHJldkFycm93LCBhcnJvd1Byb3BzKTtcbiAgICAgIG5leHRBcnJvdyA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9hcnJvd3MuTmV4dEFycm93LCBhcnJvd1Byb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgdmVydGljYWxIZWlnaHRTdHlsZSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy52ZXJ0aWNhbCkge1xuICAgICAgdmVydGljYWxIZWlnaHRTdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmxpc3RIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGNlbnRlclBhZGRpbmdTdHlsZSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgY2VudGVyUGFkZGluZ1N0eWxlID0ge1xuICAgICAgICAgIHBhZGRpbmc6ICcwcHggJyArIHRoaXMucHJvcHMuY2VudGVyUGFkZGluZ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgIGNlbnRlclBhZGRpbmdTdHlsZSA9IHtcbiAgICAgICAgICBwYWRkaW5nOiB0aGlzLnByb3BzLmNlbnRlclBhZGRpbmcgKyAnIDBweCdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGlzdFN0eWxlID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCB2ZXJ0aWNhbEhlaWdodFN0eWxlLCBjZW50ZXJQYWRkaW5nU3R5bGUpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Jbm5lclNsaWRlckVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Jbm5lclNsaWRlckxlYXZlLFxuICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5vbklubmVyU2xpZGVyT3ZlclxuICAgICAgfSxcbiAgICAgIHByZXZBcnJvdyxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogdGhpcy5saXN0UmVmSGFuZGxlcixcbiAgICAgICAgICBjbGFzc05hbWU6ICdzbGljay1saXN0JyxcbiAgICAgICAgICBzdHlsZTogbGlzdFN0eWxlLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLnN3aXBlU3RhcnQsXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IHRoaXMuc3RhdGUuZHJhZ2dpbmcgPyB0aGlzLnN3aXBlTW92ZSA6IG51bGwsXG4gICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLnN3aXBlRW5kLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5zdGF0ZS5kcmFnZ2luZyA/IHRoaXMuc3dpcGVFbmQgOiBudWxsLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5zd2lwZVN0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hNb3ZlOiB0aGlzLnN0YXRlLmRyYWdnaW5nID8gdGhpcy5zd2lwZU1vdmUgOiBudWxsLFxuICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuc3dpcGVFbmQsXG4gICAgICAgICAgb25Ub3VjaENhbmNlbDogdGhpcy5zdGF0ZS5kcmFnZ2luZyA/IHRoaXMuc3dpcGVFbmQgOiBudWxsLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5ID8gdGhpcy5rZXlIYW5kbGVyIDogbnVsbCB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfdHJhY2suVHJhY2ssXG4gICAgICAgICAgX2V4dGVuZHMoeyByZWY6IHRoaXMudHJhY2tSZWZIYW5kbGVyIH0sIHRyYWNrUHJvcHMpLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIG5leHRBcnJvdyxcbiAgICAgIGRvdHNcbiAgICApO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5uZXItc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90cmFja0hlbHBlciA9IHJlcXVpcmUoJy4vdHJhY2tIZWxwZXInKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbnZhciBfaGVscGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBFdmVudEhhbmRsZXJzID0ge1xuICAvLyBFdmVudCBoYW5kbGVyIGZvciBwcmV2aW91cyBhbmQgbmV4dFxuICBjaGFuZ2VTbGlkZTogZnVuY3Rpb24gY2hhbmdlU2xpZGUob3B0aW9ucykge1xuICAgIHZhciBpbmRleE9mZnNldCwgcHJldmlvdXNJbnQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQsIHRhcmdldFNsaWRlO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IF9wcm9wcy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgICAgc2xpZGVzVG9TaG93ID0gX3Byb3BzLnNsaWRlc1RvU2hvdztcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2xpZGVDb3VudCA9IF9zdGF0ZS5zbGlkZUNvdW50LFxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfc3RhdGUuY3VycmVudFNsaWRlO1xuXG4gICAgdW5ldmVuT2Zmc2V0ID0gc2xpZGVDb3VudCAlIHNsaWRlc1RvU2Nyb2xsICE9PSAwO1xuICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChzbGlkZUNvdW50IC0gY3VycmVudFNsaWRlKSAlIHNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IHNsaWRlc1RvU2Nyb2xsIDogc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICB0YXJnZXRTbGlkZSA9IGN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0O1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF6eUxvYWQpIHtcbiAgICAgICAgcHJldmlvdXNJbnQgPSBjdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldDtcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBwcmV2aW91c0ludCA9PT0gLTEgPyBzbGlkZUNvdW50IC0gMSA6IHByZXZpb3VzSW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tZXNzYWdlID09PSAnbmV4dCcpIHtcbiAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBzbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgdGFyZ2V0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxhenlMb2FkKSB7XG4gICAgICAgIHRhcmdldFNsaWRlID0gKGN1cnJlbnRTbGlkZSArIHNsaWRlc1RvU2Nyb2xsKSAlIHNsaWRlQ291bnQgKyBpbmRleE9mZnNldDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubWVzc2FnZSA9PT0gJ2RvdHMnIHx8IG9wdGlvbnMubWVzc2FnZSA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgLy8gQ2xpY2sgb24gZG90c1xuICAgICAgdGFyZ2V0U2xpZGUgPSBvcHRpb25zLmluZGV4ICogb3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgIGlmICh0YXJnZXRTbGlkZSA9PT0gb3B0aW9ucy5jdXJyZW50U2xpZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tZXNzYWdlID09PSAnaW5kZXgnKSB7XG4gICAgICB0YXJnZXRTbGlkZSA9IHBhcnNlSW50KG9wdGlvbnMuaW5kZXgpO1xuICAgICAgaWYgKHRhcmdldFNsaWRlID09PSBvcHRpb25zLmN1cnJlbnRTbGlkZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zbGlkZUhhbmRsZXIodGFyZ2V0U2xpZGUpO1xuICB9LFxuXG4gIC8vIEFjY2Vzc2libGl0eSBoYW5kbGVyIGZvciBwcmV2aW91cyBhbmQgbmV4dFxuICBrZXlIYW5kbGVyOiBmdW5jdGlvbiBrZXlIYW5kbGVyKGUpIHtcbiAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgaWYgKCFlLnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2xpZGUoe1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvcHMucnRsID09PSB0cnVlID8gJ25leHQnIDogJ3ByZXZpb3VzJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgbWVzc2FnZTogdGhpcy5wcm9wcy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gRm9jdXMgb24gc2VsZWN0aW5nIGEgc2xpZGUgKGNsaWNrIGhhbmRsZXIgb24gdHJhY2spXG4gIHNlbGVjdEhhbmRsZXI6IGZ1bmN0aW9uIHNlbGVjdEhhbmRsZXIob3B0aW9ucykge1xuICAgIHRoaXMuY2hhbmdlU2xpZGUob3B0aW9ucyk7XG4gIH0sXG4gIHN3aXBlU3RhcnQ6IGZ1bmN0aW9uIHN3aXBlU3RhcnQoZSkge1xuICAgIHZhciB0b3VjaGVzLCBwb3NYLCBwb3NZO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc3dpcGUgPT09IGZhbHNlIHx8ICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiB0aGlzLnByb3BzLnN3aXBlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGUudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3NYID0gZS50b3VjaGVzICE9PSB1bmRlZmluZWQgPyBlLnRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFg7XG4gICAgcG9zWSA9IGUudG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gZS50b3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICB0b3VjaE9iamVjdDoge1xuICAgICAgICBzdGFydFg6IHBvc1gsXG4gICAgICAgIHN0YXJ0WTogcG9zWSxcbiAgICAgICAgY3VyWDogcG9zWCxcbiAgICAgICAgY3VyWTogcG9zWVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBzd2lwZU1vdmU6IGZ1bmN0aW9uIHN3aXBlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52ZXJ0aWNhbCAmJiB0aGlzLnByb3BzLnN3aXBlVG9TbGlkZSAmJiB0aGlzLnByb3BzLnZlcnRpY2FsU3dpcGluZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB2YXIgc3dpcGVMZWZ0O1xuICAgIHZhciBjdXJMZWZ0LCBwb3NpdGlvbk9mZnNldDtcbiAgICB2YXIgdG91Y2hPYmplY3QgPSB0aGlzLnN0YXRlLnRvdWNoT2JqZWN0O1xuXG4gICAgY3VyTGVmdCA9ICgwLCBfdHJhY2tIZWxwZXIuZ2V0VHJhY2tMZWZ0KSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgc2xpZGVJbmRleDogdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUsXG4gICAgICB0cmFja1JlZjogdGhpcy50cmFja1xuICAgIH0sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICB0b3VjaE9iamVjdC5jdXJYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYO1xuICAgIHRvdWNoT2JqZWN0LmN1clkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFk7XG4gICAgdG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyh0b3VjaE9iamVjdC5jdXJYIC0gdG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudmVydGljYWxTd2lwaW5nKSB7XG4gICAgICB0b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KE1hdGgucG93KHRvdWNoT2JqZWN0LmN1clkgLSB0b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb25PZmZzZXQgPSAodGhpcy5wcm9wcy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqICh0b3VjaE9iamVjdC5jdXJYID4gdG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnZlcnRpY2FsU3dpcGluZykge1xuICAgICAgcG9zaXRpb25PZmZzZXQgPSB0b3VjaE9iamVjdC5jdXJZID4gdG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50U2xpZGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcbiAgICB2YXIgZG90Q291bnQgPSBNYXRoLmNlaWwodGhpcy5zdGF0ZS5zbGlkZUNvdW50IC8gdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgdmFyIHN3aXBlRGlyZWN0aW9uID0gdGhpcy5zd2lwZURpcmVjdGlvbih0aGlzLnN0YXRlLnRvdWNoT2JqZWN0KTtcbiAgICB2YXIgdG91Y2hTd2lwZUxlbmd0aCA9IHRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnIHx8IGN1cnJlbnRTbGlkZSArIDEgPj0gZG90Q291bnQgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0b3VjaFN3aXBlTGVuZ3RoID0gdG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiB0aGlzLnByb3BzLmVkZ2VGcmljdGlvbjtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGdlRHJhZ2dlZCA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5lZGdlRXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmVkZ2VFdmVudChzd2lwZURpcmVjdGlvbik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkZ2VEcmFnZ2VkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3dpcGVkID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLnN3aXBlRXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMuc3dpcGVFdmVudChzd2lwZURpcmVjdGlvbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3dpcGVkOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy52ZXJ0aWNhbCkge1xuICAgICAgc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHRvdWNoU3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHRvdWNoU3dpcGVMZW5ndGggKiAodGhpcy5zdGF0ZS5saXN0SGVpZ2h0IC8gdGhpcy5zdGF0ZS5saXN0V2lkdGgpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudmVydGljYWxTd2lwaW5nKSB7XG4gICAgICBzd2lwZUxlZnQgPSBjdXJMZWZ0ICsgdG91Y2hTd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hPYmplY3Q6IHRvdWNoT2JqZWN0LFxuICAgICAgc3dpcGVMZWZ0OiBzd2lwZUxlZnQsXG4gICAgICB0cmFja1N0eWxlOiAoMCwgX3RyYWNrSGVscGVyLmdldFRyYWNrQ1NTKSgoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoeyBsZWZ0OiBzd2lwZUxlZnQgfSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpXG4gICAgfSk7XG5cbiAgICBpZiAoTWF0aC5hYnModG91Y2hPYmplY3QuY3VyWCAtIHRvdWNoT2JqZWN0LnN0YXJ0WCkgPCBNYXRoLmFicyh0b3VjaE9iamVjdC5jdXJZIC0gdG91Y2hPYmplY3Quc3RhcnRZKSAqIDAuOCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBnZXROYXZpZ2FibGVJbmRleGVzOiBmdW5jdGlvbiBnZXROYXZpZ2FibGVJbmRleGVzKCkge1xuICAgIHZhciBtYXggPSB2b2lkIDA7XG4gICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgaW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICBtYXggPSB0aGlzLnN0YXRlLnNsaWRlQ291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdyAqIC0xO1xuICAgICAgY291bnRlciA9IHRoaXMucHJvcHMuc2xpZGVzVG9TaG93ICogLTE7XG4gICAgICBtYXggPSB0aGlzLnN0YXRlLnNsaWRlQ291bnQgKiAyO1xuICAgIH1cblxuICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICBicmVha1BvaW50ID0gY291bnRlciArIHRoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgIGNvdW50ZXIgKz0gdGhpcy5wcm9wcy5zbGlkZXNUb1Njcm9sbCA8PSB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdyA/IHRoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGwgOiB0aGlzLnByb3BzLnNsaWRlc1RvU2hvdztcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhlcztcbiAgfSxcbiAgY2hlY2tOYXZpZ2FibGU6IGZ1bmN0aW9uIGNoZWNrTmF2aWdhYmxlKGluZGV4KSB7XG4gICAgdmFyIG5hdmlnYWJsZXMgPSB0aGlzLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICB2YXIgcHJldk5hdmlnYWJsZSA9IDA7XG5cbiAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfSxcbiAgZ2V0U2xpZGVDb3VudDogZnVuY3Rpb24gZ2V0U2xpZGVDb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNlbnRlck9mZnNldCA9IHRoaXMucHJvcHMuY2VudGVyTW9kZSA/IHRoaXMuc3RhdGUuc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IodGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zd2lwZVRvU2xpZGUpIHtcbiAgICAgIHZhciBzd2lwZWRTbGlkZSA9IHZvaWQgMDtcblxuICAgICAgdmFyIHNsaWNrTGlzdCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmxpc3QpO1xuXG4gICAgICB2YXIgc2xpZGVzID0gc2xpY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICBBcnJheS5mcm9tKHNsaWRlcykuZXZlcnkoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIGlmICghX3RoaXMucHJvcHMudmVydGljYWwpIHtcbiAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArIF90aGlzLmdldFdpZHRoKHNsaWRlKSAvIDIgPiBfdGhpcy5zdGF0ZS5zd2lwZUxlZnQgKiAtMSkge1xuICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNsaWRlLm9mZnNldFRvcCArIF90aGlzLmdldEhlaWdodChzbGlkZSkgLyAyID4gX3RoaXMuc3RhdGUuc3dpcGVMZWZ0ICogLTEpIHtcbiAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKHN3aXBlZFNsaWRlLmRhdGFzZXQuaW5kZXggLSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGw7XG4gICAgfVxuICB9LFxuXG4gIHN3aXBlRW5kOiBmdW5jdGlvbiBzd2lwZUVuZChlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zd2lwZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b3VjaE9iamVjdCA9IHRoaXMuc3RhdGUudG91Y2hPYmplY3Q7XG4gICAgdmFyIG1pblN3aXBlID0gdGhpcy5zdGF0ZS5saXN0V2lkdGggLyB0aGlzLnByb3BzLnRvdWNoVGhyZXNob2xkO1xuICAgIHZhciBzd2lwZURpcmVjdGlvbiA9IHRoaXMuc3dpcGVEaXJlY3Rpb24odG91Y2hPYmplY3QpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudmVydGljYWxTd2lwaW5nKSB7XG4gICAgICBtaW5Td2lwZSA9IHRoaXMuc3RhdGUubGlzdEhlaWdodCAvIHRoaXMucHJvcHMudG91Y2hUaHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0YXRlIG9mIHRvdWNoIHJlbGF0ZWQgc3RhdGUgdmFyaWFibGVzLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgZWRnZURyYWdnZWQ6IGZhbHNlLFxuICAgICAgc3dpcGVkOiBmYWxzZSxcbiAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgIHRvdWNoT2JqZWN0OiB7fVxuICAgIH0pO1xuICAgIC8vIEZpeCBmb3IgIzEzXG4gICAgaWYgKCF0b3VjaE9iamVjdC5zd2lwZUxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiBtaW5Td2lwZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgc2xpZGVDb3VudCA9IHZvaWQgMCxcbiAgICAgICAgICBuZXdTbGlkZSA9IHZvaWQgMDtcblxuICAgICAgc3dpdGNoIChzd2lwZURpcmVjdGlvbikge1xuXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBuZXdTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlICsgdGhpcy5nZXRTbGlkZUNvdW50KCk7XG4gICAgICAgICAgc2xpZGVDb3VudCA9IHRoaXMucHJvcHMuc3dpcGVUb1NsaWRlID8gdGhpcy5jaGVja05hdmlnYWJsZShuZXdTbGlkZSkgOiBuZXdTbGlkZTtcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIG5ld1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgLSB0aGlzLmdldFNsaWRlQ291bnQoKTtcbiAgICAgICAgICBzbGlkZUNvdW50ID0gdGhpcy5wcm9wcy5zd2lwZVRvU2xpZGUgPyB0aGlzLmNoZWNrTmF2aWdhYmxlKG5ld1NsaWRlKSA6IG5ld1NsaWRlO1xuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudERpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzbGlkZUNvdW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5zbGlkZUhhbmRsZXIoc2xpZGVDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkanVzdCB0aGUgdHJhY2sgYmFjayB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAgdmFyIGN1cnJlbnRMZWZ0ID0gKDAsIF90cmFja0hlbHBlci5nZXRUcmFja0xlZnQpKCgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHNsaWRlSW5kZXg6IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlLFxuICAgICAgICB0cmFja1JlZjogdGhpcy50cmFja1xuICAgICAgfSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJhY2tTdHlsZTogKDAsIF90cmFja0hlbHBlci5nZXRUcmFja0FuaW1hdGVDU1MpKCgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7IGxlZnQ6IGN1cnJlbnRMZWZ0IH0sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpKVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBvbklubmVyU2xpZGVyRW50ZXI6IGZ1bmN0aW9uIG9uSW5uZXJTbGlkZXJFbnRlcihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgdGhpcy5wcm9wcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH0sXG4gIG9uSW5uZXJTbGlkZXJPdmVyOiBmdW5jdGlvbiBvbklubmVyU2xpZGVyT3ZlcihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgdGhpcy5wcm9wcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH0sXG4gIG9uSW5uZXJTbGlkZXJMZWF2ZTogZnVuY3Rpb24gb25Jbm5lclNsaWRlckxlYXZlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvcGxheSAmJiB0aGlzLnByb3BzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5hdXRvUGxheSgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnRIYW5kbGVycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvbWl4aW5zL2V2ZW50LWhhbmRsZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgZGlyZWN0aW9uOiAxLFxuICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgIC8vIGxvYWRJbmRleDogMCxcbiAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgc2xpZGVIZWlnaHQ6IG51bGwsXG4gICAgLy8gc2xpZGluZzogZmFsc2UsXG4gICAgLy8gc2xpZGVPZmZzZXQ6IDAsXG4gICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgIHRvdWNoT2JqZWN0OiB7XG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBjdXJYOiAwLFxuICAgICAgICBjdXJZOiAwXG4gICAgfSxcblxuICAgIGxhenlMb2FkZWRMaXN0OiBbXSxcblxuICAgIC8vIGFkZGVkIGZvciByZWFjdFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBlZGdlRHJhZ2dlZDogZmFsc2UsXG4gICAgc3dpcGVkOiBmYWxzZSwgLy8gdXNlZCBieSBzd2lwZUV2ZW50LiBkaWZmZXJlbnRpdGVzIGJldHdlZW4gdG91Y2ggYW5kIHN3aXBlLlxuICAgIHRyYWNrU3R5bGU6IHt9LFxuICAgIHRyYWNrV2lkdGg6IDBcblxuICAgIC8vIFJlbW92ZWRcbiAgICAvLyB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgLy8gJG5leHRBcnJvdzogbnVsbCxcbiAgICAvLyAkcHJldkFycm93OiBudWxsLFxuICAgIC8vICRkb3RzOiBudWxsLFxuICAgIC8vICRsaXN0OiBudWxsLFxuICAgIC8vICRzbGlkZVRyYWNrOiBudWxsLFxuICAgIC8vICRzbGlkZXM6IG51bGwsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRpYWxTdGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvaW5pdGlhbC1zdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlRyYWNrID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgZ2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24gZ2V0U2xpZGVDbGFzc2VzKHNwZWMpIHtcbiAgdmFyIHNsaWNrQWN0aXZlLCBzbGlja0NlbnRlciwgc2xpY2tDbG9uZWQ7XG4gIHZhciBjZW50ZXJPZmZzZXQsIGluZGV4O1xuXG4gIGlmIChzcGVjLnJ0bCkge1xuICAgIGluZGV4ID0gc3BlYy5zbGlkZUNvdW50IC0gMSAtIHNwZWMuaW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXggPSBzcGVjLmluZGV4O1xuICB9XG5cbiAgc2xpY2tDbG9uZWQgPSBpbmRleCA8IDAgfHwgaW5kZXggPj0gc3BlYy5zbGlkZUNvdW50O1xuICBpZiAoc3BlYy5jZW50ZXJNb2RlKSB7XG4gICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihzcGVjLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgIHNsaWNrQ2VudGVyID0gKGluZGV4IC0gc3BlYy5jdXJyZW50U2xpZGUpICUgc3BlYy5zbGlkZUNvdW50ID09PSAwO1xuICAgIGlmIChpbmRleCA+IHNwZWMuY3VycmVudFNsaWRlIC0gY2VudGVyT2Zmc2V0IC0gMSAmJiBpbmRleCA8PSBzcGVjLmN1cnJlbnRTbGlkZSArIGNlbnRlck9mZnNldCkge1xuICAgICAgc2xpY2tBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzbGlja0FjdGl2ZSA9IHNwZWMuY3VycmVudFNsaWRlIDw9IGluZGV4ICYmIGluZGV4IDwgc3BlYy5jdXJyZW50U2xpZGUgKyBzcGVjLnNsaWRlc1RvU2hvdztcbiAgfVxuICByZXR1cm4gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSh7XG4gICAgJ3NsaWNrLXNsaWRlJzogdHJ1ZSxcbiAgICAnc2xpY2stYWN0aXZlJzogc2xpY2tBY3RpdmUsXG4gICAgJ3NsaWNrLWNlbnRlcic6IHNsaWNrQ2VudGVyLFxuICAgICdzbGljay1jbG9uZWQnOiBzbGlja0Nsb25lZFxuICB9KTtcbn07XG5cbnZhciBnZXRTbGlkZVN0eWxlID0gZnVuY3Rpb24gZ2V0U2xpZGVTdHlsZShzcGVjKSB7XG4gIHZhciBzdHlsZSA9IHt9O1xuXG4gIGlmIChzcGVjLnZhcmlhYmxlV2lkdGggPT09IHVuZGVmaW5lZCB8fCBzcGVjLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgc3R5bGUud2lkdGggPSBzcGVjLnNsaWRlV2lkdGg7XG4gIH1cblxuICBpZiAoc3BlYy5mYWRlKSB7XG4gICAgc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHN0eWxlLmxlZnQgPSAtc3BlYy5pbmRleCAqIHNwZWMuc2xpZGVXaWR0aDtcbiAgICBzdHlsZS5vcGFjaXR5ID0gc3BlYy5jdXJyZW50U2xpZGUgPT09IHNwZWMuaW5kZXggPyAxIDogMDtcbiAgICBzdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgJyArIHNwZWMuc3BlZWQgKyAnbXMgJyArIHNwZWMuY3NzRWFzZTtcbiAgICBzdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gJ29wYWNpdHkgJyArIHNwZWMuc3BlZWQgKyAnbXMgJyArIHNwZWMuY3NzRWFzZTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG5cbnZhciBnZXRLZXkgPSBmdW5jdGlvbiBnZXRLZXkoY2hpbGQsIGZhbGxiYWNrS2V5KSB7XG4gIC8vIGtleSBjb3VsZCBiZSBhIHplcm9cbiAgcmV0dXJuIGNoaWxkLmtleSA9PT0gbnVsbCB8fCBjaGlsZC5rZXkgPT09IHVuZGVmaW5lZCA/IGZhbGxiYWNrS2V5IDogY2hpbGQua2V5O1xufTtcblxudmFyIHJlbmRlclNsaWRlcyA9IGZ1bmN0aW9uIHJlbmRlclNsaWRlcyhzcGVjKSB7XG4gIHZhciBrZXk7XG4gIHZhciBzbGlkZXMgPSBbXTtcbiAgdmFyIHByZUNsb25lU2xpZGVzID0gW107XG4gIHZhciBwb3N0Q2xvbmVTbGlkZXMgPSBbXTtcbiAgdmFyIGNvdW50ID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHNwZWMuY2hpbGRyZW4pO1xuXG4gIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHNwZWMuY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtLCBpbmRleCkge1xuICAgIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgICB2YXIgY2hpbGRPbkNsaWNrT3B0aW9ucyA9IHtcbiAgICAgIG1lc3NhZ2U6ICdjaGlsZHJlbicsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogc3BlYy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIGN1cnJlbnRTbGlkZTogc3BlYy5jdXJyZW50U2xpZGVcbiAgICB9O1xuXG4gICAgaWYgKCFzcGVjLmxhenlMb2FkIHwgKHNwZWMubGF6eUxvYWQgJiYgc3BlYy5sYXp5TG9hZGVkTGlzdC5pbmRleE9mKGluZGV4KSA+PSAwKSkge1xuICAgICAgY2hpbGQgPSBlbGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKTtcbiAgICB9XG4gICAgdmFyIGNoaWxkU3R5bGUgPSBnZXRTbGlkZVN0eWxlKCgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgc3BlYywgeyBpbmRleDogaW5kZXggfSkpO1xuICAgIHZhciBzbGlja0NsYXNzZXMgPSBnZXRTbGlkZUNsYXNzZXMoKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHsgaW5kZXg6IGluZGV4IH0sIHNwZWMpKTtcbiAgICB2YXIgY3NzQ2xhc3NlcztcblxuICAgIGlmIChjaGlsZC5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIGNzc0NsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHNsaWNrQ2xhc3NlcywgY2hpbGQucHJvcHMuY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzQ2xhc3NlcyA9IHNsaWNrQ2xhc3NlcztcbiAgICB9XG5cbiAgICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMub25DbGljayAmJiBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgaWYgKHNwZWMuZm9jdXNPblNlbGVjdCkge1xuICAgICAgICBzcGVjLmZvY3VzT25TZWxlY3QoY2hpbGRPbkNsaWNrT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNsaWRlcy5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGtleTogJ29yaWdpbmFsJyArIGdldEtleShjaGlsZCwgaW5kZXgpLFxuICAgICAgJ2RhdGEtaW5kZXgnOiBpbmRleCxcbiAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NlcyxcbiAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgc3R5bGU6ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7IG91dGxpbmU6ICdub25lJyB9LCBjaGlsZC5wcm9wcy5zdHlsZSB8fCB7fSwgY2hpbGRTdHlsZSksXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgfSkpO1xuXG4gICAgLy8gdmFyaWFibGVXaWR0aCBkb2Vzbid0IHdyYXAgcHJvcGVybHkuXG4gICAgaWYgKHNwZWMuaW5maW5pdGUgJiYgc3BlYy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgdmFyIGluZmluaXRlQ291bnQgPSBzcGVjLnZhcmlhYmxlV2lkdGggPyBzcGVjLnNsaWRlc1RvU2hvdyArIDEgOiBzcGVjLnNsaWRlc1RvU2hvdztcblxuICAgICAgaWYgKGluZGV4ID49IGNvdW50IC0gaW5maW5pdGVDb3VudCkge1xuICAgICAgICBrZXkgPSAtKGNvdW50IC0gaW5kZXgpO1xuICAgICAgICBwcmVDbG9uZVNsaWRlcy5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBrZXk6ICdwcmVjbG9uZWQnICsgZ2V0S2V5KGNoaWxkLCBrZXkpLFxuICAgICAgICAgICdkYXRhLWluZGV4Jzoga2V5LFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NlcyxcbiAgICAgICAgICBzdHlsZTogKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBjaGlsZC5wcm9wcy5zdHlsZSB8fCB7fSwgY2hpbGRTdHlsZSksXG4gICAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IGluZmluaXRlQ291bnQpIHtcbiAgICAgICAga2V5ID0gY291bnQgKyBpbmRleDtcbiAgICAgICAgcG9zdENsb25lU2xpZGVzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIGtleTogJ3Bvc3RjbG9uZWQnICsgZ2V0S2V5KGNoaWxkLCBrZXkpLFxuICAgICAgICAgICdkYXRhLWluZGV4Jzoga2V5LFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NlcyxcbiAgICAgICAgICBzdHlsZTogKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBjaGlsZC5wcm9wcy5zdHlsZSB8fCB7fSwgY2hpbGRTdHlsZSksXG4gICAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoc3BlYy5ydGwpIHtcbiAgICByZXR1cm4gcHJlQ2xvbmVTbGlkZXMuY29uY2F0KHNsaWRlcywgcG9zdENsb25lU2xpZGVzKS5yZXZlcnNlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZUNsb25lU2xpZGVzLmNvbmNhdChzbGlkZXMsIHBvc3RDbG9uZVNsaWRlcyk7XG4gIH1cbn07XG5cbnZhciBUcmFjayA9IGV4cG9ydHMuVHJhY2sgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHNsaWRlcyA9IHJlbmRlclNsaWRlcy5jYWxsKHRoaXMsIHRoaXMucHJvcHMpO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdzbGljay10cmFjaycsIHN0eWxlOiB0aGlzLnByb3BzLnRyYWNrU3R5bGUgfSxcbiAgICAgIHNsaWRlc1xuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYWNrO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvdHJhY2suanNcbi8vIG1vZHVsZSBpZCA9IDE1MTlcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5Eb3RzID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBnZXREb3RDb3VudCA9IGZ1bmN0aW9uIGdldERvdENvdW50KHNwZWMpIHtcbiAgdmFyIGRvdHM7XG4gIGRvdHMgPSBNYXRoLmNlaWwoc3BlYy5zbGlkZUNvdW50IC8gc3BlYy5zbGlkZXNUb1Njcm9sbCk7XG4gIHJldHVybiBkb3RzO1xufTtcblxudmFyIERvdHMgPSBleHBvcnRzLkRvdHMgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRG90cywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRG90cygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG90cyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIERvdHMucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihvcHRpb25zLCBlKSB7XG4gICAgLy8gSW4gQXV0b3BsYXkgdGhlIGZvY3VzIHN0YXlzIG9uIGNsaWNrZWQgYnV0dG9uIGV2ZW4gYWZ0ZXIgdHJhbnNpdGlvblxuICAgIC8vIHRvIG5leHQgc2xpZGUuIFRoYXQgb25seSBnb2VzIGF3YXkgYnkgY2xpY2sgc29tZXdoZXJlIG91dHNpZGVcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIob3B0aW9ucyk7XG4gIH07XG5cbiAgRG90cy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGRvdENvdW50ID0gZ2V0RG90Q291bnQoe1xuICAgICAgc2xpZGVDb3VudDogdGhpcy5wcm9wcy5zbGlkZUNvdW50LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucHJvcHMuc2xpZGVzVG9TY3JvbGxcbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IGpvaW4gJiBzcGxpdCB0byBBcnJheSB0byBwcmUtZmlsbCBpdCBmb3IgSUU4XG4gICAgLy9cbiAgICAvLyBDcmVkaXQ6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNzM1NDI1LzE4NDk0NThcbiAgICB2YXIgZG90cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGRvdENvdW50ICsgMSkuam9pbignMCcpLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uICh4LCBpKSB7XG5cbiAgICAgIHZhciBsZWZ0Qm91bmQgPSBpICogX3RoaXMyLnByb3BzLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgdmFyIHJpZ2h0Qm91bmQgPSBpICogX3RoaXMyLnByb3BzLnNsaWRlc1RvU2Nyb2xsICsgKF90aGlzMi5wcm9wcy5zbGlkZXNUb1Njcm9sbCAtIDEpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoe1xuICAgICAgICAnc2xpY2stYWN0aXZlJzogX3RoaXMyLnByb3BzLmN1cnJlbnRTbGlkZSA+PSBsZWZ0Qm91bmQgJiYgX3RoaXMyLnByb3BzLmN1cnJlbnRTbGlkZSA8PSByaWdodEJvdW5kXG4gICAgICB9KTtcblxuICAgICAgdmFyIGRvdE9wdGlvbnMgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICdkb3RzJyxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBfdGhpczIucHJvcHMuc2xpZGVzVG9TY3JvbGwsXG4gICAgICAgIGN1cnJlbnRTbGlkZTogX3RoaXMyLnByb3BzLmN1cnJlbnRTbGlkZVxuICAgICAgfTtcblxuICAgICAgdmFyIG9uQ2xpY2sgPSBfdGhpczIuY2xpY2tIYW5kbGVyLmJpbmQoX3RoaXMyLCBkb3RPcHRpb25zKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGknLFxuICAgICAgICB7IGtleTogaSwgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChfdGhpczIucHJvcHMuY3VzdG9tUGFnaW5nKGkpLCB7IG9uQ2xpY2s6IG9uQ2xpY2sgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuZG90c0NsYXNzLCBzdHlsZTogeyBkaXNwbGF5OiAnYmxvY2snIH0gfSxcbiAgICAgIGRvdHNcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBEb3RzO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1zbGljay9saWIvZG90cy5qc1xuLy8gbW9kdWxlIGlkID0gMTUyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLk5leHRBcnJvdyA9IGV4cG9ydHMuUHJldkFycm93ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL21peGlucy9oZWxwZXJzJyk7XG5cbnZhciBfaGVscGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUHJldkFycm93ID0gZXhwb3J0cy5QcmV2QXJyb3cgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJldkFycm93LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQcmV2QXJyb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZXZBcnJvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFByZXZBcnJvdy5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcihvcHRpb25zLCBlKTtcbiAgfTtcblxuICBQcmV2QXJyb3cucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJldkNsYXNzZXMgPSB7ICdzbGljay1hcnJvdyc6IHRydWUsICdzbGljay1wcmV2JzogdHJ1ZSB9O1xuICAgIHZhciBwcmV2SGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywgeyBtZXNzYWdlOiAncHJldmlvdXMnIH0pO1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmluZmluaXRlICYmICh0aGlzLnByb3BzLmN1cnJlbnRTbGlkZSA9PT0gMCB8fCB0aGlzLnByb3BzLnNsaWRlQ291bnQgPD0gdGhpcy5wcm9wcy5zbGlkZXNUb1Nob3cpKSB7XG4gICAgICBwcmV2Q2xhc3Nlc1snc2xpY2stZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgICBwcmV2SGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHByZXZBcnJvd1Byb3BzID0ge1xuICAgICAga2V5OiAnMCcsXG4gICAgICAnZGF0YS1yb2xlJzogJ25vbmUnLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHByZXZDbGFzc2VzKSxcbiAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdibG9jaycgfSxcbiAgICAgIG9uQ2xpY2s6IHByZXZIYW5kbGVyXG4gICAgfTtcbiAgICB2YXIgY3VzdG9tUHJvcHMgPSB7XG4gICAgICBjdXJyZW50U2xpZGU6IHRoaXMucHJvcHMuY3VycmVudFNsaWRlLFxuICAgICAgc2xpZGVDb3VudDogdGhpcy5wcm9wcy5zbGlkZUNvdW50XG4gICAgfTtcbiAgICB2YXIgcHJldkFycm93O1xuXG4gICAgaWYgKHRoaXMucHJvcHMucHJldkFycm93KSB7XG4gICAgICBwcmV2QXJyb3cgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMucHJldkFycm93LCBfZXh0ZW5kcyh7fSwgcHJldkFycm93UHJvcHMsIGN1c3RvbVByb3BzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZBcnJvdyA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgX2V4dGVuZHMoeyBrZXk6ICcwJywgdHlwZTogJ2J1dHRvbicgfSwgcHJldkFycm93UHJvcHMpLFxuICAgICAgICAnIFByZXZpb3VzJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldkFycm93O1xuICB9O1xuXG4gIHJldHVybiBQcmV2QXJyb3c7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgTmV4dEFycm93ID0gZXhwb3J0cy5OZXh0QXJyb3cgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKE5leHRBcnJvdywgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIE5leHRBcnJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmV4dEFycm93KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIE5leHRBcnJvdy5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKG9wdGlvbnMsIGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcihvcHRpb25zLCBlKTtcbiAgfTtcblxuICBOZXh0QXJyb3cucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgbmV4dENsYXNzZXMgPSB7ICdzbGljay1hcnJvdyc6IHRydWUsICdzbGljay1uZXh0JzogdHJ1ZSB9O1xuICAgIHZhciBuZXh0SGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywgeyBtZXNzYWdlOiAnbmV4dCcgfSk7XG5cbiAgICBpZiAoIV9oZWxwZXJzMi5kZWZhdWx0LmNhbkdvTmV4dCh0aGlzLnByb3BzKSkge1xuICAgICAgbmV4dENsYXNzZXNbJ3NsaWNrLWRpc2FibGVkJ10gPSB0cnVlO1xuICAgICAgbmV4dEhhbmRsZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBuZXh0QXJyb3dQcm9wcyA9IHtcbiAgICAgIGtleTogJzEnLFxuICAgICAgJ2RhdGEtcm9sZSc6ICdub25lJyxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KShuZXh0Q2xhc3NlcyksXG4gICAgICBzdHlsZTogeyBkaXNwbGF5OiAnYmxvY2snIH0sXG4gICAgICBvbkNsaWNrOiBuZXh0SGFuZGxlclxuICAgIH07XG4gICAgdmFyIGN1c3RvbVByb3BzID0ge1xuICAgICAgY3VycmVudFNsaWRlOiB0aGlzLnByb3BzLmN1cnJlbnRTbGlkZSxcbiAgICAgIHNsaWRlQ291bnQ6IHRoaXMucHJvcHMuc2xpZGVDb3VudFxuICAgIH07XG4gICAgdmFyIG5leHRBcnJvdztcblxuICAgIGlmICh0aGlzLnByb3BzLm5leHRBcnJvdykge1xuICAgICAgbmV4dEFycm93ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLm5leHRBcnJvdywgX2V4dGVuZHMoe30sIG5leHRBcnJvd1Byb3BzLCBjdXN0b21Qcm9wcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0QXJyb3cgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgIF9leHRlbmRzKHsga2V5OiAnMScsIHR5cGU6ICdidXR0b24nIH0sIG5leHRBcnJvd1Byb3BzKSxcbiAgICAgICAgJyBOZXh0J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dEFycm93O1xuICB9O1xuXG4gIHJldHVybiBOZXh0QXJyb3c7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNsaWNrL2xpYi9hcnJvd3MuanNcbi8vIG1vZHVsZSBpZCA9IDE1MjFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwidmFyIGNhbWVsMmh5cGhlbiA9IHJlcXVpcmUoJ3N0cmluZy1jb252ZXJ0L2NhbWVsMmh5cGhlbicpO1xuXG52YXIgaXNEaW1lbnNpb24gPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICB2YXIgcmUgPSAvW2hlaWdodHx3aWR0aF0kLztcbiAgcmV0dXJuIHJlLnRlc3QoZmVhdHVyZSk7XG59O1xuXG52YXIgb2JqMm1xID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbXEgPSAnJztcbiAgdmFyIGZlYXR1cmVzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmpbZmVhdHVyZV07XG4gICAgZmVhdHVyZSA9IGNhbWVsMmh5cGhlbihmZWF0dXJlKTtcbiAgICAvLyBBZGQgcHggdG8gZGltZW5zaW9uIGZlYXR1cmVzXG4gICAgaWYgKGlzRGltZW5zaW9uKGZlYXR1cmUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG1xICs9IGZlYXR1cmU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIG1xICs9ICdub3QgJyArIGZlYXR1cmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1xICs9ICcoJyArIGZlYXR1cmUgKyAnOiAnICsgdmFsdWUgKyAnKSc7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IGZlYXR1cmVzLmxlbmd0aC0xKSB7XG4gICAgICBtcSArPSAnIGFuZCAnXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1xO1xufTtcblxudmFyIGpzb24ybXEgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgdmFyIG1xID0gJyc7XG4gIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG4gIC8vIEhhbmRsaW5nIGFycmF5IG9mIG1lZGlhIHF1ZXJpZXNcbiAgaWYgKHF1ZXJ5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIChxLCBpbmRleCkge1xuICAgICAgbXEgKz0gb2JqMm1xKHEpO1xuICAgICAgaWYgKGluZGV4IDwgcXVlcnkubGVuZ3RoLTEpIHtcbiAgICAgICAgbXEgKz0gJywgJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtcTtcbiAgfVxuICAvLyBIYW5kbGluZyBzaW5nbGUgbWVkaWEgcXVlcnlcbiAgcmV0dXJuIG9iajJtcShxdWVyeSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb24ybXE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJ2YXIgY2FtZWwyaHlwaGVuID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgICAgICAgLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuICctJyArIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWwyaHlwaGVuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0cmluZy1jb252ZXJ0L2NhbWVsMmh5cGhlbi5qc1xuLy8gbW9kdWxlIGlkID0gMTUyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJ2YXIgY2FuVXNlRE9NID0gISEoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYW5Vc2VET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2FuLXVzZS1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MjRcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwidmFyIE1lZGlhUXVlcnlEaXNwYXRjaCA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeURpc3BhdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNZWRpYVF1ZXJ5RGlzcGF0Y2goKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsInZhciBNZWRpYVF1ZXJ5ID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xudmFyIGVhY2ggPSBVdGlsLmVhY2g7XG52YXIgaXNGdW5jdGlvbiA9IFV0aWwuaXNGdW5jdGlvbjtcbnZhciBpc0FycmF5ID0gVXRpbC5pc0FycmF5O1xuXG4vKipcbiAqIEFsbG93cyBmb3IgcmVnaXN0cmF0aW9uIG9mIHF1ZXJ5IGhhbmRsZXJzLlxuICogTWFuYWdlcyB0aGUgcXVlcnkgaGFuZGxlcidzIHN0YXRlIGFuZCBpcyByZXNwb25zaWJsZSBmb3Igd2lyaW5nIHVwIGJyb3dzZXIgZXZlbnRzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnlEaXNwYXRjaCAoKSB7XG4gICAgaWYoIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMucXVlcmllcyA9IHt9O1xuICAgIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlID0gIXdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IGFsbCcpLm1hdGNoZXM7XG59XG5cbk1lZGlhUXVlcnlEaXNwYXRjaC5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IE1lZGlhUXVlcnlEaXNwYXRjaCxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGhhbmRsZXIgZm9yIHRoZSBnaXZlbiBtZWRpYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgQXJyYXkgfHwgRnVuY3Rpb259IG9wdGlvbnMgZWl0aGVyIGEgc2luZ2xlIHF1ZXJ5IGhhbmRsZXIgb2JqZWN0LCBhIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZiBxdWVyeSBoYW5kbGVyc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggZmlyZWQgd2hlbiBxdWVyeSBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gZmlyZWQgd2hlbiBhIHF1ZXJ5IGlzIG5vIGxvbmdlciBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIGZpcmVkIHdoZW4gaGFuZGxlciBmaXJzdCB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHdoZXRoZXIgc2V0dXAgc2hvdWxkIGJlIHJ1biBpbW1lZGlhdGVseSBvciBkZWZlcnJlZCB1bnRpbCBxdWVyeSBpcyBmaXJzdCBtYXRjaGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkRGVncmFkZT1mYWxzZV0gd2hldGhlciB0aGlzIHBhcnRpY3VsYXIgbWVkaWEgcXVlcnkgc2hvdWxkIGFsd2F5cyBydW4gb24gaW5jYXBhYmxlIGJyb3dzZXJzXG4gICAgICovXG4gICAgcmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBvcHRpb25zLCBzaG91bGREZWdyYWRlKSB7XG4gICAgICAgIHZhciBxdWVyaWVzICAgICAgICAgPSB0aGlzLnF1ZXJpZXMsXG4gICAgICAgICAgICBpc1VuY29uZGl0aW9uYWwgPSBzaG91bGREZWdyYWRlICYmIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlO1xuXG4gICAgICAgIGlmKCFxdWVyaWVzW3FdKSB7XG4gICAgICAgICAgICBxdWVyaWVzW3FdID0gbmV3IE1lZGlhUXVlcnkocSwgaXNVbmNvbmRpdGlvbmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9ybWFsaXNlIHRvIG9iamVjdCBpbiBhbiBhcnJheVxuICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtYXRjaCA6IG9wdGlvbnMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtvcHRpb25zXTtcbiAgICAgICAgfVxuICAgICAgICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHsgbWF0Y2ggOiBoYW5kbGVyIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyaWVzW3FdLmFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB1bnJlZ2lzdGVycyBhIHF1ZXJ5IGFuZCBhbGwgaXQncyBoYW5kbGVycywgb3IgYSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFtoYW5kbGVyXSBzcGVjaWZpYyBoYW5kbGVyIHRvIHVucmVnaXN0ZXJcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbcV07XG5cbiAgICAgICAgaWYocXVlcnkpIHtcbiAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5yZW1vdmVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzW3FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5RGlzcGF0Y2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9NZWRpYVF1ZXJ5RGlzcGF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE1MjZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwidmFyIFF1ZXJ5SGFuZGxlciA9IHJlcXVpcmUoJy4vUXVlcnlIYW5kbGVyJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vVXRpbCcpLmVhY2g7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZWRpYSBxdWVyeSwgbWFuYWdlcyBpdCdzIHN0YXRlIGFuZCByZWdpc3RlcmVkIGhhbmRsZXJzIGZvciB0aGlzIHF1ZXJ5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIG1lZGlhIHF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeShxdWVyeSwgaXNVbmNvbmRpdGlvbmFsKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaXNVbmNvbmRpdGlvbmFsID0gaXNVbmNvbmRpdGlvbmFsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24obXFsKSB7XG4gICAgICAgIC8vIENocm9tZSBwYXNzZXMgYW4gTWVkaWFRdWVyeUxpc3RFdmVudCBvYmplY3QsIHdoaWxlIG90aGVyIGJyb3dzZXJzIHBhc3MgTWVkaWFRdWVyeUxpc3QgZGlyZWN0bHlcbiAgICAgICAgc2VsZi5tcWwgPSBtcWwuY3VycmVudFRhcmdldCB8fCBtcWw7XG4gICAgICAgIHNlbGYuYXNzZXNzKCk7XG4gICAgfTtcbiAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbn1cblxuTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHVjdG9yIDogTWVkaWFRdWVyeSxcblxuICAgIC8qKlxuICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci51bm1hdGNoXSBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBkZWFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnNldHVwXSBjYWxsYmFjayBmb3IgaW1tZWRpYXRlIGV4ZWN1dGlvbiB3aGVuIGEgcXVlcnkgaGFuZGxlciBpcyByZWdpc3RlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICovXG4gICAgYWRkSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHFoKTtcblxuICAgICAgICB0aGlzLm1hdGNoZXMoKSAmJiBxaC5vbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVzIHRoZSBnaXZlbiBoYW5kbGVyIGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCBjYWxscyBpdCdzIGRlc3Ryb3kgbWV0aG9kc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IGhhbmRsZXIgdGhlIGhhbmRsZXIgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlSGFuZGxlciA6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgaWYoaC5lcXVhbHMoaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1lZGlhIHF1ZXJ5IGNhbiBiZSBjb25zaWRlcmVkIGEgbWF0Y2gsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIG1hdGNoZXMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXFsLm1hdGNoZXMgfHwgdGhpcy5pc1VuY29uZGl0aW9uYWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgaGFuZGxlcnMgYW5kIHVuYmluZHMgZXZlbnRzXG4gICAgICovXG4gICAgY2xlYXIgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAqL1xuICAgIGFzc2VzcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgZWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyW2FjdGlvbl0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVF1ZXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTUyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvKipcbiAqIERlbGVnYXRlIHRvIGhhbmRsZSBhIG1lZGlhIHF1ZXJ5IGJlaW5nIG1hdGNoZWQgYW5kIHVubWF0Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIHVubWF0Y2hlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuc2V0dXBdIG9uZS10aW1lIGNhbGxiYWNrIHRyaWdnZXJlZCB0aGUgZmlyc3QgdGltZSBhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBydW4gaW1tZWRpYXRlbHksIHJhdGhlciB0aGFuIGZpcnN0IHRpbWUgcXVlcnkgaXMgbWF0Y2hlZD9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeUhhbmRsZXIob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIW9wdGlvbnMuZGVmZXJTZXR1cCAmJiB0aGlzLnNldHVwKCk7XG59XG5cblF1ZXJ5SGFuZGxlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvciA6IFF1ZXJ5SGFuZGxlcixcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHNldHVwIG9mIHRoZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuc2V0dXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBhbmQgdHJpZ2dlcmluZyBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgIXRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWF0Y2ggJiYgdGhpcy5vcHRpb25zLm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNvb3JkaW5hdGVzIHRoZSB1bm1hdGNoIGV2ZW50IGZvciB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgb2ZmIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51bm1hdGNoICYmIHRoaXMub3B0aW9ucy51bm1hdGNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNhbGxlZCB3aGVuIGEgaGFuZGxlciBpcyB0byBiZSBkZXN0cm95ZWQuXG4gICAgICogZGVsZWdhdGVzIHRvIHRoZSBkZXN0cm95IG9yIHVubWF0Y2ggY2FsbGJhY2tzLCBkZXBlbmRpbmcgb24gYXZhaWxhYmlsaXR5LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgZGVzdHJveSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveSA/IHRoaXMub3B0aW9ucy5kZXN0cm95KCkgOiB0aGlzLm9mZigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBpZiBvYmplY3QgaXMgc3VwcGxpZWQgY29tcGFyZSBvcHRpb25zLCBpZiBmdW5jdGlvbiwgY29tcGFyZSBtYXRjaCBjYWxsYmFja1xuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFt0YXJnZXRdIHRoZSB0YXJnZXQgZm9yIGNvbXBhcmlzb25cbiAgICAgKi9cbiAgICBlcXVhbHMgOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9PT0gdGFyZ2V0IHx8IHRoaXMub3B0aW9ucy5tYXRjaCA9PT0gdGFyZ2V0O1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeUhhbmRsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9RdWVyeUhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4qXG4qIFNlYXJjaEJhclxuKlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJ1xuXG5jbGFzcyBTZWxlY3RlZEl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbWc6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGlkOiAwLFxuICAgIG9uUmVtb3ZlOiAoaWQsIG5hbWUsIGltZykgPT4ge31cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBpZCwgaW1nIH0gPSB0aGlzLnByb3BzXG4gICAgbG9nZ2VyLndhcm4oJ1NlbGVjdGVkSXRlbScsIG5hbWUsIGlkLCBpbWcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VsZWN0ZWQtdG9waWNgfSBrZXk9e2B0b3BpYy0ke2lkfWB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nIHx8ICcvc3RhdGljL2ltYWdlcy9uby1pbWFnZS5wbmcnfSlgLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgIG9wYWNpdHk6ICcwLjYnXG4gICAgICAgIH19PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdG9waWMnPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdidG4tYm94LXJlbW92ZScgb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLm9uUmVtb3ZlKGlkLCBuYW1lLCBpbWcpIH19PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVtb3ZlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkSXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL1NlbGVjdGVkSXRlbS5qcyIsIi8qKlxuKlxuKiBMb2FkaW5nXG4qXG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreS1lbCdcbmltcG9ydCBTZWxlY3RlZExpc3QgZnJvbSAnLi9TZWxlY3RlZExpc3QnXG5cbkBpbmplY3QoJ3N0b3JlJylcbkBpbmplY3QoJ3VpJylcbkBvYnNlcnZlclxuY2xhc3MgU2VsZWN0ZWRQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRvdGFsOiAwLFxuICAgIGl0ZW1zOiBbXVxuICB9XG5cbiAgb25SZW1vdmUgPSAoaWQsIG5hbWUsIGltZykgPT4ge1xuICAgIHRoaXMucHJvcHMudWkudG9nZ2xlU2VsZWN0VG9waWMoZmFsc2UsIGlkLCBuYW1lLCBpbWcpXG4gIH1cblxuICBzaG93U2lnblVwID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudWkudG9nZ2xlU2lnbkluKHRydWUsICdTaWduIFVwJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBpdGVtcywgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFN0aWNreSBjbGFzc05hbWU9J2FuaW1hdGVkIGZhZGVJblVwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdGVkLXBhbmVsJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZW5naW5lJz5cbiAgICAgICAgICAgIFdoYXQga2luZCBvZiB0aGluZ3MgYXJlIHlvdSBpbnRlcmVzdGVkIGlu4oCmXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRvdGFsID4gMCAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2stYnV0dG9uJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1sb2dpbicgb25DbGljaz17dGhpcy5zaG93U2lnblVwfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2lnbi1pbicgYXJpYS1oaWRkZW49J3RydWUnIC8+IE9rISBMZXTigJlzIGdvXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7aXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiA8U2VsZWN0ZWRMaXN0IGl0ZW1zPXtpdGVtc30gb25SZW1vdmU9e3RoaXMub25SZW1vdmV9IC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0aWNreT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRQYW5lbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBVkE7Ozs7OztBQVdBOzs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFkQTtBQWVBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBVUE7Ozs7O0FBNUNBO0FBRUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQURBO0FBQ0E7QUF1Q0E7QUFDQTs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDclZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBVEE7Ozs7OztBQVVBOzs7Ozs7Ozs7OztBQWVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBRUE7QUFBQTtBQUZBO0FBRkE7QUFNQTtBQU5BO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7O0FBM0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQXdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBWEE7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBSkE7QUFBQTs7Ozs7QUFuQ0E7QUFFQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBREE7QUFDQTtBQWtDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
          })
        