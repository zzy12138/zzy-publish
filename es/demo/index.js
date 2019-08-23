import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var HelloWorld =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HelloWorld, _Component);

  function HelloWorld() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HelloWorld.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "main-box"
    }, "hello world!");
  };

  return HelloWorld;
}(Component);

export default HelloWorld;