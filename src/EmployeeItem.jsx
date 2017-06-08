import React, { Component } from 'react';

class EmployeeItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    <h4 className="App-inline">Name:</h4><strong>{this.props.employee.salutation} {this.props.employee.name}</strong>
                    <br/>
                    <h4 className="App-inline">Title:</h4><strong>{this.props.employee.title}</strong>
                    <br/>
                    <h4 className="App-inline">Gender:</h4><strong>{this.props.employee.gender}</strong>
                </div>
            </div>
        )
    }
}

export default EmployeeItem;

