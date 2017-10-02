"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagColor = tagColor;
var MAX_COLORS = 12;

function tagColor(name) {
  return "tags-color-" + (name.length % MAX_COLORS + 1);
}