import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filteredContacts = data => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(data.toLowerCase())
  );
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchQueryInput(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { searchQueryInput } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
