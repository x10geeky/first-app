import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function CounterDisplay() {
  const state = useSelector((state: RootState) => state.counter);

  return <div>{state.value}</div>;
}
