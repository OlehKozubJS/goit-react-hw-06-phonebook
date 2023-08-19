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
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )
      ) {
        return;
      }
      setContacts(prevState => [...prevState, { id: nanoid(), ...data }]);
    },
  },
});

export const { setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
