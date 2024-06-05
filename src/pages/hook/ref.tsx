import React, { useRef, useState } from 'react';

export default function UseRef() {
  return (
    <div>
      <div>UseRef</div>
      <RefVariable />
    </div>
  );
}

function Reference() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onFocus}>Focus</button>
    </div>
  );
}

function RefVariable() {
  console.log('Rendered');
  const [count, setCount] = useState(0);
  const value = useRef('init');

  return (
    <div>
      <input onChange={(e) => (value.current = e.target.value)} />
      <button onClick={(e) => alert(value.current)}>Submit</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
    </div>
  );
}
