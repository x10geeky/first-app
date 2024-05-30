import { useState } from 'react';

export function Post() {
  const [name, setName] = useState('Ant');
  const [message, setMessage] = useState('Empty');

  const updateMessage = () => {
    setName('Future');
    setMessage('Hello!' + name);
  };

  return (
    <div>
      <div>
        {message} and {name}
      </div>
      <button onClick={updateMessage}>Click Me!!</button>
    </div>
  );
}

export function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 3);
          setNumber((prev) => prev + 3);
          setNumber(number + 3);
        }}>
        +3
      </button>
    </div>
  );
}

export function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function onClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <div>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={onClick}>Buy</button>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let nextId = 0;

interface Artists {
  id: number;
  name: string;
}
export function StateList() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<Artists[]>([]);

  return (
    <div>
      <h1>Album</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          // const a = [1, 2];
          // [a, 4, 3] -> [[1, 2], 4, 3]
          // [...a, 4, 3] -> [1, 2, 4, 3]
          setArtists([...artists, { id: nextId++, name: name }]); // artists.push({ id: nextId++, name: name });
          // setArtists((prev) => [...prev, { id: nextId++, name: name }]);
        }}>
        Add
      </button>
      <ul>
        {artists.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
