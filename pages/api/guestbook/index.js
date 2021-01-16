import redis from '@/lib/redis';
import session from '@/lib/session';

export default async (req, res) => {
  session(req, res);

  const { login, email } = req.session;

  if (req.method === 'GET') {
    const entries = (await redis.hvals('guestbook'))
      .map((entry) => JSON.parse(entry))
      .sort((a, b) => b.id - a.id);

    return res.json(entries);
  }

  if (req.method === 'POST') {
    if (!login) {
      return res.status(403).send('Unauthorized');
    }

    const id = Date.now();
    const newEntry = {
      id,
      email,
      updated_at: Date.now(),
      body: (req.body.body || '').slice(0, 500),
      created_by: login
    };

    await redis.hset('guestbook', id, JSON.stringify(newEntry));
    return res.status(200).json(newEntry);
  }

  return res.send('Method not allowed.');
};
