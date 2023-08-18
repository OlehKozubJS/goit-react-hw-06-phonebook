/*
const initialState = {
  contacts: [],
  filter: '',
};
*/
import { configureStore } from '@reduxjs/toolkit';
const contactsInitialState = [];
const filterInitialState = '';

export const contactsReducer = (state = contactsInitialState, action) => {
  return state;
};

export const filterReducer = (state = filterInitialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
