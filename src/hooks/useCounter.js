import { useState } from "react";

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = (value) => {
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
