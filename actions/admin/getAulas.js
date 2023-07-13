'use server'
// Import the necessary Prisma models and functions
const prisma = require('@/api/api.js');
// ... your existing functions ...

// Function to retrieve and format the data for aulas
export async function getAllAulas() {
  try {
    const aulas = await prisma.aula.findMany();
    return aulas.map((aula) => ({
      CLAVE: aula.aula_clave,
      CAPACIDAD: aula.capacidad.toString(),
      FECHA: aula.fecha_reg.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      MOD: 'MOD',
      DEL: 'DEL',
    }));
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
