import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchQueryInput(state, action) {
      return action.payload;
    },
  },
});

export const { searchQueryInput } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
