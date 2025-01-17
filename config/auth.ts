import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import db from "@/prisma/db";
import { Role } from "@prisma/client";

// Define the User type to match your Prisma model
interface UserType {
  id: string;
  name: string | null;
  phone: string;
  role: Role;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Phone Credentials",
      credentials: {
        phone: { label: "Phone", type: "tel", placeholder: "+1234567890" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<UserType | null> {
        try {
          if (!credentials?.phone || !credentials?.password) {
            return null;
          }

          const existingUser = await db.user.findUnique({
            where: { phone: credentials.phone },
          });

          if (!existingUser) {
            return null;
          }

          const passwordMatch = await compare(
            credentials.password,
            existingUser.password
          );

          if (!passwordMatch) {
            return null;
          }

          return {
            id: existingUser.id,
            name: existingUser.name,
            phone: existingUser.phone,
            role: existingUser.role,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.phone = user.phone;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.phone = token.phone;
        session.user.role = token.role;
      }
      return session;
    },
  },
};