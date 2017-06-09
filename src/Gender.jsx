import React, { Component } from 'react';

class Gender extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: 'N/A'
        }
    }

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.currentTarget.value
        }, function () {
            this.props.selectGender(this.state.selectedOption);
        });
    }

    render() {
        return (
            <div>
                <div className="col-md-2">
                    <div className="radio">
                        <label>
                            <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'} onChange={this.handleOptionChange.bind(this)} />Male</label>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="radio">
                        <label>
                            <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'} onChange={this.handleOptionChange.bind(this)} />Female</label>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="radio">
                        <label>
                            <input type="radio" value="N/A" checked={this.state.selectedOption === 'N/A'} onChange={this.handleOptionChange.bind(this)} />N/A</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gender;
