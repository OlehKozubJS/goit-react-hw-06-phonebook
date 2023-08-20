import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact(state, action) {
      return [...state, { id: nanoid(), ...action.payload }];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
