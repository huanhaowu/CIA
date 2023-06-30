'use server'
const prisma = require('@/api/api.js')

const calificarEstudiante = async (estudianteId, seccionId, nota) => {
  try {
    const calificacion = await prisma.calificacion.create({
      data: {
        est_id: estudianteId,
        seccion_id: seccionId,
        calif_num: nota,
      },
    });

    return calificacion;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Usage example
const estudianteId = 1; // Replace with the actual student ID
const seccionId = 1; // Replace with the actual section ID
const grade = 85; // Replace with the actual grade

assignGrade(estudianteId, seccionId, grade)
  .then((calificacion) => {
    console.log('Grade assigned successfully:', calificacion);
  })
  .catch((error) => {
    console.error('Error assigning grade:', error);
  });


module.exports = {
  calificarEstudiante,
};
