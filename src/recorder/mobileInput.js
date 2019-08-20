import React, { Component } from "react";
import Radio from "./radio";
import Input from "./input";
export default class MobileUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusInput: true,
            isTouch: false,
            inputDefult: "",
        };
    }
    changeStatus = () => {
        let { statusInput } = this.state;
        this.setState({
            statusInput: !statusInput,
            isTouch: false,
        });
    };
    onInput = value => {
        this.setState({
            inputDefult: value,
        });
    };
    onSearch = data => {
        let { onSearch } = this.props;
        onSearch && onSearch(data);
        this.onInput("");
    };
    renderInput = statusInput => {
        if (statusInput) {
            let { inputDefult } = this.state;
            return <Input onSearch={this.onSearch} keyDown={this.onInput} value={inputDefult} />;
        } else {
            let { isTouch } = this.state;
            return (
                <Radio mouseDownRadio={this.getRadio} mouseUpRadio={this.setRadio} getRadioWords={this.getRadioWords}>
                    {isTouch ? "松开结束" : "按住说话"}
                </Radio>
            );
        }
    };
    getRadioWords = data => {
        let { getRadioWords } = this.props;
        getRadioWords && getRadioWords(data);
    };
    setRadio = data => {
        this.setState({
            isTouch: false,
        });
        let { uploadAudio } = this.props;
        uploadAudio && uploadAudio(data);
    };
    getRadio = () => {
        this.setState({
            isTouch: true,
        });
        let { startRecording } = this.props;
        startRecording && startRecording();
    };

    render() {
        let { statusInput } = this.state;
        return (
            <div>
                <audio controls autoPlay style={{ display: "none" }} />
                <span onClick={this.changeStatus}>{statusInput ? "语音" : "键盘"}</span>
                {this.renderInput(statusInput)}
            </div>
        );
    }
}
