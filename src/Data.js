import React, {Component} from 'react'
import Form from "./Form"
import Table from "./Table";

export default class Data extends Component {
    state = {
        data: [],
    };
    removedata = (index) => {
        const { data } = this.state;
        let filterdata = data.filter ((x, i) => {
            return i !== index;
        });
        this.setState({ dat:filterdata });
    };
    handlesubmit = (newdata) => {
        this.setState ({
            data: [...this.setState.data, newdata]
        });
    };
    render() {
        return (
            <div>
                <Form handlesubmit={this.handlesubmit} />
                <Table tabledata={data} removedata ={this.removedata} />
            </div>
        )
    }
}