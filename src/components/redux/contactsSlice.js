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
      state = [...state, { id: nanoid(), ...action.payload }];
    },
  },
});

export const { setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
