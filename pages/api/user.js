import session from '@/lib/session';

export default async function user(req, res) {
  session(req, res);

  if (req.method !== 'GET') {
    return res.send('Method not allowed.');
  }

  return res.json({ name: req.session.login });
}
