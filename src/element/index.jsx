import React from 'react';
export function Hello() {
  return React.createElement('div', null, React.createElement('h1', null, 'Hello React'), React.createElement('p', null, 'This is paragraph'), React.createElement('button', null, 'Click Me'));
}
