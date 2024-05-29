import React, { ReactNode } from 'react';

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  color?: string;
}

export function Title({ as, children, color }: Props) {
  return React.createElement(as, { style: { color: color } }, children);
}
