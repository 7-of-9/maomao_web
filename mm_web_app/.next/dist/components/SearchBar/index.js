'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/SearchBar/index.js';
/**
*
* SearchBar
*
*/

var enhance = (0, _recompose.compose)((0, _recompose.withState)('value', 'changeValue', ''), (0, _recompose.withHandlers)({
  onInput: function onInput(props) {
    return function (event) {
      _logger2.default.warn('onInput', event);
      props.changeValue(event.target.value);
    };
  },
  onSearch: function onSearch(props) {
    return function (event) {
      _logger2.default.warn('onSearch', event);
      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }
      var tag = props.value;
      props.terms.push(tag);
      props.changeValue('');
      props.onChange(props.terms);
    };
  },
  handleAdd: function handleAdd(props) {
    return function (tag) {
      props.terms.push(tag);
      props.onChange(props.terms);
    };
  },
  handleDelete: function handleDelete(props) {
    return function (index) {
      _logger2.default.warn('handleDelete', index, props.terms);
      props.terms.splice(index, 1);
      props.changeValue(props.terms.length);
      props.onChange(props.terms);
      props.changeValue('');
    };
  }
}));

var SearchBar = enhance(function (_ref) {
  var terms = _ref.terms,
      suggestions = _ref.suggestions,
      value = _ref.value,
      onInput = _ref.onInput,
      onSearch = _ref.onSearch,
      handleAdd = _ref.handleAdd,
      handleDelete = _ref.handleDelete;

  var inputProps = {
    placeholder: 'Search...',
    value: value,
    onChange: onInput
  };
  return _react2.default.createElement(_Form2.default, { onSubmit: onSearch, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('nav', { className: 'navbar', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('div', { className: 'nav navbar-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement('div', { id: 'toolbar-search', className: 'widget-form', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement('div', { className: 'input-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('div', { className: 'input-group-suggest', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement('div', { className: 'search-box-drop', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement('ul', { className: 'search-box-list', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, terms.map(function (item, index) {
    return _react2.default.createElement('li', { className: (0, _helper.tagColor)(item), key: 'topic-' + item, __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, _react2.default.createElement('span', { className: 'text-topic', __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, item), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
        handleDelete(index);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, _react2.default.createElement('i', { className: 'fa fa-remove', 'aria-hidden': 'true', __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    })));
  }))), _react2.default.createElement('div', { className: 'react-autosuggest__container', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement(_reactDebounceInput2.default, (0, _extends3.default)({
    className: 'react-autosuggest__input',
    debounceTimeout: 200
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }))))), suggestions && suggestions.length > 0 && _react2.default.createElement('div', { className: 'suggestion-topic', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, suggestions.map(function (item) {
    return terms.indexOf(item) === -1 && _react2.default.createElement('div', { key: 'suggest-' + item, className: 'suggestion-topic-item ' + (0, _helper.tagColor)(item), __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, _react2.default.createElement('span', { className: 'text-topic', __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, item), _react2.default.createElement('a', { className: 'btn-box-remove', onClick: function onClick() {
        return handleAdd(item);
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    }, _react2.default.createElement('i', { className: 'fa fa-plus', __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    })));
  }))))));
});

SearchBar.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  terms: _propTypes2.default.array.isRequired,
  suggestions: _propTypes2.default.array,
  value: _propTypes2.default.string
};

exports.default = SearchBar;