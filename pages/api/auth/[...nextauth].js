import NextAuth from "next-auth";
import { connectToDatabase } from '../../../lib/mongodb';

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
          const { db } = await connectToDatabase();
          user = await db.collection('users').findOne({ email });
        } catch (error) {
          throw new Error(error);
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          if (!user.authorized) {
            return null
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
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.plop = true
      return session
    }
  },
  // A bit of theming
  theme: {
    colorScheme: 'light',
    brandColor: '#f50057',
    logo: '/images/logos/roundnet-france.jpg'
  }
})