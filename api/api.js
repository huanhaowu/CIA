const { PrismaClient } = require('@prisma/client')

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient()
}

module.exports = globalThis.prisma
