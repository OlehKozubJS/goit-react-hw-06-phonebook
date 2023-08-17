import { createStore } from 'redux';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {
  contacts: [],
  filter: '',
};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
