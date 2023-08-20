import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact(state, action) {
      if (
        state.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return;
      }
      return [...state, { id: nanoid(), ...action.payload }];
    },
    deleteContact(state, action) {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
