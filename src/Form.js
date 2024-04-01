import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  initialstate = {
    Name: " ",
    E_Mail: " ",
    Phone_Number: " ",
    Contact_Number: " ",
    Address: " ",
    Pin_code: " ",
    Order_Item: " ",
  };
  state = this.initialstate;
  handledata = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: [value] });
  };
  submitform = () => {
    console.log("Your Order is Sumitted");
    console.log(this.state);
   // let newdata = this.state;
    const newdata = { ...this.state, Order_Item: this.state.selectedBook };
    this.props.handlesubmit(newdata);
    this.setState(this.initialstate);
  };

  //Select option code
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: "", // Initialize the state for the selected book
    };
  }

  handleData = (event) => {
    // Update the state with the selected book value
    this.setState({ selectedBook: event.target.value });
  };
  render() {
    return (
      <div>
        <div
          className="body mt-5 mb-5"
        >
          <div className="containerr">
            <form>
              <h2 className="form-title">Please Fill The Form</h2>
              <div className="main-user-info">
                <div className="user-input-box">
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    onChange={this.handledata}
                    value={this.state.Name}
                    required
                  />
                </div>

                <div className="user-input-box">
                  <label>E_Mail</label>
                  <input
                    type="email"
                    name="E_Mail"
                    id="e_mail"
                    onChange={this.handledata}
                    value={this.state.E_Mail}
                    required
                  />
                </div>
                <div className="user-input-box">
                  <label>Phone_Number</label>
                  <input
                    type="number"
                    name="Phone_Number"
                    id="phone_number"
                    onChange={this.handledata}
                    value={this.state.Phone_Number}
                    required
                  />
                </div>
                <div className="user-input-box">
                  <label>Address</label>
                  <input
                    type="text"
                    name="Address"
                    id="address"
                    onChange={this.handledata}
                    value={this.state.Address}
                    required
                  />
                </div>
                <div className="user-input-box">
                  <label>Pin_code</label>
                  <input
                    type="number"
                    name="Pin_code"
                    id="pincode"
                    onChange={this.handledata}
                    value={this.state.Pin_code}
                    required
                  />
                </div>

                <div className="user-input-box">
                  <label>Order_Item</label>
                  <select
                    name="Comics_Books"
                    onChange={this.handleData}
                    className="select-title"
                    value={this.state.selectedBook} // Set the value of the select to reflect the state
                  >
                    <option>Please Choose A Book</option>
                    <option value="Comics_Books">Comics_Books</option>
                    <option value="Venom">Venom</option>
                    <option value="Money_Heist">Money_Heist</option>
                    <option value="History of voilence">History of voilence</option>
                  </select>

                  {/* Display the selected book */}
                  {/* <p>Selected Book: {this.state.selectedBook}</p> */}
                  {/* <label>Order_Item</label>
          <select name="Comics_Books"  onChange={this.handledata}  className="select-title">
          <option>Please Choose A Books</option>
            <option value={this.state.Comics_Books} >Comics_Books</option>
             <option value={this.state.Venom}>Venom</option>
            <option value={this.state.Money_Heist}>Money_Heist</option>
          </select> */}
                </div>

                <div className="form-submit-btn">
                  <input
                    type="button"
                    value="submit"
                    onClick={this.submitform}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}