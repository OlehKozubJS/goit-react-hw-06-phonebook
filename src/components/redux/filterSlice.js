import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchQueryInput(state, action) {
      state = action.payload;
      return state;
    },
    getFilteredContacts(state, action) {
      const filteredContacts = state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return filteredContacts;
    },
  },
});

export const { searchQueryInput, getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
