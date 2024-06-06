import React, { createContext, useState } from 'react';
import AppPage from './app';

interface AppContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

export default function UseContext() {
  const [username, setUsername] = useState('');
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ username, setUsername, count, setCount }}>
      <AppPage />
    </AppContext.Provider>
  );
}
