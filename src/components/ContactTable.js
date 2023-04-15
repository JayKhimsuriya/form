import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/formSlice";
import TableRow from "./TableRow";

const ContactTable = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.form.contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Debit Card Number</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <TableRow
            key={contact.id}
            contact={contact}
            onDelete={() => handleDelete(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
