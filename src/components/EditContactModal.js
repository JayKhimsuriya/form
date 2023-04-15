import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../actions";
import EditContactModal from "./EditContactModal";

const ContactTable = () => {
const contacts = useSelector((state) => state.contacts);
const dispatch = useDispatch();
const [editModalOpen, setEditModalOpen] = useState(false);
const [selectedContact, setSelectedContact] = useState(null);

const handleDelete = (id) => {
dispatch(deleteContact(id));
};

const handleEdit = (contact) => {
setSelectedContact(contact);
setEditModalOpen(true);
};

const handleCloseEditModal = () => {
setSelectedContact(null);
setEditModalOpen(false);
};

return (
<>
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
<tr key={contact.id}>
<td>{contact.cardNumber}</td>
<td>{contact.name}</td>
<td>{contact.mobileNumber}</td>
<td>{contact.gender}</td>
<td>
<button onClick={() => handleEdit(contact)}>Edit</button>
<button onClick={() => handleDelete(contact.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
{editModalOpen && (
<EditContactModal
       contact={selectedContact}
       onClose={handleCloseEditModal}
     />
)}
</>
);
};

export default ContactTable;