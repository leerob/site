'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('sprite.svg', { as: 'image' });
  return null;
}
