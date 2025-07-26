import React, { useState } from "react";
import "../src/app.css";
// Import hooks from react-redux to interact with the store
import { useDispatch, useSelector } from "react-redux";
// Import action creators from the counter slice
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";

const App = () => {
  // Local state to store the user-entered amount
  const [amount, setAmount] = useState(0);

  // useSelector is used to get data from the Redux store
  // Here we get the current value of the counter from state.counter.value
  const count = useSelector((state) => state.counter.value);

  // useDispatch is used to send actions to the Redux store
  const dispatch = useDispatch();

  // Handler function to increment the counter
  const handleIncrement = () => {
    dispatch(increment()); // Dispatches the increment action
  };

  // Handler function to decrement the counter
  const handleDecrement = () => {
    dispatch(decrement()); // Dispatches the decrement action
  };

  // Handler function to reset the counter
  const handleReset = () => {
    dispatch(reset()); // Dispatches the reset action
  };

  // Handler function to increment the counter by a specific amount
  const handleIncreaAmount = () => {
    // Convert input value to number before dispatching
    dispatch(incrementByAmount(Number(amount)));
  };

  return (
    <div>
      {/* Button to increment the counter */}
      <button onClick={handleIncrement}>+</button>

      {/* Display the current count */}
      <p>Count: {count}</p>

      {/* Button to decrement the counter */}
      <button onClick={handleDecrement}>-</button>

      {/* Button to reset the counter */}
      <button onClick={handleReset}>reset</button>

      {/* Input field to enter a custom amount */}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Button to increment counter by the entered amount */}
      <button onClick={handleIncreaAmount}>increment by amount</button>
    </div>
  );
};

export default App;
