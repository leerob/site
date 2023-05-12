import NextAuth from '@auth/nextjs';
import GitHubProvider from '@auth/core/providers/github';

export const { handlers, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
});
