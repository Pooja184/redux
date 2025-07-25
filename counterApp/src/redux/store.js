// Import configureStore to create the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Import the reducer function from the counter slice
import counterReducer from '../features/counter/counterSlice.js'

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    // Add the counter slice reducer to the store
    // The state will be accessible as state.counter
    counter: counterReducer,
  },
});
