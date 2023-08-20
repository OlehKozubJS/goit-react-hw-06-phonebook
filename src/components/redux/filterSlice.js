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
    getFilteredContacts() {},
  },
});

export const { searchQueryInput } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
