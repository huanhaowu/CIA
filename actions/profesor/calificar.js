'use server'
const prisma = require('@/api/api.js')

export async function calificarEstudiante (data) {
  let resultado = false;
  try {
    const gradesToStore = data.map(item => {
      return {
        est_id: item.ESTUDIANTE_ID,
        calif_num: item.CALIFICACION,
        calif_letra: item.LETRA,
        seccion_id: item.SECCION_ID,
        prof_id: item.PROF_ID,
      };
    });

    if (item.CALIFICACION >= 70) {
      // Update estudiante_seccion and estudiante
      await prisma.estudiante_seccion.updateMany({
        where: {
          est_id: item.ESTUDIANTE_ID,
          seccion_id: item.SECCION_ID,
        },
        data: {
          aprobado: true,
        },
      });

      const asignatura = await prisma.asignatura.findUnique({
        where: {
          asignatura_clave: item.ASIGNATURA_CLAVE,
        },
      });

      await prisma.estudiante.update({
        where: {
          est_id: item.ESTUDIANTE_ID,
        },
        data: {
          creditos_aprobados: {
            increment: asignatura.creditos,
          },
        },
      });
    }

    await prisma.calificacion.createMany({
      data: gradesToStore,
      skipDuplicates: true
    });
    resultado = true;
    console.log("Grades stored successfully!");
  } catch (error) {
    console.error("Error storing grades:", error);
  }
  return resultado;
}


