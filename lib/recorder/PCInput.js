import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";
import { blobToDataURL, blobToDataAjax } from "./common";
import HZRecorder from "./HZRecorder";
import Input from "./input";
import Radio from "./radio";
var recorder;

var PCUI =
/*#__PURE__*/
function (_Component) {
  _inherits(PCUI, _Component);

  function PCUI(props) {
    var _this;

    _classCallCheck(this, PCUI);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PCUI).call(this, props));

    _this.onSearch = function (data) {
      var onSearch = _this.props.onSearch;
      onSearch && onSearch(data);
    };

    _this.startRecording = function () {
      var startRecording = _this.props.startRecording;
      HZRecorder.get(function (rec) {
        recorder = rec;
        recorder.start();
      });
      startRecording && startRecording();
    };

    _this.uploadAudio = function () {
      var uploadAudio = _this.prop.uploadAudio;
      var audio = document.querySelector("audio");
      var blob = recorder.getBlob(audio);
      uploadAudio && uploadAudio(blob);
      recorder && blobToDataURL(blob);
    };

    _this.setRadio = function (data) {// let { uploadAudio } = this.props;
      // uploadAudio && uploadAudio(data);
    };

    _this.getRadio = function () {// let { startRecording } = this.props;
      // startRecording && startRecording();
    };

    _this.getRadioWords = function (data) {
      _this.state = {
        inputDefult: data
      };
      var getRadioWords = _this.props.getRadioWords;
      getRadioWords && getRadioWords(data);
    };

    _this.onInput = function (value) {
      _this.setState({
        inputDefult: value
      });
    };

    _this.state = {
      inputDefult: ""
    };
    return _this;
  }

  _createClass(PCUI, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          startRecording = _this$props.startRecording,
          uploadAudio = _this$props.uploadAudio,
          onSearch = _this$props.onSearch;
      var inputDefult = this.state.inputDefult;
      return React.createElement("div", null, React.createElement("audio", {
        controls: true,
        autoPlay: true,
        style: {
          display: "none"
        }
      }), React.createElement(Input, {
        onSearch: this.onSearch,
        keyDown: this.onInput,
        value: inputDefult
      }), React.createElement(Radio, {
        mouseDownRadio: this.getRadio,
        mouseUpRadio: this.setRadio,
        getRadioWords: this.getRadioWords
      }, "\u8BED\u97F3\u8F93\u5165"));
    }
  }]);

  return PCUI;
}(Component);

export { PCUI as default };