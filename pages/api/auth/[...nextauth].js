import NextAuth from "next-auth";
import { getUser } from '../../../helpers/db/users';
import { getDocument } from '../../../helpers/db';
import { compare } from 'bcryptjs';

// Providers
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Secret to hash token, sign/encrypt cookies
  secret: process.env.NEXT_AUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jean@roundnetfrance.fr" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email } = credentials;

        // Connect to database and check if user exists (throw error db malfunction)
        let user;
        try {
          // user = await getUser({ email });
          user = await getDocument('users', { email });
        } catch (error) {
          console.log(error);
          throw new Error('Connexion à la base de données impossible');
        }

        if (user) {
          const checkPassword = await compare(credentials.password, user.password);
          //Incorrect password - send response
          if (!checkPassword) {
            return null;
          }
          // Any object returned will be saved in `user` property of the JWT
          if (!user.authorized) {
            throw new Error('Connexion impossible');
          }
          return user
        } else {
          // If you return null or false then the credentials will be rejected
          return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  callbacks: {
    // Called when a user is successfully authenticated
    async signIn({ account, user }) {
      // Everything is already authenticated, so we just need to sign in
      if (account.provider === 'credentials') {
        return true;
      }

      // For any other provider, we have to check if the user is in the database and authorized
      const userToLog = await getUser({ email: user.email });

      if (!userToLog) {
        return '/rf-admin/signup-oauth?email=' + user.email + '&name=' + user.name;
      }

      if (!userToLog.authorized) {
        return '/rf-admin/error?error=Connexion impossible.';
      }

      return true;
    },
    // Called when a user is successfully created
    async session({ session, token }) {
      // console.log('session', session);
      // console.log('token', token);

      // Get user id from the database
      // const user = await getUser({ email: session.user.email });
      // console.log('user', user);
      // Send properties to the client, like an access_token from a provider.
      return session
    }
  },
  // Custom pages
  pages: {
    error: '/rf-admin/error',
  },
  // A bit of theming
  theme: {
    colorScheme: 'light',
    brandColor: '#f50057',
    logo: '/images/logos/roundnet-france.jpg'
  }
})