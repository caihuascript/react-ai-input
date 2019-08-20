import React, { Component } from "react";
export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    onSearch = e => {
        if (e.keyCode == "13") {
            let { onSearch } = this.props;
            onSearch && onSearch(this.refs.input.value);
        } else {
        }
    };
    change = e => {
        let { keyDown } = this.props;
        keyDown && keyDown(e.target.value);
    };

    render() {
        let { children, value } = this.props;
        return <input ref="input" onKeyDown={this.onSearch} onChange={this.change} value={value} />;
    }
}
