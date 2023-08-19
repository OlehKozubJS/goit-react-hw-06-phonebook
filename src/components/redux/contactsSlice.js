import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
});

export const { setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
