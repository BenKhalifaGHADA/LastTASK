import axios from "axios";

export const getContact = () => dispatch => {
  axios
    .get("/contacts")
    .then(res => dispatch({ type: "GET_CONTACT", payload: res.data }))
    .catch(err => console.log(err));
};

export const addContact = newcontact => dispatch => {
  axios
    .post("/contacts/newcontact", newcontact)
    .then(res => dispatch(getContact()))
    .catch(err => console.log(err));
};

export const editContact = (id, contact) => dispatch => {
  axios
    .put(`/contacts/updatecontact/${id}`, contact)
    .then(res => dispatch(getContact()))
    .catch(err => console.log(err));
};

export const deleteContact = id => dispatch => {
  axios
    .delete(`/contacts/removecontact/${id}`)
    .then(res => dispatch(getContact()))
    .catch(err => console.log(err));
};
