'use server'
const prisma = require('@/api/api.js')

const getNextCalificacionId = async () => {
  const maxId = await prisma.calificacion.findFirst({
    select: {
      calificacion_id: true
    },
    orderBy: {
      calificacion_id: 'desc'
    }
  });

  if (maxId) {
    return maxId.calificacion_id + 1;
  } else {
    return 1;
  }
};

export async function calificarEstudiante(data, seccion_id, prof_id) {
  let resultado = false;
  try {
    console.log("Storing grades...");
    console.log(seccion_id);
    console.log(prof_id);
    console.log(data);

    const gradesToStore = await Promise.all(data.map(async item => {
      if (item.CALIFICACION >= 70) {
        // Update estudiante_seccion and estudiante
        await prisma.estudiante_seccion.updateMany({
          where: {
            est_id: item.ESTUDIANTE_ID,
            seccion_id: seccion_id,
          },
          data: {
            aprobado: true,
          },
        });

        const seccion = await prisma.seccion.findUnique({
          where: {
            seccion_id: seccion_id,
          },
        });

        const asignatura = await prisma.asignatura.findUnique({
          where: {
            asignatura_clave: seccion.asignatura_clave,
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

      return {
        calificacion_id: await getNextCalificacionId(),
        est_id: Number(item.ESTUDIANTE_ID),
        calif_num: Number(item.CALIFICACION),
        calif_letra: String(item.LETRA),
        seccion_id: Number(seccion_id),
        prof_id: Number(prof_id),
      };
    }));

    
    await prisma.calificacion.createMany({
      data: gradesToStore,
      skipDuplicates: true,
    });
    resultado = true;
    console.log("Grades stored successfully!");
  } catch (error) {
    console.error("Error storing grades:", error);
  }
  return resultado;
}
