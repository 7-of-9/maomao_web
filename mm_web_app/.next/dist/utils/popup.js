'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openUrl;
var _this = undefined;

var defaultOptions = {
  toolbar: 'no',
  location: 'no',
  directories: 'no',
  status: 'no',
  menubar: 'no',
  scrollbars: 'yes',
  resizable: 'yes',
  width: 500,
  height: 400,
  top: function top(o, w) {
    return (w.innerHeight - o.height) / 2 + w.screenY;
  },
  left: function left(o, w) {
    return (w.innerWidth - o.width) / 2 + w.screenX;
  }
};

var createOptions = function createOptions() {
  var ret = [];
  /* eslint-disable no-restricted-syntax */
  for (var key in defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, key)) {
      ret.push(key + '=' + (typeof defaultOptions[key] === 'function' ? defaultOptions[key].call(_this, defaultOptions, window) : defaultOptions[key]));
    }
  }
  return ret.join(',');
};

function openUrl(url) {
  window.open(url, 'Loading', createOptions());
}