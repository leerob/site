import { useState, useEffect } from 'react';
import format from 'comma-number';

import loadDb from '@/lib/db';

export default function ViewCounter({ id }) {
  const [views, setViews] = useState('');

  useEffect(() => {
    const onViews = (newViews) => setViews(newViews.val());
    let db;

    const fetchData = async () => {
      db = await loadDb();
      db.child(id).on('value', onViews);
    };

    fetchData();

    return () => {
      if (db) {
        db.child(id).off('value', onViews);
      }
    };
  }, [id]);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

    registerView();
  }, [id]);

  return `${views ? format(views) : '–––'} views`;
}
