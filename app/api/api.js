const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllItems(model) {
  return prisma[model].findMany();
}

async function getItemById(model, id) {
  return prisma[model].findUnique({ where: { id } });
}

async function deleteItem(model, id) {
  return prisma[model].delete({ where: { id } });
}

module.exports = {
  getAllItems,
  getItemById,
  deleteItem,
};
