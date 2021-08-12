import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const useInputs = (initState) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default useInputs;
