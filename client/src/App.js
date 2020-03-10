import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import ContactList from "./component/contactlist";
import AddContact from "./component/addcontact";
import { connect } from "react-redux";
import { getContact } from "./redux/actions";
import EditContact from "./component/editcontact";

function App({ getContact }) {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Contact App</h1>
        <Link to="/list">
          <button onClick={() => getContact()}>Contact List</button>
        </Link>
        <Link to="/add">
          <button>Add Conatct</button>
        </Link>
      </div>

      <Route exact path="/list" component={ContactList} />
      <Route exact path="/add" component={AddContact} />
      <Route exact path="/updatecontact/:id" component={EditContact} />
    </BrowserRouter>
  );
}

export default connect(null, { getContact })(App);
