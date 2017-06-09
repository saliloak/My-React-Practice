import React, { Component } from 'react';

class Salutation extends Component {
    chooseSalutation(e) {
        this.props.salutation(e.target.value);
    }

    static defaultProps = {
        categories: ['Mr', 'Mrs']
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
            <div className="col-lg-4" style={{'paddingLeft':'0px'}}>
                <select className="form-control" onChange={this.chooseSalutation.bind(this)}>
                    {categoryOptions}
                </select>
            </div>
        )
    }
}

export default Salutation;