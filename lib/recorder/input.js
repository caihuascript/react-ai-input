import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _this.onSearch = function (e) {
      if (e.keyCode == "13") {
        var onSearch = _this.props.onSearch;
        onSearch && onSearch(_this.refs.input.value);
      } else {}
    };

    _this.change = function (e) {
      var keyDown = _this.props.keyDown;
      keyDown && keyDown(e.target.value);
    };

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return React.createElement("input", {
        ref: "input",
        onKeyDown: this.onSearch,
        onChange: this.change,
        value: value
      });
    }
  }]);

  return Input;
}(Component);

export { Input as default };