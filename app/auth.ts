import NextAuth from '@auth/nextjs';
import GitHub from '@auth/nextjs/providers/github';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  session: { strategy: 'jwt' },
});
