import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from "react";
import Radio from "./radio";
import Input from "./input";

var MobileUI =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileUI, _Component);

  function MobileUI(props) {
    var _this;

    _classCallCheck(this, MobileUI);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileUI).call(this, props));

    _this.changeStatus = function () {
      var statusInput = _this.state.statusInput;

      _this.setState({
        statusInput: !statusInput,
        isTouch: false
      });
    };

    _this.onInput = function (value) {
      _this.setState({
        inputDefult: value
      });
    };

    _this.onSearch = function (data) {
      var onSearch = _this.props.onSearch;
      onSearch && onSearch(data);

      _this.onInput("");
    };

    _this.renderInput = function (statusInput) {
      if (statusInput) {
        var inputDefult = _this.state.inputDefult;
        return React.createElement(Input, {
          onSearch: _this.onSearch,
          keyDown: _this.onInput,
          value: inputDefult
        });
      } else {
        var isTouch = _this.state.isTouch;
        return React.createElement(Radio, {
          mouseDownRadio: _this.getRadio,
          mouseUpRadio: _this.setRadio,
          getRadioWords: _this.getRadioWords
        }, isTouch ? "松开结束" : "按住说话");
      }
    };

    _this.getRadioWords = function (data) {
      var getRadioWords = _this.props.getRadioWords;
      getRadioWords && getRadioWords(data);
    };

    _this.setRadio = function (data) {
      _this.setState({
        isTouch: false
      });

      var uploadAudio = _this.props.uploadAudio;
      uploadAudio && uploadAudio(data);
    };

    _this.getRadio = function () {
      _this.setState({
        isTouch: true
      });

      var startRecording = _this.props.startRecording;
      startRecording && startRecording();
    };

    _this.state = {
      statusInput: true,
      isTouch: false,
      inputDefult: ""
    };
    return _this;
  }

  _createClass(MobileUI, [{
    key: "render",
    value: function render() {
      var statusInput = this.state.statusInput;
      return React.createElement("div", null, React.createElement("audio", {
        controls: true,
        autoPlay: true,
        style: {
          display: "none"
        }
      }), React.createElement("span", {
        onClick: this.changeStatus
      }, statusInput ? "语音" : "键盘"), this.renderInput(statusInput));
    }
  }]);

  return MobileUI;
}(Component);

export { MobileUI as default };