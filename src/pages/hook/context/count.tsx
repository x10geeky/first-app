import React, { useContext } from 'react';
import { AppContext } from '.';

export default function Count() {
  const { count } = useContext(AppContext)!;
  return <div>{'->' + count + '<-'}</div>;
}
