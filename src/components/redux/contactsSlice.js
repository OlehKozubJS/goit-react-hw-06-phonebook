import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact(state, action) {
      const contacts = [...state, { ...action.payload }];
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    },
    deleteContact(state, action) {
      const contacts = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
