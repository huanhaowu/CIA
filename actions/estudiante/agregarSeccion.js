'use server'
const prisma = require('../../api/api.js')

export async function addSeccionToEstudiante(estudianteId, seccionId) {
  try {
    const estudiante = await prisma.estudiante.findUnique({
      where: { est_id: estudianteId },
    });

    if (!estudiante) {
      throw new Error(`Estudiante no registrado`);
    }

    const seccion = await prisma.seccion.findUnique({
      where: { seccion_id: seccionId },
    });

    if (!seccion) {
      throw new Error(`Seccion no registrada`);
    }

    const existingEstudianteSeccion = await prisma.estudiante_seccion.findUnique({
      where: { est_id_seccion_id: { est_id: estudianteId, seccion_id: seccionId } },
    });


    if (existingEstudianteSeccion) {
      throw new Error(`Seccion ${seccionId} is already added to Estudiante ${estudianteId}.`);
    }

    await prisma.estudiante_seccion.create({
      data: {
        est_id: estudianteId,
        seccion_id: seccionId,
        aprobado: false, // Modify this value based on your requirements
      },
    });

    console.log(`Seccion ${seccionId} added to Estudiante ${estudianteId} successfully.`);
    return true;
  } catch (error) {
    console.error(error);
  }
}