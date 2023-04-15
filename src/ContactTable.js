import React from "react";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../actions";

const ContactTable = (props) => {
  const handleDelete = (id) => {
    props.deleteContact(id);
  };

  const handleEdit = (contact) => {
    const updatedContact = { ...contact, name: "Updated Name" }; // example of how to update data
    props.editContact(updatedContact);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Debit Card Number</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Gender</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.cardNumber}</td>
            <td>{contact.name}</td>
            <td>{contact.mobileNumber}</td>
            <td>{contact.gender}</td>
            <td>
              <button onClick={() => handleEdit(contact)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, { deleteContact, editContact })(
  ContactTable
);
