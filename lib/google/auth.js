import { google } from 'googleapis';

import { getDecryptedSecret } from './decret-secret';

const googleAuth = new google.auth.GoogleAuth({
  credentials: getDecryptedSecret(),
  scopes: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/youtube.readonly'
  ]
});

export default googleAuth;
