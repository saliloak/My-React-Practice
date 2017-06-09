import React, { Component } from 'react';
import Gender from './Gender';
import EmployeeItem from './EmployeeItem';
import Salutation from './Salutation';
import Input from './Input';
import uuid from 'uuid';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            salutation: '',
            gender: '',
            title: '',
            name: '',
            salary: ''
        }
    }

    handleUpdatedProp(e) {
        this.setState({
            id: uuid.v4(),
            title: this.refs.title.value,
            name: this.refs.name.value,
            gender: this.state.gender,
            salutation: this.state.salutation,
            salary: this.state.salary
        }, function () {
            this.props.updateDataProp(this.state);
        })
        e.preventDefault();
    }

    setGender(choosenGender) {
        this.setState({
            gender: choosenGender
        }, function () {
            //Example To show Callback
            console.log(this.state);
        });
    }

    setSalutation(salutation) {
        this.setState({
            salutation: salutation
        }, function () {
            //Example To show Callback
            console.log(this.state);
        })
    }

    TakeInput(input) {
        if (input.id === 'txtSalary') {
            let value = input.value
            this.setState({
                salary: value
            }, function () {
                //Example To show Callback
                console.log(this.state);
            })
        }
    }

    deleteEmployee(id) {
        this.props.deleteEmployeeMain(id);
    }

    editEmployee(id) {
        this.props.editEmployeeMain(id);
    }

    render() {

        let employees = this.props.myDataProp.information.map(employee => {
            return (
                <EmployeeItem onDelete={this.deleteEmployee.bind(this)} onEdit={this.editEmployee.bind(this)} key={employee.name} employee={employee} />
            );
        })

        let displayMessage;
        if (Object.keys(this.props.myDataProp.information).length > 0) {
            displayMessage = <h2 className="col-lg-12">Existing Employees</h2>;
        }
        else {
            displayMessage = <h2 className="col-lg-12">There are no Existing Employees Currently</h2>;
        }
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleUpdatedProp.bind(this)}>
                    <fieldset>
                        <legend>Employee Details</legend>
                        <div className="form-group">
                            <div className="col-lg-2">
                                <label className="control-label">Salutation</label>
                            </div>
                            <div className="col-lg-6">
                                <Salutation salutation={this.setSalutation.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-2">
                                <label className="control-label">Name</label>
                            </div>
                            <div className="col-lg-6">
                                <input className="form-control" type="text" ref="name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-2">
                                <label className="control-label">Title</label>
                            </div>
                            <div className="col-lg-6">
                                <input className="form-control" type="text" ref="title" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-2">
                                <label className="control-label">Salary</label>
                            </div>
                            <Input inputId={"txtSalary"} inputType={"text"} inputPlaceholder={"Enter Salary"} refsValue={"salary"} inputValue={this.TakeInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <div className="col-lg-2">
                                <label className="control-label">Gender :</label>
                            </div>
                            <Gender selectGender={this.setGender.bind(this)} />
                        </div>
                        <div className="form-group">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-2">
                                <button className="btn btn-success" type="submit" value="Submit">Submit</button>
                            </div>
                        </div>
                        {displayMessage}
                        <table className="table table-striped table-hover ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Gender</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees}
                            </tbody>
                        </table>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Content;