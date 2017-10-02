'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fbemitter = require('fbemitter');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layoutEmitter = new _fbemitter.EventEmitter();

layoutEmitter.addListener('layout', function (args) {
  _logger2.default.warn('layoutEmitter layout', args);
});

exports.default = layoutEmitter;