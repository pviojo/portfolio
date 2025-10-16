import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text', placeholder: 'Email...'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if (
          credentials?.email &&
          typeof credentials.email === 'string' &&
          credentials.email.toLowerCase() === 'pviojo@gmail.com' &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: '1',
            email: 'pviojo@gmail.com',
            name: 'Pablo Viojo',
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
});
