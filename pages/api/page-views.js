import {google} from 'googleapis';

import googleAuth from '../../lib/google/auth';

export default async (req, res) => {
    const startDate = req.query.startDate;
    const auth = await googleAuth.getClient();
    const analytics = google.analytics({
        auth,
        version: 'v3'
    });

    const response = await analytics.data.ga.get({
        'end-date': 'today',
        ids: 'ga:187331021',
        metrics: 'ga:pageviews',
        'start-date': startDate
    });

    return res.status(200).json({
        pageViews: response.data.rows[0][0]
    });
};
