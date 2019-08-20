import React, { Component } from "react";
import { blobToDataURL, blobToDataAjax } from "./common";
import HZRecorder from "./HZRecorder";
import Input from "./input";
import Radio from "./radio";
let recorder;
export default class PCUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDefult: "",
        };
    }
    onSearch = data => {
        let { onSearch } = this.props;
        onSearch && onSearch(data);
    };

    startRecording = () => {
        let { startRecording } = this.props;
        HZRecorder.get(function(rec) {
            recorder = rec;
            recorder.start();
        });
        startRecording && startRecording();
    };
    uploadAudio = () => {
        let { uploadAudio } = this.prop;
        let audio = document.querySelector("audio");
        let blob = recorder.getBlob(audio);
        uploadAudio && uploadAudio(blob);
        recorder && blobToDataURL(blob);
    };

    setRadio = data => {
        // let { uploadAudio } = this.props;
        // uploadAudio && uploadAudio(data);
    };
    getRadio = () => {
        // let { startRecording } = this.props;
        // startRecording && startRecording();
    };
    getRadioWords = data => {
        this.state = {
            inputDefult: data,
        };
        let { getRadioWords } = this.props;
        getRadioWords && getRadioWords(data);
    };
    onInput = value => {
        this.setState({
            inputDefult: value,
        });
    };
    render() {
        let { startRecording, uploadAudio, onSearch } = this.props;
        let { inputDefult } = this.state;
        return (
            <div>
                <audio controls autoPlay style={{ display: "none" }} />
                <Input onSearch={this.onSearch} keyDown={this.onInput} value={inputDefult} />
                <Radio mouseDownRadio={this.getRadio} mouseUpRadio={this.setRadio} getRadioWords={this.getRadioWords}>
                    语音输入
                </Radio>
            </div>
        );
    }
}
