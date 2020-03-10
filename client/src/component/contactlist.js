import React, { Component } from "react";
import ContactCard from "./contactcard";
import { connect } from "react-redux";

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>contactlist</h1>
        <div>
          {this.props.contacts.map(el => (
            <ContactCard mycontact={el} key={el._id} />
          ))}
        </div>
      </div>
    );
  }
}
const mapstate = state => ({
  contacts: state.contacts
});
export default connect(mapstate)(ContactList);
