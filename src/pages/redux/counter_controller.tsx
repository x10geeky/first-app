import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../store/slices/couter';
import { fetchPosts } from '../../store/slices/post';
import { AppDispatch } from '../../store';

export default function CounterController() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>+Amount</button>
      </div>
      <div>
        <button onClick={() => dispatch(fetchPosts())}>START</button>
      </div>
    </div>
  );
}
