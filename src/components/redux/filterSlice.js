import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {},
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
