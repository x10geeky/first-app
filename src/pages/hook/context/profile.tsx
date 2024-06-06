import React, { useContext } from 'react';
import { AppContext } from '.';

export default function Profile() {
  return (
    <div>
      <User />
    </div>
  );
}

function User() {
  const { username } = useContext(AppContext)!;
  return <div>{'->' + username + '<-'}</div>;
}
