import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  editContactId: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const { id, cardNumber, name, mobileNumber, gender } = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = { id, cardNumber, name, mobileNumber, gender };
        state.editContactId = null;
      }
    },
    setEditContact: (state, action) => {
      state.editContactId = action.payload;
    },
    clearEditContact: state => {
      state.editContactId = null;
    },
  },
});

export const { addContact, deleteContact, updateContact, setEditContact, clearEditContact } = contactsSlice.actions;

export default contactsSlice.reducer;
