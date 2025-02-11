"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SharedStrings = /*#__PURE__*/function () {
  function SharedStrings() {
    _classCallCheck(this, SharedStrings);
    this._values = [];
    this._totalRefs = 0;
    this._hash = Object.create(null);
  }
  _createClass(SharedStrings, [{
    key: "count",
    get: function get() {
      return this._values.length;
    }
  }, {
    key: "values",
    get: function get() {
      return this._values;
    }
  }, {
    key: "totalRefs",
    get: function get() {
      return this._totalRefs;
    }
  }, {
    key: "getString",
    value: function getString(index) {
      return this._values[index];
    }
  }, {
    key: "add",
    value: function add(value) {
      var index = this._hash[value];
      if (index === undefined) {
        index = this._hash[value] = this._values.length;
        this._values.push(value);
      }
      this._totalRefs++;
      return index;
    }
  }]);
  return SharedStrings;
}();
module.exports = SharedStrings;
//# sourceMappingURL=shared-strings.js.map
