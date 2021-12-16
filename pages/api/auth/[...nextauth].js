import NextAuth from "next-auth"

// Providers
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Secret to hash token, sign/encrypt cookies
  secret: process.env.NEXT_AUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  // A bit of theming
  theme: {
    colorScheme: 'light',
    brandColor: '#f50057',
    logo: '/images/logos/roundnet-france.jpg'
  }
})