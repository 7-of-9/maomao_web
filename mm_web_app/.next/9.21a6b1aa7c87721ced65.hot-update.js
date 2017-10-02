webpackHotUpdate(9,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS4yMWE2YjFhYTdjODc3MjFjZWQ2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RlZFBhbmVsL1NlbGVjdGVkTGlzdC5qcz80MzNhMTMxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VsZWN0ZWRQYW5lbC9pbmRleC5qcz80MzNhMTMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKlxuKiBTZWFyY2hCYXJcbipcbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXG5pbXBvcnQgU2VsZWN0ZWRJdGVtIGZyb20gJy4vU2VsZWN0ZWRJdGVtJ1xuXG5jbGFzcyBTZWxlY3RlZExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIG9uUmVtb3ZlOiAoaWQsIG5hbWUsIGltZykgPT4ge31cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHJlc3BvbnNpdmU6IFsge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogTWF0aC5taW4oaXRlbXMubGVuZ3RoLCAzKSB9XG4gICAgICB9LCB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogTWF0aC5taW4oaXRlbXMubGVuZ3RoLCA1KSB9XG4gICAgICB9XSxcbiAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7XG4gICAgICAgICAgaXRlbXMubWFwKCh7bmFtZSwgaW1nLCBpZH0pID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtgJHtpZH0tJHtuYW1lfWB9PlxuICAgICAgICAgICAgICA8U2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBpbWc9e2ltZ31cbiAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucHJvcHMub25SZW1vdmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NsaWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRMaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlbGVjdGVkUGFuZWwvU2VsZWN0ZWRMaXN0LmpzIiwiLyoqXG4qXG4qIExvYWRpbmdcbipcbiovXG5cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0IH0gZnJvbSAnbW9ieC1yZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5LWVsJ1xuaW1wb3J0IFNlbGVjdGVkTGlzdCBmcm9tICcuL1NlbGVjdGVkTGlzdCdcblxuQGluamVjdCgnc3RvcmUnKVxuQGluamVjdCgndWknKVxuQG9ic2VydmVyXG5jbGFzcyBTZWxlY3RlZFBhbmVsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG90YWw6IDAsXG4gICAgaXRlbXM6IFtdXG4gIH1cblxuICBvblJlbW92ZSA9IChpZCwgbmFtZSwgaW1nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTZWxlY3RUb3BpYyhmYWxzZSwgaWQsIG5hbWUsIGltZylcbiAgfVxuXG4gIHNob3dTaWduVXAgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy51aS50b2dnbGVTaWduSW4odHJ1ZSwgJ1NpZ24gVXAnKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8U3RpY2t5IGNsYXNzTmFtZT0nYW5pbWF0ZWQgZmFkZUluVXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0ZWQtcGFuZWwnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1lbmdpbmUnPlxuICAgICAgICAgICAgV2hhdCBraW5kIG9mIHRoaW5ncyBhcmUgeW91IGludGVyZXN0ZWQgaW7igKZcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG90YWwgPiAwICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jay1idXR0b24nIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxvZ2luJyBvbkNsaWNrPXt0aGlzLnNob3dTaWduVXB9PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaWduLWluJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz4gT2shIExldOKAmXMgZ29cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIDxTZWxlY3RlZExpc3QgaXRlbXM9e2l0ZW1zfSBvblJlbW92ZT17dGhpcy5vblJlbW92ZX0gLz4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3RpY2t5PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZFBhbmVsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlbGVjdGVkUGFuZWwvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQVZBOzs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBZEE7QUFlQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQVVBOzs7OztBQTVDQTtBQUVBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFEQTtBQUNBO0FBdUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFYQTs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBSUE7QUFKQTtBQUFBOzs7OztBQW5DQTtBQUVBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFEQTtBQUNBO0FBa0NBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=