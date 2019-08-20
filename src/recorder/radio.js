import React, { Component } from "react";
import { blobToDataURL, blobToDataAjax } from "./common";
import HZRecorder from "./HZRecorder";
let recorder;
export default class Radio extends Component {
    constructor(props) {
        super(props);
    }

    setRadio = () => {
        this.startRecording();
    };
    getRadio = () => {
        this.uploadAudio();
    };

    startRecording = () => {
        HZRecorder.get(function(rec) {
            recorder = rec;
            recorder.start();
        });
        let { mouseDownRadio } = this.props;
        mouseDownRadio && mouseDownRadio();
    };
    uploadAudio = () => {
        let audio = document.querySelector("audio");
        let blob = recorder.getBlob(audio);
        let { mouseUpRadio, getRadioWords } = this.props;
        mouseUpRadio && mouseUpRadio(blob);

        recorder && blobToDataURL(blob, getRadioWords);
    };
    render() {
        let { children } = this.props;
        return (
            <span onMouseDown={this.setRadio} onMouseUp={this.getRadio}>
                {children}
            </span>
        );
    }
}
