'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _rcSteps = require('rc-steps');

var _rcSteps2 = _interopRequireDefault(_rcSteps);

var _StepOne = require('./StepOne');

var _StepOne2 = _interopRequireDefault(_StepOne);

var _StepTwo = require('./StepTwo');

var _StepTwo2 = _interopRequireDefault(_StepTwo);

var _StepThree = require('./StepThree');

var _StepThree2 = _interopRequireDefault(_StepThree);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/dom/src/MAOMAO/mm_web_app/components/ShareTopic/index.js';


var SITE_URL = 'https://maomaoweb.azurewebsites.net';
var style = {
  container: {
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  topic: {
    fontWeight: 'bolder'
  },
  heading: {
    padding: '0 50px',
    lineHeight: '30px',
    fontSize: '25px',
    margin: '20px 0 15px',
    overflow: 'hidden'
  },
  chip: {
    margin: 4
  },
  wrapper: {
    overflow: 'auto',
    maxHeight: '300px'
  }
};

var selectTopics = function selectTopics(topics, type) {
  if (type === 'site') {
    return 'just this url';
  }
  if (type === 'all') {
    return 'My browsing history';
  }
  var currentTopic = topics.find(function (item) {
    return item.id === type;
  });
  return currentTopic && currentTopic.name;
};

var selectUrl = function selectUrl(code, shareOption) {
  return code[shareOption];
};

var enhance = (0, _recompose.compose)((0, _recompose.withState)('recipients', 'updateRecipients', []), (0, _recompose.withHandlers)({
  handleChange: function handleChange(props) {
    return function (emails) {
      props.updateRecipients(emails);
    };
  },
  sendEmails: function sendEmails(props) {
    return function () {
      if (props.recipients.length) {
        var topic = selectTopics(props.topics, props.shareOption);
        if (topic === 'just this page') {
          topic = document.title;
        }
        var url = SITE_URL + '/' + selectUrl(props.code, props.shareOption);
        props.recipients.forEach(function (item) {
          // TODO: validate email addr
          props.sendEmail(item.name, item.email, topic, url);
        });
      } else {
        props.notify({
          title: 'Please choose your friends to send invitations!',
          autoHide: 3000
        });
      }
    };
  }
}), (0, _recompose.onlyUpdateForKeys)(['contacts', 'currentStep', 'code', 'type', 'shareOption']));

function ShareTopic(_ref) {
  var type = _ref.type,
      topics = _ref.topics,
      contacts = _ref.contacts,
      code = _ref.code,
      shareOption = _ref.shareOption,
      currentStep = _ref.currentStep,
      handleChange = _ref.handleChange,
      shareUrl = _ref.shareUrl,
      sendMsgUrl = _ref.sendMsgUrl,
      changeShareType = _ref.changeShareType,
      notify = _ref.notify,
      sendEmails = _ref.sendEmails,
      closeShare = _ref.closeShare,
      accessGoogleContacts = _ref.accessGoogleContacts;

  _logger2.default.info('ShareTopic type, topics, contacts, code, shareOption, currentStep', type, topics, contacts, code, shareOption, currentStep);
  var steps = [{ title: 'Select your content', description: 'Share this page or topics with your friends.' }, { title: 'Choose the way to sharing with friends', description: 'Use Facebook, Gmail or get direct link.' }, { title: 'Finish', description: 'Ready to share' }].map(function (item) {
    return _react2.default.createElement(_rcSteps.Step, {
      key: item.title,
      status: item.status,
      title: item.title,
      description: item.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    });
  });
  return _react2.default.createElement('div', { style: style.container, __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _react2.default.createElement(_rcSteps2.default, { className: 'share-steps', current: currentStep - 1, direction: 'vertical', size: 'small', __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, steps), _react2.default.createElement('h3', { className: 'share-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, 'Share', _react2.default.createElement('em', { style: style.topic, __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, ' ', selectTopics(topics, shareOption), ' '), type && type.length > 0 && currentStep > 2 && 'with friends by ' + type), currentStep && currentStep === 1 && _react2.default.createElement(_StepOne2.default, {
    shareOption: shareOption,
    type: type,
    code: code,
    topics: topics,
    changeShareType: changeShareType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }), currentStep && currentStep === 2 && _react2.default.createElement(_StepTwo2.default, {
    shareOption: shareOption,
    type: type,
    changeShareType: changeShareType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }), currentStep && currentStep === 3 && _react2.default.createElement(_StepThree2.default, {
    notify: notify,
    shareOption: shareOption,
    type: type,
    contacts: contacts,
    changeShareType: changeShareType,
    code: code,
    handleChange: handleChange,
    sendEmails: sendEmails,
    accessGoogleContacts: accessGoogleContacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }));
}

ShareTopic.propTypes = {
  type: _propTypes2.default.string.isRequired,
  shareOption: _propTypes2.default.string.isRequired,
  code: _propTypes2.default.object.isRequired,
  contacts: _propTypes2.default.array.isRequired,
  topics: _propTypes2.default.array.isRequired,
  currentStep: _propTypes2.default.number.isRequired,
  sendEmail: _propTypes2.default.func.isRequired,
  changeShareType: _propTypes2.default.func.isRequired,
  accessGoogleContacts: _propTypes2.default.func.isRequired,
  notify: _propTypes2.default.func.isRequired
};
exports.default = enhance(ShareTopic);