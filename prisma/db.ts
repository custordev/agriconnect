import { PrismaClient } from '@prisma/client';
/* eslint-disable no-var */


declare global {
  var prisma: PrismaClient | undefined;
}

const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
}

export default db;
