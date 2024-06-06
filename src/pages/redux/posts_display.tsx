import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function PostsDisplay() {
  const state = useSelector((state: RootState) => state.post);

  return (
    <div>
      {state.posts.map((e) => (
        <div key={e.id}>
          <div>Title: {e.title}</div>
          <div>Body: {e.body}</div>
        </div>
      ))}
    </div>
  );
}
