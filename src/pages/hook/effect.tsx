import React, { useEffect, useState } from 'react';

export default function UseEffect() {
  return <FirstTime />;
}

function Away() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Side Effect
    console.log('Side Effect' + count);
  });
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
    </div>
  );
}

function FirstTime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Side Effect
    console.log('Side Effect' + count);
  }, []);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
    </div>
  );
}

function Changed() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Side Effect
    console.log('Count:' + count);
  }, [count]);

  useEffect(() => {
    // Side Effect
    console.log('First:' + firstName);
    console.log('Last:' + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setFirstName('ณเดชณ์')}>First</button>
      <button onClick={() => setLastName('คูกิมิยะ')}>Last</button>
    </div>
  );
}

function Cleanup() {
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}
