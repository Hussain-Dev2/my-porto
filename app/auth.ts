import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const config = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
} satisfies NextAuthConfig

export const { auth, handlers } = NextAuth(config) 