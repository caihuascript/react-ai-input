import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";
import PCUI from "./PCInput";
import MobileUI from "./mobileInput";

var RecorderDemo =
/*#__PURE__*/
function (_Component) {
  _inherits(RecorderDemo, _Component);

  function RecorderDemo(props) {
    _classCallCheck(this, RecorderDemo);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecorderDemo).call(this, props));
  }

  _createClass(RecorderDemo, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      return React.createElement("div", null, type == "mobile" ? React.createElement(MobileUI, this.props) : React.createElement(PCUI, this.props));
    }
  }]);

  return RecorderDemo;
}(Component);

RecorderDemo.defaultProps = {
  type: "mobile",
  //mobile||PC 默认是mobile    UI
  startRecording: function startRecording() {//开始录音回调
  },
  uploadAudio: function uploadAudio() {//提交回调
  },
  onSearch: function onSearch() {//输入框提交的时候的回调
  },
  getRadioWords: function getRadioWords() {//获取语音分词结果
  }
};
export { RecorderDemo as default };