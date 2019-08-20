import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";
import { blobToDataURL, blobToDataAjax } from "./common";
import HZRecorder from "./HZRecorder";
var recorder;

var Radio =
/*#__PURE__*/
function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio).call(this, props));

    _this.setRadio = function () {
      _this.startRecording();
    };

    _this.getRadio = function () {
      _this.uploadAudio();
    };

    _this.startRecording = function () {
      HZRecorder.get(function (rec) {
        recorder = rec;
        recorder.start();
      });
      var mouseDownRadio = _this.props.mouseDownRadio;
      mouseDownRadio && mouseDownRadio();
    };

    _this.uploadAudio = function () {
      var audio = document.querySelector("audio");
      var blob = recorder.getBlob(audio);
      var _this$props = _this.props,
          mouseUpRadio = _this$props.mouseUpRadio,
          getRadioWords = _this$props.getRadioWords;
      mouseUpRadio && mouseUpRadio(blob);
      recorder && blobToDataURL(blob, getRadioWords);
    };

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement("span", {
        onMouseDown: this.setRadio,
        onMouseUp: this.getRadio
      }, children);
    }
  }]);

  return Radio;
}(Component);

export { Radio as default };