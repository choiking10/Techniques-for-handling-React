import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <div>
      <Counter
        number={number}
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
