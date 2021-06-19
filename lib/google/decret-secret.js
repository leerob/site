import crypto from 'crypto';

import { encrypted } from './service-account.enc';

export const getDecryptedSecret = () => {
  const algorithm = 'aes-128-cbc';
  let decipher;
  try {
    decipher = crypto.createDecipheriv(
      algorithm,
      process.env.GOOGLE_ENCRYPTION_KEY,
      process.env.GOOGLE_ENCRYPTION_IV
    );
  } catch (err) {  // Happens when someone hasn't set the environment vars
    return null; 
  }
  
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
};
