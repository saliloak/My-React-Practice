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
            <div className="row">
                <div className="col-sm-12">
                    <div className="radio">
                        <label>
                            <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'} onChange={this.handleOptionChange.bind(this)} />Male</label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'} onChange={this.handleOptionChange.bind(this)} />Female</label>
                    </div>
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
