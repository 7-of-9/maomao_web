'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dev = process.env.NODE_ENV !== 'production';
var logger = require('loglevel');
logger.setLevel(dev ? 'info' : 'error');

exports.default = logger;