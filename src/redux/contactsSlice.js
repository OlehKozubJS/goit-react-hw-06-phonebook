import { createSlice } from '@reduxjs/toolkit';

let freezedContacts;
const contactsInitialState = freezedContacts || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact(state, action) {
      const contacts = [...state, { ...action.payload }];
      freezedContacts = Object.freeze(contacts);
      return contacts;
    },
    deleteContact(state, action) {
      const contacts = state.filter(contact => contact.id !== action.payload);
      freezedContacts = Object.freeze(contacts);
      return contacts;
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
