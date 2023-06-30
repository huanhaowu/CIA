'use server'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to retrieve students by seccion_id
const getStudentsBySeccionId = async (seccionId) => {
  try {
    const students = await prisma.estudiante.findMany({
      where: {
        estudiantes_secciones: {
          some: {
            seccion_id: seccionId,
          },
        },
      },
    });

    return students;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};

// Usage example
const seccionId = 1; // Replace with the actual seccion_id you want to query
getStudentsBySeccionId(seccionId)
  .then((students) => {
    console.log(students);
    // Process the retrieved students
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });

module.exports = {
  getStudentsBySeccionId,
};