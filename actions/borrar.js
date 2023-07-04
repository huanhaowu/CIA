'use server'
const prisma = require('../api/api.js')

async function deleteAllRecords() {
  try {
    await prisma.seccion.deleteMany();
    console.log('All records deleted successfully.');
  } catch (error) {
    console.error('Error deleting records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllRecords();