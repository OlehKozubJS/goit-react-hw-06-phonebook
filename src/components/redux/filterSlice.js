import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '', filteredContacts: [] };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchQueryInput(state, action) {
      state.filter = action.payload;
      return state;
    },
    getFilteredContacts(state, action) {
      console.log(action.payload);
      const filteredContacts = action.payload.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
      );
      state.filteredContacts = filteredContacts;
      return state;
    },
  },
});

export const { searchQueryInput, getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
