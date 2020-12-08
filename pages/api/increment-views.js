import db from '@/lib/db-admin';

const incrementViews = async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing "id" query parameter'
    });
  }

  const ref = db.ref('views').child(req.query.id);
  const { snapshot } = await ref.transaction((currentViews) => {
    if (currentViews === null) {
      return 1;
    }

    return currentViews + 1;
  });

  return res.status(200).json({
    total: snapshot.val()
  });
};

export default incrementViews;
