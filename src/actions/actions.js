export const editContact = (contact) => ({
    type: "EDIT_CONTACT",
    payload: contact,
  });
  
  export const deleteContact = (id) => ({
    type: "DELETE_CONTACT",
    payload: id,
  });
  