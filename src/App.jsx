import React, { Component } from 'react';
import Content from './Content';

class App extends Component {
    constructor() {
        super();
        this.state = {
            information: []
        };
    }

    getEmployees() {
        this.setState({
            information: [
                // {
                //     gender: 'Male',
                //     salutation: 'Mr',
                //     name: 'Salil Oak',
                //     title: 'Software Developer',
                // },
                // {
                //     gender: 'Male',
                //     salutation: 'Mr',
                //     name: 'Sagar Joshi',
                //     title: 'Technical Analyst',
                // }
            ]
        })
    }

    componentWillMount() {
        this.getEmployees();
    }

    updateState(employee) {
        let employees = this.state.information;
        employees.push(employee);
        this.setState({
            information: employees
        })
    }
    render() {
        return (
            <div>
                <Content myDataProp={this.state} updateDataProp={this.updateState.bind(this)} />
            </div>
        )
    }
}

export default App;