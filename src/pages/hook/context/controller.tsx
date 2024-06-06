import React, { useContext } from 'react';
import { AppContext } from '.';

export default function Controller() {
  const { setCount } = useContext(AppContext)!;

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}
