import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
//import InstagramProvider from "next-auth/providers/instagram";
// import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
    //   InstagramProvider({
    //     clientId: process.env.INSTAGRAM_CLIENT_ID,
    //     clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    //   }),
    
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
  
})

