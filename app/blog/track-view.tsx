'use client';

import { useEffect } from 'react';
import { registerView } from './actions';

export default function TrackView({ slug }: { slug: string }) {
  useEffect(() => {
    registerView(slug);
  }, []);

  return null;
}
