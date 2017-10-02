'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fbScrapeShareUrl;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fbScrapeShareUrl(url) {
  return (0, _axios2.default)({
    method: 'post',
    url: 'https://graph.facebook.com?scrape=true&id=' + url
  });
}