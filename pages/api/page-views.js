import db from '../../lib/db-admin';

const pageViews = (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing "id" query parameter'
    });
  }

  const ref = db.ref('views').child(req.query.id);

  return ref.once('value', (snapshot) => {
    res.status(200).json({
      total: snapshot.val()
    });
  });
};

export default pageViews;
