import React, { Component } from "react";
import PCUI from "./PCInput";
import MobileUI from "./mobileInput";
export default class RecorderDemo extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    type: "mobile", //mobile||PC 默认是mobile    UI
    startRecording: function() {
      //开始录音回调
    },
    uploadAudio: function() {
      //提交回调
    },
    onSearch: function() {
      //输入框提交的时候的回调
    },
    getRadioWords: function() {
      //获取语音分词结果
    }
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        {type == "mobile" ? (
          <MobileUI {...this.props} />
        ) : (
          <PCUI {...this.props} />
        )}
      </div>
    );
  }
}
