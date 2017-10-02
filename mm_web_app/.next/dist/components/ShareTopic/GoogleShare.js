'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validate = require('validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _match = require('autosuggest-highlight/match');

var _match2 = _interopRequireDefault(_match);

var _parse = require('autosuggest-highlight/parse');

var _parse2 = _interopRequireDefault(_parse);

var _recompose = require('recompose');

var _Contact = require('./Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _hash = require('../../utils/hash');

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/GoogleShare.js';


function getSuggestionValue(suggestion) {
  return suggestion.email;
}

function getSuggestions(contacts, value) {
  if (value === '') {
    return [];
  }

  var options = {
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
    keys: ['name', 'email']
  };
  var fuse = new _fuse2.default(contacts, options);
  var result = fuse.search(value);
  _logger2.default.info('getSuggestions value, result, contacts', value, result, contacts);
  return result.slice(0, 5);
}

/* eslint-disable no-param-reassign */
function renderSuggestion(suggestion, _ref) {
  var query = _ref.query;

  var suggestionText = suggestion.name + ' ' + suggestion.email;
  var matches = (0, _match2.default)(suggestionText, query);
  var parts = (0, _parse2.default)(suggestionText, matches);
  return _react2.default.createElement('span', { className: 'suggestion-content', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('span', { className: 'photo', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('img', {
    onError: function onError(ev) {
      ev.target.src = '/static/images/no-image.png';
    },
    src: suggestion.image,
    alt: suggestion.name || suggestion.email,
    height: '40',
    width: '40',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })), _react2.default.createElement('span', { className: 'name', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, parts.map(function (part) {
    var className = part.highlight ? 'highlight' : null;
    return _react2.default.createElement('span', { className: className, key: (0, _hash.guid)(), __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, part.text);
  })));
}

var enhance = (0, _recompose.compose)((0, _recompose.withState)('suggestions', 'changeSuggestions', []), (0, _recompose.withState)('selectedContacts', 'changeSelectedContacts', []), (0, _recompose.withState)('value', 'changeValue', ''), (0, _recompose.withHandlers)({
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props) {
    return function () {
      var emails = props.selectedContacts.map(function (item) {
        return item.email;
      });
      var sources = props.contacts.filter(function (item) {
        return emails.indexOf(item.email) === -1;
      });
      props.changeSuggestions(getSuggestions(sources, props.value));
    };
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(props) {
    return function () {
      props.changeSuggestions([]);
    };
  },
  addContact: function addContact(props) {
    return function (contact) {
      var emails = props.selectedContacts.map(function (item) {
        return item.email;
      });
      if (!emails.includes(contact.email)) {
        props.changeSelectedContacts([].concat(props.selectedContacts, contact));
        props.handleChange([].concat(props.selectedContacts, contact));
      }
    };
  },
  removeContact: function removeContact(props) {
    return function (contact) {
      var sources = props.selectedContacts.filter(function (item) {
        return item.email !== contact.email;
      });
      props.handleChange(sources);
      props.changeSelectedContacts(sources);
    };
  },
  onSubmit: function onSubmit(props) {
    return function (event) {
      event.preventDefault();
      _logger2.default.info('onSubmit value', props.value);
      var emails = props.selectedContacts.map(function (item) {
        return item.email;
      });
      var sources = props.contacts.filter(function (item) {
        return emails.indexOf(item.email) === -1;
      });
      var selected = getSuggestions(sources, props.value);
      _logger2.default.info('onSubmit selected', selected);
      var result = [].concat(props.selectedContacts, selected && selected[0] || []);
      _logger2.default.info('onSubmit result', result);
      var isEmail = _validate2.default.single(props.value, { presence: true, email: true });
      var isExist = props.selectedContacts.find(function (item) {
        return item.email === props.value;
      });
      _logger2.default.info('onSubmit props.value, isEmail', props.value, isEmail);
      if (selected.length === 0 && !isEmail && !isExist) {
        // validate email
        result.push({
          key: (0, _hash.guid)(),
          name: props.value,
          email: props.value,
          image: ''
        });
      }
      _logger2.default.info('result', result);
      props.handleChange(result);
      props.changeSelectedContacts(result);
      props.changeValue('');
    };
  },
  onChange: function onChange(props) {
    return function (event, _ref2) {
      var newValue = _ref2.newValue,
          method = _ref2.method;

      _logger2.default.info('onChange event', event);
      _logger2.default.info('onChange', newValue, method);
      if (method === 'click') {
        var selected = getSuggestions(props.suggestions, newValue);
        var result = [].concat(props.selectedContacts, selected && selected[0] || []);
        _logger2.default.info('onChange result', result);
        props.handleChange(result);
        props.changeSelectedContacts(result);
        props.changeValue('');
      } else {
        props.changeValue(newValue);
      }
    };
  }
}), (0, _recompose.onlyUpdateForKeys)(['value', 'contacts', 'suggestions', 'selectedContacts']));

var GoogleShare = enhance(function (_ref3) {
  var value = _ref3.value,
      mostRecentUses = _ref3.mostRecentUses,
      selectedContacts = _ref3.selectedContacts,
      addContact = _ref3.addContact,
      removeContact = _ref3.removeContact,
      onChange = _ref3.onChange,
      suggestions = _ref3.suggestions,
      onSuggestionsFetchRequested = _ref3.onSuggestionsFetchRequested,
      onSubmit = _ref3.onSubmit,
      onSuggestionsClearRequested = _ref3.onSuggestionsClearRequested;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }, _react2.default.createElement('div', { style: { display: 'inline-block', width: '100%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, mostRecentUses.map(function (contact) {
    if (!selectedContacts.map(function (item) {
      return item.email;
    }).includes(contact.email)) {
      return _react2.default.createElement(_Contact2.default, {
        onClick: function onClick() {
          addContact(contact);
        },
        key: 'MRC-' + contact.email,
        name: contact.name,
        email: contact.email,
        image: contact.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      });
    }
    return '';
  })), _react2.default.createElement('div', { className: 'panel-autocomplete', __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }, _react2.default.createElement('form', { onSubmit: onSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, _react2.default.createElement(_reactAutosuggest2.default, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion,
    highlightFirstSuggestion: true,
    inputProps: {
      placeholder: 'To: type name to search...',
      value: value,
      onChange: onChange
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }))), _react2.default.createElement('div', { style: { display: 'inline-block', width: '100%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, selectedContacts.map(function (contact) {
    return _react2.default.createElement(_Contact2.default, { isEdit: true, onRemove: function onRemove() {
        removeContact(contact);
      }, key: 'SC-' + contact.email, name: contact.name, email: contact.email, image: contact.image, __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      }
    });
  })));
});

GoogleShare.propTypes = {
  contacts: _propTypes2.default.array.isRequired,
  mostRecentUses: _propTypes2.default.array.isRequired,
  handleChange: _propTypes2.default.func.isRequired
};

exports.default = GoogleShare;