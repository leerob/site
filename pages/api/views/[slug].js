import db from '@/lib/firebase';

export default async (req, res) => {
  console.log({ env: process.env.NODE_ENV });
  console.log({ origin: req.headers.origin });

  if (
    process.env.NODE_ENV === 'production' &&
    req.headers.origin !== 'https://leerob.io'
  ) {
    return res.status(403).text('Unauthorized');
  }

  if (req.method === 'POST') {
    const ref = db.ref('views').child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val()
    });
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(req.query.slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
};
