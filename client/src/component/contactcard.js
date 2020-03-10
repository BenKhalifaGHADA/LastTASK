import React, { Component } from "react";
import { getContact, deleteContact } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.mycontact.name}</h3>
        <p>{this.props.mycontact.phone}</p>
        <p>{this.props.mycontact.email}</p>
        {/* <p>{this.props.mycontact._id}</p> */}

        <Link to={"/updatecontact/" + this.props.mycontact._id}>
          <button>Edit Contact</button>
        </Link>

        <button
          onClick={() => {
            this.props.deleteContact(this.props.mycontact._id);
          }}
        >
          Delete Contact
        </button>
      </div>
    );
  }
}

export default connect(null, { getContact, deleteContact })(ContactCard);
