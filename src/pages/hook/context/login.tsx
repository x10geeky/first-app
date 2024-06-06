import React, { useContext } from 'react';
import { AppContext } from '.';

export default function Login() {
  const { setUsername } = useContext(AppContext)!;

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}
