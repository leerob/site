import redis from '@/lib/redis';
import session from '@/lib/session';

export default async (req, res) => {
  session(req, res);

  const { id } = req.query;
  const { login, email } = req.session;
  const entry = JSON.parse((await redis.hget('guestbook', id)) || 'null');

  if (req.method === 'GET') {
    const { email, ...restOfEntry } = entry;

    return res.json(restOfEntry);
  }

  if (req.method === 'DELETE') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    await redis.hdel('guestbook', id);
    return res.status(204).json({});
  }

  if (req.method === 'PUT') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    const updated = {
      id,
      email,
      updated_at: Date.now(),
      body: (req.body.body || '').slice(0, 500),
      created_by: login
    };

    await redis.hset('guestbook', id, JSON.stringify(updated));
    return res.status(201).json(updated);
  }

  return res.send('Method not allowed.');
};
