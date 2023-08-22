import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact(state, action) {
      const contacts = [...state, { ...action.payload }];
      return contacts;
    },
    deleteContact(state, action) {
      const contacts = state.filter(contact => contact.id !== action.payload);
      return contacts;
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
