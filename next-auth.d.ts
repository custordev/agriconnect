import { Role } from "@prisma/client";
import "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
    phone: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      phone: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: Role;
    phone: string;
  }
}