import React, { Component } from "react";
import RecorderDemo from "./main";

class App extends Component {
    render() {
        let defaultProps = {
            type: "PC", //mobile||PC 默认是mobile    UI
            startRecording: function() {
                //开始录音回调
            },
            uploadAudio: function() {
                //提交回调
            },
            onSearch: function(data) {
                //输入框提交的时候的回调
                console.log("我是输入框返回的数据:应该用这个数据去请求数据接口" + data);
            },
        };
        return (
            <div className="App">
                <RecorderDemo {...defaultProps} />
            </div>
        );
    }
}

export default App;
