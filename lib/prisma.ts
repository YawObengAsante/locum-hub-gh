// import PrismaClient from '@prisma/client';

// const globalForPrisma = global as unknown as { prisma: Prisma }

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })