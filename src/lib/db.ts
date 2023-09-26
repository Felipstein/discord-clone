import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

export const db =
  globalThis.prisma ||
  new PrismaClient(
    process.env.NODE_ENV === 'development' ? { log: ['query'] } : undefined,
  )

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
