/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */

import { SANITY_CONFIG } from '@/config';

// export const sC = sanityClient(SANITY_CONFIG);
import sanityClient from '@sanity/client';

export default sanityClient(SANITY_CONFIG);
