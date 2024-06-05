import React, { useCallback, useEffect, useState } from 'react';

export default function UseCallback() {
  return (
    <div>
      <div>UseCallback</div>
      <UsCallback />
    </div>
  );
}

const funcCount: Set<() => void> = new Set();
function NoCallback() {
  console.log('Rendered');
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCount((prev) => prev - 1);
  };

  const incrementNumber = () => {
    setNumber((prev) => prev + 1);
  };

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  console.log(funcCount.size);

  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>Increase Counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>Increase Number</button>
    </div>
  );
}

function UsCallback() {
  console.log('Rendered');
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const decrementCounter = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [count]);

  const incrementNumber = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, [number]);

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  console.log(funcCount.size);

  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>Increase Counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>Increase Number</button>
    </div>
  );
}
