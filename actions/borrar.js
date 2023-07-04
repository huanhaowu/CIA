'use server'
const prisma = require('../api/api.js')

async function deleteAllRecords() {
  try {
    await prisma.horario_seccion.deleteMany();
    console.log('All records deleted successfully.');
  } catch (error) {
    console.error('Error deleting records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllRecords();