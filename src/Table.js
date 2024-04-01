import React, {Component} from 'react'
import './Table.css'

const TableHeader = () => {
  return (
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone_Number</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Order_Items</th>
            <th>Your Order</th>
        </tr>
    </thead>
  );
};
const TableBody = (props) => {
    const {tabledata, removedata } = props;
    const row = tabledata.map((x, index) => {
        return (
            <tr key={index}>
                <td>{x.Nme}</td>
                <td>{x.Email}</td>
                <td>{x.Phone_Number}</td>
                <td>{x.Address}</td>
                <td>{x.Pin_Code}</td>
                <td>{x.Ordes_Items}</td>
                <td>
                    <button onClick={() => removedata(index)} className='btn-btn-primary'></button>
                </td>
            </tr>
        );
    });
}

export default class Table extends Component {
    render() {
        const {tabledata, removedata} = this.props
        return <div className="mb-5">
            <table>
                <TableHeader/>
                <TableBody tabledata ={tabledata}
                removedata = {removedata}/>
            </table>
        </div>;
    }
}