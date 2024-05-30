import React, { useReducer, useContext, useEffect } from 'react';
import { indexContext } from '../index.js';

const initialState = { isToggled: false };

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { isToggled: !state.isToggled };
    default:
      throw new Error();
  }
}

function UseReducer2() {
  const { red, counts } = useContext(indexContext);

  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className='text-center my-5'>
      <button className='btn btn-warning' onClick={() => dispatch({ type: 'toggle' })}>
        {state.isToggled ? 'ON' : 'OFF'}
      </button>

      <h1>{red}</h1>
      <h2>{counts}</h2>
    </div>
  );
}

export default UseReducer2;
