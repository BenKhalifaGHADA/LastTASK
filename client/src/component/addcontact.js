import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/actions";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  reset = () => {
    this.setState({
      name: "",
      phone: "",
      email: ""
    });
  };

  addContact = () => {
    this.props.addContact(this.state);
    this.reset();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button onClick={this.addContact}>Save</button>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
