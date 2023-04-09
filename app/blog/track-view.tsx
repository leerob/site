'use client';

import { useEffect } from 'react';

export default function TrackView({
  slug,
  registerView,
}: {
  slug: string;
  registerView: any;
}) {
  useEffect(() => {
    registerView(slug);
  }, []);

  return null;
}
