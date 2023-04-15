import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, setEditContact } from '../features/contactsSlice';

const TableRow = ({ contact }) => {
  const { id, cardNumber, name, mobileNumber, gender } = contact;

  const dispatch = useDispatch();

  const handleEditContact = () => {
    dispatch(setEditContact(id));
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <tr>
      <td>{cardNumber}</td>
      <td>{name}</td>
      <td>{mobileNumber}</td>
      <td>{gender}</td>
      <td>
        <button onClick={handleEditContact}>Edit</button>
        <button onClick={handleDeleteContact}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
