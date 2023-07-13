'use server'
// Import the necessary Prisma models and functions
const prisma = require('@/api/api.js');
// ... your existing functions ...

// Function to retrieve and format the data for aulas
export async function getAllSecciones() {
  try {
    const secciones = await prisma.seccion.findMany();
    return secciones;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

