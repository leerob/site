import {gunzipSync} from 'zlib';

import {google} from 'googleapis';

const decodedServiceAccount = gunzipSync(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64'));
const googleAuth = new google.auth.GoogleAuth({
    credentials: JSON.parse(decodedServiceAccount),
    scopes: ['https://www.googleapis.com/auth/analytics.readonly', 'https://www.googleapis.com/auth/youtube.readonly']
});

export default googleAuth;
