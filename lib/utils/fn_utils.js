"use strict";

exports.__esModule = true;
exports.debounce = debounce;
function debounce(f, delay) {
  var t = undefined;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    function handler() {
      clearTimeout(t);
      f.apply(undefined, args);
    }
    clearTimeout(t);
    t = setTimeout(handler, delay);
  };
}
