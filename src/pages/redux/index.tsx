import React from 'react';
import CounterDisplay from './counter_display';
import CounterController from './counter_controller';
import PostsDisplay from './posts_display';

export default function ReduxPage() {
  return (
    <div>
      <div>ReduxPage</div>
      <CounterDisplay />
      <CounterController />
      <PostsDisplay />
    </div>
  );
}
