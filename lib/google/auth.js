import { google } from 'googleapis';

import { getDecryptedSecret } from './decret-secret';

const secret = getDecryptedSecret();

let googleAuth;
if (secret) {
  googleAuth = new google.auth.GoogleAuth({
  credentials: secret,
  scopes: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/youtube.readonly'
  ]
  });
} else {
  googleAuth = null;
}

export default googleAuth;
