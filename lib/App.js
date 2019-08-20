import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";
import RecorderDemo from "./main";

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var defaultProps = {
        type: "PC",
        //mobile||PC 默认是mobile    UI
        startRecording: function startRecording() {//开始录音回调
        },
        uploadAudio: function uploadAudio() {//提交回调
        },
        onSearch: function onSearch(data) {
          //输入框提交的时候的回调
          console.log("我是输入框返回的数据:应该用这个数据去请求数据接口" + data);
        }
      };
      return React.createElement("div", {
        className: "App"
      }, React.createElement(RecorderDemo, defaultProps));
    }
  }]);

  return App;
}(Component);

export default App;