import React, { Component } from 'react';

class EmployeeItem extends Component {
    DeleteEmployee(id) {
        this.props.onDelete(id);
    }

    EditEmployee(id) {
        this.props.onEdit(id);
    }

    render() {
        return (
            // <div className="container">
            //     <div className="well">
            //         <h4 className="App-inline">Name:</h4><strong>{this.props.employee.salutation} {this.props.employee.name}</strong>
            //         <br/>
            //         <h4 className="App-inline">Title:</h4><strong>{this.props.employee.title}</strong>
            //         <br/>
            //         <h4 className="App-inline">Gender:</h4><strong>{this.props.employee.gender}</strong>
            //         <br/>
            //         <h4 className="App-inline">Salary:</h4><strong>{this.props.employee.salary}</strong>
            //     </div>
            // </div>

            <tr>
                <td>{this.props.employee.salutation}&nbsp;{this.props.employee.name}</td>
                <td>{this.props.employee.title}</td>
                <td>{this.props.employee.gender}</td>
                <td>{this.props.employee.salary}</td>
                <td><a href="#" onClick={this.EditEmployee.bind(this, this.props.employee.id)}>Edit</a>&nbsp;|&nbsp;<a href="#" onClick={this.DeleteEmployee.bind(this, this.props.employee.id)}>Delete</a></td>
            </tr>
        )
    }
}

export default EmployeeItem;

