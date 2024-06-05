import React, { useEffect, useMemo, useState } from 'react';

export default function UseMemo() {
  const [id, setId] = useState(0);
  const [no, setNo] = useState(0);
  return (
    <div>
      <div>UseMemo</div>
      <UsMemo id={id} no={no} />
      <button onClick={() => setId((prev) => prev + 1)}>ID</button>
      <button onClick={() => setNo((prev) => prev + 1)}>No</button>
    </div>
  );
}

interface Props {
  id: number;
  no: number;
}

function NoMemo({ id, no }: Props) {
  console.log('complex calculation');
  let cal = 0;
  for (let i = 0; i < 100; i++) {
    cal += no;
  }

  useEffect(() => {
    console.log('active useEffect :' + cal);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [id, no]);

  return (
    <div>
      Child id:{id}, cal: {cal}
    </div>
  );
}

function UsMemo({ id, no }: Props) {
  const result = useMemo(() => {
    console.log('complex calculation');
    let cal = 0;
    for (let i = 0; i < 100; i++) {
      cal += no;
    }
    return cal;
  }, [no]);

  useEffect(() => {
    console.log('active useEffect :' + result);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [id, no]);

  return (
    <div>
      Child id:{id}, cal: {result}
    </div>
  );
}
