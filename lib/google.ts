import { google } from 'googleapis';

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly']
});

export default googleAuth;
