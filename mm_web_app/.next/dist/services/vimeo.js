'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vimeoVideo = vimeoVideo;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mobxUtils = require('mobx-utils');

var _constants = require('../containers/App/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function vimeoVideo(keyword) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var VIMEO_URL = 'https://api.vimeo.com/videos?page=' + page + '&per_page=' + _constants.LIMIT + '&query=' + keyword + '&sort=relevant';
  return (0, _mobxUtils.fromPromise)((0, _axios2.default)({
    method: 'get',
    url: VIMEO_URL,
    headers: {
      Authorization: 'Bearer ' + _constants.VIMEO_TOKEN
    }
  }));
}