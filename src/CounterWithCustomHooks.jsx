import React from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterWithCustomHooks = () => {

  const {counter, increment, decrement, reset} = useCounter(10)

  return (
    <>
    <h2> {counter} </h2>
    <button onClick={() => increment(3)}> +1 </button>
    <button onClick={() => decrement(2)}> -1 </button>
    <button onClick={reset}> Reset </button>
    </>
  )
}
