"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var HelloWorld =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HelloWorld, _Component);

  function HelloWorld() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HelloWorld.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "main-box"
    }, "hello world!");
  };

  return HelloWorld;
}(_react.Component);

var _default = HelloWorld;
exports["default"] = _default;