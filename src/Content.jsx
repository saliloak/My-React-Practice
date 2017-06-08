import React, { Component } from 'react';
import Gender from './Gender';
import EmployeeItem from './EmployeeItem';
import Salutation from './Salutation';
import Input from './Input';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            salutation: '',
            gender: '',
            title: '',
            name: '',
            salary: ''
        }
    }


    handleUpdatedProp(e) {
        this.setState({
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
            console.log(this.state);
        });
    }

    setSalutation(salutation) {
        this.setState({
            salutation: salutation
        }, function () {
            console.log(this.state);
        })
    }

    TakeInput(input) {
        if (input.id === 'txtSalary') {
            let value = input.value
            this.setState({
                salary: value
            }, function () {
                console.log(this.state);
            })
        }
    }
    render() {
        let employees = this.props.myDataProp.information.map(employee => {
            return (
                <EmployeeItem key={employee.name} employee={employee} />
            );
        })

        let displayMessage;
        if (Object.keys(this.props.myDataProp.information).length > 0) {
            displayMessage = <h2>Existing Employees</h2>;
        }
        else {
            displayMessage = <h2>There are no Existing Employees Currently</h2>;
        }
        return (
            <div>
                <form onSubmit={this.handleUpdatedProp.bind(this)}>
                    <div>
                        <label>Salutation</label><br />
                        <Salutation salutation={this.setSalutation.bind(this)} />
                    </div>
                    <div>
                        <label>Name</label><br />
                        <input type="text" ref="name" />
                    </div>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Salary</label><br />
                        <Input inputId={"txtSalary"} inputType={"text"} inputPlaceholder={"Enter Salary"} refsValue={"salary"} inputValue={this.TakeInput.bind(this)} />
                    </div>
                    <div>
                        <label>Gender :</label>
                        <Gender selectGender={this.setGender.bind(this)} />
                    </div>
                    <br />
                    <button className="btn btn-success" type="submit" value="Submit">Submit</button>
                    {displayMessage}
                    {employees}
                </form>
            </div>
        )
    }
}

export default Content;