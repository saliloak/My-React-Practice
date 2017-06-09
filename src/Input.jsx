import React, { Component } from 'react';

class Input extends Component {
    bindInputChange(id, event) {
        let newValue = {
            id: id,
            value: event.target.value
        }
        this.props.inputValue(newValue);
    }
    render() {
        return (
            <div className="col-lg-6">
                <input className="form-control" id={this.props.inputId} type={this.props.inputType} placeholder={this.props.inputPlaceholder} ref={this.props.refsValue} onChange={this.bindInputChange.bind(this, this.props.inputId)} />
            </div>
        )
    }
}

export default Input;