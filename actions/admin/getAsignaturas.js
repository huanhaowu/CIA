'use server'
// Import the necessary Prisma models and functions
const prisma = require('@/api/api.js');
// ... your existing functions ...

// Function to retrieve and format the data for aulas
export async function getAllAsignaturas() {
  try {
    const asignaturas = await prisma.asignatura.findMany();
    return asignaturas.map((asignatura) => ({
      CLAVE: asignatura.asignatura_clave,
      ASIGNATURA: asignatura.nombre,
      CREDITOS: asignatura.creditos,
      FECHA: asignatura.fecha_reg.toLocaleDateString('en-US', {
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
