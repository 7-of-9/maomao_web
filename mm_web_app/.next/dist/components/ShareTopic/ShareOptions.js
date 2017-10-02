'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _noParser = require('styled-components/no-parser');

var _noParser2 = _interopRequireDefault(_noParser);

var _reactToggleButton = require('react-toggle-button');

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _hash = require('../../utils/hash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/ShareOptions.js';


/* eslint-disable no-confusing-arrow */
var Option = (0, _noParser2.default)(_reactToggleButton2.default).withConfig({
  displayName: 'ShareOptions__Option',
  componentId: 'tqqj07-0'
})([[':hover{cursor:pointer;background:#dedede;}']]);

var style = {
  margin: '0 auto',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  overflow: 'hidden'
};

var enhance = (0, _recompose.compose)((0, _recompose.onlyUpdateForKeys)(['topic', 'active']));

var ShareOptions = enhance(function (_ref) {
  var topics = _ref.topics,
      active = _ref.active,
      _onChange = _ref.onChange;

  var tld = topics.find(function (item) {
    return item.id.indexOf('tld') !== -1;
  });
  var experimentalTopics = topics.filter(function (item) {
    return item.id.indexOf('beta') !== -1;
  });
  var isToggleTopic = !!topics.find(function (item) {
    return item.id === active;
  });
  return _react2.default.createElement('div', { style: style, className: 'share-topic', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('div', { className: 'switch-list', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('div', { className: 'checkbox__content', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('div', { className: 'switch-select', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'set-size-button', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(Option, { key: (0, _hash.guid)(), value: active === 'site', onToggle: function onToggle() {
      _onChange('site');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), _react2.default.createElement('span', { className: 'share-topic-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Just this url')))), _react2.default.createElement('div', { className: 'switch-list', style: { display: topics.length > 0 ? '' : 'none' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('div', { className: 'checkbox__content', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('div', { className: 'checkbox__content', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', { key: (0, _hash.guid)(), className: 'switch-select', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', { className: 'set-size-button', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(Option, {
    key: (0, _hash.guid)(),
    value: isToggleTopic,
    onToggle: function onToggle() {
      _onChange(tld && tld.id || experimentalTopics[0] && experimentalTopics[0].id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement('span', { className: 'share-topic-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, 'Topics:')))), _react2.default.createElement('div', { className: 'checkbox__content', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('div', { className: 'radio__row', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, isToggleTopic && tld && _react2.default.createElement('div', { className: 'radio__regular', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement('input', {
    id: tld.id,
    type: 'radio',
    onChange: function onChange() {
      _onChange(tld.id);
    },
    value: tld.id,
    checked: active === tld.id,
    className: 'radio__regular__input',
    name: 'topics',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), _react2.default.createElement('label', { className: 'radio__regular__label', htmlFor: tld.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, tld.name)), isToggleTopic && experimentalTopics.length > 0 && experimentalTopics.map(function (topic) {
    return _react2.default.createElement('div', { key: (0, _hash.guid)(), className: 'radio__regular', __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }, _react2.default.createElement('input', {
      type: 'radio',
      onChange: function onChange() {
        _onChange(topic.id);
      },
      value: topic.id,
      id: topic.id,
      checked: active === topic.id,
      className: 'radio__regular__input',
      name: 'topics',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }), _react2.default.createElement('label', { className: 'radio__regular__label', htmlFor: topic.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      }
    }, topic.name));
  })))), _react2.default.createElement('div', { className: 'switch-list mb0', __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('div', { className: 'switch-select', __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement('div', { className: 'set-size-button', __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement(Option, { key: (0, _hash.guid)(), value: active === 'all', onToggle: function onToggle() {
      _onChange('all');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  })), _react2.default.createElement('span', { className: 'share-topic-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, 'Everything I browse, on all websites'))));
});

ShareOptions.propTypes = {
  active: _propTypes2.default.string.isRequired,
  topics: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired
};
exports.default = ShareOptions;