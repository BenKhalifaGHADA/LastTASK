import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editContact } from "../redux/actions";

class EditContact extends Component {
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

  componentDidMount() {
    const myContact = this.props.contacts.filter(
      contact => contact._id === this.props.match.params.id
    )[0];
    this.setState({ ...myContact });
  }

  render() {
    console.log(this.state);
    console.log(this.props.match.params.id);
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <input
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        ></input>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        <Link to={"/contacts"}>
          <button
            onClick={() => {
              console.log("emm");
              this.props.editContact(this.props.match.params.id, {
                ...this.state
              });
            }}
          >
            Save Changes
          </button>
        </Link>
      </div>
    );
  }
}

const mapstate = state => ({
  contacts: state.contacts
});
export default connect(mapstate, { editContact })(EditContact);
