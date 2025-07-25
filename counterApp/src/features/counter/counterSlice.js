// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the counter slice
const initialState = {
  value: 0, // This value will be updated by our reducers
}

// Create a slice named 'counter'
export const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState,    // Initial state defined above
  reducers: {
    // Reducer to increment the counter
    increment: (state) => {
      // Directly mutating the state is safe here because Redux Toolkit uses Immer internally
      state.value += 1
    },
    // Reducer to decrement the counter
    decrement: (state) => {
      state.value -= 1
    },
    // Reducer to increment the counter by a specific value (passed as payload)
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Destructure and export the generated action creators
// These functions will be used to dispatch actions
// increment, decrement, incrementByAmount = these are called actions
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer to be included in the Redux store
export default counterSlice.reducer
