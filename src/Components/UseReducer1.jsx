import React, { useEffect, useReducer, useContext } from 'react';
import { indexContext } from '../index.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};


const UseReducer1 = () => {
  const { ind, setAllData } = useContext(indexContext);

  const red = "I am from UserReducer 1";

  const [state, dispatch] = useReducer(reducer, { count: 4 });

  useEffect(() => {
    setAllData(prevDataArray => ({ ...prevDataArray, red: red, counts: state.count }));
  });






  
  return (
    <div className='text-center my-5'>
      <h1>Count: {state.count}</h1>

      <button className='btn btn-success mx-4' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button className='btn btn-danger mx-4' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button className='btn btn-warning mx-4' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <h1>{ind}</h1>

    </div>
  );
};

export default UseReducer1;
